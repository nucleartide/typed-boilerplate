import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './store';

import VisibleTodoList from './containers/VisibleTodoList';
import FilterLink from './containers/FilterLink';
import AddTodo from './containers/AddTodo';

const el = document.getElementById('app');
if (el === null) {
  throw new Error('Missing #app element.');
}

render(
  <Provider store={store}>
    <div className="App">
      <VisibleTodoList />
      Show:{' '}
      <FilterLink filter={'show all'}>All</FilterLink>{' '}
      <FilterLink filter={'show active'}>Active</FilterLink>{' '}
      <FilterLink filter={'show completed'}>Completed</FilterLink>
      <AddTodo />
    </div>
  </Provider>,
  el
);
