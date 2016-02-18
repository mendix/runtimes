
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TemplateGridItem",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.TemplateGridItem");_1.declare("mxui.widget.TemplateGridItem",mxui.widget._WidgetBase,{cssClass:"",template:null,root:null,buildRendering:function(){this.domNode=mxui.dom.div({"class":this.cssClass});if(this.template){this.domNode.appendChild(this.template);}},startup:function(){var _4=this.parseContent(this.domNode,{schema:"",ignoreUpdates:true});this.root=_4[0]||null;},_setDisabledAttr:function(_5){this.root&&this.root.set("disabled",_5);}});});