/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/LogoutButton",["mxui/widget/_DynamicButton","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.LogoutButton",postCreate:function(){if(window.mx.session.isGuest()){this.domNode.style.display="none";}this.inherited(arguments);},onClick:function(e){window.mx.logout();}});return _4;});