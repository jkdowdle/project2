import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './combo-detail.component.html';

class PizzaComboDetailCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.comboToppings = $scope.$parent.$ctrl.menu.pizza.comboHas;
  }
}

export default angular.module('lmMenuPizzaComboDetail', [
  angularMeteor
])
  .component('lmMenuPizzaComboDetail', {
    templateUrl: 'imports/components/menu/sections/pizza/combo-detail.component.html',
    controller: PizzaComboDetailCtrl
  });
