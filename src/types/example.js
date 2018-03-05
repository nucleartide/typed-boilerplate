import type { ReduxInit } from './redux-init';

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
  type: 'set filter',
  +filter: VisibilityFilter,
};

export type VisibilityFilterAction =
  | ReduxInit
  | SetFilter
  ;
