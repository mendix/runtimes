/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SyncButton",["mxui/widget/_DynamicButton","mendix/lib/DescribedError","webcore/DanglingError","dojo/cookie","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=_5(_1,{declaredClass:"mxui.widget.SyncButton",onClick:function(e){var _7=window.mx.ui.showProgress(null,true);window.mx.data.synchronizeDataWithFiles(function(){window.mx.ui.reload(function(){window.mx.ui.hideProgress(_7);});},function(e){window.mx.ui.hideProgress(_7);if(e instanceof _3){window.mx.onError(new _2(e.message));}else{window.mx.ui.info(window.mx.ui.translate("mxui.sys.UI","sync_error"),true);}});}});return _6;});