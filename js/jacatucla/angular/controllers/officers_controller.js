angular.module('jacatucla')
.controller('officers_controller', function($scope) {
  var $officers = $('#officers');
  $officers.imagesLoaded(function() {
    $officers.masonry({
      itemSelector: '.officer-mason'
    });
  });
});
