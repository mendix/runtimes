/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/compat-6",["mxui/exposed","mxui/startup"],function(){var _1="8.0";mx.data.save=function(_2,_3){_4("The 'mx.data.save' function does not have any effect anymore. "+"MxObjects are now automatically saved as part of "+"'mx.data.commit', 'mx.data.rollback', 'mx.data.action' and 'mx.data.saveDocument'");if(typeof _2.callback!="function"){throw new Error(name+".save: callback is not a function");}else{if(_2.mxobj!=null&&!(_2.mxobj instanceof mendix.lib.MxObject)){throw new Error(name+".save: mxobj is not an MxObject");}}_2.callback.call(_3,null);};function _4(_5){console.warn("DEPRECATED: "+_5+" -- will be removed in version: "+_1);};});