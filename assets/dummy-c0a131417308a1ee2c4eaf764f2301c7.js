"use strict"
define("dummy/adapters/-json-api",["exports","@ember-data/adapter/json-api"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var i=l(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
return a(e)}(this,r)}}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(o,Ember.Application)
var r=u(o)
function o(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,o)
for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l]
return c(a(e=r.call.apply(r,[this].concat(u))),"modulePrefix",n.default.modulePrefix),c(a(e),"podModulePrefix",n.default.podModulePrefix),c(a(e),"Resolver",t.default),e}return o}()
e.default=f,(0,r.default)(f,n.default.modulePrefix)}),define("dummy/application/adapter",["exports","ember-indexeddb/adapters/indexed-db"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,o=i(e)
if(t){var u=i(this).constructor
n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(i,t.default)
var r=o(i)
function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return i}()
e.default=u}),define("dummy/application/serializer",["exports","ember-indexeddb/serializers/indexed-db"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,o=i(e)
if(t){var u=i(this).constructor
n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(i,t.default)
var r=o(i)
function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return i}()
e.default=u}),define("dummy/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"wdcUwJ3f",block:'{"symbols":[],"statements":[[1,0,0,0,[31,0,0,[27,[26,1,"CallHead"],[]],[[31,0,0,[27,[26,0,"CallHead"],[]],null,null]],null]]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"dummy/application/template.hbs"}})
e.default=t}),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/data-adapter",["exports","@ember-data/debug"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/example/route",["exports","ember-concurrency"],function(e,t){var r,n,o,i,u,a,l,c,f,s,d,p
function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var r,n=O(e)
if(t){var o=O(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t
return _(e)}(this,r)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(r=Ember.inject.service,n=Ember.inject.service,o=Ember._action,i=Ember._action,u=Ember._action,a=Ember._action,l=Ember._action,c=(0,t.task)(regeneratorRuntime.mark(function e(){var t,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.indexedDb,r=this.store,e.next=3,t.dropDatabaseTask.linked().perform()
case 3:return e.next=5,t.setupTask.linked().perform()
case 5:return r.unloadAll(),e.next=8,this.refresh()
case 8:case"end":return e.stop()}},e,this)})),s=g((f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)})(i,Ember.Route)
var t,r,n,o=h(i)
function i(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return b(_(e=o.call.apply(o,[this].concat(r))),"indexedDb",s,_(e)),b(_(e),"store",d,_(e)),b(_(e),"resetDbTask",p,_(e)),e}return t=i,(r=[{key:"beforeModel",value:function(){return this.indexedDb.setupTask.perform()}},{key:"model",value:function(){return this.store.findAll("item")}},{key:"fetchItems",value:function(){var e=this
return new Ember.RSVP.Promise(function(t,r){e._fetchFromAPI().then(function(){return e.refresh()}).then(t).catch(r)})}},{key:"markAsRead",value:function(e){Ember.set(e,"isRead",!0),Ember.set(e,"isSynced",!1),e.save()}},{key:"addItem",value:function(){var e=this
this.store.createRecord("item",{title:"Item",date:(new Date).toISOString().split(".")[0],isSynced:!1,isRead:!1}).save().then(function(){return e.refresh()})}},{key:"syncItems",value:function(){this._trySyncServer()}},{key:"resetDb",value:function(){return this.resetDbTask.perform()}},{key:"_trySyncServer",value:function(){this.store.query("item",{isSynced:!1}).then(function(e){alert("".concat(e.length," item(s) were synced to the API.")),e.forEach(function(e){Ember.set(e,"isSynced",!0),e.save()})})}},{key:"_fetchFromAPI",value:function(){return this.indexedDb.add("item",[this._createItemPayload(),this._createItemPayload(),this._createItemPayload()])}},{key:"_createItemPayload",value:function(){return{id:this._guid(),type:"item",attributes:{title:"Item ",date:(new Date).toISOString().split(".")[0],"is-read":!1}}}},{key:"_guid",value:function(){return"".concat(+new Date,"-").concat(Math.random())}}])&&m(t.prototype,r),n&&m(t,n),i}()).prototype,"indexedDb",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=g(f.prototype,"store",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(f.prototype,"fetchItems",[o],Object.getOwnPropertyDescriptor(f.prototype,"fetchItems"),f.prototype),g(f.prototype,"markAsRead",[i],Object.getOwnPropertyDescriptor(f.prototype,"markAsRead"),f.prototype),g(f.prototype,"addItem",[u],Object.getOwnPropertyDescriptor(f.prototype,"addItem"),f.prototype),g(f.prototype,"syncItems",[a],Object.getOwnPropertyDescriptor(f.prototype,"syncItems"),f.prototype),g(f.prototype,"resetDb",[l],Object.getOwnPropertyDescriptor(f.prototype,"resetDb"),f.prototype),p=g(f.prototype,"resetDbTask",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f)
e.default=P}),define("dummy/example/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"LGblXUSk",block:'{"symbols":["item"],"statements":[[9,"h1",true],[10],[1,1,0,0,"\\n  Items\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"table",true],[12,"class","table",null],[10],[1,1,0,0,"\\n  "],[9,"thead",true],[10],[1,1,0,0,"\\n    "],[9,"tr",true],[10],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Created on\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Is Read\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Is Synced\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[11],[1,1,0,0,"\\n    "],[11],[1,1,0,0,"\\n  "],[11],[1,1,0,0,"\\n  "],[9,"tbody",true],[10],[1,1,0,0,"\\n"],[5,[27,[26,3,"BlockHead"],[]],[[31,0,0,[27,[26,2,"CallHead"],[]],[[31,0,0,[27,[26,2,"CallHead"],[]],[[27,[26,1,"Expression"],[]]],null]],null]],null,[["default"],[{"statements":[[1,1,0,0,"      "],[9,"tr",true],[12,"class","item",null],[12,"data-test-row","",null],[10],[1,1,0,0,"\\n        "],[9,"td",true],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["date"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[12,"data-test-is-read","",null],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["isRead"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[12,"data-test-is-synced","",null],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["isSynced"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[10],[1,1,0,0,"\\n          "],[9,"button",false],[23,"data-test-mark-as-read","",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"markAsRead",[27,[24,1],[]]],null],[10],[1,1,0,0,"\\n            Mark as read\\n          "],[11],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n      "],[11],[1,1,0,0,"\\n"]],"parameters":[1]}]]],[1,1,0,0,"  "],[11],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"fetchItems"],null],[10],[1,1,0,0,"\\n  Fetch items from API\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"addItem"],null],[10],[1,1,0,0,"\\n  Add item locally\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"syncItems"],null],[10],[1,1,0,0,"\\n  Sync to server\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","reset-db",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"resetDb"],null],[10],[1,1,0,0,"\\n  Reset DB\\n"],[11],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":["action","model","-track-array","each"]}',meta:{moduleName:"dummy/example/template.hbs"}})
e.default=t}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,u=n.shaOnly||n.hideVersion,a=null
return i&&(n.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),u&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o}),define("dummy/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("dummy/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/index/route",["exports"],function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,o=i(e)
if(r){var u=i(this).constructor
n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments)
return function(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(l,Ember.Route)
var t,i,u,a=o(l)
function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return t=l,(i=[{key:"beforeModel",value:function(){window.location.href="docs"}}])&&r(t.prototype,i),u&&r(t,u),l}()
e.default=u}),define("dummy/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"8XeBhSZ7",block:'{"symbols":[],"statements":[[1,0,0,0,[31,0,0,[27,[26,1,"CallHead"],[]],[[31,0,0,[27,[26,0,"CallHead"],[]],null,null]],null]],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"dummy/index/template.hbs"}})
e.default=t}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("dummy/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("dummy/item/model",["exports","@ember-data/model","ember-indexeddb/utils/model-bulk-saver"],function(e,t,r){var n,o,i,u,a,l,c,f,s,d,p
function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t
return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(n=Ember.inject.service,o=(0,t.attr)("string"),i=(0,t.attr)("string"),u=(0,t.attr)("boolean",{defaultValue:!1}),a=(0,t.attr)("boolean",{defaultValue:!0}),c=O((l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(o,t.default)
var n=v(o)
function o(){var e,t,i,u;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,o)
for(var a=arguments.length,l=new Array(a),y=0;y<a;y++)l[y]=arguments[y]
return b(h(e=n.call.apply(n,[this].concat(l))),"indexedDb",c,h(e)),b(h(e),"title",f,h(e)),b(h(e),"date",s,h(e)),b(h(e),"isRead",d,h(e)),b(h(e),"isSynced",p,h(e)),t=h(e),i="modelBulkSaver",u=new r.ModelBulkSaver(h(e)),i in t?Object.defineProperty(t,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[i]=u,e}return o}()).prototype,"indexedDb",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=O(l.prototype,"title",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=O(l.prototype,"date",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=O(l.prototype,"isRead",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=O(l.prototype,"isSynced",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=g}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,o=u(e)
if(t){var a=u(this).constructor
n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return i(e)}(this,n)}}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(u,Ember.Router)
var r=o(u)
function u(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,u)
for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l]
return a(i(e=r.call.apply(r,[this].concat(o))),"location",t.default.locationType),a(i(e),"rootURL",t.default.rootURL),e}return u}()
e.default=l,l.map(function(){this.route("example")})}),define("dummy/serializers/-default",["exports","@ember-data/serializer/json"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/serializers/-json-api",["exports","@ember-data/serializer/json-api"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/serializers/-rest",["exports","@ember-data/serializer/rest"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/indexed-db-configuration",["exports","ember-indexeddb/services/indexed-db-configuration"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,o=u(e)
if(t){var a=u(this).constructor
n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return i(e)}(this,n)}}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(u,t.default)
var r=o(u)
function u(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,u)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return a(i(e=r.call.apply(r,[this].concat(n))),"currentVersion",1),a(i(e),"version1",{stores:{item:"&id,*isRead,*isSynced"}}),a(i(e),"mapTable",{item:function(t){return{id:e._toString(Ember.get(t,"id")),json:e._cleanObject(t),isRead:e._toZeroOne(Ember.get(t,"attributes.is-read")),isSynced:e._toZeroOne(Ember.get(t,"attributes.is-synced"),1)}}}),e}return u}()
e.default=l})
define("dummy/services/indexed-db",["exports","ember-indexeddb/services/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/store",["exports","ember-data/store"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transforms/boolean",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})}),define("dummy/transforms/date",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})}),define("dummy/transforms/number",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})}),define("dummy/transforms/string",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-indexeddb",version:"3.0.0-beta.0+e69275bd"})
