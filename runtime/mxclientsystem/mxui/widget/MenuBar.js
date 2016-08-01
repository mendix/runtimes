/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/MenuBar",["mxui/widget/_WidgetBase","mxui/mixin/_Stateful","mxui/lib/menuAnchorFactory","mxui/dom","mendix/lang","dojo/aspect","dojo/dom-class","dojo/on","dojo/_base/event","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){var $=_4.create;var _c=_b([_1,_2],{declaredClass:"mxui.widget.MenuBar",menuID:"",orientation:"horizontal",_view:null,_items:null,_currentSelection:-1,_initialSelection:-1,buildRendering:function(){this._items=window.mx.ui.getMenu(this.menuID);this._view=new _d(this,this.orientation,this._items);this.domNode=this._view.domNode;this._view.subscribeToClick(_a.hitch(this,"_onClick"));this._restoreSelection();this.connect(this.mxform,"onNavigation",this._restoreSelection);},_restoreSelection:function(){this._currentSelection=this.getState("selectedIndex",this._currentSelection);this._initialSelection=this._currentSelection;this._view.select(this._currentSelection);},_onClick:function(_e){this._currentSelection=_e;this._view.select(this._currentSelection);var _f=this._items[_e].action;window.mx.ui.execute(_f,{origin:this.mxform});},storeState:function(_10){_10("selectedIndex",this._initialSelection);}});var _d=_b(null,{_handlerScope:null,_orientation:"",_list:null,domNode:null,constructor:function(_11,_12,_13){this._handlerScope=_11;this._orientation=_12;this._render(_13);},_render:function(_14){var _15=this;this._list=$("ul",{"class":"nav nav-pills mx-menubar-list"});if(this._orientation=="vertical"){_7.add(this._list,"nav-stacked");}_5.forEach(_14,function(_16,_17){var _18=_3.create(_16);_15._list.appendChild($("li",{"class":"mx-menubar-item mx-name-index-"+_17},_18));});this.domNode=$("div",{"class":"mx-menubar mx-menubar-"+this._orientation},this._list);},subscribeToClick:function(_19){var _1a=this._handlerScope;_5.forEach(this.domNode.querySelectorAll(".mx-menubar-item>a"),function(_1b,_1c){_1a.own(_8(_1b,"click",function(_1d){_9.stop(_1d);_19(_1c);}));});},select:function(_1e){var _1f=this.domNode.querySelector(".mx-menubar-item.active");if(_1f){_7.remove(_1f,"active");}if(_1e!=-1){_7.add(this._list.children[_1e],"active");}}});return _c;});