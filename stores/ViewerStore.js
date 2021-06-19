import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(types.safeReference(UserModel)),
    userModel: types.maybeNull(UserModel),
  })
  .actions((store) => ({
    setViewer(user) {
      store.userModel = user;
      store.user = user.id;
    },
    logOut() {
      store.userModel = null;
    },
  }))
  .views((store) => ({
    get isLoggedIn() {
      return !!store.userModel;
    },
  }));
