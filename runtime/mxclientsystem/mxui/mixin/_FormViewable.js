/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_FormViewable",["mendix/logger","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(null,{initFormViewable:function(){var _5={saveObject:"save",commitObject:"commit",rollbackObject:"rollback"},_6=this._fvasub=[];for(var _7 in _5){if(this[_7]){_6.push(this.mxform.listen(_5[_7],_2.hitch(this,"_delegateToWidget",_7)));}}},_delegateToWidget:function(_8,_9){if(this[_8]){this[_8]({callback:function(){_9&&_9();},error:function(_a){}});}else{_9&&_9();}},uninitialize:function(){var _b=this._fvasub;if(_b){for(var i=0;i<_b.length;i++){_b[i]&&this.mxform.unlisten(_b[i]);}}}});return _4;});