/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/guid",["mendix/lang"],function(_1){var _2="GUID:";return {create:function(){return _2+_1.getUniqueId();}};});