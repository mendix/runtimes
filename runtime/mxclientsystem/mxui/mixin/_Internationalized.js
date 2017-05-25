/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Internationalized",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{postMixInProperties:function(){},translate:function(_4){var _5=[];if(arguments.length>1){for(var i=1;i<arguments.length;i++){_5.push(arguments[i]);}}return window.mx.ui.translate(this.declaredClass,_4,_5);}});return _3;});