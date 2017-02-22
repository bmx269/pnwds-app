import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.get('store').findAll('node--date');
  // },
  // afterModel(model) {
  //   // like model(), if a promise is returned here
  //   // Ember will wait until it resolves before proceeding
  // },

  // setupController(controller, model) {
  //   controller.set('dates', model);
  //   this.store.findAll('node--session').then(function(sessions) {
  //     controller.set('sessions', sessions);
  //   });
  //   // this.store.findAll('category').then(function(categories) {
  //   //   controller.set('categories', categories);
  //   // });
  // }
  model() {
    return Ember.RSVP.hash({
      dates: this.store.findAll('node--date'),
      sessions: this.store.findAll('node--session'),
      // sessions: this.store.findAll('node--session')
    });
  },

  setupController(controller, models) {
    controller.set('dates', models.dates);
    controller.set('sessions', models.sessions);
    // or, more concisely:
    // controller.setProperties(models);
  }
});
