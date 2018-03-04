import type { Todo as Model } from '../types/Todo';

type Props = Model & {
  onClick: () => void,
};

const Todo = (p: Props) => (
  <li
    onClick={p.onClick}
    style={{
      textDecoration: p.completed ? 'line-through' : 'none'
    }}
  >
    {p.text}
  </li>
);

export default Todo;
