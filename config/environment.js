/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pnwds-app',
    environment: environment,
    rootURL: '/',
    host: 'https://pnwds-api.smallrobot.co', //drupal
    namespace: 'jsonapi',
    locationType: 'auto',
    moment: {
      // Options:
      // 'all' - all years, all timezones
      // '2010-2020' - 2010-2020, all timezones
      // 'none' - no data, just timezone API
      includeTimezone: 'all'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-simple-auth': {
      authenticationRoute: 'login', 
      auth0: {
        clientID: '1234',
        domain: 'my-company.auth0.com',
        logoutURL: '/logout',
      }
    },
    drupalEntityModels: {
      "track": { entity: 'taxonomy_term', bundle: 'track'},
      "level": { entity: 'taxonomy_term', bundle: 'level' },
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'img-src': "'self' data:",
      'media-src': "'self'",
      'font-src': "'self' data: https://*.auth0.com",
      'style-src': "'self' 'unsafe-inline'",
      'script-src': "'self' 'unsafe-eval' https://*.auth0.com",
      'img-src': '*.gravatar.com *.wp.com data:',
      'connect-src': "'self' http://localhost:* https://your-app-domain.auth0.com"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
