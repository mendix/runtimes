
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Underlay",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.Underlay");_1.declare("mxui.widget.Underlay",mxui.widget._WidgetBase,{_count:0,buildRendering:function(){this.domNode=mxui.dom.create("div",{"class":"mx-underlay"});},show:function(_4){if(this._count++===0){var _5=this.domNode;if(_4){_1.style(_5,"opacity",0);_1.body().appendChild(_5);_1.fadeIn({end:0.5,node:_5,duration:_4}).play();}else{_1.body().appendChild(_5);}}},hide:function(_6){if(--this._count===0){var _7=this.domNode;if(_6){_1.fadeOut({node:_7,duration:_6,onEnd:function(){mxui.dom.orphan(_7);}}).play();}else{mxui.dom.orphan(_7);}}}});});