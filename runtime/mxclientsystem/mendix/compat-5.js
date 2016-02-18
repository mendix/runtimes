
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
require(["dojo/_base/kernel","mendix/mendix","mxui/startup"],function(_1){var _2="7.0",_3=window.mx.login;window.mx.login=function(){if(arguments.length===0||(arguments.length===1&&typeof arguments[0]=="object")){_1.deprecated("mx.login(args) is deprecated. Use mx.login(username, password, onLoginSucceed, onLoginFailure) instead","",_2);window.mx.reload();}else{_3.apply(window.mx,arguments);}};});