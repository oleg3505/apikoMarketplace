import { schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', {
  owner: User,
});
export const LatestProduct = new schema.Entity('products');
export const LatestProductsCollection = [LatestProduct];
export const OwnProducts = [LatestProduct];
export const MessagesSchema = new schema.Entity('messages');
export const MessageCollectionSchema = [MessagesSchema];
export const ChatSchema = new schema.Entity('chats', {
  message: MessagesSchema,
  product: Product,
  participants: [User],
});
export const ChatCollectionShema = [ChatSchema];
