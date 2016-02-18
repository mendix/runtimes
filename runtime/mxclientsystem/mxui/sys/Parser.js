
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/sys/Parser",["mendix/logger","dojo/i18n","dojo/date/locale","dojo/number","dojo/_base/lang"],function(_1,_2,_3,_4,_5){var _6="mxui.sys.Parser";var _7=function(_8,_9){_8.setFullYear(_9.getFullYear(),_9.getMonth(),_9.getDate());};var _a=function(_b,_c){_b.setHours(_c.getHours(),_c.getMinutes(),_c.getSeconds(),_c.getMilliseconds());};var _d=function(_e,_f){var _10=_5.getObject(window.mx.ui.getDatePackage());return _10.locale.format(_10.Date?new _10.Date(_e):_e,_f);};var _11=function(_12,_13){var _14=_5.getObject(window.mx.ui.getDatePackage()),_15;if(_14.Date){_15=_14.locale.parse(_12,_13);if(_15){_15=_15.toGregorian();}}else{_15=_3.parse(_12,_13);}if(!_15){if(_12.indexOf("‏")==-1){if(!_13.datePattern){var _16=_3._getGregorianBundle(window.dojo.locale);_13.datePattern=_16["dateFormat-short"];}_13.datePattern=_13.datePattern.replace(/\u200f/g,"");_15=_3.parse(_12,_13);}}return _15;};function _17(){var _18=this;this.toString=function(){return _6;};this.parseDate=function(_19,_1a){if(!_19){return null;}_1a=_1a||{};var _1b={selector:_1a.selector||"date",formatLength:_1a.format||"short",datePattern:_1a.datepattern||_1a.datePattern,timePattern:_1a.timePattern};var _1c=_11(_19,_1b);if(_1c){if(_1b.selector=="time"){var now=new Date();now.setMilliseconds(_1c.getMilliseconds());now.setSeconds(_1c.getSeconds());now.setMinutes(_1c.getMinutes());now.setHours(_1c.getHours());return +now;}}return _1c&&_1c.getTime();};this.formatDate=function(_1d,_1e){var _1f=Number(_1d);if(_1d===""){return _1d;}else{if(isNaN(_1f)){return null;}}_1e=_1e||{};var _20=new Date(_1f),_21={locale:window.dojo.locale,selector:_1e.selector||"date",formatLength:_1e.format||"short",datePattern:_1e.datepattern||_1e.datePattern,timePattern:_1e.timePattern};if(_21.selector=="time"){var now=new Date(0);now.setMilliseconds(_20.getMilliseconds());now.setSeconds(_20.getSeconds());now.setMinutes(_20.getMinutes());now.setHours(_20.getHours());_20=now;}return _d(_20,_21);};this.parseNumber=function(_22,_23){var _24=_4.parse(_22);if(_23!=null){_24=_4.round(_24,_23);}return _24;};this.formatNumber=function(_25,_26,_27){var _28={groups:_26,places:_27};if(!_26){var _29=dojo.i18n.getLocalization("dojo.cldr","number",dojo.locale);_28.pattern=_29["decimalFormat"].replace(/,/g,"");}return _4.format(_25,_28);};this.formatValue=function(_2a,_2b,_2c){_2c=_2c||{};if(_2a===""){return "";}switch(_2b.toLowerCase()){case "float":return this.formatNumber(_2a,_2c.groups,_2c.places);case "currency":var _2d="places" in _2c?_2c.places:2;return this.formatNumber(_2a,_2c.groups,_2d);case "autonumber":case "integer":case "long":return this.formatNumber(_2a,_2c.groups,_2c.places||0);case "datetime":return _d(new Date(_2a),dojo.mixin({selector:"date"},_2c));case "boolean":return mx.ui.translate("mxui.common",_2a);default:return _2a;}};this.formatAttribute=function(obj,_2e,_2f){var _30=obj.getAttributeType(_2e),_31=obj.get(_2e);if(_30=="Enum"){_31=obj.getEnumCaption(_2e,_31);}return _18.formatValue(_31,_30,_2f);};this.parseValue=function(_32,_33,_34){_34=_34||{};if(_32===""){return "";}switch(_33.toLowerCase()){case "float":case "currency":case "autonumber":case "integer":case "long":return this.parseNumber(_32,_34.places);case "datetime":return _11(_32,dojo.mixin({selector:"date"},_34));case "enum":return _32;case "boolean":return _32==mx.ui.translate("mxui.common",true);default:return _32;}};this.localizeEpoch=function(_35){var obj=new Date(Number(_35));return new Date(obj.getUTCFullYear(),obj.getUTCMonth(),obj.getUTCDate(),obj.getUTCHours(),obj.getUTCMinutes(),obj.getUTCSeconds(),obj.getUTCMilliseconds()).getTime();};this.delocalizeEpoch=function(_36){var obj=new Date(Number(_36));return Date.UTC(obj.getFullYear(),obj.getMonth(),obj.getDate(),obj.getHours(),obj.getMinutes(),obj.getSeconds(),obj.getMilliseconds());};this.mergeDates=function(_37,_38,_39){var _3a=new Date(_37);switch(_39){case "date":_7(_3a,_38);break;case "time":_a(_3a,_38);break;case "datetime":_7(_3a,_38);_a(_3a,_38);break;default:_3a=_38;}return _3a;};this.replaceXPathTokens=function(_3b,_3c){if(_3c&&_3c.hasTrackId()){_3b=_3b.replace(/\[%CurrentObject%\]/g,_3c.getTrackId());}else{if(/\[%CurrentObject%\]/.test(_3b)){}}return _3b;};};return _17;});