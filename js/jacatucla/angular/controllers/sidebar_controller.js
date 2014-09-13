angular.module('jacatucla')
.controller('sidebar_controller', function($scope, $location) {

  $scope.go_to_archive = function() {
    var base_len = $location.absUrl().length - $location.url().length; 
    var path = $scope.archive.substring(base_len);
    $location.path(path);
  };

});
