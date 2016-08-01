/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/MicroflowObjectSource",["webcore/objectsource/_ObjectSource","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{name:"webcore.objectsource.MicroflowObjectSource",_microflow:"",_parameters:null,constructor:function(_5){this.inherited(arguments);this._microflow=_5.microflow;this._parameters=_5.parameters;},fetch:function(_6,_7){var _8=this;this.release();window.mx.data.get({microflow:this._microflow,context:this.context,callback:function(_9){_9=(_9 instanceof Array)?_9:[];if(_9.length>1){window.mx.data.release(_9.slice(1));}if(_9.length==1){_8.hold(_9[0]);_6(_9[0]);}else{_6(null);}},error:_7});},getDependencies:function(){return this._parameters.map(function(_a){return this.context.getContext(_a);},this).filter(function(_b){return !!_b;}).map(function(_c){return {guid:_c};});}});return _4;});