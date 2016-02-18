
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("reporting/widget/ReportTrigger",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("reporting.widget.ReportTrigger");mxui.widget.declare("reporting.widget.ReportTrigger",{superclass:mxui.widget.Button,mixins:[_2._Contained,mxui.mixin._Contextable],cssClasses:["reportingReportTrigger"],postCreate:function(){this.initContext();this.inherited(arguments);this.loaded();},onClick:function(e){_1.publish("report_"+this.mxform.hash,["runreport"]);}});});