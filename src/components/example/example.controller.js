class BaseExampleController {
  constructor() {
    this.name = 'My example controller';
  }

  onSubmit() {
    this.name = 'new name';
  }
}

export default BaseExampleController;