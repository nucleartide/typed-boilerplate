type Props = {
  show: boolean,
  onClose: () => void,
  children: React.Node,
};

const Modal = (p: Props) => (
  <div className={p.show
    ? 'Modal Overlay'
    : 'Modal'
  }>{p.show ? p.children : null}</div>
);

export default Modal;
