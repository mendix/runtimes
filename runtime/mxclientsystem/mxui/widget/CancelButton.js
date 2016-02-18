
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/CancelButton",["mxui/widget/_Button","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.CancelButton",closeForm:true,needsObject:true,onClick:function(e){var _5=this,_6=this.mxform;_6.rollback(function(){if(_5.closeForm||_6.place==="popup"){_6.dispose();}});}});return _4;});