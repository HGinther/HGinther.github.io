import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: 'Bob',
        country: 'World'
    };
  }

  buttonClicked() {
    const newState = {
      name: 'Alice'
    };

    this.setState(newState);
  }

  render() {
      return (
        <div>
          <p>Hello {this.state.name}</p>
          <p>Hello {this.state.country}</p>
          <button onClick={this.buttonClicked.bind(this)}>New Button</button>
        </div>
      );
  }
}

export default Detail;

// render() {
//     return <p>
//     {
//         chance.first() == 'John'
//         ? 'Hello, John!'
//         : 'Hello, world!'
//     }
//     </p>;
// }
