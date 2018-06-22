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
    $('.nav-menu').slideUp(350);
    $(selector).show();
  }

  module.render = (templateId, data) => {
    if (templateId === 'one-book-template' || templateId === 'error-template' || !module.taskTemplate) {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
  }

  module.errCallback = err => {
    console.log(err);
    module.errorView.initErrorPage(err);
  }

})(app); // end of IIFE