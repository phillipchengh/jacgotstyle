angular.module('jacatucla')
.controller('blog_controller', function($scope, $sce, jac_services) {
  
  $scope.index = 0;
  $scope.offset = 2;
  $scope.limit = 2;

  jac_services.get_posts(0)
  .then(function(response) {
    $scope.posts = response.data;
  });

});
