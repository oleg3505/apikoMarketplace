import { types } from 'mobx-state-tree';
import Api from '../../api';
import { OwnProductsCollection } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const OwnProducts = types
  .model('OwnProductsStore', {
    items: types.array(types.reference(types.late(() => ProductModel))),
    fetchOwnProducts: asyncModel(fetchOwnProducts),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchOwnProducts(id) {
  return async function fetchOwnProductsFlow(flow, store) {
    try {
      const res = await Api.Products.fetchOwnProducts(+id);
      console.log('111', res.data);
      // const result = flow.merge(res.data.id, OwnProductsCollection);
      // console.log(result);

      store.items.push(...res.data);
      console.log('123', store.items);
    } catch (err) {
      console.log(err);
    }
  };
}
