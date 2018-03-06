import type { Channel } from '../types/channel';
import { Component } from 'react';

type Props = {
  channel?: Channel,
  onSubmit: (newName: string, id: number) => void,
};

type State = {
  input: string,
};

class ChannelDetail extends Component<Props, State> {
  state = {
    input: '',
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { input } = this.state;

    if (!input.trim()) {
      return;
    }

    if (this.props.channel) {
      this.props.onSubmit(this.state.input, this.props.channel.id);
      this.setState({ input: '' });
    }
  }

  handleChange = (e: Object) => {
    this.setState({ input: e.target.value });
  }

  render() {
    if (!this.props.channel) {
      return <div>
        No channel selected. Select one on the left to get started!
      </div>;
    }

    const { channel } = this.props;
    return <form
      onSubmit={this.handleSubmit}
      className="ChannelDetail"
    >
      <label htmlFor={channel.name}>Name for Channel #{channel.id}</label>
      <input
        id={channel.name}
        type="text"
        value={this.state.input || channel.name}
        onChange={this.handleChange}
      />
      <button type="submit">Save Channel</button>
    </form>
  }
}

export default ChannelDetail;
