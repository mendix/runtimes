/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/DirectObjectSource",["webcore/objectsource/_ObjectSource","dojo/_base/declare"],function(_1,_2){var _3=_2(_1,{name:"webcore.objectsource.DirectObjectSource",_path:"",_entity:"",constructor:function(_4){this.inherited(arguments);var _5=_4.path.split("/");this._path=_5.length>1?_5:[];this._entity=_5.slice(-1)[0];},fetch:function(_6,_7){var _8=this;var _9=function(_a){if(_a&&_a.isA(_8._entity)){_6(_a);}else{_6(null);}};var _b=function(_c){window.mx.data.fetch(_c,_8._path,{usexpath:true,schema:_8.schema},function(_d,_e){if(_e){_8.hold(_d);}_9(_d);},_7);};this.release();var _f=this.context.getTrackId();if(_f){if(this.context.hasTrackObject()){_b(this.context.getTrackObject());}else{if(this._path.length>0){window.mx.data.get({guid:_f,callback:function(obj){_8.hold(obj);_b(obj);},error:_7});}else{var _10=window.mx.meta.getEntity(this.context.getTrackEntity());if(_10.isA(this._entity)){window.mx.data.get({guid:_f,filter:{id:this.schema},callback:function(obj){_8.hold(obj);_9(obj);},error:_7});}else{this.hold(null);_6(null);}}}}else{this.hold(null);_6(null);}},getRoot:function(){return this._path.length>0?this._path[0]:"";}});return _3;});