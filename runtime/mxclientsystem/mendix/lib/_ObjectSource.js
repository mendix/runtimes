
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/_ObjectSource",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mendix.lib._ObjectSource");_1.declare("mendix.lib._ObjectSource",null,{name:"mendix.lib._ObjectSource",context:null,schema:"",_holdObj:null,constructor:function(_4){this.context=_4.context;this.schema=_4.schema;},fetch:function(_5,_6){},getRoot:function(){return "";},hasRoot:function(){return !!this.getRoot();},destroy:function(){this.release();},hold:function(_7){if(this._holdObj){this.release();}this._holdObj=_7;},release:function(){if(this._holdObj){mx.data.release([this._holdObj]);}this._holdObj=null;}});});