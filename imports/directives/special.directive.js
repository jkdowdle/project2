import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './special.directive.html';

export default angular.module('lmSpecial', [
  angularMeteor
])
  .directive('lmSpecial', () => {
      return {
        restrict: 'E',
        scope: {
          special: '=special'
        },
        templateUrl: 'imports/directives/special.directive.html'
      };
  });
