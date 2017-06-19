/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DynamicText",["mxui/dom","mxui/lib/TextTemplate","mxui/widget/_WidgetBase","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_3,{declaredClass:"mxui.widget.DynamicText",content:null,_contentText:null,postCreate:function(){var _6=this;this._contentText=new _2(this.content,function(_7){_1.html(_6.domNode,_7||"&nbsp;");});},update:function(_8,_9){this._contentText.update(_8,_9);},uninitialize:function(){this._contentText.destroy();}});return _5;});