import type { Id } from '../utils/uuid';

// Types.
export type Text = string;
export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean,
};
export type Todos = Array<Todo>;

// State.
export type TodosState = {
  +todos: Todos,
};

export type AddTodo = {| category: 'todo', type: 'add', +id: Id, +text: Text |};
export type ToggleTodo = {| category: 'todo', type: 'toggle', +id: Id |};

// Action.
export type TodosAction =
  | AddTodo
  | ToggleTodo
