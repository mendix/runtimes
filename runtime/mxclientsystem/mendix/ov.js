/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/ov",["mendix/lib/ObjectValidation","mendix/logger","dojo/_base/array","dojo/_base/json","exports"],function(_1,_2,_3,_4,_5){var _6=function(_7){if(typeof _7.datavalidation=="string"){_2.error("Server message error : validations included as type String instead of Array, compensating via eval");_7.datavalidation=_4.fromJson(_7.datavalidation);}return _7.datavalidation;};_5.getGuid=function(_8){return (_8 instanceof _1)?_8.getGuid():_8.guid;};_5.getValidationByGUID=function(_9,g){var _a=_6(_9)||_9;var _b=null;_3.forEach(_a,function(_c){var _d=_5.getGuid(_c);if(_d==g){if(_b){_b._addFields(_c);}else{_b=new _1({msg:_c});}}});return _b;};_5.hasValidations=function(_e){return (_e.datavalidation!=null);};_5.getValidations=function(_f){var _10=[];var map={};var raw=_6(_f)||_f;if(raw){_3.forEach(raw,function(msg){var _11=_5.getGuid(msg);if(!map[_11]){map[_11]=new _1({msg:msg});_10.push(map[_11]);}else{map[_11]._addFields(msg);}});}map=null;return _10;};_5.getValidation=function(msg){return new _1(msg);};});