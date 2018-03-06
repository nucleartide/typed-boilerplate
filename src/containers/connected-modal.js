import Modal from '../components/Modal';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

// <ConnectedComponent> does something with Redux state.
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ConnectedComponent;
