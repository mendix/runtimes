/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("reporting/lib/MetaResult",[],function(){function _1(_2){this.getRenderValue=function(_3,_4){var _5=_2[_3];switch(_5.type){case "Boolean":var _6=String(_4);return _6.match(/true|false/)?window.mx.ui.translate("mxui.widget.DataGrid",_6):_4;case "Date":case "DateTime":if(typeof _4=="string"){return _4;}var _7=window.mx.parser.formatDate(_4,{datePattern:_5.format});if(window.mx.ui.isRtl()&&_7){_7=_7.split("‏/").reverse().join("/");}return _7;case "Enum":if(_5.options){for(var i=0;i<_5.options.length;i++){var _8=_5.options[i];for(var _9 in _8){if(_4==_9){return _8[_9];}break;}}}return _4;default:return String(_4);}};};return _1;});