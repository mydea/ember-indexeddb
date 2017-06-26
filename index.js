/* eslint-env node */
'use strict';

var fastbootTransform = require('fastboot-transform');
var Funnel = require('broccoli-funnel');
var Merge = require('broccoli-merge-trees');
var path = require('path');
var existsSync = require('exists-sync');

module.exports = {
  name: 'ember-indexeddb',

  included: function(app) {
    this._super.included(app);

    // In ember-cli < 2.7, this.import is not available, so fall back to use app.import
    var importShim = typeof this.import !== 'undefined' ? this : app;
    importShim.import('vendor/dexie/dexie.js');
  },

  treeForVendor(tree) {
    let trees = [];

    if (tree) {
      trees.push(tree);
    }

    var app = this._findHost();
    var assetDir = path.join(this.project.root, app.bowerDirectory, 'dexie', 'dist');

    if (existsSync(assetDir)) {
      var browserTrees = fastbootTransform(new Funnel(assetDir, {
        files: ['dexie.js'],
        destDir: 'dexie'
      }));
      trees.push(browserTrees);
    }

    return new Merge(trees);
  }
};
