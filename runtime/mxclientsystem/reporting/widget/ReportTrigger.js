/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("reporting/widget/ReportTrigger",["mxui/widget/_Button","dojo/dom-class","dojo/_base/connect","dojo/_base/declare"],function(_1,_2,_3,_4){return _4(_1,{declaredClass:"reporting.widget.ReportTrigger",buildRendering:function(){this.inherited(arguments);_2.add(this.domNode,"reportingReportTrigger");},onClick:function(){_3.publish("report_"+this.mxform.hash,["runreport"]);}});});