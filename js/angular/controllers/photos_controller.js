angular.module('jacatucla')
.controller('photos_controller', function($scope, jac_services) {

  jac_services.get_albums
  .then(function(response) {
    $scope.albums = response.data.feed.entry;
  });

  $scope.get_photos = function(album_id) {
    jac_services.get_photos(album_id)
    .then(function(response) {
      console.log(response.data); 
    });
  };
});
