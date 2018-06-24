'use strict';
var app = app || {};

(function(module) { // start IIFE
  // if (!module.bookView) {
  //   var bookView = {};
  // }

  module.bookView.initAddBookPage = (bookObj) => {
    app.showOnly('.add-book');
    console.log(bookObj); 
    if (bookObj !== 'new') {
      // change the text of the submit button
      $('#submit').text('Update the Book'); 
      // we are on update, pre-populate the fields in the form 
      $('#title').val(bookObj.title); 
      $('#author').val(bookObj.author); 
      $('#isbn').val(bookObj.isbn); 
      $('#image-url').val(bookObj.image_url); 
      $('#description').val(bookObj.description); 
    } else {
      $('#submit').text('Add a New Book');
      $('#title').val('Title'); 
      $('#author').val('Author'); 
      $('#isbn').val('isbn'); 
      $('#image-url').val('image url'); 
      $('#description').val('Description'); 
    }

    // listner turn on for submit button 
    $('#submit').on('click', handleForm);

    function handleForm(event) {
      event.preventDefault(); 
      let inputData = {}; 
      inputData.title = $('#title').val(); 
      inputData.author = $('#author').val(); 
      inputData.isbn = $('#isbn').val(); 
      inputData.image_url = $('#image-url').val(); 
      inputData.description = $('#description').val(); 
      if (bookObj !== 'new') { // if we are on update, use $.put instead of $.post
        $.ajax({
          url: `${app.ENVIRONMENT.apiUrl}/api/v1/books/${bookObj.book_id}`,
          method: 'PUT', 
          data: inputData
        }).then(data => console.log(data) );
      } else {
        $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, inputData).then(data => console.log(data) );
      }
    } // end handleForm
  } // end of module.bookView.initAddBookPage

  module.bookView.submit = e => {
    e.preventDefault(); 
    let addedBook = new app.Book({
    })
  }

})(app); // end IIFE
