/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/Underlay",["mxui/widget/_WidgetBase","mxui/mixin/_Floatable","mxui/dom","mendix/logger","dojo/dom-style","dojo/_base/fx","dojo/_base/window","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8){var _9=_8([_1,_2],{declaredClass:"mxui.widget.Underlay",_count:0,buildRendering:function(){this.domNode=_3.create("div",{"class":"mx-underlay"});},postCreate:function(){this.createBackgroundIframe();},show:function(_a){if(this._count++===0){var _b=this.domNode;if(_a){_5.set(_b,"opacity","0");_7.body().appendChild(_b);_6.fadeIn({end:0.5,node:_b,duration:_a}).play();}else{_7.body().appendChild(_b);}}},hide:function(_c){if(--this._count===0){var _d=this.domNode;if(_c){_6.fadeOut({node:_d,duration:_c,onEnd:function(){_3.orphan(_d);}}).play();}else{_3.orphan(_d);}}},setZIndex:function(_e){this.domNode.style.zIndex=_e;}});return _9;});