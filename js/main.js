(function(){

  var app = angular.module('mad', ['ngMessages', 'ngAnimate']);

    app.controller('WordController', [ '$scope', '$timeout', function($scope, $timeout){
      $scope.gender = 'm';

      $scope.setGender = function() {
        if(document.getElementById('male').checked) {
          $scope.gender = document.getElementById('male').value;
        }
        else if(document.getElementById('female').checked) {
          $scope.gender = document.getElementById('female').value;
        }
      };

      $scope.validated = false;


      $scope.submit = function() {
        if($scope.myForm.$valid) {
          console.log("The form is valid!");
          $scope.validated = true;
        }
        else {
          console.log("The form is invalid");
        }
      };


      $scope.clearInput = function() {
        $scope.validated = false;
        $scope.femaleName = '';
        $scope.jobTitle = '';
        $scope.tediousTask = '';
        $scope.dirtyTask = '';
        $scope.celebrity = '';
        $scope.uselessSkill = '';
        $scope.adjective = '';
        $scope.obnoxiousCelebrity = '';
        $scope.hugeNumber = '';
      };

    }]);

})();


