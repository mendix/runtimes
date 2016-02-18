/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_LabeledWidget",["mxui/widget/_WidgetBase","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget._LabeledWidget",insideFormGroup:false,startup:function(){if(!this.insideFormGroup){return;}var _5=this.domNode.querySelectorAll("input,textarea,select");if(_5.length>1){return;}var _6=_5[0]||this.domNode.querySelector("button");if(!_6.id){_6.id=this.id+"_input";}var _7=this.domNode.previousSibling;_7.setAttribute("for",_6.id);}});return _4;});