
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Title",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.Title");_1.declare("mxui.widget.Title",mxui.widget._WidgetBase,{buildRendering:function(){this.domNode=mxui.dom.create("h1",{"class":"mx-title"},this.mxform.getTitle());}});});