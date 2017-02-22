import Ember from 'ember';

export default Ember.Controller.extend({
  sortedSessions: Ember.computed.sort('sessions', 'sortDefinition'),
  sortDefinition: ['fieldDate'],
});
