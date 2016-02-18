/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/Title",["mxui/widget/_WidgetBase","mxui/dom","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.Title",buildRendering:function(){this.domNode=_2.create("h1",{"class":"mx-title"});this._setTitle();this.connect(this.mxform,"onNavigation",this._setTitle);},_setTitle:function(){_2.text(this.domNode,this.mxform.getTitle());}});return _4;});