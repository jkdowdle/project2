import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './app.component.html';

import header from '../layout/header.component';
import footer from '../layout/footer.component';
import home from '../home/home.component';
import menu from '../menu/menu.component';

class AppCtrl {
  constructor() {
    
  }
  
}

export default angular.module('lmApp', [
  angularMeteor,
  header.name,
  footer.name,
  home.name,
  menu.name
])
  .component('lmApp', {
    templateUrl: 'imports/components/app/app.component.html',
    controller: AppCtrl
  });


