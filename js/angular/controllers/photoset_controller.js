angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document) {

  var album_id = $routeParams.album_id;
  $scope.slider = false;
  $scope.index = 0;

  $scope.show_slider = function() {
    $scope.slider = true;
    $document.bind('keydown', function(e) {
      switch (e.keyCode) {
        case 27: $scope.hide_slider(); break;
        case 37: console.log('slider left'); $scope.prev_photo(); break;
        case 39: console.log('slide right'); $scope.next_photo(); break;
      }
    });
    $('html, body').css({'height': '100%', 'overflow-y': 'hidden'});
  };


  $scope.hide_slider = function() {
    $scope.slider = false;
    $document.unbind('keydown');
    $('html, body').css({'height': 'auto', 'overflow-y': 'auto'});
    $scope.$apply();
  };

  $scope.prev_photo = function() {
    $scope.index = ($scope.index < 0) ? ($scope.photos.length - 1) : $scope.index - 1;
    $scope.$apply();
  };

  $scope.next_photo = function() {
    $scope.index = ($scope.index > ($scope.photos.length - 1)) ? 0 : $scope.index + 1;
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
