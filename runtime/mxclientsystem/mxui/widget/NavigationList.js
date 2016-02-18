
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/NavigationList",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.NavigationList",buildRendering:function(){this.domNode=_2.create("ul",{"class":"mx-list mx-navigationlist"},this.getTemplate("content"));},startup:function(){this.parseContent(this.domNode,{readOnly:true});}});return _5;});