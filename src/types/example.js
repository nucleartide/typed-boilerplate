
/**
 * Domain models.
 */

export type VisibilityFilter =
  | 'show all'
  | 'show active'
  | 'show completed'
  ;

/**
 * Actions.
 */

export type SetFilter = {
  category: 'visibility filter',
  type: 'set value',
  +filter: VisibilityFilter,
};

export type VisibilityFilterAction =
  | SetFilter
  ;
