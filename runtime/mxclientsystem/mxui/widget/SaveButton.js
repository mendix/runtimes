/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SaveButton",["mxui/widget/_DynamicButton","mendix/logger","mendix/lib/DescribedError","mendix/lib/ValidationError","webcore/DanglingError","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(_1,{declaredClass:"mxui.widget.SaveButton",closeForm:true,syncAutomatically:false,needsObject:undefined,onClick:function(){var _8=this,_9=this.mxform;_9.validate(function(){_9.commit(function(){if(_8.syncAutomatically){_c(_a,function(e){if(e instanceof _5){window.mx.onError(new _3(e.message));}else{window.mx.ui.info(window.mx.ui.translate("mxui.sys.UI","sync_error"),true);_a();}});}else{_a();}},_b);});function _b(e){if(!(e instanceof _4)){window.mx.onError(e);}};function _a(){if(_8.closeForm||_9.place=="popup"){_9.close();}};function _c(_d,_e){var _f=window.mx.ui.showProgress(null,true);window.mx.data.synchronizeData(function(){window.mx.ui.reload(function(){window.mx.ui.hideProgress(_f);if(_d){_d();}});},function(e){window.mx.ui.hideProgress(_f);if(_e){_e(e);}});};}});return _7;});