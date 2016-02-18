
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("reporting/store/ParameterStore",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("reporting.store.ParameterStore");if(!reporting.store){reporting.store={};}reporting.store.ParameterStore=(new function(){var _4={};var _5={};var _6={};var _7="reporting.store.ParameterStore";this.registerParams=function(id,_8){_4[id]=_8;if(_5[id]){for(var i=0;i<_5[id].length;i++){_5[id][i](_8);}_5[id]=null;}};this.retrieveParams=function(id,_9){if(_4[id]){_9(_4[id]);}else{if(!_5[id]){_5[id]=[];}_5[id].push(_9);}};this.registerLead=function(_a,id){if(_6[_a]){_6[_a].push(id);}else{_6[_a]=[id];}};this.retrieveLead=function(_b){return _6[_b]||[];};});});