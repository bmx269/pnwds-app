import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  title: DS.attr('string'),
  status: DS.attr(),
  fieldRoomNumber: DS.attr('string'),
  session: DS.hasMany('session', { inverse: 'fieldRoom' }),
});
