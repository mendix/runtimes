/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/_LabeledWidget",["mxui/widget/_WidgetBase","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget._LabeledWidget",insideFormGroup:false,startup:function(){if(!this.insideFormGroup){return;}var _5=this.domNode.querySelector("input,textarea,select")||this.domNode.querySelector("button");if(!_5.id){_5.id=this.id+"_input";}var _6=this.domNode.previousSibling;_6.setAttribute("for",_5.id);}});return _4;});