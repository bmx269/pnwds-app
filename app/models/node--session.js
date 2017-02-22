import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  date: DS.belongsTo('node--date'),
  fieldSpeaker: DS.attr('string')
  // fieldTrack: DS.belongsTo('taxonomy-term--track'),
  // fieldSessionRoom: DS.belongsTo('node--room'),
  // fieldExperienceLevel: DS.belongsTo('taxonomy-term--taxonomy-term--experience-level')
});
