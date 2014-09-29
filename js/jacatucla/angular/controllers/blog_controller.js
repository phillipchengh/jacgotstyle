angular.module('jacatucla')
.controller('blog_controller', function($scope, $routeParams, $window, jac_services, BASE_PATH) {
  
  $scope.index = ($routeParams.page_number) ? parseInt($routeParams.page_number, 10) : 1;
  $scope.prev_index = $scope.index + 1;
  $scope.next_index = $scope.index - 1;
  $scope.prev_href = BASE_PATH + '/page/' + $scope.prev_index;
  $scope.next_href = ($scope.next_index > 1) ? (BASE_PATH + '/page/' + $scope.next_index) : (BASE_PATH + '/');

  jac_services.get_posts($scope.index)
  .success(function(response, status, headers, config) {
    $scope.posts = response;
    $scope.max_pages = headers('X-WP-TotalPages');
    $window.scrollTo(0, 0);
    angular.element(document).ready(function() {
      angular.element($('.post-content a')).attr('target', '_self');
    });
  });

});
