import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';
import Api from '../api';
import { AuthStore } from './Auth/AuthStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
// import { UserModel } from './UserModel';
import { ViewerStore } from './ViewerStore';
import { EntitiesStore } from './EntitiesStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = await SecureStore.getItemAsync('__token');
        if (!token) {
          return;
        }

        Api.Auth.setToken(token);

        const res = await Api.Account.getUser(token);
        store.viewer.setViewer(res.data);
        store.auth.setIsLoggedIn(true);
      } catch (err) {
        alert(err);
      }
    },
  }));
