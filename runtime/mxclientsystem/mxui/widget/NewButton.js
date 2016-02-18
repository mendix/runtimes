
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/NewButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.NewButton");_1.declare("mxui.widget.NewButton",mxui.widget._Button,{form:null,entity:"",onClick:function(e){var _4=mx.ui.showProgress();mx.data.create({entity:this.entity,callback:function(_5){var _6=new mendix.lib.MxContext();_6.setContext(_5);mx.ui.execute({form:this.form},{context:_6});mx.ui.hideProgress(_4);},error:function(e){mx.ui.hideProgress(_4);mx.onError(e);}},this);}});});