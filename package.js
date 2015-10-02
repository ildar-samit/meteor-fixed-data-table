Package.describe({
  name: 'ildar:fixed-data-table',
  version: '0.4.7',
  summary: 'FixedDataTable React component packaged for Meteor',
  git: 'https://github.com/ildarsamit/meteor-fixed-data-table',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.5.1', 'client');
  api.addFiles([
    'fixed-data-table.browserify.js',
    'fixed-data-table.browserify.options.json',
    'fixed-data-table.css',
  ], 'client');
  api.export('FixedDataTable', 'client');
});

Npm.depends({
  'fixed-data-table': '0.4.7',
  'externalify': '0.1.0',
});
