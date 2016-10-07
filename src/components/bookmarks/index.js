import angular from 'angular';
import BookmarksComponent from './bookmarks.component';
import SaveBookmarkModule from './save-bookmark';

export default angular
	.module('BookmarksModule',[
  SaveBookmarkModule.name
])
	.component('bookmarks', BookmarksComponent);