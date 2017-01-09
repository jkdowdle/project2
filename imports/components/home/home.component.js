import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './home.component.html';

import jumbotron from './jumbotron/jumbotron.component';
import locations from './locations/locations.component';
import hiring from './hiring/hiring.component';

class HomeCtrl {
  constructor() {
    
  }
  
}

export default angular.module('lmHome', [
  angularMeteor,
  jumbotron.name,
  locations.name,
  hiring.name
])
  .component('lmHome', {
    templateUrl: 'imports/components/home/home.component.html',
    controller: HomeCtrl
  });