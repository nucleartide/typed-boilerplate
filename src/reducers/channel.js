import type {
  ChannelAction,
  Channels,
} from '../types/channel';
import uuid from '../utils/uuid';

const channels = (
  state: Channels = [],
  action: ChannelAction,
): Channels => {
  switch (action.type) {

  case '@@INIT':
    return state;

  case 'add channel':
    return [...state, {
      selected: false,
      name: action.name,
      id: uuid(),
    }];

  case 'select channel': {
    const { id } = action;
    return state.map(channel => (channel.id === id
      ? { ...channel, selected: true }
      : { ...channel, selected: false }
    ));
  }

  case 'update channel': {
    const { id, name } = action;
    return state.map(channel => (channel.id === id
      ? { ...channel, name }
      : channel
    ));
  }

  default:
    (action: empty);
    return state;
  }
};

export default channels;
