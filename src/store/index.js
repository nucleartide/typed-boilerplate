import reduce from '../reducers';
import { createStore } from 'redux';
import type { Store } from '../types';

const store: Store = createStore(
  reduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
