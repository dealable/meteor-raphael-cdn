Package.describe({
  name: 'viacdn:raphael',
  summary: 'Raphaël via CDN for Meteor',
  version: '2.1.0',
  git: 'https://github.com/dealable/meteor-raphael-cdn.git'
});

Package.onUse(function(api) {
  api.addFiles('load.js','client');
});
