//
// Copyright (c) 2015, 2016 Revolution Financial Technology, Inc.
//
import angular from 'angular';

import CategoriesModule from './categories';
import BookmarksModule from './bookmarks';

export default angular.module('components', [
  CategoriesModule.name,
  BookmarksModule.name
]);
