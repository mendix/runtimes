/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/sidebarRenderer/_SidebarRenderer",["mxui/dom","dojo/on","dojo/touch","dojo/dom-geometry","dojo/dom-class","dojo/dom-style","dojo/_base/declare","dijit/Destroyable"],function(_1,_2,_3,_4,_5,_6,_7,_8){var _9=_7(_8,{_containerNode:null,_toggleNode:null,_toggleRegion:null,_regions:null,_isVisible:false,closeOnBlur:true,containerClass:"",constructor:function(_a,_b,_c){this._toggleRegion=_c[_b];this._containerNode=_a;this._regions=_c;var _d=this._toggleRegion.node.style.width;this._toggleRegion.cssWidth=parseInt(_d,10);this._toggleRegion.cssUnit=_d.indexOf("%")!=-1?"%":"px";_5.add(this._toggleRegion.node,"mx-scrollcontainer-toggleable");_5.add(this._containerNode,"mx-scrollcontainer-"+this.containerClass);_6.set(_a.parentNode,"overflowX","hidden");this._toggleRegion.node.setAttribute("focusIndex",-1);if(this.closeOnBlur){var _e=this;this.own(_2(_a,_3.press,function(e){var _f=e.target||e.srcElement;if(_e.isVisible()&&!_e._toggleRegion.node.contains(_f)){_e.hide();}}));}},show:function(_10){this._isVisible=true;_5.add(this._containerNode,"mx-scrollcontainer-open");_5.remove(this._toggleNode,"mx-scrollcontainer-move-out");if(!_10){_5.add(this._toggleNode,"mx-scrollcontainer-move-in");}},hide:function(){this._isVisible=false;_5.remove(this._containerNode,"mx-scrollcontainer-open");_5.replace(this._toggleNode,"mx-scrollcontainer-move-out","mx-scrollcontainer-move-in");},resize:function(){},_computeRegionWidth:function(){if(this._toggleRegion.cssUnit==="%"){var _11=this._containerNode.offsetWidth;return this._toggleRegion.cssWidth*_11/100;}else{return this._toggleRegion.cssWidth;}},_computeLeftPosition:function(_12){var rtl=window.mx.ui.isRtl(),_13;if(this._toggleRegion.position==="left"){if(_12){_13=0;}else{_13=rtl?this._toggleRegion.width:-this._toggleRegion.width;}}else{if(!_12){_13=0;}else{_13=rtl?this._toggleRegion.width:-this._toggleRegion.width;}}return _13+"px";},isVisible:function(){return this._isVisible;}});return _9;});