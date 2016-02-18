
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Header",["mxui/widget/_WidgetBase","mxui/dom","dojo/_base/array","dojo/_base/declare","dojo/_base/lang"],function(_1,_2,_3,_4,_5){var _6=_4(_1,{declaredClass:"mxui.widget.Header",buildRendering:function(){this.domNode=_2.create("div",{"class":"mx-header"});_3.forEach(["center","left","right"],_5.hitch(this,function(_7){this._appendTemplate(_7);}));this.parseContent();},_appendTemplate:function(_8){var _9=this.getTemplate(_8),_a=this.isLeftToRight()?{}:{left:"right",right:"left"};if(_9){this.domNode.appendChild(_2.create("div",{"class":"mx-header-"+(_a[_8]||_8)},_9));}}});return _6;});