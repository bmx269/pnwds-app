import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  session: DS.belongsTo('session', { inverse: 'fieldExperienceLevel' })
});
