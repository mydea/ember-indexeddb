"use strict"
define("dummy/adapters/-json-api",["exports","@ember-data/adapter/json-api"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(){var t,r=a(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=a(this).constructor
t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments)
return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
return u(e)}(this,t)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(o,Ember.Application)
var r=i(o)
function o(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,o)
for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l]
return c(u(e=r.call.apply(r,[this].concat(a))),"modulePrefix",n.default.modulePrefix),c(u(e),"podModulePrefix",n.default.podModulePrefix),c(u(e),"Resolver",t.default),e}return o}()
e.default=f,(0,r.default)(f,n.default.modulePrefix)}),define("dummy/application/adapter",["exports","ember-indexeddb/adapters/indexed-db"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return function(){var t,n=o(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var i=o(this).constructor
t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,t)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(o,t.default)
var r=n(o)
function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return o}()
e.default=u}),define("dummy/application/serializer",["exports","ember-indexeddb/serializers/indexed-db"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return function(){var t,n=o(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var i=o(this).constructor
t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,t)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(o,t.default)
var r=n(o)
function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return o}()
e.default=u}),define("dummy/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"wdcUwJ3f",block:'{"symbols":[],"statements":[[1,0,0,0,[31,0,0,[27,[26,1,"CallHead"],[]],[[31,0,0,[27,[26,0,"CallHead"],[]],null,null]],null]]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"dummy/application/template.hbs"}})
e.default=t}),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/data-adapter",["exports","@ember-data/debug"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/example/route",["exports","ember-concurrency"],function(e,t){var r,n,o,i,u
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return function(){var t,r=d(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=d(this).constructor
t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments)
return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t
return s(e)}(this,t)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,r,n,o){var i={}
return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=(r=(0,t.task)(regeneratorRuntime.mark(function e(){var t,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ember.get(this,"indexedDb"),r=Ember.get(this,"store"),e.next=4,Ember.get(t,"dropDatabaseTask").linked().perform()
case 4:return e.next=6,Ember.get(t,"setupTask").linked().perform()
case 6:return r.unloadAll(),e.next=9,this.refresh()
case 9:case"end":return e.stop()}},e,this)})),o=y((n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(d,Ember.Route)
var t,r,n,a=f(d)
function d(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,d)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(s(e=a.call.apply(a,[this].concat(r))),"indexedDb",o,s(e)),l(s(e),"store",i,s(e)),l(s(e),"resetDbTask",u,s(e)),e}return t=d,(r=[{key:"beforeModel",value:function(){var e=Ember.get(this,"indexedDb")
return Ember.get(e,"setupTask").perform()}},{key:"model",value:function(){return Ember.get(this,"store").findAll("item")}},{key:"fetchItems",value:function(){var e=this
return new Ember.RSVP.Promise(function(t,r){e._fetchFromAPI().then(function(){return e.refresh()}).then(t).catch(r)})}},{key:"markAsRead",value:function(e){Ember.set(e,"isRead",!0),Ember.set(e,"isSynced",!1),e.save()}},{key:"addItem",value:function(){var e=this
Ember.get(this,"store").createRecord("item",{title:"Item",date:(new Date).toISOString().split(".")[0],isSynced:!1,isRead:!1}).save().then(function(){return e.refresh()})}},{key:"syncItems",value:function(){this._trySyncServer()}},{key:"resetDb",value:function(){return Ember.get(this,"resetDbTask").perform()}},{key:"_trySyncServer",value:function(){Ember.get(this,"store").query("item",{isSynced:!1}).then(function(e){alert("".concat(Ember.get(e,"length")," item(s) were synced to the API.")),e.forEach(function(e){Ember.set(e,"isSynced",!0),e.save()})})}},{key:"_fetchFromAPI",value:function(){return Ember.get(this,"indexedDb").add("item",[this._createItemPayload(),this._createItemPayload(),this._createItemPayload()])}},{key:"_createItemPayload",value:function(){return{id:this._guid(),type:"item",attributes:{title:"Item ",date:(new Date).toISOString().split(".")[0],"is-read":!1}}}},{key:"_guid",value:function(){return"".concat(+new Date,"-").concat(Math.random())}}])&&c(t.prototype,r),n&&c(t,n),d}()).prototype,"indexedDb",[Ember.inject.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=y(n.prototype,"store",[Ember.inject.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(n.prototype,"fetchItems",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"fetchItems"),n.prototype),y(n.prototype,"markAsRead",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"markAsRead"),n.prototype),y(n.prototype,"addItem",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"addItem"),n.prototype),y(n.prototype,"syncItems",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"syncItems"),n.prototype),y(n.prototype,"resetDb",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"resetDb"),n.prototype),u=y(n.prototype,"resetDbTask",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)
e.default=b}),define("dummy/example/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"LGblXUSk",block:'{"symbols":["item"],"statements":[[9,"h1",true],[10],[1,1,0,0,"\\n  Items\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"table",true],[12,"class","table",null],[10],[1,1,0,0,"\\n  "],[9,"thead",true],[10],[1,1,0,0,"\\n    "],[9,"tr",true],[10],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Created on\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Is Read\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[1,1,0,0,"\\n        Is Synced\\n      "],[11],[1,1,0,0,"\\n      "],[9,"th",true],[10],[11],[1,1,0,0,"\\n    "],[11],[1,1,0,0,"\\n  "],[11],[1,1,0,0,"\\n  "],[9,"tbody",true],[10],[1,1,0,0,"\\n"],[5,[27,[26,3,"BlockHead"],[]],[[31,0,0,[27,[26,2,"CallHead"],[]],[[31,0,0,[27,[26,2,"CallHead"],[]],[[27,[26,1,"Expression"],[]]],null]],null]],null,[["default"],[{"statements":[[1,1,0,0,"      "],[9,"tr",true],[12,"class","item",null],[12,"data-test-row","",null],[10],[1,1,0,0,"\\n        "],[9,"td",true],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["date"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[12,"data-test-is-read","",null],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["isRead"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[12,"data-test-is-synced","",null],[10],[1,1,0,0,"\\n          "],[1,0,0,0,[27,[24,1],["isSynced"]]],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n        "],[9,"td",true],[10],[1,1,0,0,"\\n          "],[9,"button",false],[23,"data-test-mark-as-read","",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"markAsRead",[27,[24,1],[]]],null],[10],[1,1,0,0,"\\n            Mark as read\\n          "],[11],[1,1,0,0,"\\n        "],[11],[1,1,0,0,"\\n      "],[11],[1,1,0,0,"\\n"]],"parameters":[1]}]]],[1,1,0,0,"  "],[11],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"fetchItems"],null],[10],[1,1,0,0,"\\n  Fetch items from API\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"addItem"],null],[10],[1,1,0,0,"\\n  Add item locally\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","add-items",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"syncItems"],null],[10],[1,1,0,0,"\\n  Sync to server\\n"],[11],[1,1,0,0,"\\n\\n"],[9,"button",false],[23,"id","reset-db",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],[]],"resetDb"],null],[10],[1,1,0,0,"\\n  Reset DB\\n"],[11],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":["action","model","-track-array","each"]}',meta:{moduleName:"dummy/example/template.hbs"}})
e.default=t}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,u=n.shaOnly||n.hideVersion,a=null
return i&&(n.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),u&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o}),define("dummy/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("dummy/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/index/route",["exports"],function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e){return function(){var r,n=o(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var i=o(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return function(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(l,Ember.Route)
var t,o,u,a=n(l)
function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return t=l,(o=[{key:"beforeModel",value:function(){window.location.href="docs"}}])&&r(t.prototype,o),u&&r(t,u),l}()
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
e.default=r}),define("dummy/item/model",["exports","@ember-data/model","ember-indexeddb/utils/model-bulk-saver"],function(e,t,r){var n,o,i,u,a,l,c,f,s,d
function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e){return function(){var t,r=v(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=v(this).constructor
t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments)
return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t
return m(e)}(this,t)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,r,n,o){var i={}
return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(n=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("boolean",{defaultValue:!1}),u=(0,t.attr)("boolean",{defaultValue:!0}),l=_((a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)})(o,t.default)
var n=b(o)
function o(){var e,t,i,u;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,o)
for(var a=arguments.length,p=new Array(a),b=0;b<a;b++)p[b]=arguments[b]
return y(m(e=n.call.apply(n,[this].concat(p))),"indexedDb",l,m(e)),y(m(e),"title",c,m(e)),y(m(e),"date",f,m(e)),y(m(e),"isRead",s,m(e)),y(m(e),"isSynced",d,m(e)),t=m(e),i="modelBulkSaver",u=new r.ModelBulkSaver(m(e)),i in t?Object.defineProperty(t,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[i]=u,e}return o}()).prototype,"indexedDb",[Ember.inject.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=_(a.prototype,"title",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=_(a.prototype,"date",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=_(a.prototype,"isRead",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=_(a.prototype,"isSynced",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)
e.default=O}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return function(){var t,n=i(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var u=i(this).constructor
t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return o(e)}(this,t)}}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(i,Ember.Router)
var r=n(i)
function i(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i)
for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l]
return a(o(e=r.call.apply(r,[this].concat(u))),"location",t.default.locationType),a(o(e),"rootURL",t.default.rootURL),e}return i}()
e.default=l,l.map(function(){this.route("example")})}),define("dummy/serializers/-default",["exports","@ember-data/serializer/json"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/serializers/-json-api",["exports","@ember-data/serializer/json-api"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/serializers/-rest",["exports","@ember-data/serializer/rest"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/indexed-db-configuration",["exports","ember-indexeddb/services/indexed-db-configuration"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return function(){var t,n=i(e)
if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var u=i(this).constructor
t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments)
return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t
return o(e)}(this,t)}}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(i,t.default)
var r=n(i)
function i(){var e;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i)
for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u]
return a(o(e=r.call.apply(r,[this].concat(n))),"currentVersion",1),a(o(e),"version1",{stores:{item:"&id,*isRead,*isSynced"}}),a(o(e),"mapTable",{item:function(t){return{id:e._toString(Ember.get(t,"id")),json:e._cleanObject(t),isRead:e._toZeroOne(Ember.get(t,"attributes.is-read")),isSynced:e._toZeroOne(Ember.get(t,"attributes.is-synced"),1)}}}),e}return i}()
e.default=l})
define("dummy/services/indexed-db",["exports","ember-indexeddb/services/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/store",["exports","ember-data/store"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transforms/boolean",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})}),define("dummy/transforms/date",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})}),define("dummy/transforms/number",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})}),define("dummy/transforms/string",["exports","@ember-data/serializer/-private"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-indexeddb",version:"2.0.0+7029faef"})
