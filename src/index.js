import 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './styles/main.scss';

import ExampleModule from './components/example';

angular.module('myApp', [
  uiRouter,
  ExampleModule.name
]);
