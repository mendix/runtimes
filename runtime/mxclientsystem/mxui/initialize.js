/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/initialize",["dojo/sniff","dojo/aspect","dojo/_base/config","require","dojo/_base/loader"],function(_1,_2,_3,_4){_1.add("windowsphone",parseFloat(window.navigator.userAgent.split("Windows Phone ")[1])||undefined);_1.add("mobile",_1("ios")||_1("android")||_1("windowsphone")||undefined);if(_3.isDebug){_1.add("config-dojo-loader-catches",true,true,true);_4.on("error",function(ex){var _5;if(ex.message==="evalModuleThrew"){_5=ex.info.mid;}else{if(ex.message==="factoryThrew"){_5=ex.info[0].mid;}}console.error(_5?"Loading module "+_5+" failed! Check script file for syntax errors.":"Loading module failed! Check console log for more detailed debug information.");});}var _6=_4.initSyncLoader();_2.after(dojo,"provide",function(_7){if(!_6.syncExecStack[0]){var _8=_7.replace(/\./g,"/"),_9=_6.getModule(_8,_4.module);_6.finishExec(_9);}},true);});