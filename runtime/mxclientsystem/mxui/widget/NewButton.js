/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/NewButton",["mxui/widget/_DynamicButton","mendix/lib/MxContext","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.NewButton",pageSettings:null,path:"",_entity:"",_association:"",constructor:function(_6){var _7=_6.path.split("/");this._entity=_7.pop();this._association=_7.pop();if(this._association){this.needsObject=true;}},onClick:function(){var _8=window.mx.ui.showProgress();window.mx.data.create({entity:this._entity,callback:function(_9){if(this._association){_9.set(this._association,this.mxcontext.getTrackId());}var _a=new _2();_a.setContext(_9);window.mx.ui.execute({type:"openPage",params:this.pageSettings},{origin:this.mxform,context:_a});window.mx.ui.hideProgress(_8);},error:function(e){window.mx.ui.hideProgress(_8);window.mx.onError(e);}},this);}});return _5;});