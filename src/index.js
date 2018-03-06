import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './store';

import ChannelItem from './components/channel-item';
import ChannelList from './components/channel-list';
import ConnectedChannelList from './containers/connected-channel-list';
import AddChannel from './components/add-channel';
import ConnectedAddChannel from './containers/connected-add-channel';
import ChannelDetail from './components/channel-detail';
import ConnectedChannelDetail from './containers/connected-channel-detail';
import App from './components/app';

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

// TODO: modal component

/*
<ChannelList channels={channels} onChannelClick={id => console.log('whoop:', id)} />
<AddChannel onSubmit={input => console.log('submitted form:', input)} />
<ChannelDetail channel={channel} onSubmit={name => console.log('update to:', name)} />
*/

render(
  <Provider store={store}>
    <div className="App">
      <h2 className="Title">My Awesome App</h2>
      <App render={(closeModal) => (
        <div className="Container">
          <div className="List">
            <ConnectedChannelList />
            <ConnectedAddChannel />
          </div>
          <div className="Detail">
            <div className="ButtonContainer">
              <button
                className="CloseButton"
                type="button"
                onClick={closeModal}
              >✖</button>
            </div>
            <ConnectedChannelDetail />
          </div>
        </div>
      )}>
      </App>
    </div>
  </Provider>,
  el
);
