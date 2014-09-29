angular.module('jacatucla')
.controller('freshproduce_controller', function($scope, jac_services, FP_ANTHOLOGY_ALBUM_ID) {
  
  jac_services.get_photos(FP_ANTHOLOGY_ALBUM_ID)
  .success(function(response) {
    $scope.slides = response.feed.entry;
    angular.element($('.freshproduce-carousel-wrapper')).css('display', 'block');
  })
  .error(function(data, status, headers, config) {
    console.log('error');
  });

});
