
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Title",["mxui/widget/_WidgetBase","mxui/dom","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.Title",buildRendering:function(){this.domNode=_2.create("h1",{"class":"mx-title"},this.mxform.getTitle());}});return _4;});