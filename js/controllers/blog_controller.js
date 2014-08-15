angular.module('jacatucla')
.controller('blog_controller', function($scope, $sce, jac_services) {
  
  $scope.index = 1;

  jac_services.get_posts($scope.index)
  .then(function(response) {
    $scope.posts = response.data;
  });

  // TODO User could prev past the oldest post with index still incrementing
  $scope.prev_posts = function() {
    jac_services.get_posts($scope.index+1)
    .then(function(response) {
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
      console.log('next');
    });
  };

});
