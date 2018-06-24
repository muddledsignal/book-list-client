'use strict';
var app = app || {};

(function (module) {

  let bookView = {};

  bookView.initIndexPage = () => { // TODO: refactor to use module.showonly
    app.showOnly('.book-view');
    // TODO: wipe the old showing of the book list before appending. 
    // listner to ooen the single book view 
    $('div').on('click', '.book-in-list', function(e) {
      let idChoice = `${$(this).attr('id')}`; 
      app.Book.fetchOne(idChoice, app.bookView.initOneBook);

      // let bookChoice = `${$(this).data('content')}`; 

    });
    $('#book-count').html(`<p>Total Books: ${app.Book.all.length} </p>`);
    $('#book-list').html('');
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));

  }; // end bookView.initIndexPage
  module.bookView = bookView;

})(app); // end IIFE