/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/task-helpers",["./Task","bluebird/bluebird"],function(_1,_2){var _3={};_3.promiseFromTask=function(t){return new _2(function(_4,_5){t.fork(_5,_4);});};_3.taskFromPromise=function(p){return new _1(function(_6,_7){p.then(_7,_6);});};return _3;});