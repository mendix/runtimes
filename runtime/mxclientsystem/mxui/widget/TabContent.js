
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TabContent",["mxui/widget/_WidgetBase","mxui/widget/TabContainer","mxui/widget","mxui/dom","mendix/logger","dojo/dom-class","dojo/dom-style","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dijit"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){var $=_4.create;var _c=_a(_1,{declaredClass:"mxui.widget.TabContent",index:0,title:"",button:null,container:null,indicator:null,delayLoading:false,refreshOnShow:false,_hidden:false,_parsed:false,_loading:false,_visible:false,_cachedResize:null,_notifies:0,_children:null,_contextInitialized:false,buildRendering:function(){this.indicator=$("span",{"class":"mx-tabcontainer-indicator"});this.domNode=$("div",{"class":"tab-pane mx-tabcontainer-pane"});},startup:function(){if(!this.delayLoading){this.parse();}this._updateNotification();},applyContext:function(){this._contextInitialized=true;return this.inherited(arguments);},parse:function(){var _d=this.getTemplate("content");this.domNode.appendChild($("#",_d||""));this._children=this.parseContent(null,{validator:this});this._parsed=true;if(_d){var _e=_b.byNode(this.domNode.firstChild);if(_e instanceof _2){_6.add(_e.domNode,"mx-tabcontainer-nested");}}},refresh:function(_f){this._loading=true;var _10=this.getChildren();_3.ready(_10,_9.hitch(this,"passContext",_10,_9.hitch(this,function(){this._loading=false;_f&&_f();})));},show:function(){this._hidden=false;_7.set(this.button,"display","");_7.set(this.domNode,"display","");this.container.showTab(this);},hide:function(){this._hidden=true;_7.set(this.button,"display","none");_7.set(this.domNode,"display","none");this.container.hideTab(this);},showTab:function(_11){this._visible=true;if(this._loading){return;}var _12=this,_13=function(){if(_12._visible){_6.add(_12.domNode,"active");if(_12._cachedResize!=null){_12.resize(_12._cachedResize);_12._cachedResize=null;}}if(_11){_11();}};_6.add(this.button,"active");if(!this._parsed){this.parse();this.refresh(_13);}else{if(this.refreshOnShow&&this._contextInitialized){this.refresh();}_13();}},hideTab:function(){this._visible=false;_6.remove(this.button,"active");_6.remove(this.domNode,"active");},resize:function(_14){if(this._visible){this.resizeChildren(this.domNode,_14);}else{this._cachedResize=_14;}},isValid:function(){return _8.every(this._children,function(_15){return _15.isValid?_15.isValid():true;});},addNotification:function(){++this._notifies;this._updateNotification();var _16=this.container.validator;if(_16){_16.addNotification();}return true;},removeNotification:function(){--this._notifies;this._updateNotification();var _17=this.container.validator;if(_17){_17.removeNotification();}},_updateNotification:function(){if(this._notifies===0){_7.set(this.indicator,"display","none");}else{if(this.domNode.style.display=="none"){window.mx.ui.error(this.translate("hidden_validations",[this.index+1]));}_7.set(this.indicator,"display","");}_4.text(this.indicator,this._notifies+"");}});return _c;});