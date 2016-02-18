/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SyncButton",["mxui/widget/_DynamicButton","dojo/cookie","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.SyncButton",onClick:function(e){var _5=mx.ui.showProgress(null,true);mx.data.synchronize(function(_6,_7){_6=_6||{};var _8=mx.ui.getCurrentForm(),_9=_8.getContext(),_a=_9.getTrackId();var _b=_6[_a]||_a;var _c=null;if(!/^GUID:/.test(_b)){_c={path:_8.path,entity:_9.getTrackEntity(),guid:_b};}window.sessionStorage.setItem("refreshData",JSON.stringify(_c));mx.reload();},function(e){mx.ui.hideProgress(_5);window.mx.onError(e);});}});return _4;});