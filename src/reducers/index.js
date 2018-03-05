import channels from './channel';
import { reduxInit } from '../actions/redux-init';
import type { State, Action } from '../types';

const initialState = () => ({
  channels: channels(undefined, reduxInit()),
});

const reduce = (
  state: State = initialState(),
  action: Action
): State => {
  switch (action.type) {

  case '@@INIT':
    return state;

  case 'select channel':
  case 'add channel':
  case 'update channel':
    return {
      channels: channels(state.channels, action),
    };

  default:
    (action: empty);
    return state;
  }
}

export default reduce;
