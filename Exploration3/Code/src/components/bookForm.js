import React from 'react';
import Select from 'react-select';

const options =
[
  {
    value: true, label: 'In-Stock'
  },
  {
    value: false, label: 'Out-of-stock'
  }
];

class bookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: '',
      name: '',
      author: '',
      publisher: '',
      year: '',
      type: '',
      edition: '',
      stock: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var books = (localStorage.getItem('books') !== null) ? JSON.parse(localStorage.getItem('books')) : [];

    books.push({
      isbn: this.state.isbn,
      name: this.state.name,
      author: this.state.author,
      publisher: this.state.publisher,
      year: this.state.year,
      type: this.state.type,
      edition: this.state.edition,
      stock: this.state.stock
    });

    localStorage.setItem('books', JSON.stringify(books));
    event.preventDefault();
    location.reload();
  }

  handleSelectChange(value) {
		console.log('You\'ve selected:', value);
		this.setState({ stock: value.value });
	}

  render() {
    return (
      <form className="well" name="form" onSubmit={this.handleSubmit}>
        <h2>Add a new book to the collection:</h2>
        <div className="col-xs-6 form-group">
          <label> ISBN:
            <input
              className="form-control"
              name="isbn"
              type="number"
              placeholder="ex: 1234567890"
              value={this.state.isbn}
              onChange={this.handleInputChange}
              required />
          </label>
          <br />
          <label> Name:
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="ex: Some Title"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> Author:
            <input
              className="form-control"
              name="author"
              type="text"
              placeholder="ex: Someone"
              value={this.state.author}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> Publisher:
            <input
              className="form-control"
              name="publisher"
              type="text"
              placeholder="ex: Some Company"
              value={this.state.publisher}
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="col-xs-6 form-group">
          <label> Year:
            <input
              className="form-control"
              name="year"
              type="number"
              placeholder="ex: 1916"
              value={this.state.year}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> Type:
            <input
              className="form-control"
              name="type"
              type="text"
              placeholder="ex: Fiction"
              value={this.state.type}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> Edition:
            <input
              className="form-control"
              name="edition"
              type="number"
              placeholder="ex: 1"
              value={this.state.edition}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> In-Stock/Out-of-Stock:
            <Select
              name="stock"
              options={options}
              value={this.state.stock}
              onChange={this.handleSelectChange}
              required />
          </label>
        </div>
        <input className="btn btn-success" type="submit" value="Add Book" />
      </form>
    );
  }
}

export default bookForm;
