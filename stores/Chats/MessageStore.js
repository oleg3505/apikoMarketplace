import { getParent, getRoot, types } from 'mobx-state-tree';
import Api from '../../api';
import { MessageCollectionSchema, MessagesSchema } from '../schemas';
import { asyncModel } from '../utils';
import { MessageModel } from './MessageModel';
import { MessagesCollection } from './MessagesCollection';

export const MessageStore = types
  .model('MessageStore', {
    items: types.array(types.reference(MessageModel)),

    fetch: asyncModel(fetchMessages),
  })
  .views((store) => ({
    get asList() {
      return store.items.slice().reverse();
    },
    get chatId() {
      return getParent(store).id;
    },
  }))
  .actions((store) => ({
    addMessage(message) {
      const result = getRoot(store).entities.normalize(message, MessagesSchema);
      store.items.unshift(result);
    },
  }));

function fetchMessages() {
  return async function fetchMessagesFlow(flow, store) {
    const res = await Api.Chats.getMessages(store.chatId);
    const result = flow.merge(res.data, MessageCollectionSchema);

    store.runInAction((self) => {
      self.items = result;
    });
  };
}
