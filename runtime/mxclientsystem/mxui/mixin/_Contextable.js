
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_Contextable",["mendix/logger","dojo/_base/connect","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(null,{dropContext:"",contextsource:"",notifyListeners:function(_5){_2.publish(window.mx.ui.makeShareId(this.mxform,this.mxid),[_5]);},initContext:function(){if(!this.mxcontext){this.mxcontext=this.createContext();}},cloneContext:function(_6){if(this.mxcontext==null||this.mxcontext===""){this.mxcontext=this.createContext();}this.mxcontext.dupFrom(_6);this.applyContextDrop();this.applyContextAction();if(this.backtrackconstraints){this.mxcontext.setConstraints(this.backtrackconstraints);}},applyContextDrop:function(){var _7=this.dropContext;if(_7){for(var i=0,_8;_8=_7[i];i++){if(this.mxcontext.hasContext(_8)){this.mxcontext.unsetContext(_8);}}}},applyContextAction:function(){if(/reset/i.test(this.contextAction)){this.mxcontext.reset();}},createContext:function(){var _9=new mendix.lib.MxContext();_9.setAppFlowId(this.app_flow_id);return _9;},removeOpenContext:function(){var _a=this.mxcontext;if(_a&&_a.listeners){_a.listeners[this.id]=null;delete _a.listeners[this.id];}window.mx.ui.cleanWidgetContext(this);delete this.mxcontext;},uninitialize:function(){this.removeOpenContext();}});return _4;});