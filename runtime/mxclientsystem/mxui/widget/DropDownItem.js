/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DropDownItem",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","dojo/dom-construct","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(_1,{declaredClass:"mxui.widget.DropDownItem",icon:"",caption:"",action:null,dialog:null,parent:null,buildRendering:function(){var $=_2.create,_8=this.domNode=$("li",$("label",this.caption));if(this.icon){_4.place($("img",{src:window.mx.appUrl+this.icon}),_8,"first");}this.connect(_8,"click","onClick");},onClick:function(_9){this.dialog.hide();var _a=this.action,_b=this.parent.mxcontext;if(!_a){return;}var _c=function(){window.mx.ui.execute(_a,{context:_b});};if(_a.microflow&&_a.microflow.validate=="view"){this.mxform.validate(_c);}else{_c();}}});return _7;});