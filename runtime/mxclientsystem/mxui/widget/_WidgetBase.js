/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_WidgetBase",["mxui/dom","mxui/widget","mxui/html/parser","mendix/lang","mendix/lib/MxContext","mendix/logger","dijit/_WidgetBase","dijit/registry","dojo/dom-attr","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dijit/_base"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){var _d=_c(_7,{declaredClass:"mxui.widget._WidgetBase",mxid:"",uniqueid:"",mxform:null,mxcontext:null,doParse:true,readOnly:false,ignoreUpdates:false,autoLoad:true,_loaded:false,_destroyed:false,_disabled:false,_cachedDisabled:false,_loadCalls:null,_destroyCalls:null,_listeners:null,_subscriptions:null,"-chains-":{constructor:"after",uninitialize:"before"},constructor:function(_e,_f){this._loadCalls=[];this._destroyCalls=[];this._listeners=[];this._subscriptions=[];this.mxcontext=new _5();if(this.autoLoad){this.set("loaded",true);}this._cachedDisabled=this.readOnly;},getTemplate:function(_10){return window.mx.ui.getTemplate(this.mxid,_10);},parseContent:function(_11,_12,_13){var _14={mxform:this.mxform,validator:this.validator,ignoreUpdates:this.ignoreUpdates};if(this.readOnly){_14.readOnly=true;}if(this.doParse){return _3[_13?"parseTopLevel":"parse"](_11||this.domNode,_b.mixin(_14,_12),this.uniqueid);}else{return [];}},getChildren:function(_15){if(_15){return _2.getDescendantWidgets(this.domNode);}else{return _8.findWidgets(this.domNode);}},resizeChildren:function(_16,_17){return _2.resizeWidgetsIn(_16,_17);},applyContext:function(_18,_19){var _1a=this.mxcontext;if(!/reset/i.test(this.contextAction)){_1a.mixin(_18);if(this.dropContext){for(var i=0,_1b;_1b=this.dropContext[i];i++){_1a.unsetContext(_1b);}}}else{if(this.preserveTrackObject){if(_18){_1a.setObject(_18.getTrackObject(),_18.getTrackEntity(),_18.getTrackId());}else{_1a.setObject(null);}}}if(typeof this.update=="function"){var _1c=_1a.getObject(),_1d=_1a.getTrackId(),_1e=_b.hitch(this,function(obj){try{this.update(obj,_19);}catch(e){throw new Error(this.id+".applyContext: "+e);}});if(_1c){_1e(_1c);}else{if(_1d){window.mx.data.get({guid:_1d,callback:function(obj){if(!obj){_6.error(this.id+".applyContext: error while fetching object with guid "+_1d);}_1e(obj);},error:function(e){window.mx.onError(e);_1e(null);}},this);}else{_1e(null);}}}else{var _1f=_8.findWidgets(this.domNode);this.passContext(_1f,_18,_19);}},passContext:function(_20,_21,_22){if(typeof _21=="function"){_22=_21;_21=this.mxcontext;}else{_21=_21||this.mxcontext;}_2.applyContext(_20,_21,_b.hitch(this,_22));},subscribe:function(sub){if(this.ignoreUpdates){return;}var _23=window.mx.data.subscribe(sub,this);this._subscriptions.push(_23);return _23;},unsubscribe:function(_24){if(this.ignoreUpdates){return;}var _25=this._subscriptions;for(var i=0,_26;_26=_25[i];i++){if(_26==_24){window.mx.data.unsubscribe(_24);_25.splice(i,1);break;}}},unsubscribeAll:function(){var _27=this._subscriptions;while(_27.length){window.mx.data.unsubscribe(_27.pop());}},listen:function(_28,_29){var _2a=this.mxform.listen(_28,_b.hitch(this,_29));this._listeners.push(_2a);return _2a;},unlisten:function(_2b){var _2c=this._listeners;for(var i=0,_2d;_2d=_2c[i];i++){if(_2d==_2b){this.mxform.unlisten(_2b);_2c.splice(i,1);break;}}},capture:function(_2e,evt,_2f){var _30=_1.capture(_2e,evt,_b.hitch(this,_2f));this.addOnDestroy(_30.remove);},collect:function(_31,_32){_4.collect(_31,_32,this);},sequence:function(_33,_34){_4.sequence(_33,_34,this);},translate:function(str,_35,_36){return window.mx.ui.translate(this.declaredClass,str,_35,_36);},domData:function(){this.domData=_1.getScopedData();return this.domData.apply(this,arguments);},checkDisabled:function(){return this.readOnly||this._disabled;},updateDisabled:function(){this.set("disabled",undefined);},_getDisabledAttr:function(){return this._cachedDisabled;},_setDisabledAttr:function(_37){if(_37!=null){this._disabled=!!_37;}_37=this.checkDisabled();if(_37!==this._cachedDisabled){this._cachedDisabled=_37;if(_37){this.disable();}else{this.enable();}}},enable:function(){},disable:function(){},resize:function(box){this.resizeChildren(this.domNode,!box);},_setMxidAttr:function(_38){_9.set(this.domNode,"data-mendix-id",_38);},_setFocusIndexAttr:function(_39){if(_39!=null){_9.set(this.domNode,"focusindex",_39);}},_getLoadedAttr:function(){return this._loaded;},_setLoadedAttr:function(_3a){this._loaded=!!_3a;if(_3a){var _3b=this._loadCalls;while(_3b.length){_3b.shift()();}}},actLoaded:function(_3c){this.set("loaded",true);_3c&&_3c();},addOnLoad:function(_3d){this._loaded?_3d():this._loadCalls.push(_3d);},addOnDestroy:function(_3e){this._destroyed?_3e():this._destroyCalls.push(_3e);},destroy:function(_3f){this._beingDestroyed=true;try{this.uninitialize();}catch(e){throw new Error(this.id+".uninitialize: "+e);}function _40(w){if(w.destroyRecursive){w.destroyRecursive(_3f);}else{if(w.destroy){w.destroy(_3f);}}};_a.forEach(this._connects,_b.hitch(this,"disconnect"));_a.forEach(this._supportingWidgets,_40);if(this.domNode){_a.forEach(_8.findWidgets(this.domNode),_40);}this.destroyRendering(_3f);_8.remove(this.id);this._destroyed=true;},destroyRendering:function(){var _41=this.domNode,_42=this.srcNodeRef;this.inherited(arguments,[true]);if(_41){_1.orphan(_41);}this.domNode=_41;this.srcNodeRef=_42;},uninitialize:function(){if(this._loaded){var _43=this._listeners,_44=this._destroyCalls;while(_43.length){this.mxform.unlisten(_43.pop());}this.unsubscribeAll();while(_44.length){_44.shift().call(this);}}else{_6.error(this.id+".uninitialize: widget not loaded yet, check widget structure");this.addOnLoad(_b.hitch(this,function(){try{this.uninitialize();}catch(e){throw new Error(this.id+".unitialize: "+e);}}));}}});return _d;});