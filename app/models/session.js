import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  date: DS.belongsTo('date', { inverse: 'fieldSessions' }),
  fieldSpeaker: DS.attr('string'),
  fieldTrack: DS.belongsTo('track', { inverse: 'session' }),
  // fieldSessionRoom: DS.belongsTo('node--room', { inverse: 'session' }),
  fieldExperienceLevel: DS.belongsTo('experience-level', { inverse: 'session' })
});
