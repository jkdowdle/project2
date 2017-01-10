import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menu-ul.directive.html';

export default angular.module('lmMenuList', [
  angularMeteor
])
  .directive('lmMenuList', () => {
      return {
        restrict: 'E',
        scope: {
          'listData': '=listData'
        },
        templateUrl: 'imports/directives/menu/menu-ul.directive.html'
      };
  });
