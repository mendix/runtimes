/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("reporting/lib/DateHelpers",["dojo/date","dojo/_base/kernel"],function(_1,_2){var _3=1000*60*60*24,_4=_3*7,_5=4;function _6(){return (_2.locale.match(/nl/i))?1:0;};return {weekMs:_4,dayMs:_3,getFirstWeekOfYear:function(_7){var _8=new Date(_7,0,1),_9=_8.getDay(),_a=_8.getTime();if(_9===0){return _8.getTime();}_a-=(_9-_6())*_3;_8=new Date(_a);if(_8.getMonth()!==0){var _b=_1.getDaysInMonth(_8)-(7-_5);if(_8.getDate()<=_b){return _a+_4;}}else{var _c=1+_5;if(_8.getDate()>=_c){return _a-_4;}}return _a;}};});