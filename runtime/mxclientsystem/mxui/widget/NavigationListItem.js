
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/NavigationListItem",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.NavigationListItem",action:null,buildRendering:function(){this.domNode=_2.create("li",{"class":"mx-navigationlist-item"},this.getTemplate("content"));if(this.action){this.connect(this.domNode,"click","onClick");}},startup:function(){this.parseContent(this.domNode,{readOnly:true});},onClick:function(){var _6=this;var _7=function(){window.mx.ui.execute(_6.action,{context:_6.mxcontext});};if(this.action.microflow&&this.action.microflow.validate=="view"){this.mxform.validate(_7);}else{_7();}}});return _5;});