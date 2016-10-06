/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/LogoutButton",["mxui/widget/_DynamicButton","dojo/_base/declare"],function(_1,_2){var _3=_2(_1,{declaredClass:"mxui.widget.LogoutButton",postCreate:function(){if(window.mx.session.isGuest()){this.domNode.style.display="none";}this.inherited(arguments);},onClick:function(e){mx.ui.showProgress(null,true);window.mx.logout();}});return _3;});