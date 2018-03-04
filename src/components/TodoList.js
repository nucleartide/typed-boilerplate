import type { Todos as Model } from '../types/todos';
import type { Identifier } from '../types/identifier';
import Todo from './Todo';

type Props = {
  todos: Model,
  onTodoClick: (Identifier) => void,
};

const TodoList = (p: Props) => (
  <ul>
  {p.todos.map(todo =>
    <Todo
      key={todo.id}
      {...todo}
      onClick={() => p.onTodoClick(todo.id)}
    />
  )}
  </ul>
);

export default TodoList;
