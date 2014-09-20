angular.module('jacatucla')
.filter('to_trusted', ['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}])
.filter('convert_rfc_date', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[unix_time.getMonth() - 1];
    var day = unix_time.getDate();
    var year = unix_time.getFullYear();
    return month + ' ' + day + ', ' + year;
  };
})
.filter('get_month', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[unix_time.getMonth() - 1];
    return month;
  };
})
.filter('get_day', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var day = unix_time.getDate();
    return day;
  };
})
.filter('get_year', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var year = unix_time.getFullYear();
    return year;
  };
});
