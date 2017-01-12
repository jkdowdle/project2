import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './bread-stix.component.html';

class BreadStixCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.stix = $scope.$parent.$ctrl.menu.stix;
  }
}

export default angular.module('lmMenuBreadStix', [
  angularMeteor
])
  .component('lmMenuBreadStix', {
    templateUrl: 'imports/components/menu/sections/bread-stix.component.html',
    controller: BreadStixCtrl
  });
