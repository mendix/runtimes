/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/OfflineByReferenceSource",["./_DataSource","../offline","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"webcore.datasource.OfflineByReferenceSource",_entity:"",_sort:null,constructor:function(_5){this._entity=_5.entity;this._reference=_5.reference;this._sort=_5.sort||[];},reload:function(_6){var _7=this;var _8=this.context.getTrackId();if(_8){_2.getSliceReference(this._entity,this._reference,_8,{offset:this.getOffset(),limit:this.getPageSize(),sort:this._sort}).spread(function(_9,_a){_7._setObjects(_9);_7._setSetSize(_a);if(_6){_6();}}).caught(function(e){mx.onError(e);if(_6){_6();}});}else{_7._setObjects([]);_7._setSetSize(0);if(_6){_6();}}},refresh:function(_b){this.reload(_b);},entityUpdate:function(_c){this.reload(_c);},setSortOptions:function(_d,_e,_f){this._offset=0;_e=(_e===""||_e==null)?"asc":_e;this._sort=[[_d,_e]];}});return _4;});