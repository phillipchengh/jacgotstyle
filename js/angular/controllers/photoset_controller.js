angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document) {

  var album_id = $routeParams.album_id;
  $scope.slider = false;

  $scope.show_slider = function() {
    $scope.slider = true;
    $document.bind('keydown', function(e) {
      switch (e.keyCode) {
        case 27: $scope.hide_slider(); break;
        case 37: console.log('slide left'); break;
        case 39: console.log('slide right'); break;
      }
    });
    $('body').css({'overflow': 'hidden'});
  };


  $scope.hide_slider = function() {
    $scope.slider = false;
    $document.unbind('keydown');
    $('body').css({'overflow': 'auto'});
    $scope.$apply();
  };

  jac_services.get_photos(album_id)
  .error(function(data, status, headers, config) {
    console.log('error!');
  })
  .then(function(response) {
    $scope.photos = response.data.feed.entry;
  });

});
