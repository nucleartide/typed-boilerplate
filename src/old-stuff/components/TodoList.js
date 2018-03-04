const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
      />
    )}
  </ul>
);

export default TodoList;
