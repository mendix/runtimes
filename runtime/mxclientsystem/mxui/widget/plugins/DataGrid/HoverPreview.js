/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/plugins/DataGrid/HoverPreview",["mxui/widget/_MasterTooltip","mendix/lib/MxContext","mxui/widget","mxui/dom","mendix/lang","dojo/aspect","dojo/on","dojo/_base/lang","dojo/dom-geometry"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){function _a(_b){var _c="mxui.widget.plugins.DataGrid.HoverPreview";var _d=this;var _e=_b.parent;var _f=_b.config;var _10=null;var _11=0;var _12={onLoad:"plugineventOnLoad",onRefresh:"plugineventOnRefresh",onDestroy:"plugineventOnDestroy",onRowMouseOver:"plugineventOnRowMouseOver",onRowMouseOut:"plugineventOnRowMouseOut"};var _13=null;var _14={active:false,node:null,mxobject:null,oldNode:null,firstTime:true,closable:true,closeTimer:null,openTimer:null,tooltip:null};var _15=null;var _16;var _17=function(){var b=_14.mxobject;var _18=new _2();_18.setTrackId(b.getGuid());_18.setTrackEntity(_e.entity);_18.setContext(_e.entity,b.getGuid());var _19=+new Date();_11=_19;_10.applyContext(_18,function(){if(_19==_11&&b==_14.mxobject){_14.tooltip.show(_10.domNode,_14.node);}});};var _1a=function(e){e.stopPropagation();_1b();};var _1c=function(e){e.stopPropagation();_1d();};var _1e=function(){_15=_7(_10.domNode,"mouseover",_1a);_16=_7(_10.domNode,"mouseleave",_1c);};var _1f=function(){_15.remove();_16.remove();_15=_16=null;};var _20=function(){_14.active=false;_14.firstTime=true;if(_14.oldNode!=null){_1f();_14.tooltip.hide(_14.oldNode);_14.tooltip=null;_14.oldNode=null;_14.mxobject=null;}};var _21=function(){var _22=_9.position(_14.node);if(!_22.x&&!_22.y){return;}if(_14.oldNode!=_14.node){_14.oldNode=_14.node;if(!_14.active){_14.active=true;_1e();var _23=_14.tooltip=new _1();_6.after(_23,"onHide",function(){if(_23.domNode.contains(_10.domNode)){_4.orphan(_10.domNode);_10.applyContext(new _2());}});}_14.tooltip.show(null,_14.node);_17();}};this.plugineventOnLoad=function(){};this.plugineventOnDestroy=function(){this.destroy();if(_14.active){_20();}};this.plugineventOnRefresh=function(){if(_14.active){_20();}};var _1d=function(){_14.closable=true;if(!_14.closeTimer){_14.closeTimer=setTimeout(_24,200);}};var _1b=function(){_14.closable=false;if(_14.closeTimer){clearTimeout(_14.closeTimer);_14.closeTimer=null;}};this.plugineventOnRowMouseOver=function(e){var _25=e.currentTarget;var _26=e.target;if(!_e.domData(_26,"key")){_26=_4.getAncestorNode(_26,"TD",3);}var _27=_e.domData(_26,"key");var _28=_f.hoveron||"";if(_28.match(_27)==null){return true;}_26.setAttribute("title","");_1b();var _29=_e.getMxObjectAtRow(parseInt(_e.domData(_25,"gridrow")));var _2a=_29.getGuid();if(_14.mxobject==null||_2a!=_14.mxobject.getGuid()){_25=_26;_14.mxobject=_29;_14.node=_25;}_14.openTimer=setTimeout(_21,200);};var _24=_8.hitch(this,function(){_14.closeTimer=null;if(_14.closable){if(_13){clearTimeout(_13);}_20();}});this.plugineventOnRowMouseOut=function(e){_1d();var _2b=_e.getMxObjectAtRow(parseInt(_e.domData(e.currentTarget,"gridrow")));if(_14.mxobject==_2b){clearTimeout(_14.openTimer);}};this.destroy=function(){_24();_e=_f=null;if(_10){_10.destroy();}};var _2c=function(_2d){var _2e=_4.create("div",{"style":"height: 0; overflow: hidden;"});_e.domNode.appendChild(_2e);window.mx.ui.openFormInNode(_f.form,_2e,new _2(),{readOnly:true,hideControls:true},function(_2f){_10=_2f;_2d();});};var _30=function(_31){for(var i in _12){_e.registerToPluginEvent(i,_8.hitch(_d,_12[i]));}_31();};if(!_e&&(_e.widgetType!="DataGrid")){throw new Error(_c+".initialize : can only register to DataGrid!");}if(!_f.form){throw new Error(_c+".initialize : Requires a path parameter!");}_5.sequence([_2c,_30]);};return _a;});