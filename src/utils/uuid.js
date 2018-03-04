export type Id = number;

let id: Id = 1;
const uuid = (): Id => id++;

export default uuid;
