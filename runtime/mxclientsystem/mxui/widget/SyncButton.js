/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SyncButton",["mxui/widget/_DynamicButton","webcore/offline","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.SyncButton",postCreate:function(){this.inherited(arguments);},onClick:function(e){var _5=mx.session.getConfig("sync_config.fetch");_2.updateLocalDatabase(_5).then(_6).caught(function(e){window.mx.onError(e);});}});function _6(_7){var _8={};_7.forEach(function(_9){window.mx.data.update({guid:_9.getGuid()});_8[_9.getEntity()]=true;});for(var _a in _8){window.mx.data.sendClassUpdate(_a);}};return _4;});