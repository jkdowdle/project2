import angular       from 'angular';
import angularMeteor from 'angular-meteor';

import lmMenu from '../../constants/menu';

import template from './menu.component.html';

import menuBreadStix        from './sections/bread-stix.component';
import menuBuffet           from './sections/buffet.component';
import menuCalzone          from './sections/calzone.component';
import menuDrinks           from './sections/drinks.component';
import menuHeader           from './sections/header.component';
import menuPizzaComboDetail from './sections/pizza/combo-detail.component';
import menuPizzaSizes       from './sections/pizza/sizes.component';
import menuPizzaSpecialties from './sections/pizza/specialty.component';
import menuPizzaToppings    from './sections/pizza/toppings.component';
import menuSaladbar         from './sections/salad/saladbar.component';
import menuSaladRegular     from './sections/salad/regular.component';

class MenuCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.menu = lmMenu;

    console.log($scope);

    console.log(this.menu);
  }
}

export default angular.module('lmMenu', [
  angularMeteor,
  menuBreadStix.name,
  menuBuffet.name,
  menuCalzone.name,
  menuDrinks.name,
  menuHeader.name,
  menuPizzaComboDetail.name,
  menuPizzaSizes.name,
  menuPizzaSpecialties.name,
  menuPizzaToppings.name,
  menuSaladbar.name,
  menuSaladRegular.name
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
