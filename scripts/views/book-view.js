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
    
    // TODO: event listner for delete & update clicks. 

    $('#one-book-holder').append(app.Book.now.toHtmlLong());
      // '<p> dynamic here is some text</p>'); 
      
      
      

  }; // end bookView.initOneBook

})(app); // end IIFE
