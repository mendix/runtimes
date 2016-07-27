/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/task-helpers",["./Task","bluebird/bluebird"],function(_1,_2){var _3={};_3.promiseFromTask=function(t){return new _2(function(_4,_5){t.fork(_5,_4);});};_3.callbackFromTask=function(t,_6,_7){t.fork(function(e){if(_7){_7(e);}},function(){if(_6){_6();}});};_3.taskFromPromise=function(p){return new _1(function(_8,_9){p.then(_9,_8);});};return _3;});