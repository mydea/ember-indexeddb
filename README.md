# ember-indexeddb

This addon provides utilities to work with IndexedDB based on [Dexie](http://dexie.org/).

![Test & Lint](https://github.com/mydea/ember-indexeddb/workflows/Test%20&%20Lint/badge.svg)
[![Ember Observer Score](https://emberobserver.com/badges/ember-indexeddb.svg)](https://emberobserver.com/addons/ember-indexeddb)
[![npm version](https://badge.fury.io/js/ember-indexeddb.svg)](https://badge.fury.io/js/ember-indexeddb)

It provides:

* A service to configure the database & migrations/upgrades
* A service to interact with the database
* An ember-data adapter for IndexedDB

This set of utilities makes it possible to query data from an API, put it into IndexedDB, and work with a local database for full offline capabilities.

## Documentation

The documentation shows how to setup & use ember-indexeddb.

[View Documentation](https://mydea.github.io/ember-indexeddb/docs/)

For an example implementation, look at the [example route](https://github.com/mydea/ember-indexeddb/blob/master/tests/dummy/app/example/route.js) in the dummy app. See the example configuration of the [indexed-db-configuration service](https://github.com/mydea/ember-indexeddb/blob/master/tests/dummy/app/services/indexed-db-configuration.js) there as well.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above
