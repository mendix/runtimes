/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Stateful",["dojo/aspect","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(null,{constructor:function(){_1.after(this,"postCreate",_2.hitch(this,"_registerStoreState"));},_registerStoreState:function(){this.connect(this.mxform,"onPersistViewState",function(_5){var _6=_5[this.uniqueid]||(_5[this.uniqueid]={});this.storeState(function(_7,_8){_6[_7]=_8;});});},getState:function(_9,_a){var _b=this.mxform&&this.mxform.viewState?this.mxform.viewState[this.uniqueid]:undefined;if(arguments.length===0){return _b;}return _b&&_9 in _b?_b[_9]:_a;},storeState:function(_c){throw new Error("All stateful widgets must implement storeState method, "+"as it is the only method where their state can be stored");}});return _4;});