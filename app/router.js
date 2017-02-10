import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sessions', function() {
  });
  this.route('venue', function() {
    this.route('map');
  });
  this.route('stats', function() {
    this.route('sessions', function() {
      this.route('session', {path: ':id'}, function() {
        this.route('attendies');
        this.route('comments');
      });
    });
  });
  this.route('tracks', function() {
    this.route('track', {path: ':id'});
  });
  this.route('dates', function() {
    this.route('date', {path: ':id'});
  });
  this.route('404');
});

export default Router;
