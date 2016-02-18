/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/NewButton",["mxui/widget/_Button","mendix/lib/MxContext","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.NewButton",form:null,entity:"",onClick:function(e){var _6=window.mx.ui.showProgress();window.mx.data.create({entity:this.entity,callback:function(_7){var _8=new _2();_8.setContext(_7);window.mx.ui.execute({form:this.form},{context:_8});window.mx.ui.hideProgress(_6);},error:function(e){window.mx.ui.hideProgress(_6);window.mx.onError(e);}},this);}});return _5;});