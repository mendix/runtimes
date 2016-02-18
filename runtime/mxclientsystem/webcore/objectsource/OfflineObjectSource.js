/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/OfflineObjectSource",["./_ObjectSource","dojo/_base/declare","../offline"],function(_1,_2,_3){var _4=_2(_1,{name:"webcore.objectsource.OfflineObjectSource",_entity:"",constructor:function(_5){this.inherited(arguments);this._path=_5.path?_5.path.split("/"):[];this._entity=this._path.pop();this._path.shift();},fetch:function(_6,_7){var _8=this.context.getTrackId();if(_8){var _9=window.mx.meta.getEntity(this.context.getTrackEntity());if(_9.isA(this._entity)){this._fetchOverPath(_8).then(_6,_7);}else{_6(null);}}else{_6(null);}},getRoot:function(){return this._path.length>0?this._path[0]:"";},_fetchOverPath:function(_a){var p=_3.getByGuid(_a);for(var i=0;i<this._path.length-1;i+=2){p=p.then(this._fetchForPathElement(this._path[i]));}return p;},_fetchForPathElement:function(_b){return function(_c){return _3.getByGuid(_c.get(_b));};}});return _4;});