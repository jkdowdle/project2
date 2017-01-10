import angular from 'angular';
import angularMeteor from 'angular-meteor';

import menuRow from './menu-row.directive';
import menuTable from './menu-table.directive';
import menuList from './menu-ul.directive';

export default angular.module('lmMenuDirectives', [
  angularMeteor,
  menuRow.name,
  menuTable.name,
  menuList.name
]);
