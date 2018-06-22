'use strict';
var app = app || {}; 

(function(module){ // start of second IIFE from user/dev stories 
  
  // function errorCallback(err) { //inits error page if an error

  // } // errorCallback
  
  function Book (rawDataObj) { // TODO?: refactor to .map? 
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
  }
  Book.all = []; 
  Book.prototype.toHtml = function() {
    return app.render('book-list-template', this);
  }

  Book.loadAll = rows => {
    rows.sort((a, b) => {
      if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1 };
      if (a.title.toUpperCase() > b.title.toUpperCase()) { return 1 }; 
      return 0; 
    }) // end of (a,b) => 
    Book.all = rows.map(bookObj => new Book(bookObj)); 
  }

  Book.loadOne = rows => {
    Book.now = new Book(rows[0]);  
  }

  Book.fetchAll = callback => {
   $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/books`)
     .then(results => {
       Book.loadAll(results);
       callback();
     }).catch(err => console.log(err) ); 
  };
  Book.fetchOne = (id, callback) => {
    console.log('We are in Fetch One! '); 
    $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/books/${id}`)
    .then(results => {
      // console.log(`fetchOne got a response: ${results}`); 

      Book.loadOne(results);
      callback();
    }).catch(err => console.log(err) ); 
 };
   
  module.Book = Book; 
})(app); // end of second IIFE

