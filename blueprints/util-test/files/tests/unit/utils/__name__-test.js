import { assert } from 'chai';
import {
  describe,
  it
} from 'mocha';
import <%= camelizedModuleName %> from '<%= dasherizedPackageName %>/utils/<%= dasherizedModuleName %>';

describe('<%= camelizedModuleName %>', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = <%= camelizedModuleName %>();
    assert.ok(result);
  });
});
