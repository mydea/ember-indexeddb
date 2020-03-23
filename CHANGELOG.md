# [2.0.0](https://github.com/mydea/ember-indexeddb/compare/v1.3.1...v2.0.0) (2020-03-23)

# Changelog

## v2.0.0

* [INTERNAL] Update to use ES6 classes & Octane paradigms
* [INTERNAL] Use ember-auto-import to import Dexie
* [INTERNAL] Updates dependencies to latest
* [BREAKING] Drop support for Ember versions <3.13
* [REFACTOR] Replaces the ModelBulkSave mixin with a new ModelBulkSaver utility class:

## v1.3.0

* [BUGFIX] Ensure `super` is correctly called for `included()` hook
* [INTERNAL] Update ember-concurrency@1.0.0
* [INTERNAL] Update ember-cli-babel@7.7.3
* [INTERNAL] Update dev dependencies

## v1.2.0

* [FEATURE] Stop using `$.extend()` to stop depending on jQuery
* [FEATURE] Generate a basic `indexed-db-configuration` service on addon install
* [DOCS] Improve documentation 

## v1.1.3

* [BUGFIX] Fix model-bulk-save mixin in Ember Data 3.5
* [BUGFIX] Ensure it works without array prototypes
* [INTERNAL] Stop destructing `Ember.testing`
* [INTERNAL] Update dependencies
* [INTERNAL] Update linting setup
 
## v1.1.2

* [BUGFIX] Fix major issue with new test waiter usage when building in production environment

## v1.1.1

* Improve drop/import/export tasks for tests

## v1.1.0

* Add `setupIndexedDb` test helper (import from `ember-indexeddb/test-support/helpers/indexed-db`)
* [BUGFIX] Fix issue where `setup()` would create a second database if called twice
* [INTERNAL] Use ember-concurrency tasks for some async processes

## v1.0.1

* Remove unnecessary bower install of Dexie in install blueprint
* Ensure tests wait on import/export to finish
* [INTERNAL] Update dependencies
* [INTERNAL] Update to new test syntax

## v1.0.0

* Update to Dexie 2.x
* Remove Bower dependency (load Dexie from NPM)
* Ensure tests wait on all IndexedDB processes to be finished
* Ensure this addon works without Array prototype extensions
* Throw an error if indexed-db-configuration service is not extended
* [INTERNAL] Update dependencies & move to new module syntax
* [INTERNAL] Improve tests

## v0.3.0

* Make it compatible with Fastboot 1.0
* Ensure all Dexie functions are wrapped with Ember.RSVP.Promise to make it work nicely with tests
* Improve logging when importing a database
* Add labels to all promises for easier debugging

## v0.2.0
* Add `exportDatabase()` and `importDatabase()` functions

## v0.1.1
* BUGFIX: Add missing generateIdForRecord method to adapter
* BUGFIX: Fix wrong service name lookup

## v0.1.0
* Initial version
