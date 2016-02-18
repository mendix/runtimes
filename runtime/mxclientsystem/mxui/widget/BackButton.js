
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/BackButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.BackButton");_1.declare("mxui.widget.BackButton",mxui.widget._Button,{onClick:function(e){this.mxform.dispose();}});});