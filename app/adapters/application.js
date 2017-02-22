import DS from 'ember-data';
import DrupalJSONAPIAdapter from 'ember-data-drupal/adapter';
import ENV from '../config/environment';

export default DrupalJSONAPIAdapter.extend({
  host: ENV.host,
  namespace: ENV.namespace,
  // buildURL(record, suffix) {
  //   return this._super(record, suffix) + '?_format=api_json';
  // },
  // pathForType(type) {
  //   return type.replace('--', '/').replace('-', '_');
  // },
});