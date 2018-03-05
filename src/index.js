import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './store';

/*
import VisibleTodoList from './containers/VisibleTodoList';
import FilterLink from './containers/FilterLink';
import AddTodo from './containers/AddTodo';
*/

const el = document.getElementById('app');
if (el === null) {
  throw new Error('Missing #app element.');
}

render(
  <Provider store={store}>
    <div className="App">
      <h2 className="Title">My Awesome App</h2>
      <p>App goes here...</p>
    </div>
  </Provider>,
  el
);
