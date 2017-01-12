import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './sizes.component.html';

class PizzaSizesCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.sizes = $scope.$parent.$ctrl.menu.pizza.sizes;

    console.log('sizes');
    console.log(this.sizes);


  }
}

export default angular.module('lmMenuPizzaSizes', [
  angularMeteor
])
  .component('lmMenuPizzaSizes', {
    templateUrl: 'imports/components/menu/sections/pizza/sizes.component.html',
    controller: PizzaSizesCtrl
  });
