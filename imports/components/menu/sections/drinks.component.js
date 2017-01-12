import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './drinks.component.html';

class DrinksCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.soda = $scope.$parent.$ctrl.menu.soda.types;
    this.sizes  = $scope.$parent.$ctrl.menu.soda.sizes;
  }
}

export default angular.module('lmMenuDrinks', [
  angularMeteor
])
  .component('lmMenuDrinks', {
    templateUrl: 'imports/components/menu/sections/drinks.component.html',
    controller: DrinksCtrl
  });
