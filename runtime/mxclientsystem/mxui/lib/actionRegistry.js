/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/actionRegistry",["mendix/lib/DescribedError"],function(_1){var _2={};return {add:function(_3,_4){if(_3 in _2){throw new Error("Action executer already exists");}_2[_3]=_4;},execute:function(_5){if(!_2[_5.type]){throw new Error("Action type '"+_5.type+"' is not implemented yet");}if("allowedRoles" in _5.params&&!window.mx.session.hasSomeRole(_5.params.allowedRoles)){if(window.mx.session.isGuest()){window.mx.ui.showLogin();}else{window.mx.onError(new _1("Unable to execute action because you do not have sufficient permissions."));}return;}_2[_5.type](_5.params);}};});