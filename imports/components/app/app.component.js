import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './app.component.html';

import header from '../layout/header.component';
import footer from '../layout/footer.component';
import home from '../home/home.component';
import menu from '../menu/menu.component';

import special from '../../directives/special.directive';
import menuDirectives from '../../directives/menu/menu-directives.module';

class AppCtrl {
  constructor() {

  }

}

export default angular.module('lmApp', [
  angularMeteor,
  uiRouter,
  header.name,
  footer.name,
  home.name,
  menu.name,
  special.name,
  menuDirectives.name

])
  .component('lmApp', {
    templateUrl: 'imports/components/app/app.component.html',
    controller: AppCtrl
  })
  .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}
