/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DropDownButton",["mxui/widget/_Button","mxui/widget/Dialog","mxui/html/parser","mxui/dom","dojo/dom-class","dojo/dom-construct","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7){var _8=_7(_1,{declaredClass:"mxui.widget.DropDownButton",items:null,_dialog:null,buildRendering:function(){this.inherited(arguments);_6.place(_4.create("span",{"class":"caret"}),this.domNode);},onClick:function(e){if(this._dialog){this._dialog.hide();this._dialog=null;}var $=_4.create,_9=$("ul",{"class":"mx-list mx-dropdown-list"},this.getTemplate("content")),_a=$("button",{"class":"btn primary"},"Close"),_b=this._dialog=new _2();_5.add(_b.domNode,"mx-dropdown");_b.setContent(_9);_b.setButtons([_a]);this.connect(_a,"click",function(){_b.hide();});_3.parse(_9,{dialog:_b,mxform:this.mxform,parent:this});_b.show();},uninitialize:function(){if(this._dialog){this._dialog.hide();}}});return _8;});