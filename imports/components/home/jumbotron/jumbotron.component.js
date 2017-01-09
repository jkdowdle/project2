import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './jumbotron.component.html';

class JumbotronCtrl {
  constructor() {
    
  }
  
}

export default angular.module('lmJumbotron', [
  angularMeteor
])
  .component('lmJumbotron', {
    templateUrl: 'imports/components/home/jumbotron/jumbotron.component.html',
    controller: JumbotronCtrl
  });