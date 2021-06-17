import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';

export const TokenModel = types.model('tTokenModel', {
  token: types.string,
  user: types.maybe(UserModel),
});
