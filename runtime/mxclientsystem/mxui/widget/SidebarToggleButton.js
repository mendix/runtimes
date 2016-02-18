
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/SidebarToggleButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.SidebarToggleButton");_1.declare("mxui.widget.SidebarToggleButton",mxui.widget._Button,{_container:null,startup:function(){var _4=_2.byNode(this.mxform.domNode.firstChild);if(!_4||!(_4 instanceof mxui.widget.LayoutContainer)){logger.error(this.id+".startup: No top-level layout container found.");}else{this._container=_4;}},onClick:function(e){if(!this._container){return;}this.mxform.publish("toggleSidebar");}});});