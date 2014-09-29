angular.module('jacatucla')
.factory('jac_services', function($http, BASE_PATH, JAC_PICASA_USER_ID) {
  var jac_services = {};

  jac_services.get_site_info = function() {
    return $http({method: 'GET', url: BASE_PATH + '/wp-json/'});
  };

  jac_services.get_pages = function() {
    return $http({method: 'GET', url: BASE_PATH + '/wp-json/pages', params: {'filter[orderby]': 'menu_order', 'filter[order]': 'asc' }});
  };
  
  jac_services.get_posts = function(index) {
    return $http({method: 'GET', url: BASE_PATH + '/wp-json/posts', params: {'page': index}});
  };

  jac_services.get_archives = function(month, year, index) {
    return $http({method: 'GET', url: BASE_PATH + '/wp-json/posts', params: {'filter[monthnum]': month, 'filter[year]': year, 'page': index}});
  };

  jac_services.get_post = function(name) {
    return $http({method: 'GET', url: BASE_PATH + '/wp-json/posts', params: {'filter[name]': name}});
  };

  jac_services.get_albums = function() {
    return $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/' + JAC_PICASA_USER_ID, params: {'alt': 'json'}});
  };
  
  jac_services.get_photos = function(album_id) {
     return $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/' + JAC_PICASA_USER_ID + '/albumid/' + album_id, params: {'alt': 'json', 'thumbsize': '160', 'imgmax': '1600'}});
  };

  return jac_services;
});
