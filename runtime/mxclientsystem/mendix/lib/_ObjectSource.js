
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/_ObjectSource",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{name:"mendix.lib._ObjectSource",context:null,schema:"",_holdObj:null,constructor:function(_4){this.context=_4.context;this.schema=_4.schema;},fetch:function(_5,_6){},getRoot:function(){return "";},hasRoot:function(){return !!this.getRoot();},destroy:function(){this.release();},hold:function(_7){if(this._holdObj){this.release();}this._holdObj=_7;},release:function(){if(this._holdObj){window.mx.data.release([this._holdObj]);}this._holdObj=null;}});return _3;});