import angular from 'angular';
import angularMeteor from 'angular-meteor';

import lmMenu from '../../constants/menu';

import template from './partial-menu.component.html';

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

class PartialMenuCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.menu = lmMenu;
  }

}

export default angular.module('lmPartialMenu', [
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
  .component('lmPartialMenu', {
    templateUrl: 'imports/components/menu/partial-menu.component.html',
    controller: PartialMenuCtrl
  });
