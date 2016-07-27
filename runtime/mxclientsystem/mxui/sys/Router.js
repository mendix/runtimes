/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/sys/Router",["mxui/lib/form/ContentForm","mxui/lib/form/FormFactory","mxui/lib/pageTemplating/TemplateProvider","mxui/lib/browserBackend","mxui/sys/history","mendix/lib/Error","mendix/lib/MxContext","mendix/lib/NavigationError","mendix/lang","mendix/logger","dojo/_base/array","dojo/aspect"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){function _d(){this._templateProvider=new _3();this._contentForm=new _1();this._formFactory=new _2(this._templateProvider);};_d.prototype.startup=function(_e){var _f=this,_10=null,_11=null,_12={};_5.init();var _13=document.getElementById("content");if(!_13){alert("You are using an outdated index page. Please update your index page. See index-example.html in the deployment directory for an example of what the index page should look like.");return;}_13.appendChild(this._contentForm.domNode);document.title=_e.profile;_c.after(this._contentForm,"dispose",_5.back);_c.after(this._contentForm,"onLoading",function(){_f._templateProvider.add(_f._contentForm.widgetTemplates);});_c.after(this._contentForm,"onNavigation",function(){var _14=_e.profile+" - "+_f._contentForm.title;var url=_f._contentForm.url?_e.urlPrefix+_f._contentForm.url:_4.location.pathname();_5.replace(_14,url+_4.location.search());});_c.after(_5,"onNavigation",_15,true);function _15(_16,_17){var _18=_17.formParams,_19;if(!_10){_10=window.mx.ui.showProgress();}if(_16){_19={};_f._contentForm.onPersistViewState(_19);}_f._contentForm.navigateTo(_18.path,_18.title,_7.fromJSON(_18.context),_18.params,_17.id in _12?window.JSON.parse(_12[_17.id]):{},function(){_1a();window.mx.ui.hideProgress(_10);_10=null;},function(e){_1a();if(e instanceof _8){_11=_17.id;}else{window.mx.ui.hideProgress(_10);_10=null;window.mx.onError(e);}});function _1a(){if(!_16){return;}if(_16.id===_11){_11=null;}else{try{_12[_16.id]=window.JSON.stringify(_19);}catch(e){throw new _6("One of the widgets on the previous page tried to store a complex object in its viewState");}}};};};_d.prototype.openFormInContent=function(_1b,_1c,_1d,_1e){_5.push({id:_9.getUniqueId(),formParams:{path:_1b,title:_1c,context:(_1d||new _7()).toJSON(),params:_1e||{}}});};_d.prototype.openFormInPopup=function(_1f,_20,_21,_22,_23,_24){var pid=window.mx.ui.showProgress();this._formFactory.openPopupForm(_1f,_20,(_21||new _7()),(_22||{}),function(_25){window.mx.ui.hideProgress(pid);_23&&_23(_25);},function(e){window.mx.ui.hideProgress(pid);_24?_24(e):window.mx.onError(e);});};_d.prototype.openFormInNode=function(_26,_27,_28,_29,_2a,_2b){var pid=window.mx.ui.showProgress();this._formFactory.openInlineForm(_26,_27,(_28||new _7()),(_29||{}),function(_2c){window.mx.ui.hideProgress(pid);_2a&&_2a(_2c);},function(e){window.mx.ui.hideProgress(pid);_2b?_2b(e):window.mx.onError(e);});};_d.prototype.getTemplate=function(id,_2d){return this._templateProvider.get(id,_2d);};_d.prototype.getContentForm=function(){return this._contentForm;};return _d;});