
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/Lock",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.lib.Lock");mxui.lib.Lock=function(id){id=id?"["+id+"]":"";this.name="mxui.lib.Lock"+id;this._locked=false;this._callStack=[];this.actLock=_1.hitch(this,function(_4,_5){if(this._locked){this._callStack.push(_4);}else{this._locked=true;_4&&_4();}});this.actUnlock=_1.hitch(this,function(_6,_7){var _8=this._callStack.length;if(_8!=0){var _9=this._callStack.shift();mendix.lang.thread(_9);}else{this._locked=false;}_6&&_6();});};});