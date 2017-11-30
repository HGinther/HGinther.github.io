var $ = require('jquery');
// Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// React
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // React-Select CSS
// import 'react-select/dist/react-select.css';
//
// // React-Bootstrap Table
// var ReactBsTable = require('react-bootstrap-table');
// import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
// var BootstrapTable = ReactBsTable.BootstrapTable;
// var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// require("materialize-loader");

import '../materialize-css-local/css/materialize.min.css'
import '../materialize-css-local/js/materialize.min.js'
// Personal Styles
import './style.css';

var History = window.History;

// Checking to see if HistoryJS is enabled and loading the page
$(function() {
  // $("#stage, footer").css("display", "none");
  if (History.enabled) {
    ajaxifyLinks();
    evaluatePath(location.pathname);
  }
  // $("#stage, footer").fadeIn(2000);
});

// Content update and back/forward button handler
History.Adapter.bind(window, 'statechange', function() {
    var State = History.getState();
    evaluatePath(State.data.path);
    // Log the history object
    History.log(State);
});

// Navigation link handler
function ajaxifyLinks() {
  $('a.nav_link').click(function(e){
      e.preventDefault();

      var request = $(this).attr('href');
      var title = $(this).attr('title');

      History.pushState({path: request}, title, request); // When we do this, History.Adapter will also execute its contents.
  });
}

function evaluatePath(path) {
  var request = path.split("/").pop();

  // Handling if a request is outside of about or contact
  if (request != "about" && request != "skills" && request != "misc") {
    request = "home";
    title = "Home";
  } else {
    var title = History.getState().title;
  }

  var page = request + '.html';

  // $("#stage, footer").fadeOut(2000);

  // Updating the stage and page with History.State data
  $.get(page, stageContent);
  $('title').text(title);

  // $('#nav_title').text("History Navigation - " + title);

  // Handling which nav-pill gets the active class
  // $('.nav li.active').removeClass('active');
  // $("li#" + title).addClass('active');

  ajaxifyLinks();
}

function stageContent(content) {
  $('#stage').html(content);
}
