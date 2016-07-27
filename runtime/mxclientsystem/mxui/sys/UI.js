/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/sys/UI",["mxui/widget/DialogMessage","mxui/widget/Progress","mxui/widget/Underlay","mxui/widget/LoginDialog","mxui/widget/DemoUserSwitcher","mxui/widget/ConfirmationDialog","mxui/sys/history","mxui/io/iframe","mxui/dom","mendix/validator","mendix/lib/ServerError","mendix/lib/ConnectionError","mendix/lib/DescribedError","mendix/lib/DescribedServerError","mendix/lib/NavigationError","mendix/lib/ValidationError","mendix/lib/Error","mendix/lib/MxContext","mendix/lang","mendix/logger","webcore/url-helpers","big/big","fastclick/fastclick","dijit/registry","dojo/dom-class","dojo/on","dojo/aspect","dojo/cookie","dojo/has","dojo/ready","dojo/i18n","dojo/_base/array","dojo/_base/kernel","dojo/_base/lang","dojo/_base/config","require","dojox/date/buddhist","dojox/date/buddhist/locale"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,Big,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23){function UI(_24){_24=_24||{};var _25=this,_26="mxui.sys.UI",_27=false,_28=null,_29=null,_2a=null,_2b=false,_2c="en_US",_2d=null,_2e=null,_2f="",_30="desktop",_31={"HALF_UP":1,"HALF_EVEN":2};var _32={buddhist:/th$/,hebrew:null,islamic:null};var _33=_24.openUrlFn||function(url,_34,_35){window.open(url,_35);};this.startup=function(_36){var _37=window.mx.session.getConfig().uiconfig;_38(_37);_39(_37);_3a(_37);_3b(_37);_3c(_37.roundingmode);_3d();_19(window,"resize",_21.hitch(_25,"resize"));_3e();_3f(_37.modules);_40();_41(function(){_2b=document.body.dir.toLowerCase()=="rtl";_27=true;_36();});};function _38(_42){_2e=_42.menubars;_13.forEach(_2e,function(_43,_44){_45(_43,_44+"-");});function _45(_46,_47){_1f.forEach(_46,function(_48,_49){_48.id=_47+_49;if(_48.items){_45(_48.items,_48.id+"-");}});};};function _39(_4a){_2c=_4a.locale;_20.locale=_1e.normalizeLocale(_2c.replace("_","-"));_2d=_4a.translations;_4b();_4c();};function _3a(_4d){_30=_4d.profile.name.toLowerCase();_18.add(document.body,"profile-"+_30);};function _3b(){var _4e=_1f.map(window.mx.session.getUserRoles("Name"),function(_4f){return "role-"+_4f.toLowerCase();});_18.add(document.body,_4e);};function _3c(_50){Big.RM=_50?_31[_50]:_31.HALF_EVEN;};function _3d(){_1a.before(window.mx,"onError",function(e){var msg;if(e instanceof _d||e instanceof _e){msg=e.message;}else{if(e instanceof _c){msg=_25.translate("mxui.sys.UI","connection_error");}else{if(e instanceof _b){msg=_25.translate("mxui.sys.UI","internal_error");}else{msg=_25.translate("mxui.sys.UI","internal_error");}}}_28&&_28.hide();_28=_51(msg,"error");_28.show(true);});};function _3e(){_29=new _2();_2a=new _3();var _52=mx.session.getConfig("demoUsers");if(_52){_1f.forEach(_52,function(_53){_53.active=(_53.name==window.mx.session.getUserName());});var _54=new _5({demoUsers:_52});document.body.appendChild(_54.domNode);_54.startup();}};function _41(_55){var _56=window.mx.session.getConfig("uiconfig.widgets");if(_56.length>0){_57();dojo.registerModulePath("widgets",window.mx.modulePath);_1f.forEach(_56,function(_58){var _59=_58.split(".")[0];dojo.registerModulePath(_59,window.mx.modulePath+_59);});var _5a=["widgets/widgets"];_23(_5a);}_1d(_55);};function _57(){var _5b=document.querySelector("head"),_5c=_5b.querySelector("link[href*='mxui/ui/mxui.css']"),_5d=_9.createCssLink("widgets/widgets.css");if(_5c&&_5c.nextElementSibling){_5b.insertBefore(_5d,_5c.nextElementSibling);}else{_5b.appendChild(_5d);}};function _3f(_5e){for(var i=0,_5f;_5f=_5e[i];i++){try{dojo["require"](_5f+"."+_5f);}catch(e){_14.error(_26+".getModules: failed loading module "+_5f);}}};function _4c(){var _60=_25.getCalendarSystem();switch(_60){case "gregorian":_2f="dojo.date";return;case "buddhist":_2f="dojox.date.buddhist";dojo["require"](_2f);dojo["require"](_2f+".locale");return;default:throw new Error("Unsupported date package: "+_60);}};function _40(){if(!_1c("windowsphone")){_16.attach(document.body);}if(_1c("ie")){if(JSON.stringify(document.createElement("input").value)==="\"null\""){var _61=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").get;Object.defineProperty(HTMLInputElement.prototype,"value",{get:function(){var _62=_61.call(this);return _62===""?"":_62;}});}_19(document,"click",function(e){var _63=e.target;if(_63.nodeName=="TEXTAREA"||_63.nodeName=="INPUT"&&(_63.type=="text"||_63.type=="password")){if(document.activeElement!=_63){var sel=_9.getSelection(_63);try{_63.focus();}catch(ex){}_9.selectTextRange(_63,sel.start,sel.end);}}if(_1c("ie")<=8){if(_63.nodeName=="INPUT"&&(_63.type==="checkbox"||_63.type==="radio")){_9.dispatchEvent(_63,"onchange");}}});}};function _4b(){var map={"mendix":"mxui","mendix.core.MxServer":"mendix.core.Server","mendix.widget.MxDataView":"mendix.widget.MxFormView","mendix.widget.MxNavigator":"mendix.widget.Navigator","mendix.widget.MxDataGrid":"mendix.widget.DataGrid","mendix.widget.DataGrid.true":"mxui.common.true","mendix.widget.DataGrid.false":"mxui.common.false","mendix.core.MxServer.invalid_session":"mendix.session.session_expired","mobile.widget.Dialog.ok":"mxui.widget.DialogMessage.ok","mxui.widget.Dialog.error":"mxui.widget.DialogMessage.error","mxui.widget.Dialog.information":"mxui.widget.DialogMessage.info","mxui.widget.Dialog.warning":"mxui.widget.DialogMessage.warning","mxui.widget.Dialog.confirmation":"mxui.widget.ConfirmationDialog.caption","mobile.widget":"mxui.widget","mobile.sys":"mxui.sys"};for(var _64 in map){var _65=_64.split("."),_66=map[_64].split("."),_67=_65.pop(),_68=_66.pop(),_69=_2d,_6a=_69,_6b;while(_69&&(_6b=_65.shift())){_69=_69[_6b];}if(_69){while(_6b=_66.shift()){_6a=_6a[_6b]=_6a[_6b]||{};}if(_6a[_68]){_21.mixin(_6a[_68],_69[_67]);}else{_6a[_68]=_69[_67];}}}};function _51(msg,_6c){return new _1({type:_6c,content:""+_25.extractMessage(msg)});};function _6d(fmt,_6e){if(!_6e){return fmt;}else{if(!(_6e instanceof Array)){_6e=[_6e];}}return fmt.replace(/\{(\d+)\}/g,function(_6f,n){var _70=_6e[n-1];if(_70!=null){return _70;}else{return _6f;}});};this.toString=function(){return _26;};this.getProfile=function(){return _30;};this.getMenu=function(_71){return _2e[_71]||[];};this.getDatePackage=function(){return _2f;};this.getCalendarSystem=function(){for(var m in _32){var re=_32[m];if(re&&re.test(_20.locale.toLowerCase())){return m;}}return "gregorian";};this.isRtl=function(){return _2b;};this.resize=function(){window.mx.router.getContentForm().resize();};this.execute=function(_72,_73,_74){var _75=_21.mixin({},_72.microflow||_72.form,_73);if(_75.allowedRoles&&!window.mx.session.hasSomeRole(_75.allowedRoles)){if(window.mx.session.isGuest()){this.showLogin();}else{window.mx.onError(new _d("Unable to execute action because you do not have sufficient permissions."));}return;}if(_72.microflow){this.action(_75.name,_75,_74);}else{if(_72.form){this.openForm(_75.path,_75,_74);}else{_14.error(_26+".execute: unknown action type");}}};this.action=function(_76,_77,_78){_77=_77||{};_21.setObject("params.actionname",_76,_77);var _79;if("progress" in _77){_79=this.getProgress(_77.progressMsg,_77.progress=="modal");_79.start();}window.mx.data.action({callback:_7a(_77.callback),error:_7a(function(e){if(_77.error){_77.error.call(_78,e);}else{if(!(e instanceof _10)){window.mx.onError(e);}}}),context:_77.context,async:_77.async,params:_77.params,store:_21.mixin({caller:window.mx.router.getContentForm()},_77.store)});function _7a(_7b){return function(){try{if(_7b){_7b.apply(_78,arguments);}}finally{if(_79){_79.stop();}if(_77.complete){_77.complete.apply(_78);}}};};};this.back=function(){_7.back();};this.showProgress=function(msg,_7c){return _29.add(msg||"",_7c);};this.hideProgress=function(id){return _29.remove(id);};this.showUnderlay=function(_7d){_2a.show(_7d);};this.hideUnderlay=function(_7e){_2a.hide(_7e);};this.getProgress=function(msg,_7f){var id,_80;return {start:function(){if(_80){return id;}else{_80=true;return id=_25.showProgress(msg,_7f);}},stop:function(){if(_80){_80=false;_25.hideProgress(id);}}};};function _81(_82){if(!_27){var _83=window.mx.session.getConfig("profile");if(_83){_30=_83.name.toLowerCase();_18.add(document.body,"profile-"+_30);document.title=_83.title;}}if(!window.i18nMap){window.mx.server.get({url:"js/login_i18n.js",handleAs:"javascript",load:_82});}else{_82();}};this.showLogin=function(_84){if(_84=="402"){this.exception(window.i18nMap.http402);return;}var _85=_1b("originURI");if(_85){_1b("originURI",null,{expires:-1});window.mx.redirect(_85);return;}_81(function(){if(_24.customLoginFn){var _86=window.mx.session.getConfig("autologin_support");_24.customLoginFn(_84,_86);}else{new _4({messageCode:_84}).show();}});};this.openForm=function(_87,_88,_89){if(_88.domNode){window.mx.router.openFormInNode(_87,_88.domNode,_88.context,_88.params,_88.callback?_21.hitch(_89,_88.callback):null,_88.error?_21.hitch(_89,_88.error):null);}else{if(/popup|modal/.test(_88.location)){_88.modal=_88.location=="modal";window.mx.router.openFormInPopup(_87,_88,_88.context,_88.params,_88.callback?_21.hitch(_89,_88.callback):null,_88.error?_21.hitch(_89,_88.error):null);}else{if(_88.callback||_88.error){throw new Error("Success and error callbacks are not supported for openFormInContent");}window.mx.router.openFormInContent(_87,_88.title,_88.context,_88.params);}}};this.reload=function(_8a){var _8b=window.mx.router.getContentForm();if(!_8b){throw new _11("Trying to refresh the content form but no form is yet available.");}_8b.reload(_8a);};this.getTemplate=function(id,_8c){return window.mx.router.getTemplate(id,_8c);};this.applyToNode=function(_8d,_8e){var _8f=_17.byNode(_8e);switch(_8d){case "show":if(_8f&&_8f.show){_8f.show();}else{_8e.style.display="";}break;case "hide":if(_8f&&_8f.hide){_8f.hide();}else{_8e.style.display="none";}break;case "disable":_90(true);break;case "enable":_90(false);break;}function _90(_91){if(_8f){_8f.set("disabled",_91);}else{var _92=_17.findWidgets(_8e);_1f.forEach(_92,function(_93){_93.set("disabled",_91);});}};};this.makeShareId=function(_94,_95){return "context_seed_"+_95+"_"+_94.hash;};var _96={};_96[_a.validation.NOT_INTEGER]="invalid_number";_96[_a.validation.RANGE_INTEGER]="range_integer";_96[_a.validation.RANGE_LONG]="range_long";_96[_a.validation.RANGE_DECIMAL]="range_decimal";_96[_a.validation.RANGE_NUMBER]="range_number";this.validate=function(_97,_98){var _99=_a.validate(_97,_98);if(_99===_a.validation.OK){return null;}return this.translate("mendix.lib.Validations",_96[_99]);};this.validations=function(_9a){if(_9a.length){var _9b=[];for(var i=0,val;val=_9a[i];i++){var _9c=val.getFields();for(var x=0,_9d;_9d=_9c[x];x++){_9b.push(_9d.reason);}}this.error(_9b.join("\n"));}};this.translate=function(_9e,str,_9f,_a0){var map=_21.getObject(_9e,false,_2d);if(!map||!map[str]){return _a0||"[No translation]";}return _6d(map[str],_9f);};this.extractMessage=function(msg){if(typeof msg=="object"){if(msg.description){return msg.description;}else{if(msg.message){return msg.message;}}}return msg;};this.info=function(msg,_a1){_51(msg,"info").show(_a1);};this.warning=function(msg,_a2){_51(msg,"warning").show(_a2);};this.error=function(msg,_a3){_51(msg,"error").show(_a3);};this.exception=function(msg){this.error(msg,true);};this.confirmation=function(_a4){new _6({content:_a4.content,proceed:_a4.proceed||this.translate("mxui.widget.DialogMessage","ok"),cancel:_a4.cancel||this.translate("mxui.widget.DialogMessage","cancel"),handler:_a4.handler}).show();};this.canMoveBack=function(){return !_7.isAtBeginning();};this.downloadFile=function(_a5){var url;var obj=_a5&&_a5.mxobject;if(obj&&obj.get2("HasContents")){url=_15.getDynamicResourceUrl(obj.getGuid(),obj.get2("changedDate"));}else{return;}if(_a5.target==="window"||_a6()){url+="&target=window";if(_a7()){new _6({caption:this.translate("mendix.widget.DialogMessage","file_download"),content:this.translate("mendix.widget.DialogMessage","file_download_message"),proceed:this.translate("mendix.widget.MxDataView","download"),cancel:this.translate("mendix.widget.DialogMessage","cancel"),handler:_a8}).show();}else{_a8();}}else{_8.download({url:url+"&target=internal",target:_a5.target,error:function(err){if(_a5.error){_a5.error(err);}else{window.mx.onError(err);}}});}function _a8(){_33(url,obj.get2("Name"),"mendix_file");};function _a6(){var _a9=_1c("chrome")&&typeof window.externalHost!=="undefined";var _aa=_1c("mobile");return _a9||_aa;};function _a7(){return _1c("ie")==8||((_1c("iphone")||_1c("ipad"))&&(_1c("safari")||window.navigator.standalone))||_1c("windowsphone");};};this.getFirstDayOfWeek=function(){return window.mx.session.getConfig("uiconfig.firstDayOfWeek");};};return UI;});