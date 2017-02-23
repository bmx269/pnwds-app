import DrupalJSONAPIAdapter from 'ember-data-drupal/adapter';
import ENV from '../config/environment';

export default DrupalJSONAPIAdapter.extend({
  host: ENV.host,
  namespace: ENV.namespace
});