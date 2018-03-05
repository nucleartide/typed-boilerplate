import type { Todos, TodosAction } from '../types/todo';

const todos = (
  state: Todos = [],
  action: TodosAction
): Todos => {
  switch (action.type) {

  case '@@INIT':
    return state;

  case 'add todo':
    return [...state, {
      id: action.id,
      text: action.text,
      completed: false
    }];

  case 'toggle todo':
    const { id } = action;
    return state.map(todo => todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
    );

  default:
    (action: empty);
    return state;
  }
};

export default todos;
