import type { Identifier } from './identifier';

export type Todo = {
  id: Identifier,
  text: string,
  completed: boolean,
};
