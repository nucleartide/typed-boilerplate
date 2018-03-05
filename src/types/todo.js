import type { Id } from '../utils/uuid';
import type { ReduxInit } from './redux-init';

/**
 * Domain models.
 */

export type Text = string;

export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean,
};

export type Todos = Array<Todo>;

/**
 * Actions.
 */

export type AddTodo = {|
  type: 'add todo',
  +id: Id,
  +text: Text,
|};

export type ToggleTodo = {|
  type: 'toggle todo',
  +id: Id,
|};

export type TodosAction =
  | ReduxInit
  | AddTodo
  | ToggleTodo
  ;
