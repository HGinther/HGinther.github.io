import React from 'react';

class bookTable extends React.Component {
  constructor(props) {
    super(props);
    // Grabbing current Local Storage of books and setting it up to work with the React-Table
    var books = (localStorage.getItem('books') !== null) ? JSON.parse(localStorage.getItem('books')) : [];
    if (typeof(books) === 'object' && !Array.isArray(books)) {
      books = [books];
    }

    this.state = {
      books: books
    };

    this.removeAll = this.removeAll.bind(this);
  }

  removeAll(event) {
    var books = [];
    localStorage.setItem('books', JSON.stringify(books));
    location.reload();
  }

  render() {
    return (
      <div className="well">
        <h2>Current Book Collection:</h2>
        <BootstrapTable data={ this.state.books } options={ { noDataText: 'There are no Books. Add Some!!' } }>
          <TableHeaderColumn dataField='isbn' isKey={ true }>ISBN Number</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='author'>Author</TableHeaderColumn>
          <TableHeaderColumn dataField='publisher'>Publisher</TableHeaderColumn>
          <TableHeaderColumn dataField='year'>Year</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='edition'>Edition</TableHeaderColumn>
          <TableHeaderColumn dataField='stock'>In-Stock/Out-of-Stock</TableHeaderColumn>
        </BootstrapTable>
        <br/>
        <div className="btn btn-danger" onClick={ this.removeAll } >Remove All Books</div>
      </div>
    );
  }
}

export default bookTable;
