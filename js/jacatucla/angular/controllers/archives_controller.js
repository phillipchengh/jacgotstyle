angular.module('jacatucla')
.controller('archives_controller', function($scope, $routeParams, $window, jac_services, BASE_PATH) {

  var BASE_ARCHIVE_PATH = BASE_PATH + '/20' + $routeParams.year + '/' + $routeParams.month;
  $scope.index = ($routeParams.page_number) ? parseInt($routeParams.page_number, 10) : 1;
  $scope.prev_index = $scope.index + 1;
  $scope.next_index = $scope.index - 1;
  $scope.prev_href =  BASE_ARCHIVE_PATH + '/page/' + $scope.prev_index;
  $scope.next_href = ($scope.next_index > 1) ? (BASE_ARCHIVE_PATH + '/page/' + $scope.next_index) : (BASE_ARCHIVE_PATH + '/');

  jac_services.get_archives($routeParams.month, '20' + $routeParams.year, $scope.index)
  .success(function(response, status, headers, config) {
    $scope.posts = response;
    $scope.max_pages = headers('X-WP-Total-Pages');
    $window.scrollTo(0, 0);
    angular.element(document).ready(function() {
      angular.element($('.post-content a')).attr('target', '_self');
    });
  });

});
