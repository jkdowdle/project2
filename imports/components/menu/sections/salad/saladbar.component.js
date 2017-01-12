import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './saladbar.component.html';

class SaladbarCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.saladbar = $scope.$parent.$ctrl.menu.salad.barOptions;

  }
}

export default angular.module('lmMenuSaladbar', [
  angularMeteor
])
  .component('lmMenuSaladbar', {
    templateUrl: 'imports/components/menu/sections/salad/saladbar.component.html',
    controller: SaladbarCtrl
  });
