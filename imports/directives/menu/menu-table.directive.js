import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menu-table.directive.html';

export default angular.module('lmMenuTable', [
  angularMeteor
])
  .directive('lmMenuTable', () => {
      return {
        restrict: 'E',
        scope: {
          'tableData': '=tableData'
        },
        templateUrl: 'imports/directives/menu/menu-table.directive.html'
      };
  });
