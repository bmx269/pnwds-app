import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';

const {
  Route,
  RSVP
} = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  moment: Ember.inject.service(),
  beforeModel() {
    this.get('moment').setTimeZone('America/Los_Angeles');
  },
  beforeSessionExpired() {
    // Do async logic
    // Notify the user that they are about to be logged out.

    return RSVP.resolve();
  }
});
