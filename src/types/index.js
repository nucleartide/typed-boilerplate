import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Todos, TodosAction } from './todo';
import type { VisibilityFilter, VisibilityFilterAction } from './visibility-filter';

export type State = {|
  +todos: Todos,
  +visibilityFilter: VisibilityFilter,
|};

export type Action =
  | TodosAction
  | VisibilityFilterAction
  ;

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>;
