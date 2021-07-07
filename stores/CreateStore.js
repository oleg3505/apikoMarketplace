import { RootStore } from './RootStore';
import { createContext } from 'react';
import { useContext } from 'react';
import createPersist from './utils';
// import makeInspectable from 'mobx-devtools-mst';
// import { connectToDevTools } from 'mobx-devtools/lib/mobxDevtoolsBackend';

// connectToDevTools({ host: 'localhost', port: '19002' });

export function createStore() {
  const root = RootStore.create();

  // const persistor = createPersist(root)

  // persistor.rehydrate()
  // makeInspectable(root);

  return root;
}

const MSTContext = createContext(null);

export const Provider = MSTContext.Provider;

export function useStore(mapStateToProps) {
  const store = useContext(MSTContext);
  if (mapStateToProps === 'function') {
    return mapStateToProps(store);
  }
  return store;
}
