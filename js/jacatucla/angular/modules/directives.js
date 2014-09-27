angular.module('jacatucla')
.directive('setNgAnimate', function($animate, CONTENT_PATH) {
  return {
    link: function ($scope, $element, $attrs) {
      $scope.$watch( function() {
        return $scope.$eval($attrs.setNgAnimate, $scope);
      }, function(valnew, valold){
        $animate.enabled(!!valnew, $element);
      });
    }
  };
});
