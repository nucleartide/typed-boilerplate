import type {
  VisibilityFilterAction as Action,
  VisibilityFilter as Filter,
} from '../types/visibility-filter';

export const setVisibilityFilter = (f: Filter): Action => ({
  category: 'visibility filter',
  type: 'set value',
  filter: f,
});
