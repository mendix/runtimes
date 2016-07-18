/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/InsertBuilder",[],function(){function _1(_2,_3){if(!(this instanceof _1)){return new _1();}this._tableName=_3&&_3.tableName||_2&&_2._tableName||null;this._columnNames=_3&&_3.columnNames||_2&&_2._columnNames||[];};_1.prototype.into=function(_4){return new _1(this,{tableName:_4});};_1.prototype.column=function(_5){return new _1(this,{columnNames:this._columnNames.concat(_5)});};_1.prototype.insert=function(){var _6="";_6+="INSERT INTO "+this._tableName;_6+=this._buildSql();return _6;};_1.prototype.insertOrReplace=function(){var _7="";_7+="INSERT OR REPLACE INTO "+this._tableName;_7+=this._buildSql();return _7;};_1.prototype._buildSql=function(){var _8="";if(this._columnNames.length>0){_8+=" ("+this._columnNames.join(", ")+")";}_8+=" VALUES (";_8+="?"+new Array(this._columnNames.length).join(", ?");_8+=")";return _8;};return _1;});