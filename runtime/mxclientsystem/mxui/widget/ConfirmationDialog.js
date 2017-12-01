/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ConfirmationDialog",["mxui/widget/Dialog","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var $=_2.create;var _5=_4(_1,{declaredClass:"mxui.widget.ConfirmationDialog",cancel:"",proceed:"",handler:null,buildRendering:function(){this.caption=this.caption||this.translate("caption");this.inherited(arguments);var _6=$("button",{"class":"btn"},this.cancel),_7=$("button",{"class":"btn btn-primary"},this.proceed),_8=$("p");_8.innerHTML=_2.convertNlToBr(_2.escapeString(this.content));this.setContent(_8);this.setButtons([_7,_6]);this.connect(_6,"click",function(){this.hide();});this.connect(_7,"click",function(){this.hide();this.handler();});},show:function(){this.inherited(arguments,[true]);}});return _5;});