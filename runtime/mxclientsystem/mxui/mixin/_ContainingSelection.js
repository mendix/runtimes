/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_ContainingSelection",["mendix/lib/MxContext","mxui/store/asyncValueStore","dojo/topic","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=_5(null,{selection:null,constructor:function(){this.selection=[];},getSelected:function(){return this.selection;},_addToSelection:function(_7){if(_4.indexOf(this.selection,_7)==-1){this.selection.push(_7);}},_removeFromSelection:function(_8){var _9=_4.indexOf(this.selection,_8);if(_9!=-1){this.selection.splice(_9,1);}},_isSelected:function(_a){return _4.indexOf(this.selection,_a)>-1;},_hasSelection:function(){return this.selection.length>0;},_shareSelection:function(_b){var _c=new _1();_c.setTrackEntity(_b);_c.setContext(_b,this.selection.length?this.selection[this.selection.length-1]:null);_c.freeze();var _d=window.mx.ui.makeShareId(this.mxform,this.mxid);if(_2.hasValue(_d)){_3.publish(_d,_c);}_2.register(_d,_c);},_clearSelectionStore:function(){_2.remove(window.mx.ui.makeShareId(this.mxform,this.mxid));}});return _6;});