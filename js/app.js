var app = angular.module('MyApp', []);

app.directive('chart', function() {
  return {
    replace: true,
    transclude: true,
    templateUrl: 'chart.html',
    controller: function($scope, $element, $attrs) {

      var H = parseInt($attrs.height, 10),
      borderWidth = 30;

      var highest = 0;

      this.getY = function(point) {
        if (point.d > highest) {
          highest = point.d;
          $scope.$broadcast('new-highest');
        }

        var adjustment = point.radius + point.strokeWidth - 1;
        var heightSpacer = (H - borderWidth - adjustment) / highest;

        return H - borderWidth - point.d*heightSpacer;
      };

    }
  };
});

app.directive('datapoint', function() {
  return {
    replace: true,
    require: '^chart',
    scope: {
      d: '@'
    },
    template: '<circle cx="20" ng-attr-cy="{{cy}}" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#ffffff" stroke="#5B90BF"/>',
    link: function(scope, element, attrs, ctrl) {
      scope.d = parseInt(scope.d, 10);
      scope.radius = 4;
      scope.strokeWidth = 3;

      setY();

      scope.$on('new-highest', setY);

      function setY() {
        scope.cy = ctrl.getY(scope);
      }
    }
  }
});
