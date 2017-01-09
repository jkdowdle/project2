import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './hiring.component.html';

class HiringCtrl {
  constructor() {
    
  }
  
}

export default angular.module('lmHiring', [
  angularMeteor
])
  .component('lmHiring', {
    templateUrl: 'imports/components/home/hiring/hiring.component.html',
    controller: HiringCtrl
  });