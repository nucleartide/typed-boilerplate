import type {
  VisibilityFilterAction as Action,
  VisibilityFilter as Filter,
} from '../types/visibility-filter';

export const setVisibilityFilter = (f: Filter): Action => ({
  type: 'set filter',
  filter: f,
});
