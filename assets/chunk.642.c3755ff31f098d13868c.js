(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[642],{642:function(e,t,n){"use strict"
n.r(t),n.d(t,{Dexie:function(){return Fn}})
var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function i(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u]
return r}var o=Object.keys,u=Array.isArray,a="undefined"!=typeof self?self:"undefined"!=typeof window?window:global
function s(e,t){return"object"!=typeof t||o(t).forEach((function(n){e[n]=t[n]})),e}"undefined"==typeof Promise||a.Promise||(a.Promise=Promise)
var c=Object.getPrototypeOf,l={}.hasOwnProperty
function f(e,t){return l.call(e,t)}function h(e,t){"function"==typeof t&&(t=t(c(e))),o(t).forEach((function(n){d(e,n,t[n])}))}var p=Object.defineProperty
function d(e,t,n,r){p(e,t,s(n&&f(n,"get")&&"function"==typeof n.get?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function y(e){return{from:function(t){return e.prototype=Object.create(t.prototype),d(e.prototype,"constructor",e),{extend:h.bind(null,e.prototype)}}}}var v=Object.getOwnPropertyDescriptor
function m(e,t){var n
return v(e,t)||(n=c(e))&&m(n,t)}var g=[].slice
function b(e,t,n){return g.call(e,t,n)}function _(e,t){return t(e)}function w(e){if(!e)throw new Error("Assertion Failed")}function k(e){a.setImmediate?setImmediate(e):setTimeout(e,0)}function x(e,t){return e.reduce((function(e,n,r){var i=t(n,r)
return i&&(e[i[0]]=i[1]),e}),{})}function P(e,t){if(f(e,t))return e[t]
if(!t)return e
if("string"!=typeof t){for(var n=[],r=0,i=t.length;r<i;++r){var o=P(e,t[r])
n.push(o)}return n}var u=t.indexOf(".")
if(-1!==u){var a=e[t.substr(0,u)]
return void 0===a?void 0:P(a,t.substr(u+1))}}function E(e,t,n){if(e&&void 0!==t&&(!("isFrozen"in Object)||!Object.isFrozen(e)))if("string"!=typeof t&&"length"in t){w("string"!=typeof n&&"length"in n)
for(var r=0,i=t.length;r<i;++r)E(e,t[r],n[r])}else{var o=t.indexOf(".")
if(-1!==o){var a=t.substr(0,o),s=t.substr(o+1)
if(""===s)void 0===n?u(e)&&!isNaN(parseInt(a))?e.splice(a,1):delete e[a]:e[a]=n
else{var c=e[a]
c||(c=e[a]={}),E(c,s,n)}}else void 0===n?u(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function O(e,t){"string"==typeof t?E(e,t,void 0):"length"in t&&[].map.call(t,(function(t){E(e,t,void 0)}))}function S(e){var t={}
for(var n in e)f(e,n)&&(t[n]=e[n])
return t}var j=[].concat
function A(e){return j.apply([],e)}var K="Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(A([8,16,32,64].map((function(e){return["Int","Uint","Float"].map((function(t){return t+e+"Array"}))})))).filter((function(e){return a[e]})),C=K.map((function(e){return a[e]})),I=x(K,(function(e){return[e,!0]}))
function T(e){if(!e||"object"!=typeof e)return e
var t
if(u(e)){t=[]
for(var n=0,r=e.length;n<r;++n)t.push(T(e[n]))}else if(C.indexOf(e.constructor)>=0)t=e
else for(var i in t=e.constructor?Object.create(e.constructor.prototype):{},e)f(e,i)&&(t[i]=T(e[i]))
return t}var D={}.toString
function B(e){return D.call(e).slice(8,-1)}var R=function(e,t){return"Array"===t?""+e.map((function(e){return R(e,B(e))})):"ArrayBuffer"===t?""+new Uint8Array(e):"Date"===t?e.getTime():ArrayBuffer.isView(e)?""+new Uint8Array(e.buffer):e}
function F(e,t,n,r){return n=n||{},r=r||"",o(e).forEach((function(i){if(f(t,i)){var o=e[i],u=t[i]
if("object"==typeof o&&"object"==typeof u&&o&&u){var a=B(o),s=B(u)
a===s?I[a]?R(o,a)!==R(u,s)&&(n[r+i]=t[i]):F(o,u,n,r+i+"."):n[r+i]=t[i]}else o!==u&&(n[r+i]=t[i])}else n[r+i]=void 0})),o(t).forEach((function(i){f(e,i)||(n[r+i]=t[i])})),n}var q="undefined"!=typeof Symbol&&Symbol.iterator,M=q?function(e){var t
return null!=e&&(t=e[q])&&t.apply(e)}:function(){return null},N={}
function U(e){var t,n,r,i
if(1===arguments.length){if(u(e))return e.slice()
if(this===N&&"string"==typeof e)return[e]
if(i=M(e)){for(n=[];!(r=i.next()).done;)n.push(r.value)
return n}if(null==e)return[e]
if("number"==typeof(t=e.length)){for(n=new Array(t);t--;)n[t]=e[t]
return n}return[e]}for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t]
return n}var V="undefined"!=typeof Symbol?function(e){return"AsyncFunction"===e[Symbol.toStringTag]}:function(){return!1},W="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href)
function z(e,t){W=e,L=t}var L=function(){return!0},Y=!new Error("").stack
function G(){if(Y)try{throw new Error}catch(e){return e}return new Error}function H(e,t){var n=e.stack
return n?(t=t||0,0===n.indexOf(e.name)&&(t+=(e.name+e.message).split("\n").length),n.split("\n").slice(t).filter(L).map((function(e){return"\n"+e})).join("")):""}var Q=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],X=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Q),J={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed"}
function $(e,t){this._e=G(),this.name=e,this.message=t}function Z(e,t){return e+". Errors: "+Object.keys(t).map((function(e){return t[e].toString()})).filter((function(e,t,n){return n.indexOf(e)===t})).join("\n")}function ee(e,t,n,r){this._e=G(),this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Z(e,t)}function te(e,t){this._e=G(),this.name="BulkError",this.failures=t,this.message=Z(e,t)}y($).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+H(this._e,2))}},toString:function(){return this.name+": "+this.message}}),y(ee).from($),y(te).from($)
var ne=X.reduce((function(e,t){return e[t]=t+"Error",e}),{}),re=$,ie=X.reduce((function(e,t){var n=t+"Error"
function r(e,r){this._e=G(),this.name=n,e?"string"==typeof e?(this.message=e+(r?"\n "+r:""),this.inner=r||null):"object"==typeof e&&(this.message=e.name+" "+e.message,this.inner=e):(this.message=J[t]||n,this.inner=null)}return y(r).from(re),e[t]=r,e}),{})
ie.Syntax=SyntaxError,ie.Type=TypeError,ie.Range=RangeError
var oe=Q.reduce((function(e,t){return e[t+"Error"]=ie[t],e}),{}),ue=X.reduce((function(e,t){return-1===["Syntax","Type","Range"].indexOf(t)&&(e[t+"Error"]=ie[t]),e}),{})
function ae(){}function se(e){return e}function ce(e,t){return null==e||e===se?t:function(n){return t(e(n))}}function le(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function fe(e,t){return e===ae?t:function(){var n=e.apply(this,arguments)
void 0!==n&&(arguments[0]=n)
var r=this.onsuccess,i=this.onerror
this.onsuccess=null,this.onerror=null
var o=t.apply(this,arguments)
return r&&(this.onsuccess=this.onsuccess?le(r,this.onsuccess):r),i&&(this.onerror=this.onerror?le(i,this.onerror):i),void 0!==o?o:n}}function he(e,t){return e===ae?t:function(){e.apply(this,arguments)
var n=this.onsuccess,r=this.onerror
this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?le(n,this.onsuccess):n),r&&(this.onerror=this.onerror?le(r,this.onerror):r)}}function pe(e,t){return e===ae?t:function(n){var r=e.apply(this,arguments)
s(n,r)
var i=this.onsuccess,o=this.onerror
this.onsuccess=null,this.onerror=null
var u=t.apply(this,arguments)
return i&&(this.onsuccess=this.onsuccess?le(i,this.onsuccess):i),o&&(this.onerror=this.onerror?le(o,this.onerror):o),void 0===r?void 0===u?void 0:u:s(r,u)}}function de(e,t){return e===ae?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function ye(e,t){return e===ae?t:function(){var n=e.apply(this,arguments)
if(n&&"function"==typeof n.then){for(var r=this,i=arguments.length,o=new Array(i);i--;)o[i]=arguments[i]
return n.then((function(){return t.apply(r,o)}))}return t.apply(this,arguments)}}ue.ModifyError=ee,ue.DexieError=$,ue.BulkError=te
var ve={},me="undefined"==typeof Promise?[]:function(){var e=Promise.resolve()
if("undefined"==typeof crypto||!crypto.subtle)return[e,e.__proto__,e]
var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]))
return[t,t.__proto__,e]}(),ge=me[0],be=me[1],_e=me[2],we=be&&be.then,ke=ge&&ge.constructor,xe=!!_e,Pe=!1,Ee=_e?function(){_e.then(He)}:a.setImmediate?setImmediate.bind(null,He):a.MutationObserver?function(){var e=document.createElement("div")
new MutationObserver((function(){He(),e=null})).observe(e,{attributes:!0}),e.setAttribute("i","1")}:function(){setTimeout(He,0)},Oe=function(e,t){Be.push([e,t]),je&&(Ee(),je=!1)},Se=!0,je=!0,Ae=[],Ke=[],Ce=null,Ie=se,Te={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:bt,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach((function(e){try{bt(e[0],e[1])}catch(e){}}))}},De=Te,Be=[],Re=0,Fe=[]
function qe(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
this._listeners=[],this.onuncatched=ae,this._lib=!1
var t=this._PSD=De
if(W&&(this._stackHolder=G(),this._prev=null,this._numPrev=0),"function"!=typeof e){if(e!==ve)throw new TypeError("Not a function")
return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&Ve(this,this._value))}this._state=null,this._value=null,++t.ref,Ue(this,e)}var Me={get:function(){var e=De,t=it
function n(n,r){var i=this,o=!e.global&&(e!==De||t!==it),u=o&&!st(),a=new qe((function(t,a){ze(i,new Ne(vt(n,e,o,u),vt(r,e,o,u),t,a,e))}))
return W&&Ge(a,this),a}return n.prototype=ve,n},set:function(e){d(this,"then",e&&e.prototype===ve?Me:{get:function(){return e},set:Me.set})}}
function Ne(e,t,n,r,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r,this.psd=i}function Ue(e,t){try{t((function(t){if(null===e._state){if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
var n=e._lib&&Qe()
t&&"function"==typeof t.then?Ue(e,(function(e,n){t instanceof qe?t._then(e,n):t.then(e,n)})):(e._state=!0,e._value=t,We(e)),n&&Xe()}}),Ve.bind(null,e))}catch(t){Ve(e,t)}}function Ve(e,t){if(Ke.push(t),null===e._state){var n=e._lib&&Qe()
t=Ie(t),e._state=!1,e._value=t,W&&null!==t&&"object"==typeof t&&!t._promise&&function(n,r,i){try{(function(){var n=m(t,"stack")
t._promise=e,d(t,"stack",{get:function(){return Pe?n&&(n.get?n.get.apply(t):n.value):e.stack}})}).apply(null,void 0)}catch(e){}}(),function(e){Ae.some((function(t){return t._value===e._value}))||Ae.push(e)}(e),We(e),n&&Xe()}}function We(e){var t=e._listeners
e._listeners=[]
for(var n=0,r=t.length;n<r;++n)ze(e,t[n])
var i=e._PSD;--i.ref||i.finalize(),0===Re&&(++Re,Oe((function(){0==--Re&&Je()}),[]))}function ze(e,t){if(null!==e._state){var n=e._state?t.onFulfilled:t.onRejected
if(null===n)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Re,Oe(Le,[n,e,t])}else e._listeners.push(t)}function Le(e,t,n){try{Ce=t
var r,i=t._value
t._state?r=e(i):(Ke.length&&(Ke=[]),r=e(i),-1===Ke.indexOf(i)&&function(e){for(var t=Ae.length;t;)if(Ae[--t]._value===e._value)return void Ae.splice(t,1)}(t)),n.resolve(r)}catch(e){n.reject(e)}finally{Ce=null,0==--Re&&Je(),--n.psd.ref||n.psd.finalize()}}function Ye(e,t,n){if(t.length===n)return t
var r=""
if(!1===e._state){var i,o,u=e._value
null!=u?(i=u.name||"Error",o=u.message||u,r=H(u,0)):(i=u,o=""),t.push(i+(o?": "+o:"")+r)}return W&&((r=H(e._stackHolder,2))&&-1===t.indexOf(r)&&t.push(r),e._prev&&Ye(e._prev,t,n)),t}function Ge(e,t){var n=t?t._numPrev+1:0
n<100&&(e._prev=t,e._numPrev=n)}function He(){Qe()&&Xe()}function Qe(){var e=Se
return Se=!1,je=!1,e}function Xe(){var e,t,n
do{for(;Be.length>0;)for(e=Be,Be=[],n=e.length,t=0;t<n;++t){var r=e[t]
r[0].apply(null,r[1])}}while(Be.length>0)
Se=!0,je=!0}function Je(){var e=Ae
Ae=[],e.forEach((function(e){e._PSD.onunhandled.call(null,e._value,e)}))
for(var t=Fe.slice(0),n=t.length;n;)t[--n]()}function $e(e){return new qe(ve,!1,e)}function Ze(e,t){var n=De
return function(){var r=Qe(),i=De
try{return ht(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{ht(i,!1),r&&Xe()}}}h(qe.prototype,{then:Me,_then:function(e,t){ze(this,new Ne(null,null,e,t,De))},catch:function(e){if(1===arguments.length)return this.then(null,e)
var t=arguments[0],n=arguments[1]
return"function"==typeof t?this.then(null,(function(e){return e instanceof t?n(e):$e(e)})):this.then(null,(function(e){return e&&e.name===t?n(e):$e(e)}))},finally:function(e){return this.then((function(t){return e(),t}),(function(t){return e(),$e(t)}))},stack:{get:function(){if(this._stack)return this._stack
try{Pe=!0
var e=Ye(this,[],20).join("\nFrom previous: ")
return null!==this._state&&(this._stack=e),e}finally{Pe=!1}}},timeout:function(e,t){var n=this
return e<1/0?new qe((function(r,i){var o=setTimeout((function(){return i(new ie.Timeout(t))}),e)
n.then(r,i).finally(clearTimeout.bind(null,o))})):this}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&d(qe.prototype,Symbol.toStringTag,"Dexie.Promise"),Te.env=pt(),h(qe,{all:function(){var e=U.apply(null,arguments).map(ct)
return new qe((function(t,n){0===e.length&&t([])
var r=e.length
e.forEach((function(i,o){return qe.resolve(i).then((function(n){e[o]=n,--r||t(e)}),n)}))}))},resolve:function(e){if(e instanceof qe)return e
if(e&&"function"==typeof e.then)return new qe((function(t,n){e.then(t,n)}))
var t=new qe(ve,!0,e)
return Ge(t,Ce),t},reject:$e,race:function(){var e=U.apply(null,arguments).map(ct)
return new qe((function(t,n){e.map((function(e){return qe.resolve(e).then(t,n)}))}))},PSD:{get:function(){return De},set:function(e){return De=e}},totalEchoes:{get:function(){return it}},newPSD:ut,usePSD:dt,scheduler:{get:function(){return Oe},set:function(e){Oe=e}},rejectionMapper:{get:function(){return Ie},set:function(e){Ie=e}},follow:function(e,t){return new qe((function(n,r){return ut((function(t,n){var r=De
r.unhandleds=[],r.onunhandled=n,r.finalize=le((function(){var e=this
Fe.push((function r(){0===e.unhandleds.length?t():n(e.unhandleds[0]),Fe.splice(Fe.indexOf(r),1)})),++Re,Oe((function(){0==--Re&&Je()}),[])}),r.finalize),e()}),t,n,r)}))}}),ke&&(ke.allSettled&&d(qe,"allSettled",(function(){var e=U.apply(null,arguments).map(ct)
return new qe((function(t){0===e.length&&t([])
var n=e.length,r=new Array(n)
e.forEach((function(e,i){return qe.resolve(e).then((function(e){return r[i]={status:"fulfilled",value:e}}),(function(e){return r[i]={status:"rejected",reason:e}})).then((function(){return--n||t(r)}))}))}))})),ke.any&&"undefined"!=typeof AggregateError&&d(qe,"any",(function(){var e=U.apply(null,arguments).map(ct)
return new qe((function(t,n){0===e.length&&n(new AggregateError([]))
var r=e.length,i=new Array(r)
e.forEach((function(e,o){return qe.resolve(e).then((function(e){return t(e)}),(function(e){i[o]=e,--r||n(new AggregateError(i))}))}))}))})))
var et={awaits:0,echoes:0,id:0},tt=0,nt=[],rt=0,it=0,ot=0
function ut(e,t,n,r){var i=De,o=Object.create(i)
o.parent=i,o.ref=0,o.global=!1,o.id=++ot
var u=Te.env
o.env=xe?{Promise:qe,PromiseProp:{value:qe,configurable:!0,writable:!0},all:qe.all,race:qe.race,allSettled:qe.allSettled,any:qe.any,resolve:qe.resolve,reject:qe.reject,nthen:mt(u.nthen,o),gthen:mt(u.gthen,o)}:{},t&&s(o,t),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()}
var a=dt(o,e,n,r)
return 0===o.ref&&o.finalize(),a}function at(){return et.id||(et.id=++tt),++et.awaits,et.echoes+=100,et.id}function st(){return!!et.awaits&&(0==--et.awaits&&(et.id=0),et.echoes=100*et.awaits,!0)}function ct(e){return et.echoes&&e&&e.constructor===ke?(at(),e.then((function(e){return st(),e}),(function(e){return st(),_t(e)}))):e}function lt(e){++it,et.echoes&&0!=--et.echoes||(et.echoes=et.id=0),nt.push(De),ht(e,!0)}function ft(){var e=nt[nt.length-1]
nt.pop(),ht(e,!1)}function ht(e,t){var n=De
if((t?!et.echoes||rt++&&e===De:!rt||--rt&&e===De)||yt(t?lt.bind(null,e):ft),e!==De&&(De=e,n===Te&&(Te.env=pt()),xe)){var r=Te.env.Promise,i=e.env
be.then=i.nthen,r.prototype.then=i.gthen,(n.global||e.global)&&(Object.defineProperty(a,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function pt(){var e=a.Promise
return xe?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject,nthen:be.then,gthen:e.prototype.then}:{}}function dt(e,t,n,r,i){var o=De
try{return ht(e,!0),t(n,r,i)}finally{ht(o,!1)}}function yt(e){we.call(ge,e)}function vt(e,t,n,r){return"function"!=typeof e?e:function(){var i=De
n&&at(),ht(t,!0)
try{return e.apply(this,arguments)}finally{ht(i,!1),r&&yt(st)}}}function mt(e,t){return function(n,r){return e.call(this,vt(n,t),vt(r,t))}}-1===(""+we).indexOf("[native code]")&&(at=st=ae)
var gt="unhandledrejection"
function bt(e,t){var n
try{n=t.onuncatched(e)}catch(e){}if(!1!==n)try{var r,i={promise:t,reason:e}
if(a.document&&document.createEvent?((r=document.createEvent("Event")).initEvent(gt,!0,!0),s(r,i)):a.CustomEvent&&s(r=new CustomEvent(gt,{detail:i}),i),r&&a.dispatchEvent&&(dispatchEvent(r),!a.PromiseRejectionEvent&&a.onunhandledrejection))try{a.onunhandledrejection(r)}catch(e){}W&&r&&!r.defaultPrevented&&console.warn("Unhandled rejection: "+(e.stack||e))}catch(e){}}var _t=qe.reject
function wt(e,t,n,r){if(e._state.openComplete||De.letThrough){var i=e._createTransaction(t,n,e._dbSchema)
try{i.create()}catch(e){return _t(e)}return i._promise(t,(function(e,t){return ut((function(){return De.trans=i,r(e,t,i)}))})).then((function(e){return i._completion.then((function(){return e}))}))}if(!e._state.isBeingOpened){if(!e._options.autoOpen)return _t(new ie.DatabaseClosed)
e.open().catch(ae)}return e._state.dbReadyPromise.then((function(){return wt(e,t,n,r)}))}var kt="3.0.3",xt=String.fromCharCode(65535),Pt=-1/0,Et="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ot="String expected.",St=[],jt="undefined"!=typeof navigator&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),At=jt,Kt=jt,Ct=function(e){return!/(dexie\.js|dexie\.min\.js)/.test(e)},It="__dbnames",Tt="readonly",Dt="readwrite"
function Bt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Rt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1}
function Ft(e){return function(t){return void 0===P(t,e)&&O(t=T(t),e),t}}var qt=function(){function e(){}return e.prototype._trans=function(e,t,n){var r=this._tx||De.trans,i=this.name
function o(e,n,r){if(!r.schema[i])throw new ie.NotFound("Table "+i+" not part of transaction")
return t(r.idbtrans,r)}var u=Qe()
try{return r&&r.db===this.db?r===De.trans?r._promise(e,o,n):ut((function(){return r._promise(e,o,n)}),{trans:r,transless:De.transless||De}):wt(this.db,e,[this.name],o)}finally{u&&Xe()}},e.prototype.get=function(e,t){var n=this
return e&&e.constructor===Object?this.where(e).first(t):this._trans("readonly",(function(t){return n.core.get({trans:t,key:e}).then((function(e){return n.hook.reading.fire(e)}))})).then(t)},e.prototype.where=function(e){if("string"==typeof e)return new this.db.WhereClause(this,e)
if(u(e))return new this.db.WhereClause(this,"["+e.join("+")+"]")
var t=o(e)
if(1===t.length)return this.where(t[0]).equals(e[t[0]])
var n=this.schema.indexes.concat(this.schema.primKey).filter((function(e){return e.compound&&t.every((function(t){return e.keyPath.indexOf(t)>=0}))&&e.keyPath.every((function(e){return t.indexOf(e)>=0}))}))[0]
if(n&&this.db._maxKey!==xt)return this.where(n.name).equals(n.keyPath.map((function(t){return e[t]})))
!n&&W&&console.warn("The query "+JSON.stringify(e)+" on "+this.name+" would benefit of a compound index ["+t.join("+")+"]")
var r=this.schema.idxByName,i=this.db._deps.indexedDB
function a(e,t){try{return 0===i.cmp(e,t)}catch(e){return!1}}var s=t.reduce((function(t,n){var i=t[0],o=t[1],s=r[n],c=e[n]
return[i||s,i||!s?Bt(o,s&&s.multi?function(e){var t=P(e,n)
return u(t)&&t.some((function(e){return a(c,e)}))}:function(e){return a(c,P(e,n))}):o]}),[null,null]),c=s[0],l=s[1]
return c?this.where(c.name).equals(e[c.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},e.prototype.filter=function(e){return this.toCollection().and(e)},e.prototype.count=function(e){return this.toCollection().count(e)},e.prototype.offset=function(e){return this.toCollection().offset(e)},e.prototype.limit=function(e){return this.toCollection().limit(e)},e.prototype.each=function(e){return this.toCollection().each(e)},e.prototype.toArray=function(e){return this.toCollection().toArray(e)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,u(e)?"["+e.join("+")+"]":e))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(e){this.schema.mappedClass=e
var t=function(t){if(!t)return t
var n=Object.create(e.prototype)
for(var r in t)if(f(t,r))try{n[r]=t[r]}catch(e){}return n}
return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=t,this.hook("reading",t),e},e.prototype.defineClass=function(){return this.mapToClass((function(e){s(this,e)}))},e.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,o=r.keyPath,u=e
return o&&i&&(u=Ft(o)(e)),this._trans("readwrite",(function(e){return n.core.mutate({trans:e,type:"add",keys:null!=t?[t]:null,values:[u]})})).then((function(e){return e.numFailures?qe.reject(e.failures[0]):e.lastResult})).then((function(t){if(o)try{E(e,o,t)}catch(e){}return t}))},e.prototype.update=function(e,t){if("object"!=typeof t||u(t))throw new ie.InvalidArgument("Modifications must be an object.")
if("object"!=typeof e||u(e))return this.where(":id").equals(e).modify(t)
o(t).forEach((function(n){E(e,n,t[n])}))
var n=P(e,this.schema.primKey.keyPath)
return void 0===n?_t(new ie.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(n).modify(t)},e.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,o=r.keyPath,u=e
return o&&i&&(u=Ft(o)(e)),this._trans("readwrite",(function(e){return n.core.mutate({trans:e,type:"put",values:[u],keys:null!=t?[t]:null})})).then((function(e){return e.numFailures?qe.reject(e.failures[0]):e.lastResult})).then((function(t){if(o)try{E(e,o,t)}catch(e){}return t}))},e.prototype.delete=function(e){var t=this
return this._trans("readwrite",(function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]})})).then((function(e){return e.numFailures?qe.reject(e.failures[0]):void 0}))},e.prototype.clear=function(){var e=this
return this._trans("readwrite",(function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Rt})})).then((function(e){return e.numFailures?qe.reject(e.failures[0]):void 0}))},e.prototype.bulkGet=function(e){var t=this
return this._trans("readonly",(function(n){return t.core.getMany({keys:e,trans:n}).then((function(e){return e.map((function(e){return t.hook.reading.fire(e)}))}))}))},e.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,o=(n=n||(i?void 0:t))?n.allKeys:void 0
return this._trans("readwrite",(function(t){var n=r.schema.primKey,u=n.auto,a=n.keyPath
if(a&&i)throw new ie.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys")
if(i&&i.length!==e.length)throw new ie.InvalidArgument("Arguments objects and keys must have the same length")
var s=e.length,c=a&&u?e.map(Ft(a)):e
return r.core.mutate({trans:t,type:"add",keys:i,values:c,wantResults:o}).then((function(e){var t=e.numFailures,n=e.results,i=e.lastResult,u=e.failures
if(0===t)return o?n:i
throw new te(r.name+".bulkAdd(): "+t+" of "+s+" operations failed",Object.keys(u).map((function(e){return u[e]})))}))}))},e.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,o=(n=n||(i?void 0:t))?n.allKeys:void 0
return this._trans("readwrite",(function(t){var n=r.schema.primKey,u=n.auto,a=n.keyPath
if(a&&i)throw new ie.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys")
if(i&&i.length!==e.length)throw new ie.InvalidArgument("Arguments objects and keys must have the same length")
var s=e.length,c=a&&u?e.map(Ft(a)):e
return r.core.mutate({trans:t,type:"put",keys:i,values:c,wantResults:o}).then((function(e){var t=e.numFailures,n=e.results,i=e.lastResult,u=e.failures
if(0===t)return o?n:i
throw new te(r.name+".bulkPut(): "+t+" of "+s+" operations failed",Object.keys(u).map((function(e){return u[e]})))}))}))},e.prototype.bulkDelete=function(e){var t=this,n=e.length
return this._trans("readwrite",(function(n){return t.core.mutate({trans:n,type:"delete",keys:e})})).then((function(e){var r=e.numFailures,i=e.lastResult,o=e.failures
if(0===r)return i
throw new te(t.name+".bulkDelete(): "+r+" of "+n+" operations failed",o)}))},e}()
function Mt(e){var t={},n=function(n,r){if(r){for(var i=arguments.length,o=new Array(i-1);--i;)o[i-1]=arguments[i]
return t[n].subscribe.apply(null,o),e}if("string"==typeof n)return t[n]}
n.addEventType=a
for(var r=1,i=arguments.length;r<i;++r)a(arguments[r])
return n
function a(e,r,i){if("object"==typeof e)return s(e)
r||(r=de),i||(i=ae)
var o={subscribers:[],fire:i,subscribe:function(e){-1===o.subscribers.indexOf(e)&&(o.subscribers.push(e),o.fire=r(o.fire,e))},unsubscribe:function(e){o.subscribers=o.subscribers.filter((function(t){return t!==e})),o.fire=o.subscribers.reduce(r,i)}}
return t[e]=n[e]=o,o}function s(e){o(e).forEach((function(t){var n=e[t]
if(u(n))a(t,e[t][0],e[t][1])
else{if("asap"!==n)throw new ie.InvalidArgument("Invalid event config")
var r=a(t,se,(function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e]
r.subscribers.forEach((function(e){k((function(){e.apply(null,t)}))}))}))}}))}}function Nt(e,t){return y(t).from({prototype:e}),t}function Ut(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Vt(e,t){e.filter=Bt(e.filter,t)}function Wt(e,t,n){var r=e.replayFilter
e.replayFilter=r?function(){return Bt(r(),t())}:t,e.justLimit=n&&!r}function zt(e,t){if(e.isPrimKey)return t.primaryKey
var n=t.getIndexByKeyPath(e.index)
if(!n)throw new ie.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")
return n}function Lt(e,t,n){var r=zt(e,t.schema)
return t.openCursor({trans:n,values:!e.keysOnly,reverse:"prev"===e.dir,unique:!!e.unique,query:{index:r,range:e.range}})}function Yt(e,t,n,r){var i=e.replayFilter?Bt(e.filter,e.replayFilter()):e.filter
if(e.or){var o={},u=function(e,n,r){if(!i||i(n,r,(function(e){return n.stop(e)}),(function(e){return n.fail(e)}))){var u=n.primaryKey,a=""+u
"[object ArrayBuffer]"===a&&(a=""+new Uint8Array(u)),f(o,a)||(o[a]=!0,t(e,n,r))}}
return Promise.all([e.or._iterate(u,n),Gt(Lt(e,r,n),e.algorithm,u,!e.keysOnly&&e.valueMapper)])}return Gt(Lt(e,r,n),Bt(e.algorithm,i),t,!e.keysOnly&&e.valueMapper)}function Gt(e,t,n,r){var i=Ze(r?function(e,t,i){return n(r(e),t,i)}:n)
return e.then((function(e){if(e)return e.start((function(){var n=function(){return e.continue()}
t&&!t(e,(function(e){return n=e}),(function(t){e.stop(t),n=ae}),(function(t){e.fail(t),n=ae}))||i(e.value,e,(function(e){return n=e})),n()}))}))}var Ht=function(){function e(){}return e.prototype._read=function(e,t){var n=this._ctx
return n.error?n.table._trans(null,_t.bind(null,n.error)):n.table._trans("readonly",e).then(t)},e.prototype._write=function(e){var t=this._ctx
return t.error?t.table._trans(null,_t.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},e.prototype._addAlgorithm=function(e){var t=this._ctx
t.algorithm=Bt(t.algorithm,e)},e.prototype._iterate=function(e,t){return Yt(this._ctx,e,t,this._ctx.table.core)},e.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx)
return e&&s(n,e),t._ctx=n,t},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(e){var t=this._ctx
return this._read((function(n){return Yt(t,e,n,t.table.core)}))},e.prototype.count=function(e){var t=this
return this._read((function(e){var n=t._ctx,r=n.table.core
if(Ut(n,!0))return r.count({trans:e,query:{index:zt(n,r.schema),range:n.range}}).then((function(e){return Math.min(e,n.limit)}))
var i=0
return Yt(n,(function(){return++i,!1}),e,r).then((function(){return i}))})).then(e)},e.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],i=n.length-1
function o(e,t){return t?o(e[n[t]],t-1):e[r]}var u="next"===this._ctx.dir?1:-1
function a(e,t){var n=o(e,i),r=o(t,i)
return n<r?-u:n>r?u:0}return this.toArray((function(e){return e.sort(a)})).then(t)},e.prototype.toArray=function(e){var t=this
return this._read((function(e){var n=t._ctx
if("next"===n.dir&&Ut(n,!0)&&n.limit>0){var r=n.valueMapper,i=zt(n,n.table.core.schema)
return n.table.core.query({trans:e,limit:n.limit,values:!0,query:{index:i,range:n.range}}).then((function(e){var t=e.result
return r?t.map(r):t}))}var o=[]
return Yt(n,(function(e){return o.push(e)}),e,n.table.core).then((function(){return o}))}),e)},e.prototype.offset=function(e){var t=this._ctx
return e<=0||(t.offset+=e,Ut(t)?Wt(t,(function(){var t=e
return function(e,n){return 0===t||(1===t?(--t,!1):(n((function(){e.advance(t),t=0})),!1))}})):Wt(t,(function(){var t=e
return function(){return--t<0}}))),this},e.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Wt(this._ctx,(function(){var t=e
return function(e,n,r){return--t<=0&&n(r),t>=0}}),!0),this},e.prototype.until=function(e,t){return Vt(this._ctx,(function(n,r,i){return!e(n.value)||(r(i),t)})),this},e.prototype.first=function(e){return this.limit(1).toArray((function(e){return e[0]})).then(e)},e.prototype.last=function(e){return this.reverse().first(e)},e.prototype.filter=function(e){var t,n
return Vt(this._ctx,(function(t){return e(t.value)})),t=this._ctx,n=e,t.isMatch=Bt(t.isMatch,n),this},e.prototype.and=function(e){return this.filter(e)},e.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},e.prototype.reverse=function(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(e){var t=this._ctx
return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.key,n)}))},e.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},e.prototype.eachPrimaryKey=function(e){var t=this._ctx
return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.primaryKey,n)}))},e.prototype.keys=function(e){var t=this._ctx
t.keysOnly=!t.isMatch
var n=[]
return this.each((function(e,t){n.push(t.key)})).then((function(){return n})).then(e)},e.prototype.primaryKeys=function(e){var t=this._ctx
if("next"===t.dir&&Ut(t,!0)&&t.limit>0)return this._read((function(e){var n=zt(t,t.table.core.schema)
return t.table.core.query({trans:e,values:!1,limit:t.limit,query:{index:n,range:t.range}})})).then((function(e){return e.result})).then(e)
t.keysOnly=!t.isMatch
var n=[]
return this.each((function(e,t){n.push(t.primaryKey)})).then((function(){return n})).then(e)},e.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},e.prototype.firstKey=function(e){return this.limit(1).keys((function(e){return e[0]})).then(e)},e.prototype.lastKey=function(e){return this.reverse().firstKey(e)},e.prototype.distinct=function(){var e=this._ctx,t=e.index&&e.table.schema.idxByName[e.index]
if(!t||!t.multi)return this
var n={}
return Vt(this._ctx,(function(e){var t=e.primaryKey.toString(),r=f(n,t)
return n[t]=!0,!r})),this},e.prototype.modify=function(e){var t=this,n=this._ctx
return this._write((function(r){var i
if("function"==typeof e)i=e
else{var u=o(e),a=u.length
i=function(t){for(var n=!1,r=0;r<a;++r){var i=u[r],o=e[i]
P(t,i)!==o&&(E(t,i,o),n=!0)}return n}}var s=n.table.core,c=s.schema.primaryKey,l=c.outbound,f=c.extractKey,h="testmode"in Fn?1:2e3,p=t.db.core.cmp,d=[],y=0,v=[],m=function(e,t){var n=t.failures,r=t.numFailures
y+=e-r
for(var i=0,u=o(n);i<u.length;i++){var a=u[i]
d.push(n[a])}}
return t.clone().primaryKeys().then((function(e){var t=function(n){var o=Math.min(h,e.length-n)
return s.getMany({trans:r,keys:e.slice(n,n+o)}).then((function(u){for(var a=[],c=[],d=l?[]:null,y=[],v=0;v<o;++v){var g=u[v],b={value:T(g),primKey:e[n+v]}
!1!==i.call(b,b.value,b)&&(null==b.value?y.push(e[n+v]):l||0===p(f(g),f(b.value))?(c.push(b.value),l&&d.push(e[n+v])):(y.push(e[n+v]),a.push(b.value)))}return Promise.resolve(a.length>0&&s.mutate({trans:r,type:"add",values:a}).then((function(e){for(var t in e.failures)y.splice(parseInt(t),1)
m(a.length,e)}))).then((function(e){return c.length>0&&s.mutate({trans:r,type:"put",keys:d,values:c}).then((function(e){return m(c.length,e)}))})).then((function(){return y.length>0&&s.mutate({trans:r,type:"delete",keys:y}).then((function(e){return m(y.length,e)}))})).then((function(){return e.length>n+o&&t(n+h)}))}))}
return t(0).then((function(){if(d.length>0)throw new ee("Error modifying one or more objects",d,y,v)
return e.length}))}))}))},e.prototype.delete=function(){var e=this._ctx,t=e.range
return Ut(e)&&(e.isPrimKey&&!Kt||3===t.type)?this._write((function(n){var r=e.table.core.schema.primaryKey,i=t
return e.table.core.count({trans:n,query:{index:r,range:i}}).then((function(t){return e.table.core.mutate({trans:n,type:"deleteRange",range:i}).then((function(e){var n=e.failures,r=(e.lastResult,e.results,e.numFailures)
if(r)throw new ee("Could not delete some values",Object.keys(n).map((function(e){return n[e]})),t-r)
return t-r}))}))})):this.modify((function(e,t){return t.value=null}))},e}()
function Qt(e,t){return e<t?-1:e===t?0:1}function Xt(e,t){return e>t?-1:e===t?0:1}function Jt(e,t,n){var r=e instanceof rn?new e.Collection(e):e
return r._ctx.error=n?new n(t):new TypeError(t),r}function $t(e){return new e.Collection(e,(function(){return nn("")})).limit(0)}function Zt(e,t,n,r,i,o){for(var u=Math.min(e.length,r.length),a=-1,s=0;s<u;++s){var c=t[s]
if(c!==r[s])return i(e[s],n[s])<0?e.substr(0,s)+n[s]+n.substr(s+1):i(e[s],r[s])<0?e.substr(0,s)+r[s]+n.substr(s+1):a>=0?e.substr(0,a)+t[a]+n.substr(a+1):null
i(e[s],c)<0&&(a=s)}return u<r.length&&"next"===o?e+n.substr(e.length):u<e.length&&"prev"===o?e.substr(0,n.length):a<0?null:e.substr(0,a)+r[a]+n.substr(a+1)}function en(e,t,n,r){var i,o,u,a,s,c,l,f=n.length
if(!n.every((function(e){return"string"==typeof e})))return Jt(e,Ot)
function h(e){i=function(e){return"next"===e?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()}}(e),o=function(e){return"next"===e?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()}}(e),u="next"===e?Qt:Xt
var t=n.map((function(e){return{lower:o(e),upper:i(e)}})).sort((function(e,t){return u(e.lower,t.lower)}))
a=t.map((function(e){return e.upper})),s=t.map((function(e){return e.lower})),c=e,l="next"===e?"":r}h("next")
var p=new e.Collection(e,(function(){return tn(a[0],s[f-1]+r)}))
p._ondirectionchange=function(e){h(e)}
var d=0
return p._addAlgorithm((function(e,n,r){var i=e.key
if("string"!=typeof i)return!1
var h=o(i)
if(t(h,s,d))return!0
for(var p=null,y=d;y<f;++y){var v=Zt(i,h,a[y],s[y],u,c)
null===v&&null===p?d=y+1:(null===p||u(p,v)>0)&&(p=v)}return n(null!==p?function(){e.continue(p+l)}:r),!1})),p}function tn(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function nn(e){return{type:1,lower:e,upper:e}}var rn=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!0,configurable:!0}),e.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r
try{return this._cmp(e,t)>0||0===this._cmp(e,t)&&(n||r)&&(!n||!r)?$t(this):new this.Collection(this,(function(){return tn(e,t,!n,!r)}))}catch(e){return Jt(this,Et)}},e.prototype.equals=function(e){return null==e?Jt(this,Et):new this.Collection(this,(function(){return nn(e)}))},e.prototype.above=function(e){return null==e?Jt(this,Et):new this.Collection(this,(function(){return tn(e,void 0,!0)}))},e.prototype.aboveOrEqual=function(e){return null==e?Jt(this,Et):new this.Collection(this,(function(){return tn(e,void 0,!1)}))},e.prototype.below=function(e){return null==e?Jt(this,Et):new this.Collection(this,(function(){return tn(void 0,e,!1,!0)}))},e.prototype.belowOrEqual=function(e){return null==e?Jt(this,Et):new this.Collection(this,(function(){return tn(void 0,e)}))},e.prototype.startsWith=function(e){return"string"!=typeof e?Jt(this,Ot):this.between(e,e+xt,!0,!0)},e.prototype.startsWithIgnoreCase=function(e){return""===e?this.startsWith(e):en(this,(function(e,t){return 0===e.indexOf(t[0])}),[e],xt)},e.prototype.equalsIgnoreCase=function(e){return en(this,(function(e,t){return e===t[0]}),[e],"")},e.prototype.anyOfIgnoreCase=function(){var e=U.apply(N,arguments)
return 0===e.length?$t(this):en(this,(function(e,t){return-1!==t.indexOf(e)}),e,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var e=U.apply(N,arguments)
return 0===e.length?$t(this):en(this,(function(e,t){return t.some((function(t){return 0===e.indexOf(t)}))}),e,xt)},e.prototype.anyOf=function(){var e=this,t=U.apply(N,arguments),n=this._cmp
try{t.sort(n)}catch(e){return Jt(this,Et)}if(0===t.length)return $t(this)
var r=new this.Collection(this,(function(){return tn(t[0],t[t.length-1])}))
r._ondirectionchange=function(r){n="next"===r?e._ascending:e._descending,t.sort(n)}
var i=0
return r._addAlgorithm((function(e,r,o){for(var u=e.key;n(u,t[i])>0;)if(++i===t.length)return r(o),!1
return 0===n(u,t[i])||(r((function(){e.continue(t[i])})),!1)})),r},e.prototype.notEqual=function(e){return this.inAnyRange([[Pt,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var e=U.apply(N,arguments)
if(0===e.length)return new this.Collection(this)
try{e.sort(this._ascending)}catch(e){return Jt(this,Et)}var t=e.reduce((function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[Pt,t]]}),null)
return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,o=this._descending,u=this._min,a=this._max
if(0===e.length)return $t(this)
if(!e.every((function(e){return void 0!==e[0]&&void 0!==e[1]&&i(e[0],e[1])<=0})))return Jt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ie.InvalidArgument)
var s,c=!t||!1!==t.includeLowers,l=t&&!0===t.includeUppers,f=i
function h(e,t){return f(e[0],t[0])}try{(s=e.reduce((function(e,t){for(var n=0,i=e.length;n<i;++n){var o=e[n]
if(r(t[0],o[1])<0&&r(t[1],o[0])>0){o[0]=u(o[0],t[0]),o[1]=a(o[1],t[1])
break}}return n===i&&e.push(t),e}),[])).sort(h)}catch(e){return Jt(this,Et)}var p=0,d=l?function(e){return i(e,s[p][1])>0}:function(e){return i(e,s[p][1])>=0},y=c?function(e){return o(e,s[p][0])>0}:function(e){return o(e,s[p][0])>=0},v=d,m=new this.Collection(this,(function(){return tn(s[0][0],s[s.length-1][1],!c,!l)}))
return m._ondirectionchange=function(e){"next"===e?(v=d,f=i):(v=y,f=o),s.sort(h)},m._addAlgorithm((function(e,t,r){for(var o=e.key;v(o);)if(++p===s.length)return t(r),!1
return!!function(e){return!d(e)&&!y(e)}(o)||(0===n._cmp(o,s[p][1])||0===n._cmp(o,s[p][0])||t((function(){f===i?e.continue(s[p][0]):e.continue(s[p][1])})),!1)})),m},e.prototype.startsWithAnyOf=function(){var e=U.apply(N,arguments)
return e.every((function(e){return"string"==typeof e}))?0===e.length?$t(this):this.inAnyRange(e.map((function(e){return[e,e+xt]}))):Jt(this,"startsWithAnyOf() only works with strings")},e}()
function on(e){return 1===e.length?e[0]:e}function un(e){try{return e.only([[]]),[[]]}catch(e){return xt}}function an(e){return Ze((function(t){return sn(t),e(t.target.error),!1}))}function sn(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var cn=function(){function e(){}return e.prototype._lock=function(){return w(!De.global),++this._reculock,1!==this._reculock||De.global||(De.lockOwnerFor=this),this},e.prototype._unlock=function(){if(w(!De.global),0==--this._reculock)for(De.global||(De.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift()
try{dt(e[1],e[0])}catch(e){}}return this},e.prototype._locked=function(){return this._reculock&&De.lockOwnerFor!==this},e.prototype.create=function(e){var t=this
if(!this.mode)return this
var n=this.db.idbdb,r=this.db._state.dbOpenError
if(w(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new ie.DatabaseClosed(r)
case"MissingAPIError":throw new ie.MissingAPI(r.message,r)
default:throw new ie.OpenFailed(r)}if(!this.active)throw new ie.TransactionInactive
return w(null===this._completion._state),(e=this.idbtrans=e||n.transaction(on(this.storeNames),this.mode)).onerror=Ze((function(n){sn(n),t._reject(e.error)})),e.onabort=Ze((function(n){sn(n),t.active&&t._reject(new ie.Abort(e.error)),t.active=!1,t.on("abort").fire(n)})),e.oncomplete=Ze((function(){t.active=!1,t._resolve()})),this},e.prototype._promise=function(e,t,n){var r=this
if("readwrite"===e&&"readwrite"!==this.mode)return _t(new ie.ReadOnly("Transaction is readonly"))
if(!this.active)return _t(new ie.TransactionInactive)
if(this._locked())return new qe((function(i,o){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,o)},De])}))
if(n)return ut((function(){var e=new qe((function(e,n){r._lock()
var i=t(e,n,r)
i&&i.then&&i.then(e,n)}))
return e.finally((function(){return r._unlock()})),e._lib=!0,e}))
var i=new qe((function(e,n){var i=t(e,n,r)
i&&i.then&&i.then(e,n)}))
return i._lib=!0,i},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(e){var t=this._root(),n=qe.resolve(e)
if(t._waitingFor)t._waitingFor=t._waitingFor.then((function(){return n}))
else{t._waitingFor=n,t._waitingQueue=[]
var r=t.idbtrans.objectStore(t.storeNames[0])
!function e(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()()
t._waitingFor&&(r.get(-1/0).onsuccess=e)}()}var i=t._waitingFor
return new qe((function(e,r){n.then((function(n){return t._waitingQueue.push(Ze(e.bind(null,n)))}),(function(e){return t._waitingQueue.push(Ze(r.bind(null,e)))})).finally((function(){t._waitingFor===i&&(t._waitingFor=null)}))}))},e.prototype.abort=function(){this.active&&this._reject(new ie.Abort),this.active=!1},e.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={})
if(f(t,e))return t[e]
var n=this.schema[e]
if(!n)throw new ie.NotFound("Table "+e+" not part of transaction")
var r=new this.db.Table(e,n,this)
return r.core=this.db.core.table(e),t[e]=r,r},e}()
function ln(e,t,n,r,i,o,u){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:o,src:(n&&!u?"&":"")+(r?"*":"")+(i?"++":"")+fn(t)}}function fn(e){return"string"==typeof e?e:e?"["+[].join.call(e,"+")+"]":""}function hn(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:x(n,(function(e){return[e.name,e]}))}}function pn(e){return null==e?function(){}:"string"==typeof e?function(e){return 1===e.split(".").length?function(t){return t[e]}:function(t){return P(t,e)}}(e):function(t){return P(t,e)}}function dn(e,t){return"delete"===t.type?t.keys:t.keys||t.values.map(e.extractKey)}function yn(e){return[].slice.call(e)}var vn=0
function mn(e){return null==e?":id":"string"==typeof e?e:"["+e.join("+")+"]"}function gn(e,t,n,r){var o=t.cmp.bind(t)
function a(e){if(3===e.type)return null
if(4===e.type)throw new Error("Cannot convert never type to IDBKeyRange")
var t=e.lower,r=e.upper,i=e.lowerOpen,o=e.upperOpen
return void 0===t?void 0===r?null:n.upperBound(r,!!o):void 0===r?n.lowerBound(t,!!i):n.bound(t,r,!!i,!!o)}var s=function(e,t){var n=yn(e.objectStoreNames)
return{schema:{name:e.name,tables:n.map((function(e){return t.objectStore(e)})).map((function(e){var t=e.keyPath,n=e.autoIncrement,r=u(t),i=null==t,o={},a={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:i,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:pn(t)},indexes:yn(e.indexNames).map((function(t){return e.index(t)})).map((function(e){var t=e.name,n=e.unique,r=e.multiEntry,i=e.keyPath,a={name:t,compound:u(i),keyPath:i,unique:n,multiEntry:r,extractKey:pn(i)}
return o[mn(i)]=a,a})),getIndexByKeyPath:function(e){return o[mn(e)]}}
return o[":id"]=a.primaryKey,null!=t&&(o[mn(t)]=a.primaryKey),a}))},hasGetAll:n.length>0&&"getAll"in t.objectStore(n[0])&&!("undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(e,r),c=s.schema,l=s.hasGetAll,f=c.tables.map((function(e){return function(e){var t=e.name
return{name:t,schema:e,mutate:function(n){var r=n.trans,o=n.type,u=n.keys,s=n.values,c=n.range,l=n.wantResults
return new Promise((function(n,f){n=Ze(n)
var h=r.objectStore(t),p=null==h.keyPath,d="put"===o||"add"===o
if(!d&&"delete"!==o&&"deleteRange"!==o)throw new Error("Invalid operation type: "+o)
var y=(u||s||{length:1}).length
if(u&&s&&u.length!==s.length)throw new Error("Given keys array must have same length as given values array.")
if(0===y)return n({numFailures:0,failures:{},results:[],lastResult:void 0})
var v,m=l&&i(u||dn(e.primaryKey,{type:o,keys:u,values:s})),g=[],b=0,_=function(e){++b,sn(e),m&&(m[e.target._reqno]=void 0),g[e.target._reqno]=e.target.error},w=function(e){var t=e.target
m[t._reqno]=t.result}
if("deleteRange"===o){if(4===c.type)return n({numFailures:b,failures:g,results:m,lastResult:void 0})
v=3===c.type?h.clear():h.delete(a(c))}else{var k=d?p?[s,u]:[s,null]:[u,null],x=k[0],P=k[1]
if(d)for(var E=0;E<y;++E)(v=P&&void 0!==P[E]?h[o](x[E],P[E]):h[o](x[E]))._reqno=E,m&&void 0===m[E]&&(v.onsuccess=w),v.onerror=_
else for(E=0;E<y;++E)(v=h[o](x[E]))._reqno=E,v.onerror=_}var O=function(e){var t=e.target.result
m&&(m[y-1]=t),n({numFailures:b,failures:g,results:m,lastResult:t})}
v.onerror=function(e){_(e),O(e)},v.onsuccess=O}))},getMany:function(e){var n=e.trans,r=e.keys
return new Promise((function(e,i){e=Ze(e)
for(var o,u=n.objectStore(t),a=r.length,s=new Array(a),c=0,l=0,f=function(t){var n=t.target
s[n._pos]=n.result,++l===c&&e(s)},h=an(i),p=0;p<a;++p)null!=r[p]&&((o=u.get(r[p]))._pos=p,o.onsuccess=f,o.onerror=h,++c)
0===c&&e(s)}))},get:function(e){var n=e.trans,r=e.key
return new Promise((function(e,i){e=Ze(e)
var o=n.objectStore(t).get(r)
o.onsuccess=function(t){return e(t.target.result)},o.onerror=an(i)}))},query:function(e){return function(n){return new Promise((function(r,i){r=Ze(r)
var o=n.trans,u=n.values,s=n.limit,c=n.query,l=s===1/0?void 0:s,f=c.index,h=c.range,p=o.objectStore(t),d=f.isPrimaryKey?p:p.index(f.name),y=a(h)
if(0===s)return r({result:[]})
if(e){var v=u?d.getAll(y,l):d.getAllKeys(y,l)
v.onsuccess=function(e){return r({result:e.target.result})},v.onerror=an(i)}else{var m=0,g=u||!("openKeyCursor"in d)?d.openCursor(y):d.openKeyCursor(y),b=[]
g.onsuccess=function(e){var t=g.result
return t?(b.push(u?t.value:t.primaryKey),++m===s?r({result:b}):void t.continue()):r({result:b})},g.onerror=an(i)}}))}}(l),openCursor:function(e){var n=e.trans,r=e.values,i=e.query,o=e.reverse,u=e.unique
return new Promise((function(e,s){e=Ze(e)
var c=i.index,l=i.range,f=n.objectStore(t),h=c.isPrimaryKey?f:f.index(c.name),p=o?u?"prevunique":"prev":u?"nextunique":"next",d=r||!("openKeyCursor"in h)?h.openCursor(a(l),p):h.openKeyCursor(a(l),p)
d.onerror=an(s),d.onsuccess=Ze((function(t){var r=d.result
if(r){r.___id=++vn,r.done=!1
var i=r.continue.bind(r),o=r.continuePrimaryKey
o&&(o=o.bind(r))
var u=r.advance.bind(r),a=function(){throw new Error("Cursor not stopped")}
r.trans=n,r.stop=r.continue=r.continuePrimaryKey=r.advance=function(){throw new Error("Cursor not started")},r.fail=Ze(s),r.next=function(){var e=this,t=1
return this.start((function(){return t--?e.continue():e.stop()})).then((function(){return e}))},r.start=function(e){var t=new Promise((function(e,t){e=Ze(e),d.onerror=an(t),r.fail=t,r.stop=function(t){r.stop=r.continue=r.continuePrimaryKey=r.advance=a,e(t)}})),n=function(){if(d.result)try{e()}catch(e){r.fail(e)}else r.done=!0,r.start=function(){throw new Error("Cursor behind last entry")},r.stop()}
return d.onsuccess=Ze((function(e){d.onsuccess=n,n()})),r.continue=i,r.continuePrimaryKey=o,r.advance=u,n(),t},e(r)}else e(null)}),s)}))},count:function(e){var n=e.query,r=e.trans,i=n.index,o=n.range
return new Promise((function(e,n){var u=r.objectStore(t),s=i.isPrimaryKey?u:u.index(i.name),c=a(o),l=c?s.count(c):s.count()
l.onsuccess=Ze((function(t){return e(t.target.result)})),l.onerror=an(n)}))}}}(e)})),h={}
return f.forEach((function(e){return h[e.name]=e})),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(e){if(!h[e])throw new Error("Table '"+e+"' not found")
return h[e]},cmp:o,MIN_KEY:-1/0,MAX_KEY:un(n),schema:c}}function bn(e,t){var n=t.db,i=function(e,t,n,i){var o=n.IDBKeyRange
return{dbcore:function(e,t){return t.reduce((function(e,t){var n=t.create
return r(r({},e),n(e))}),e)}(gn(t,n.indexedDB,o,i),e.dbcore)}}(e._middlewares,n,e._deps,t)
e.core=i.dbcore,e.tables.forEach((function(t){var n=t.name
e.core.schema.tables.some((function(e){return e.name===n}))&&(t.core=e.core.table(n),e[n]instanceof e.Table&&(e[n].core=t.core))}))}function _n(e,t,n,r){n.forEach((function(n){var i=r[n]
t.forEach((function(t){var r=m(t,n);(!r||"value"in r&&void 0===r.value)&&(t===e.Transaction.prototype||t instanceof e.Transaction?d(t,n,{get:function(){return this.table(n)},set:function(e){p(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))}))}))}function wn(e,t){t.forEach((function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]}))}function kn(e,t){return e._cfg.version-t._cfg.version}function xn(e,t){var n,r={del:[],add:[],change:[]}
for(n in e)t[n]||r.del.push(n)
for(n in t){var i=e[n],o=t[n]
if(i){var u={name:n,def:o,recreate:!1,del:[],add:[],change:[]}
if(""+(i.primKey.keyPath||"")!=""+(o.primKey.keyPath||"")||i.primKey.auto!==o.primKey.auto&&!jt)u.recreate=!0,r.change.push(u)
else{var a=i.idxByName,s=o.idxByName,c=void 0
for(c in a)s[c]||u.del.push(c)
for(c in s){var l=a[c],f=s[c]
l?l.src!==f.src&&u.change.push(f):u.add.push(f)}(u.del.length>0||u.add.length>0||u.change.length>0)&&r.change.push(u)}}else r.add.push([n,o])}return r}function Pn(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto})
return r.forEach((function(e){return En(i,e)})),i}function En(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function On(e,t,n){var r={}
return b(t.objectStoreNames,0).forEach((function(e){for(var t=n.objectStore(e),i=t.keyPath,o=ln(fn(i),i||"",!1,!1,!!t.autoIncrement,i&&"string"!=typeof i,!0),u=[],a=0;a<t.indexNames.length;++a){var s=t.index(t.indexNames[a])
i=s.keyPath
var c=ln(s.name,i,!!s.unique,!!s.multiEntry,!1,i&&"string"!=typeof i,!1)
u.push(c)}r[e]=hn(e,o,u)})),r}function Sn(e,t,n){for(var r=n.db.objectStoreNames,i=0;i<r.length;++i){var o=r[i],u=n.objectStore(o)
e._hasGetAll="getAll"in u
for(var s=0;s<u.indexNames.length;++s){var c=u.indexNames[s],l=u.index(c).keyPath,f="string"==typeof l?l:"["+b(l).join("+")+"]"
if(t[o]){var h=t[o].idxByName[f]
h&&(h.name=c,delete t[o].idxByName[f],t[o].idxByName[c]=h)}}}"undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}var jn,An=function(){function e(){}return e.prototype._parseStoresSpec=function(e,t){o(e).forEach((function(n){if(null!==e[n]){var r=e[n].split(",").map((function(e,t){var n=(e=e.trim()).replace(/([&*]|\+\+)/g,""),r=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split("+"):n
return ln(n,r||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),u(r),0===t)})),i=r.shift()
if(i.multi)throw new ie.Schema("Primary key cannot be multi-valued")
r.forEach((function(e){if(e.auto)throw new ie.Schema("Only primary key can be marked as autoIncrement (++)")
if(!e.keyPath)throw new ie.Schema("Index must have a name and cannot be an empty string")})),t[n]=hn(n,i,r)}}))},e.prototype.stores=function(e){var t=this.db
this._cfg.storesSource=this._cfg.storesSource?s(this._cfg.storesSource,e):e
var n=t._versions,r={},i={}
return n.forEach((function(e){s(r,e._cfg.storesSource),i=e._cfg.dbschema={},e._parseStoresSpec(r,i)})),t._dbSchema=i,wn(t,[t._allTables,t,t.Transaction.prototype]),_n(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],o(i),i),t._storeNames=o(i),this},e.prototype.upgrade=function(e){return this._cfg.contentUpgrade=e,this},e}()
function Kn(e){return ut((function(){return De.letThrough=!0,e()}))}function Cn(e){var t=function(t){return e.next(t)},n=i(t),r=i((function(t){return e.throw(t)}))
function i(e){return function(t){var i=e(t),o=i.value
return i.done?o:o&&"function"==typeof o.then?o.then(n,r):u(o)?Promise.all(o).then(n,r):n(o)}}return i(t)()}function In(e,t,n){var r=arguments.length
if(r<2)throw new ie.InvalidArgument("Too few arguments")
for(var i=new Array(r-1);--r;)i[r-1]=arguments[r]
n=i.pop()
var o=A(i)
return[e,o,n]}function Tn(e,t,n,r,i){return qe.resolve().then((function(){var o=De.transless||De,u=e._createTransaction(t,n,e._dbSchema,r),a={trans:u,transless:o}
r?u.idbtrans=r.idbtrans:u.create()
var s,c=V(i)
c&&at()
var l=qe.follow((function(){if(s=i.call(u,u))if(c){var e=st.bind(null,null)
s.then(e,e)}else"function"==typeof s.next&&"function"==typeof s.throw&&(s=Cn(s))}),a)
return(s&&"function"==typeof s.then?qe.resolve(s).then((function(e){return u.active?e:_t(new ie.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))})):l.then((function(){return s}))).then((function(e){return r&&u._resolve(),u._completion.then((function(){return e}))})).catch((function(e){return u._reject(e),_t(e)}))}))}function Dn(e,t,n){for(var r=u(e)?e.slice():[e],i=0;i<n;++i)r.push(t)
return r}var Bn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return r(r({},e),{table:function(t){var n=e.table(t),i=n.schema,o={},u=[]
function a(e,t,n){var i=mn(e),s=o[i]=o[i]||[],c=null==e?0:"string"==typeof e?1:e.length,l=t>0,f=r(r({},n),{isVirtual:l,isPrimaryKey:!l&&n.isPrimaryKey,keyTail:t,keyLength:c,extractKey:pn(e),unique:!l&&n.unique})
return s.push(f),f.isPrimaryKey||u.push(f),c>1&&a(2===c?e[0]:e.slice(0,c-1),t+1,n),s.sort((function(e,t){return e.keyTail-t.keyTail})),f}var s=a(i.primaryKey.keyPath,0,i.primaryKey)
o[":id"]=[s]
for(var c=0,l=i.indexes;c<l.length;c++){var f=l[c]
a(f.keyPath,0,f)}function h(t){var n,i,o=t.query.index
return o.isVirtual?r(r({},t),{query:{index:o,range:(n=t.query.range,i=o.keyTail,{type:1===n.type?2:n.type,lower:Dn(n.lower,n.lowerOpen?e.MAX_KEY:e.MIN_KEY,i),lowerOpen:!0,upper:Dn(n.upper,n.upperOpen?e.MIN_KEY:e.MAX_KEY,i),upperOpen:!0})}}):t}return r(r({},n),{schema:r(r({},i),{primaryKey:s,indexes:u,getIndexByKeyPath:function(e){var t=o[mn(e)]
return t&&t[0]}}),count:function(e){return n.count(h(e))},query:function(e){return n.query(h(e))},openCursor:function(t){var r=t.query.index,i=r.keyTail,o=r.isVirtual,u=r.keyLength
return o?n.openCursor(h(t)).then((function(n){return n&&function(n){return Object.create(n,{continue:{value:function(r){null!=r?n.continue(Dn(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i)):t.unique?n.continue(Dn(n.key,t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue()}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(Dn(t,e.MAX_KEY,i),r)}},key:{get:function(){var e=n.key
return 1===u?e[0]:e.slice(0,u)}},value:{get:function(){return n.value}}})}(n)})):n.openCursor(t)}})}})}},Rn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return r(r({},e),{table:function(t){var n=e.table(t),o=n.schema.primaryKey
return r(r({},n),{mutate:function(e){var u=De.trans,a=u.table(t).hook,s=a.deleting,c=a.creating,l=a.updating
switch(e.type){case"add":if(c.fire===ae)break
return u._promise("readwrite",(function(){return h(e)}),!0)
case"put":if(c.fire===ae&&l.fire===ae)break
return u._promise("readwrite",(function(){return h(e)}),!0)
case"delete":if(s.fire===ae)break
return u._promise("readwrite",(function(){return h(e)}),!0)
case"deleteRange":if(s.fire===ae)break
return u._promise("readwrite",(function(){return function(e){return p(e.trans,e.range,1e4)}(e)}),!0)}return n.mutate(e)
function h(e){var t=De.trans,u=e.keys||dn(o,e)
if(!u)throw new Error("Keys missing")
return"delete"!==(e="add"===e.type||"put"===e.type?r(r({},e),{keys:u,wantResults:!0}):r({},e)).type&&(e.values=i(e.values)),e.keys&&(e.keys=i(e.keys)),function(e,t,n){return"add"===t.type?Promise.resolve(new Array(t.values.length)):e.getMany({trans:t.trans,keys:n})}(n,e,u).then((function(r){var i=u.map((function(n,i){var u=r[i],a={onerror:null,onsuccess:null}
if("delete"===e.type)s.fire.call(a,n,u,t)
else if("add"===e.type||void 0===u){var h=c.fire.call(a,n,e.values[i],t)
null==n&&null!=h&&(n=h,e.keys[i]=n,o.outbound||E(e.values[i],o.keyPath,n))}else{var p=F(u,e.values[i]),d=l.fire.call(a,p,n,u,t)
if(d){var y=e.values[i]
Object.keys(d).forEach((function(e){f(y,e)?y[e]=d[e]:E(y,e,d[e])}))}}return a}))
return n.mutate(e).then((function(t){for(var n=t.failures,o=t.results,a=t.numFailures,s=t.lastResult,c=0;c<u.length;++c){var l=o?o[c]:u[c],f=i[c]
null==l?f.onerror&&f.onerror(n[c]):f.onsuccess&&f.onsuccess("put"===e.type&&r[c]?e.values[c]:l)}return{failures:n,results:o,numFailures:a,lastResult:s}})).catch((function(e){return i.forEach((function(t){return t.onerror&&t.onerror(e)})),Promise.reject(e)}))}))}function p(e,t,i){return n.query({trans:e,values:!1,query:{index:o,range:t},limit:i}).then((function(n){var o=n.result
return h({type:"delete",keys:o,trans:e}).then((function(n){return n.numFailures>0?Promise.reject(n.failures[0]):o.length<i?{failures:[],numFailures:0,lastResult:void 0}:p(e,r(r({},t),{lower:o[o.length-1],lowerOpen:!0}),i)}))}))}}})}})}},Fn=function(){function e(t,n){var i=this
this._middlewares={},this.verno=0
var o=e.dependencies
this._options=n=r({addons:e.addons,autoOpen:!0,indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange}
var u=n.addons
this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null
var a,s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ae,dbReadyPromise:null,cancelOpen:ae,openCanceller:null,autoSchema:!0}
s.dbReadyPromise=new qe((function(e){s.dbReadyResolve=e})),s.openCanceller=new qe((function(e,t){s.cancelOpen=t})),this._state=s,this.name=t,this.on=Mt(this,"populate","blocked","versionchange",{ready:[ye,ae]}),this.on.ready.subscribe=_(this.on.ready.subscribe,(function(t){return function(n,r){e.vip((function(){var e=i._state
if(e.openComplete)e.dbOpenError||qe.resolve().then(n),r&&t(n)
else if(e.onReadyBeingFired)e.onReadyBeingFired.push(n),r&&t(n)
else{t(n)
var o=i
r||t((function e(){o.on.ready.unsubscribe(n),o.on.ready.unsubscribe(e)}))}}))}})),this.Collection=(a=this,Nt(Ht.prototype,(function(e,t){this.db=a
var n=Rt,r=null
if(t)try{n=t()}catch(e){r=e}var i=e._ctx,o=i.table,u=o.hook.reading.fire
this._ctx={table:o,index:i.index,isPrimKey:!i.index||o.schema.primKey.keyPath&&i.index===o.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:i.or,valueMapper:u!==se?u:null}}))),this.Table=function(e){return Nt(qt.prototype,(function(t,n,r){this.db=e,this._tx=r,this.name=t,this.schema=n,this.hook=e._allTables[t]?e._allTables[t].hook:Mt(null,{creating:[fe,ae],reading:[ce,se],updating:[pe,ae],deleting:[he,ae]})}))}(this),this.Transaction=function(e){return Nt(cn.prototype,(function(t,n,r,i){var o=this
this.db=e,this.mode=t,this.storeNames=n,this.schema=r,this.idbtrans=null,this.on=Mt(this,"complete","error","abort"),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new qe((function(e,t){o._resolve=e,o._reject=t})),this._completion.then((function(){o.active=!1,o.on.complete.fire()}),(function(e){var t=o.active
return o.active=!1,o.on.error.fire(e),o.parent?o.parent._reject(e):t&&o.idbtrans&&o.idbtrans.abort(),_t(e)}))}))}(this),this.Version=function(e){return Nt(An.prototype,(function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}}))}(this),this.WhereClause=function(e){return Nt(rn.prototype,(function(t,n,r){this.db=e,this._ctx={table:t,index:":id"===n?null:n,or:r}
var i=e._deps.indexedDB
if(!i)throw new ie.MissingAPI("indexedDB API missing")
this._cmp=this._ascending=i.cmp.bind(i),this._descending=function(e,t){return i.cmp(t,e)},this._max=function(e,t){return i.cmp(e,t)>0?e:t},this._min=function(e,t){return i.cmp(e,t)<0?e:t},this._IDBKeyRange=e._deps.IDBKeyRange}))}(this),this.on("versionchange",(function(e){e.newVersion>0?console.warn("Another connection wants to upgrade database '"+i.name+"'. Closing db now to resume the upgrade."):console.warn("Another connection wants to delete database '"+i.name+"'. Closing db now to resume the delete request."),i.close()})),this.on("blocked",(function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn("Dexie.delete('"+i.name+"') was blocked"):console.warn("Upgrade '"+i.name+"' blocked by other connection holding version "+e.oldVersion/10)})),this._maxKey=un(n.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new i.Transaction(e,t,n,r)},this._fireOnBlocked=function(e){i.on("blocked").fire(e),St.filter((function(e){return e.name===i.name&&e!==i&&!e._state.vcFired})).map((function(t){return t.on("versionchange").fire(e)}))},this.use(Bn),this.use(Rn),u.forEach((function(e){return e(i)}))}return e.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ie.Type("Given version is not a positive number")
if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ie.Schema("Cannot add version when database is open")
this.verno=Math.max(this.verno,e)
var t=this._versions,n=t.filter((function(t){return t._cfg.version===e}))[0]
return n||(n=new this.Version(e),t.push(n),t.sort(kn),n.stores({}),this._state.autoSchema=!1,n)},e.prototype._whenReady=function(e){var t=this
return this._state.openComplete||De.letThrough?e():new qe((function(e,n){if(!t._state.isBeingOpened){if(!t._options.autoOpen)return void n(new ie.DatabaseClosed)
t.open().catch(ae)}t._state.dbReadyPromise.then(e,n)})).then(e)},e.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,i=e.name
i&&this.unuse({stack:t,name:i})
var o=this._middlewares[t]||(this._middlewares[t]=[])
return o.push({stack:t,create:n,level:null==r?10:r,name:i}),o.sort((function(e,t){return e.level-t.level})),this},e.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create
return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter((function(e){return r?e.create!==r:!!n&&e.name!==n}))),this},e.prototype.open=function(){return function(e){var t=e._state,n=e._deps.indexedDB
if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then((function(){return t.dbOpenError?_t(t.dbOpenError):e}))
W&&(t.openCanceller._stackHolder=G()),t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1
var r=t.dbReadyResolve,i=null
return qe.race([t.openCanceller,new qe((function(r,u){if(!n)throw new ie.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.")
var a=e.name,s=t.autoSchema?n.open(a):n.open(a,Math.round(10*e.verno))
if(!s)throw new ie.MissingAPI("IndexedDB API not available")
s.onerror=an(u),s.onblocked=Ze(e._fireOnBlocked),s.onupgradeneeded=Ze((function(r){if(i=s.transaction,t.autoSchema&&!e._options.allowEmptyDB){s.onerror=sn,i.abort(),s.result.close()
var c=n.deleteDatabase(a)
c.onsuccess=c.onerror=Ze((function(){u(new ie.NoSuchDatabase("Database "+a+" doesnt exist"))}))}else{i.onerror=an(u)
var l=r.oldVersion>Math.pow(2,62)?0:r.oldVersion
e.idbdb=s.result,function(e,t,n,r){var i=e._dbSchema,u=e._createTransaction("readwrite",e._storeNames,i)
u.create(n),u._completion.catch(r)
var a=u._reject.bind(u),s=De.transless||De
ut((function(){De.trans=u,De.transless=s,0===t?(o(i).forEach((function(e){Pn(n,e,i[e].primKey,i[e].indexes)})),bn(e,n),qe.follow((function(){return e.on.populate.fire(u)})).catch(a)):function(e,t,n,r){var i=[],u=e._versions,a=e._dbSchema=On(0,e.idbdb,r),s=!1
return u.filter((function(e){return e._cfg.version>=t})).forEach((function(u){i.push((function(){var i=a,c=u._cfg.dbschema
Sn(e,i,r),Sn(e,c,r),a=e._dbSchema=c
var l=xn(i,c)
l.add.forEach((function(e){Pn(r,e[0],e[1].primKey,e[1].indexes)})),l.change.forEach((function(e){if(e.recreate)throw new ie.Upgrade("Not yet support for changing primary key")
var t=r.objectStore(e.name)
e.add.forEach((function(e){return En(t,e)})),e.change.forEach((function(e){t.deleteIndex(e.name),En(t,e)})),e.del.forEach((function(e){return t.deleteIndex(e)}))}))
var f=u._cfg.contentUpgrade
if(f&&u._cfg.version>t){bn(e,r),n._memoizedTables={},s=!0
var h=S(c)
l.del.forEach((function(e){h[e]=i[e]})),wn(e,[e.Transaction.prototype]),_n(e,[e.Transaction.prototype],o(h),h),n.schema=h
var p,d=V(f)
d&&at()
var y=qe.follow((function(){if((p=f(n))&&d){var e=st.bind(null,null)
p.then(e,e)}}))
return p&&"function"==typeof p.then?qe.resolve(p):y.then((function(){return p}))}})),i.push((function(t){s&&At||function(e,t){for(var n=0;n<t.db.objectStoreNames.length;++n){var r=t.db.objectStoreNames[n]
null==e[r]&&t.db.deleteObjectStore(r)}}(u._cfg.dbschema,t),wn(e,[e.Transaction.prototype]),_n(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),n.schema=e._dbSchema}))})),function e(){return i.length?qe.resolve(i.shift()(n.idbtrans)).then(e):qe.resolve()}().then((function(){var e,t
t=r,o(e=a).forEach((function(n){t.db.objectStoreNames.contains(n)||Pn(t,n,e[n].primKey,e[n].indexes)}))}))}(e,t,u,n).catch(a)}))}(e,l/10,i,u)}}),u),s.onsuccess=Ze((function(){i=null
var n=e.idbdb=s.result,u=b(n.objectStoreNames)
if(u.length>0)try{var c=n.transaction(on(u),"readonly")
t.autoSchema?function(e,t,n){e.verno=t.version/10
var r=e._dbSchema=On(0,t,n)
e._storeNames=b(t.objectStoreNames,0),_n(e,[e._allTables],o(r),r)}(e,n,c):(Sn(e,e._dbSchema,c),function(e,t){var n=xn(On(0,e.idbdb,t),e._dbSchema)
return!(n.add.length||n.change.some((function(e){return e.add.length||e.change.length})))}(e,c)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),bn(e,c)}catch(e){}St.push(e),n.onversionchange=Ze((function(n){t.vcFired=!0,e.on("versionchange").fire(n)})),jn.add(a),r()}),u)}))]).then((function(){return t.onReadyBeingFired=[],qe.resolve(Kn(e.on.ready.fire)).then((function e(){if(t.onReadyBeingFired.length>0){var n=t.onReadyBeingFired.reduce(ye,ae)
return t.onReadyBeingFired=[],qe.resolve(Kn(n)).then(e)}}))})).finally((function(){t.onReadyBeingFired=null})).then((function(){return t.isBeingOpened=!1,e})).catch((function(n){try{i&&i.abort()}catch(e){}return t.isBeingOpened=!1,e.close(),t.dbOpenError=n,_t(t.dbOpenError)})).finally((function(){t.openComplete=!0,r()}))}(this)},e.prototype.close=function(){var e=St.indexOf(this),t=this._state
if(e>=0&&St.splice(e,1),this.idbdb){try{this.idbdb.close()}catch(e){}this.idbdb=null}this._options.autoOpen=!1,t.dbOpenError=new ie.DatabaseClosed,t.isBeingOpened&&t.cancelOpen(t.dbOpenError),t.dbReadyPromise=new qe((function(e){t.dbReadyResolve=e})),t.openCanceller=new qe((function(e,n){t.cancelOpen=n}))},e.prototype.delete=function(){var e=this,t=arguments.length>0,n=this._state
return new qe((function(r,i){var o=function(){e.close()
var t=e._deps.indexedDB.deleteDatabase(e.name)
t.onsuccess=Ze((function(){jn.remove(e.name),r()})),t.onerror=an(i),t.onblocked=e._fireOnBlocked}
if(t)throw new ie.InvalidArgument("Arguments not allowed in db.delete()")
n.isBeingOpened?n.dbReadyPromise.then(o):o()}))},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return null!==this.idbdb},e.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError
return e&&"DatabaseClosed"===e.name},e.prototype.hasFailed=function(){return null!==this._state.dbOpenError},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var e=this
return o(this._allTables).map((function(t){return e._allTables[t]}))},enumerable:!0,configurable:!0}),e.prototype.transaction=function(){var e=In.apply(this,arguments)
return this._transaction.apply(this,e)},e.prototype._transaction=function(e,t,n){var r=this,i=De.trans
i&&i.db===this&&-1===e.indexOf("!")||(i=null)
var o,u,a=-1!==e.indexOf("?")
e=e.replace("!","").replace("?","")
try{if(u=t.map((function(e){var t=e instanceof r.Table?e.name:e
if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed")
return t})),"r"==e||e===Tt)o=Tt
else{if("rw"!=e&&e!=Dt)throw new ie.InvalidArgument("Invalid transaction mode: "+e)
o=Dt}if(i){if(i.mode===Tt&&o===Dt){if(!a)throw new ie.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY")
i=null}i&&u.forEach((function(e){if(i&&-1===i.storeNames.indexOf(e)){if(!a)throw new ie.SubTransaction("Table "+e+" not included in parent transaction.")
i=null}})),a&&i&&!i.active&&(i=null)}}catch(e){return i?i._promise(null,(function(t,n){n(e)})):_t(e)}var s=Tn.bind(null,this,o,u,i,n)
return i?i._promise(o,s,"lock"):De.trans?dt(De.transless,(function(){return r._whenReady(s)})):this._whenReady(s)},e.prototype.table=function(e){if(!f(this._allTables,e))throw new ie.InvalidTable("Table "+e+" does not exist")
return this._allTables[e]},e}(),qn=Fn
h(qn,r(r({},ue),{delete:function(e){return new qn(e).delete()},exists:function(e){return new qn(e,{addons:[]}).open().then((function(e){return e.close(),!0})).catch("NoSuchDatabaseError",(function(){return!1}))},getDatabaseNames:function(e){return jn?jn.getDatabaseNames().then(e):qe.resolve([])},defineClass:function(){return function(e){s(this,e)}},ignoreTransaction:function(e){return De.trans?dt(De.transless,e):e()},vip:Kn,async:function(e){return function(){try{var t=Cn(e.apply(this,arguments))
return t&&"function"==typeof t.then?t:qe.resolve(t)}catch(e){return _t(e)}}},spawn:function(e,t,n){try{var r=Cn(e.apply(n,t||[]))
return r&&"function"==typeof r.then?r:qe.resolve(r)}catch(e){return _t(e)}},currentTransaction:{get:function(){return De.trans||null}},waitFor:function(e,t){var n=qe.resolve("function"==typeof e?qn.ignoreTransaction(e):e).timeout(t||6e4)
return De.trans?De.trans.waitFor(n):n},Promise:qe,debug:{get:function(){return W},set:function(e){z(e,"dexie"===e?function(){return!0}:Ct)}},derive:y,extend:s,props:h,override:_,Events:Mt,getByKeyPath:P,setByKeyPath:E,delByKeyPath:O,shallowClone:S,deepClone:T,getObjectDiff:F,asap:k,minKey:Pt,addons:[],connections:St,errnames:ne,dependencies:function(){try{return{indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch(e){return{indexedDB:null,IDBKeyRange:null}}}(),semVer:kt,version:kt.split(".").map((function(e){return parseInt(e)})).reduce((function(e,t,n){return e+t/Math.pow(10,2*n)})),default:qn,Dexie:qn})),qn.maxKey=un(qn.dependencies.IDBKeyRange),function(e){try{jn=function(e){var t,n=e&&"function"==typeof e.databases
if(!n){var r=new Fn(It,{addons:[]})
r.version(1).stores({dbnames:"name"}),t=r.table("dbnames")}return{getDatabaseNames:function(){return n?qe.resolve(e.databases()).then((function(e){return e.map((function(e){return e.name})).filter((function(e){return e!==It}))})):t.toCollection().primaryKeys()},add:function(e){return!n&&e!==It&&t.put({name:e}).catch(ae)},remove:function(e){return!n&&e!==It&&t.delete(e).catch(ae)}}}(e)}catch(e){}}(Fn.dependencies.indexedDB),qe.rejectionMapper=function(e,t){if(!e||e instanceof $||e instanceof TypeError||e instanceof SyntaxError||!e.name||!oe[e.name])return e
var n=new oe[e.name](t||e.message,e)
return"stack"in e&&d(n,"stack",{get:function(){return this.inner.stack}}),n},z(W,Ct),t.default=Fn}}])
