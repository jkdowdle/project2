import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './buffet.component.html';

class BuffetCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.buffet = $scope.$parent.$ctrl.menu.buffet;

  }
}

export default angular.module('lmMenuBuffet', [
  angularMeteor
])
  .component('lmMenuBuffet', {
    templateUrl: 'imports/components/menu/sections/buffet.component.html',
    controller: BuffetCtrl
  });
