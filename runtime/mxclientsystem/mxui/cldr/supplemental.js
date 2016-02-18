
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/cldr/supplemental",["dojo","dijit","dojox","dojo/require!dojo/cldr/supplemental"],function(_1,_2,_3){_1.provide("mxui.cldr.supplemental");_1.require("dojo.cldr.supplemental");(function(){var _4=_1.cldr.supplemental.getFirstDayOfWeek;_1.cldr.supplemental.getFirstDayOfWeek=function(_5){var _6=mx.ui.getFirstDayOfWeek();return _6!=-1?_6:_4(_5);};})();});