'use strict';
var app = app || {}; 

(function(module){ // start of second IIFE from user/dev stories 
  
  function Book (rawDataObj) { // TODO?: refactor to .map? 
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
  }
  Book.all = []; 
  Book.loadAll = rows => {
    rows.sort((a, b) => {
      if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1 };
      if (a.title.toUpperCase() > b.title.toUpperCase()) { return 1 }; 
      return 0; 
    }) // end of (a,b) => 
    Book.all = rows.map(bookObj => new Book(bookObj)); 
  }

  Book.prototype.toHtml = function() {
    return app.render('book-list-template', this);
  }
Book.fetchAll = callback => {
   $.get('/api/v1/books')
     .then(results => {
       Book.loadAll(results);
       callback();
     }).catch(err => console.log(err) ); 
 };
  
  module.Book = Book; 
})(app); // end of second IIFE
