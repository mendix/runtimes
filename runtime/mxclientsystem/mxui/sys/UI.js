/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/sys/UI",["mxui/lib/form/FormFactory","mxui/lib/form/ContentForm","mxui/widget/DialogMessage","mxui/widget/Progress","mxui/widget/Underlay","mxui/widget/LoginDialog","mxui/widget/DemoUserSwitcher","mxui/widget/ConfirmationDialog","mxui/sys/history","mxui/io/iframe","mxui/dom","mendix/validator","mendix/lib/ServerError","mendix/lib/ConnectionError","mendix/lib/DescribedServerError","mendix/lib/NavigationError","mendix/lib/ValidationError","mendix/lib/Error","mendix/lib/MxContext","mendix/lang","mendix/logger","dijit/registry","dojo/dom-class","dojo/on","dojo/aspect","dojo/cookie","dojo/has","dojo/ready","dojo/i18n","dojo/_base/array","dojo/_base/kernel","dojo/_base/lang","dojo/_base/config","dojox/date/buddhist","dojox/date/buddhist/locale"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21){function UI(){var _22=this,_23="mxui.sys.UI",_24=false,_25=null,_26=null,_27=null,_28=false,_29="en_US",_2a=null,_2b=null,_2c="",_2d="desktop",_2e="Mendix 5",_2f=null,_30;var _31={buddhist:/th$/,hebrew:null,islamic:null};this.startup=function(_32){var _33=window.mx.session.getConfig().uiconfig;_34(_33);_35(_33);_36(_33);_37(_33);_38();_18(window,"resize",_20.hitch(_22,"resize"));_39();_3a();_3b(_33.modules);_3c();_14.collect([_3d,_1c],function(){_28=document.body.dir.toLowerCase()=="rtl";_3e();_24=true;_32();});};function _34(_3f){_2b=_3f.menubars;_14.forEach(_2b,function(_40,_41){_42(_40,_41+"-");});function _42(_43,_44){_1e.forEach(_43,function(_45,_46){_45.id=_44+_46;if(_45.items){_42(_45.items,_45.id+"-");}});};};function _35(_47){_29=_47.locale;_1f.locale=_1d.normalizeLocale(_29.replace("_","-"));_2a=_47.translations;_48();_49();};function _36(_4a){_2d=_4a.profile.name.toLowerCase();_2e=_4a.profile.title;document.title=_2e;_17.add(document.body,"profile-"+_2d);};function _37(){var _4b=_1e.map(window.mx.session.getUserRoles("Name"),function(_4c){return "role-"+_4c.toLowerCase();});_17.add(document.body,_4b);};function _38(){_19.before(window.mx,"onError",function(e){var msg;if(e instanceof _f){msg=e.message;}else{if(e instanceof _e){msg=_22.translate("mxui.sys.UI","connection_error");}else{if(e instanceof _d){msg=_22.translate("mxui.sys.UI","internal_error");}else{msg=_22.translate("mxui.sys.UI","internal_error");}}}_25&&_25.hide();_25=_4d(msg,"error");_25.show(true);_15.error(e);});};function _39(){_30=new _1();_2f=new _2();_19.after(_2f,"onNavigation",function(){document.title=_2e+" - "+_2f.title;_17.add(document.body,"mx-no-scroll");setTimeout(function(){_17.remove(document.body,"mx-no-scroll");},0);});_26=new _4();_27=new _5();var _4e=mx.session.getConfig("demoUsers");if(_4e){_1e.forEach(_4e,function(_4f){_4f.active=(_4f.name==window.mx.session.getUserName());});var _50=new _7({demoUsers:_4e});document.body.appendChild(_50.domNode);_50.startup();}};function _3e(){var _51=document.getElementById("content");if(!_51){_22.exception("You are using an outdated index template. Please update your index template.");return;}_51.appendChild(_2f.domNode);};function _3a(){_9.init();_19.after(_2f,"dispose",_9.back);var _52=null;_19.after(_9,"onNavigation",function(_53,_54){if(!_54){return;}var _55=_54.formParams;if(!_52){_52=_22.showProgress();}if(_53){_2f.onPersistViewState(_53.viewState);}if(!_54.viewState){_54.viewState={};}_2f.navigateTo(_55.path,_55.title,_55.context,_55.params,_20.clone(_54.viewState),function(){_22.hideProgress(_52);_52=null;},function(e){if(e instanceof _10){}else{_22.hideProgress(_52);_52=null;window.mx.onError(e);}});},true);};function _3d(_56){var _57=document.getElementsByTagName("head")[0],_58=window.mx.server.getCacheBust(),_59=_57.querySelector("link[href$='css/theme.css']"),_5a=_b.createCssLink("widgets/widgets.css?"+_58);if(_59){_57.insertBefore(_5a,_59);}else{_57.appendChild(_5a);}var _5b=[],_5c=window.mx.session.getConfig("uiconfig.widgets");if(_5c.length>0){if(!_21.isDebug){_5b.push("widgets/widgets.js?"+_58);}else{_1e.forEach(_5c,function(_5d){var _5e=_5d.split(".");dojo.registerModulePath(_5e[0],window.mx.modulePath+_5e[0]);});_5b=_1e.map(_5c,function(_5f){var _60=_5f.split(".");return "widgets/"+_60.join("/")+".js?"+_58;});}}_b.addScripts(_5b,_56);};function _3b(_61){for(var i=0,_62;_62=_61[i];i++){try{dojo["require"](_62+"."+_62);}catch(e){_15.error(_23+".getModules: failed loading module "+_62);}}};function _49(){var _63=_22.getCalendarSystem();switch(_63){case "gregorian":_2c="dojo.date";return;case "buddhist":_2c="dojox.date.buddhist";dojo["require"](_2c);dojo["require"](_2c+".locale");return;default:throw new Error("Unsupported date package: "+_63);}};function _3c(){if(_1b("ie")){if(JSON.stringify(document.createElement("input").value)==="\"null\""){var _64=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").get;Object.defineProperty(HTMLInputElement.prototype,"value",{get:function(){var _65=_64.call(this);return _65===""?"":_65;}});}_18(document,"click",function(e){var _66=e.target;if(_66.nodeName=="TEXTAREA"||_66.nodeName=="INPUT"&&(_66.type=="text"||_66.type=="password")){if(document.activeElement!=_66){var sel=_b.getSelection(_66);try{_66.focus();}catch(ex){}_b.selectTextRange(_66,sel.start,sel.end);}}if(_1b("ie")<=8){if(_66.nodeName=="INPUT"&&_66.type=="checkbox"){_b.dispatchEvent(_66,"onchange");}}});}};function _48(){var map={"mendix":"mxui","mendix.core.MxServer":"mendix.core.Server","mendix.widget.MxDataView":"mendix.widget.MxFormView","mendix.widget.MxNavigator":"mendix.widget.Navigator","mendix.widget.MxDataGrid":"mendix.widget.DataGrid","mendix.widget.DataGrid.true":"mxui.common.true","mendix.widget.DataGrid.false":"mxui.common.false","mendix.core.MxServer.invalid_session":"mendix.session.session_expired","mobile.widget.Dialog.ok":"mxui.widget.DialogMessage.ok","mxui.widget.Dialog.error":"mxui.widget.DialogMessage.error","mxui.widget.Dialog.information":"mxui.widget.DialogMessage.info","mxui.widget.Dialog.warning":"mxui.widget.DialogMessage.warning","mxui.widget.Dialog.confirmation":"mxui.widget.ConfirmationDialog.caption","mobile.widget":"mxui.widget","mobile.sys":"mxui.sys"};for(var _67 in map){var _68=_67.split("."),_69=map[_67].split("."),_6a=_68.pop(),_6b=_69.pop(),_6c=_2a,_6d=_6c,_6e;while(_6c&&(_6e=_68.shift())){_6c=_6c[_6e];}if(_6c){while(_6e=_69.shift()){_6d=_6d[_6e]=_6d[_6e]||{};}if(_6d[_6b]){_20.mixin(_6d[_6b],_6c[_6a]);}else{_6d[_6b]=_6c[_6a];}}}};function _4d(msg,_6f){return new _3({type:_6f,content:""+_22.extractMessage(msg)});};this.openFormInContent=function(_70,_71,_72,_73){_9.push({formParams:{path:_70,title:_71,context:_72||new _13(),params:_73||{}}});};this.openFormInPopup=function(_74,_75,_76,_77,_78,_79){var _7a=this,pid=this.showProgress();_30.openPopupForm(_74,_75,(_76||new _13()),(_77||{}),function(_7b){_7a.hideProgress(pid);_78&&_78(_7b);},function(e){_7a.hideProgress(pid);_79?_79(e):window.mx.onError(e);});};this.openFormInNode=function(_7c,_7d,_7e,_7f,_80,_81){var _82=this,pid=this.showProgress();_30.openInlineForm(_7c,_7d,(_7e||new _13()),(_7f||{}),function(_83){_82.hideProgress(pid);_80&&_80(_83);},function(e){_82.hideProgress(pid);_81?_81(e):window.mx.onError(e);});};function _84(fmt,_85){if(!_85){return fmt;}else{if(!(_85 instanceof Array)){_85=[_85];}}return fmt.replace(/\{(\d+)\}/g,function(_86,n){var _87=_85[n-1];if(_87!=null){return _87;}else{return _86;}});};this.toString=function(){return _23;};this.getCurrentForm=function(){return _2f;};this.getProfile=function(){return _2d;};this.getMenu=function(_88){return _2b[_88]||[];};this.getDatePackage=function(){return _2c;};this.getCalendarSystem=function(){for(var m in _31){var re=_31[m];if(re&&re.test(_1f.locale.toLowerCase())){return m;}}return "gregorian";};this.isRtl=function(){return _28;};this.resize=function(){_2f.resize();};this.execute=function(_89,_8a,_8b){var cfg={};if(_89.microflow){_20.mixin(cfg,_89.microflow,_8a);window.mx.ui.action(cfg.name,cfg,_8b);}else{if(_89.form){_20.mixin(cfg,_89.form,_8a);window.mx.ui.openForm(cfg.path,cfg,_8b);}else{_15.error(_23+".execute: unknown action type");}}};this.action=function(_8c,_8d,_8e){_8d=_8d||{};_20.setObject("params.actionname",_8c,_8d);var _8f=_8d.callback,_90=_8d.error,_91=_20.mixin({caller:_2f},_8d.store),_92;if("progress" in _8d){_92=this.getProgress(_8d.progressMsg,_8d.progress=="modal");_92.start();}window.mx.data.action({callback:function(_93){_8f&&_8f.call(_8e,_93);_92&&_92.stop();},error:function(e){_92&&_92.stop();if(_90){_90.call(_8e,e);}else{if(e&&!(e instanceof _11)){window.mx.onError(e);}}},context:_8d.context,async:_8d.async,params:_8d.params,store:_91});};this.back=function(){_9.back();};this.showProgress=function(msg,_94){return _26.add(msg||"",_94);};this.hideProgress=function(id){return _26.remove(id);};this.showUnderlay=function(_95){_27.show(_95);};this.hideUnderlay=function(_96){_27.hide(_96);};this.getProgress=function(msg,_97){var id,_98;return {start:function(){if(_98){return id;}else{_98=true;return id=_22.showProgress(msg,_97);}},stop:function(){if(_98){_98=false;_22.hideProgress(id);}}};};function _99(_9a){if(!_24){var _9b=window.mx.session.getConfig("profile");if(_9b){_2d=_9b.name.toLowerCase();_17.add(document.body,"profile-"+_2d);document.title=_9b.title;}}if(!window.i18nMap){window.mx.server.get({url:"js/login_i18n.js",handleAs:"javascript",load:_9a});}else{_9a();}};this.showLogin=function(_9c){if(_9c=="402"){this.exception(window.i18nMap.http402);return;}var _9d=_1a("originURI");if(_9d){_1a("originURI",null,{expires:-1});window.mx.redirect(_9d);return;}_99(function(){new _6({messageCode:_9c}).show();});};this.openForm=function(_9e,_9f,_a0){if(_9f.domNode){this.openFormInNode(_9e,_9f.domNode,_9f.context,_9f.params,_9f.callback?_20.hitch(_a0,_9f.callback):null,_9f.error?_20.hitch(_a0,_9f.error):null);}else{if(/popup|modal/.test(_9f.location)){_9f.modal=_9f.location=="modal";this.openFormInPopup(_9e,_9f,_9f.context,_9f.params,_9f.callback?_20.hitch(_a0,_9f.callback):null,_9f.error?_20.hitch(_a0,_9f.error):null);}else{if(_9f.callback||_9f.error){throw new Error("Success and error callbacks are not supported for openFormInContent");}this.openFormInContent(_9e,_9f.title,_9f.context,_9f.params);}}};this.reload=function(_a1){var _a2=mxui.currentForm;if(!_a2){throw new _12("Trying to refresh the content form but no form is yet available.");}_a2.reload(_a1);};this.getTemplate=function(id,_a3){var _a4=_2f.widgetTemplates[id];return _a4&&_20.clone(_a4[_a3]);};this.applyToNode=function(_a5,_a6){var _a7=_16.byNode(_a6);switch(_a5){case "show":if(_a7&&_a7.show){_a7.show();}else{_a6.style.display="";}break;case "hide":if(_a7&&_a7.hide){_a7.hide();}else{_a6.style.display="none";}break;case "disable":if(_a7){_a7.set("disabled",true);}break;case "enable":if(_a7){_a7.set("disabled",false);}break;}};this.makeShareId=function(_a8,_a9){return "context_seed_"+_a9+"_"+_a8.hash;};var _aa={};_aa[_c.validation.NOT_INTEGER]="invalid_number";_aa[_c.validation.RANGE_INTEGER]="range_integer";_aa[_c.validation.RANGE_LONG]="range_long";_aa[_c.validation.RANGE_DECIMAL]="range_decimal";_aa[_c.validation.RANGE_NUMBER]="range_number";this.validate=function(_ab,_ac){var _ad=_c.validate(_ab,_ac);if(_ad===_c.validation.OK){return null;}return this.translate("mendix.lib.Validations",_aa[_ad]);};this.validations=function(_ae){if(_ae.length){var _af=[];for(var i=0,val;val=_ae[i];i++){var _b0=val.getFields();for(var x=0,_b1;_b1=_b0[x];x++){_af.push(_b1.reason);}}this.error(_af.join("\n"));}};this.translate=function(_b2,str,_b3,_b4){var map=_20.getObject(_b2,false,_2a);if(!map||!map[str]){return _b4||"[No translation]";}return _84(map[str],_b3);};this.extractMessage=function(msg){if(typeof msg=="object"){if(msg.description){return msg.description;}else{if(msg.message){return msg.message;}}}return msg;};this.info=function(msg,_b5){_4d(msg,"info").show(_b5);};this.warning=function(msg,_b6){_4d(msg,"warning").show(_b6);};this.error=function(msg,_b7){_4d(msg,"error").show(_b7);};this.exception=function(msg){this.error(msg,true);};this.confirmation=function(_b8){new _8({content:_b8.content,proceed:_b8.proceed||this.translate("mxui.widget.DialogMessage","ok"),cancel:_b8.cancel||this.translate("mxui.widget.DialogMessage","cancel"),handler:_b8.handler}).show();};this.encodeUrlHash=function(_b9,_ba,_bb){var _bc=_b9.substr(0,_b9.lastIndexOf(".")),_bd=_ba.toQuery();return "!/"+_bc+(_bd?"?"+_bd:"")+";"+_bb;};this.decodeUrlHash=function(_be){if(_be.charAt(0)=="!"){var _bf=_be.lastIndexOf(";");_be=_be.slice(2,_bf!=-1?_bf:_be.length);if(/^\w+(\/\w+(\?\w+\.\w+\=\d+(&\w+\.\w+\=\d+)*)?|\.\w+(\?\d+(&\d+)*)?)$/.test(_be)){var _c0=_be.split("?"),_c1=_c0[0],_c2=_c0[1],_c3=new _13(),_c4,_c5;if(_c1.indexOf("/")!=-1){if(_c2){_c4=_c2.split("&");for(var i=_c4.length;_c5=_c4[--i];){var _c6=_c5.split("=");_c3.setContext(_c6[0],_c6[1]);}}return function(_c7){window.mx.ui.openFormInContent(_c1+".page.xml","",_c3);_c7&&_c7();};}else{if(_c2){_c4=_c2.split("&");for(var j=0;_c5=_c4[j++];){_c3.setContext(" ",_c5);}}return function(_c8){window.mx.data.action({context:_c3,params:{actionname:_c1},callback:_c8,error:function(e){window.mx.onError(e);_c8&&_c8();}});};}}else{return null;}}else{return null;}};this.downloadFile=function(_c9){var obj=_c9?_c9.mxobject:null,url;if(obj&&obj.get2("HasContents")){url="file?guid="+obj.getGuid();}else{if(_c9.url){url=_c9.url;}}if(!url){return;}if(_c9.target==="window"||_ca()){if(_cb()){new _8({caption:this.translate("mendix.widget.DialogMessage","file_download"),content:this.translate("mendix.widget.DialogMessage","file_download_message"),proceed:this.translate("mendix.widget.MxDataView","download"),cancel:this.translate("mendix.widget.DialogMessage","cancel"),handler:function(){window.open(url,"mendix_file");}}).show(true);}else{window.open(url,"mendix_file");}}else{_a.download({url:window.mx.appUrl+url,target:_c9.target,error:function(err){if(_c9.error){_c9.error(err);}else{window.mx.onError(err);}}});}function _ca(){var _cc=_1b("chrome")&&typeof window.externalHost!=="undefined";var _cd=_2d!="desktop";return _cc||_cd;};function _cb(){return _1b("ie")==8||(_1b("safari")&&(_1b("iphone")||_1b("ipad")))||_1b("windowsphone");};};this.getFirstDayOfWeek=function(){return window.mx.session.getConfig("uiconfig.firstDayOfWeek");};};return UI;});