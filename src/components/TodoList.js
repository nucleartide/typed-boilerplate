import type { Todos } from '../types/todo';
import type { Id } from '../utils/uuid';
import Todo from './Todo';

type Props = {
  todos: Todos,
  onTodoClick: (id: Id) => void,
};

// <TodoList> displays a list of todos.
const TodoList = (p: Props) => (
  <ul className="TodoList">
    {p.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => p.onTodoClick(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
