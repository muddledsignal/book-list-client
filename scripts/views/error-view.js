'use strict';
var app = app || {};

(function (module) {
  // let error-view = {};
  let errorView = {};
  errorView.initErrorPage = err => {
    module.showOnly('#error-view');
    let output = module.render('error-template', err);
    $('#error-view').append(output);
    // setup the error page, yo!
  } // end errorView.initErrorPage

  module.errorView = errorView;
})(app); // end IIFE