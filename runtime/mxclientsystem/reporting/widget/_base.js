
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("reporting/widget/_base",["dojo","dijit","dojox","dojo/require!reporting/widget/ReportMatrix,reporting/widget/ReportChart,reporting/widget/ReportTrigger,reporting/widget/ReportParameter,reporting/widget/DateRange"],function(_1,_2,_3){if(!reporting.widget){reporting.widget={};}_1.provide("reporting.widget._base");_1.require("reporting.widget.ReportMatrix");_1.require("reporting.widget.ReportChart");_1.require("reporting.widget.ReportTrigger");_1.require("reporting.widget.ReportParameter");_1.require("reporting.widget.DateRange");mxui.dom.addCss("mxclientsystem/reporting/ui/base.css?"+_1.config.cacheBust);});