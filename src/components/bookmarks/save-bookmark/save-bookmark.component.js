import template from './save-bookmark.html';
import './save-bookmark.scss';
import controller from './save-bookmark.controller';

const SaveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  controller,
  template
};

export default SaveBookmarkComponent;
