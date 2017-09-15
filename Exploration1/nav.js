class NavBar extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   brand: {linkTo: "#", text: "React Bootstrap NavBar"},
    //   links: [
    //     {linkTo: "#", text: "Home"},
    //     {linkTo: "#", text: "React Tutorial"}
    //   ],
    // };
  }

  render() {
    const brand = {linkTo: "./", text: "React Bootstrap NavBar"};
    const links = [
      {linkTo: "./", text: "Home"},
      {linkTo: "./test", text: "React Tutorial"}
    ]

    return (
      <div className="header clearfix">
        <nav role="navigation">
          <NavMenu links={links} />
        </nav>
        <NavBrand linkTo={brand.linkTo} text={brand.text}/>
      </div>
    );
  }
}

class NavMenu extends React.Component {
  renderNavLink(link) {
    return (
      <NavLink
        linkTo={link.linkTo}
        text={link.text}
      />
    );
  }

  render() {
    return (
      <ul className="nav nav-pills pull-right">
        {this.renderNavLink(this.props.links[0])}
        {this.renderNavLink(this.props.links[1])}
      </ul>
    );
  }
}

class NavBrand extends React.Component {
  render() {
    return (
      <h2 className="text-muted">
        <a href={this.props.linkTo}>{this.props.text}</a>
      </h2>
    );
  }
}

class NavLink extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.linkTo}>{this.props.text}</a>
      </li>
    );
  }
}

// ========================================

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav-placeholder')
);
