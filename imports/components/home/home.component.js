import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.component.html';

import lmSpecials from '../../constants/specials.js';

import jumbotron from './jumbotron/jumbotron.component';
import locations from './locations/locations.component';
import hiring from './hiring/hiring.component';

class HomeCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.specials = lmSpecials;

  }

}

export default angular.module('lmHome', [
  angularMeteor,
  uiRouter,
  jumbotron.name,
  locations.name,
  hiring.name
])
  .component('lmHome', {
    templateUrl: 'imports/components/home/home.component.html',
    controller: HomeCtrl
  })
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      template: '<lm-home></lm-home>'
    });
}
