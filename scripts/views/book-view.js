'use strict';
var app = app || {};

(function(module) { // start IIFE
  // if (!module.bookView) {
  //   var bookView = {};
  // }

  module.bookView.initOneBook = () => {
    app.showOnly('.one-book');
    // which book are we looking for? this will be a down below
    // let a = ; // uhh, this should be the :id we are looking for!
    $('.one-book')[0].append(module.Book.now.toHtml());

  }; // end bookView.initOneBook

})(app); // end IIFE
