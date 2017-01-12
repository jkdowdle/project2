import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './toppings.component.html';

class PizzaToppingsCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.toppings = $scope.$parent.$ctrl.menu.pizza.toppings;

  }
}

export default angular.module('lmMenuPizzaToppings', [
  angularMeteor
])
  .component('lmMenuPizzaToppings', {
    templateUrl: 'imports/components/menu/sections/pizza/toppings.component.html',
    controller: PizzaToppingsCtrl
  });
