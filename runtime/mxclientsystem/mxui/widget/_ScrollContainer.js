/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_ScrollContainer",["dojo/_base/lang","mendix/lang","mxui/widget/_WidgetBase","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_3,{config:null,fixed:false,_regions:null,startup:function(){this._regions={};_2.forEach(this.domNode.children,function(_6,i){var _7=this.config[i],_8=_6.children[0];this._regions[_7.position]=_1.mixin({node:_6,wrapper:_8},_7);},this);},_resizeRegions:function(_9,_a){for(var _b in _9){var _c=_9[_b].wrapper;if(_a!=null){var _d=_a>=100,_e=Math.max(0,_a)+"px";if(this.fixed){_c.style.height=_d?_e:"auto";this.resizeChildren(_c,!_d);}else{_c.style.minHeight=_d?_e:"";this.resizeChildren(_c,true);}}else{_c.style.height="auto";this.resizeChildren(_c,true);}}}});return _5;});