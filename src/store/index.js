import { combineReducers, createStore } from 'redux';
import todos from './todos';

const reduce = combineReducers({
  todos,
});

export default createStore(reduce);
