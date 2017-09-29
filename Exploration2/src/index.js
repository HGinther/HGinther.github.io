var $ = require('jquery');

var AOS = require('aos');

require("materialize-loader");
// require('material-design-icons'); Couldn't get icons to work

import './style.css';
import '../materialize-css-local/css/materialize.min.css'
import '../materialize-css-local/js/materialize.min.js'

$(function() {
  AOS.init({
    duration: 2000,
  });

  AOS.refresh();

  // var material_js = document.createElement('script');
  // material_js.src = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.j';
  // document.body.appendChild(material_js);
});

// AOS.init({
//   duration: 2000,
// });
//
// $(window).on('load', function () {
//     AOS.refresh();
// });
