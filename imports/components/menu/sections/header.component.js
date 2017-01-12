import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './header.component.html';

class HeaderCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.data = $scope.$parent.$ctrl.menu;

  }
}

export default angular.module('lmMenuHeader', [
  angularMeteor
])
  .component('lmMenuHeader', {
    templateUrl: 'imports/components/menu/sections/header.component.html',
    controller: HeaderCtrl
  });
