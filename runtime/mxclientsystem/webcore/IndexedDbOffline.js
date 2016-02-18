/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/IndexedDbOffline",["mendix/lib/MxObject","./IndexedDatabase","./SynchronousPromise"],function(_1,_2,_3){var _4={name:"MendixDatabase",version:1};var _5=window.shimIndexedDB;var _6=window.shimIndexedDB.modules.IDBKeyRange;return {getDatabase:function(_7){if(!_8){_8=_9(_7.schema);}return _8;},deleteDatabase:function(){return new _3(function(_a,_b){var _c=_5.deleteDatabase(_4.name);_c.onsuccess=function(){_8=null;_a();};_c.onerror=_b;});},fetch:function(_d){return function(db){return db.transaction(["_guidToStore"],function(_e){return _e.store("_guidToStore").key(_d).get(function(_f){return db.transaction([_f.store],function(_10){return _10.store(_f.store).key(_d).get(function(obj){return [obj,_f.store];});});});});};},fetchSlice:function(_11,_12){return function(db){return new _3(function(_13,_14){return db.transaction([_11],function(_15){var _16=_15.store(_11);var _17=_3f(_12);var _18;if(_17){_18=_16.index(_17.attr,null,_17.dir);}else{_18=_16.cursor();}return _18.offset(_12.offset).limit(_12.limit).toArray(function(_19){_16.count().then(function(_1a){_13([_19,_1a]);});}).caught(_14);});});};},fetchSliceReference:function(_1b,_1c,_1d,_1e){return function(db){return new _3(function(_1f,_20){return db.transaction([_1b],function(_21){var _22=_21.store(_1b);var _23=_3f(_1e);var _24=_22.index(_1c.replace(".","$"),_6.only(_1d));return _24.toArray(function(_25){_25.sort(function(_26,_27){var _28=_1e.sort[0][1]=="desc"?-1:1;return _28*_5.cmp(_26[_23.attr],_27[_23.attr]);});_1f([_25.slice(_1e.offset,_1e.offset+_1e.limit),_25.length]);}).caught(_20);});});};},fillBulk:function(_29,_2a){return function(db){return db.transaction(["_guidToStore",_29],"readwrite",function(_2b){var _2c=_2b.store("_guidToStore");var _2d=_2b.store(_29);_2a.forEach(function(obj){_2c.add({guid:obj.guid,store:_29});_2d.add(obj);});});};},serialize:function(obj){var _2e={};for(var key in obj){var _2f=key.replace(".","$");_2e[_2f]=obj[key];}return _2e;},deserialize:function(obj){var _30={};for(var _31 in obj){var key=_31.replace("$",".");_30[key]=obj[_31];}return _30;}};var _8=null;function _9(_32){_8=_33(_4.name,_4.version,function(db){db.createObjectStore("_guidToStore",{keyPath:"guid"});for(var e in _32){var _34=_32[e];db.createObjectStore(e,{keyPath:"guid"},function(_35){_34.forEach(function(_36){_35.createIndex(_36,_36,{unique:false});});});}});return _8;};function _33(_37,_38,_39){return new _3(function(_3a,_3b){var _3c=_5.open(_37,_38);_3c.onerror=_3b;_3c.onsuccess=function(_3d){var db=_3d.target.result;db.onversionchange=function(){db.close();_8=null;};_3a(new _2(db));};_3c.onupgradeneeded=function(_3e){if(_39){_39(new _2(_3e.target.result));}};});};function _3f(_40){if(_40&&_40.sort&&_40.sort[0]){if(!_40.sort[0][0]){throw new Error("Invalid sorting attribute");}return {attr:_40.sort[0][0],dir:_40.sort[0][1]=="desc"?"prev":"next"};}else{return null;}};});