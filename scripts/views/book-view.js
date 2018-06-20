'use strict'; 
var app = app || {};

(function(module) { // start IIFE
  let bookView = {}; 

  bookView.initIndexPage = () => {
    $('.book-view').show();
    $('.container').hide();
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));


    };
  
  } // end bookView.initIndexPage

module.bookView = bookView; 
})(app); // end IIFE

