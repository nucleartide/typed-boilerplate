import { Component } from 'react';
import type { Dispatch } from '../types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

type Props = {
  dispatch: Dispatch,
};

type State = {
  value: string,
};

class AddTodo extends Component<Props, State> {
  state = {
    value: '',
  }

  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) return;
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: '' });
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input value={this.state.value} onChange={this.handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  }
}

export default connect()(AddTodo);
