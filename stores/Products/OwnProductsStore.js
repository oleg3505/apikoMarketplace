import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const OwnProducts = types.model('OwnProductsStore', {
  items: types.array(types.reference(types.late(() => ProductModel))),
  fetch: asyncModel(fetchOwnProducts),
});

function fetchOwnProducts() {
  return async function fetchOwnProductsFlow(flow, store) {};
}
