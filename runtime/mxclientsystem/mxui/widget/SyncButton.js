/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SyncButton",["mxui/widget/_DynamicButton","dojo/cookie","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.SyncButton",onClick:function(e){var _5=mx.ui.showProgress(null,true);mx.data.synchronize(function(_6){_6=_6||{};var _7=mx.ui.getCurrentForm(),_8=_7.getContext(),_9=_8.getTrackId();var _a=_6[_9]||_9;var _b=null;if(!/^GUID:/.test(_a)){_b={path:_7.path,entity:_8.getTrackEntity(),guid:_a};}window.sessionStorage.setItem("refreshData",JSON.stringify(_b));mx.reload();},function(e){mx.ui.hideProgress(_5);window.mx.onError(e);});}});return _4;});