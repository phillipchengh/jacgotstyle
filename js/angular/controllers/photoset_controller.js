angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams) {

  var album_id = $routeParams.album_id;
  
  jac_services.get_photos(album_id)
  .error(function(data, status, headers, config) {
    console.log('error!');
  })
  .then(function(response) {
    $scope.photos = response.data.feed.entry;
  });

});
