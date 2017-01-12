import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _Tether from 'tether';
window.Tether = _Tether;
import bootstrap from 'bootstrap';

import app from '../imports/components/app/app.component.js';

angular.module('lotsaMotsa', [
  angularMeteor,
  app.name
]);
