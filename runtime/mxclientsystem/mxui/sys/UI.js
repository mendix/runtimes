
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/sys/UI",["mxui/lib/WindowManager","mxui/lib/form/FormFactory","mxui/lib/form/ContentForm","mxui/widget/DialogMessage","mxui/widget/Progress","mxui/widget/Underlay","mxui/widget/Login","mxui/widget/DemoUserSwitcher","mxui/widget/Confirmation","mxui/sys/history","mxui/io/iframe","mxui/dom","mendix/lib/ServerError","mendix/lib/ConnectionError","mendix/lib/DescribedServerError","mendix/lib/NavigationError","mendix/lib/ValidationError","mendix/lib/Error","mendix/lib/MxContext","mendix/lang","mendix/logger","dijit/registry","dojo/dom-class","dojo/on","dojo/aspect","dojo/cookie","dojo/has","dojo/ready","dojo/i18n","dojo/_base/array","dojo/_base/kernel","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20){function UI(){var _21=this,_22="mxui.sys.UI",_23=false,_24=null,_25=null,_26=null,_27=false,_28="en_US",_29=null,_2a=null,_2b="",_2c="desktop",_2d="Mendix 5",_2e=null,_2f,_30;var _31={buddhist:/th$/,hebrew:null,islamic:null};this.startup=function(_32){var _33=window.mx.session.getConfig().uiconfig;_2a=_33.menubars;_34(_33);_35(_33);_36(_33);_37();_18(window,"resize",_20.hitch(_21,"resize"));_38();_39();_3a(_33.modules);_3b();_14.collect([_3c,_1c],function(){_27=document.body.dir.toLowerCase()=="rtl";_3d();_23=true;_32();});};function _34(_3e){_28=_3e.locale;_1f.locale=_1d.normalizeLocale(_28.replace("_","-"));_29=_3e.translations;_3f();_40();};function _35(_41){_2c=_41.profile.name.toLowerCase();_2d=_41.profile.title;document.title=_2d;_17.add(document.body,"profile-"+_2c);};function _36(){var _42=_1e.map(window.mx.session.getUserRoles("Name"),function(_43){return "role-"+_43.toLowerCase();});_17.add(document.body,_42);};function _37(){_19.before(window.mx,"onError",function(e){var msg;if(e instanceof _f){msg=e.message;}else{if(e instanceof _e){msg=_21.translate("mxui.sys.UI","connection_error");}else{if(e instanceof _d){msg=_21.translate("mxui.sys.UI","internal_error");}else{msg=_21.translate("mxui.sys.UI","internal_error");}}}_24&&_24.hide();_24=_21.exception(msg);_15.error(e);});};function _38(){_2f=new _1();_30=new _2(_2f);_2e=new _3();_19.after(_2e,"onNavigation",function(){document.title=_2d+" - "+_2e.title;});_25=new _5();_26=new _6();var _44=mx.session.getConfig("demoUsers");if(_44){_1e.forEach(_44,function(_45){_45.active=(_45.name==window.mx.session.getUserName());});var _46=new _8({demoUsers:_44});document.body.appendChild(_46.domNode);_46.startup();}};function _3d(){var _47=document.getElementById("content");if(!_47){_21.exception("You are using an outdated index template. Please update your index template.");return;}_47.appendChild(_2e.domNode);};function _39(){_a.init();_19.after(_2e,"dispose",_a.back);var _48=null;_19.after(_a,"onNavigation",function(_49,_4a){if(!_4a){return;}var _4b=_4a.formParams;if(!_48){_48=_21.showProgress();}if(_49){_2e.onPersistViewState(_49);}_2e.navigateTo(_4b.path,_4b.title,_4b.context,_4b.params,_20.clone(_4a),function(){_21.hideProgress(_48);_48=null;},function(e){if(e instanceof _10){}else{_21.hideProgress(_48);_48=null;window.mx.onError(e);}});},true);};var _3c=function(_4c){var _4d=window.mx.server.getCacheBust(),url="widgets/widgets.js";_c.addCss("widgets/widgets.css?"+_4d);dojo.registerModulePath("widgets","../../widgets");window.mx.server.get({url:url,handleAs:"text",failOk:true,load:function(_4e){dojo["eval"](_4e+"\r\n//# sourceURL="+url);_4c();},error:function(err){window.mx.onError(new _12("Could not retrieve "+url+". Probably a custom widget has a problem. ("+err+")"));var _4f=window.mx.session.getConfig("uiconfig.widgets");for(var i=0,_50;_50=_4f[i];i++){var _51=_50.split(".");dojo.registerModulePath(_51[0],window.mx.modulePath+_51[0]);try{dojo["require"](_50);}catch(e){_15.error(_22+".getWidgets: failed loading widget "+_50+": "+e);}}_4c();}});};function _3a(_52){for(var i=0,_53;_53=_52[i];i++){try{dojo["require"](_53+"."+_53);}catch(e){_15.error(_22+".getModules: failed loading module "+_53);}}};var _40=function(){var _54=_21.getCalendarSystem();if(_54!=="gregorian"){_2b="dojox.date."+_54;dojo["require"](_2b);dojo["require"](_2b+".locale");}};var _3b=function(){if(_1b("ie")){if(JSON.stringify(document.createElement("input").value)==="\"null\""){var _55=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").get;Object.defineProperty(HTMLInputElement.prototype,"value",{get:function(){var _56=_55.call(this);return _56===""?"":_56;}});}_18(document,"click",function(e){var _57=e.target;if(_57.nodeName=="TEXTAREA"||_57.nodeName=="INPUT"&&(_57.type=="text"||_57.type=="password")){if(document.activeElement!=_57){var sel=_c.getSelection(_57);try{_57.focus();}catch(ex){}_c.selectTextRange(_57,sel.start,sel.end);}}if(_1b("ie")<=8){if(_57.nodeName=="INPUT"&&_57.type=="checkbox"){_c.dispatchEvent(_57,"onchange");}}});}};var _3f=function(){var map={"mendix":"mxui","mendix.core.MxServer":"mendix.core.Server","mendix.widget.MxDataView":"mendix.widget.MxFormView","mendix.widget.MxNavigator":"mendix.widget.Navigator","mendix.widget.MxDataGrid":"mendix.widget.DataGrid","mendix.widget.DataGrid.true":"mxui.common.true","mendix.widget.DataGrid.false":"mxui.common.false","mendix.core.MxServer.invalid_session":"mendix.session.session_expired","mobile.widget.Dialog.ok":"mxui.widget.DialogMessage.ok","mxui.widget.Dialog.error":"mxui.widget.DialogMessage.error","mxui.widget.Dialog.information":"mxui.widget.DialogMessage.info","mxui.widget.Dialog.warning":"mxui.widget.DialogMessage.warning","mxui.widget.Dialog.confirmation":"mxui.widget.Confirmation.caption","mobile.widget":"mxui.widget","mobile.sys":"mxui.sys"};for(var _58 in map){var _59=_58.split("."),_5a=map[_58].split("."),_5b=_59.pop(),_5c=_5a.pop(),_5d=_29,_5e=_5d,_5f;while(_5d&&(_5f=_59.shift())){_5d=_5d[_5f];}if(_5d){while(_5f=_5a.shift()){_5e=_5e[_5f]=_5e[_5f]||{};}if(_5e[_5c]){_20.mixin(_5e[_5c],_5d[_5b]);}else{_5e[_5c]=_5d[_5b];}}}};var _60=function(msg,_61,_62){return new _4({type:_61,content:""+_21.extractMessage(msg),modal:_62});};var _63=function(_64){var _65=_19.after(_64,"onAfterHide",function(){_65.remove();_64.destroy();});_64.show();return _64;};this.openFormInContent=function(_66,_67,_68,_69){_a.push({formParams:{path:_66,title:_67,context:_68||new _13(),params:_69||{}}});};this.openFormInPopup=function(_6a,_6b,_6c,_6d,_6e,_6f){var _70=this,pid=this.showProgress();_30.openPopupForm(_6a,_6b,(_6c||new _13()),(_6d||{}),function(_71){_70.hideProgress(pid);_6e&&_6e(_71);},function(e){_70.hideProgress(pid);_6f?_6f(e):window.mx.onError(e);});};this.openFormInNode=function(_72,_73,_74,_75,_76,_77){var _78=this,pid=this.showProgress();_30.openInlineForm(_72,_73,(_74||new _13()),(_75||{}),function(_79){_78.hideProgress(pid);_76&&_76(_79);},function(e){_78.hideProgress(pid);_77?_77(e):window.mx.onError(e);});};var _7a=function(fmt,_7b){if(!_7b){return fmt;}else{if(!(_7b instanceof Array)){_7b=[_7b];}}return fmt.replace(/\{(\d+)\}/g,function(_7c,n){var _7d=_7b[n-1];if(_7d!=null){return _7d;}else{return _7c;}});};this.toString=function(){return _22;};this.getCurrentForm=function(){return _2e;};this.getProfile=function(){return _2c;};this.getMenu=function(_7e){return _2a[_7e]||[];};this.getDatePackage=function(){return _2b||"dojo.date";};this.getCalendarSystem=function(){for(var m in _31){var re=_31[m];if(re&&re.test(_1f.locale.toLowerCase())){return m;}}return "gregorian";};this.isRtl=function(){return _27;};this.resize=function(){_2e.resize();};this.execute=function(_7f,_80,_81){var cfg={};if(_7f.microflow){_20.mixin(cfg,_7f.microflow,_80);window.mx.ui.action(cfg.name,cfg,_81);}else{if(_7f.form){_20.mixin(cfg,_7f.form,_80);window.mx.ui.openForm(cfg.path,cfg,_81);}else{_15.error(_22+".execute: unknown action type");}}};this.action=function(_82,_83,_84){_83=_83||{};_20.setObject("params.actionname",_82,_83);var _85=_83.callback,_86=_83.error,_87=_20.mixin({caller:_2e},_83.store),_88;if("progress" in _83){_88=this.getProgress(_83.progressMsg,_83.progress=="modal");_88.start();}window.mx.data.action({callback:function(_89){_88&&_88.stop();_85&&_85.call(_84,_89);},error:function(e){_88&&_88.stop();if(_86){_86.call(_84,e);}else{if(e&&!(e instanceof _11)){window.mx.onError(e);}}},context:_83.context,async:_83.async,params:_83.params,store:_87});};this.back=function(){_a.back();};this.showProgress=function(msg,_8a){return _25.add(msg||_21.translate("mxui.sys.UI","loading"),_8a);};this.hideProgress=function(id){return _25.remove(id);};this.showUnderlay=function(_8b){_26.show(_8b);};this.hideUnderlay=function(_8c){_26.hide(_8c);};this.getProgress=function(msg,_8d){var id,_8e;return {start:function(){if(_8e){return id;}else{_8e=true;return id=_21.showProgress(msg,_8d);}},stop:function(){if(_8e){_8e=false;_21.hideProgress(id);}}};};function _8f(_90){if(!_23){var _91=window.mx.session.getConfig("profile");if(_91){_2c=_91.name.toLowerCase();_17.add(document.body,"profile-"+_2c);document.title=_91.title;}}if(!window.i18nMap){window.mx.server.get({url:"js/login_i18n.js",handleAs:"javascript",load:_90});}else{_90();}};this.showLogin=function(_92){if(_92=="402"){this.exception(window.i18nMap.http402);return;}var _93=_1a("originURI");if(_93){_1a("originURI",null,{expires:-1});window.mx.redirect(_93);return;}_8f(function(){new _7().show(_92);});};this.openForm=function(_94,_95,_96){if(_95.domNode){this.openFormInNode(_94,_95.domNode,_95.context,_95.params,_95.callback?_20.hitch(_96,_95.callback):null,_95.error?_20.hitch(_96,_95.error):null);}else{if(/popup|modal/.test(_95.location)){_95.modal=_95.location=="modal";this.openFormInPopup(_94,_95,_95.context,_95.params,_95.callback?_20.hitch(_96,_95.callback):null,_95.error?_20.hitch(_96,_95.error):null);}else{if(_95.callback||_95.error){throw new Error("Success and error callbacks are not supported for openFormInContent");}this.openFormInContent(_94,_95.title,_95.context,_95.params);}}};this.reload=function(_97){var _98=mxui.currentForm;if(!_98){throw new _12("Trying to refresh the content form but no form is yet available.");}_98.reload(_97);};this.getTemplate=function(id,_99){var _9a=_2e.widgetTemplates[id];return _9a&&_20.clone(_9a[_99]);};this.applyToNode=function(_9b,_9c){var _9d=_16.byNode(_9c);switch(_9b){case "show":if(_9d&&_9d.show){_9d.show();}else{_9c.style.display="";}break;case "hide":if(_9d&&_9d.hide){_9d.hide();}else{_9c.style.display="none";}break;case "disable":if(_9d){_9d.set("disabled",true);}break;case "enable":if(_9d){_9d.set("disabled",false);}break;}};this.makeShareId=function(_9e,_9f){return "context_seed_"+_9f+"_"+_9e.hash;};this.validations=function(_a0){if(_a0.length){var _a1=[];for(var i=0,val;val=_a0[i];i++){var _a2=val.getFields();for(var x=0,_a3;_a3=_a2[x];x++){_a1.push(_a3.reason);}}this.error(_a1.join("\n"));}};this.translate=function(_a4,str,_a5,_a6){var map=_20.getObject(_a4,false,_29);if(!map||!map[str]){return _a6||"[No translation]";}return _7a(map[str],_a5);};this.extractMessage=function(msg){if(typeof msg=="object"){if(msg.description){return msg.description;}else{if(msg.message){return msg.message;}}}return msg;};this.info=function(msg,_a7){return _63(_60(msg,"info",_a7));};this.warning=function(msg,_a8){return _63(_60(msg,"warning",_a8));};this.error=function(msg,_a9){return _63(_60(msg,"error",_a9));};this.exception=function(msg){return this.error(msg,true);};this.confirmation=function(_aa){var _ab=new _9({content:_aa.content,proceed:_aa.proceed||"OK",cancel:_aa.cancel||"Cancel",handler:_aa.handler});_63(_ab);return _ab;};this.encodeUrlHash=function(_ac,_ad,_ae){var _af=_ac.substr(0,_ac.lastIndexOf(".")),_b0=_ad.toQuery();return "!/"+_af+(_b0?"?"+_b0:"")+";"+_ae;};this.decodeUrlHash=function(_b1){if(_b1.charAt(0)=="!"){var _b2=_b1.lastIndexOf(";");_b1=_b1.slice(2,_b2!=-1?_b2:_b1.length);if(/^\w+(\/\w+(\?\w+\.\w+\=\d+(&\w+\.\w+\=\d+)*)?|\.\w+(\?\d+(&\d+)*)?)$/.test(_b1)){var _b3=_b1.split("?"),_b4=_b3[0],_b5=_b3[1],_b6=new _13(),_b7,_b8;if(_b4.indexOf("/")!=-1){if(_b5){_b7=_b5.split("&");for(var i=_b7.length;_b8=_b7[--i];){var _b9=_b8.split("=");_b6.setContext(_b9[0],_b9[1]);}}return function(_ba){window.mx.ui.openFormInContent(_b4+".page.xml","",_b6);_ba&&_ba();};}else{if(_b5){_b7=_b5.split("&");for(var j=0;_b8=_b7[j++];){_b6.setContext(" ",_b8);}}return function(_bb){window.mx.data.action({context:_b6,params:{actionname:_b4},callback:_bb,error:function(e){window.mx.onError(e);_bb&&_bb();}});};}}else{return null;}}else{return null;}};this.downloadFile=function(_bc){var _bd=(window.mx.ui.getProfile()=="desktop"),_be=_bd?_bc.target:"window",obj=_bc?_bc.mxobject:null,url;if(obj&&obj.get("HasContents")){url="file?guid="+obj.getGuid();}else{if(_bc.url){url=_bc.url;}}if(url){_b.download({url:window.mx.appUrl+url,target:_be,error:function(err){if(_bc.error){_bc.error(err);}else{window.mx.onError(err);}}});}else{}};this.getFirstDayOfWeek=function(){return window.mx.session.getConfig("uiconfig.firstDayOfWeek");};};return UI;});