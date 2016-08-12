import uiRouter from 'angular-ui-router';

import ExampleComponent from './example.component';

export default angular
    .module('example', [
      uiRouter
    ])
    .config(($stateProvider) => {
      $stateProvider.state('example', {
        url: '/example',
        template: '<example></example>'
      });
    })
    .component('example', ExampleComponent);
