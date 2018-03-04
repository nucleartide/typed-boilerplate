import Todo from './todo';

const App = () => [
  <div key="test-div">this is the app fragment</div>,
  <Todo text="this is a todo" completed={false} onClick={() => console.log('clicked todo')} />
];

export default App;
