/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/NavigationListItem",["mxui/widget/_WidgetBase","dojo/_base/declare"],function(_1,_2){var _3=_2(_1,{declaredClass:"mxui.widget.NavigationListItem",action:null,buildRendering:function(){this.inherited(arguments);this.connect(this.domNode,"click","onClick");},onClick:function(){window.mx.ui.execute(this.action,{origin:this.mxform,context:this.mxcontext,abortOnClientValidations:true});}});return _3;});