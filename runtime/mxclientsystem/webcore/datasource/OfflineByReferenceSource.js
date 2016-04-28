/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/OfflineByReferenceSource",["./_DataSource","../offline","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"webcore.datasource.OfflineByReferenceSource",_entity:"",_reference:"",_sort:null,constructor:function(_5){var _6=_5.path.split("/");this._entity=_6.pop();this._reference=_6.pop();this._sort=_5.sort||[];},reload:function(_7){var _8=this;var _9=this.context.getTrackId();if(_9){_2.getSliceReference(this._entity,this._reference,_9,{offset:this.getOffset(),limit:this.getPageSize(),sort:this._sort}).spread(function(_a,_b){_8._setObjects(_a);_8._setSetSize(_b);if(_7){_7();}}).caught(function(e){mx.onError(e);if(_7){_7();}});}else{_8._setObjects([]);_8._setSetSize(0);if(_7){_7();}}},refresh:function(_c){this.reload(_c);},entityUpdate:function(_d){this.reload(_d);},setSortOptions:function(_e,_f,_10){this._offset=0;_f=(_f===""||_f==null)?"asc":_f;this._sort=[[_e,_f]];}});return _4;});