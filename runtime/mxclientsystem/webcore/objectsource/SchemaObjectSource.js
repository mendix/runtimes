/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/objectsource/SchemaObjectSource",["./_ObjectSource","dojo/_base/declare"],function(_1,_2){return _2(_1,{name:"webcore.objectsource.SchemaObjectSource",fetch:function(_3,_4){if(this.context.hasTrackId()){window.mx.data.getBySchema({id:this.context.getTrackId(),schema:this.schema,callback:_3,error:_4});}else{_3&&_3();}}});});