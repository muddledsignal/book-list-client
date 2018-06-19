'use strict'; 


// This section to be dealt with on Tuesday lecture 
// (function(){
//   // are .showOnly and .render methods on Books, or higher up in our stack? 
//   Books.showOnly  = function () {
//     //  reveal the containers of your single-page app.
//   }
//   Books.render = function () { // huh? also done in .toHtml ?
//     let template = Handlebars.compile($('#book-template').text()); 
//     return template(this); 
//   }
// })(); // end of first IIFE
// above section to be dealt with on Tuesday lecture

(function(){

  function Books (rawDataObj) { // TODO?: refactor to .map? 
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
  }
  })(); // end of second IIFE

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text()); 
    return template(this); 
  }
Book.all = []; 
