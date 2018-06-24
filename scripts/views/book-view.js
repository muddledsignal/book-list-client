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
    $(' .one-book > button').attr('data-id', app.Book.now.book_id); 
    
    // Listner for Update and Delete buttons
    $('button').on('click', (e) => {
      console.log(e.target.id); 
      let action = e.target.id; // was it modiy or delete? 
      let id = app.Book.now.book_id; // book id also stored on 'data-id' of button element
      if (action === 'Delete') deleteBook(id); 
      if (action === 'Modify') updateBook(app.Book.now); 
    });
    
    function deleteBook (id) {
      console.log(`inside the delete function for: ${id}`); 
      $.ajax({
        url: `${app.ENVIRONMENT.apiUrl}/api/v1/books/${id}`,
        method: 'DELETE'
      }).then(data => {
          console.log(`${data}`);
          app.Book.fetchAll(app.bookView.initIndexPage); 
          // if (callback) callback();
        }).catch(err => console.error(`Error boss: ${err}`));
     }

    function updateBook(bookObj) {
      // we need to know the data of the book in question
      // we call the add-view, but with pre-populated data from this book in question
      app.bookView.initAddBookPage(bookObj); 

    }

    $('#one-book-holder').html(app.Book.now.toHtmlLong());
      // '<p> dynamic here is some text</p>'); 
      
      
      

  }; // end bookView.initOneBook

})(app); // end IIFE
