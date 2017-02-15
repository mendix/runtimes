/* @preserve
    Copyright (c) 2005-2016, Mendix bv. All rights reserved.
    See mxclientsystem/licenses.txt for third party licenses that apply.
*/
webpackJsonp([2],{385:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.i(s.b)(t.getDirectory.bind(t),e,{create:r})}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.i(s.b)(t.getFile.bind(t),e,{create:r})}function u(t){return n.i(s.b)(t.file.bind(t)).then(function(t){return new Promise(function(e,n){var r=new FileReader;r.onload=function(t){return e(t.target.result)},r.onerror=function(t){return n(t.target.error)},r.readAsArrayBuffer(t)})}).then(function(t){return new Blob([t])})}function a(t,e){return n.i(s.b)(t.createWriter.bind(t)).then(function(t){return new Promise(function(n,r){t.onwrite=n,t.onerror=r,t.write(e)})})}function c(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.setRequestHeader("X-Csrf-Token",window.mx.session.getCSRFToken()),r.onreadystatechange=function(t){4===r.readyState&&(r.status>=200&&r.status<300?e(r.response):n(r.response))},r.onerror=n,r.send()})}var s=n(211);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"FileBackend",function(){return m});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(31),m=function(){function t(e){r(this,t),this._config=e,this._storageDirPromise=null}return l(t,[{key:"readFile",value:function(t){return this._openFilePath(t).then(function(t){return u(t)})}},{key:"storeFile",value:function(t,e){return this._openFilePath(e,!0).then(function(e){return a(e,t)})}},{key:"downloadFile",value:function(t,e){var r=this;return this._config.downloadFileFn?n.i(s.b)(this._config.downloadFileFn,t,e.replace(/^files\//,"")):c(f.getStaticResourceUrlFromPath(t)).then(function(t){return r.storeFile(t,e)})}},{key:"_getStorageDir",value:function(){return this._config.getStorageDirFn?n.i(s.b)(this._config.getStorageDirFn):(null===this._storageDirPromise&&(this._storageDirPromise=n.i(s.b)(window.webkitRequestFileSystem,window.TEMPORARY,1048576).then(function(t){return t.root})),this._storageDirPromise)}},{key:"_openFilePath",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.split("/"),r=n.pop();return n.reduce(function(t,n){return t.then(function(t){return i(t,n,e)})},this._getStorageDir()).then(function(t){return o(t,r,e)})}}]),t}()},386:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return l(t.jsonData)}function a(t,e){if(null===t)return null;var n=window.mx.meta.getEntity(t.$objectType);return w.mapObject(t,function(t,r){var i="guid"===r||!s(r)&&n.isReference(r);return i&&null!=t?e(t):t})}function c(t){var e=Object.keys(t).filter(function(t){return!s(t)}).reduce(function(e,n){return e[n]={value:t[n]},t.$dirty||(e[n].readonly=!0),e},{});return{guid:t.guid,objectType:t.$objectType,attributes:e}}function s(t){return"guid"===t||"$"===t[0]}function l(t){var e={guid:t.guid,$objectType:t.objectType};for(var n in t.attributes)e[n]=t.attributes[n].value;return e}function f(t,e){var n={guid:t,objectType:e,attributes:{}},r=window.mx.meta.getEntity(e);return r.getAttributes().forEach(function(t){n.attributes[t]={value:T[r.getAttributeType(t)]}}),n}function m(t,e,n){var r=n?"thumbnails":"documents";return"filesystem:"+window.mx.appUrl+"temporary/files/"+r+"/"+t+"?"+ +new Date}function p(t){return t.replace(/:/g,"_")}var h=n(209),b=n(92),d=n(48);n.n(d);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"OfflineDataBackend",function(){return O});var y=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=n(449),v=n(31),w=n(4),T={String:null,Integer:"0",Long:"0",Decimal:"0",Float:"0",Currency:"0",Enum:null,HashString:null,ObjectReference:null,DateTime:null,Boolean:!1,AutoNumber:"0",Binary:null},E="files/documents/",j="files/thumbnails/",O=function(t){function e(t,n,o,u,a){r(this,e);var c=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t=t||{},c._store=o,c._internalToExternal={},c._getDocumentUrl=t.getDocumentUrlFn||m,c._runtimeApi=u,c._objectCache=n,c._fileBackend=a,c}return o(e,t),_(e,[{key:"getByGuid",value:function(t,e){var n=this;return Promise.all(t.map(this._getByGuid,this)).then(function(t){var e=t.filter(function(t){return null!=t}).map(c);return n._objectCache.setMxObjects(e),{mxobjects:e}})}},{key:"getSlice",value:function(t,e,n){var r=this,i=window.mx.meta.getEntity(t),o=(e||[]).map(function(t){return i.isReference(t.attribute)?(t.value=r._getInternalGuid(t.value),t):t});return this._store.getSlice(t,o,n).then(function(t){var e=y(t,2),n=e[0],i=e[1],o=n.map(r._makeObjectExternal,r).map(c);return{mxobjects:o,count:i}})}},{key:"create",value:function(t,e){var n=g.create();return this._internalToExternal[n]=n,this._objectCache.onCreate([n]),this._objectCache.setMxObjects([f(n,t)]),Promise.resolve({actionResult:n})}},{key:"commit",value:function(t,e){function n(t){return Object.assign({},t,w.mapObject(i[t.guid],function(t){return t.value}))}var r=this,i=w.objectFromArray(t.map(function(t){return[t,w.clone(r._objectCache.getChanges(t))]})),o=w.partition(function(t){return r._objectCache.has(t)},t),a=y(o,2),s=a[0],l=a[1],f=s.map(function(t){return r._objectCache.getObject(t)}).map(u),m=Promise.all(l.map(this._getByGuid,this));return m.then(function(t){var e=t.concat(f).map(n);return r._store.insertOrReplace(e.map(r._makeObjectInternal,r)).then(function(){return e})}).then(function(t){r._objectCache.onCommit(t.map(function(t){return t.guid})),r._objectCache.setMxObjects(t.map(c)),r._objectCache.subtractChanges(i)}).then(function(){return{}})}},{key:"rollback",value:function(t){var e=this;this._objectCache.removeChanges(t);var n=t.filter(function(t){return e._objectCache.isNew(t)});return this._objectCache.removeObjects(n),Promise.resolve({})}},{key:"validate",value:function(t){return Promise.resolve({})}},{key:"saveDocument",value:function(t,e,n,r){var i=this;if(r.size/1048576>n.maxFileSize)return Promise.reject(new d.DescribedError("File too large"));var o=p(this._getInternalGuid(t));return this._fileBackend.storeFile(r,E+o).then(function(){return i._objectCache.makeChange(t,"HasContents",!0),i.commit([t],null)})}},{key:"getDocumentUrl",value:function(t,e,n){return this._getDocumentUrl(p(this._getInternalGuid(t)),e,n)}},{key:"getImageUri",value:function(t){return Promise.resolve(t)}},{key:"upload",value:function(){function t(t){var r=t.map(function(t){return t.guid}),i=w.unique(t.map(function(t){return e(t).map(function(t){var e=y(t,2),n=(e[0],e[1]);return n})}).reduce(function(t,e){return t.concat(e)},[])),o=i.filter(function(t){return!n(t)}).filter(function(t){return!r.includes(t)});if(o.length>0){var u=w.unique(t.map(function(t){return e(t).filter(function(t){var e=y(t,2),n=(e[0],e[1]);return o.includes(n)}).map(function(e){var n=y(e,2),r=n[0];n[1];return"object of type "+t.$objectType+" (reference "+r+")"})}).reduce(function(t,e){return t.concat(e)},[])).join(", "),a="Sync has failed due to a modeling error. Your database contains objects that reference uncommitted objects:\n"+u+".";throw new b.a(a)}}function e(t){var e=window.mx.meta.getEntity(t.$objectType);return w.arrayFromObject(t).filter(function(t){var n=y(t,2),r=n[0];n[1];return"guid"===r||!s(r)&&e.isReference(r)})}function n(t){return!g.isGuid(t)}function r(t){return a.instantiate(t.$objectType).then(function(e){var n=e.objects.find(function(t){return t.guid===e.actionResult});return{internal:t,remote:n}})}function i(t,e){var r=window.mx.meta.getEntity(t.$objectType),i=Object.keys(t).filter(function(t){return!s(t)&&r.isSyncable(t)}).map(function(i){var o=t[i],u=r.isObjectReference(i)&&null!=o&&!n(o)?e[o]:o;return[i,{value:u}]});return[e[t.guid],w.objectFromArray(i)]}function o(t,e){return c.readFile(E+p(t.guid)).then(function(n){return a.upload(e,t.Name,{},n,{},[])})}var u=this,a=this._runtimeApi,c=this._fileBackend;return this._store.fetchDirty().then(function(e){return t(e),Promise.all(e.map(r))}).then(function(t){var e=t.map(function(t){var e=t.internal;return e}),n=w.objectFromArray(t.map(function(t){var e=t.internal,n=t.remote;return[e.guid,n.guid]})),r=t.map(function(t){var e=t.remote;return e}),o=r.map(function(t){return t.guid}),u=w.objectFromArray(e.map(function(t){return i(t,n)}));return a.commit(o,null,u,r).then(function(){return{internalObjs:e,internalToRemoteGuidMap:n}})}).then(function(t){var e=t.internalObjs,n=t.internalToRemoteGuidMap;return Promise.all(e.filter(function(t){return window.mx.meta.getEntity(t.$objectType).isA("System.FileDocument")}).filter(function(t){return t.HasContents}).map(function(t){return o(t,n[t.guid])})).then(function(){return n})}).then(function(t){return w.arrayFromObject(t).forEach(function(t){var e=y(t,2),n=e[0],r=e[1];return u._replaceInternalGuid(n,r)}),u._store.cleanDatabase()}).then(function(){return{}})}},{key:"downloadObjects",value:function(t){function e(t,e){return r.retrieveByXPath(e).then(function(e){return e.mxobjects.map(l).map(function(e){return Object.assign({},e,{$objectType:t})})})}var n=this,r=this._runtimeApi;return Promise.all(t.map(function(t){return e(t.store,t.xpath)})).then(function(t){return t=w.flatten(t),n._store.rebuildDatabase(t).then(function(){return t})}).then(function(t){var e=t.map(n._makeObjectExternal,n).filter(function(t){return n._objectCache.has(t.guid)});return n._objectCache.setMxObjects(e.map(c)),{}})}},{key:"downloadFiles",value:function(t){function e(t){return r.getSlice(t,[{attribute:"HasContents",operator:"equals",value:"true"}]).then(function(t){var e=y(t,2),n=e[0];e[1];return n})}function n(t,e){var n=v.getDynamicResourcePath(t.guid,t.changedDate,e),r=(e?j:E)+p(t.guid);return i.downloadFile(n,r)}var r=this._store,i=this._fileBackend;return Promise.all(t.map(function(t){return e(t)})).then(function(t){t=w.flatten(t);var e=t.map(function(t){return n(t,!1)}),r=t.filter(function(t){return window.mx.meta.getEntity(t.$objectType).isA("System.Image")}).map(function(t){return n(t,!0)});return Promise.all(e.concat(r))}).then(function(){return{}})}},{key:"cleanupDirtyObjects",value:function(){return this._store.cleanupDirtyObjects()}},{key:"_getByGuid",value:function(t){var e=this;return this._store.getByGuid(this._getInternalGuid(t)).then(function(t){return e._makeObjectExternal(t)})}},{key:"_getInternalGuid",value:function(t){for(var e in this._internalToExternal)if(this._internalToExternal[e]===t)return e;return t}},{key:"_getExternalGuid",value:function(t){return this._internalToExternal[t]||t}},{key:"_replaceInternalGuid",value:function(t,e){var n=this._internalToExternal[t];delete this._internalToExternal[t],this._internalToExternal[e]=n}},{key:"_makeObjectInternal",value:function(t){return a(t,this._getInternalGuid.bind(this))}},{key:"_makeObjectExternal",value:function(t){return a(t,this._getExternalGuid.bind(this))}}]),e}(h.a)},387:function(t,e,n){function r(){return window.openDatabase("MendixDatabase","1","Mendix Database",10485760)}function i(t,e){a.call(this),e=e||r,this._tableNames=t,this._db=e(),this._initialize()(this._db)}var o=n(494),u=n(493),a=n(488),c=n(421),s=n(208);i.prototype=Object.create(a.prototype),i.prototype._getDatabase=function(){return this._databasePromise},i.prototype._initialize=function(){return function(t){var e=o.createCreateTransaction(this._tableNames);return this._databasePromise=s.promiseFromTask(u.runWriteTransaction(t,e)).then(function(){return t}),this._databasePromise}.bind(this)},i.prototype._fetch=function(t){return function(e){var n=o.createFetchByGuidTransaction(t);return s.promiseFromTask(u.runReadTransaction(e,n))}},i.prototype._fetchSlice=function(t,e,n){return function(r){var i=o.createFetchSliceTransaction(t,e,n.offset,n.limit,n.sort);return s.promiseFromTask(u.runReadTransaction(r,i))}},i.prototype._rebuildDb=function(t){return c.ask().chain(function(e){var n=o.createRebuildTransaction(this._tableNames,t);return new c(function(t){return u.runWriteTransaction(e,n)})}.bind(this))},i.prototype._insertOrReplace=function(t){return function(e){var n=o.createInsertOrReplaceTransaction(t);return s.promiseFromTask(u.runWriteTransaction(e,n))}},i.prototype._cleanDatabase=function(){var t=this;return function(e){var n=o.createCleanTransaction(t._tableNames);return s.promiseFromTask(u.runWriteTransaction(e,n))}},i.prototype._fetchDirty=function(){return c.ask().chain(function(t){var e=o.createFetchDirtyObjectsTransaction();return new c(function(n){return u.runWriteTransaction(t,e)})})},i.prototype._cleanupDirtyObjects=function(){return function(t){var e=o.createDirtyCleanupTransaction();return s.promiseFromTask(u.runWriteTransaction(t,e))}},t.exports=i},414:function(t,e){t.exports={LIKE_ESCAPE_CHAR:"~",QUOTE_CHAR:'"'}},421:function(t,e,n){var r=n(487),i=n(119),o=new r(i);o.rejected=function(t){return new o(function(e){return i.rejected(t)})},t.exports=o},449:function(t,e,n){"use strict";function r(){return u+o.getUniqueId()}function i(t){return a.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.create=r,e.isGuid=i;var o=n(4),u="GUID:",a=new RegExp("^"+u)},487:function(t,e){function n(t){function e(t){this.run=t}return e.prototype.chain=function(t){return new e(function(e){return this.run(e).chain(function(n){return t(n).run(e)})}.bind(this))},e.prototype.ap=function(t){return new e(function(e){return this.run(e).ap(t.run(e))}.bind(this))},e.prototype.map=function(t){return this.chain(function(n){return e.of(t(n))})},e.of=function(n){return new e(function(e){return t.of(n)})},e.ask=function(){return new e(t.of)},e}t.exports=n},488:function(t,e,n){function r(){}var i=(n(207),n(208)),o=n(421);r.prototype.getSlice=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._getDatabase().then(this._fetchSlice(t,e,n))},r.prototype.getByGuid=function(t){return this._getDatabase().then(this._fetch(t))},r.prototype.insertOrReplace=function(t){return this._getDatabase().then(this._insertOrReplace(t))},r.prototype.cleanDatabase=function(){return this._getDatabase().then(this._cleanDatabase())},r.prototype.rebuildDatabase=function(t){var e=this;return this._getDatabase().then(function(n){return i.promiseFromTask(e._rebuildDb(t).run(n))})},r.prototype.fetchDirty=function(){var t=this;return this._getDatabase().then(function(e){return i.promiseFromTask(t._fetchDirty().run(e))})},r.prototype.cleanupDirtyObjects=function(){return this._getDatabase().then(this._cleanupDirtyObjects())},r.prototype._getDatabase=function(){return Promise.reject(new Error("not implemented"))},r.prototype._initialize=function(){return Promise.reject(new Error("not implemented"))},r.prototype._fetch=function(t){return function(t){return Promise.reject(new Error("not implemented"))}},r.prototype._fetchSlice=function(t,e,n){return function(t){return Promise.reject(new Error("not implemented"))}},r.prototype._insertOrReplace=function(t){return function(t){return Promise.reject(new Error("not implemented"))}},r.prototype._cleanDatabase=function(){return function(t){return Promise.reject(new Error("not implemented"))}},r.prototype._rebuildDb=function(t){return o.rejected(new Error("not implemented"))},r.prototype._fetchDirty=function(){return o.rejected(new Error("not implemented"))},r.prototype._cleanupDirtyObjects=function(){return function(t){return Promise.reject(new Error("not implemented"))}},t.exports=r},489:function(t,e){function n(t){return this instanceof n?void(t instanceof n?this._column=t._column:this._column=t):new n(t)}n.prototype.apply1=function(t){return new n(t+"("+this._column+")")},n.prototype.toString=function(){return this._column},t.exports=n},490:function(t,e,n){function r(t,e){this._tableName=e&&e.tableName||t&&t._tableName||null,this._columns=e&&e.columns||t&&t._columns||[]}function i(t){var e=o.QUOTE_CHAR;return e+t+e}var o=n(414);r.prototype.table=function(t){return new r(this,{tableName:t})},r.prototype.column=function(t,e){return new r(this,{columns:this._columns.concat({columnName:t,columnType:e,isPrimary:!1})})},r.prototype.primaryKeyColumn=function(t,e){return new r(this,{columns:this._columns.concat({columnName:t,columnType:e,isPrimary:!0})})},r.prototype.createIfNotExists=function(){var t="";return t+="CREATE TABLE IF NOT EXISTS "+i(this._tableName),t+=this._buildSql()},r.prototype._buildSql=function(){var t="";return this._columns.length>0&&(t+=" (",t+=this._columns.map(function(t){var e=i(t.columnName);return[e,t.columnType,t.isPrimary?"PRIMARY KEY ":""].join(" ").slice(0,-1)},this).join(", "),t+=")"),t},t.exports=r},491:function(t,e,n){function r(t,e){return this instanceof r?(this._tableName=e&&e.tableName||t&&t._tableName||null,void(this._columnNames=e&&e.columnNames||t&&t._columnNames||[])):new r}function i(t){var e=o.QUOTE_CHAR;return e+t+e}var o=n(414);r.prototype.into=function(t){return new r(this,{tableName:t})},r.prototype.column=function(t){return new r(this,{columnNames:this._columnNames.concat(t)})},r.prototype.insert=function(){var t="";return t+="INSERT INTO "+i(this._tableName),t+=this._buildSql()},r.prototype.insertOrReplace=function(){var t="";return t+="INSERT OR REPLACE INTO "+i(this._tableName),t+=this._buildSql()},r.prototype._buildSql=function(){var t="";return this._columnNames.length>0&&(t+=" (",t+=this._columnNames.map(i).join(", "),t+=")"),t+=" VALUES (",t+="?"+new Array(this._columnNames.length).join(", ?"),t+=")"},t.exports=r},492:function(t,e,n){function r(t,e){this._select=e&&e.select||t&&t._select||null,this._from=e&&e.from||t&&t._from||{},this._constraints=e&&e.constraints||t&&t._constraints||[],this._orderBy=e&&e.orderBy||t&&t._orderBy||[],this._limit=e&&e.limit||t&&t._limit||null,this._offset=e&&e.offset||t&&t._offset||null}function i(t,e){this._column=t,this._negate=!!e}function o(t,e,n){this._column=t,this._operator=e,this._negate=!!n}function u(t){return function(e){return e+" "+t+" ?"}}function a(t){var e="";return e+=t,e+=" LIKE '%' || ? || '%'",e+=" ESCAPE '"+c.LIKE_ESCAPE_CHAR+"'"}var c=n(414),s={equals:u("="),lessThan:u("<"),lessThanOrEquals:u("<="),greaterThan:u(">"),greaterThanOrEquals:u(">="),contains:a};r.prototype.from=function(t,e){return new r(this,{from:{name:t,alias:e}})},r.prototype.where=function(t,e){return this._where(t,!1,e)},r.prototype.whereNot=function(t,e){return this._where(t,!0,e)},r.prototype.whereNull=function(t,e){return this._whereNull(t,!1,e)},r.prototype.whereNotNull=function(t,e){return this._whereNull(t,!0,e)},r.prototype.order=function(t,e){return new r(this,{orderBy:this._orderBy.concat([[t,e]])})},r.prototype.limit=function(t){return new r(this,{limit:t})},r.prototype.offset=function(t){return new r(this,{offset:t})},r.prototype.selectDistinct=function(t){return Array.isArray(t)&&(t=t.join(", ")),"SELECT DISTINCT "+t+this._buildSql()},r.prototype.select=function(t,e){Array.isArray(t)&&(t=t.join(", "));var n="SELECT "+t;return e&&(n+=" AS "+e),n+=this._buildSql()},r.prototype._where=function(t,e,n){return new r(this,{constraints:this._constraints.concat([new o(t,n,e)])})},r.prototype._whereNull=function(t,e){return new r(this,{constraints:this._constraints.concat([new i(t,e)])})},r.prototype._buildSql=function(){var t="";return t+=" FROM "+this._from.name,this._from.alias&&(t+=" AS "+this._from.alias),this._constraints.length>0&&(t+=" WHERE "+this._constraints.map(function(t){return t.toString()}).join(" AND ")),this._orderBy.length>0&&(t+=" ORDER BY "+this._orderBy.map(function(t){return t[0]+" "+t[1]}).join(", ")),this._limit&&(t+=" LIMIT "+this._limit),this._offset&&(t+=" OFFSET "+this._offset),t},i.prototype.toString=function(){return this._column+" IS "+(this._negate?"NOT ":"")+"NULL"},o.prototype.toString=function(){var t=s[this._operator];return(this._negate?"NOT ":"")+t(this._column)},t.exports=r},493:function(t,e,n){function r(t){return function(e,n){return new i(function(r,i){var o,u=2;e[t](function(t){n.run(t).fork(r,function(t){o=t,0===--u&&i(o)})},r,function(){0===--u&&i(o)})})}}var i=n(119);t.exports={runReadTransaction:r("readTransaction"),runWriteTransaction:r("transaction")}},494:function(t,e,n){"use strict";function r(t){var e=["_guidToTable"].concat(t).map(v).map(function(t){return"DROP TABLE IF EXISTS '"+t+"'"}).map(function(t){return E(t,[])});return F.sequence([S.sequence(e,A),i(t)],A)}function i(t){function e(t){var e=n(t).reduce(function(t,e){return t.column(v(e.attr),e.type)},(new N).table(v(t)).primaryKeyColumn("guid","text"));return E(e.createIfNotExists(),[])}function n(t){var e=mx.meta.getEntity(t);return e.getAttributes().map(function(t){var n=e.getAttributeType(t);return{attr:t,type:I[n]}})}var r=[c()].concat(t.map(e));return S.sequence(r,A)}function o(t,e){var n=e.reduce(function(e,n){var r=s(),i=f(t,n);return e.concat([E(r.insert(),[n.guid,t,0]),E(i.builder.insert(),i.values)])},[]);return S.sequence(n,A)}function u(t){var e=t.$objectType,n=s(),r=f(e,t);return S.sequence_([E(n.insertOrReplace(),[t.guid,e,1]),E(r.builder.insertOrReplace(),r.values)],A)}function a(){return E((new D).from("_guidToTable").where("dirty","equals").selectDistinct("tableName"),[1])}function c(){var t=(new N).table("_guidToTable").primaryKeyColumn("guid","text").column("tableName","text").column("dirty","boolean").createIfNotExists();return E(t,[])}function s(){return(new R).into("_guidToTable").column("guid").column("tableName").column("dirty")}function l(t,e){return e.reduce(function(e,n){var r=t.getAttributeType(n.attribute),i=null==n.value,o=G[r],u=B[r],a=u(o(n.value));if(i&&"equals"===n.operator){var c=n.negate?e.builder.whereNotNull:e.builder.whereNull;return{builder:c.call(e.builder,v(n.attribute)),args:e.args}}if(i&&"contains"===n.operator)return e;var s=n.negate?e.builder.whereNot:e.builder.where,l="contains"===n.operator?g(a):a;return{builder:s.call(e.builder,v(n.attribute),n.operator),args:e.args.concat([l])}},{builder:new D,args:[]})}function f(t,e){var n=mx.meta.getEntity(t),r=n.getAttributes(),i=r.reduce(function(t,r){var i=n.getAttributeType(r),o=B[i];if(!o)return t;var u=o(e[r]);return{attrs:t.attrs.concat([r]),values:t.values.concat([u])}},{attrs:["guid"],values:[e.guid]}),o=i.attrs.reduce(function(t,e){return t.column(v(e))},(new R).into(v(t)));return{builder:o,values:i.values}}function m(t){if(null==t)return null;var e=20,n=new P(t),r=e-Math.max(0,n.e)-1,i=n.s<0?"-":"",o=new Array(r+1).join("0"),u=n.abs().toFixed();return i+o+u}function p(t){return null!=t?String(t):null}function h(t){return null!=t?Number(t):null}function b(t){return"false"!==t}function d(t){return t?Number(t):null}function y(t){return t}function _(t){for(var e=[],n=0;n<t.length;++n)e.push(t.item(n));return e}function g(t){var e=O.LIKE_ESCAPE_CHAR;return t.replace(new RegExp(e,"g"),e+e).replace(/%/g,e+"%").replace(/_/g,e+"_")}function v(t){return t.replace(".","$")}function w(t){return t.replace("$",".")}function T(t,e,n){var r={guid:n.guid,$objectType:t.getEntity(),$dirty:e};for(var i in n){var o=w(i);if("guid"!==o){var u=t.getAttributeType(o),a=q[u];a&&(r[o]=a(n[i]))}}return r}function E(t,e){return e=e||[],new A(function(n){return new k(function(r,i){n.executeSql(t,e,function(t,e){i(e)},function(t,e){r(e)})})})}var j=n(449),O=n(414),D=n(492),N=n(490),x=n(489),R=n(491),S=n(207),F=n(210),C=n(421),k=n(119),P=n(33),A=C,I={String:"text",Integer:"text",Long:"text",Decimal:"text",Float:"text",Currency:"text",Enum:"text",HashString:"text",ObjectReference:"text",DateTime:"integer",Boolean:"integer",AutoNumber:"integer",Binary:"blob"},B={String:p,Integer:m,Long:m,Decimal:m,Float:m,Currency:m,Enum:p,HashString:p,ObjectReference:p,DateTime:h,Boolean:Number,AutoNumber:p,Binary:p},q={String:p,Integer:p,Long:p,Decimal:p,Float:p,Currency:p,Enum:p,HashString:p,ObjectReference:p,DateTime:y,Boolean:Boolean,AutoNumber:p,Binary:p},G={String:y,Integer:y,Long:y,Decimal:y,Float:y,Currency:y,Enum:y,HashString:y,ObjectReference:y,DateTime:d,Boolean:b,AutoNumber:y,Binary:y},L={String:"UPPER",Enum:"UPPER"},M={createCreateTransaction:i,createCleanTransaction:function(t){var e=["_guidToTable"].concat(t).map(v).map(function(t){return"DELETE FROM '"+t+"'"}).map(function(t){return E(t,[])});return S.sequence_(e,A)},createFetchByGuidTransaction:function(t){var e=(new D).from("_guidToTable").where("guid","equals").select("*");return E(e,[t]).chain(function(e){if(0===e.rows.length)return A.of(null);if(1!==e.rows.length)return A.rejected(new Error("db consistency error"));var n=e.rows.item(0),r=n.tableName,i=Boolean(n.dirty),o=(new D).from(v(r)).where("guid","equals").select("*");return E(o,[t]).map(function(t){return 0===t.rows.length?k.rejected(new Error("entity not found")):1!==t.rows.length?k.rejected(new Error("db consistency error")):T(window.mx.meta.getEntity(r),i,t.rows.item(0))})})},createFetchSliceTransaction:function(t,e,r,i,o){e=e||[],o=o||[];var u=mx.meta.getEntity(t),a=l(u,e),c=a.builder.from(v(t)),s=a.args,f=o.reduce(function(t,e){var n=u.getAttributeType(e[0]),r=new x(e[0]),i=L[n];return i&&(r=r.apply1(i)),t.order(r,e[1])},c.offset(r).limit(i)),m=E(f.select("*"),s).map(function(t){for(var e=[],r=0;r<t.rows.length;++r){var i=n.i(j.isGuid)(t.rows.item(r).guid);e.push(T(u,i,t.rows.item(r)))}return e}),p=E(c.select("COUNT(*)","cnt"),s).map(function(t){return t.rows.item(0).cnt});return S.lift2(function(t,e){return[t,e]},m,p)},createInsertOrReplaceTransaction:function(t){return S.sequence_(t.map(u),A)},createFillBulkTransaction:o,createFetchDirtyObjectsTransaction:function(){return a().chain(function(t){var e=_(t.rows).map(function(t){var e=t.tableName,n=window.mx.meta.getEntity(e);return E("SELECT * FROM "+v(e)+" WHERE guid IN (SELECT guid FROM _guidToTable WHERE tableName = ? AND dirty = 1)",[e]).map(function(t){return _(t.rows).map(function(t){return T(n,!0,t)})})});return S.sequence(e,A)}).map(function(t){return t.reduce(function(t,e){return t.concat(e)},[])})},createDirtyCleanupTransaction:function(){return a().chain(function(t){var e=_(t.rows).map(function(t){var e=t.tableName;return E("DELETE FROM "+v(e)+" WHERE guid IN (SELECT guid FROM _guidToTable WHERE tableName = ? AND dirty = 1)",[e])});return F.sequence_([S.sequence(e,A),E("DELETE FROM _guidToTable WHERE dirty = 1")],A)})},createRebuildTransaction:function(t,e){var n=r(t),i=t.map(function(t){var n=e.filter(function(e){return e.$objectType===t});return o(t,n)});return F.sequence([n,S.sequence(i,A)],A)}};t.exports=M}});