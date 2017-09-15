class NavBar extends React.Component {
  constructor() {
    super();
    // this.state = {
    // };
  }

  render() {
    const brand = {linkTo: "/Exploration1/index.html", text: "React Bootstrap NavBar"};
    const links = [
      {linkTo: "/Exploration1/index.html", text: "Home"},
      {linkTo: "/Exploration1/ReactTutorial/index.html", text: "React Tutorial"}
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
        <a href={this.props.linkTo}>
          {this.props.text}
        </a>
      </li>
    );
  }
}

// ========================================

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav-container')
);
