angular.module('jacatucla')
.controller('content_controller', function($scope, jac_services) {

  jac_services.get_site_info
  .then(function(response) {
    var info = response.data;
    $scope.site_name = info.name;
    $scope.site_desc = info.description; 
  });
  jac_services.get_pages
  .then(function(response) {
    $scope.pages = response.data;
  });
  jac_services.get_posts(0)
  .then(function(response) {
    console.log(response.data);
  });
});
