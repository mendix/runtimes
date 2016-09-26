/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/compat-6",["dojo/_base/lang","mxui/exposed","mxui/startup"],function(_1){var _2="8.0";window.mx.data.save=function(_3,_4){_5("The 'mx.data.save' function does not have any effect anymore. "+"MxObjects are now automatically saved as part of "+"'mx.data.commit', 'mx.data.rollback', 'mx.data.action' and 'mx.data.saveDocument'");if(typeof _3.callback!="function"){throw new Error(name+".save: callback is not a function");}else{if(_3.mxobj!=null&&!(_3.mxobj instanceof mendix.lib.MxObject)){throw new Error(name+".save: mxobj is not an MxObject");}}_3.callback.call(_4,null);};var _6=window.mx.data.action;window.mx.data.action=function(_7){var _8=_1.mixin({},_7);if(_8.store&&_8.store.caller){_5("The originating page should be passed to mx.data.action as 'origin' instead of 'store.caller'");_8.origin=_8.store.caller;delete _8.store;}_6.call(window.mx.data,_8);};function _5(_9){console.warn("DEPRECATED: "+_9+" -- will be removed in version: "+_2);};});