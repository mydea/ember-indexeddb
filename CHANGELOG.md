# Changelog

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
