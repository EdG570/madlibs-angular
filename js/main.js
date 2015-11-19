(function(){

  var app = angular.module('mad', []);

    app.controller('WordController', [ '$scope', '$timeout', function($scope, $timeout){
      $scope.gender = 'm';

      $scope.setGender = function() {
        $scope.gender = prompt('Is the person male or female? Type m for male and f for female.');
      };


      $scope.clearInput = function() {
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


