// Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// Personal Styles
import './style.css';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// React-Select CSS
import 'react-select/dist/react-select.css';

// React-Bootstrap Table
var ReactBsTable = require('react-bootstrap-table');
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// Custom Components
import Form from './components/bookForm';
import Table from './components/bookTable';

ReactDOM.render(
  <div className="container">
    <section className="jumbotron">
      <h1>Welcome to the Library</h1>
      <Form />
      <Table />
    </section>
  </div>,
  document.getElementById('app')
);
