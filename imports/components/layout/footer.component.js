import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './footer.component.html';

class FooterCtrl {
  constructor() {
    
  }
}

export default angular.module('lmFooter', [
  angularMeteor
])
  .component('lmFooter', {
    templateUrl: 'imports/components/layout/footer.component.html',
    controller: FooterCtrl,
  });

//templateUrl: 'imports/components/home/home.component.html',
  