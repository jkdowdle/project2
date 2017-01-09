import angular from 'angular';
import angularMeteor from 'angular-meteor';

import app from '../imports/components/app/app.component.js';

angular.module('lotsaMotsa', [
  angularMeteor,
  app.name
]);