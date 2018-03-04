import todos, { getInitialState as getInitialTodos } from './todos';
import visibilityFilter, { getInitialState as getInitialFilter } from './visibility-filter';
import type { State, Action } from '../types';

const reduce = (state: State, action: Action): State => {
  if (!state) {
    return {
      todos: getInitialTodos(),
      visibilityFilter: getInitialFilter(),
    }
  }

  switch (action.category) {
    case 'todo':
      return {
        todos: todos(state.todos, action),
        visibilityFilter: state.visibilityFilter,
      }
    case 'visibility filter':
      return {
        todos: state.todos,
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      }
    default:
      (action: empty);
      return state;
  }
}

export default reduce;
