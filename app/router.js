import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('session', {path: 'session/:id'});
  this.route('venue', function() {
    this.route('map');
  });
  this.route('404');
  this.route('login');
  this.route('loading');
});

export default Router;
