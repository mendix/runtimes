
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/LogoutButton",["mxui/widget/_Button","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.LogoutButton",postCreate:function(){if(window.mx.session.isGuest()){this.domNode.style.display="none";}},onClick:function(e){window.mx.session.logout();}});return _4;});