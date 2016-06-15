/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/CreateBuilder",["./constants"],function(_1){function _2(_3,_4){if(!(this instanceof _2)){return new _2();}this._tableName=_4&&_4.tableName||_3&&_3._tableName||null;this._columns=_4&&_4.columns||_3&&_3._columns||[];};_2.prototype.table=function(_5){return new _2(this,{tableName:_5});};_2.prototype.column=function(_6,_7){return new _2(this,{columns:this._columns.concat({columnName:_6,columnType:_7,isPrimary:false})});};_2.prototype.primaryKeyColumn=function(_8,_9){return new _2(this,{columns:this._columns.concat({columnName:_8,columnType:_9,isPrimary:true})});};_2.prototype.createIfNotExists=function(){var _a="";_a+="CREATE TABLE IF NOT EXISTS "+_b(this._tableName);_a+=this._buildSql();return _a;};_2.prototype._buildSql=function(){var _c="";if(this._columns.length>0){_c+=" (";_c+=this._columns.map(function(_d){var _e=_b(_d.columnName);return [_e,_d.columnType,_d.isPrimary?"PRIMARY KEY ":""].join(" ").slice(0,-1);},this).join(", ");_c+=")";}return _c;};return _2;function _b(_f){var _10=_1.QUOTE_CHAR;return _10+_f+_10;};});