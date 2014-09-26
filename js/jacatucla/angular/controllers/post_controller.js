angular.module('jacatucla')
.controller('post_controller', function($scope, $routeParams, jac_services, BASE_PATH) {
 
  jac_services.get_post($routeParams.name)
  .success(function(response, status, headers, config) {
    $scope.posts = response;
  })
  .then(function(response, status, headers, config) {
  });

});
