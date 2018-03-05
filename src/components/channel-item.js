import type { Channel } from '../types/channel';

type Props = Channel & {
  onClick: () => void,
};

const Selected = (p: Props) => (
  <span>{p.name}</span>
);

const Unselected = (p: Props) => (
  <a href="#" onClick={e => {
    e.preventDefault();
    p.onClick();
  }}>{p.name}</a>
);

const ChannelItem = (p: Props) => <li>{p.selected
  ? <Selected {...p} />
  : <Unselected {...p} />
}</li>;

export default ChannelItem;
