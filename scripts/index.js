'use strict';

var app = app || {};

(function (module) { // start of IIFE

  let productionApiUrl = 'https://tara-chris-booklist.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000'
  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.container').hide();
    // $('.nav-menu').slideUp(350); // We could animate the nav, but class has not been set on navigation menu. 
    $(selector).show();
  }

  module.render = (templateId, data) => {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    return module.taskTemplate(data);
  }

  module.errCallback = err => {
    console.log(err);
    module.errorView.initErrorPage(err);
  }

  // event listner for navigation 
  $('nav').on('click', '.tab', function(event) {
    event.preventDefault();
    console.log(` You clicked ${$(this).data('content')}`);
    let link = `${$(this).data('content')}`; 
    if (link === 'home') app.Book.fetchAll(app.bookView.initIndexPage);
    if (link === 'add-book') app.bookView.initAddBookPage('new');
    if (link === 'about') module.showOnly('.about');
  }); // end event listner for navigation 

  // listner to ooen the single book view 
  $('div').on('click', '.book-in-list', function(e) {
    let idChoice = `${$(this).attr('id')}`; 
    app.Book.fetchOne(idChoice, app.bookView.initOneBook);
  }); // end listner for single book view. 

})(app); // end of IIFE