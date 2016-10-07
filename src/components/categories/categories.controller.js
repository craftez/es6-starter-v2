class CategoriesController {
  constructor(CategoriesModel, $log) {
    'ngInject';
    this.$log = $log;
    this.CategoriesModel = CategoriesModel;
  }

  $onInit() {
    this.$log.log('ON INIT FIRED!');
    this.CategoriesModel.getCategories().then(result => this.categories = result);
  }

  $onDestroy() {
    this.$log.log('EVERY ONE IS DOOMED!');
  }

  onCategorySelected(category) {
    this.$log.log('CATEGORY SELECTED: ', category);
    this.CategoriesModel.setCurrentCategory(category);
  }

  isCurrentCategory(category) {
    return this.CategoriesModel.getCurrentCategory() &&
        this.CategoriesModel.getCurrentCategory().id === category.id;
  }
}

export default CategoriesController;
