/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/SaveButton",["mxui/widget/_Button","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.SaveButton",closeForm:true,needsObject:undefined,onClick:function(){var _5=this,_6=this.mxform;_6.validate(function(){var _7=function(e){if(!(e instanceof mendix.lib.ValidationError)){window.mx.onError(e);}};_6.save(function(){_6.commit(function(){if(_5.closeForm||_6.place=="popup"){_6.dispose();}},_7);},_7);});}});return _4;});