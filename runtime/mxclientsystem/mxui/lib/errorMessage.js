/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/errorMessage",["mxui/dom"],function(_1){var _2={show:function(_3,_4){var _5=_3.querySelector(".mx-validation-message");if(!_5){_5=_1.create("div",{"class":"alert alert-danger mx-validation-message"},_4);_3.appendChild(_5);}else{_1.text(_5,_4);}},hide:function(_6){var _7=_6.querySelector(".mx-validation-message");if(_7){_6.removeChild(_7);}}};return _2;});