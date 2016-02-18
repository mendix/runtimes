
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/graveyard",["mxui/widget","mxui/dom","dojo/dom-class","dojo/_base/array"],function(_1,_2,_3,_4){"use strict";var _5=null;return {destroyWidgets:function destroyWidgets(){var _6=_7();_1.destroyChildren(_6);_2.empty(_6);},exileWidgetsIn:function exileWidgetsIn(_8){_4.forEach(_8,function(_9){while(_9.firstChild){_7().appendChild(_9.firstChild);}});}};function _7(){if(!_5){_5=_2.create("div",{"class":"mx-graveyard"});document.body.appendChild(_5);}return _5;};});