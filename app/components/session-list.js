import Ember from 'ember';

export default Ember.Component.extend({
  sortedDates: Ember.computed.sort('dates', 'sortDefinition'),
  sortBy: 'fieldDate.value', // default sort by date
  sortDefinition: Ember.computed('sortBy', function() {
  return [ this.get('sortBy') ];
}),
});
