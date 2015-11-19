(function(){

  var app = angular.module('mad', []);

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


