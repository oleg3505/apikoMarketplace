import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';
import Api, { SocketApi } from '../api';
import { AuthStore } from './Auth/AuthStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
// import { UserModel } from './UserModel';
import { ViewerStore } from './ViewerStore';
import { EntitiesStore } from './EntitiesStore';
import { ChatStore } from './Chats/ChatStore';
import { OwnProducts } from './Products/OwnProductsStore';
import { SavedProducts } from './Products/SavedProductsStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    ownProducts: types.optional(OwnProducts, {}),
    savedProducts: types.optional(SavedProducts, {}),
    chats: types.optional(ChatStore, {}),
    entities: types.optional(EntitiesStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = await SecureStore.getItemAsync('__token');
        if (!token) {
          return;
        }

        Api.Auth.setToken(token);

        SocketApi.init(token);

        const res = await Api.Account.getUser(token);
        store.viewer.setViewer(res.data);
        store.auth.setIsLoggedIn(true);
      } catch (err) {
        alert(err);
      }
    },
    subscribeToEvents() {
      SocketApi.handleMessages((message) => {
        store.chats.handleMessage(message);
      });
    },
  }));
