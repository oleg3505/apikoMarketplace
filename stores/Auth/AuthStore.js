import { getRoot, types } from 'mobx-state-tree';
import Api from '../../api';
import { asyncModel } from '../utils';
import * as SecureStore from 'expo-secure-store';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(login),
    register: asyncModel(register),
    isLoggedIn: false,
  })
  .actions((store) => ({
    setIsLoggedIn(value) {
      store.isLoggedIn = value;
    },
    logout() {
      store.isLoggedIn = false;
      Api.Auth.logout();
    },
  }));

function login({ password, email }) {
  return async function loginFlow(flow) {
    try {
      flow.start();
      const rootStore = getRoot(flow);
      const res = await Api.Auth.login({ password, email });
      const { token, user } = res.data;
      Api.Auth.setToken(token);
      rootStore.viewer.setViewer(user);

      flow.success();
    } catch (err) {
      flow.error(err);
      throw err;
    }
  };
}

function register({ password, email }) {
  return async function registerFlow(flow) {
    try {
      flow.start();
      const rootStore = getRoot(flow);

      const res = await Api.Auth.register({ password, email });

      const { token, user } = res.data;
      Api.Auth.setToken(token);
      rootStore.viewer.setViewer(user);

      flow.success();
    } catch (err) {
      flow.error(err);
      throw err;
    }
  };
}
