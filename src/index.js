import angular from 'angular';
import app from './layout';

angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name]);
});
