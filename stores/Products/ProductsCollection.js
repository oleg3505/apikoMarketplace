import { normalize } from 'normalizr';
import Api from '../../api';
import { useStore } from '../CreateStore';
import { Product } from '../schemas';
import { createCollection, asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
  //   productById: suspenseModel(productById),
});

export function useProductCollection() {
  const store = useStore;
  return store.entities.products;
}

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    const res = await Api.Products.fetchLatest();

    flow.merge(res.data, Product);
  };
}

// function productById(id) {
//   return (flow, store) => {
//     if (store.get(id)) {
//       return store.get(id);
//     }

//     return async () => {
//       const res = await Api.Products.getById(id);
//       store.add(res.data.id, res.data);
//     };
//   };
// }
