import { getRoot, types } from 'mobx-state-tree';
import Api from '../../api';
import { ProductModel } from '../Products/ProductModel';
import { MessagesSchema } from '../schemas';
import { UserModel } from '../UserModel';
import { asyncModel } from '../utils';
import { MessageModel } from './MessageModel';
import { MessageStore } from './MessageStore';

export const ChatModel = types
  .model('Chat', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.number,
    createdAt: types.string,
    updatedAt: types.string,
    message: types.reference(MessageModel),
    messages: types.optional(MessageStore, {}),
    product: types.reference(ProductModel),
    participants: types.array(types.reference(UserModel)),
    user: types.reference(UserModel),
    sendMessage: asyncModel(sendMessage),
  })

  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    product: snapshot.product || snapshot.productId,
    participants: undefined,
    user: snapshot.participants[0],
  }));

function sendMessage(text) {
  return async function sendMessageFlow(flow, store) {
    const res = await Api.Chats.sendMessage(store.id, text);
    // store.messages.addMessage(res.data);
    const result = flow.merge(res.data, MessagesSchema);
  };
}
