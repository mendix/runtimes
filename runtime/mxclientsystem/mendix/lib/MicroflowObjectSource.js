/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/lib/MicroflowObjectSource",["mendix/lib/_ObjectSource","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"mendix.lib.MicroflowObjectSource",_microflow:"",constructor:function(_5){this.inherited(arguments);this._microflow=_5.microflow;},fetch:function(_6,_7){var _8=this;this.release();window.mx.data.get({microflow:this._microflow,context:this.context,callback:function(_9){_9=(_9 instanceof Array)?_9:[];if(_9.length>1){window.mx.data.release(_9.slice(1));}if(_9.length==1){_8.hold(_9[0]);_6(_9[0]);}else{_6(null);}},error:_7});}});return _4;});