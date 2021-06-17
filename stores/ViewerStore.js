import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(types.safeReference(UserModel)),
    userModel: types.maybe(UserModel),
  })
  .actions((store) => ({
    setViewer(user) {
      store.userModel = user;
      store.user = user.id;
      console.log({ store });
    },
  }))
  .views((store) => ({
    get isLoggedIn() {
      console.log(store);
      return !!store.user;
    },
  }));
