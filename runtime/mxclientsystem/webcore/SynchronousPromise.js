/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/SynchronousPromise",function(){var _1=0;var _2=1;var _3=2;function _4(fn){var _5=_1;var _6=null;var _7=[];function _8(_9){_5=_2;_6=_9;_7.forEach(_a);_7=null;};function _b(_c){_5=_3;_6=_c;_7.forEach(_a);_7=null;};function _d(_e){try{var _f=_10(_e);if(_f){_11(_f.bind(_e),_d,_b);}else{_8(_e);}}catch(e){_b(e);}};function _10(_12){if(_12&&(typeof _12==="object"||typeof _12==="function")){var _13=_12.then;if(typeof _13==="function"){return _13;}}return null;};function _11(fn,_14,_15){var _16=false;try{fn(function(_17){if(_16){return;}_16=true;_14(_17);},function(_18){if(_16){return;}_16=true;_15(_18);});}catch(ex){if(_16){return;}_16=true;_15(ex);}};function _a(_19){if(_5===_1){_7.push(_19);}else{if(_5===_2&&typeof _19.onFulfilled==="function"){_19.onFulfilled(_6);}if(_5===_3&&typeof _19.onRejected==="function"){_19.onRejected(_6);}}};function _1a(_1b,_1c,_1d){return function(_1e){if(typeof _1b==="function"){try{return _1c(_1b(_1e));}catch(ex){return _1d(ex);}}else{return _1c(_1e);}};};this.done=function(_1f,_20){_a({onFulfilled:_1f,onRejected:_20});};this.then=function(_21,_22){var _23=this;return new _4(function(_24,_25){return _23.done(_1a(_21,_24,_25),_1a(_22,_24,_25));});};this.spread=function(_26,_27){return this.then(function(arr){return _26.apply(null,arr);},function(arr){return _27.apply(null,arr);});};_11(fn,_d,_b);};_4.resolved=function(_28){return new _4(function(_29,_2a){_29(_28);});};_4.rejected=function(e){return new _4(function(_2b,_2c){_2b(e);});};_4.all=function(_2d){var _2e=_2d.length;var _2f=new Array(_2d.length);var _30=false;if(_2e===0){return _4.resolved(_2f);}return new _4(function(_31,_32){_2d.forEach(function(p,i){p.then(_33(i),_34);});function _33(n){return function(_35){_2f[n]=_35;if(--_2e===0){_31(_2f);}};};function _34(e){if(!_30){_30=true;_32(e);}};});};return _4;});