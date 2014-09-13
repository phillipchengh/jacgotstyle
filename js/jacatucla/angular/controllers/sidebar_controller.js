angular.module('jacatucla')
.controller('sidebar_controller', function($scope) {

  $scope.go_to_archive = function() {
    console.log($scope.archive);
  };

});
