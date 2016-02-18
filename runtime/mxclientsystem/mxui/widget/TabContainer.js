
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TabContainer",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.TabContainer");_1.declare("mxui.widget.TabContainer",mxui.widget._WidgetBase,{validator:null,_active:null,_tabList:null,_tabPanes:null,_tabContent:null,_clickHandler:null,buildRendering:function(){var $=mxui.dom.create,_4=this._tabList=$("ul",{"class":"nav nav-tabs mx-tabcontainer-tabs"}),_5=this._tabContent=$("div",{"class":"tab-content mx-tabcontainer-content"},this.getTemplate("pages"));this.domNode=$("div",{"class":"mx-tabcontainer"},_4,_5);var _6=this;this._clickHandler=_1.on(_4,"li:click",function(e){_6.show(_6.domData(this,"tab"));e.preventDefault();});},startup:function(){var $=mxui.dom.create,_7=this._tabList,_8=this._tabContent.childNodes,_9=null,_a=this._tabPanes=[];for(var i=0,_b;_b=_8[i];i++){var li=$("li"),_c=this.parseContent(_b,{index:i,button:li,container:this,validator:this},true)[0];this.domData(li,"tab",_c);if(_c.selected){_9=_c;}li.appendChild($("a",{href:"#"},_c.title));li.appendChild(_c.indicator);_7.appendChild(li);_a.push(_c);}this.show(_9||_a[0]);},show:function(_d){var _e=this,_f=this._active;if(_f){_f.hideTab();}this._active=_d;_1.addClass(this._tabContent,"loading");_d.showTab(function(){if(_e._active===_d){_1.removeClass(_e._tabContent,"loading");}});},showTab:function(tab){if(!this._active){this.show(tab);this.domNode.style.display="";}},hideTab:function(tab){if(tab===this._active){var _10=tab.index,_11=this._tabPanes,_12=_11.slice(_10+1).concat(_11.slice(0,_10)),_13;for(var i=0,_14;_14=_12[i];i++){if(!_14._hidden){_13=_14;break;}}tab.hideTab();if(_13){this.show(_13);}else{this._active=null;this.domNode.style.display="none";}}},resize:function(box){var _15=true,_16=this._tabPanes;if(box){var _17=box.h-_1.marginBox(this._tabList).h;if(_17>mxui.dom.minContainerHeight){_15=false;_1.marginBox(this._tabContent,{h:_17});}else{this._tabContent.style.height="auto";}}for(var i=0,tab;tab=_16[i];i++){tab.resize(_15);}},isValid:function(){return _1.every(this._tabPanes,function(tab){return tab.isValid?tab.isValid():true;});},uninitialize:function(){_1.disconnect(this._clickHandler);}});_1.declare("mxui.widget.TabContent",mxui.widget._WidgetBase,{index:0,title:"",button:null,container:null,indicator:null,delayLoading:false,refreshOnShow:false,_hidden:false,_parsed:false,_loading:false,_visible:false,_cachedResize:null,_notifies:0,_children:null,buildRendering:function(){var $=mxui.dom.create;this.indicator=$("span",{"class":"mx-tabcontainer-indicator"});this.domNode=$("div",{"class":"tab-pane mx-tabcontainer-pane"});},startup:function(){if(!this.delayLoading){this.parse();}this._updateNotification();},parse:function(_18){var _19=this.getTemplate("content");this.domNode.appendChild(mxui.dom.create("#",_19||""));this._children=this.parseContent(null,{validator:this});this._parsed=true;if(_19){var _1a=_2.byNode(this.domNode.firstChild);if(_1a instanceof mxui.widget.TabContainer){_1.addClass(_1a.domNode,"mx-tabcontainer-nested");}}},refresh:function(_1b){this._loading=true;var _1c=this.getChildren();mxui.widget.ready(_1c,_1.hitch(this,"passContext",_1c,function(){this._loading=false;_1b&&_1b();}));},show:function(){this._hidden=false;_1.style(this.button,"display","");_1.style(this.domNode,"display","");this.container.showTab(this);},hide:function(){this._hidden=true;_1.style(this.button,"display","none");_1.style(this.domNode,"display","none");this.container.hideTab(this);},showTab:function(_1d){this._visible=true;if(this._loading){return;}var _1e=this,_1f=function(){if(_1e._visible){_1.addClass(_1e.domNode,"active");if(_1e._cachedResize!=null){_1e.resize(_1e._cachedResize);_1e._cachedResize=null;}}_1d();};_1.addClass(this.button,"active");if(!this._parsed){this.parse();this.refresh(_1f);}else{if(this.refreshOnShow){this.refresh();}_1f();}},hideTab:function(){this._visible=false;_1.removeClass(this.button,"active");_1.removeClass(this.domNode,"active");},resize:function(_20){if(this._visible){this.resizeChildren(this.domNode,_20);}else{this._cachedResize=_20;}},isValid:function(){return _1.every(this._children,function(_21){return _21.isValid?_21.isValid():true;});},addNotification:function(){++this._notifies;this._updateNotification();var _22=this.container.validator;if(_22){_22.addNotification();}return true;},removeNotification:function(){--this._notifies;this._updateNotification();var _23=this.container.validator;if(_23){_23.removeNotification();}},_updateNotification:function(){if(this._notifies===0){_1.style(this.indicator,"display","none");}else{if(this.domNode.style.display=="none"){mx.ui.error(this.translate("hidden_validations",[this.index+1]));}_1.style(this.indicator,"display","");}mxui.dom.text(this.indicator,this._notifies+"");}});});