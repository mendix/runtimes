
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("reporting/mixin/_Reportable",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("reporting.mixin._Reportable");_1.declare("reporting.mixin._Reportable",null,{inputargs:["reportid"],fetchReportParams:function(){},registerContent:function(){reporting.store.ParameterStore.registerLead(this.mxform.hash,this.reportid);},actContentHook:function(_4){mendix.lang.delay(_4,function(){return true;},1000);},uninitialize:function(){}});});