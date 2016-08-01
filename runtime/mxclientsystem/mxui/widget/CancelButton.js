/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/CancelButton",["mxui/widget/_DynamicButton","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.CancelButton",closeForm:true,needsObject:undefined,onClick:function(e){var _5=this,_6=this.mxform;_6.rollback(function(){if(_5.closeForm||_6.place==="popup"){_6.close();}});}});return _4;});