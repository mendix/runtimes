/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/_ObjectSource",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{name:"webcore.objectsource._ObjectSource",context:null,schema:"",_holdObj:null,constructor:function(_4){this.context=_4.context;this.schema=_4.schema;},fetch:function(_5,_6){},getDependencies:function(){return [];},destroy:function(){this.release();},hold:function(_7){if(this._holdObj){this.release();}this._holdObj=_7;},release:function(){if(this._holdObj){window.mx.data.release([this._holdObj]);}this._holdObj=null;}});return _3;});