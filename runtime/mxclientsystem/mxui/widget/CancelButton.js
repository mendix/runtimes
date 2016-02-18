
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/CancelButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.CancelButton");_1.declare("mxui.widget.CancelButton",mxui.widget._Button,{closeForm:true,needsObject:true,onClick:function(e){var _4=this,_5=this.mxform;this.mxform.suspend();_5.rollback(function(){if(_4.closeForm||_4.mxform.place==="popup"){_5.dispose();}},function(e){_5.resume();mx.onError(e);});}});});