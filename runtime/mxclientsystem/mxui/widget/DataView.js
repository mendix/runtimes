
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/DataView",["mxui/widget/_WidgetBase","mxui/widget","mxui/dom","mendix/lib/DirectObjectSource","mendix/lib/MicroflowObjectSource","mendix/lib/SchemaObjectSource","mendix/logger","dijit/registry","dojo/dom-geometry","dojo/topic","dojo/query","dojo/_base/array","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var _f=_e(_1,{declaredClass:"mxui.widget.DataView",entity:"",schema:"",autoLoad:false,datasource:null,conditions:null,contextsource:"",closeButton:"",hideControls:false,useSchema:false,_doUpdate:false,_mxObject:null,_children:null,_tempSubs:null,_mxidMap:null,_delayMap:null,_source:null,_contentNode:null,_controlsNode:null,constructor:function(){this._tempSubs=[];},buildRendering:function(){var $=_3.create,_10=this.getTemplate("content"),_11=this.getTemplate("buttons");this.domNode=$("div",{"class":"mx-dataview"},$("div",{"class":"mx-dataview-content"},_10));this._contentNode=this.domNode.firstChild;if(_11){var _12=this._controlsNode=$("div",{"class":"mx-dataview-controls"},_11);if(this.hideControls){_12.style.display="none";}this.domNode.appendChild(_12);}},postCreate:function(){var _13=this.conditions,map=this._mxidMap={},_14=this._delayMap={};for(var _15 in _13){var _16=_13[_15];for(var _17 in _16){var _18=_16[_17];for(var _19 in _18){var _1a=_18[_19];for(var i=0,_1b;_1b=_1a[i];i++){if(_19=="show"||_19=="hide"){_14[_1b]=1;}var key=_17===""?"_empty_":_17;_d.setObject([_1b,_15,key,_19].join("."),1,map);}}}}if(!this.readOnly){this.listen("validate",this.validate);this.listen("save",this.save);this.listen("commit",this.commit);this.listen("rollback",this.rollback);}this.listen("close",this.close);this.createSource();this._children=[];},createSource:function(){var _1c=this.datasource;if(_1c){switch(_1c.type){case "listen":var _1d=window.mx.ui.makeShareId(this.mxform,this.datasource.contextsource),_1e=_a.subscribe(_1d,_d.hitch(this,"applyContext"));this.addOnDestroy(function(){_1e.remove();});case "direct":if(this.useSchema==="true"){_1c.type="schema";this._source=new _6({schema:this.schema,context:this.mxcontext});}else{this._source=new _4({schema:this.schema,context:this.mxcontext,path:_1c.path||this.entity});}break;case "microflow":this._source=new _5({context:this.mxcontext,microflow:_1c.microflow});break;default:throw new Error(this.id+".createSource : unknown datasource type: "+_1c);}}},parseNode:function(_1f){var _20=[],_21=true;var _22=function(_23){var _24=_21,_25=_23.getAttribute("data-mendix-id");_21=false;if(_25){if(!_24&&_25 in this._delayMap){_23.setAttribute("data-mendix-not-parsed",true);window.mx.ui.applyToNode("hide",_23);}else{var _26=_23.getAttribute("data-mendix-type");if(_26){var _27={doParse:false};if(this.schema===""&&_26===this.declaredClass){_27.schema="";}var _28=this.parseContent(_23,_27,true)[0];if(_28){this._patchWidget(_28);_20.push(_28);this._children.push(_28);_23=_28.domNode;}}if(_26!=this.declaredClass){_c.forEach(_23.children,_22,this);}}}else{_c.forEach(_23.children,_22,this);}};_22.call(this,_1f);return _20;},startup:function(){var _29=this.parseNode(this.domNode);_2.ready(_29,_d.hitch(this,"actLoaded"));},resume:function(){if(this._doUpdate){this.refresh();this._doUpdate=false;}},applyContext:function(_2a,_2b){this.mxcontext.mixin(_2a);this.update(_2a.getTrackId(),_2b);},update:function(_2c,_2d){var _2e=this;this._sourceGuid=_2c;var _2f=function(obj,_30){_2e.mxcontext.setObject(obj);_2e.updateObject(obj,_30);};this._source.fetch(function(obj){_2f(obj,_2d);},function(e){window.mx.onError(e);_2f(null,_2d);});},updateObject:function(obj,_31){if(obj!=this._mxObject){this._mxObject=obj;}this.setSubscriptions();this.refresh(_31);},setSubscriptions:function(){var obj=this._mxObject,_32=this._tempSubs,_33=this._sourceGuid,sub;var _34=function(){this.mxcontext.setTrackId(_33);this.update(_33);};var _35=_d.hitch(this,"applyConditions");while((sub=_32.pop())){this.unsubscribe(sub);}if(obj){var _36=obj.getGuid();_32.push(this.subscribe({guid:_36,callback:_35}));for(var _37 in this.conditions){_32.push(this.subscribe({guid:_36,attr:_37,callback:_35}));}}if(this._source.hasRoot()&&_33){_32.push(this.subscribe({guid:_33,callback:_34}));_32.push(this.subscribe({guid:_33,attr:this._source.getRoot(),callback:_34}));}},refresh:function(_38){if(this.get("suspended")){this._doUpdate=true;_38&&_38();}else{this.set("disabled",!this._mxObject);var _39=this;this.passContext(_8.findWidgets(this.domNode),function(){_39.applyConditions();_38&&_38();});}},validate:function(_3a,_3b){var _3c=this._mxObject;if(!_3c||this.get("disabled")){_3a&&_3a();}else{var _3d=this._children,_3e=true;for(var i=0,_3f;_3f=_3d[i];i++){if(_3f.isValid&&!_3f.isValid()){_3e=false;}}if(_3e){_3a&&_3a();}else{if(_3b){_3b();}else{if(window.mx.ui.getProfile()==="phone"){window.mx.ui.error(this.translate("validation_error"));}}}}},save:function(_40,_41){var _42=this._mxObject;if(!_42||this.get("disabled")){_40&&_40();}else{window.mx.data.save({mxobj:this._mxObject,callback:_40,error:_41},this);}},commit:function(_43,_44){var _45=this._mxObject;if(!_45||this.get("disabled")){_43();}else{window.mx.data.commit({mxobj:_45,callback:_43,error:_44});}},rollback:function(_46,_47){var obj=this._mxObject;if(!obj||this.get("disabled")){_46();}else{if(obj.getGuid()!==0){window.mx.data.rollback({mxobj:obj,callback:_46,error:_47});}else{_46&&_46();}}},close:function(_48){if(this.closeButton){var _49=_b("[data-mendix-id="+this.closeButton+"]",this.domNode)[0];if(_49){_8.byNode(_49).onClick();}else{_7.error(this.id+".close: No close button found");}}else{_48&&_48();}},getCFAction:function(_4a){var _4b=_4a.getAttribute("data-mendix-id");if(_4b){if(this._mxObject){var _4c=this._mxidMap[_4b];for(var _4d in _4c){var _4e=this._mxObject.get(_4d),_4f=_4c[_4d][_4e===""?"_empty_":_4e];for(var _50 in _4f){return _50;}}}else{if(_4b in this._delayMap){return "hide";}}}},applyConditions:function(){var _51=[],_52=true,_53=false;var _54=function(_55){var _56=_52,_57=!_55.getAttribute("data-mendix-not-parsed"),_58=this.getCFAction(_55);_52=false;if(_58=="show"){_53=true;if(!_57){var _59=this.parseNode(_55);_51.push.apply(_51,_59);_c.forEach(_59,function(_5a){_54.call(this,_5a.domNode);},this);_55.removeAttribute("data-mendix-not-parsed");_57=true;}}if(_58){window.mx.ui.applyToNode(_58,_55);}if(_56||_57&&!(_8.byNode(_55) instanceof this.constructor)){_c.forEach(_55.children,_54,this);}};_54.call(this,this.domNode);_2.ready(_51,function(){this.passContext(_51);if(_51.length||_53){this.mxform.resize();}},this);},resize:function(box){if(box){var _5b=box.h-_3.getNodeExtents(this.domNode).h;if(this._controlsNode){_5b-=_9.getMarginBox(this._controlsNode).h;}_9.setContentSize(this._contentNode,{h:_5b});}else{this._contentNode.style.height="auto";}this.resizeChildren(this._contentNode,!box);},uninitialize:function(){this._source.destroy();},_patchWidget:function(_5c){var _5d=_5c.name;if(!(_5c instanceof _1)&&(typeof _5c.onChange=="function")&&_5d){this.connect(_5c,"onChange",function(){var _5e=_5c.get("value");this._mxObject.set(_5d,_5e);});}}});return _f;});