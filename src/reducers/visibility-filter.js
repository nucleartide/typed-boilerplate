import type { VisibilityFilter, VisibilityFilterAction } from '../types/visibility-filter';

export const getInitialState = () => 'show all';

const reduce = (
  state: VisibilityFilter = getInitialState(),
  action: VisibilityFilterAction
): VisibilityFilter => {
  switch (action.type) {
    case 'set value':
      return action.filter;
    default:
      (action: empty);
      return state;
  }
}

export default reduce;
