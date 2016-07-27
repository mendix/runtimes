/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/OfflineByReferenceSource",["./_DataSource","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"webcore.datasource.OfflineByReferenceSource",_attribute:"",_entity:"",_constraints:null,_referenceConstraint:"",_sort:null,constructor:function(_5){var _6=_5.path.split("/");this._attribute=_6[0];this._entity=_6[1];this._constraints=_5.filter||[];this._sort=_5.sort||[];},reload:function(_7){var _8=this;var _9=this.context.getTrackId();if(_9){var _a=this._constraints.concat([{attribute:this._attribute,operator:"equals",value:_9}]);mx.data.getSlice(this._entity,_a,{offset:this.getOffset(),limit:this.getPageSize(),sort:this._sort},function(_b,_c){_8._setObjects(_b);_8._setSetSize(_c);if(_7){_7();}},function(e){mx.onError(e);if(_7){_7();}});}else{_8._setObjects([]);_8._setSetSize(0);if(_7){_7();}}},refresh:function(_d){this.reload(_d);},entityUpdate:function(_e){this.reload(_e);},setSortOptions:function(_f,_10,_11){this._offset=0;_10=(_10===""||_10==null)?"asc":_10;this._sort=[[_f,_10]];}});return _4;});