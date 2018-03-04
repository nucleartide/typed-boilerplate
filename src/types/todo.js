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
  category: 'todo',
  type: 'add',
  +id: Id,
  +text: Text,
|};

export type ToggleTodo = {|
  category: 'todo',
  type: 'toggle',
  +id: Id,
|};

export type TodosAction =
  | ReduxInit
  | AddTodo
  | ToggleTodo
  ;
