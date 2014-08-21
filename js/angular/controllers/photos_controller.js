angular.module('jacatucla')
.controller('photos_controller', function($scope, jac_services) {

  jac_services.get_albums
  .then(function(response) {
    $scope.albums = response.data.feed.entry;
  });

});
