import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './locations.component.html';

class LocationsCtrl {
  constructor() {
    
  }
  
}

export default angular.module('lmLocations', [
  angularMeteor
])
  .component('lmLocations', {
    templateUrl: 'imports/components/home/locations/locations.component.html',
    controller: LocationsCtrl
  });