import angular from 'angular';
import CategoriesComponents from './categories.component';
import CategoryItemModule from './category-item';

const CategoriesModule = angular
	.module('categories', [
  CategoryItemModule.name
])
	.component('categories', CategoriesComponents);

export default CategoriesModule;
