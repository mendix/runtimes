/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/ReloadListener",["mendix/logger"],function(_1){"use strict";function _2(_3){this._reloadHandlers=[];var _4=this;_5();function _5(){try{var ws=new WebSocket(_3);ws.onmessage=_6;ws.onclose=_5;}catch(e){_1.error("Cannot connect to the runtime websocket reload handler. Reload on redeploy won't work!");}};function _6(_7){if(_7.data==="MENDIX_RELOAD"){_4._reloadHandlers.forEach(function(_8){_8.apply(null);});return;}window.mx.onError("Unexpected command received from runtime: "+_7.data);};};_2.prototype.addOnReload=function(_9){this._reloadHandlers.push(_9);};return _2;});