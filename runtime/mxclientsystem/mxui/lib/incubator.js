/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/incubator",["mxui/widget","mxui/dom","mendix/lang"],function(_1,_2,_3){"use strict";var _4=null,_5=[];function _6(){if(!_4){_4=_2.create("div",{"class":"mx-incubator mx-offscreen"});document.body.appendChild(_4);}return _4;};var _7={conceiveSuccessor:function(_8){var _9=_8.cloneNode(false);_5.push({predecessor:_8,embryo:_9});_6().appendChild(_9);return _9;},abort:function(_a){var _b=_3.findIndex(_5,function(_c){return _c&&_c.embryo==_a;});if(_b!=-1){delete _5[_b];_1.destroyChildren(_a);_2.orphan(_a);}},hatch:function(_d){var _e=_3.findIndex(_5,function(_f){return _f&&_f.embryo==_d;});if(_e!=-1){var _10=_5[_e].predecessor;_1.destroyChildren(_10);_10.parentNode.replaceChild(_d,_10);delete _5[_e];}}};return _7;});