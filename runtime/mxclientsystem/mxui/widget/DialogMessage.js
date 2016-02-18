/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DialogMessage",["mxui/widget/Dialog","mxui/dom","mendix/logger","dojo/dom-class","dojo/keys","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(_1,{declaredClass:"mxui.widget.DialogMessage",type:"",content:null,buildRendering:function(){this.caption=this.caption||this.translate(this.type,null,"Message");var _8=_2.create("p");_8.innerHTML=_2.convertNlToBr(_2.escapeString(this.content));this.content=_8;var _9=_2.create("button",{"class":"btn btn-primary"},this.translate("ok",null,"Ok"));this.connect(_9,"click",function(){this.hide();});this.connect(_9,"keyup",function(e){if(e.keyCode===_5.ESCAPE){this.hide();}});this.buttons=[_9];this.inherited(arguments);_4.add(this.domNode,"mx-dialog-"+this.type);}});return _7;});