
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Login",["mxui/widget/Dialog","mxui/dom","dojo/dom-class","dojo/json","dojo/_base/declare","dojo/_base/event"],function(_1,_2,_3,_4,_5,_6){var _7=_5(_1,{declaredClass:"mxui.widget.Login",autoFocus:false,closable:false,_userNode:null,_passNode:null,_cancelBtn:null,_shown:false,_loginCallback:null,buildRendering:function(){var $=_2.create,_8,_9,_a;this.caption=this.translate("loginButton");this.inherited(arguments);_3.add(this.domNode,"mx-login");this.domNode.removeChild(this._contentNode);this._contentNode=_8=$("form",{"class":"modal-content mx-dialog-content"},this._headerNode,this._bodyNode,this._footerNode);this.domNode.appendChild(_8);this.setContent($("#",_9=this._userNode=$("input",{"class":"form-control",name:"username",type:"text",autocorrect:"off",autocapitalize:"none",placeholder:this.translate("username")}),_a=this._passNode=$("input",{"class":"form-control",name:"password",type:"password",autocorrect:"off",autocapitalize:"none",placeholder:this.translate("password")})));var _b=$("button",{type:"submit","class":"btn btn-primary"},this.translate("loginButton")),_c=this._cancelBtn=$("button",{type:"button","class":"btn"},"Cancel");this.setButtons([_b,_c]);this.connect(_9,"keydown","reset");this.connect(_a,"keydown","reset");this.connect(_8,"submit","submit");this.connect(_c,"click","hide");},translate:function(_d){return window.i18nMap[_d];},getStatusMessage:function(_e){return this.translate("http"+_e)||this.translate("httpdefault");},submit:function(e){_6.stop(e);var _f=this;mx.login(this._userNode.value,this._passNode.value,function(){_f.destroy();},function(_10){_f.setCaption(_f.getStatusMessage(_10));_3.add(_f.domNode,"error");});},show:function(_11){if(_11){this.setCaption(this.getStatusMessage(_11));}this._cancelBtn.style.display=window.mx.isLoaded()?"":"none";this.inherited(arguments);if(this._shown){this._passNode.focus();}else{this._userNode.focus();this._shown=true;}},reset:function(){this.setCaption(this.translate("loginButton"));_3.remove(this.domNode,"error");}});return _7;});