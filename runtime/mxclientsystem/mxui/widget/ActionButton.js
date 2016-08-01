/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ActionButton",["mxui/widget/_DynamicButton","mendix/logger","mendix/lib/ValidationError","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=_5(_1,{declaredClass:"mxui.widget.ActionButton",action:null,needsObject:false,disableDuringAction:false,constructor:function(_7){this.needsObject=_7.action.hasParameter;},onClick:function(){this.onBeforeAction();window.mx.ui.execute(this.action,{origin:this.mxform,context:this.mxcontext,abortOnClientValidations:true,abortOnServerValidations:true,callback:this.onAfterAction,error:function(_8){this.onAfterAction();if(!(_8 instanceof _3)){window.mx.onError(_8);}}},this);},onBeforeAction:function(){if(this.disableDuringAction){this.disable();}},onAfterAction:function(){if(this.disableDuringAction){this.enable();}}});return _6;});