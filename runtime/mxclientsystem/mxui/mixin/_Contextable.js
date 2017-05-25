/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Contextable",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{dropContext:"",contextsource:"",initContext:function(){if(!this.mxcontext){this.mxcontext=this.createContext();}},cloneContext:function(_4){if(this.mxcontext==null||this.mxcontext===""){this.mxcontext=this.createContext();}this.mxcontext.dupFrom(_4);this.applyContextDrop();this.applyContextAction();if(this.backtrackconstraints){this.mxcontext.setConstraints(this.backtrackconstraints);}},applyContextDrop:function(){var _5=this.dropContext;if(_5){for(var i=0,_6;_6=_5[i];i++){if(this.mxcontext.hasContext(_6)){this.mxcontext.unsetContext(_6);}}}},applyContextAction:function(){if(this.contextAction==="reset"){this.mxcontext.reset();}},createContext:function(){var _7=new mendix.lib.MxContext();_7.setAppFlowId(this.app_flow_id);return _7;},removeOpenContext:function(){var _8=this.mxcontext;if(_8&&_8.listeners){_8.listeners[this.id]=null;delete _8.listeners[this.id];}delete this.mxcontext;},uninitialize:function(){this.removeOpenContext();}});return _3;});