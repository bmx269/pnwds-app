import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  anonymousLikes: storageFor('likes'),

  isLiked: Ember.computed('anonymousLikes.length', function() {
    return this.get('anonymousLikes').includes(this.get('id'));
  }),

  actions: {
    toggleLike: function(id) {
      if(this.get('isLiked')) {
        this.get('anonymousLikes').removeObject(id);
      } else {
        this.get('anonymousLikes').addObject(id);
      }
    }
  }
});