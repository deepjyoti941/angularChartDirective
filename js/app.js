var app = angular.module('MyApp', []);

app.directive('chart', function() {
  return {
    replace: true,
    transclude: true,
    templateUrl: 'chart.html',
    controller: function($scope, $element, $attrs) {
      this.name = 'chartDirective';
    }
  };
});

app.directive('datapoint', function() {
  return {
    replace: true,
    require: '^chart',
    template: '<circle cx="20" cy="20" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#ffffff" stroke="#5B90BF"/>',
    link: function(scope, element, attrs, ctrl) {
      scope.radius = 4;
      scope.strokeWidth = 3;

      console.log(ctrl);
    }
  }
});
