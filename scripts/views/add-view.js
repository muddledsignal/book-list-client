'use strict';
var app = app || {};

(function(module) { // start IIFE
  // if (!module.bookView) {
  //   var bookView = {};
  // }

  module.bookView.initAddBookPage = () => {
    app.showOnly('.add-book');
    

    // TODO: we need an listner for the form
    // TODO ELSEWHERE: we need a path to INSERT a record in DB 
  }; // end bookView.initAddBookPage

})(app); // end IIFE
