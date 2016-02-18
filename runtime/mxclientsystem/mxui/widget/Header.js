
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Header",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.Header");_1.declare("mxui.widget.Header",mxui.widget._WidgetBase,{buildRendering:function(){this.domNode=mxui.dom.create("div",{"class":"mx-header"});_1.forEach(["center","left","right"],_1.hitch(this,function(_4){this._appendTemplate(_4);}));this.parseContent();},_appendTemplate:function(_5){var _6=this.getTemplate(_5),_7=this.isLeftToRight()?{}:{left:"right",right:"left"};if(_6){this.domNode.appendChild(mxui.dom.create("div",{"class":"mx-header-"+(_7[_5]||_5)},_6));}}});});