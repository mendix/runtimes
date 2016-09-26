/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_LabeledWidget",["mxui/widget/_WidgetBase","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget._LabeledWidget",insideFormGroup:false,startup:function(){if(!this.insideFormGroup){return;}var _5=/input|textarea|select/i.test(this.domNode.nodeName)?this.domNode:null;if(!_5){var _6=this.domNode.querySelectorAll("input,textarea,select");if(_6.length>1){return;}_5=_6[0];}if(!_5){_5=this.domNode.querySelector("button");}if(!_5.id){_5.id=this.id+"_input";}var _7=this.domNode.previousElementSibling;if(_7&&_7.nodeName==="LABEL"){_7.setAttribute("for",_5.id);}}});return _4;});