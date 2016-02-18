/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_FormWidget",["mxui/widget/_WidgetBase","mxui/mixin/_ValidationHelper","mxui/lib/InputMask","mxui/dom","mendix/lib/Error","mendix/logger","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8){var $=_4.create;var _9=_8([_1,_2],{declaredClass:"mxui.widget._FormWidget",attributePath:"",events:null,editNode:null,readNode:null,_mxObject:null,_rootSubs:null,_objsub:null,_attrsub:null,_path:null,_attribute:"",_entity:"",postMixInProperties:function(){var _a=this._path=this.attributePath.split("/");this._attribute=_a.pop();this._entity=_a.slice(-1)[0]||this.entity;_a.shift();var _b=window.mx.meta.getEntity(this._entity);if(!_b||!_b.has(this._attribute)){throw new Error("No permission to read or write attribute "+this._attribute+" of entity "+this._entity+", check security.");}this._rootSubs=[];},buildRendering:function(){this.readNode=this.insideFormGroup?$("p",{"class":"form-control-static"}):$("label");this.readNode.innerHTML="&nbsp;";if(!this.domNode){this.domNode=$("div",this.editNode);}if(this.mask){var _c=new _3(this.editNode,this.mask);this.addOnDestroy(_7.hitch(_c,"destroy"));}},startup:function(){this.set("disabled",this.readOnly);this.setupValidation(this._attribute);this.connectEvents();},update:function(_d,_e){while(this._rootSubs.length>0){this.unsubscribe(this._rootSubs.shift());}var _f=this,_10=function(){window.mx.data.fetch(_d,_f._path,{usexpath:true},function(obj){_f.updateObject(obj,_e);},function(e){window.mx.onError(e);_f.updateObject(null,_e);});};if(_d){if(this._path.length>0){this._rootSubs.push(this.subscribe({guid:_d.getGuid(),callback:function(_11){_10();}}));this._rootSubs.push(this.subscribe({guid:_d.getGuid(),attr:this._path[0],callback:function(_12,_13,val){_10();}}));}_10();}else{this.updateObject(null,_e);}},updateObject:function(obj,_14){if(obj!=this._mxObject){this._mxObject=obj;this.setValidationObject(obj);}this.removeError();this.updateDisabled();if(this._objsub){this.unsubscribe(this._objsub);this._objsub=null;}if(this._attrsub){this.unsubscribe(this._attrsub);this._attrsub=null;}if(obj){var _15=_7.hitch(this,function(val){this.removeError();if(this.get("value")!=val){this.set("value",val);}});this._objsub=this.subscribe({guid:obj.getGuid(),callback:function(){_15(this._mxObject.get2(this._attribute));}});this._attrsub=this.subscribe({guid:obj.getGuid(),attr:this._attribute,callback:function(_16,_17,val){_15(val);}});this.set("value",obj.get2(this._attribute));}else{this.set("value","");}if(_14){_14();}},connectEvents:function(){var _18=this.editNode||this.domNode;this.connect(_18,"change","onChange");for(var evt in this.events){if(evt!="change"){this.connect(_18,evt,_7.hitch(this,"handleEvent",evt));}}},handleEvent:function(evt){var ev=this.events&&this.events[evt];if(ev){this.validatedMicroflow(ev);}},onChange:function(e){var ev=this.events&&this.events.change,_19=this.get("value");if(this.isValid()){this._mxObject.set(this._attribute,_19);this.set("value",_19);}if(ev){this.validatedMicroflow(ev);}},enable:function(){if(this.editNode&&this.readNode){this.domNode.replaceChild(this.editNode,this.readNode);}else{this.domNode.removeAttribute("disabled");}},disable:function(){if(this.editNode&&this.readNode){var _1a=this.get("value");if(_1a!=null){this.set("value",_1a);}this.domNode.replaceChild(this.readNode,this.editNode);}else{this.domNode.setAttribute("disabled","disabled");}},checkDisabled:function(){return (this.inherited(arguments)||!this._mxObject||this._mxObject.isReadonlyAttr(this._attribute));},getType:function(){return window.mx.meta.getEntity(this._entity).getAttributeType(this._attribute);}});return _9;});