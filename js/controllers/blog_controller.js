angular.module('jacatucla')
.controller('blog_controller', function($scope, $sce, jac_services) {
  
  $scope.index = 1;

  jac_services.get_posts($scope.index)
  .then(function(response) {
    $scope.posts = response.data;
  });

  $scope.prev_posts = function() {
    jac_services.get_posts($scope.index+1)
    .then(function(response) {
      if (response.data.length === 0) {
        return;
      }
      $scope.posts = response.data;
      $scope.index++;
    });
  };

  $scope.next_posts = function() {
    if ($scope.index === 1) {
      return;
    }
    $scope.index--;
    jac_services.get_posts($scope.index) 
    .then(function(response) {
      $scope.posts = response.data;
    });
  };

});
