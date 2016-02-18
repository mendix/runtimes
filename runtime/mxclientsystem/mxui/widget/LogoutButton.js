
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/LogoutButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.LogoutButton");_1.declare("mxui.widget.LogoutButton",mxui.widget._Button,{postCreate:function(){if(mx.session.isGuest()){this.domNode.style.display="none";}},onClick:function(e){mx.session.logout();}});});