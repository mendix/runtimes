/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/ReaderT",[],function(){function _1(M){function _2(f){this.run=f;};_2.prototype.chain=function(f){return new _2(function(r){return this.run(r).chain(function(a){return f(a).run(r);});}.bind(this));};_2.prototype.ap=function(ma){return new _2(function(r){return this.run(r).ap(ma.run(r));}.bind(this));};_2.prototype.map=function(f){return this.chain(function(x){return _2.of(f(x));});};_2.of=function(x){return new _2(function(_3){return M.of(x);});};_2.ask=function(){return new _2(M.of);};return _2;};return _1;});