
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/SaveButton",["mxui/widget/_Button","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.SaveButton",closeForm:true,needsObject:true,onClick:function(){var _5=this,_6=this.mxform;_6.validate(function(){_6.suspend();var _7=function(e){_6.resume();if(!(e instanceof mendix.lib.ValidationError)){window.mx.onError(e);}};_6.save(function(){_6.commit(function(){if(_5.closeForm||_6.place=="popup"){_6.dispose();}else{_6.resume();}},_7);},_7);});}});return _4;});