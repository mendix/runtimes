/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/Transaction",["../ReaderT","../Task"],function(_1,_2){var _3=_1(_2);_3.rejected=function(e){return new _3(function(_4){return _2.rejected(e);});};return _3;});