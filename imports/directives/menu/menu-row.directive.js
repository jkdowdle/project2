import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menu-row.directive.html';

export default angular.module('lmMenuRow', [
  angularMeteor
])
  .directive('lmMenuRow', () => {
      return {
        restrict: 'E',
        scope: {
          'rowData': '=rowData'
        },
        templateUrl: 'imports/directives/menu/menu-row.directive.html'
      };
  });
