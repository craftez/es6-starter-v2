import template from './category-item.html';
import './category-item.scss';

const CategoryItemComponent = {
  bindings: {
    category: '<',
    selected: '&'
  },
  template
};

export default CategoryItemComponent;