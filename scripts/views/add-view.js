'use strict';
var app = app || {};

(function(module) { // start IIFE

  module.bookView.initAddBookPage = (bookObj) => {
    app.showOnly('.add-book');
    $('#add-book-response').html(''); // empty in case it was used previously
    if (bookObj !== 'new') { 
      console.log(`Update for book id: ${bookObj.book_id}`); 
      // change the text of the submit button & other user feedback
      $('#submit').attr('data-id', bookObj.book_id); 
      $('#submit').text('Update the Book'); 
      $('#new-or-modify').html('Update the Book');
      // we are on update, pre-populate the fields in the form 
      $('#title').val(bookObj.title); 
      $('#author').val(bookObj.author); 
      $('#isbn').val(bookObj.isbn); 
      $('#image-url').val(bookObj.image_url); 
      $('#description').val(bookObj.description); 
    } else {
      console.log('We are adding a brand new book'); 
      $('#submit').attr('data-id', 'new');
      $('#submit').text('Add a New Book');
      $('#new-or-modify').html('Add a New Book');
      // we are adding a new book, pre-populate with field names. 
      $('#title').val('Title'); 
      $('#author').val('Author'); 
      $('#isbn').val('isbn'); 
      $('#image-url').val('image url'); 
      $('#description').val('Description'); 
    }
  } // end of module.bookView.initAddBookPage

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
    let book_id = $('#submit').attr('data-id'); 
    if (book_id === 'new') { // on new book, don't use book_id, and make a POST
      $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, inputData)
          .then(data => formSuccess(data))
          .catch(err => formFail(err));
    } else { // we are on update an existing book, so we PUT with book_id
      $.ajax({
        url: `${app.ENVIRONMENT.apiUrl}/api/v1/books/${book_id}`,
        method: 'PUT', 
        data: inputData
      }).then(data => formSuccess(data)).catch(err => formFail(err));
    } // end of POST or PUT
  } // end handleForm

  function formSuccess (data) {
    console.log(data);
    $('#add-book-response').html(data);
  }
  function formFail (err) {
    console.error(err); 
    $('#add-book-response').html(err);
  }

})(app); // end IIFE
