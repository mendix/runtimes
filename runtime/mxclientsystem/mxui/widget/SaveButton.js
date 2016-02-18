
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/SaveButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.SaveButton");_1.declare("mxui.widget.SaveButton",mxui.widget._Button,{closeForm:true,needsObject:true,onClick:function(e){var _4=this,_5=this.mxform;_5.validate(function(){_5.suspend();var _6=function(e){_5.resume();if(!(e instanceof mendix.lib.ValidationError)){mx.onError(e);}};_5.save(function(){_5.commit(function(){if(_4.closeForm||_5.place=="popup"){_5.dispose();}else{_5.resume();}},_6);},_6);});}});});