import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  date: DS.belongsTo('date', { inverse: 'fieldSessions' }),
  fieldSpeaker: DS.attr('string'),
  fieldTrack: DS.belongsTo('track'),
  // fieldSessionRoom: DS.belongsTo('node--room'),
  fieldExperienceLevel: DS.belongsTo('experience-level')
});
