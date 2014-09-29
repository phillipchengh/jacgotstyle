angular.module('jacatucla', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
.constant('BASE_PATH', BASE_PATH)
.constant('CONTENT_PATH', CONTENT_PATH)
.constant('JAC_PICASA_USER_ID', JAC_PICASA_USER_ID)
.constant('FP_ANTHOLOGY_ALBUM_ID', FP_ANTHOLOGY_ALBUM_ID)
.constant('PAGES', PAGES)
.config(function($routeProvider, $locationProvider, PAGES) {
  $locationProvider.html5Mode(true);
  for (var i = 0; i < PAGES.length; i++) {
    $routeProvider.when(PAGES[i].path, PAGES[i].route);  
  }
  $routeProvider.otherwise({});
  // $routeProvider.otherwise({
  //   redirectTo: BASE_PATH + '/'
  // });
})
.run(function($rootScope, $timeout, $window) {
});
