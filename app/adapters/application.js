import DrupalJSONAPIAdapter from 'ember-data-drupal/adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DrupalJSONAPIAdapter.extend({
  authorizer: 'authorizer:token',
  host: ENV.host,
  namespace: ENV.namespace
});