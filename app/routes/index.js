import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dates: this.store.findAll('date'),
      // sessions: this.store.findAll('session'),
      // tracks: this.store.findAll('track'),
      // levels: this.store.findAll('level'),
    });
  },

  setupController(controller, models) {
    controller.set('dates', models.dates);
    // controller.set('sessions', models.sessions);
    // controller.set('tracks', models.tracks);
    // controller.set('levels', models.levels);

    // or, more concisely:
    // controller.setProperties(models);
  }
});
