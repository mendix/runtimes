/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/form/FormData",["mendix/lang","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{_objectProviders:null,constructor:function(){this._objectProviders=[];},validateRemote:function(_4,_5){mx.data.validate(this._getObjectsFromProviders(),_4,_5);},commit:function(_6,_7){mx.data.commit({mxobjs:this._getObjectsFromProviders(),callback:_6,error:_7});},rollback:function(_8,_9){mx.data.rollback({mxobjs:this._getObjectsFromProviders(),callback:_8,error:_9});},addSubmitProvider:function(_a,_b){this._objectProviders.push(_b);return {remove:function(){var _c=this._objectProviders.indexOf(_b);if(_c!==-1){this._objectProviders.splice(_c,1);}}.bind(this)};},getSubmitGuids:function(){return this._getObjectsFromProviders().map(function(_d){return _d.getGuid();});},_getObjectsFromProviders:function(){var _e=_1.flatten(this._objectProviders.map(function(_f){return _f();}));return _10(_e);}});return _3;function _10(_11){var _12={};_11.forEach(function(_13){_12[_13.getGuid()]=_13;});var _14=[];for(var _15 in _12){_14.push(_12[_15]);}return _14;};});