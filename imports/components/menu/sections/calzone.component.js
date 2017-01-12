import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './calzone.component.html';

class CalzoneCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.calzone = $scope.$parent.$ctrl.menu.calzone;
  }
}

export default angular.module('lmMenuCalzone', [
  angularMeteor
])
  .component('lmMenuCalzone', {
    templateUrl: 'imports/components/menu/sections/calzone.component.html',
    controller: CalzoneCtrl
  });
