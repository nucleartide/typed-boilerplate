// Types.
export type VisibilityFilter =
  | 'show all'
  | 'show active'
  | 'show completed'
  ;

// State.
export type VisibilityFilterState = {
  +visibilityFilter: VisibilityFilter,
};

// Action.
export type VisibilityFilterAction = {
  category: 'visibility filter',
  type: 'set value',
  +filter: VisibilityFilter,
};
