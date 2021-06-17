import { types } from 'mobx-state-tree';
import { UserModel } from '../UserModel';

export const ProductModel = types.model('ProductModel', {
  id: types.identifierNumber,
  ownerId: types.number,
  title: types.string,
  description: types.maybeNull(types.string),
  photos: types.maybeNull(types.array(types.string)),
  location: types.string,
  price: types.number,
  saved: types.optional(types.boolean, false),
  createAt: types.maybe(types.string),
  updateAt: types.maybe(types.string),
  owner: types.maybe(types.reference(UserModel)),
});
