import { Component } from 'react';
import Modal from './modal';

type Props = {
  render: (Function) => React.Node,
};

type State = {
  isOpen: boolean,
};

class App extends Component<Props, State> {
  state = {
    isOpen: false,
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  render() {
    return <div>
      <button type="button" onClick={this.handleOpen}>
        Edit Settings
      </button>
      <Modal onClose={this.handleClose} show={this.state.isOpen}>
        {this.props.render(this.handleClose)}
      </Modal>
    </div>;
  }
}

export default App;
