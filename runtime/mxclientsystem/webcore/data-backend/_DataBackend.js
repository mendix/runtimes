/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/data-backend/_DataBackend",["mendix/ov","mendix/lang","mendix/lib/Error","dojo/_base/array","dojo/_base/lang","bluebird/bluebird"],function(ov,_1,_2,_3,_4,_5){function _6(){};_6.prototype.getByGuid=function(_7,_8,_9,_a,_b){if(_b){_b(new _2("Not implemented yet"));}};_6.prototype.getByPath=function(_c,_d,_e,_f){if(_f){_f(new _2("Not implemented yet"));}};_6.prototype.getByXPath=function(_10,_11,_12,_13,_14,_15){if(_15){_15(new _2("Not implemented yet"));}};_6.prototype.getSlice=function(_16,_17,_18){return _5.reject(new _2("Not implemented yet"));};_6.prototype.release=function(_19){throw new _2("Not implemented yet");};_6.prototype.action=function(_1a,_1b,_1c,_1d,_1e,_1f,_20){throw new _2("Not implemented yet");};_6.prototype.upload=function(_21){return _5.reject(new _2("Not implemented yet"));};_6.prototype.download=function(){return _5.reject(new _2("Not implemented yet"));};_6.prototype.cleanupDirtyObjects=function(){return _5.reject(new _2("Not implemented yet"));};_6.prototype.create=function(_22,_23,_24,_25){throw new _2("Not implemented yet");};_6.prototype.save=function(_26,_27,_28,_29){if(_29){_29(new _2("Not implemented yet"));}};_6.prototype.commit=function(_2a,_2b,_2c,_2d,_2e,_2f){if(_2f){_2f(new _2("Not implemented yet"));}};_6.prototype.rollback=function(_30,_31,_32){if(_32){_32(new _2("Not implemented yet"));}};_6.prototype.remove=function(_33,_34,_35){if(_35){_35(new _2("Not implemented yet"));}};_6.prototype.saveDocument=function(_36,_37,_38,_39){if(_39){_39(new _2("Not implemented yet"));}};_6.prototype.getDocumentUrl=function(_3a,_3b,_3c){throw new _2("Not implemented yet");};return _6;});