import {
  applySnapshot,
  flow,
  getParent,
  getRoot,
  onSnapshot,
  types,
} from 'mobx-state-tree';
import { normalize } from 'normalizr';
import * as SecureStore from 'expo-secure-store';

export function asyncModel(thunk) {
  const model = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
    })
    .actions((store) => ({
      start() {
        store.isLoading = true;
        store.isError = false;
      },

      success() {
        store.isLoading = false;
      },

      error() {
        store.isLoading = false;
        store.isError = true;
      },

      run(...arg) {
        const promise = thunk(...arg)(store, getParent(store), getRoot(store));
        return promise;
      },

      merge(data, scheme) {
        const { result, entities } = normalize(data, scheme);

        getRoot(store).entities.merge(entities);

        return result;
      },
    }));
  return types.optional(model, {});
}

function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    SecureStore.setItemAsync(
      '__persist',
      JSON.stringify({
        auth: {
          isLoggedIn: snapshot.auth.isLoggedIn,
        },
        viewer: {
          user: snapshot.viewer.user,
        },
      }),
    );
  });
}

export function createCollection(ofModel, asyncModels = {}) {
  const collection = types
    .model('collectionModel', {
      collection: types.map(ofModel),
      ...asyncModels,
    })
    .actions((store) => ({
      add(key, value) {
        store.collection.set(String(key), value);
      },
    }));
  return types.optional(collection, {});
}

// function rehydrate() {
//   const snapshot = SecureStore.getItemAsync('__persist');
//   if (snapshot) {
//     applySnapshot(store, JSON.parse(snapshot));
//   }
// }
// return {
//   rehydrate,
// };

export default createPersist;
