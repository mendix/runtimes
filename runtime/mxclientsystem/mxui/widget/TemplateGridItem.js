
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TemplateGridItem",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.TemplateGridItem",name:"",cssClass:"",template:null,root:null,buildRendering:function(){this.domNode=_2.div({"class":[this.name,this.cssClass].join(" ")});if(this.template){this.domNode.appendChild(this.template);}},startup:function(){var _6=this.parseContent(this.domNode,{schema:"",ignoreUpdates:true});this.root=_6[0]||null;},_setDisabledAttr:function(_7){this.root&&this.root.set("disabled",_7);}});return _5;});