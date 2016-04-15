/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/applicative",[],function(){var _1={};var _2=_1.lift2=function(f,Ax,Ay){return Ax.map(function(x){return function(y){return f(x,y);};}).ap(Ay);};_1.sequence=function(as,A){return as.reduce(function(_3,ax){return _2(_4,_3,ax);},A.of([]));};_1.sequence_=function(as,A){return _1.sequence(as,A).map(function(_5){return;});};return _1;function _4(xs,x){return xs.concat([x]);};});