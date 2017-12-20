/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-indexeddb',

  included(app) {
    this._super.included(app);
    this._ensureThisImport();

    this.import('vendor/dexie/dexie.js');
  },

  treeForVendor(vendorTree) {
    let dexiePath = this._getPath();

    let trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }

    let dexieTree = fastbootTransform(new Funnel(dexiePath, {
      include: ['dexie.js'],
      destDir: 'dexie'
    }));

    trees.push(dexieTree);

    return new MergeTrees(trees, { overwrite: true });
  },

  _getPath() {
    return path.dirname(require.resolve('dexie'));
  },

  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};
