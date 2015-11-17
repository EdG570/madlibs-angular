(function(){
  var app = angular.module('mad', []);

  app.controller('WordController', function(){
     this.gender = 'm';

    this.setGender = function(gender) {
        this.gender = prompt('Is the name male or female? Type m for male and f for female.');

        
    };

  

  

  });


})();



//Resets input fields
$(document).ready(function(){
  $('button').on('click', function(){
    $('input').val('');
  });
});