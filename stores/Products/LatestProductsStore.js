import { types } from 'mobx-state-tree';
import { normalize } from 'normalizr';
import Api from '../../api';
import { PAGE_SIZE } from '../../constants/produsts';
import { LatestProduct, LatestProductsCollection } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
// import { ProductModel } from './ProductModel';
// import { asyncModel } from '../utils';
// import { LatestProductCollection } from '../schemas';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(types.safeReference(ProductModel)),
    hasNoMore: false,
    fetchLatest: asyncModel(fetchLatest),
    fetchMore: asyncModel(fetchMore, false),
    createProduct: asyncModel(createProduct),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
    setHasNoMore(isHasNoMore) {
      store.hasNoMore = isHasNoMore;
    },
    append(items) {
      if (!Array.isArray(items)) {
        items = [items];
      }
      store.items.push(...items);
    },
  }))
  .views((self) => ({
    get products() {
      return self.items.slice();
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flow, store, Root) {
    store.setHasNoMore(false);
    const res = await Api.Products.fetchLatest();

    const result = flow.merge(res.data, LatestProductsCollection);

    store.setHasNoMore(res.data.length < PAGE_SIZE);

    store.setItems(result);

    const ids = res.data.map((item) => {
      Root.entities.produsts.add(item.id, item);
      return item.id;
    });
    store.setItems(ids);
  };
}

function fetchMore() {
  return async function fetchMoreFlow(flow, store) {
    if (
      store.fetchLatest.isLoading ||
      flow.isLoading ||
      store.hasNoMore ||
      store.items.length === 0
    ) {
      return;
    }
    try {
      flow.start();
      const from = store.items[store.items.length - 1];

      const res = await Api.Products.fetchMore({
        from: from.id,
        limit: PAGE_SIZE,
      });
      const result = flow.merge(res.data, LatestProductsCollection);

      if (res.data.length < PAGE_SIZE) {
        store.setHasNoMore(true);
      }

      store.append(result);

      flow.success();
    } catch (err) {
      flow.error();
      console.log(err);
    }
  };
}

function createProduct(body) {
  return async function createProductFlow(flow, store) {
    try {
      const res = await Api.Products.postProduct(body);
      console.log(res);
      store.fetchLatest.run();
    } catch (err) {
      console.log(err);
    }
  };
}
