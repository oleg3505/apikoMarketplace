import { types } from 'mobx-state-tree';
import { normalize } from 'normalizr';
import { add } from 'react-native-reanimated';
import { ChatsCollection } from './Chats/ChatsCollection';
import { MessagesCollection } from './Chats/MessagesCollection';

import { ProductsCollection } from './Products/ProductsCollection';
import { UsersCollection } from './Users/UsersCollection';

export const EntitiesStore = types
  .model('EntitiesStore', {
    products: ProductsCollection,
    users: UsersCollection,
    chats: ChatsCollection,
    messages: MessagesCollection,
  })
  .actions((store) => ({
    merge(entities) {
      Object.keys(entities).forEach((collectionName) => {
        const collectionEntities = entities[collectionName];

        Object.keys(collectionEntities).forEach((id) => {
          const value = collectionEntities[id];
          store[collectionName].add(id, value);
        });
      });
    },
    normalize(items, schema) {
      const { result, entities } = normalize(items, schema);
      store.merge(entities);
      return result;
    },
  }));
