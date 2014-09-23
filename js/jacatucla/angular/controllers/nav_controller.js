angular.module('jacatucla')
.controller('nav_controller', function($scope, $location, $route, BASE_PATH, PAGES) {
  
  $scope.$on('$routeChangeSuccess', function() {
  });

  $scope.isActive = function(route) {
    if ($route.current) {
      return (route === $route.current.data.tab);
    } else {
      return false;
    }
  };

});
