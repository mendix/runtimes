/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/InsertBuilder",["./constants"],function(_1){function _2(_3,_4){if(!(this instanceof _2)){return new _2();}this._tableName=_4&&_4.tableName||_3&&_3._tableName||null;this._columnNames=_4&&_4.columnNames||_3&&_3._columnNames||[];};_2.prototype.into=function(_5){return new _2(this,{tableName:_5});};_2.prototype.column=function(_6){return new _2(this,{columnNames:this._columnNames.concat(_6)});};_2.prototype.insert=function(){var _7="";_7+="INSERT INTO "+_8(this._tableName);_7+=this._buildSql();return _7;};_2.prototype.insertOrReplace=function(){var _9="";_9+="INSERT OR REPLACE INTO "+_8(this._tableName);_9+=this._buildSql();return _9;};_2.prototype._buildSql=function(){var _a="";if(this._columnNames.length>0){_a+=" (";_a+=this._columnNames.map(_8).join(", ");_a+=")";}_a+=" VALUES (";_a+="?"+new Array(this._columnNames.length).join(", ?");_a+=")";return _a;};return _2;function _8(_b){var _c=_1.QUOTE_CHAR;return _c+_b+_c;};});