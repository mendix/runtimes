/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/gestures/swipe",[],function(){var _1=null;var _2=null;var _3=null;function _4(e){if(e.touches.length>1){return;}var _5=e.touches[0];_1={pageX:_5.pageX,pageY:_5.pageY};};function _6(e){var _7=e.touches[0];_2={pageX:_7.pageX,pageY:_7.pageY};if(_3===null&&_1){_3=_8();}if(_3){_9(e.type,e.target);}};function _8(){var _a=Math.abs(_2.pageX-_1.pageX);var _b=Math.abs(_2.pageY-_1.pageY);if(_b<=10&&_a>30){return "horizontalSwipe";}return null;};function _9(_c,_d){var _e=_2.pageX>_1.pageX?"right":"left";var _f="";if(_c==="touchend"){_f="end";}else{if(_c==="touchcancel"){_f="cancel";}}var _10="swipe"+_e+_f;var _11=new CustomEvent(_10,{detail:{originPageX:_1.pageX,originPageY:_1.pageY,pageX:_2.pageX,pageY:_2.pageY},bubbles:true});_d.dispatchEvent(_11);};function _12(e){if(_3){_9(e.type,e.target);}_3=null;_1=null;};window.document.addEventListener("touchstart",_4,true);window.document.addEventListener("touchmove",_6,true);window.document.addEventListener("touchend",_12,true);window.document.addEventListener("touchcancel",_12,true);});