/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/sidebarRenderer/ShrinkContent",["dojo/dom-style","dojo/dom-class","dojo/_base/declare","mxui/lib/sidebarRenderer/_SidebarRenderer"],function(_1,_2,_3,_4){var _5=_3(_4,{closeOnBlur:false,containerClass:"shrink",constructor:function(){this._toggleNode=this._toggleRegion.node;_1.set(this._toggleRegion.node,"width","0");},show:function(){this.inherited(arguments);_1.set(this._toggleRegion.node,"width",this._toggleRegion.width+"px");},hide:function(){this.inherited(arguments);_1.set(this._toggleRegion.node,"width","0");},resize:function(){this.inherited(arguments);this._toggleRegion.width=this._computeRegionWidth();if(this.isVisible()){_1.set(this._toggleRegion.node,"width",this._toggleRegion.width+"px");}_1.set(this._toggleRegion.wrapper,"width",this._toggleRegion.width+"px");}});return _5;});