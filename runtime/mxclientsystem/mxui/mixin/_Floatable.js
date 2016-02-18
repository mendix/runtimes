/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Floatable",["dijit/BackgroundIframe","dojo/has","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(null,{createBackgroundIframe:function(){if(_2("ie")||_2("trident")){var _5=new _1(this.domNode);this.addOnDestroy(function(){_5.destroy();});}}});return _4;});