import { assert } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  '<%= dasherizedModuleName %>',
  '<%= classifiedModuleName %>Component',
  {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  },
  function() {
    it('renders', function() {
      // creates the component instance
      var component = this.subject();
      assert.equal(component._state, 'preRender');

      // renders the component on the page
      this.render();
      assert.equal(component._state, 'inDOM');
    });
  }
);
