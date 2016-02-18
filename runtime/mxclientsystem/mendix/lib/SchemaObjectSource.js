
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/SchemaObjectSource",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mendix.lib.SchemaObjectSource");_1.declare("mendix.lib.SchemaObjectSource",[mendix.lib._ObjectSource],{name:"mendix.lib.SchemaObjectSource",fetch:function(_4,_5){if(this.context.hasTrackId()){mx.data.getBySchema({id:this.context.getTrackId(),schema:this.schema,callback:_4,error:_5});}else{_4&&_4();}}});});