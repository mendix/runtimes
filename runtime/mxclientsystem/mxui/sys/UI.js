/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/sys/UI",["mxui/lib/form/FormFactory","mxui/lib/form/ContentForm","mxui/widget/DialogMessage","mxui/widget/Progress","mxui/widget/Underlay","mxui/widget/LoginDialog","mxui/widget/DemoUserSwitcher","mxui/widget/ConfirmationDialog","mxui/sys/history","mxui/io/iframe","mxui/dom","mendix/validator","mendix/lib/ServerError","mendix/lib/ConnectionError","mendix/lib/DescribedError","mendix/lib/DescribedServerError","mendix/lib/NavigationError","mendix/lib/ValidationError","mendix/lib/Error","mendix/lib/MxContext","mendix/lang","mendix/logger","big/big","fastclick/fastclick","dijit/registry","dojo/dom-class","dojo/on","dojo/aspect","dojo/cookie","dojo/has","dojo/ready","dojo/i18n","dojo/_base/array","dojo/_base/kernel","dojo/_base/lang","dojo/_base/config","require","dojox/date/buddhist","dojox/date/buddhist/locale"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,Big,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24){function UI(){var _25=this,_26="mxui.sys.UI",_27=false,_28=null,_29=null,_2a=null,_2b=false,_2c="en_US",_2d=null,_2e=null,_2f="",_30="desktop",_31="Mendix 5",_32=null,_33,_34={"HALF_UP":1,"HALF_EVEN":2};var _35={buddhist:/th$/,hebrew:null,islamic:null};this.startup=function(_36){var _37=window.mx.session.getConfig().uiconfig;_38(_37);_39(_37);_3a(_37);_3b(_37);_3c(_37.roundingmode);_3d();_1a(window,"resize",_22.hitch(_25,"resize"));_3e();_3f();_40(_37.modules);_41();_42(function(){_2b=document.body.dir.toLowerCase()=="rtl";_43();_27=true;_36();});};function _38(_44){_2e=_44.menubars;_15.forEach(_2e,function(_45,_46){_47(_45,_46+"-");});function _47(_48,_49){_20.forEach(_48,function(_4a,_4b){_4a.id=_49+_4b;if(_4a.items){_47(_4a.items,_4a.id+"-");}});};};function _39(_4c){_2c=_4c.locale;_21.locale=_1f.normalizeLocale(_2c.replace("_","-"));_2d=_4c.translations;_4d();_4e();};function _3a(_4f){_30=_4f.profile.name.toLowerCase();_31=_4f.profile.title;document.title=_31;_19.add(document.body,"profile-"+_30);};function _3b(){var _50=_20.map(window.mx.session.getUserRoles("Name"),function(_51){return "role-"+_51.toLowerCase();});_19.add(document.body,_50);};function _3c(_52){Big.RM=_52?_34[_52]:_34.HALF_EVEN;};function _3d(){_1b.before(window.mx,"onError",function(e){var msg;if(e instanceof _f||e instanceof _10){msg=e.message;}else{if(e instanceof _e){msg=_25.translate("mxui.sys.UI","connection_error");}else{if(e instanceof _d){msg=_25.translate("mxui.sys.UI","internal_error");}else{msg=_25.translate("mxui.sys.UI","internal_error");}}}_28&&_28.hide();_28=_53(msg,"error");_28.show(true);_16.error(e);});};function _3e(){_33=new _1();_32=new _2();_1b.after(_32,"onNavigation",function(){document.title=_31+" - "+_32.title;_19.add(document.body,"mx-no-scroll");setTimeout(function(){_19.remove(document.body,"mx-no-scroll");},0);});_29=new _4();_2a=new _5();var _54=mx.session.getConfig("demoUsers");if(_54){_20.forEach(_54,function(_55){_55.active=(_55.name==window.mx.session.getUserName());});var _56=new _7({demoUsers:_54});document.body.appendChild(_56.domNode);_56.startup();}};function _43(){var _57=document.getElementById("content");if(!_57){_25.exception("You are using an outdated index page. Please update your index page. See index-example.html in the deployment directory for an example of what the index page should look like.");return;}_57.appendChild(_32.domNode);};function _3f(){_9.init();_1b.after(_32,"dispose",_9.back);var _58=null;_1b.after(_9,"onNavigation",function(_59,_5a){if(!_5a){return;}var _5b=_5a.formParams;if(!_58){_58=_25.showProgress();}if(_59){_32.onPersistViewState(_59.viewState);}if(!_5a.viewState){_5a.viewState={};}_32.navigateTo(_5b.path,_5b.title,_5b.context,_5b.params,_22.clone(_5a.viewState),function(){_25.hideProgress(_58);_58=null;},function(e){if(e instanceof _11){}else{_25.hideProgress(_58);_58=null;window.mx.onError(e);}});},true);};function _42(_5c){var _5d=window.mx.session.getConfig("uiconfig.widgets");if(_5d.length>0){_5e();dojo.registerModulePath("widgets",window.mx.modulePath);_20.forEach(_5d,function(_5f){var _60=_5f.split(".")[0];dojo.registerModulePath(_60,window.mx.modulePath+_60);});var _61=["widgets/widgets"];_24(_61);}_1e(_5c);};function _5e(){var _62=document.getElementsByTagName("head")[0],_63=_62.querySelector("link[href*='css/theme.css']"),_64=_b.createCssLink("widgets/widgets.css");if(_63){_62.insertBefore(_64,_63);}else{_62.appendChild(_64);}};function _40(_65){for(var i=0,_66;_66=_65[i];i++){try{dojo["require"](_66+"."+_66);}catch(e){_16.error(_26+".getModules: failed loading module "+_66);}}};function _4e(){var _67=_25.getCalendarSystem();switch(_67){case "gregorian":_2f="dojo.date";return;case "buddhist":_2f="dojox.date.buddhist";dojo["require"](_2f);dojo["require"](_2f+".locale");return;default:throw new Error("Unsupported date package: "+_67);}};function _41(){if(!_1d("windowsphone")){_17.attach(document.body);}if(_1d("ie")){if(JSON.stringify(document.createElement("input").value)==="\"null\""){var _68=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").get;Object.defineProperty(HTMLInputElement.prototype,"value",{get:function(){var _69=_68.call(this);return _69===""?"":_69;}});}_1a(document,"click",function(e){var _6a=e.target;if(_6a.nodeName=="TEXTAREA"||_6a.nodeName=="INPUT"&&(_6a.type=="text"||_6a.type=="password")){if(document.activeElement!=_6a){var sel=_b.getSelection(_6a);try{_6a.focus();}catch(ex){}_b.selectTextRange(_6a,sel.start,sel.end);}}if(_1d("ie")<=8){if(_6a.nodeName=="INPUT"&&(_6a.type==="checkbox"||_6a.type==="radio")){_b.dispatchEvent(_6a,"onchange");}}});}};function _4d(){var map={"mendix":"mxui","mendix.core.MxServer":"mendix.core.Server","mendix.widget.MxDataView":"mendix.widget.MxFormView","mendix.widget.MxNavigator":"mendix.widget.Navigator","mendix.widget.MxDataGrid":"mendix.widget.DataGrid","mendix.widget.DataGrid.true":"mxui.common.true","mendix.widget.DataGrid.false":"mxui.common.false","mendix.core.MxServer.invalid_session":"mendix.session.session_expired","mobile.widget.Dialog.ok":"mxui.widget.DialogMessage.ok","mxui.widget.Dialog.error":"mxui.widget.DialogMessage.error","mxui.widget.Dialog.information":"mxui.widget.DialogMessage.info","mxui.widget.Dialog.warning":"mxui.widget.DialogMessage.warning","mxui.widget.Dialog.confirmation":"mxui.widget.ConfirmationDialog.caption","mobile.widget":"mxui.widget","mobile.sys":"mxui.sys"};for(var _6b in map){var _6c=_6b.split("."),_6d=map[_6b].split("."),_6e=_6c.pop(),_6f=_6d.pop(),_70=_2d,_71=_70,_72;while(_70&&(_72=_6c.shift())){_70=_70[_72];}if(_70){while(_72=_6d.shift()){_71=_71[_72]=_71[_72]||{};}if(_71[_6f]){_22.mixin(_71[_6f],_70[_6e]);}else{_71[_6f]=_70[_6e];}}}};function _53(msg,_73){return new _3({type:_73,content:""+_25.extractMessage(msg)});};this.openFormInContent=function(_74,_75,_76,_77){_9.push({formParams:{path:_74,title:_75,context:_76||new _14(),params:_77||{}}});};this.openFormInPopup=function(_78,_79,_7a,_7b,_7c,_7d){var _7e=this,pid=this.showProgress();_33.openPopupForm(_78,_79,(_7a||new _14()),(_7b||{}),function(_7f){_7e.hideProgress(pid);_7c&&_7c(_7f);},function(e){_7e.hideProgress(pid);_7d?_7d(e):window.mx.onError(e);});};this.openFormInNode=function(_80,_81,_82,_83,_84,_85){var _86=this,pid=this.showProgress();_33.openInlineForm(_80,_81,(_82||new _14()),(_83||{}),function(_87){_86.hideProgress(pid);_84&&_84(_87);},function(e){_86.hideProgress(pid);_85?_85(e):window.mx.onError(e);});};function _88(fmt,_89){if(!_89){return fmt;}else{if(!(_89 instanceof Array)){_89=[_89];}}return fmt.replace(/\{(\d+)\}/g,function(_8a,n){var _8b=_89[n-1];if(_8b!=null){return _8b;}else{return _8a;}});};this.toString=function(){return _26;};this.getCurrentForm=function(){return _32;};this.getProfile=function(){return _30;};this.getMenu=function(_8c){return _2e[_8c]||[];};this.getDatePackage=function(){return _2f;};this.getCalendarSystem=function(){for(var m in _35){var re=_35[m];if(re&&re.test(_21.locale.toLowerCase())){return m;}}return "gregorian";};this.isRtl=function(){return _2b;};this.resize=function(){_32.resize();};this.execute=function(_8d,_8e,_8f){var _90=_22.mixin({},_8d.microflow||_8d.form,_8e);if(_90.allowedRoles&&!window.mx.session.hasSomeRole(_90.allowedRoles)){if(window.mx.session.isGuest()){this.showLogin();}else{window.mx.onError(new _f("Unable to execute action because you do not have sufficient permissions."));}return;}if(_8d.microflow){this.action(_90.name,_90,_8f);}else{if(_8d.form){this.openForm(_90.path,_90,_8f);}else{_16.error(_26+".execute: unknown action type");}}};this.action=function(_91,_92,_93){_92=_92||{};_22.setObject("params.actionname",_91,_92);var _94;if("progress" in _92){_94=this.getProgress(_92.progressMsg,_92.progress=="modal");_94.start();}window.mx.data.action({callback:_95(_92.callback),error:_95(function(e){if(_92.error){_92.error.call(_93,e);}else{if(!(e instanceof _12)){window.mx.onError(e);}}}),context:_92.context,async:_92.async,params:_92.params,store:_22.mixin({caller:_32},_92.store)});function _95(_96){return function(){try{if(_96){_96.apply(_93,arguments);}}finally{if(_94){_94.stop();}if(_92.complete){_92.complete.apply(_93);}}};};};this.back=function(){_9.back();};this.showProgress=function(msg,_97){return _29.add(msg||"",_97);};this.hideProgress=function(id){return _29.remove(id);};this.showUnderlay=function(_98){_2a.show(_98);};this.hideUnderlay=function(_99){_2a.hide(_99);};this.getProgress=function(msg,_9a){var id,_9b;return {start:function(){if(_9b){return id;}else{_9b=true;return id=_25.showProgress(msg,_9a);}},stop:function(){if(_9b){_9b=false;_25.hideProgress(id);}}};};function _9c(_9d){if(!_27){var _9e=window.mx.session.getConfig("profile");if(_9e){_30=_9e.name.toLowerCase();_19.add(document.body,"profile-"+_30);document.title=_9e.title;}}if(!window.i18nMap){window.mx.server.get({url:"js/login_i18n.js",handleAs:"javascript",load:_9d});}else{_9d();}};this.showLogin=function(_9f){if(_9f=="402"){this.exception(window.i18nMap.http402);return;}var _a0=_1c("originURI");if(_a0){_1c("originURI",null,{expires:-1});window.mx.redirect(_a0);return;}_9c(function(){new _6({messageCode:_9f}).show();});};this.openForm=function(_a1,_a2,_a3){if(_a2.domNode){this.openFormInNode(_a1,_a2.domNode,_a2.context,_a2.params,_a2.callback?_22.hitch(_a3,_a2.callback):null,_a2.error?_22.hitch(_a3,_a2.error):null);}else{if(/popup|modal/.test(_a2.location)){_a2.modal=_a2.location=="modal";this.openFormInPopup(_a1,_a2,_a2.context,_a2.params,_a2.callback?_22.hitch(_a3,_a2.callback):null,_a2.error?_22.hitch(_a3,_a2.error):null);}else{if(_a2.callback||_a2.error){throw new Error("Success and error callbacks are not supported for openFormInContent");}this.openFormInContent(_a1,_a2.title,_a2.context,_a2.params);}}};this.reload=function(_a4){var _a5=mxui.currentForm;if(!_a5){throw new _13("Trying to refresh the content form but no form is yet available.");}_a5.reload(_a4);};this.getTemplate=function(id,_a6){var _a7=_32.widgetTemplates[id];return _a7&&_22.clone(_a7[_a6]);};this.applyToNode=function(_a8,_a9){var _aa=_18.byNode(_a9);switch(_a8){case "show":if(_aa&&_aa.show){_aa.show();}else{_a9.style.display="";}break;case "hide":if(_aa&&_aa.hide){_aa.hide();}else{_a9.style.display="none";}break;case "disable":_ab(true);break;case "enable":_ab(false);break;}function _ab(_ac){if(_aa){_aa.set("disabled",_ac);}else{var _ad=_18.findWidgets(_a9);_20.forEach(_ad,function(_ae){_ae.set("disabled",_ac);});}};};this.makeShareId=function(_af,_b0){return "context_seed_"+_b0+"_"+_af.hash;};var _b1={};_b1[_c.validation.NOT_INTEGER]="invalid_number";_b1[_c.validation.RANGE_INTEGER]="range_integer";_b1[_c.validation.RANGE_LONG]="range_long";_b1[_c.validation.RANGE_DECIMAL]="range_decimal";_b1[_c.validation.RANGE_NUMBER]="range_number";this.validate=function(_b2,_b3){var _b4=_c.validate(_b2,_b3);if(_b4===_c.validation.OK){return null;}return this.translate("mendix.lib.Validations",_b1[_b4]);};this.validations=function(_b5){if(_b5.length){var _b6=[];for(var i=0,val;val=_b5[i];i++){var _b7=val.getFields();for(var x=0,_b8;_b8=_b7[x];x++){_b6.push(_b8.reason);}}this.error(_b6.join("\n"));}};this.translate=function(_b9,str,_ba,_bb){var map=_22.getObject(_b9,false,_2d);if(!map||!map[str]){return _bb||"[No translation]";}return _88(map[str],_ba);};this.extractMessage=function(msg){if(typeof msg=="object"){if(msg.description){return msg.description;}else{if(msg.message){return msg.message;}}}return msg;};this.info=function(msg,_bc){_53(msg,"info").show(_bc);};this.warning=function(msg,_bd){_53(msg,"warning").show(_bd);};this.error=function(msg,_be){_53(msg,"error").show(_be);};this.exception=function(msg){this.error(msg,true);};this.confirmation=function(_bf){new _8({content:_bf.content,proceed:_bf.proceed||this.translate("mxui.widget.DialogMessage","ok"),cancel:_bf.cancel||this.translate("mxui.widget.DialogMessage","cancel"),handler:_bf.handler}).show();};this.encodeUrlHash=function(_c0,_c1,_c2){var _c3=_c0.substr(0,_c0.lastIndexOf(".")),_c4=_c1.toQuery();return "!/"+_c3+(_c4?"?"+_c4:"")+";"+_c2;};this.decodeUrlHash=function(_c5){if(_c5.charAt(0)=="!"){var _c6=_c5.lastIndexOf(";");_c5=_c5.slice(2,_c6!=-1?_c6:_c5.length);if(/^\w+(\/\w+(\?\w+\.\w+\=\d+(&\w+\.\w+\=\d+)*)?|\.\w+(\?\d+(&\d+)*)?)$/.test(_c5)){var _c7=_c5.split("?"),_c8=_c7[0],_c9=_c7[1],_ca=new _14(),_cb,_cc;if(_c8.indexOf("/")!=-1){if(_c9){_cb=_c9.split("&");for(var i=_cb.length;_cc=_cb[--i];){var _cd=_cc.split("=");_ca.setContext(_cd[0],_cd[1]);}}return function(_ce){window.mx.ui.openFormInContent(_c8+".page.xml","",_ca);_ce&&_ce();};}else{if(_c9){_cb=_c9.split("&");for(var j=0;_cc=_cb[j++];){_ca.setContext(" ",_cc);}}return function(_cf){window.mx.data.action({context:_ca,params:{actionname:_c8},callback:_cf,error:function(e){window.mx.onError(e);_cf&&_cf();}});};}}else{return null;}}else{return null;}};this.canMoveBack=function(){return !_9.isAtBeginning();};this.downloadFile=function(_d0){var obj=_d0?_d0.mxobject:null,url;if(obj&&obj.get2("HasContents")){url="file?guid="+obj.getGuid();}else{if(_d0.url){url=_d0.url;}}if(!url){return;}if(_d0.target==="window"||_d1()){if(_d2()){new _8({caption:this.translate("mendix.widget.DialogMessage","file_download"),content:this.translate("mendix.widget.DialogMessage","file_download_message"),proceed:this.translate("mendix.widget.MxDataView","download"),cancel:this.translate("mendix.widget.DialogMessage","cancel"),handler:function(){window.open(window.mx.appUrl+url,"mendix_file");}}).show(true);}else{window.open(window.mx.appUrl+url,"mendix_file");}}else{_a.download({url:window.mx.appUrl+url,target:_d0.target,error:function(err){if(_d0.error){_d0.error(err);}else{window.mx.onError(err);}}});}function _d1(){var _d3=_1d("chrome")&&typeof window.externalHost!=="undefined";var _d4=_1d("mobile");return _d3||_d4;};function _d2(){return _1d("ie")==8||((_1d("iphone")||_1d("ipad"))&&(_1d("safari")||window.navigator.standalone))||_1d("windowsphone");};};this.getFirstDayOfWeek=function(){return window.mx.session.getConfig("uiconfig.firstDayOfWeek");};};return UI;});