import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Schedule } from '../../../api/schedule';

import template from './locations.component.html';

class LocationsCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      richfieldHours() {
        
        return Schedule.find({location: 'richfield'}, { sort: { section: 1 } });
      },
      salinaHours() {
        
        return Schedule.find({location: 'salina'});
      }
    });
  }
  
  formatDay(start, end) {
    console.log(start, end);
    return `${start} - ${end}`;
  }

}

export default angular.module('lmLocations', [
  angularMeteor
])
  .component('lmLocations', {
    templateUrl: 'imports/components/home/locations/locations.component.html',
    controller: [ '$scope', LocationsCtrl ]
  });
