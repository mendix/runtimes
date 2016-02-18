/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/next/dataLayer",["mendix/lib/MicroflowSource","dojo/_base/Deferred","dojo/_base/array","exports"],function(_1,_2,_3,_4){_4.loadData=function(_5){var _6=new _2();switch(_5.type){case "microflow":var _7=new _1({microflow:_5.microflowId});_7.reload(function(){_6.resolve(_3.map(_7.getObjects(),_4.toJson));});break;default:throw new Error("Unsupported dataSpec type: "+_5.type);}return _6.promise;};_4.release=function(_8){window.mx.data.release(_3.map(_8,function(_9){return {getGuid:function(){return _9._guid;}};}));};_4.toJson=function(_a){return {_guid:_a.getGuid()};};});