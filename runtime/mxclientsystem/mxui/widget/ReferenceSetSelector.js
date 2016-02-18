
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/ReferenceSetSelector",["dojo","dijit","dojox","dojo/require!mxui/mixin/_Contextable"],function(_1,_2,_3){_1.provide("mxui.widget.ReferenceSetSelector");_1.require("mxui.mixin._Contextable");mxui.widget.declare("mxui.widget.ReferenceSetSelector",{mixins:[_2._Container,_2._Contained,mxui.mixin._Contextable],inputargs:["entity","reference","xpathConstraint"],_datasource:null,_datagrid:null,_sourceObject:null,_mendixGuid:null,_oldXPath:null,_gridBacktrack:null,_cellNode:null,_errorNode:null,_updateSubscription:null,_oldActionDeleteSelection:null,_hasError:false,postCreate:function(){this._gridBacktrack=this.backtrackconstraints;delete this.backtrackconstraints;this.initContext();var _4=this.reference.split("/");this.sourceReference=_4.pop();this.sourceEntity=_4.pop();var _5=this.domNode.parentNode;if(_5.nodeName=="TD"){this._cellNode=_5;}if(this.entity&&this.sourceEntity&&this.sourceReference){this.createGrid();}else{throw new Error(this.id+".postCreate : Not all params are filled.");}},createGrid:function(){this._datasource=new mendix.lib.ReferenceSetSource({entity:this.entity,reference:this.sourceReference,queryid:this.schema});this._datagrid=new mxui.widget.DataGrid({mxid:this.mxid,mxform:this.mxform,app_flow_id:this.app_flow_id,contextname:this.contextname,entity:this.entity,schema:this.schema,config:this.config,template:this.template,dropcontext:this.dropcontext,content_id:this.getContent(),customDataSource:this._datasource});this._datagrid.addOnLoad(_1.hitch(this,"actLoaded"));this._oldActionDeleteSelection=this._datagrid.actionDeleteSelection;_1.mixin(this._datagrid,{actionAddRef:_1.hitch(this,"handlerAdd"),actionSelectRef:_1.hitch(this,"handlerSelect"),actionCreateRef:_1.hitch(this,"handlerCreate"),actionDeleteRef:this.makeRemoveHandler(false),actionDeleteSelection:this.makeRemoveHandler(true),registerSubscriptions:_1.hitch(this,"registerSubscriptions")});this.domNode.appendChild(this._datagrid.domNode);},handlerAdd:function(_6){this._sourceObject&&this._openAddForm(_6[this.entity]);},handlerSelect:function(_7){this._sourceObject&&this._openAddForm(_7[this.entity],true);},handlerCreate:function(_8){var _9=this._getEntity(_8),_a=_8[_9];if(_a==null){return;}if(!this._sourceObject){return;}var _b=this.createContext(),_c=this.sourceReference;mx.data.create({entity:_9,persistent:_a.persistent,callback:function(_d){var _e,_f;_e=_d.getEntity();_f=_d.getGuid();_b.setTrackEntity(_e);_b.setTrackId(_f);this.onChange();mx.ui.execute(_a,{context:_b,callback:function(_10){_10.listen("save",_1.hitch(this,function(_11){this._sourceObject.addReferences(this.sourceReference,[_f]);_11();}));}},this);},error:function(e){mx.onError(e);}},this);},makeRemoveHandler:function(_12){var _13=this;return function(){var _14=_13._datagrid.getSelected();if(_14.length===0){mx.ui.info(mx.ui.translate("mxui.widget.DataGrid","no_selection"));}else{mx.ui.confirmation({content:mx.ui.translate("mxui.widget.DataGrid","confirm_delete",[_14.length]),handler:function(){if(_12){_13._oldActionDeleteSelection.call(_13._datagrid,true);}_13._sourceObject.removeReferences(_13.sourceReference,_14);_13.onChange();if(!_12){_13._datagrid.deselectAll();_13._datagrid.reload();}}});}};},registerSubscriptions:function(){if(this._updateSubscription){this.unsubscribe(this._updateSubscription);}this._updateSubscription=this.subscribe({guid:this._mendixguid,attr:this.sourceReference,callback:function(_15,_16,_17){this.objectUpdate(_15);}});this.subscribe({entity:this.entity,callback:_1.hitch(this,function(){this.objectUpdate.apply(this,arguments);})});this.subscribe({guid:this._mendixguid,callback:_1.hitch(this,"objectUpdate")});this.subscribe({guid:this._mendixguid,val:true,callback:_1.hitch(this,"onValidation")});},applyContext:function(_18,_19){if(_18!=null&&_18.hasTrackId()){this.cloneContext(_18);var _1a=(this._mendixguid==null||this._mendixguid!=_18.getTrackId());this._mendixguid=_18.getTrackId();this.mxcontext.setConstraints(this.constrainedBy);this.registerSubscriptions();this.updateSequence(_1a,_19);}else{this.removeSubscriptions();this.removeContext(_19);}},removeContext:function(_1b){if(this._datagrid.removeContext){this._datagrid.removeContext(_1b);}else{_1b&&_1b();}},updateSequence:function(_1c,_1d){var _1e=[];if(_1c){_1e.push("actFetchSourceObject");}_1e.push("actUpdateGrid");if(!_1c){_1e.push("actCompareSet");}_1d&&_1e.push(_1d);this.sequence(_1e);},actFetchSourceObject:function(_1f){var _20=this;if(this._mendixguid){mx.data.get({guid:this._mendixguid,callback:function(obj){_20._sourceObject=obj;_20._datasource.setObject(obj);_20._datagrid.set("readOnly",_20._sourceObject.isReadonlyAttr(_20.sourceReference));_1f();},error:function(e){mx.onError(e);_1f&&_1f();}});}else{_1f&&_1f();}},actUpdateGrid:function(_21){this._oldXPath=this._datagrid.getCurrentXPath();this._datagrid.applyContext(this.mxcontext,_21);},actCompareSet:function(_22){var _23=this._datagrid.getCurrentXPath();if(!this._oldXPath.match("[1=0]")&&this._oldXPath!=_23){this._sourceObject.set(this.sourceReference,"");this.onChange();}else{_22&&_22();}},objectUpdateNotification:function(_24){this.updateSequence();},_setDisabledAttr:function(_25){var _26=this._datagrid,_27=_25===true;_26.set("disabled",_25);_26.set("selectable",!_27);_26.set("toolbar",_27);},_getDisabledAttr:function(){return this._datagrid.get("disabled");},onChange:function(){var ev=this.events&&this.events.change;this.validateForMicroflow(ev,_1.hitch(this,"callMicroflow",ev));},validateForMicroflow:function(_28,_29){if(_28&&_28.validate=="view"){this.mxform.save(_29);}else{_29&&_29();}},onValidation:function(_2a){var val=_2a[0],_2b=this.sourceReference,msg=val.getReasonByAttribute(_2b);if(msg){this.addError(msg);val.removeAttribute(_2b);}},callMicroflow:function(_2c){if(_2c){mx.ui.execute({microflow:_2c},{context:this.mxcontext});}},addError:function(msg){this.removeError();this._hasError=true;if(msg){this._errorNode=mxui.dom.create("div",{"class":"alert alert-danger"},msg);this.domNode.parentNode.appendChild(this._errorNode);this.mxform.resize();}if(this._cellNode){_1.addClass(this._cellNode,"has-error");}if(this.validator){this.validator.addNotification();}},removeError:function(){if(this._errorNode){mxui.dom.orphan(this._errorNode);this._errorNode=null;}if(this._cellNode){_1.removeClass(this._cellNode,"has-error");}if(this.validator&&this._hasError){this.validator.removeNotification();}this._hasError=false;},_openAddForm:function(_2d,_2e){var _2f=this.createContext();_2f.dupFrom(this.mxcontext);_2f.unsetContext(this.entity);_2f.setConstraints(this._gridBacktrack);mx.ui.execute(_2d,{context:_2f,params:{selection:_2e?this._sourceObject.getReferences(this.sourceReference):[],selectable:"multi",constraint:this.xpathConstraint},callback:function(_30){_30.listen("save",_1.hitch(this,function(_31){var _32=_30.getReturnValue("selection");if(_32){if(_2e){this._sourceObject.set(this.sourceReference,_32);}else{this._sourceObject.addReferences(this.sourceReference,_32);}this.onChange();}else{logger.error(this.id+" form return value 'selection' does not exist");}_31();}));}},this);},_getEntity:function(_33){for(var i in _33){return i;}}});});