import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch
} from 'redux';
import type {
  // TodosState,
  Todos,
  TodosAction,
} from './todo';
import type {
  // VisibilityFilterState,
  VisibilityFilter,
  VisibilityFilterAction,
} from './visibility-filter';

export type State = {|
  +todos: Todos,
  +visibilityFilter: VisibilityFilter,
|};

export type Action =
  | TodosAction
  | VisibilityFilterAction
  ;

export type Store =
  ReduxStore<State, Action>

export type Dispatch =
  ReduxDispatch<Action>;
