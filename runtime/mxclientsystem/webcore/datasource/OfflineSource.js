/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/OfflineSource",["./_DataSource","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"webcore.datasource.OfflineSource",_entity:"",_sort:null,constructor:function(_5){this._entity=_5.entity;this._sort=_5.sort||[];this._constraints=_5.filter||[];},reload:function(_6){var _7=this;mx.data.getSlice(this._entity,this._constraints,{offset:this.getOffset(),limit:this.getPageSize(),sort:this._sort},function(_8,_9){_7._setObjects(_8);_7._setSetSize(_9);if(_6){_6();}},function(e){mx.onError(e);if(_6){_6();}});},refresh:function(_a){this.reload(_a);},entityUpdate:function(_b){this.reload(_b);},setSortOptions:function(_c,_d,_e){this._offset=0;_d=(_d===""||_d==null)?"asc":_d;this._sort=[[_c,_d]];}});return _4;});