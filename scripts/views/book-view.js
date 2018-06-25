'use strict';
var app = app || {};

(function(module) { // start IIFE

  module.bookView.initOneBook = () => {
    console.log('we are in bookView.initOneBook');
    $('#delete-response').html(''); // empty delete response on init
    app.showOnly('.one-book');
    // which book are we looking for? this will be a down below
    $(' .one-book > button').attr('data-id', app.Book.now.book_id); 
    $('#one-book-holder').html(app.Book.now.toHtmlLong());
  }; // end bookView.initOneBook

  // Listner for Update and Delete buttons
  $('.one-book button').on('click', (e) => {
    console.log(`You clicked on ${e.target.id}`); 
    let action = e.target.id; // was it modiy or delete? 
    let id = app.Book.now.book_id; // book id also stored on 'data-id' of button element
    if (action === 'Delete') deleteBook(id); 
    if (action === 'Modify') updateBook(app.Book.now); 
  });
  
  function deleteBook (id) {
    $.ajax({
      url: `${app.ENVIRONMENT.apiUrl}/api/v1/books/${id}`,
      method: 'DELETE'
    }).then(data => {
        console.log(`${data}`);
        $('#delete-response').html(data); 
        // app.Book.fetchAll(app.bookView.initIndexPage); // this would just send them back to view all
      }).catch(err => {
        console.error(`Error: ${err}`);
        $('#delete-response').html(`Error: ${err}`); 
      });
    } // end deleteBook function

  function updateBook(bookObj) {
    // we call the add-view, but with pre-populated data from this book in question
    app.bookView.initAddBookPage(bookObj); 
    // This function is setup in case we later decide to do additional steps. However we currently are setup for the AddBookPage to be able to handle this (as well and new books)
  } // end updateBook function

})(app); // end IIFE
