/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/runners",["../Task"],function(_1){return {runReadTransaction:_2("readTransaction"),runWriteTransaction:_2("transaction")};function _2(_3){return function(db,_4){return new _1(function(_5,_6){var _7=2;var _8;db[_3](function(tx){_4.run(tx).fork(_5,function(r){_8=r;if(--_7===0){_6(_8);}});},_5,function(){if(--_7===0){_6(_8);}});});};};});