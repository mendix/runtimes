/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_ContainingSelection",["mendix/lib/MxContext","dojo/topic","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(null,{selection:null,constructor:function(){this.selection=[];},getSelected:function(){return this.selection;},_addToSelection:function(_6){if(_3.indexOf(this.selection,_6)==-1){this.selection.push(_6);}},_removeFromSelection:function(_7){var _8=_3.indexOf(this.selection,_7);if(_8!=-1){this.selection.splice(_8,1);}},_isSelected:function(_9){return _3.indexOf(this.selection,_9)>-1;},_hasSelection:function(){return this.selection.length>0;},_shareSelection:function(_a){var _b=new _1();_b.setTrackEntity(_a);_b.setContext(_a,this.selection.length?this.selection[this.selection.length-1]:null);_b.freeze();_2.publish(window.mx.ui.makeShareId(this.mxform,this.mxid),_b);}});return _5;});