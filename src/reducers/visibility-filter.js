import type {
  VisibilityFilter as Filter,
  VisibilityFilterAction as Action,
} from '../types/visibility-filter';

const reduce = (
  state: Filter = 'show all',
  action: Action
): Filter => {
  switch (action.type) {

  case '@@INIT':
    return state;

  case 'set filter':
    return action.filter;

  default:
    (action: empty);
    return state;
  }
}

export default reduce;
