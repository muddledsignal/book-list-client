'use strict'; 

var app = app || {}; 

(function(module){ // start of IIFE

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
  if (templateId === 'error-template') {
    module.taskTemplate = Handlebars.compile($(`#${templateId}`).text()); 
  }
  if (!module.taskTemplate) {
    module.taskTemplate = Handlebars.compile($(`#${templateId}`).text()); 
  }  
  return module.taskTemplate(data);
}

module.errCallback = err => {
  console.log(err); 
  module.errorView.initErrorPage(err); 
}

// $('#thebutton').on('click', handleForm);

// function handleForm(event){
//   event.preventDefault();
//   console.log('clicky');
//   let formData = {};
//   formData.author = $('#author').val();
//   formData.title = $('#title').val();
//   formData.isbn = $('#isbn').val();
//   formData.imageUrl = $('#image-url').val();
//   formData.description = $('#description').val();
//   console.log(formData);
//   $.post('http://localhost:4000/api/v1/books', formData)
//   .then(data => console.log(data));
// }


})(app); // end of IIFE