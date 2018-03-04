import type { ReduxInit } from '../types/redux-init';

export const reduxInit = (): ReduxInit => ({
  type: '@@INIT',
});
