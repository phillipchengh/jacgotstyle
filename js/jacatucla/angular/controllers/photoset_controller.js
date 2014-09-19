var modal_controller = function($scope, $modalInstance, $document, $timeout, photos, start) {
  $scope.slides = photos;

  $modalInstance.opened
  .then(function() {
    $timeout(function() {
      $('.carousel-indicators').children().eq(start).click();
      $(document).bind('keydown.jacatucla', function(e) {
        switch (e.keyCode) {
          case 37: angular.element($('.left.carousel-control')).triggerHandler('click'); break;
          case 39: angular.element($('.right.carousel-control')).triggerHandler('click'); break;
        }
      });
    });
  });

 };

angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document, $modal) {

  var album_id = $routeParams.album_id;

  $scope.open_slider = function(index) {
    var modal = $modal.open({
      templateUrl: 'carousel.html',
      controller: modal_controller,
      size: 'lg',
      resolve: {
        photos: function() {
          return $scope.photos;
        },
        start: function() {
          return index; 
        }
      }
    });

    modal.result.then(function(selected_item) {
    }, function() {
      $(document).unbind('keydown.jacatucla');
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
