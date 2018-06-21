'use strict'; 
var app = app || {};

(function(module) { // start IIFE
  // if (!module.bookView) {
  //   var bookView = {}; 
  // }

  module.bookView.initOneBook = () => {
    app.showOnly('.one-book'); 
    // which book are we looking for? this will be a down below
    let a = 1; // uhh, this should be the :id we are looking for! 
    $('.one-book').append(a.toHtml());
    
  }; // end bookView.initOneBook

})(app); // end IIFE
