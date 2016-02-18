
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/MicroflowObjectSource",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mendix.lib.MicroflowObjectSource");_1.declare("mendix.lib.MicroflowObjectSource",[mendix.lib._ObjectSource],{name:"mendix.lib.MicroflowObjectSource",_microflow:"",constructor:function(_4){this.inherited(arguments);this._microflow=_4.microflow;},fetch:function(_5,_6){var _7=this;this.release();mx.data.get({microflow:this._microflow,context:this.context,callback:function(_8){_8=(_8 instanceof Array)?_8:[];if(_8.length>1){mx.data.release(_8.slice(1));}if(_8.length==1){_7.hold(_8[0]);_5(_8[0]);}else{_5(null);}},error:_6});}});});