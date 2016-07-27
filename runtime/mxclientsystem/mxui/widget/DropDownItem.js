/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/DropDownItem",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","webcore/url-helpers","dojo/dom-construct","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7){var _8=_7(_1,{declaredClass:"mxui.widget.DropDownItem",icon:"",caption:"",action:null,dialog:null,parent:null,buildRendering:function(){var $=_2.create,_9=this.domNode=$("li",$("label",this.caption));if(this.icon){_5.place($("img",{src:_4.getStaticResourceUrlFromPath(this.icon)}),_9,"first");}this.connect(_9,"click","onClick");},onClick:function(_a){this.dialog.hide();var _b=this.action,_c=this.parent.mxcontext;if(!_b){return;}var _d=function(){window.mx.ui.execute(_b,{context:_c});};if(_b.microflow&&_b.microflow.validate=="view"){this.mxform.validate(_d);}else{_d();}}});return _8;});