angular.module('jacatucla')
.controller('photos_controller', function($scope, jac_services, BASE_PATH) {

  $scope.BASE_PATH = BASE_PATH;

  jac_services.get_albums()
  .success(function(response) {
    $scope.albums = response.feed.entry;
  })
  .error(function() {
    console.log('error');
  });
  
});
