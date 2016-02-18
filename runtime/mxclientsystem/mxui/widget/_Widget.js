
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/_Widget",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_TemplatedMixin,mxui/dom/builder"],function(_1,_2,_3){_1.provide("mxui.widget._Widget");_1.require("dijit._Widget");_1.require("dijit._TemplatedMixin");_1.require("mxui.dom.builder");_2._Widget.prototype.destroy=function(_4){if(!this._destroyed){this._beingDestroyed=true;this.uninitializer&&this.uninitializer();try{this.uninitialize();}catch(e){throw new Error(this.id+".destroy: Some trouble in uninitialize function: "+e.message);}var d=_1,_5=d.forEach,_6=d.unsubscribe;_5(this._connects,function(_7){_5(_7,d.disconnect);});_5(this._subscribes,function(_8){_6(_8);});_5(this._supportingWidgets||[],function(w){if(w.destroyRecursive){w.destroyRecursive();}else{if(w.destroy){w.destroy();}}});this.destroyRendering(_4);_2.registry.remove(this.id);this._destroyed=true;}};mxui.widget.getDisableables=function(_9){var _a=[];run=function(_b){var _c=_b.childNodes;for(var i=0,_d;_d=_c[i];i++){if(_d.nodeType!=1){continue;}var id=_d.getAttribute("widgetId"),_e=_2.byId(id);if(_e&&!(/^dijit/.test(id)||_e._btn_||_e instanceof mxui.widget._Button)){_a.push(_e);}if(!(_e instanceof mxui.widget._WidgetBase)){run(_d);}}};run(_9);return _a;};mxui.widget.fireOnReady=function(_f,_10){var _11=[];_1.forEach(_f,function(w){if(w.addOnLoad){_11.push(function(h){w.addOnLoad(h);});}});if(_10){_11.push(function(){_10();});}mendix.lang.sequence(_11);};mxui.widget.makeCallsBundle=function(_12,_13,_14){var _15=[],i=_12.length;while(i--){var _16=_12[i].prototype,fnc=_16[_14];fnc&&_15.push(fnc);}return _15.length?(function(){var _17=null;for(var i=0,_18;_18=_15[i];i++){try{_18.call(this);}catch(e){var _19=_18.ctor&&_18.ctor.prototype,_1a=(_19&&_19.declaredClass)||"some";logger.error(this.id+"."+_13+": Can not execute "+_14+" function of "+_1a+" addon :"+e.message);}}}):function(){};};mxui.widget.destroyChildren=function(_1b){var _1c=_2.findWidgets(_1b);_1.forEach(_1c,function(_1d){try{_1d.destroyRecursive();}catch(e){logger.error(_1d.id+".destroy: Unable to destroy:"+e.message);}});};mxui.widget.defineClass=function(_1e,_1f,_20){var _21=(function(_22){if(this instanceof arguments.callee){var _23=(_22&&_22.callee==arguments.callee)?_22:arguments;try{_1e&&_1e.apply(this,_23);}catch(e){var _24=typeof e=="string"?e:e.message;logger.error(this.id+".Unable to render widget. ERROR: "+_24);this.loaded();this._broken=true;this._brokenError=_24;var _25=this.domNode&&this.domNode.parentNode,_26=mxui.dom.div({refWidgetId:this.id,style:"color:red"},"Unable to render "+this.id+" widget: "+_24);if(_25){_25.removeChild(this.domNode);_25.appendChild(_26);}else{var _27=(arguments.length==2&&arguments[1].nodeName)?arguments[1]:null;if(_27&&_27.parentNode){_27.parentNode.appendChild(_26);}}}}else{if(_1f){var _28=(arguments.callee.caller)?"from scope "+arguments.callee.caller.toString():"from unknown scope";}return new arguments.callee(arguments);}});if(_1e){for(var x in _1e){_21[x]=_1e[x];}_21.prototype=_1e.prototype;_21.prototype.constructor=_21;}return _21;};mxui.widget.transformAddons=function(_29){var _2a=[];for(var i=0,l=_29.length;i<l;i++){var _2b=_29[i],_2c=(typeof _2b=="string")?_1.getObject(_2b):_2b;if(_2c==null||typeof (_2c)=="object"){throw new Error("mxui.widget.declare: Mixin '"+_2b.toString()+"' is not loaded! Maybe it's broken???");}_2a.push(_2c);}return _2a;};mxui.widget.createPrototype=function(_2d,_2e,_2f){var _30=function(_31){var _32=_31.inputargs,_33=false;if(_32 instanceof Array){var _34={};for(var i=0,l=_32.length;i<l;i++){if(typeof _32[i]=="object"){for(var x in _32[i]){_34[x]=_32[i][x];break;}_33=true;}else{_34[_32[i]]="";}}if(_33){}_32=_34;}if(_32){var _35=_2d.__inputargs?_2d.__inputargs:(_2d.__inputargs={});for(var i in _32){_35[i]=_2d[i]=_32[i];}}};for(var i=0,l=_2e.length;i<l;i++){var _36=_2e[i].prototype;_30(_36);}_30(_2d);for(var i=0,l=_2f.length;i<l;i++){var _37=_2f[i].prototype;_30(_37);}};mxui.widget.declare=function(_38,_39){var _3a=_39.superclass||_2._Widget,_3b=_39.mixins,_3c=_39.constructor,_3d=_38.split(".");if(!_3b&&_39.addons){_1.deprecated("mxui.widget.declare: addons are deprecated, use mixins instead (widget: "+_38+")","","3.1");_3b=_39.addons;}_3b=_3b||[];if(_3d.length==1){_38="mxui.widget."+_3d;_3d=_38.split(".");}var _3e=_3a.prototype["_mx_"]?[_3a]:[_3a,mxui.widget._Widget];var _3b=mxui.widget.transformAddons(_3b),_3f=_3e.concat(_3b),_40=_3d.pop();_39.moduleName=_3d.join(".");_39.className=_40;_39["initializer"]=mxui.widget.makeCallsBundle(_3f,"create","initialize");_39["uninitializer"]=mxui.widget.makeCallsBundle(_3f,"destroy","uninitialize");mxui.widget.createPrototype(_39,_3e,_3b);var _41=_1.declare(_38,_3f,_39);var _42=mxui.widget.defineClass(_41,true,_38);return _1.setObject(_38,_42);};mxui.widget.createCSSMap=function(_43,css){for(var i in css){css[i]=_43+"-"+css[i];}css.baseClass=_43;return css;};mxui.widget._ContextHelperImpl={applyContext:function(_44,_45){this.mxcontext=_44;if(this.isContainer){this.applyContextRecursive(_45);}else{if(typeof this.update=="function"){var _46=_44.getTrackObject(),_47=_44.getTrackId();if(_46){this.update(_46,_45);}else{if(_47){mx.data.get({guid:_47,callback:function(obj){if(!obj){logger.error(this.id+".applyContext: error while fetching object with guid "+_47);}this.update(obj,_45);},error:function(e){mx.onError(e);this.update(null,_45);}},this);}else{this.update(null,_45);}}}else{_45&&_45();}}},applyContextRecursive:function(_48){var _49=_2.findWidgets(this.domNode);if(_49.length==0){_48&&_48();return;}this.callFetchOnChildren(this.mxcontext,_49,_48);},patchChildImpl:function(_4a){if(_4a.applyContext==null){if(_4a.constructor){_1.extend(_4a.constructor,mxui.widget._ContextHelperImpl);}else{_1.mixin(_4a,mxui.widget._ContextHelperImpl);}}},callFetchOnChildren:function(_4b,_4c,_4d){var id=this.id,_4e=[],_4f=null;if(this.createContext){_4f=this.createContext();_4f.dupFrom(_4b);}else{_4f=_4b;}_4f.freeze();_1.forEach(_4c,function(_50,i){this.patchChildImpl(_50);_4e.push(function(_51){var _52=function(){try{_50.applyContext(_4f,_51);}catch(e){logger.error(id+".applyContextRecursive: ERROR:"+_50.id+": "+e.message,e);_51();}};if((i+1)%10===0){setTimeout(_52,0);}else{_52();}});},this);var _53=_1.hitch(mx.ui,"cleanContext",_4f.ident,this);mendix.lang.sequence(_4e,function(){_53();_4d&&_4d();});},isLoadedRecursive:function(_54,_55){var _56=_1.query("[widgetId]",(_55!=null?_55:this.domNode)),_57=_56.map(_2.byNode),_58=[],id=this.id;_1.forEach(_57,function(kid){if(kid.addOnLoad){_58.push(function(_59){kid.addOnLoad(_59);});}else{}});mendix.lang.collect(_58,function(){_54&&_54();});}};_1.declare("mxui.widget._ContextHelper",null,mxui.widget._ContextHelperImpl);_1.declare("mxui.widget._Widget",[mxui.widget._ContextHelper],{_mx_:true,_loaded:false,_suspended:false,_loadCalls:null,_destroyCalls:null,_liveConnects:null,_subscriptions:null,mxid:"",content_id:"",app_flow_id:"",tabIndex:"",focusIndex:"",isInactive:false,attributeMap:_1.delegate(_2._Widget.prototype.attributeMap,{mxid:"",isInactive:"",focusIndex:""}),constructor:function(){this._loadCalls=[];this._destroyCalls=[];this._liveConnects=[];this._subscriptions=[];},_getDisabledAttr:function(){return this.isInactive;},_setDisabledAttr:function(_5a){this.isInactive=!!_5a;},loaded:function(){this._loaded=true;var _5b=this._loadCalls;while(_5b.length!=0){try{(_5b.shift())();}catch(e){logger.error(this.id+".loaded/actLoaded: Broken onLoad function!!! "+e.message);}}this.loaded=function(){return false;};return true;},actLoaded:function(_5c){this.loaded();_5c&&_5c();},isLoaded:function(){return this._loaded;},rendered:function(){_1.deprecated(this.id+".rendered is deprecated, use loaded instead","","3.1");this.loaded();},actRendered:function(_5d){_1.deprecated(this.id+".actRendered is deprecated, use actLoaded instead","","3.1");this.actLoaded(_5d);},isRendered:function(){_1.deprecated(this.id+".isRendered is deprecated, use isLoaded instead","","3.1");return this.isLoaded();},addOnLoad:function(fnc){this._loaded?fnc():this._loadCalls.push(fnc);},addOnDestroy:function(fnc){this._destroyCalls.push(fnc);},registerOnDestroy:function(f1){_1.deprecated(this.id+"registerOnDestroy is deprecated, use addOnDestroy instead","","3.1");this.addOnDestroy(f1);},subscribe:function(sub){var _5e=this._subscriptions,_5f=sub.guid,val=sub.val,_60=sub.attr,_61=sub.entity;if(sub.attr){if(_1.some(_5e,function(sub){return ((sub.guid==_5f)&&(sub.attr==_60));})){return;}}else{if(sub.val){if(_1.some(_5e,function(sub){return sub.guid==_5f&&sub.val;})){return;}}else{if(sub.guid){if(_1.some(_5e,function(sub){return ((sub.guid==_5f)&&(sub.attr==null));})){return;}}else{if(sub.entity){if(_1.some(_5e,function(sub){return (sub.entity&&sub.entity==_61);})){return;}}}}}var _62=mx.data.subscribe(sub,this);_5e.push(_62);return _62;},unsubscribe:function(_63){var _64=this._subscriptions;for(var i=_64.length-1,sub;sub=_64[i];i--){if(sub==_63){mx.data.unsubscribe(sub);_64.splice(i,1);break;}}},subscribeToClass:function(_65){_1.deprecated(this.id+"subscribeToClass is deprecated, use subscribe instead","","3.1");this.subscribe({entity:_65,callback:_1.hitch(this,"objectUpdate")});},subscribeToGuid:function(_66){_1.deprecated(this.id+"subscribeToGuid is deprecated, use subscribe instead","","3.1");this.subscribe({guid:_66,callback:_1.hitch(this,"objectUpdate")});},subscribeToChange:function(_67,_68,_69){_1.deprecated(this.id+"subscribeToChange is deprecated, use subscribe instead","","3.1");if(!isNaN(_67)){this.subscribe({guid:_67,attr:_68,callback:_1.hitch(this,_69)});}},removeClassSubscriptions:function(_6a){_1.deprecated(this.id+".removeClassSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_1.filter(this._subscriptions,function(sub){if(sub.entity!=null){mx.data.unsubscribe(sub);return false;}return true;});_6a&&_6a();},removeGuidSubscriptions:function(_6b){_1.deprecated(this.id+".removeGuidSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_1.filter(this._subscriptions,function(sub){if((sub.guid!=null)&&(sub.attr==null)){mx.data.unsubscribe(sub);return false;}return false;});_6b&&_6b();},removeChangeSubscriptions:function(){_1.deprecated(this.id+".removeChangeSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_1.filter(this._subscriptions,function(sub){if((sub.guid!=null)&&(sub.attr!=null)){mx.data.unsubscribe(sub);return false;}return true;});},removeSubscriptions:function(){var _6c=this._subscriptions;while(_6c.length!=0){mx.data.unsubscribe(_6c.shift());}this._subscriptions=[];delete this._updatedObject;},liveConnect:function(_6d,evt,map){this._liveConnects.push(mxui.dom.liveConnect(_6d,evt,this,map));},liveDisconnect:function(_6e){var _6f=this._liveConnects;for(var i=0,_70;_70=_6f[i];i++){if(_70==_6e){mxui.dom.liveDisconnect(_6e);_6f.splice(i,1);return;}}},disconnectLive:function(){_1.deprecated(this.id+".disconnectLive is deprecated, use liveDisconnect instead","","3.1");var _71=this._liveConnects;while(_71.length){mxui.dom.liveDisconnect(_71.pop());}},domData:function(){this.domData=mxui.dom.getScopedData();return this.domData.apply(this,arguments);},getLocalUrl:function(_72){_1.deprecated(this.id+".getLocalUrl is deprecated","","3.1");return require.toUrl(this.moduleName,_72);},markupFactory:function(_73,_74,_75){var _76=mxui.dom.getTabIndex(_74);if(_76){_73.focusIndex=_76;}_73.content_id=_73.content_id?_73.content_id:_74.getAttribute("content_id");return new _75(_73,_74);},resizeContent:function(){this.mxform.resize();},disposeContent:function(){this.mxform.dispose();},getTitle:function(){return this.mxform.getTitle();},getUIPlace:function(){return this.mxform.place;},getContent:function(){return this.content_id;},objectUpdate:function(obj,_77){if(this._suspended){this._updatedObject=obj;_77&&_77();}else{if(this.objectUpdateNotification.length==2){this.objectUpdateNotification(obj,_77);}else{this.objectUpdateNotification(obj);_77&&_77();}}},objectUpdateNotification:function(obj){},validationUpdate:function(){return this.refresh();},runAct:function(_78,_79,_7a){_1.deprecated(this.id+".runAct is deprecated, use sequence or collect instead","","3.1");var _7b=mendix.lang[_7a?"collect":"sequence"];_7b(this,_78,_79);},sequence:function(_7c,_7d){mendix.lang.sequence(_7c,_7d,this);},collect:function(_7e,_7f){mendix.lang.collect(_7e,_7f,this);},resume:function(){this._suspended=false;if("_updatedObject" in this){this.objectUpdateNotification(this._updatedObject);delete this._updatedObject;}this.resumed&&this.resumed();},suspend:function(){this._suspended=true;this.suspended&&this.suspended();},isSuspended:function(){return this._suspended;},addFocusBox:function(_80){var box=mxui.wm.focus.addBox(_80);this.addOnDestroy(function(){mxui.wm.focus.unregister(box);});return box;},getFocusBox:function(_81){return mxui.wm.focus.byNode(_81);},uninitialize:function(){if(!mxui.widget._Widget.prototype.isLoaded.call(this)){logger.error("Looks like "+this.id+" never loads up, check the structure of the widget");this.addOnLoad(_1.hitch(this,function(){try{this.uninitialize();}catch(e){logger.error(this.id+".uninitialize: ERROR when calling uninitialize");}}));}else{this.removeSubscriptions();var _82=this._liveConnects,_83=this._destroyCalls;while(_82.length){mxui.dom.liveDisconnect(_82.pop());}while(_83.length){(_83.shift()).call(this);}}}});});