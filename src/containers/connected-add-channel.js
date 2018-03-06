import AddChannel from '../components/add-channel';
import { connect } from 'react-redux';
import { addChannel } from '../actions/channel';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (channelName: string) => (
    dispatch(addChannel(channelName))
  ),
});

// <ConnectedAddChannel> does something with Redux state.
const ConnectedAddChannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannel);

export default ConnectedAddChannel;
