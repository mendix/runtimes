/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/MicroflowSource",["./_DataSource","mendix/lang","mendix/logger","dojo/_base/lang","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(_1,{name:"webcore.datasource.MicroflowSource",_microflow:"",_objs:null,constructor:function(_8){this._microflow=_8.microflow;},reload:function(_9){_2.sequence(["_callMicroflow"],_9,this);},refresh:function(_a){this._pageUpdate(_a);},entityUpdate:function(_b){_2.sequence(["_callMicroflow"],_b,this);},generateExport:function(_c){var _d=_5.map(this._objs,function(_e){return _e.getGuid();});_c.params=_4.mixin({},_c.params,{guids:_d,gridid:this._schemaId});window.mx.data.generateExport(_c);},_callMicroflow:function(_f){this.release();window.mx.data.get({microflow:this._microflow,context:this.context,callback:function(_10){this._objs=(_10 instanceof Array)?_10:[];this.hold(this._objs);this._pageUpdate(_f);},error:function(e){window.mx.onError(e);_f&&_f();}},this);}});return _7;});