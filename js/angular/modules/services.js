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

  jac_services.get_albums = $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001', params: {'alt': 'json'}})
  .success(function(data, status, headers, config) {
    
  })
  .error(function(data, status, headers, config) {
    
  });

  jac_services.get_photos = function(album_id) {
     var get_photos_req = $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001/albumid/' + album_id, params: {'alt': 'json', 'thumbsize': '160'}}) 
    .success(function(data, status, headers, config) {

    })
    .error(function(data, status, headers, config) {

    });
    return get_photos_req;
  };

  return jac_services;
});
