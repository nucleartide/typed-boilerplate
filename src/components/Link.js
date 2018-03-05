type Props = {
  active: boolean,
  children: React.Node,
  onClick: () => void,
};

const Active = (p: Props) => (
  <span className="ActiveLink">{p.children}</span>
);

const Inactive = (p: Props) => (
  <a className="InactiveLink" href="#" onClick={e => {
    e.preventDefault();
    p.onClick();
  }}>
    {p.children}
  </a>
);

// <Link> displays an "active" or "inactive" anchor tag.
const Link = (p: Props) => (p.active
  ? <Active {...p} />
  : <Inactive {...p} />
);

export default Link;
