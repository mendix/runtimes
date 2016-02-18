
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/_Widget",["mxui/wm/focus","mxui/dom","mendix/lang","mendix/logger","dijit/_Widget","dijit/registry","dojo/query","dojo/_base/array","dojo/_base/lang","dojo/_base/kernel","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){_5.prototype.destroy=function(_c){if(!this._destroyed){this._beingDestroyed=true;this.uninitializer&&this.uninitializer();try{this.uninitialize();}catch(e){throw new Error(this.id+".destroy: Some trouble in uninitialize function: "+e.message);}var d=dojo,_d=d.forEach,_e=d.unsubscribe;_d(this._connects,function(_f){_d(_f,d.disconnect);});_d(this._subscribes,function(_10){_e(_10);});_d(this._supportingWidgets||[],function(w){if(w.destroyRecursive){w.destroyRecursive();}else{if(w.destroy){w.destroy();}}});this.destroyRendering(_c);_6.remove(this.id);this._destroyed=true;}};var _11=_b(null,{applyContext:function(_12,_13){this.mxcontext=_12;if(this.isContainer){this.applyContextRecursive(_13);}else{if(typeof this.update=="function"){var _14=_12.getTrackObject(),_15=_12.getTrackId();if(_14){this.update(_14,_13);}else{if(_15){window.mx.data.get({guid:_15,callback:function(obj){if(!obj){_4.error(this.id+".applyContext: error while fetching object with guid "+_15);}this.update(obj,_13);},error:function(e){window.mx.onError(e);this.update(null,_13);}},this);}else{this.update(null,_13);}}}else{_13&&_13();}}},applyContextRecursive:function(_16){var _17=_6.findWidgets(this.domNode);if(_17.length==0){_16&&_16();return;}this.callFetchOnChildren(this.mxcontext,_17,_16);},patchChildImpl:function(_18){if(_18.applyContext==null){if(_18.constructor){_9.extend(_18.constructor,_11.prototype);}else{_9.mixin(_18,_11.prototype);}}},callFetchOnChildren:function(_19,_1a,_1b){var id=this.id,_1c=[],_1d=null;if(this.createContext){_1d=this.createContext();_1d.dupFrom(_19);}else{_1d=_19;}_1d.freeze();_8.forEach(_1a,function(_1e,i){this.patchChildImpl(_1e);_1c.push(function(_1f){var _20=function(){try{_1e.applyContext(_1d,_1f);}catch(e){_4.error(id+".applyContextRecursive: ERROR:"+_1e.id+": "+e.message,e);_1f();}};if((i+1)%10===0){setTimeout(_20,0);}else{_20();}});},this);var _21=_9.hitch(window.mx.ui,"cleanContext",_1d.ident,this);_3.sequence(_1c,function(){_21();_1b&&_1b();});},isLoadedRecursive:function(_22,_23){var _24=_7("[widgetId]",(_23!=null?_23:this.domNode)),_25=_24.map(_6.byNode),_26=[],id=this.id;_8.forEach(_25,function(kid){if(kid.addOnLoad){_26.push(function(_27){kid.addOnLoad(_27);});}else{}});_3.collect(_26,function(){_22&&_22();});}});var _28=_b([_11],{declaredClass:"mxui.widget._Widget",_mx_:true,_loaded:false,_loadCalls:null,_destroyCalls:null,_liveConnects:null,_subscriptions:null,mxid:"",uniqueid:"",content_id:"",app_flow_id:"",tabIndex:"",focusIndex:"",isInactive:false,attributeMap:_9.delegate(_5.prototype.attributeMap,{mxid:"",isInactive:"",focusIndex:""}),constructor:function(){this._loadCalls=[];this._destroyCalls=[];this._liveConnects=[];this._subscriptions=[];},_getDisabledAttr:function(){return this.isInactive;},_setDisabledAttr:function(_29){this.isInactive=!!_29;},loaded:function(){this._loaded=true;var _2a=this._loadCalls;while(_2a.length!=0){try{(_2a.shift())();}catch(e){_4.error(this.id+".loaded/actLoaded: Broken onLoad function!!! "+e.message);}}this.loaded=function(){return false;};return true;},actLoaded:function(_2b){this.loaded();_2b&&_2b();},isLoaded:function(){return this._loaded;},rendered:function(){_a.deprecated(this.id+".rendered is deprecated, use loaded instead","","3.1");this.loaded();},actRendered:function(_2c){_a.deprecated(this.id+".actRendered is deprecated, use actLoaded instead","","3.1");this.actLoaded(_2c);},isRendered:function(){_a.deprecated(this.id+".isRendered is deprecated, use isLoaded instead","","3.1");return this.isLoaded();},addOnLoad:function(fnc){this._loaded?fnc():this._loadCalls.push(fnc);},addOnDestroy:function(fnc){this._destroyCalls.push(fnc);},registerOnDestroy:function(f1){_a.deprecated(this.id+"registerOnDestroy is deprecated, use addOnDestroy instead","","3.1");this.addOnDestroy(f1);},subscribe:function(sub){var _2d=this._subscriptions,_2e=sub.guid,val=sub.val,_2f=sub.attr,_30=sub.entity;if(sub.attr){if(_8.some(_2d,function(sub){return ((sub.guid==_2e)&&(sub.attr==_2f));})){return;}}else{if(sub.val){if(_8.some(_2d,function(sub){return sub.guid==_2e&&sub.val;})){return;}}else{if(sub.guid){if(_8.some(_2d,function(sub){return ((sub.guid==_2e)&&(sub.attr==null));})){return;}}else{if(sub.entity){if(_8.some(_2d,function(sub){return (sub.entity&&sub.entity==_30);})){return;}}}}}var _31=window.mx.data.subscribe(sub,this);_2d.push(_31);return _31;},unsubscribe:function(_32){var _33=this._subscriptions;for(var i=_33.length-1,sub;sub=_33[i];i--){if(sub==_32){window.mx.data.unsubscribe(sub);_33.splice(i,1);break;}}},subscribeToClass:function(_34){_a.deprecated(this.id+"subscribeToClass is deprecated, use subscribe instead","","3.1");this.subscribe({entity:_34,callback:_9.hitch(this,"objectUpdate")});},subscribeToGuid:function(_35){_a.deprecated(this.id+"subscribeToGuid is deprecated, use subscribe instead","","3.1");this.subscribe({guid:_35,callback:_9.hitch(this,"objectUpdate")});},subscribeToChange:function(_36,_37,_38){_a.deprecated(this.id+"subscribeToChange is deprecated, use subscribe instead","","3.1");if(!isNaN(_36)){this.subscribe({guid:_36,attr:_37,callback:_9.hitch(this,_38)});}},removeClassSubscriptions:function(_39){_a.deprecated(this.id+".removeClassSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_8.filter(this._subscriptions,function(sub){if(sub.entity!=null){window.mx.data.unsubscribe(sub);return false;}return true;});_39&&_39();},removeGuidSubscriptions:function(_3a){_a.deprecated(this.id+".removeGuidSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_8.filter(this._subscriptions,function(sub){if((sub.guid!=null)&&(sub.attr==null)){window.mx.data.unsubscribe(sub);return false;}return false;});_3a&&_3a();},removeChangeSubscriptions:function(){_a.deprecated(this.id+".removeChangeSubscriptions is deprecated, use this.unsubscribe instead","","3.1");this._subscriptions=_8.filter(this._subscriptions,function(sub){if((sub.guid!=null)&&(sub.attr!=null)){window.mx.data.unsubscribe(sub);return false;}return true;});},removeSubscriptions:function(){var _3b=this._subscriptions;while(_3b.length!=0){window.mx.data.unsubscribe(_3b.shift());}this._subscriptions=[];},liveConnect:function(_3c,evt,map){this._liveConnects.push(_2.liveConnect(_3c,evt,this,map));},liveDisconnect:function(_3d){var _3e=this._liveConnects;for(var i=0,_3f;_3f=_3e[i];i++){if(_3f==_3d){_2.liveDisconnect(_3d);_3e.splice(i,1);return;}}},disconnectLive:function(){_a.deprecated(this.id+".disconnectLive is deprecated, use liveDisconnect instead","","3.1");var _40=this._liveConnects;while(_40.length){_2.liveDisconnect(_40.pop());}},domData:function(){this.domData=_2.getScopedData();return this.domData.apply(this,arguments);},getLocalUrl:function(_41){_a.deprecated(this.id+".getLocalUrl is deprecated","","3.1");return require.toUrl(this.moduleName,_41);},markupFactory:function(_42,_43,_44){var _45=_2.getTabIndex(_43);if(_45){_42.focusIndex=_45;}_42.content_id=_42.content_id?_42.content_id:_43.getAttribute("content_id");return new _44(_42,_43);},resizeContent:function(){this.mxform.resize();},disposeContent:function(){this.mxform.dispose();},getTitle:function(){return this.mxform.getTitle();},getUIPlace:function(){return this.mxform.place;},getContent:function(){return this.content_id;},objectUpdate:function(obj,_46){if(this.objectUpdateNotification.length==2){this.objectUpdateNotification(obj,_46);}else{this.objectUpdateNotification(obj);_46&&_46();}},objectUpdateNotification:function(obj){},validationUpdate:function(){return this.refresh();},runAct:function(_47,_48,_49){_a.deprecated(this.id+".runAct is deprecated, use sequence or collect instead","","3.1");var _4a=_3[_49?"collect":"sequence"];_4a(this,_47,_48);},sequence:function(_4b,_4c){_3.sequence(_4b,_4c,this);},collect:function(_4d,_4e){_3.collect(_4d,_4e,this);},addFocusBox:function(_4f){var box=_1.addBox(_4f);this.addOnDestroy(function(){_1.unregister(box);});return box;},getFocusBox:function(_50){return _1.byNode(_50);},uninitialize:function(){if(!_28.prototype.isLoaded.call(this)){_4.error("Looks like "+this.id+" never loads up, check the structure of the widget");this.addOnLoad(_9.hitch(this,function(){try{this.uninitialize();}catch(e){_4.error(this.id+".uninitialize: ERROR when calling uninitialize");}}));}else{this.removeSubscriptions();var _51=this._liveConnects,_52=this._destroyCalls;while(_51.length){_2.liveDisconnect(_51.pop());}while(_52.length){(_52.shift()).call(this);}}}});return _28;});