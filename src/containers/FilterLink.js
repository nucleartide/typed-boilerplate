import Link from '../components/Link';
import { connect } from 'react-redux';
import type { VisibilityFilter } from '../types/visibility-filter';
import { setVisibilityFilter } from '../actions/visibility-filter';

type Props = {
  filter: VisibilityFilter,
};

const mapStateToProps = (state, ownProps: Props) => {
  return {
    active: state.visibilityFilter === ownProps.filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps: Props) => {
  return {
    onClick: () =>
      dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
