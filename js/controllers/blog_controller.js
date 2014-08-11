angular.module('jacatucla')
.controller('blog_controller', function($scope, $sce, jac_services) {

  jac_services.get_posts(0)
  .then(function(response) {
    $scope.posts = response.data;
  });

});
