!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("mendixmodelsdk"),require("react")):"function"==typeof define&&define.amd?define("pageEditorRegistry",["mendixmodelsdk","react"],t):"object"==typeof exports?exports.pageEditorRegistry=t(require("mendixmodelsdk"),require("react")):e.pageEditorRegistry=t(e.mendixmodelsdk,e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"pluginWidgets",function(){return p});var n=r(1),i=(r.n(n),r(2)),o=(r.n(i),n.pluginwidgets.DynamicTextValue),u=n.pluginwidgets.PluginWidget,d=n.pluginwidgets.PluginWidgetProperty,c=n.pluginwidgets.StringValue,p={"com.mendix.widget.core.Text":{name:"Text",icon:"",pageEditorComponent:function(){return Object(i.createElement)("p",{},"Text")},propertyGrid:function(){return{}},createModel:function(e){var t=u.create(e);t.pluginWidgetName="com.mendix.widget.core.Text",t.pluginWidgetVersion="";var r=d.createInPluginWidgetUnderProperties(t);r.key="caption",r.value=o.createIn(r);var n=d.createInPluginWidgetUnderProperties(t);return n.key="renderMode",n.value=c.createIn(n),t}}}},function(t,r){t.exports=e},function(e,r){e.exports=t}])});