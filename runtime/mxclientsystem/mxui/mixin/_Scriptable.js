/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/mixin/_Scriptable",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{offeredInterfaces:null,offerInterface:function(_4){if(this.offeredInterfaces==null){this.offeredInterfaces={};}if(this[_4]){this.offeredInterfaces[_4]=true;return true;}else{return false;}},offerInterfaces:function(_5){for(var i=0;i<_5.length;i++){this.offerInterface(_5[i]);}},deleteInterface:function(_6){if(this.offeredInterfaces&&this.offeredInterfaces[_6]){this.offeredInterfaces[_6]=null;delete this.offeredInterfaces[_6];}},hasInterface:function(_7){return (this.offeredInterfaces&&this.offeredInterfaces[_7])?true:false;},invokeCall:function(_8,_9){if(!this.hasInterface(_8)){_1.error(this.id+".invokeCall: ERROR: attempt to invoke a function not specified as Scriptable");}else{this[_8](_9);}}});return _3;});