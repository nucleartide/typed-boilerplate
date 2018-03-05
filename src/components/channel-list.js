import type { Channels } from '../types/channel';
import ChannelItem from './channel-item';

type Props = {
  channels: Channels,
  onChannelClick: (id: number) => void,
};

const ChannelList = (p: Props) => (
  <ul>
    {p.channels.map(channel => (
      <ChannelItem
        key={channel.id}
        {...channel}
        onClick={() => p.onChannelClick(channel.id)}
      />
    ))}
  </ul>
);

export default ChannelList;
