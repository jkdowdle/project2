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
  })
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
    .state('menu', {
      url: '/menu',
      template: '<lm-menu></lm-menu>'
    });
}
