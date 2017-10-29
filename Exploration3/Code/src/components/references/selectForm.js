import React from 'react';

class selectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          In-Stock/Out-of-Stock:
          <select value={this.state.value} onChange={this.handleChange}>
            <option disabled defaultValue value=''> -- select an option -- </option>
            <option value='true'>in-stock</option>
            <option value='false'>out-of-stock</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default selectForm;
