import DS from 'ember-data';

export default DS.Model.extend({
  fieldSession: DS.hasMany('session', { inverse: 'fieldTrack'}),
});
