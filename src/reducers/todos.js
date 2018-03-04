import type { Todos, TodosAction } from '../types/todo';

export const getInitialState = () => [];

const todos = (
  state: Todos = getInitialState(),
  action: TodosAction
): Todos => {
  switch (action.type) {

    case 'add':
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      };
      return [...state, newTodo];

    case 'toggle':
      return state.map(todo => todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo
      );

    default:
      (action: empty);
      return state;
  }
};

export default todos;
