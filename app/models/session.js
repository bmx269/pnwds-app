import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  date: DS.hasMany('date', { inverse: 'fieldSessions' }),
  fieldSpeaker: DS.attr('string'),
  fieldTrack: DS.belongsTo('track', { inverse: 'session'}),
  fieldRoom: DS.belongsTo('room', { inverse: 'session' }),
  fieldLevel: DS.belongsTo('level', { inverse: 'session'})
});
