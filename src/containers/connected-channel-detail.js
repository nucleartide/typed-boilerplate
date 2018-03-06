import ChannelDetail from '../components/channel-detail';
import { connect } from 'react-redux';
import { updateChannel } from '../actions/channel';

const mapStateToProps = (state, ownProps) => ({
  channel: state.channels.find(ch => ch.selected) || undefined,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (newName: string, id: number) => (
    dispatch(updateChannel(newName, id))
  ),
});

// <ConnectedChannelDetail> does something with Redux state.
const ConnectedChannelDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);

export default ConnectedChannelDetail;
