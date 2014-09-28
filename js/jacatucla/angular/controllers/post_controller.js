angular.module('jacatucla')
.controller('post_controller', function($scope, $routeParams, $window, jac_services, BASE_PATH) {
 
  jac_services.get_post($routeParams.name)
  .success(function(response, status, headers, config) {
    $scope.posts = response;
    $window.scrollTo(0, 0);
  })
  .then(function(response, status, headers, config) {
  });

});
