
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("reporting/lib/DateHelpers",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("reporting.lib.DateHelpers");(function(){var _4=1000*60,_5=_4*60,_6=_5*24,_7=_6*7,_8=4;reporting.lib.DateHelpers={weekMs:_7,dayMs:_6,getFirstDayInWeek:function(){var _9=mx.ui.getLocale();return (_9.match(/nl/i))?1:0;},getFirstWeekOfMonth:function(_a,_b){var _c=new Date(_b,_a,1);var _d=_c.getDay();var _e=_c.getTime();if(_d==0){return _c.getTime();}var _f=_e-(_d*_6);_f+=(this.getFirstDayInWeek()*_6);_e=_f;_c=new Date(_e);if(_c.getMonth()!=_a){var _10=_1.date.getDaysInMonth(_c)-(7-_8);if(_c.getDate()<=_10){return _e+_7;}}else{var _11=1+_8;if(_c.getDate()>=_11){return _e-_7;}}return _e;},getFirstWeekOfYear:function(_12){return this.getFirstWeekOfMonth(0,_12);}};})();});