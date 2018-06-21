'use strict'; 
var app = app || {};

(function(module){
  let errorView = {}; 
  errorView.initErrorPage = err => {
    // setup the error page, yo! 
  } // end errorView.initErrorPage
  
  module.errorView = errorView; 
})(app); // end IIFE