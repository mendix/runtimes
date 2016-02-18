
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/plugins/DataGrid/HoverPreview",["mendix/lib/MxContext","mxui/widget","mxui/dom","mendix/lang","dojo/on","dojo/_base/lang","dijit/registry"],function(_1,_2,_3,_4,_5,_6,_7){function _8(_9){var _a="mxui.widget.plugins.DataGrid.HoverPreview";var _b=this;var _c=_9.parent;var _d=_9.config;var _e=null;var _f=0;var _10={onLoad:"plugineventOnLoad",onRefresh:"plugineventOnRefresh",onDestroy:"plugineventOnDestroy",onRowMouseOver:"plugineventOnRowMouseOver",onRowMouseOut:"plugineventOnRowMouseOut"};var _11=null;var _12={active:false,node:null,mxobject:null,oldNode:null,firstTime:true,closable:true,closeTimer:null,openTimer:null};var _13=null;var _14;var _15=function(){var b=_12.mxobject;var _16=new _1();_16.setTrackId(b.getGuid());_16.setTrackEntity(_c.entity);_16.setContext(_c.entity,b.getGuid());var _17=+new Date();_f=_17;_e.applyContext(_16,function(){if(_17==_f&&b==_12.mxobject){var dv=_7.findWidgets(_e.domNode)[0];_2.showTooltip(_e.domNode,_12.node,null,dv);}});};var _18=function(){var _19=new _1();_e.applyContext(_19);};var _1a=function(e){e.stopPropagation();_1b();};var _1c=function(e){e.stopPropagation();_1d();};var _1e=function(){_13=_5(_e.domNode,"mouseover",_1a);_14=_5(_e.domNode,"mouseleave",_1c);};var _1f=function(){_13.remove();_14.remove();_13=_14=null;};var _20=function(){_12.active=false;_12.firstTime=true;if(_12.oldNode!=null){_1f();_2.hideTooltip(_12.oldNode);_12.oldNode=null;_12.mxobject=null;_18();}};var _21=function(){var _22=_3.coords(_12.node);if(!_22.x&&!_22.y){return;}if(_12.oldNode!=_12.node){_1e();_12.active=true;_12.oldNode=_12.node;_2.showTooltip(null,_12.node);_15();}};this.plugineventOnLoad=function(){};this.plugineventOnDestroy=function(){this.destroy();if(_12.active){_20();}};this.plugineventOnRefresh=function(){if(_12.active){_20();}};var _1d=function(){_12.closable=true;if(!_12.closeTimer){_12.closeTimer=setTimeout(_23,200);}};var _1b=function(){_12.closable=false;if(_12.closeTimer){clearTimeout(_12.closeTimer);_12.closeTimer=null;}};this.plugineventOnRowMouseOver=function(e){var _24=e.currentTarget;var _25=e.target;if(!_c.domData(_25,"key")){_25=_3.getAncestorNode(_25,"TD",3);}var _26=_c.domData(_25,"key");var _27=_d.hoveron||"";if(_27.match(_26)==null){return true;}_25.setAttribute("title","");_1b();var _28=_c.getMxObjectAtRow(parseInt(_c.domData(_24,"gridrow")));var _29=_28.getGuid();if(_12.mxobject==null||_29!=_12.mxobject.getGuid()){_24=_25;_12.mxobject=_28;_12.node=_24;}_12.openTimer=setTimeout(_21,200);};var _23=_6.hitch(this,function(){_12.closeTimer=null;if(_12.closable){_11&&clearTimeout(_11);_20();}});this.plugineventOnRowMouseOut=function(e){_1d();var _2a=parseInt(e.currentTarget.getAttribute("gridrow"));var _2b=_c.getMxObjectAtRow(_2a);if(_12.mxobject==_2b){clearTimeout(_12.openTimer);}};this.destroy=function(){_23();_c=_d=null;_e&&_e.destroy();};var _2c=function(_2d){var _2e=_3.create("div",{"style":"height: 0; overflow: hidden;"});_c.domNode.appendChild(_2e);window.mx.ui.openFormInNode(_d.form,_2e,new _1(),{readOnly:true,hideControls:true},function(_2f){_e=_2f;_2d();});};var _30=function(_31){for(var i in _10){_c.registerToPluginEvent(i,_6.hitch(_b,_10[i]));}_31();};if(!_c&&(_c.widgetType!="DataGrid")){throw new Error(_a+".initialize : can only register to DataGrid!");}if(!_d.form){throw new Error(_a+".initialize : Requires a path parameter!");}_4.sequence([_2c,_30]);};return _8;});