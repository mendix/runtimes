/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/lib/SchemaObjectSource",["mendix/lib/_ObjectSource","dojo/_base/declare"],function(_1,_2){return _2(_1,{name:"mendix.lib.SchemaObjectSource",fetch:function(_3,_4){if(this.context.hasTrackId()){window.mx.data.getBySchema({id:this.context.getTrackId(),schema:this.schema,callback:_3,error:_4});}else{_3&&_3();}}});});