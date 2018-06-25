'use strict';
var app = app || {};

(function (module) {

  let bookView = {};

  bookView.initIndexPage = () => { 
    app.showOnly('.book-view');
    $('#book-count').html(`<p>Total Books: ${app.Book.all.length} </p>`);
    $('#book-list').html('');
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));
  }; // end bookView.initIndexPage

  module.bookView = bookView;
})(app); // end IIFE