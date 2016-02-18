/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/form/ContentForm",["mxui/lib/pageTemplating/pageProvider","mxui/lib/pageTemplating/pageComponentComposer","mxui/lib/incubator","mxui/lib/form/_FormBase","mxui/widget","mxui/dom","mendix/lang","mendix/lib/NavigationError","dojo/Deferred","dojo/promise/all","dojo/dom-class","dojo/_base/array","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){"use strict";var $=_6.create;function _f(_10,_11){var _12=_10.findPlaceholder(_11);var _13=_3.conceiveSuccessor(_12);_10.appendTo(_13);return _13;};var _14=_e(_4,{_currentLayouts:null,_pendingRequest:null,widgetTemplates:null,constructor:function(){this.widgetTemplates={};this._currentLayouts=[];this.place="content";this.id="ContentForm";this.domNode=$("div",{"class":"mx-page"},$("div",{"class":"mx-placeholder","data-mx-placeholder":"main"}));},_updatePropertiesFrom:function(_15,_16){this.id=_15.id;this.path=_15.path;this.title=_16||_15.title;this._currentLayouts=_15.layouts;this.domNode.className="mx-page "+_15["class"];this.domNode.style.cssText=_15.style||"";},navigateTo:function(_17,_18,_19,_1a,_1b,_1c,_1d){var _1e=this,_1f=[];if(this._pendingRequest){this._pendingRequest.cancel(new _8("Loading of a page has been superseded by request for "+_17));}this._pendingRequest=(function(){var _20=new _9();_1.get(_17,_20.resolve,_20.reject);return _20;})().then(function(_21){var _22=new _9();_2.composeNewComponentsIn(_21,_1e._currentLayouts,_22.resolve,_22.reject);return _22;}).then(function(_23){_1f=_7.map(_23.components,function(_24){return _f(_24,_1e.domNode);});_1e.widgetTemplates=_d.mixin(_1e.widgetTemplates,_23.widgetTemplates);_1e.viewState=_1b;_1a=_d.mixin({},_1a,{mxform:_1e});return _a(_7.map(_1f,function(_25){var _26=new _9();_5.loadWidgetsIn(_25,_1a,_19,_26.resolve);return _26;})).then(function(){return _23;});}).then(function(_27){_1e._updatePropertiesFrom(_27,_18);_7.forEach(_1f,function(_28){_3.hatch(_28);});_1e.onNavigation();_1e.resize();_1e._pendingRequest=null;_1c&&_1c();}).otherwise(function(e){_7.forEach(_1f,function(_29){_3.abort(_29);});_1d?_1d(e):window.mx.onError(e);});},resize:function(){this.domNode.style.height="100%";_5.resizeChildrenIn(this.domNode);this.domNode.style.height="";},onNavigation:function(){}});return _14;});