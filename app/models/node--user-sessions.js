import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  title: DS.attr('string'),
  created: DS.attr(),
  status: DS.attr(),
  changed: DS.attr(),
  body: DS.attr(),
  fieldSession: DS.belongsTo('node--session'),
});
