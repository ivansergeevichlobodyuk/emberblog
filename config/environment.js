/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'newblogtest',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
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
    firebase: {
      apiKey: 'AIzaSyDjOuzBlO0ZzJy8N0theaELxPUabxXSFQ8',
      authDomain: 'test22-cebad.firebaseapp.com',
      databaseURL: 'https://test22-cebad.firebaseio.com',
      storageBucket: 'test22-cebad.appspot.com',
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
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

  ENV.torii = {
    providers: {
      'google-oauth2': {
        apiKey: "777529068919-5k19fj84va4diulpvgarsrl4a0v2jq2m.apps.googleusercontent.com",
        redirectUri: "http://localhost:4200/blogs"
      }
    }
  }

  return ENV;
};
