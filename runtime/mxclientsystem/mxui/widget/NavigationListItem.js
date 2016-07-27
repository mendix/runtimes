/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/NavigationListItem",["mxui/widget/_WidgetBase","dojo/_base/declare"],function(_1,_2){var _3=_2(_1,{declaredClass:"mxui.widget.NavigationListItem",action:null,buildRendering:function(){this.inherited(arguments);if(this.action){this.connect(this.domNode,"click","onClick");}},onClick:function(){var _4=this;var _5=function(){window.mx.ui.execute(_4.action,{context:_4.mxcontext});};if(this.action.microflow&&this.action.microflow.validate=="view"){this.mxform.validate(_5);}else{_5();}}});return _3;});