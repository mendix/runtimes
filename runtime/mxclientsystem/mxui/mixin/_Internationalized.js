
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_Internationalized",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.mixin._Internationalized");_1.declare("mxui.mixin._Internationalized",null,{postMixInProperties:function(){},translate:function(_4){var _5=[];if(arguments.length>1){for(var i=1;i<arguments.length;i++){_5.push(arguments[i]);}}return mx.ui.translate(this.declaredClass,_4,_5);}});});