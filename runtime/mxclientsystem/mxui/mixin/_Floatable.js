/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Floatable",["mxui/dom","dijit/BackgroundIframe","dojo/has","dojo/_base/declare"],function(_1,_2,_3,_4){_3.add("config-bgIframe",_3("ie")||_3("trident"),false,true);var _5=_4(null,{createBackgroundIframe:function(){if(_3("config-bgIframe")){var _6=new _2(this.domNode);this.addOnDestroy(function(){_6.destroy();});this.domNode.appendChild(_1.create("div",{"class":"mx-ie-event-shield"}));}}});return _5;});