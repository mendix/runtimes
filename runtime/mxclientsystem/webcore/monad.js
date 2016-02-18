/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/monad",[],function(){var _1={};var _2=_1.lift2=function(f,Mx,My){return Mx.chain(function(x){return My.map(function(y){return f(x,y);});});};_1.sequence=function(ms,M){return ms.reduce(function(_3,mx){return _2(_4,_3,mx);},M.of([]));};return _1;function _4(xs,x){return xs.concat([x]);};});