import { createCollection, asyncModel } from '../utils';
import { ChatModel } from './ChatModel';

export const ChatsCollection = createCollection(ChatModel);
