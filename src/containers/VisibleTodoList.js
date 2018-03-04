import TodoList from '../components/TodoList';
import type { State, Dispatch } from '../types';
import { toggleTodo } from '../actions/todos';
import { connect } from 'react-redux';

const mapStateToProps = (state: State) => ({
  todos: state.todos.filter(t => {
    if (state.visibilityFilter === 'show active') {
      return !t.completed;
    }

    if (state.visibilityFilter === 'show completed') {
      return t.completed;
    }

    return true;
  }),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
