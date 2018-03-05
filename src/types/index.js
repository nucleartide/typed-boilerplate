import type { ReduxInit } from './redux-init';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Channels, ChannelAction } from './channel';

export type State = {
  +channels: Channels,
};

export type Action =
  | ReduxInit
  | ChannelAction
  ;

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>;
