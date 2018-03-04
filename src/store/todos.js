import type { Todo } from '../types/todo';

/**
 * Utils.
 */

const uuid = (() => {
  let id = 1;
  return () => id++;
})();

/**
 * State.
 */

type State = Array<Todo>;

/**
 * Action.
 */

type AddTodo = {
  type: 'add todo',
  text: string,
};

type ToggleTodo = {
  type: 'toggle todo',
  id: number,
  text: string,
};

type Action =
  | AddTodo
  | ToggleTodo
  ;

/**
 * Reduce.
 */

const reduce = (s: State = [], a: Action): State => {
  switch (a.type) {

  case 'add todo':
    const todo = {
      id: uuid(),
      text: a.text,
      completed: false,
    };
    return [...s, todo];

  case 'toggle todo':
    const { id } = a;
    return s.map(todo => todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
    );

  default:
    (a: empty);
    return s;
  }
};

/**
 * Export.
 */

export default reduce;
