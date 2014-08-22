angular.module('jacatucla')
.factory('jac_services', function($http) {
  var jac_services = {};

  jac_services.get_site_info = $http({method: 'GET', url: 'wp-json/'});

  jac_services.get_pages = $http({method: 'GET', url: 'wp-json/pages', params: {'filter[orderby]': 'menu_order', 'filter[order]': 'asc' }});
  
  jac_services.get_posts = function(index) {
    return $http({method: 'GET', url: 'wp-json/posts', params: {'page': index}});
  };

  jac_services.get_albums = $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001', params: {'alt': 'json'}});
  
  jac_services.get_photos = function(album_id) {
     return $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001/albumid/' + album_id, params: {'alt': 'json', 'thumbsize': '160'}});
  };

  return jac_services;
});
