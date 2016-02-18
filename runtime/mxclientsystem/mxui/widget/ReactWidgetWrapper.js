/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ReactWidgetWrapper",["mxui/widget/_WidgetBase","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{type:null,props:null,autoLoad:false,_reactClient:null,constructor:function(){var _5=this,_6="react-client/shims",_7="react-client/index";require([_6],function(){require([_7],function(_8){_5._reactClient=_8;_5.set("loaded",true);});});},update:function(_9,_a){this._reactClient.mountComponent(this.domNode,this.type,_2.mixin({},this.props,{id:this.uniqueid+"_"+this.props.mxid}));if(_a){_a();}},uninitialize:function(){this._reactClient.unmountComponent(this.domNode);}});return _4;});