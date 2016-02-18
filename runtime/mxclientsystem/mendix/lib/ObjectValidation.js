
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/ObjectValidation",["mendix/ov","dojo/_base/lang"],function(ov,_1){function _2(_3){var _4=_3.msg;var _5={};this.getGuid=function(){return ov.getGuid(_4);};this.getFields=this.getAttributes=function(){var _6=[];for(var i in _5){_6.push({name:i,reason:_5[i]});}return _6;};this.addField=this.addAttribute=function(_7,_8){if(_5[_7]!=undefined){return false;}else{_5[_7]=_8;}};this._addFields=function(_9){var _a=_9.errorFields;if((this.getGuid()==this.constructor.getGuid(_9))&&_a){for(var i=0;i<_a.length;i++){_5[_a[i].name]=_a[i].message;}}};this.removeField=this.removeAttribute=function(_b){if(_5[_b]!=undefined){delete _5[_b];return true;}else{return false;}};this.getErrorReason=this.getReasonByAttribute=function(_c){return (_5[_c]);};this.clone=function(){var s=new _2({msg:_1.clone(_4)});for(var i in _5){s.addField(i,_5[i]);}return s;};this.toString=function(){var _d="";var _e="";for(var i in _5){_d=_d+""+i+" "+_5[i]+_e;_e="; ";}return _d;};this._addFields(_4);};_2.getGuid=function(_f){return ov.getGuid(_f);};return _2;});