import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './store';

import ChannelItem from './components/channel-item';
import ChannelList from './components/channel-list';
import ConnectedChannelList from './containers/connected-channel-list';

const el = document.getElementById('app');
if (el === null) {
  throw new Error('Missing #app element.');
}

const channel = {
  id: 1,
  name: 'some channel',
  selected: false,
}

const channel2 = {
  id: 1,
  name: 'another channel',
  selected: true,
}

const channels = [
  {
    id: 1,
    name: 'channel in list',
    selected: false,
  },
  {
    id: 2,
    name: 'channel 2 in list',
    selected: false,
  },
]

render(
  <Provider store={store}>
    <div className="App">
      <h2 className="Title">My Awesome App</h2>
      <p>App goes here...</p>
      <ChannelItem {...channel} onClick={() => console.log('clicked channel 1')} />
      <ChannelItem {...channel2} onClick={() => console.log('clicked channel 2')} />
      <ChannelList channels={channels} onChannelClick={id => console.log('whoop:', id)} />
      <ConnectedChannelList />
    </div>
  </Provider>,
  el
);
