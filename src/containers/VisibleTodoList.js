import TodoList from '../components/TodoList';
import type { State, Dispatch } from '../types';
import { toggleTodo } from '../actions/todos';
import { connect } from 'react-redux';

const mapStateToProps = (state: State) => ({
  todos: state.todos.filter(t => (
    state.visibilityFilter === 'show active'    ? !t.completed :
    state.visibilityFilter === 'show completed' ? t.completed  :
    true
  )),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

// <VisibleTodoList> displays todos based on the current
// visibility filter.
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
