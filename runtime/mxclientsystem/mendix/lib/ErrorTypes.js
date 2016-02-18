
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/ErrorTypes",["dojo","dijit","dojox"],function(_1,_2,_3){_1.declare("mendix.lib.Error",Error,{constructor:function(_4,_5){this.message=_4;this.original=_5;}});_1.declare("mendix.lib.ServerError",mendix.lib.Error,{});_1.declare("mendix.lib.DescribedServerError",mendix.lib.ServerError,{});_1.declare("mendix.lib.ConnectionError",mendix.lib.Error,{});_1.declare("mendix.lib.ValidationError",mendix.lib.Error,{});});