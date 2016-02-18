
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Login",["mxui/widget/Dialog","mxui/dom","mendix/logger","dojo/dom-class","dojo/json","dojo/_base/declare","dojo/_base/event","dojo"],function(_1,_2,_3,_4,_5,_6,_7,_8){var _9=_6(_1,{declaredClass:"mxui.widget.Login",autoFocus:false,closable:false,_userNode:null,_passNode:null,_cancelBtn:null,_hasError:false,_shown:false,buildRendering:function(){var $=_2.create,_a,_b,_c;this.caption=this.translate("loginButton");this.inherited(arguments);_4.add(this.domNode,"mx-login");this.domNode.removeChild(this._contentNode);this._contentNode=_a=$("form",{"class":"modal-content mx-dialog-content"},this._headerNode,this._bodyNode,this._footerNode);this.domNode.appendChild(_a);this.setContent($("#",_b=this._userNode=$("input",{"class":"form-control",name:"username",type:"text",autocorrect:"off",autocapitalize:"none",placeholder:this.translate("username")}),_c=this._passNode=$("input",{"class":"form-control",name:"password",type:"password",autocorrect:"off",autocapitalize:"none",placeholder:this.translate("password")})));if(_b.placeholder==null){_b.parentNode.insertBefore($("label",this.translate("username")),_b);_c.parentNode.insertBefore($("label",this.translate("password")),_c);}var _d=$("button",{type:"submit","class":"btn btn-primary"},this.translate("loginButton")),_e=this._cancelBtn=$("button",{type:"button","class":"btn"},"Cancel");this.setButtons([_d,_e]);this.connect(_b,"keydown","reset");this.connect(_c,"keydown","reset");this.connect(_a,"submit","submit");this.connect(_e,"click",function(){this.hide();});},translate:function(_f){return window.i18nMap[_f];},getStatusMessage:function(_10){return this.translate("http"+_10)||this.translate("httpdefault");},submit:function(e){var _11=this;_8.xhrPost({url:window.mx.baseUrl,handleAs:"json",contentType:"application/json",postData:_5.stringify({action:"login",params:{username:this._userNode.value,password:this._passNode.value}}),handle:function(_12,_13){var _14=_13.xhr.status;if(_14==200){_11._passNode.value="";window.mx.login();}else{_11.setCaption(_11.getStatusMessage(_14));_4.add(_11.domNode,"error");_11._hasError=true;}}});_7.stop(e);},show:function(_15){if(_15&&(!_15.no_alert||/402|404|500|503/.test(_15.http_code))){this.setCaption(_15.http_code==401?window.mx.ui.translate("mendix.session","session_expired"):this.getStatusMessage(_15.http_code));}this._cancelBtn.style.display=window.mx.isLoaded()?"":"none";this.inherited(arguments);if(this._shown){this._passNode.focus();}else{this._userNode.focus();this._shown=true;}},reset:function(){if(this._hasError){this._hasError=false;this.setCaption(this.translate("loginButton"));_4.remove(this.domNode,"error");}}});return _9;});