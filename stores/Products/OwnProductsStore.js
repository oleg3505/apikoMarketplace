import { types } from 'mobx-state-tree';
import Api from '../../api';
import { LatestProductsCollection, OwnProductsCollection } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const OwnProducts = types
  .model('OwnProductsStore', {
    items: types.array(types.safeReference(types.late(() => ProductModel))),
    fetchOwnProducts: asyncModel(fetchOwnProducts),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchOwnProducts() {
  return async function fetchOwnProductsFlow(flow, store, root) {
    try {
      flow.start();
      const { viewer } = root;

      const res = await Api.Products.fetchOwnProducts(viewer.userModel.id);
      // console.log(res.data);
      const result = flow.merge(res.data.list, LatestProductsCollection);
      console.log(result);

      store.setItems(result);
      flow.success();
    } catch (err) {
      console.log(err);
    }
  };
}
