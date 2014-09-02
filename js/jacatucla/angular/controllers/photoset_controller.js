var modal_controller = function($scope, $modalInstance, $document, photos) {
  $scope.slides = photos;

  $modalInstance.opened
  .then(function() {
    $document.bind('keydown', function(e) {
      switch (e.keyCode) {
        case 37: $('.left.carousel-control').click(); break;
        case 39: $('.right.carousel-control').click(); break;
      }
    });
  });
 };

angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document, $modal) {

  var album_id = $routeParams.album_id;

  $scope.open_slider = function() {
    var modal = $modal.open({
      templateUrl: 'carousel.html',
      controller: modal_controller,
      size: 'lg',
      resolve: {
        photos: function() {
          return $scope.photos;
        }
      }
    });

    modal.result.then(function(selected_item) {

    }, function() {
      $document.unbind('keydown');
    });
  };
  
  jac_services.get_photos(album_id)
  .error(function(data, status, headers, config) {
    console.log('error!');
  })
  .then(function(response) {
    $scope.photos = response.data.feed.entry;
    $scope.slides = $scope.photos;
  });

});
