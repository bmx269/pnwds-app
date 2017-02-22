import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dates: this.store.findAll('date')
    });
  },

  setupController(controller, models) {
    controller.set('dates', models.dates);
    // or, more concisely:
    // controller.setProperties(models);
  }
});
