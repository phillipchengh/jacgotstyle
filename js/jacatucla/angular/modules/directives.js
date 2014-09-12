angular.module('jacatucla')
.directive('jacSidebar', function(CONTENT_PATH) {
  return {
    templateUrl: CONTENT_PATH + 'templates/sidebar.php',
    controller: 'sidebar_controller'
  };
});
