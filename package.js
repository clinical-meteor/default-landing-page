Package.describe({
  name: 'clinical:default-landing-page',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Default landing page for Meteor on FHIR Community.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/clinical-meteor/default-landing-page',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('react-meteor-data');
  api.use('session');
  api.use('ecmascript');
  api.use('meteor-platform');
  
  api.mainModule('index.jsx', 'client');
});
              