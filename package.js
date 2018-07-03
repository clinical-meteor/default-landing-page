Package.describe({
  name: 'clinical:default-landing-page',
  version: '0.0.5',
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

  api.use('react-meteor-data@0.2.15');
  api.use('session@1.1.7');
  api.use('ecmascript@0.9.0');
  api.use('meteor-base@1.2.0');
  api.use('clinical:glass-ui@2.2.4');

  api.addFiles('components/LandingPage.js');

  api.export('lib/LandingPage')
  
  api.mainModule('index.jsx', 'client');
});
              