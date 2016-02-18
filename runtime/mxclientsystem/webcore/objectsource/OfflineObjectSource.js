/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/OfflineObjectSource",["./_ObjectSource","dojo/_base/declare","../offline"],function(_1,_2,_3){var _4=_2(_1,{name:"webcore.objectsource.OfflineObjectSource",_entity:"",constructor:function(_5){this.inherited(arguments);var _6=_5.path?_5.path.split("/"):[];this._entity=_6.slice(-1)[0];_6.shift();if(_6.length>0){throw new Error("Cannot use a path with OfflineObjectSource");}},fetch:function(_7,_8){var _9=this.context.getTrackId();if(_9){var _a=window.mx.meta.getEntity(this.context.getTrackEntity());if(_a.isA(this._entity)){_3.getByGuid(_9).then(_7,_8);}else{_7(null);}}else{_7(null);}},getRoot:function(){return "";}});return _4;});