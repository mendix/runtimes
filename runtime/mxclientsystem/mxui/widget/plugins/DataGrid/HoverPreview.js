/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/plugins/DataGrid/HoverPreview",["mxui/widget/_MasterTooltip","mendix/lib/MxContext","mxui/widget","mxui/dom","mendix/lang","dojo/aspect","dojo/on","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8){function _9(_a){var _b="mxui.widget.plugins.DataGrid.HoverPreview";var _c=this;var _d=_a.parent;var _e=_a.config;var _f=null;var _10=0;var _11={onLoad:"plugineventOnLoad",onRefresh:"plugineventOnRefresh",onDestroy:"plugineventOnDestroy",onRowMouseOver:"plugineventOnRowMouseOver",onRowMouseOut:"plugineventOnRowMouseOut"};var _12=null;var _13={active:false,node:null,mxobject:null,oldNode:null,firstTime:true,closable:true,closeTimer:null,openTimer:null,tooltip:null};var _14=null;var _15;var _16=function(){var b=_13.mxobject;var _17=new _2();_17.setTrackId(b.getGuid());_17.setTrackEntity(_d.entity);_17.setContext(_d.entity,b.getGuid());var _18=+new Date();_10=_18;_f.applyContext(_17,function(){if(_18==_10&&b==_13.mxobject){_13.tooltip.show(_f.domNode,_13.node);}});};var _19=function(e){e.stopPropagation();_1a();};var _1b=function(e){e.stopPropagation();_1c();};var _1d=function(){_14=_7(_f.domNode,"mouseover",_19);_15=_7(_f.domNode,"mouseleave",_1b);};var _1e=function(){_14.remove();_15.remove();_14=_15=null;};var _1f=function(){_13.active=false;_13.firstTime=true;if(_13.oldNode!=null){_1e();_13.tooltip.hide(_13.oldNode);_13.tooltip=null;_13.oldNode=null;_13.mxobject=null;}};var _20=function(){var _21=_4.coords(_13.node);if(!_21.x&&!_21.y){return;}if(_13.oldNode!=_13.node){_13.oldNode=_13.node;if(!_13.active){_13.active=true;_1d();var _22=_13.tooltip=new _1();_6.after(_22,"onHide",function(){if(_22.domNode.contains(_f.domNode)){_4.orphan(_f.domNode);_f.applyContext(new _2());}});}_13.tooltip.show(null,_13.node);_16();}};this.plugineventOnLoad=function(){};this.plugineventOnDestroy=function(){this.destroy();if(_13.active){_1f();}};this.plugineventOnRefresh=function(){if(_13.active){_1f();}};var _1c=function(){_13.closable=true;if(!_13.closeTimer){_13.closeTimer=setTimeout(_23,200);}};var _1a=function(){_13.closable=false;if(_13.closeTimer){clearTimeout(_13.closeTimer);_13.closeTimer=null;}};this.plugineventOnRowMouseOver=function(e){var _24=e.currentTarget;var _25=e.target;if(!_d.domData(_25,"key")){_25=_4.getAncestorNode(_25,"TD",3);}var _26=_d.domData(_25,"key");var _27=_e.hoveron||"";if(_27.match(_26)==null){return true;}_25.setAttribute("title","");_1a();var _28=_d.getMxObjectAtRow(parseInt(_d.domData(_24,"gridrow")));var _29=_28.getGuid();if(_13.mxobject==null||_29!=_13.mxobject.getGuid()){_24=_25;_13.mxobject=_28;_13.node=_24;}_13.openTimer=setTimeout(_20,200);};var _23=_8.hitch(this,function(){_13.closeTimer=null;if(_13.closable){_12&&clearTimeout(_12);_1f();}});this.plugineventOnRowMouseOut=function(e){_1c();var _2a=_d.getMxObjectAtRow(parseInt(_d.domData(e.currentTarget,"gridrow")));if(_13.mxobject==_2a){clearTimeout(_13.openTimer);}};this.destroy=function(){_23();_d=_e=null;_f&&_f.destroy();};var _2b=function(_2c){var _2d=_4.create("div",{"style":"height: 0; overflow: hidden;"});_d.domNode.appendChild(_2d);window.mx.ui.openFormInNode(_e.form,_2d,new _2(),{readOnly:true,hideControls:true},function(_2e){_f=_2e;_2c();});};var _2f=function(_30){for(var i in _11){_d.registerToPluginEvent(i,_8.hitch(_c,_11[i]));}_30();};if(!_d&&(_d.widgetType!="DataGrid")){throw new Error(_b+".initialize : can only register to DataGrid!");}if(!_e.form){throw new Error(_b+".initialize : Requires a path parameter!");}_5.sequence([_2b,_2f]);};return _9;});