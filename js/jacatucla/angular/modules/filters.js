angular.module('jacatucla')
.filter('to_trusted', ['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}])
.filter('convert_rfc_date', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[unix_time.getMonth() - 1];
    var day = unix_time.getDate();
    var year = unix_time.getFullYear();
    return month + ' ' + day + ', ' + year;
  };
});
