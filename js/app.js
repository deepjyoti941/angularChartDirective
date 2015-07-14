var app = angular.module('MyApp', []);

app.directive('chart', function() {
  return {
    replace: true,
    transclude: true,
    templateUrl: 'chart.html'
  };
});

app.directive('datapoint', function() {
  return {
    replace: true,
    template: '<circle cx="20" cy="20" r="4" stroke-width="3" fill="#ffffff" stroke="#5B90BF"/>'
  }
});
