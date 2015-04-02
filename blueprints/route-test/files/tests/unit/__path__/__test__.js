import { assert } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'route:<%= dasherizedModuleName %>',
  '<%= classifiedModuleName %>Route',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      var route = this.subject();
      assert.ok(route);
    });
  }
);
