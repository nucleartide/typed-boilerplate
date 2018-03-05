import type { ReduxInit } from './redux-init';

/**
 * Domain models.
 */

export type Channel = {
  +selected: boolean,
  +name: string,
  +id: number,
};

export type Channels = Array<Channel>;

/**
 * Actions.
 */

export type SelectChannel = {
  type: 'select channel',
  +id: number,
};

export type AddChannel = {
  type: 'add channel',
  +name: string,
};

export type UpdateChannel = {
  type: 'update channel',
  +name: string,
  +id: number,
};

export type ChannelAction =
  | ReduxInit
  | SelectChannel
  | AddChannel
  | UpdateChannel
  ;
