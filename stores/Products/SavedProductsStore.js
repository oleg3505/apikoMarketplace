import { types } from 'mobx-state-tree';
import Api from '../../api';
import { LatestProductsCollection, OwnProductsCollection } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const SavedProducts = types
  .model('SavedProductsStore', {
    items: types.array(types.safeReference(types.late(() => ProductModel))),
    fetchSavedProducts: asyncModel(fetchSavedProducts),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchSavedProducts() {
  return async function fetchSavedProductsFlow(flow, store, root) {
    try {
      flow.start();

      const res = await Api.Products.fetchSavedProducts();
      // console.log(res.data);
      const result = flow.merge(res.data, LatestProductsCollection);

      store.setItems(result);
      flow.success();
    } catch (err) {
      console.log(err);
    }
  };
}
