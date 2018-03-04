type Props = {
  active: boolean,
  children: React.Node,
  onClick: () => void,
};

// <Link> displays an "active" or "inactive" anchor tag.
const Link = (p: Props) => (p.active
  ? <span>{p.children}</span>
  : <a
    href="#"
    onClick={e => {
      e.preventDefault();
      p.onClick();
    }}
  >
    {p.children}
  </a>
);

export default Link;
