Package.describe({
  name: 'ildar:fixed-data-table',
  version: '0.6.0',
  summary: 'FixedDataTable React component packaged for Meteor',
  git: 'https://github.com/ildarsamit/meteor-fixed-data-table',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.14.1_1');
  api.use('cosmos:browserify@0.9.2', 'client');
  api.addFiles([
    'fixed-data-table.browserify.js',
    'fixed-data-table.browserify.options.json',
    'fixed-data-table.css',
  ], 'client');
  api.export('FixedDataTable', 'client');
});

Npm.depends({
  'fixed-data-table': '0.6.0',
  'externalify': '0.1.0',
});
