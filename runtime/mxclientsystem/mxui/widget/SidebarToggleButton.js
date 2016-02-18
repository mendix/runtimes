
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/SidebarToggleButton",["mxui/widget/_Button","mxui/widget/LayoutContainer","mendix/logger","dojo/_base/declare","dijit/registry"],function(_1,_2,_3,_4,_5){var _6=_4(_1,{declaredClass:"mxui.widget.SidebarToggleButton",_container:null,startup:function(){var _7=_5.findWidgets(this.mxform.domNode)[0];if(!_7||!(_7 instanceof _2)){_3.error(this.id+".startup: No top-level layout container found.");}else{this._container=_7;}},onClick:function(){if(!this._container){return;}this.mxform.publish("toggleSidebar");}});return _6;});