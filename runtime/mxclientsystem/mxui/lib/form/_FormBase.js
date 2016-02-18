/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/form/_FormBase",["mxui/wm/focus","mxui/widget","mendix/lang","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dijit/registry"],function(_1,_2,_3,_4,_5,_6,_7){"use strict";var _8=_6(null,{id:"",hash:"",title:"",place:"",path:"",viewState:null,_suspended:false,_listeners:null,_context:null,domNode:null,constructor:function(){this.hash=_3.getUniqueId();this._listeners={};},postscript:function(){_1.addBox(this.domNode);_1.cyclic(this.domNode,true);},getTitle:function(){return this.title;},getContext:function(){return this._context;},reload:function(_9){_2.applyContext(_7.findWidgets(this.domNode),this._context,_9);},dispose:function(){},onBeforeShow:function(){},onBeforeHide:function(){},onAfterShow:function(){},onAfterHide:function(){},onPersistViewState:function(_a){},onResume:function(){},close:function(){this.publish("close",_5.hitch(this,"dispose"));},validate:function(_b,_c){this.publish("validate",_b,_c);},save:function(_d,_e){this.publish("save",_d,_e);},commit:function(_f,_10){this._suspended=true;this.publish("commit",this._resumeCallback(_f),this._resumeCallback(_10));},rollback:function(_11,_12){this._suspended=true;this.publish("rollback",this._resumeCallback(_11),this._resumeCallback(_12));},publish:function(_13,_14,_15,_16){var _17=this._listeners[_13];if(_17){var _18=[];for(var _19 in _17){_18.unshift(_5.partial(function(_1a,_1b){_1a(_1b,_15,_16);},_17[_19]));}_3.sequence(_18,_14);}else{if(_14){_14();}}},listen:function(_1c,_1d){var sid=_3.getUniqueId(),_1e=this._listeners[_1c]||(this._listeners[_1c]={});_1e[sid]=_1d;return [_1c,sid];},unlisten:function(_1f){var sid=_1f[1],msg=_1f[0],_20=this._listeners[msg];if(_20){delete _20[sid];for(var i in _20){return;}delete this._listeners[msg];}},isSuspended:function(){return this._suspended;},hasInterface:function(_21){return _21=="close";},invokeCall:function(_22){if(_22=="close"){this.dispose();}},getChildren:function(_23){if(_23){return _2.getDescendantWidgets(this.domNode);}else{return _7.findWidgets(this.domNode);}},callRecursive:function(_24,_25){var _26=this.getChildren(),_27=Array.prototype.slice.call(arguments,1);for(var i=0,_28;_28=_26[i];i++){if(_28[_24]){_28[_24].apply(_28,_27);}}},enable:function(){this.callRecursive("set","disabled",true);},disable:function(){this.callRecursive("set","disabled",false);},resize:_29(function(){this.onResize();}),onResize:function(){},_resumeCallback:function(_2a){var _2b=this;return function(){_2b._suspended=false;_2b.onResume();if(_2a){_2a.apply(null,arguments);}};}});function _29(_2c){var _2d;return function(){clearTimeout(_2d);var _2e=this,_2f=arguments;_2d=setTimeout(function(){_2c.apply(_2e,_2f);},0);};};return _8;});