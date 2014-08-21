angular.module('jacatucla')
.factory('jac_services', function($http) {
  var jac_services = {};

  jac_services.get_site_info = $http({method: 'GET', url: 'wp-json/'})
  .success(function(data, status, headers, config) {

  })
  .error(function(data, status, headers, config) {

  });

  jac_services.get_pages = $http({method: 'GET', url: 'wp-json/pages', params: {'filter[orderby]': 'menu_order', 'filter[order]': 'asc' }})
  .success(function(data, status, headers, config) {

  })
  .error(function(data, status, headers, config) {

  });

  jac_services.get_posts = function(index) {
    var get_posts_req = $http({method: 'GET', url: 'wp-json/posts', params: {'page': index}}) 
    .success(function(data, status, headers, config) {

    })
    .error(function(data, status, headers, config) {

    });
    return get_posts_req;
  };

  jac_services.get_albums = $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001?alt=json'})
  .success(function(data, status, headers, config) {
    
  })
  .error(function(data, status, headers, config) {
    
  });

  return jac_services;
});
