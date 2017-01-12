import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Schedule } from '../../../api/schedule';

import template from './locations.component.html';

class LocationsCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      getSchedule() {
        console.log(Schedule.find({}));
        return Schedule.find({});
      }
    });
  }

}

export default angular.module('lmLocations', [
  angularMeteor
])
  .component('lmLocations', {
    templateUrl: 'imports/components/home/locations/locations.component.html',
    controller: [ '$scope', LocationsCtrl ]
  });
