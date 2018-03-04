type Props = {
  onClick: () => void,
  completed: boolean,
  text: string,
};

const Todo = (p: Props) => (
  <li
    onClick={p.onClick}
    style={{ textDecoration: p.completed ? 'line-through' : 'none' }}
  >
    {p.text}
  </li>
);

export default Todo;
