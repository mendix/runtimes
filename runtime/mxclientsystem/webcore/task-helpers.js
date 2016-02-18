/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/task-helpers",["bluebird/bluebird"],function(_1){var _2={};_2.promiseFromTask=function(t){return new _1(function(_3,_4){t.fork(_4,_3);});};return _2;});