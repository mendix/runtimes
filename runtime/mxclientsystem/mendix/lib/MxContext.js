/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/lib/MxContext",["mendix/lib/MxObject","mendix/logger","dojo/_base/array","dojo/_base/json","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=0;var _7=_5(null,{constructor:function(_8){this.id=this.ident=++_6;this._app_flow_id="";this.trackId="";this.trackClass="";this.trackObject=null;this.localParams={};this.constraintby=[];this._contextStore={};this.saveStore={localParams:{},contexts:{}};if(_8){if(_8.mxcontext){this.dupFrom(_8.mxcontext);}if(_8.classname&&_8.mendixguid){this.setContext(_8.classname,_8.mendixguid);}else{if(_8.entity&&_8.guid){this.setContext(_8.entity,_8.guid);}}}},hasTrackEntity:function(){return this.trackClass!=="";},hasTrackId:function(){return !!this.trackId;},hasTrackObject:function(){return !!this.trackObject;},getTrackEntity:function(){return this.trackClass;},getTrackId:function(){return this.trackId;},getTrackObject:function(){return this.trackObject;},setTrackEntity:function(_9){if(_9==null){this.trackClass="";}else{if(typeof _9=="string"){this.trackClass=_9;}else{throw new Error("mendix.lib.MxContext.setTrackEntity: entity should be a string");}}},setTrackId:function(_a){this.trackId=_a;this.trackObject=null;},setTrackObject:function(_b){if(_b){this.setContext(_b.getEntity(),_b.getGuid());}this.trackObject=_b;},setObject:function(_c,_d,_e){if(_c){this.setContext(_c.getEntity(),_c.getGuid());}else{this.trackId=_e||"";if(_d){this.trackClass=_d;}}this.trackObject=_c;},getObject:function(){return this.trackObject;},setConstraints:function(_f){if(_f==null||_f===""||_f.length===0){return;}if(typeof _f=="string"){this.constraintby=_f.split(",");}else{this.constraintby=_f;}},getConstraints:function(){var t=[];for(var i=0;i<this.constraintby.length;i++){t.push(this.constraintby[i]);}return t;},hasBacktrack:function(){return this.constraintby.length!==0;},getContexts:function(){var c=[];for(var i in this._contextStore){if(typeof i!="undefined"&&this._contextStore[i]!==""){c.push(i);}}return c;},setContext:function(_10,_11){if((arguments.length==1)&&(arguments[0] instanceof _1)){var _12=arguments[0];_10=_12.getEntity(),_11=_12.getGuid();}if(typeof _10!="string"){throw new Error("mendix.lib.MxContext.setContext: parameter entity is not of type String");}if(_11==null){_11="";}this.setTrackId(_11);this.setTrackEntity(_10);this._contextStore[_10]=_11;},unsetContext:function(_13){if(typeof _13!="string"){throw new Error("mendix.lib.MxContext.unsetContext: parameter entity is not of type String");}delete this._contextStore[_13];},getContext:function(_14){if(typeof _14!="string"){throw new Error("mendix.lib.MxContext.getContext: parameter entity is not of type String");}if(_14 in this._contextStore){return this._contextStore[_14];}var _15=window.mx.meta.getEntity(_14),_16=null;_3.some(_15.getSubEntities(),function(_17){if(_17 in this._contextStore){_16=this._contextStore[_17];return true;}},this);return _16;},hasContext:function(_18){if(typeof _18!="string"){throw new Error("mendix.lib.MxContext.hasContext: parameter entity is not of type String");}return this.getContext(_18)!=null;},reset:function(){this._contextStore={};this.trackId=null;this.trackClass="";this.trackObject=null;},dupFrom:function(_19){this.reset();this.mixin(_19);},mixin:function(_1a){if(_1a){var _1b=_1a.getContexts();for(var i=0,c;c=_1b[i];i++){this.setContext(c,_1a.getContext(c));}this.setParams(_1a.getParams());this.setConstraints(_1a.getConstraints());this.setContext(_1a.getTrackEntity(),_1a.getTrackId());this.setTrackObject(_1a.getTrackObject());}else{var _1c=this.getTrackEntity();if(_1c){this.unsetContext(_1c);}this.setTrackId("");this.setTrackEntity("");this.setTrackObject(null);}},save:function(){var _1d=this.saveStore={contexts:{},localParams:{}},i;for(i in this._contextStore){_1d.contexts[i]=this._contextStore[i];}for(i in this.localParams){_1d.localParams[i]=this.localParams[i];}},restore:function(){var _1e=this.saveStore;this._contextStore={};this.localParams={};var i;for(i in _1e.contexts){this._contextStore[i]=_1e.contexts[i];}for(i in _1e.localParams){this.localParams[i]=_1e.localParams[i];}},hasParam:function(key){return key in this.localParams;},getParam:function(key){if(!this.hasParam(key)){return null;}return this.localParams[key];},getParams:function(){return this.localParams;},setParam:function(key,_1f){if(key==null){throw new Error("mendix.lib.MxContext["+this.ident+"].setParam key is null");}this.localParams[key]=_1f;},setParams:function(obj){if(typeof obj!="object"){throw new Error("mendix.lib.MxContext["+this.ident+"].setParams requires an Object.");}for(var i in obj){this.localParams[i]=obj[i];}},unsetParam:function(key){delete this.localParams[key];},resetParams:function(){this.localParams={};},isEmpty:function(){for(var j in this._contextStore){return true;}},getGuidS:function(){var _20=this.getContexts();var _21=this.getTrackId();var _22=_21?[_21]:[];for(var i=0,l=_20.length;i<l;i++){var c=_20[i];if(c!="System.owner"&&c!="System.changedBy"){var _23=this.getContext(c);if(_23!=_21){_22.push(_23);}}}return _22;},dump:function(){var _24="";var _25=this.getContexts();for(var i=0;i<_25.length;i++){var _26=_25[i];_24+=" "+_26+": "+this.getContext(_26)+";";}return _24;},serialize:function(){return _4.toJson(this._contextStore);},toQuery:function(){var _27=this._contextStore,_28=this.trackId,_29=[];for(var i in _27){var _2a=_27[i];if(_2a){_29[_2a==_28?"unshift":"push"](i+"="+_2a);}}return _29.join("&");},freeze:function(){this.setActiveClass=this.setTrackEntity=this.setTrackId=this.setTrackObject=this.setContextFromMxObject=this.setConstraints=this.setBacktrack=this.setContext=this.unsetContext=this.unsetBacktrack=this.reset=this.dupFrom=this.restore=this.setParam=this.setParams=this.unsetParam=this.resetParams=function(){_2.error("mendix.lib.MxContext["+this.ident+"].freeze: context is readonly");return false;};},setAppFlowId:function(_2b){this._app_flow_id=_2b;},getAppFlowId:function(){return this._app_flow_id;},toString:function(){return this.ident;}});return _7;});