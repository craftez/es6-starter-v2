import ExampleModule from './index';
import ExampleController from './example.controller';
import ExampleComponent from './example.component';
import ExampleTemplate from './example.html';

describe('Example', () => {
  let makeController;

  beforeEach(window.module(ExampleModule.name));  // eslint-disable-line
  beforeEach(inject(() => {
    makeController = () => {
      return new ExampleController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(ExampleTemplate).to.match(/\s?\$ctrl\.name\s?/g);
    });
  });


  describe('Component', () => {
    // component/directive specs
    let component = ExampleComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(ExampleTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ExampleController);
    });
  });

});