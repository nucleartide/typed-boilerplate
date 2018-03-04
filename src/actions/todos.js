import type { Text, AddTodo, ToggleTodo } from '../types/todo';
import type { Id } from '../utils/uuid';
import uuid from '../utils/uuid';

export const addTodo = (text: Text): AddTodo => ({
  category: 'todo',
  type: 'add',
  id: uuid(),
  text,
});

export const toggleTodo = (id: Id): ToggleTodo => ({
  category: 'todo',
  type: 'toggle',
  id,
});
