/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/form/FormFactory",["mxui/lib/form/InlineForm","mxui/lib/pageTemplating/pageProvider","mxui/lib/pageTemplating/pageComponentComposer","mxui/widget/Window","mxui/widget","mendix/lang","dojo/on","dojo/aspect","dojo/dom-class","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){"use strict";function _b(_c,_d,_e){_2.get(_c,function(_f){_3.composeAllComponentsIn(_f,_d,_e);},_e);};function _10(_11){this._templateProvider=_11;};_10.prototype.openPopupForm=function(_12,_13,_14,_15,_16,_17){var _18=this;_b(_12,function(_19){_18._templateProvider.add(_19.widgetTemplates);var _1a=new _1("popup",_19,_15,_13.title),wnd=new _4({title:_1a.title,width:_13.width,height:_13.height,resizable:"resizable" in _13?_13.resizable:true,content:_1a.domNode,cssClass:_19["class"],cssStyle:_19.style});_8.after(_1a,"onResize",_a.hitch(wnd,"resize"));_8.after(wnd,"onClose",function(){var _1b=_19.closeButton&&_5.findWidgetByMxId(_19.closeButton,_1a.domNode);if(_1b&&!_1b.get("disabled")){_1b.onClick();}else{_1a.rollback(function(){_1a.close();});}});_8.before(wnd,"onBeforeShow",function(){_1a.onBeforeShow();_1a.onNavigation();});_8.before(wnd,"onAfterShow",_a.hitch(_1a,"onAfterShow"));_1a.listen("close",wnd.hide.bind(wnd));_8.before(wnd,"onHide",_a.hitch(_1a,"onBeforeHide"));_8.before(wnd,"destroy",function(){_1a.onAfterHide();_1a.destroy();});_1a.loadWidgets(_14,function(){wnd.show(_13.modal,function(){if(_16){_16(_1a);}});});},_17);};_10.prototype.openInlineForm=function(_1c,_1d,_1e,_1f,_20,_21){var _22=this;_b(_1c,function(_23){_22._templateProvider.add(_23.widgetTemplates);var _24=new _1("custom",_23,_1f);_9.add(_24.domNode,"mx-offscreen");_1d.appendChild(_24.domNode);_24.listen("close",function(_25){_24.onBeforeHide();_9.add(_24.domNode,"mx-offscreen");_24.onAfterHide();_24.destroy();if(_25){_25();}});_24.loadWidgets(_1e,function(){_24.onBeforeShow();_24.onNavigation();_9.remove(_24.domNode,"mx-offscreen");_24.onAfterShow();if(_20){_20(_24);}});},_21);};return _10;});