import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dates: this.store.findAll('node--date'),
      sessions: this.store.findAll('node--session')
    });
  },

  setupController(controller, models) {
    controller.set('dates', models.dates);
    controller.set('sessions', models.sessions);
    // or, more concisely:
    // controller.setProperties(models);
  }
});
