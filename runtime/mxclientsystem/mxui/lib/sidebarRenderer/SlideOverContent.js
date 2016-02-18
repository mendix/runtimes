/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/sidebarRenderer/SlideOverContent",["dojo/dom-style","dojo/dom-class","dojo/_base/declare","mxui/lib/sidebarRenderer/_SidebarRenderer"],function(_1,_2,_3,_4){var _5=_3(_4,{containerClass:"slide",constructor:function(){this._toggleNode=this._toggleRegion.wrapper;_1.set(this._toggleRegion.node,"width","0");},show:function(){this.inherited(arguments);_1.set(this._toggleRegion.wrapper,{left:this._computeLeftPosition(true)});},hide:function(){this.inherited(arguments);_1.set(this._toggleRegion.wrapper,{left:this._computeLeftPosition(false)});},resize:function(){this.inherited(arguments);this._toggleRegion.width=this._computeRegionWidth();_1.set(this._toggleRegion.wrapper,"height","");_1.set(this._toggleRegion.wrapper,{width:this._toggleRegion.width+"px",height:this._toggleRegion.node.offsetHeight+"px",left:this._computeLeftPosition(this.isVisible())});}});return _5;});