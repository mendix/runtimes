/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DataView",["mxui/widget/_WidgetBase","mxui/widget","mxui/dom","mxui/html/parser","mendix/lib/DirectObjectSource","mendix/lib/MicroflowObjectSource","mendix/lib/SchemaObjectSource","mendix/logger","dijit/registry","dojo/dom-geometry","dojo/topic","dojo/aspect","dojo/_base/array","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){var _10=_f(_1,{declaredClass:"mxui.widget.DataView",entity:"",schema:"",autoLoad:false,datasource:null,conditions:null,contextsource:"",closeButton:"",hideControls:false,useSchema:false,noEntityMessage:"",_mxObject:null,_tempSubs:null,_mxidMap:null,_delayMap:null,_source:null,_contentNode:null,_controlsNode:null,_messageNode:null,_doUpdate:false,constructor:function(){this._tempSubs=[];},postMixInProperties:function(){this.doParse=true;},buildRendering:function(){var $=_3.create,_11=this.getTemplate("content"),_12=this.getTemplate("buttons");this.domNode=$("div",{"class":"mx-dataview"},$("div",{"class":"mx-dataview-content"},_11));this._contentNode=this.domNode.firstChild;if(this.noEntityMessage){this._messageNode=$("div",{"class":"mx-dataview-message","style":"display: none"},$("div",$("p",this.noEntityMessage)));this.domNode.appendChild(this._messageNode);}if(_12){var _13=this._controlsNode=$("div",{"class":"mx-dataview-controls"},_12);if(this.hideControls){_13.style.display="none";}this.domNode.appendChild(_13);}},postCreate:function(){var map=this._mxidMap={},_14=this._delayMap={};for(var _15 in this.conditions){var _16=this.conditions[_15];for(var _17 in _16){var _18=_17===""?"_empty_":_17,_19=_16[_17];_d.forEach(_19,function(_1a){if(_1a.action==="show"||_1a.action==="hide"){_14[_1a.mxid]=1;}_e.setObject([_1a.mxid,_15,_18,_1a.action].join("."),1,map);});}}if(!this.readOnly){this.listen("validate",this.validate);this.listen("save",this.save);this.listen("commit",this.commit);this.listen("rollback",this.rollback);_c.after(this.mxform,"onResume",_e.hitch(this,"resume"));}this.listen("close",this.close);this.createSource();},createSource:function(){var _1b=this.datasource;if(_1b){switch(_1b.type){case "listen":var _1c=window.mx.ui.makeShareId(this.mxform,this.datasource.contextsource),_1d=_b.subscribe(_1c,_e.hitch(this,"applyContext"));this.addOnDestroy(function(){_1d.remove();});case "direct":if(this.useSchema==="true"){_1b.type="schema";this._source=new _7({schema:this.schema,context:this.mxcontext});}else{this._source=new _5({schema:this.schema,context:this.mxcontext,path:_1b.path||this.entity});}break;case "microflow":this._source=new _6({context:this.mxcontext,microflow:_1b.microflow});break;default:throw new Error(this.id+".createSource : unknown datasource type: "+_1b);}}},parseNode:function(_1e){var _1f=[],_20=true;var _21=function(_22){var _23=_20,_24=_22.getAttribute("data-mendix-id");_20=false;if(_24){if(!_23&&_24 in this._delayMap){_22.setAttribute("data-mendix-not-parsed",true);window.mx.ui.applyToNode("hide",_22);}else{var _25=_22.getAttribute("data-mendix-type");if(_25){var _26={doParse:false};if(this.schema===""&&_25===this.declaredClass){_26.schema="";}var _27=this.parseContent(_22,_26,true)[0];if(_27){this._patchWidget(_27);_1f.push(_27);_22=_27.domNode;}}if(this._shouldBeVisited(_22)){_d.forEach(_22.children,_21,this);}}}else{_d.forEach(_22.children,_21,this);}};_21.call(this,_1e);return _1f;},startup:function(){var _28=this.parseNode(this.domNode);_2.ready(_28,_e.hitch(this,"actLoaded"));},applyContext:function(_29,_2a){this.mxcontext.mixin(_29);this.update(this.mxcontext.getTrackId(),_2a);},update:function(_2b,_2c){var _2d=this;this._sourceGuid=_2b;var _2e=function(obj,_2f){_2d.mxcontext.setObject(obj);_2d.updateObject(obj,_2f);};this._source.fetch(function(obj){_2e(obj,_2c);},function(e){window.mx.onError(e);_2e(null,_2c);});},updateObject:function(obj,_30){if(obj!=this._mxObject){this._mxObject=obj;}this.setSubscriptions();this.refresh(_30);},setSubscriptions:function(){var obj=this._mxObject,_31=this._tempSubs,_32=this._sourceGuid,sub;var _33=function(){this.mxcontext.setTrackId(_32);this.update(_32);};var _34=_e.hitch(this,"applyConditions");while((sub=_31.pop())){this.unsubscribe(sub);}if(obj){var _35=obj.getGuid();_31.push(this.subscribe({guid:_35,callback:_34}));for(var _36 in this.conditions){_31.push(this.subscribe({guid:_35,attr:_36,callback:_34}));}}if(this._source.hasRoot()&&_32){_31.push(this.subscribe({guid:_32,callback:_33}));_31.push(this.subscribe({guid:_32,attr:this._source.getRoot(),callback:_33}));}},refresh:function(_37){this.set("disabled",!this._mxObject);var _38=this;if(this.mxform.isSuspended()){this._doUpdate=true;_37&&_37();return;}else{this._doUpdate=false;}if(this._messageNode){if(!this._mxObject){this._messageNode.style.display="block";}else{this._messageNode.style.display="none";}}this.passContext(_9.findWidgets(this.domNode),function(){_38.applyConditions();_37&&_37();});},validate:function(_39,_3a){var _3b=this._mxObject;if(!_3b||this.get("disabled")){_39&&_39();}else{var _3c=this.getChildren(true),_3d=true;for(var i=0,_3e;_3e=_3c[i];i++){if(_3e.isValid&&!_3e.isValid()){_3d=false;}}if(_3d){_39&&_39();}else{if(_3a){_3a();}else{if(window.mx.ui.getProfile()==="phone"){window.mx.ui.error(this.translate("validation_error"));}}}}},save:function(_3f,_40){var _41=this._mxObject;if(!_41||this.get("disabled")){_3f&&_3f();}else{window.mx.data.save({mxobj:this._mxObject,callback:_3f,error:_40},this);}},commit:function(_42,_43){var _44=this._mxObject;if(!_44||this.get("disabled")){_42();}else{window.mx.data.commit({mxobj:_44,callback:_42,error:_43});}},resume:function(){if(this._doUpdate){this.refresh();this._doUpdate=false;}},rollback:function(_45,_46){var obj=this._mxObject;if(!obj||this.get("disabled")){_45();}else{if(obj.getGuid()!==0){window.mx.data.rollback({mxobj:obj,callback:_45,error:_46});}else{_45&&_45();}}},close:function(_47){if(this.closeButton){var _48=this.domNode.querySelector("[data-mendix-id='"+this.closeButton+"']");if(_48){_9.byNode(_48).onClick();}else{_8.error(this.id+".close: No close button found");}}else{_47&&_47();}},getCFActions:function(_49){var _4a=_49.getAttribute("data-mendix-id")||_49.getAttribute("mxid"),_4b=[];if(_4a){if(this._mxObject){var _4c=this._mxidMap[_4a];for(var _4d in _4c){var _4e=this._mxObject.get2(_4d),_4f=_4c[_4d][_4e===""?"_empty_":_4e];for(var _50 in _4f){if(_50==="show"){_4b.unshift("show");}else{_4b.push(_50);}}}}else{if(_4a in this._delayMap){_4b.push("hide");}}}return _4b;},applyConditions:function(){var _51=[],_52=false;var _53=function(_54){var _55=!_54.getAttribute("data-mendix-not-parsed"),_56=this.getCFActions(_54);dojo.forEach(_56,function(_57){if(_57=="show"){_52=true;if(!_55){var _58=this.parseNode(_54);_51.push.apply(_51,_58);if(_3.isOrphan(_54)){_54=_58[0].domNode;}_54.removeAttribute("data-mendix-not-parsed");_55=true;}}window.mx.ui.applyToNode(_57,_54);},this);if(_55&&this._shouldBeVisited(_54)){_d.forEach(_54.children,_53,this);}};_53.call(this,this.domNode);_2.ready(_51,function(){this.passContext(_51);if(_51.length||_52){this.mxform.resize();}},this);},resize:function(box){if(box){var _59=box.h-_3.getNodeExtents(this.domNode).h;if(this._controlsNode){_59-=_a.getMarginBox(this._controlsNode).h;}_a.setContentSize(this._contentNode,{h:_59});}else{this._contentNode.style.height="auto";}this.resizeChildren(this._contentNode,!box);},uninitialize:function(){this._source.destroy();},getChildren:function(_5a){if(_5a){var _5b=[];_3.walkNode(this.domNode,function(_5c){var _5d=_5c.nodeType===_3.nodeTypes.ELEMENT_NODE&&_9.byNode(_5c);if(!_5d||_5d==this){return true;}_5b.push(_5d);return !(_5d instanceof this.constructor);});return _5b;}else{this.inherited(arguments);}},_patchWidget:function(_5e){var _5f=_5e.name;if(!(_5e instanceof _1)&&(typeof _5e.onChange=="function")&&_5f){this.connect(_5e,"onChange",function(){var _60=_5e.get("value");this._mxObject.set(_5f,_60);});}},_shouldBeVisited:function(_61){return _61==this.domNode||!(_9.byNode(_61) instanceof this.constructor);}});return _10;});