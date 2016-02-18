/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
require(["mxui/widget/_WidgetBase","mxui/dom","mendix/lang","mendix/lib/MxContext","dojo/dom-class","dojo/sniff","dojo/Deferred","dojo/_base/kernel","dojo/_base/lang","mxui/exposed","mxui/startup","mxui/compat-5"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){var _a="6.0",_b=_3.deprecate;_b("mxui.dom",{removeElement:"orphan",setTextContent:"text",getTextContent:"text",textContent:"text"},_a);_b("mxui.dom","removeChildNodes","dojo","empty",_a);_b("mxui.dom","clearSelectOptions","dojo","empty",_a);_9.mixin(_2,{getAncestorClass:function getAncestorClass(_c,_d,_e){_8.deprecated("mxui.dom.getAncestorClass","Use Element.querySelectorAll instead",_a);if(_c){if(_5.contains(_c,_d)){return _c;}else{if(--_e===0){return false;}else{_f(_c.parentNode,_d,_e);}}}else{return _c;}},getElementsByTagNames:function(_10,_11){_8.deprecated("mxui.dom.getElementsByTagNames","Use Element.querySelectorAll instead",_a);return _10.querySelectorAll(_11);},getAncestorNodeWithAttribute:function getAncestorNodeWithAttribute(_12,_13,_14,_15){_8.deprecated("mxui.dom.getAncestorNodeWithAttribute","Use Element.querySelectorAll instead",_a);if(_12.nodeName==_13&&_12.getAttribute&&_12.getAttribute(_14)!=null){return _12;}else{if(--_15===0){return null;}else{_16(_12.parentNode,_13,_14,_15);}}},setHTML:function(_17,str){_8.deprecated("mxui.dom.setHTML","Use mxui.dom.html instead",_a);_2.html(_17,str);},getSelectOptions:function(_18){_8.deprecated("mxui.dom.getSelectOptions","Use mxui.dom.getSelectedValue instead",_a);return [_18.options[_18.selectedIndex].value];},selectOption:function(_19,str){_8.deprecated("mxui.dom.selectOption","Use Element.value instead",_a);_19.value=str;},hasClass:function(_1a,_1b){_8.deprecated("mxui.dom.hasClass","Use dojo/dom-class::contains instead",_a);return _5.contains(_1a,_1b);},getClass:function(_1c){_8.deprecated("mxui.dom.getClass","Use Element.className instead",_a);return _1c.className;},setClass:function(_1d,str){_8.deprecated("mxui.dom.setClass","Use Element.className instead",_a);_1d.className=str;},addClass:function(_1e,str){_8.deprecated("mxui.dom.addClass","Use dojo/dom-class::add instead",_a);_5.add(_1e,str);},addClasses:function(_1f,_20){_8.deprecated("mxui.dom.addClasses","Use dojo/dom-class::add instead",_a);_5.add(_1f,_20);},removeClass:function(_21,str){_8.deprecated("mxui.dom.removeClass","Use dojo/dom-class::remove instead",_a);_5.remove(_21,str);},hide:function(_22){_8.deprecated("mxui.dom.hide","Use dojo.style instead",_a);_22.style.display="none";},show:function(_23){_8.deprecated("mxui.dom.show","Use dojo.style instead",_a);_23.style.display="";},setReadOnly:function(_24){_8.deprecated("mxui.dom.setReadOnly","Use Element.setAttribute instead",_a);return _24.setAttribute("readonly","readonly");},unsetReadOnly:function(_25){_8.deprecated("mxui.dom.unsetReadOnly","Use Element.removeAttribute instead",_a);return _25.removeAttribute("readonly");},applyDisableStyle:function(_26){_8.deprecated("mxui.dom.applyDisableStyle","Use Element.setAttribute instead",_a);var _27=_26.nodeName;if(_27=="SELECT"||(_27=="INPUT"&&_26.type=="checkbox")){_26.setAttribute("disabled","disabled");}else{if(_27=="INPUT"||_27=="TEXTAREA"||_27=="BUTTON"){_26.setAttribute("readonly","readonly");}}},applyEnableStyle:function(_28){_8.deprecated("mxui.dom.applyEnableStyle","Use Element.removeAttribute instead",_a);_28.removeAttribute("readonly");var _29=_28.nodeName.toLowerCase();if(_29=="select"||(_29=="input"&&_28.type=="checkbox")){_28.removeAttribute("disabled");}},setOpacity:function(_2a,_2b){_8.deprecated("mxui.dom.setOpacity","Use Element.style instead",_a);_2a.style.opacity=_2b;},insertCss:function(_2c,doc,_2d){_8.deprecated("mxui.dom.insertCss","Use mxui.dom.addCss instead",_a);_2.addCss(_2c,doc,_2d);},escapeHTML:function(str){_8.deprecated("mxui.dom.escapeHTML","Use mxui.dom.escapeString instead",_a);return _2.escapeString(str);},getFormElementText:function(_2e){_8.deprecated("mxui.dom.getFormElementText","Use dojo/dom-attr::get instead",_a);if(_2e.nodeName.toLowerCase()=="input"){return _2e.value;}else{if(_2e.nodeName.toLowerCase()=="select"){return _2e.options[_2e.selectedIndex].text;}}},getStringSize:function(str){_8.deprecated("mxui.dom.getStringSize","Use dojo/dom-geometry::getContentSize instead",_a);var _2f=document.createElement("span");document.body.appendChild(_2f);_2f.innerHTML=(str==="")?"A":str;var _30=_2f.offsetWidth+10;_2f.parentNode.removeChild(_2f);_2f=null;return _30;},clone:function(_31){_8.deprecated("mxui.dom.clone","Use dojo/_base/lang::clone instead",_a);return _9.clone(_31);},getFirstElement:function(_32){_8.deprecated("mxui.dom.getFirstElement","Use Element.children instead",_a);var _33=_32.children;return _33.length===0?null:_33[0];}});var _34={};var _35=function(_36){if(_36.target.match("MxApplication")){var _37=_36.param.contenturl,_38={};for(var x in _36.param){_38[x]=_36.param[x];}delete _38.contenturl;return {target:"Screen",params:{uilocation:"content",title:_36.title,targetwidget:null,targeturl:_37,targetparams:_38}};}else{if(_36.uilocation){return {target:"Screen",params:{uilocation:_36.uilocation,width:_36.param?_36.param.width:null,title:_36.title,targetwidget:_36.target,targeturl:null,targetparams:_36.param}};}else{return _36;}}};var _39=function(_3a){_3a=_3a.toLowerCase();switch(_3a){case "screen":return function(_3b){return window.mx.screen.setContent(_3b);};default:return _34[_3a];}};_9.mixin(window.mx.ui,{isQuirky:_6("ie")&&(_6("quirks")||_6("ie")<9),confirm:function(_3c){_8.deprecated("mx.ui.confirm","Use mx.ui.confirmation instead",_a);return window.mx.ui.confirmation({cancel:_3c.canceltext,proceed:_3c.proceedtext,content:_3c.message,handler:_3c.callback});},registerTarget:function(_3d,_3e){_34[_3d.toLowerCase()]=_3e;},executeAction:function(_3f){_8.deprecated("mx.ui.executeAction","Use mx.ui.action instead",_a);_3f=_35(_3f);var _40=_3f.target||"Screen",_41=_3f.params,_42=_39(_40);return _42&&_42(_41)||null;},showDialogMessage:function(_43,_44){_8.deprecated("mx.ui.showDialogMessage is deprecated, use info/warn/error instead","",_a);window.mx.ui.error(_43);},newContext:function(_45){_8.deprecated("mx.ui.newContext is deprecated, create an instance of mendix.lib.MxContext instead","",_a);return new _4();},getProgressIndicator:function(_46,_47){_8.deprecated("mx.ui.getProgressIndicator is deprecated, use mx.ui.getProgress instead","",_a);_46=String(_46).toLowerCase().replace("nonblocking","popup").replace("blocking","modal");return window.mx.ui.getProgress(_47,_46);},getLocale:function(){_8.deprecated("mx.ui.getLocale is deprecated, use dojo/_base/kernel::locale instead","",_a);return _8.locale;}});window.mx.ui.registerTarget("MicroflowAction",function(_48){return window.mx.ui.action(_48.action,{store:{caller:_48.caller},context:_48.mxcontext,callback:_48.callback,params:{gridid:_48.gridid,applyto:"selection",guids:[_48.mxcontext.getTrackId()]}});});window.mx.ui.registerTarget("XASAction",function(_49){return window.mx.ui.action(_49.actionname,{store:{caller:_49.caller},async:/true/.test(_49.async),params:_49.actionparams,context:_49.mxcontext,callback:_49.callback,error:_49.error,progress:{type:_49.progress,message:_49.progressmsg}});});var _4a={};var _4b=function(fnc){return function(_4c){var _4d;try{_4d=fnc(_4c);}catch(e){logger.error(name+".sendMessage: trouble calling subscriber: "+e);}return (_4d instanceof _7||_4d instanceof Error)?_4d:_4c;};};_9.mixin(window.mx.screen||(window.mx.screen={}),{setContent:function(_4e){_8.deprecated("mx.screen.setContent is deprecated, use mx.ui.openForm instead","",_a);if("form" in _4e){_4e={targeturl:_4e.form.path,targetparams:_4e.targetparams,uilocation:_4e.form.location,title:_4e.form.title,resizable:_4e.form.resizable};}var _4f=_4e.targetparams&&_4e.targetparams.mxcontext;if(_4f){delete _4e.targetparams.mxcontext;}return window.mx.ui.openForm(_4e.targeturl,{params:_4e.targetparams,location:_4e.uilocation,title:_4e.title,resizable:_4e.resizable,context:_4f});},showProgress:function(){_8.deprecated("mx.screen.showProgress is deprecated, use mx.ui.showProgress instead","",_a);return this._lastProgress=window.mx.ui.showProgress();},hideProgress:function(id){_8.deprecated("mx.screen.hideProgress is deprecated, use mx.ui.hideProgress instead","",_a);return window.mx.ui.hideProgress(typeof id=="undefined"?this._lastProgress:id);},subscribe:function(_50,_51,fnc){_8.deprecated("mx.screen.subscribe is deprecated, use mxform.listen instead","",_a);var id=_3.getUniqueId();return (_4a[id]=[id,_50,_51,fnc]);},unsubscribe:function(_52){_8.deprecated("mx.screen.unsubscribe is deprecated, use mxform.unlisten instead","",_a);if(_52){var id=_52[0];if(_4a[id]){delete _4a[id];}else{}}},sendMessage:function(_53,_54,_55){_8.deprecated("mx.screen.sendMessage is deprecated, use save / commit / rollback on mxform instead","",_a);var _56=window.mx.ui.getCurrentForm();if(!_54||!_56){return null;}switch(_54){case "saveObject":return _56.save();case "commitObject":return _56.commit();case "rollbackObject":return _56.rollback();default:var _57=new _7(),_58=new _7(),_59=[];for(var i in _4a){var _5a=_4a[i],cid=_5a[1],msg=_5a[2],fnc=_5a[3];if(cid==_53&&msg==_54){_59.push(_4b(fnc));}}_55&&_55.reversed&&_59.reverse();while(_59.length){_58.then(_59.shift());}_58.then(function(_5b){_57.resolve();return _5b;},function(e){_57.reject(e);return e;});_58.resolve(_55);return _57;}},getUIPlace:function(_5c){_8.deprecated("mx.screen.getUIPlace is deprecated, use place property of mxform instead","",_a);var _5d=_5c.widget&&_5c.widget.mxform;if(_5d){return _5d.place;}else{logger.error("mx.screen.getUIPlace: no widget passed, or widget not bound to a form.");}},getTitle:function(_5e){_8.deprecated("mx.screen.getTitle is deprecated, use mxform.getTitle instead","",_a);var _5f=_5e.widget&&_5e.widget.mxform;if(_5f){return _5f.getTitle();}else{logger.error("mx.screen.getTitle: no widget passed, or widget not bound to a form.");}},resumeContent:function(_60){_8.deprecated("mx.screen.resumeContent is deprecated, don't use it","",_a);},suspendContent:function(_61){_8.deprecated("mx.screen.suspendContent is deprecated, don't use it","",_a);},disposeContent:function(_62){_8.deprecated("mx.screen.disposeContent is deprecated, use mxform.close instead","",_a);var _63=_62.widget&&_62.widget.mxform;if(_63){_63.close();}else{logger.error("mx.screen.disposeContent: no widget passed, or widget not bound to a form.");}},resizeContent:function(_64){_8.deprecated("mx.screen.resizeContent is deprecated, use mxform.resize instead","",_a);var _65=_64.widget&&_64.widget.mxform;if(_65){_65.resize();}else{logger.error("mx.screen.resizeContent: no widget passed, or widget not bound to a form.");}},reloadContent:function(){_8.deprecated("mx.screen.reloadContent is deprecated, use mx.ui.reload instead","",_a);window.mx.ui.reload();},refresh:function(){_8.deprecated("mx.screen.refresh is deprecated, use mx.ui.reload instead","",_a);window.mx.ui.reload();},shutdown:window.mx.ui.shutdown,startup:window.mx.ui.startup,isLoaded:window.mx.ui.isLoaded});_b("mx.screen","showLogin","mx.ui","showLogin",_a);_b("mx.screen","hideLogin","mx.ui","hideLogin",_a);_b("mx.screen","logout","mx","logout",_a);_b("mx.screen","layout","mx.ui","resize",_a);_b("mx.screen","applyToNode","mx.ui","applyToNode",_a);mxui.lib.putContent=mendix.lib.putContent=function(url,_66,_67){_8.deprecated("mxui.lib.putContent is deprecated, use mx.ui.openForm instead","",_a);var _68;if(typeof url=="object"){var _69=url,_6a=_66;url=_69.url;_66=_69.params;_67=_69.node;}else{_68=new _7();}window.mx.ui.openFormInNode(url,_67,_66.context,_66,function(_6b){_6b.domNode.style.height="auto";if(_68){_68.resolve("");}else{_69.callback&&_69.callback.call(null,"",_6b.id,_6b);}},function(_6c){if(_68){_68.reject(_6c);}else{_69.error&&_69.error.call(_6a,_6c);}});return _68;};_b("mendix.dom","mxui.dom",_a);_b("mendix.html","mxui.html",_a);_b("mendix.wm.focus","mxui.wm.focus",_a);_b("mendix.dom","liveconnect","mxui.dom","liveConnect",_a);_b("mxui.addon","mxui.mixin",_a);_b("mendix.addon","mxui.mixin",_a);_b("mendix.widget","mxui.widget",_a);_b("mobile.dom","mxui.dom",_a);_b("mobile.widget","_Widget","mxui.widget","_WidgetBase",_a);_b("mxui.html","setContent","mxui.dom","text",_a);_b("mxui.html","sanitizeHTMLString","mxui.dom","unescapeString",_a);});