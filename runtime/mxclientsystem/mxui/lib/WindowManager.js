
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/WindowManager",["mxui/wm/focus","dojo/aspect","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(null,{_shown:null,_modals:0,constructor:function(){this._shown={};},show:function(_5,_6){_6=this._modals||_6;if(_6){_5.modal=true;}this._register(_5);if(_6){_5.center();}else{_5.stack();}_5.show();},_register:function(_7){if(_7.modal){this._modals++;}this._shown[_7.id]=_7;_7._focus=_1.get();_7.focus();var _8=this;_2.after(_7,"hide",function(){_8._unregister(_7);});},_unregister:function(_9){if(_9.modal){this._modals--;}delete this._shown[_9.id];if(_9._focus){_1.put(_9._focus);}}});return _4;});