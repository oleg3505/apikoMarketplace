import Api from '../../api';
import { useStore } from '../CreateStore';
import { UserModel } from '../UserModel';
import { createCollection, asyncModel } from '../utils';

export const UsersCollection = createCollection(UserModel, {
  getUser: asyncModel(getUser),
});

// export function useUsersCollection() {
//   const store = useStore;
//   return store.entities.users;
// }

function getUser(id) {
  return async function getUserFlow(flow, store) {
    const res = await Api.Account.getUserById(id);
    store.add(res.data.id, {
      ...res.data,
      owner: res.data.owner,
    });
  };
}
