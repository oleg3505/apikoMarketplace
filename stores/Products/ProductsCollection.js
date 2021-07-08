import { normalize } from 'normalizr';
import Api from '../../api';
import { useStore } from '../CreateStore';
import { Product } from '../schemas';
import { createCollection, asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

export function useProductCollection() {
  const store = useStore();
  return store.entities.products;
}

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    const res = await Api.Products.getById(id);
    // console.log(res.data);

    flow.merge(res.data, Product);
  };
}
