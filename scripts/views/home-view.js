'use strict';
var app = app || {};

(function (module) {

  let bookView = {};

  bookView.initIndexPage = () => { // TODO: refactor to use module.showonly
    app.showOnly('.book-view');
    // TODO: wipe the old showing of the book list before appending. 
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));

  }; // end bookView.initIndexPage
  module.bookView = bookView;

})(app); // end IIFE