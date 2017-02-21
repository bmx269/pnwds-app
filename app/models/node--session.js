import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  title: DS.attr('string'),
  created: DS.attr(),
  status: DS.attr(),
  changed: DS.attr(),
  body: DS.attr(),
  fieldDate: DS.attr(),
  fieldSpeaker: DS.attr('string'),
  fieldTrack: DS.belongsTo('taxonomy-term--track'),
  fieldSessionRoom: DS.belongsTo('node--room'),
  fieldExperienceLevel: DS.belongsTo('taxonomy-term--taxonomy-term--experience-level')
});
