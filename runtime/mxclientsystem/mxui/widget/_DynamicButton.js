/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_DynamicButton",["mxui/widget/_Button","mxui/lib/TextTemplate","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{caption:null,needsObject:false,_captionTextTemplate:null,postCreate:function(){var _6=this;this._captionTextTemplate=new _2(this.caption,function(_7){_6.set("caption",_7);});},checkDisabled:function(){return this.inherited(arguments)||(this.needsObject&&!this.mxcontext.hasTrackId());},update:function(_8,_9){this.unsubscribeAll();this._mxObject=_8;if(_8){var _a=this;this.subscribe({guid:_8.getGuid(),callback:function(){_a.refresh();}});}this.updateDisabled();this._captionTextTemplate.update(_8,_3.hitch(this,"refresh",_9));},refresh:function(_b){if(_b){_b();}},uninitialize:function(){this._captionTextTemplate.destroy();}});return _5;});