import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './special-one.component.html';

console.log('special component');

class SpecialOneCtrl {
  constructor() {
    
  }
}

export default angular.module('lmSpecialOne', [
  angularMeteor
])
  .component('lmSpecialOne', {
    templateUrl: 'imports/components/promos/special-one.component.html',
    controller: SpecialOneCtrl
  });