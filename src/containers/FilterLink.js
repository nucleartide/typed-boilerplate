import Link from '../components/Link';
import { connect } from 'react-redux';
import type { VisibilityFilter } from '../types/visibility-filter';
import { setVisibilityFilter } from '../actions/visibility-filter';

type Props = {
  filter: VisibilityFilter,
};

const mapStateToProps = (state, ownProps: Props) => ({
  active: state.visibilityFilter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps: Props) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

// <FilterLink> displays a <Link> tied to the state of the
// current visibility filter.
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
