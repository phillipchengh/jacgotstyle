angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document) {

  var album_id = $routeParams.album_id;
  $scope.slider = false;

  var resize_slider = function() {
    var slider_height = $(window).height();
    var slider_width = $(window).width();
  };

  $scope.show_slider = function() {
    $scope.slider = true;
    $document.bind('keydown', function(e) {
      switch (e.keyCode) {
        case 27: $scope.hide_slider(); break;
        case 37: console.log('slide left'); break;
        case 39: console.log('slide right'); break;
      }
    });
    $(window).resize(resize_slider);
    resize_slider();
    $('body').css({'overflow': 'hidden'});
  };


  $scope.hide_slider = function() {
    $scope.slider = false;
    $document.unbind('keydown');
    $(window).unbind('resize');
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
