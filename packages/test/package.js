"use strict";

Package.describe({
  name: 'test',
  version: '0.0.1',
  summary: 'Test package to reproduced forbidden path segment error in Meteor v1.2',
  git: 'https://github.com/cubitworx/meteor-1.2-forbidden-path-segment',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2');

	api.use([
  	'less',
	], 'client');

  api.addFiles([
  	'../../private/test.js',
  ],'client');

});
