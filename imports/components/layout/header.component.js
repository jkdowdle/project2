import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './header.component.html';

class HeaderCtrl {
  constructor() {
    
  }
}

export default angular.module('lmHeader', [
  angularMeteor
])
  .component('lmHeader', {
    templateUrl: 'imports/components/layout/header.component.html',
    controller: HeaderCtrl,
  });
  