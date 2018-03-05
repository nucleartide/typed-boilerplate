/*
import todos from './todos';
import visibilityFilter from './visibility-filter';
*/
import { reduxInit } from '../actions/redux-init';
import type { State, Action } from '../types';

const initialState = () => ({
  /*
  todos: todos(undefined, reduxInit()),
  visibilityFilter: visibilityFilter(undefined, reduxInit()),
  */
});

const reduce = (
  state: State = initialState(),
  action: Action
): State => {
  switch (action.type) {

  case '@@INIT':
    return state;

  /*
  case 'add todo':
  case 'toggle todo':
    return {
      todos: todos(state.todos, action),
      visibilityFilter: state.visibilityFilter,
    }

  case 'set filter':
    return {
      todos: state.todos,
      visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
  */

  default:
    (action: empty);
    return state;
  }
}

export default reduce;
