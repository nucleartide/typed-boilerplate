import type { Todo as Model } from '../types/todo';

type Props = Todo & {
  onClick: () => void,
};

// <Todo> displays a todo item. It can be crossed out.
const Todo = (p: Props) => (
  <li
    className="Todo"
    onClick={p.onClick}
    style={{
      textDecoration: p.completed ? 'line-through' : 'none',
    }}
  >
    {p.text}
  </li>
)

export default Todo;
