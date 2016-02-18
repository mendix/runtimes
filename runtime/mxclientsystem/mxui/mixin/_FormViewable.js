
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_FormViewable",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.mixin._FormViewable");_1.declare("mxui.mixin._FormViewable",null,{initFormViewable:function(){var _4={saveObject:"save",commitObject:"commit",rollbackObject:"rollback"},_5=this._fvasub=[];for(var _6 in _4){if(this[_6]){_5.push(this.mxform.listen(_4[_6],_1.hitch(this,"_delegateToWidget",_6)));}}},_delegateToWidget:function(_7,_8){if(this[_7]){this[_7]({callback:function(){_8&&_8();},error:function(_9){}});}else{_8&&_8();}},uninitialize:function(){var _a=this._fvasub;if(_a){for(var i=0;i<_a.length;i++){_a[i]&&this.mxform.unlisten(_a[i]);}}}});});