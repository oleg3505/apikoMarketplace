import { getRoot, getSnapshot, types } from 'mobx-state-tree';
import Api from '../../api';
import { ChatSchema } from '../schemas';
import { UserModel } from '../UserModel';
import { asyncModel } from '../utils';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.number,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.maybe(types.string),
    price: types.number,
    saved: types.optional(types.boolean, false),
    createAt: types.maybe(types.string),
    updateAt: types.maybe(types.string),
    chatId: types.maybeNull(types.number),
    owner: types.maybe(types.safeReference(UserModel)),

    createChat: asyncModel(createChat),
  })
  .actions((store) => ({
    fetchOwner() {
      getRoot(store).entities.users.getUser.run(store.ownerId);

      store.owner = store.ownerId;
    },
    setChatId(id) {
      store.chatId = id;
    },
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;
    try {
      flow.start();
      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;
      store.setChatId(chatId);

      res.data.participants = [getSnapshot(store.owner)];
      flow.merge(res.data, ChatSchema);

      flow.success();
    } catch (err) {
      flow.error(err);
      console.log(err);
      throw err;
    }
  };
}
