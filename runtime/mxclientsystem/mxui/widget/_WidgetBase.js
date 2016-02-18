
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/_WidgetBase",["mxui/dom","mxui/widget","mxui/html/parser","mendix/lang","mendix/lib/MxContext","mendix/logger","dijit/_WidgetBase","dijit/registry","dojo/query","dojo/dom-attr","dojo/dom-geometry","dojo/_base/array","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var _f=_e(_7,{declaredClass:"mxui.widget._WidgetBase",mxid:"",uniqueid:"",mxform:null,mxcontext:null,doParse:true,readOnly:false,ignoreUpdates:false,autoLoad:true,_loaded:false,_destroyed:false,_cachedDisabled:false,_disabled:false,_loadCalls:null,_destroyCalls:null,_listeners:null,_subscriptions:null,"-chains-":{constructor:"after",uninitialize:"before"},constructor:function(_10,_11){this._loadCalls=[];this._destroyCalls=[];this._listeners=[];this._subscriptions=[];this.mxcontext=new _5();if(this.autoLoad){this.set("loaded",true);}},getTemplate:function(_12){return window.mx.ui.getTemplate(this.mxid,_12);},parseContent:function(_13,_14,_15){var _16={mxform:this.mxform,validator:this.validator,ignoreUpdates:this.ignoreUpdates};if(this.readOnly){_16.readOnly=true;}if(this.doParse){return _3[_15?"parseTopLevel":"parse"](_13||this.domNode,_d.mixin(_16,_14),this.uniqueid);}else{return [];}},getChildren:function(_17){if(_17){return _9("[widgetid]",this.domNode).map(_8.byNode);}else{return _8.findWidgets(this.domNode);}},resizeChildren:function(_18,_19){var _1a=_8.findWidgets(_18);if(_1a.length>1||_18.children.length>1){_19=true;}_c.forEach(_1a,function(_1b){var _1c=_2.findNonPlaceholderParent(_1b.domNode);if(_1c===_18||_1c===_1b.mxform.domNode){if(typeof _1b.resize==="function"){if(_19){_1b.resize();}else{var box=_b.getContentBox(_18);_1b.resize({w:box.w,h:box.h});}}}});},applyContext:function(_1d,_1e){var _1f=this.mxcontext;if(!/reset/i.test(this.contextAction)){_1f.mixin(_1d);if(this.dropContext){for(var i=0,_20;_20=this.dropContext[i];i++){_1f.unsetContext(_20);}}}else{if(this.preserveTrackObject){if(_1d){_1f.setObject(_1d.getTrackObject(),_1d.getTrackEntity(),_1d.getTrackId());}else{_1f.setObject(null);}}}if(typeof this.update=="function"){var _21=_1f.getObject(),_22=_1f.getTrackId(),_23=_d.hitch(this,function(obj){try{this.update(obj,_1e);}catch(e){throw new Error(this.id+".applyContext: "+e);}});if(_21){_23(_21);}else{if(_22){window.mx.data.get({guid:_22,callback:function(obj){if(!obj){_6.error(this.id+".applyContext: error while fetching object with guid "+_22);}_23(obj);},error:function(e){window.mx.onError(e);_23(null);}},this);}else{_23(null);}}}else{var _24=_8.findWidgets(this.domNode);this.passContext(_24,_1d,_1e);}},passContext:function(_25,_26,_27){if(typeof _26=="function"){_27=_26;_26=this.mxcontext;}else{_26=_26||this.mxcontext;}_2.applyContext(_25,_26,_d.hitch(this,_27));},subscribe:function(sub){if(this.ignoreUpdates){return;}var _28=window.mx.data.subscribe(sub,this);this._subscriptions.push(_28);return _28;},unsubscribe:function(_29){if(this.ignoreUpdates){return;}var _2a=this._subscriptions;for(var i=0,_2b;_2b=_2a[i];i++){if(_2b==_29){window.mx.data.unsubscribe(_29);_2a.splice(i,1);break;}}},unsubscribeAll:function(){var _2c=this._subscriptions;while(_2c.length){window.mx.data.unsubscribe(_2c.pop());}},listen:function(_2d,_2e){var _2f=this.mxform.listen(_2d,_d.hitch(this,_2e));this._listeners.push(_2f);return _2f;},unlisten:function(_30){var _31=this._listeners;for(var i=0,_32;_32=_31[i];i++){if(_32==_30){this.mxform.unlisten(_30);_31.splice(i,1);break;}}},capture:function(_33,evt,_34){var _35=_1.capture(_33,evt,_d.hitch(this,_34));this.addOnDestroy(_35.remove);},collect:function(_36,_37){_4.collect(_36,_37,this);},sequence:function(_38,_39){_4.sequence(_38,_39,this);},translate:function(str,_3a,_3b){return window.mx.ui.translate(this.declaredClass,str,_3a,_3b);},domData:function(){this.domData=_1.getScopedData();return this.domData.apply(this,arguments);},checkDisabled:function(){return this.readOnly||this._disabled;},updateDisabled:function(_3c){if(_3c!=null){this._disabled=!!_3c;}_3c=this.checkDisabled();if(_3c!=this._cachedDisabled){this._cachedDisabled=_3c;var _3d=_3c?"disable":"enable";try{this[_3d]();}catch(e){throw new Error(this.id+"."+_3d+": "+e);}}},_getDisabledAttr:function(){return this._cachedDisabled;},_setDisabledAttr:function(_3e){return this.updateDisabled(_3e);},enable:function(){},disable:function(){},_setMxidAttr:function(_3f){_a.set(this.domNode,"data-mendix-id",_3f);},_setFocusIndexAttr:function(_40){if(_40!=null){_a.set(this.domNode,"focusindex",_40);}},_getLoadedAttr:function(){return this._loaded;},_setLoadedAttr:function(_41){this._loaded=!!_41;if(_41){var _42=this._loadCalls;while(_42.length){_42.shift()();}}},actLoaded:function(_43){this.set("loaded",true);_43&&_43();},addOnLoad:function(fnc){this._loaded?fnc():this._loadCalls.push(fnc);},addOnDestroy:function(fnc){this._destroyed?fnc():this._destroyCalls.push(fnc);},destroy:function(_44){this._beingDestroyed=true;try{this.uninitialize();}catch(e){throw new Error(this.id+".uninitialize: "+e);}function _45(w){if(w.destroyRecursive){w.destroyRecursive(_44);}else{if(w.destroy){w.destroy(_44);}}};_c.forEach(this._connects,_d.hitch(this,"disconnect"));_c.forEach(this._supportingWidgets,_45);if(this.domNode){_c.forEach(_8.findWidgets(this.domNode),_45);}this.destroyRendering(_44);_8.remove(this.id);this._destroyed=true;},destroyRendering:function(){var _46=this.domNode,_47=this.srcNodeRef;this.inherited(arguments,[true]);if(_46){_1.orphan(_46);}this.domNode=_46;this.srcNodeRef=_47;},uninitialize:function(){if(this._loaded){var _48=this._listeners,_49=this._destroyCalls;while(_48.length){this.mxform.unlisten(_48.pop());}this.unsubscribeAll();while(_49.length){_49.shift().call(this);}}else{_6.error(this.id+".uninitialize: widget not loaded yet, check widget structure");this.addOnLoad(_d.hitch(this,function(){try{this.uninitialize();}catch(e){throw new Error(this.id+".unitialize: "+e);}}));}}});return _f;});