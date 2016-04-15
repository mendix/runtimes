/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/EntityPathSource",["./_DataSource","mendix/logger","dojo/_base/lang","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=_5(_1,{name:"webcore.datasource.EntityPathSource",_pathElements:null,_objs:null,constructor:function(_7){this._pathElements=_7.path.split("/");},reload:function(_8){this._runQuery(_8);},refresh:function(_9){this._pageUpdate(_9);},entityUpdate:function(_a){this._runQuery(_a);},generateExport:function(_b){var _c=_4.map(this._objs,function(_d){return _d.getGuid();});_b.params=_3.mixin({},_b.params,{guids:_c,gridid:this._schemaId});window.mx.data.generateExport(_b);},_runQuery:function(_e){this.release();var _f=this.context.getTrackId();if(_f){window.mx.data.get({guid:_f,path:this._pathElements[0],entity:this._pathElements[1],callback:function(_10){_10=(_10 instanceof Array)?_10:[];this._objs=_10;this.hold(_10);this._pageUpdate(_e);},error:function(e){window.mx.onError(e);_e&&_e();}},this);}else{this._objs=[];this._pageUpdate(_e);}}});return _6;});