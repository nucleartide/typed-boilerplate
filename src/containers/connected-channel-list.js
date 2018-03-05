import ChannelList from '../components/channel-list';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/channel';

const mapStateToProps = (state, ownProps) => ({
  channels: state.channels,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChannelClick: (id: number) => (
    dispatch(selectChannel(id))
  ),
});

const ConnectedChannelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);

export default ConnectedChannelList;
