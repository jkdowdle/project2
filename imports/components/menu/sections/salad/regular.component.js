import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './regular.component.html';

class SaladRegularCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.salad = $scope.$parent.$ctrl.menu.salad.salad;
    this.dressing = $scope.$parent.$ctrl.menu.salad.dressing;

  }
}

export default angular.module('lmMenuSaladRegular', [
  angularMeteor
])
  .component('lmMenuSaladRegular', {
    templateUrl: 'imports/components/menu/sections/salad/regular.component.html',
    controller: SaladRegularCtrl
  });
