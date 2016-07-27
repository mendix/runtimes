/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/sys/ReloadHandler",["mxui/lib/ReloadListener","mendix/lib/MxContext","dojo/aspect"],function(_1,_2,_3){"use strict";var _4="mx.reload";function _5(){};_5.prototype.reloadPage=function(){window.sessionStorage.setItem(_4,JSON.stringify(_6()));window.mx.reload();};_5.prototype.tryRestorePage=function(){var _7=window.sessionStorage.getItem(_4);window.sessionStorage.removeItem(_4);if(!_7){return false;}_8(JSON.parse(_7));_3.after(window.mx,"onError",_9);return true;};function _6(){var _a=window.mx.router.getContentForm(),_b=_a.getContext();return {path:_a.path,trackId:_b.getTrackId(),trackEntity:_b.getTrackEntity()};};function _8(_c){var _d=new _2();_d.setTrackId(_c.trackId);_d.setTrackEntity(_c.trackEntity);window.mx.router.openFormInContent(_c.path,null,_d);};function _9(){window.mx.ui.confirmation({content:"An error has occurred that might have been caused by fast reload. Refresh the page to fix it.",proceed:"Refresh page",handler:function(){window.mx.reload();}});};return _5;});