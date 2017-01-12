import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './specialty.component.html';

class PizzaSpecialtiesCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.specialties = $scope.$parent.$ctrl.menu.pizza.specialties;

  }
}

export default angular.module('lmMenuPizzaSpecialties', [
  angularMeteor
])
  .component('lmMenuPizzaSpecialties', {
    templateUrl: 'imports/components/menu/sections/pizza/specialty.component.html',
    controller: PizzaSpecialtiesCtrl
  });
