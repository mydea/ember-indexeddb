"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,r.default.modulePrefix)
var a=i
e.default=a}),define("dummy/application/adapter",["exports","ember-indexeddb/adapters/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({})
e.default=n}),define("dummy/application/serializer",["exports","ember-indexeddb/serializers/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({})
e.default=n}),define("dummy/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"fxqmt5+m",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/application/template.hbs"}})
e.default=t}),define("dummy/example/route",["exports","ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({indexedDb:Ember.inject.service(),store:Ember.inject.service(),beforeModel:function(){var e=Ember.get(this,"indexedDb")
return Ember.get(e,"setupTask").perform()},model:function(){return Ember.get(this,"store").findAll("item")},actions:{fetchItems:function(){var e=this
return new Ember.RSVP.Promise(function(t,n){e._fetchFromAPI().then(function(){return e.refresh()}).then(t).catch(n)})},markAsRead:function(e){Ember.set(e,"isRead",!0),Ember.set(e,"isSynced",!1),e.save()},addItem:function(){var e=this
Ember.get(this,"store").createRecord("item",{title:"Item",date:(new Date).toISOString().split(".")[0],isSynced:!1,isRead:!1}).save().then(function(){return e.refresh()})},syncItems:function(){this._trySyncServer()},resetDb:function(){return Ember.get(this,"resetDbTask").perform()}},resetDbTask:(0,t.task)(regeneratorRuntime.mark(function e(){var t,n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ember.get(this,"indexedDb"),n=Ember.get(this,"store"),e.next=4,Ember.get(t,"dropDatabaseTask").linked().perform()
case 4:return e.next=6,Ember.get(t,"setupTask").linked().perform()
case 6:return n.unloadAll(),e.next=9,this.refresh()
case 9:case"end":return e.stop()}},e,this)})),_trySyncServer:function(){Ember.get(this,"store").query("item",{isSynced:!1}).then(function(e){alert("".concat(Ember.get(e,"length")," item(s) were synced to the API.")),e.forEach(function(e){Ember.set(e,"isSynced",!0),e.save()})})},_fetchFromAPI:function(){return Ember.get(this,"indexedDb").add("item",[this._createItemPayload(),this._createItemPayload(),this._createItemPayload()])},_createItemPayload:function(){return{id:this._guid(),type:"item",attributes:{title:"Item ",date:(new Date).toISOString().split(".")[0],"is-read":!1}}},_guid:function(){return"".concat(+new Date,"-").concat(Math.random())}})
e.default=n}),define("dummy/example/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"B1IEysrh",block:'{"symbols":["item"],"statements":[[7,"h1"],[9],[0,"\\n  Items\\n"],[10],[0,"\\n\\n"],[7,"table"],[11,"class","table"],[9],[0,"\\n  "],[7,"thead"],[9],[0,"\\n    "],[7,"tr"],[9],[0,"\\n      "],[7,"th"],[9],[0,"\\n        Created on\\n      "],[10],[0,"\\n      "],[7,"th"],[9],[0,"\\n        Is Read\\n      "],[10],[0,"\\n      "],[7,"th"],[9],[0,"\\n        Is Synced\\n      "],[10],[0,"\\n      "],[7,"th"],[9],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n  "],[7,"tbody"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"      "],[7,"tr"],[11,"class","item"],[9],[0,"\\n        "],[7,"td"],[9],[0,"\\n          "],[1,[22,1,["date"]],false],[0,"\\n        "],[10],[0,"\\n        "],[7,"td"],[9],[0,"\\n          "],[1,[22,1,["isRead"]],false],[0,"\\n        "],[10],[0,"\\n        "],[7,"td"],[9],[0,"\\n          "],[1,[22,1,["isSynced"]],false],[0,"\\n        "],[10],[0,"\\n        "],[7,"td"],[9],[0,"\\n          "],[7,"button"],[3,"action",[[22,0,[]],"markAsRead",[22,1,[]]]],[9],[0,"\\n            Mark as read\\n          "],[10],[0,"\\n        "],[10],[0,"\\n      "],[10],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"button"],[11,"id","add-items"],[3,"action",[[22,0,[]],"fetchItems"]],[9],[0,"\\n  Fetch items from API\\n"],[10],[0,"\\n\\n"],[7,"button"],[11,"id","add-items"],[3,"action",[[22,0,[]],"addItem"]],[9],[0,"\\n  Add item locally\\n"],[10],[0,"\\n\\n"],[7,"button"],[11,"id","add-items"],[3,"action",[[22,0,[]],"syncItems"]],[9],[0,"\\n  Sync to server\\n"],[10],[0,"\\n\\n"],[7,"button"],[11,"id","reset-db"],[3,"action",[[22,0,[]],"resetDb"]],[9],[0,"\\n  Reset DB\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/example/template.hbs"}})
e.default=t}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,a=r.versionOnly||r.hideSha,d=r.shaOnly||r.hideVersion,o=null
return a&&(r.showExtended&&(o=i.match(n.versionExtendedRegExp)),o||(o=i.match(n.versionRegExp))),d&&(o=i.match(n.shaRegExp)),o?o[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i}),define("dummy/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/index/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({beforeModel:function(){window.location.href="docs"}})
e.default=t}),define("dummy/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"QmUEhR/X",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/index/template.hbs"}})
e.default=t}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,i=n.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=a}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r}),define("dummy/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("dummy/item/model",["exports","ember-data","ember-indexeddb/mixins/model-bulk-save"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.Model,i=t.default.attr,a=r.extend(n.default,{title:i("string"),date:i("string"),isRead:i("boolean",{defaultValue:!1}),isSynced:i("boolean",{defaultValue:!0})})
e.default=a}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("example")})
var r=n
e.default=r}),define("dummy/services/indexed-db-configuration",["exports","ember-indexeddb/services/indexed-db-configuration"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({currentVersion:1,version1:Ember.computed(function(){return{stores:{item:"&id,*isRead,*isSynced"}}}),mapTable:Ember.computed(function(){var e=this
return{item:function(t){return{id:e._toString(Ember.get(t,"id")),json:e._cleanObject(t),isRead:e._toZeroOne(Ember.get(t,"attributes.is-read")),isSynced:e._toZeroOne(Ember.get(t,"attributes.is-synced"),1)}}}})})
e.default=n}),define("dummy/services/indexed-db",["exports","ember-indexeddb/services/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-indexeddb",version:"1.1.3+19b77f03"})
