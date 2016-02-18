/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SidebarToggleButton",["mxui/widget/_Button","mxui/widget/LayoutContainer","mendix/logger","dojo/_base/declare","dijit/registry"],function(_1,_2,_3,_4,_5){var _6=_4(_1,{declaredClass:"mxui.widget.SidebarToggleButton",onClick:function(){this.mxform.publish("toggleSidebar");}});return _6;});