import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const el = document.getElementById('app');
if (el === null) {
  throw new Error('Missing #app element.');
}

const exampleTodo = {
  id: 1,
  completed: true,
  text: 'this is a todo',
};

const exampleList = [
  {
    id: 1,
    completed: true,
    text: 'this is a todo',
  },
  {
    id: 2,
    completed: false,
    text: 'this is also a todo',
  },
]

render(
  <Provider store={store}>
    <div>
      <Todo {...exampleTodo} onClick={() => console.log('clcked')} />
      <TodoList todos={exampleList} onTodoClick={() => {}} />
    </div>
  </Provider>,
  el
);

/*
import App from './components/App';
*/
