import { Component } from 'react';

type Props = {
  onSubmit: (string) => void,
};

type State = {
  input: string,
};

class AddChannel extends Component<Props, State> {
  state = {
    input: '',
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { input } = this.state;
    if (!input.trim()) return;
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  }

  handleChange = (e: Object) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return <form
      className="AddChannel"
      onSubmit={this.handleSubmit}
    >
      <input
        type="text"
        value={this.state.input}
        onChange={this.handleChange}
      />
      <button type="submit">Add Channel</button>
    </form>
  }
}

export default AddChannel;
