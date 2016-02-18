/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("reporting/store/ParameterStore",[],function(){var _1={};var _2={};return {registerParams:function(id,_3){_1[id]=_3;if(_2[id]){for(var i=0;i<_2[id].length;i++){_2[id][i](_3);}_2[id]=null;}},retrieveParams:function(id,_4){if(_1[id]){_4(_1[id]);}else{if(!_2[id]){_2[id]=[];}_2[id].push(_4);}}};});