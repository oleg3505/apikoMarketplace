import { types } from 'mobx-state-tree';
import Api from '../../api';
import { ChatCollectionShema, ChatSchema } from '../schemas';
import { ChatModel } from './ChatModel';
import { asyncModel } from '../utils';

export const ChatStore = types
  .model('Chat', {
    items: types.array(types.safeReference(ChatModel)),
    fetch: asyncModel(fetchChats),
  })
  .actions((store) => ({
    runInAction(cb) {
      cb(store);
    },
    handleMessage(message) {
      if (message.type === 'ADD') {
        const chat = store.getById(message.message.chatId);
        if (typeof chat === undefined) {
          chat.messages.addMessage(message.message);
        }
      }
    },
  }))
  .views((store) => ({
    getById(id) {
      return store.items.find((i) => i.id === id);
    },
  }));

function fetchChats() {
  return async function fetchChatsFlow(flow, store) {
    const res = await Api.Chats.getList();
    const result = flow.merge(res.data, ChatCollectionShema);

    store.runInAction((self) => {
      self.items = result;
    });
  };
}
