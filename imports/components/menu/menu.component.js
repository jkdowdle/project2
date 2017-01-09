import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menu.component.html';

class MenuCtrl {
  constructor() {
    
  }
}

export default angular.module('lmMenu', [
  angularMeteor
])
  .component('lmMenu', {
    templateUrl: 'imports/components/menu/menu.component.html',
    controller: MenuCtrl
  });