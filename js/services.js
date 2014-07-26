angular.module('jacatucla')
.factory('jac_services', function($http) {
  var jac_services = {};

  jac_services.get_site_info = $http({method: 'GET', url: 'wp-json/'})
  .success(function(data, status, headers, config) {

  })
  .error(function(data, status, headers, config) {

  });

  return jac_services;
});
