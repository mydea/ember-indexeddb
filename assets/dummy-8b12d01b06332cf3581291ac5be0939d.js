"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("dummy/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/app",["exports","@ember/application","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,r,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(r,e)
var t=a(r)
function r(){var e
i(this,r)
for(var u=arguments.length,a=new Array(u),l=0;l<u;l++)a[l]=arguments[l]
return s(c(e=t.call.apply(t,[this].concat(a))),"modulePrefix",o.default.modulePrefix),s(c(e),"podModulePrefix",o.default.podModulePrefix),s(c(e),"Resolver",n.default),e}return r}(t.default)
e.default=p,(0,r.default)(p,o.default.modulePrefix)})),define("dummy/application/adapter",["exports","ember-indexeddb/adapters/indexed-db"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,e)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}(t.default)
e.default=a})),define("dummy/application/serializer",["exports","ember-indexeddb/serializers/indexed-db"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,e)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}(t.default)
e.default=a})),define("dummy/application/template",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"MdPWMEUF",block:'[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',moduleName:"dummy/application/template.hbs",isStrictMode:!1})
e.default=n})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/example/controller",["exports","@ember/controller","@ember/service","@ember/object","rsvp","ember-concurrency"],(function(e,t,n,r,o,i){var u,a,l,c,f,s
function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=_(e)
if(t){var o=_(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(u=(0,i.task)(regeneratorRuntime.mark((function e(){var t,n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.indexedDb,n=this.store,e.next=3,t.dropDatabaseTask.linked().perform()
case 3:return e.next=5,t.setupTask.linked().perform()
case 5:return n.unloadAll(),e.next=8,this.router.refresh()
case 8:case"end":return e.stop()}}),e,this)}))),a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(a,e)
var t,n,i,u=m(a)
function a(){var e
d(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(h(e=u.call.apply(u,[this].concat(n))),"indexedDb",l,h(e)),p(h(e),"store",c,h(e)),p(h(e),"router",f,h(e)),p(h(e),"resetDbTask",s,h(e)),e}return t=a,(n=[{key:"fetchItems",value:function(){var e=this
return new o.default.Promise((function(t,n){e._fetchFromAPI().then((function(){return e.router.refresh()})).then(t).catch(n)}))}},{key:"markAsRead",value:function(e){(0,r.set)(e,"isRead",!0),(0,r.set)(e,"isSynced",!1),e.save()}},{key:"addItem",value:function(){var e=this
this.store.createRecord("item",{title:"Item",date:(new Date).toISOString().split(".")[0],isSynced:!1,isRead:!1}).save().then((function(){return e.router.refresh()}))}},{key:"syncItems",value:function(){this._trySyncServer()}},{key:"_trySyncServer",value:function(){this.store.query("item",{isSynced:!1}).then((function(e){alert("".concat(e.length," item(s) were synced to the API.")),e.forEach((function(e){(0,r.set)(e,"isSynced",!0),e.save()}))}))}},{key:"_fetchFromAPI",value:function(){return this.indexedDb.add("item",[this._createItemPayload(),this._createItemPayload(),this._createItemPayload()])}},{key:"_createItemPayload",value:function(){return{id:this._guid(),type:"item",attributes:{title:"Item ",date:(new Date).toISOString().split(".")[0],"is-read":!1}}}},{key:"_guid",value:function(){return"".concat(+new Date,"-").concat(Math.random())}}])&&y(t.prototype,n),i&&y(t,i),a}(t.default),l=O(a.prototype,"indexedDb",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(a.prototype,"store",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=O(a.prototype,"router",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(a.prototype,"fetchItems",[r.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchItems"),a.prototype),O(a.prototype,"markAsRead",[r.action],Object.getOwnPropertyDescriptor(a.prototype,"markAsRead"),a.prototype),O(a.prototype,"addItem",[r.action],Object.getOwnPropertyDescriptor(a.prototype,"addItem"),a.prototype),O(a.prototype,"syncItems",[r.action],Object.getOwnPropertyDescriptor(a.prototype,"syncItems"),a.prototype),s=O(a.prototype,"resetDbTask",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)
e.default=g})),define("dummy/example/route",["exports","@ember/routing/route","@ember/service"],(function(e,t,n){var r,o,i
function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return s(this,n)}}function s(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(d,e)
var t,n,r,s=f(d)
function d(){var e
a(this,d)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(p(e=s.call.apply(s,[this].concat(n))),"indexedDb",o,p(e)),u(p(e),"store",i,p(e)),e}return t=d,(n=[{key:"beforeModel",value:function(){return this.indexedDb.setupTask.perform()}},{key:"model",value:function(){return this.store.findAll("item")}}])&&l(t.prototype,n),r&&l(t,r),d}(t.default),o=y(r.prototype,"indexedDb",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=y(r.prototype,"store",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)
e.default=b})),define("dummy/example/template",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"Ber96Gav",block:'[[[10,"h1"],[12],[1,"\\n  Items\\n"],[13],[1,"\\n\\n"],[10,"table"],[14,0,"table"],[12],[1,"\\n  "],[10,"thead"],[12],[1,"\\n    "],[10,"tr"],[12],[1,"\\n      "],[10,"th"],[12],[1,"\\n        Created on\\n      "],[13],[1,"\\n      "],[10,"th"],[12],[1,"\\n        Is Read\\n      "],[13],[1,"\\n      "],[10,"th"],[12],[1,"\\n        Is Synced\\n      "],[13],[1,"\\n      "],[10,"th"],[12],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,"tbody"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,"      "],[10,"tr"],[14,0,"item"],[14,"data-test-row",""],[12],[1,"\\n        "],[10,"td"],[12],[1,"\\n          "],[1,[30,2,["date"]]],[1,"\\n        "],[13],[1,"\\n        "],[10,"td"],[14,"data-test-is-read",""],[12],[1,"\\n          "],[1,[30,2,["isRead"]]],[1,"\\n        "],[13],[1,"\\n        "],[10,"td"],[14,"data-test-is-synced",""],[12],[1,"\\n          "],[1,[30,2,["isSynced"]]],[1,"\\n        "],[13],[1,"\\n        "],[10,"td"],[12],[1,"\\n          "],[11,"button"],[24,"data-test-mark-as-read",""],[4,[38,2],["click",[28,[37,3],[[30,0,["markAsRead"]],[30,2]],null]],null],[12],[1,"\\n            Mark as read\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[2]],null],[1,"  "],[13],[1,"\\n"],[13],[1,"\\n\\n"],[11,"button"],[24,1,"add-items"],[4,[38,2],["click",[30,0,["fetchItems"]]],null],[12],[1,"\\n  Fetch items from API\\n"],[13],[1,"\\n\\n"],[11,"button"],[24,1,"add-items"],[4,[38,2],["click",[30,0,["addItem"]]],null],[12],[1,"\\n  Add item locally\\n"],[13],[1,"\\n\\n"],[11,"button"],[24,1,"add-items"],[4,[38,2],["click",[30,0,["syncItems"]]],null],[12],[1,"\\n  Sync to server\\n"],[13],[1,"\\n\\n"],[11,"button"],[24,1,"reset-db"],[4,[38,2],["click",[28,[37,4],[[30,0,["resetDbTask"]]],null]],null],[12],[1,"\\n  Reset DB\\n"],[13]],["@model","item"],false,["each","-track-array","on","fn","perform"]]',moduleName:"dummy/example/template.hbs",isStrictMode:!1})
e.default=n})),define("dummy/helpers/app-version",["exports","@ember/component/helper","dummy/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n,r){function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.default.APP.version,i=t.versionOnly||t.hideSha,u=t.shaOnly||t.hideVersion,a=null
return i&&(t.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),u&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var i=(0,t.helper)(o)
e.default=i})),define("dummy/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/loc",["exports","@ember/string/helpers/loc"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"loc",{enumerable:!0,get:function(){return t.loc}})})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/perform",["exports","ember-concurrency/helpers/perform"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/task",["exports","ember-concurrency/helpers/task"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/index/route",["exports","@ember/routing/route"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(c,e)
var t,u,a,l=i(c)
function c(){return n(this,c),l.apply(this,arguments)}return t=c,(u=[{key:"beforeModel",value:function(){window.location.href="docs"}}])&&r(t.prototype,u),a&&r(t,a),c}(t.default)
e.default=l})),define("dummy/index/template",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"32aCjLJF",block:'[[[46,[28,[37,1],null,null],null,null,null],[1,"\\n"]],[],false,["component","-outlet"]]',moduleName:"dummy/index/template.hbs",isStrictMode:!1})
e.default=n})),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],(function(e,t,n){function r(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var o,i=n.default.exportApplicationGlobal
o="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),r[o]||(r[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var o={name:"export-application-global",initialize:r}
e.default=o})),define("dummy/initializers/setup-router-service-refresh-polyfill",["exports","ember-router-service-refresh-polyfill/initializers/setup-router-service-refresh-polyfill"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("dummy/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("dummy/item/model",["exports","@ember-data/model","ember-indexeddb/utils/model-bulk-saver","@ember/service"],(function(e,t,n,r){var o,i,u,a,l,c,f,s,p,d
function y(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=O(e)
if(t){var o=O(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(o=(0,t.attr)("string"),i=(0,t.attr)("string"),u=(0,t.attr)("boolean",{defaultValue:!1}),a=(0,t.attr)("boolean",{defaultValue:!0}),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(r,e)
var t=v(r)
function r(){var e
b(this,r)
for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
return y(_(e=t.call.apply(t,[this].concat(i))),"indexedDb",c,_(e)),y(_(e),"title",f,_(e)),y(_(e),"date",s,_(e)),y(_(e),"isRead",p,_(e)),y(_(e),"isSynced",d,_(e)),g(_(e),"modelBulkSaver",new n.ModelBulkSaver(_(e))),e}return r}(t.default),c=j(l.prototype,"indexedDb",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=j(l.prototype,"title",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=j(l.prototype,"date",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=j(l.prototype,"isRead",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=j(l.prototype,"isSynced",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=P})),define("dummy/router",["exports","@ember/routing/router","dummy/config/environment"],(function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(u,e)
var t=i(u)
function u(){var e
r(this,u)
for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l]
return c(a(e=t.call.apply(t,[this].concat(i))),"location",n.default.locationType),c(a(e),"rootURL",n.default.rootURL),e}return u}(t.default)
e.default=f,f.map((function(){this.route("example")}))})),define("dummy/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("dummy/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/indexed-db-configuration",["exports","ember-indexeddb/services/indexed-db-configuration"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,e)
var t=o(i)
function i(){var e
n(this,i)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
return l(u(e=t.call.apply(t,[this].concat(o))),"currentVersion",1),l(u(e),"version1",{stores:{item:"&id,*isRead,*isSynced"}}),l(u(e),"mapTable",{item:function(t){var n,r
return{id:e._toString(t.id),json:e._cleanObject(t),isRead:e._toZeroOne(null===(n=t.attributes)||void 0===n?void 0:n["is-read"]),isSynced:e._toZeroOne(null===(r=t.attributes)||void 0===r?void 0:r["is-synced"],1)}}}),e}return i}(t.default)
e.default=c})),define("dummy/services/indexed-db",["exports","ember-indexeddb/services/indexed-db"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("dummy/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("dummy/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("dummy/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({name:"ember-indexeddb",version:"3.0.0-beta.1+c61f0eb2"})
