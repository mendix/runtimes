
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget",["mxui/widget/_MasterTooltip","mxui/widget/_Button","mxui/widget/_WidgetBase","mxui/widget/_Widget","mxui/html/parser","mxui/dom","mendix/lang","mendix/logger","dijit/_Widget","dijit/registry","dojo/_base/kernel","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","exports"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){_f.getDisableables=function(_10){var _11=[];var run=function(_12){var _13=_12.childNodes;for(var i=0,_14;_14=_13[i];i++){if(_14.nodeType!=1){continue;}var id=_14.getAttribute("widgetId"),_15=_a.byId(id);if(_15&&!(/^dijit/.test(id)||_15._btn_||_15 instanceof _2)){_11.push(_15);}if(!(_15 instanceof _3)){run(_14);}}};run(_10);return _11;};_f.findNonPlaceholderParent=function(_16){var pn=_16.parentNode;while(pn&&pn.hasAttribute("data-mx-placeholder")){pn=pn.parentNode;}return pn;};_f.resizeChildrenIn=function(_17){var _18=_a.findWidgets(_17),_19=_18[0];if(_18.length!==1){return;}if(_f.findNonPlaceholderParent(_19.domNode)===_17){if(typeof _19.resize==="function"){_17.style.height="100%";_19.resize({w:_17.offsetWidth,h:_17.offsetHeight});_17.style.height="";}}};_f.fireOnReady=function(_1a,_1b){var _1c=[];dojo.forEach(_1a,function(w){if(w.addOnLoad){_1c.push(function(h){w.addOnLoad(h);});}});if(_1b){_1c.push(function(){_1b();});}_7.sequence(_1c);};_f.destroyChildren=function(_1d){var _1e=_a.findWidgets(_1d),_1f=_f.getDescendantWidgets(_1d);_c.forEach(_1e,function(_20){try{_20.destroyRecursive();}catch(e){_8.error(_20.id+".destroy: Unable to destroy:"+e.message);}});_c.forEach(_1f,function(_21){if(!_21._destroyed){_8.error(_21.id+": widget not destroyed, check parent's uninitialize method");}});};function _22(_23,_24,_25){var _26=[],i=_23.length;while(i--){var _27=_23[i].prototype,fnc=_27[_25];fnc&&_26.push(fnc);}return _26.length?function(){var _28=null;for(var i=0,_29;_29=_26[i];i++){try{_29.call(this);}catch(e){var _2a=_29.ctor&&_29.ctor.prototype,_2b=(_2a&&_2a.declaredClass)||"some";_8.error(this.id+"."+_24+": Can not execute "+_25+" function of "+_2b+" addon :"+e.message);}}}:function(){};};function _2c(_2d,_2e,_2f){var _30=function(_31){if(this instanceof arguments.callee){var _32=(_31&&_31.callee==arguments.callee)?_31:arguments;try{_2d&&_2d.apply(this,_32);}catch(e){var _33=typeof e=="string"?e:e.message;_8.error(this.id+".Unable to render widget. ERROR: "+_33);this.loaded();this._broken=true;this._brokenError=_33;var _34=this.domNode&&this.domNode.parentNode,_35=_6.div({refWidgetId:this.id,style:"color:red"},"Unable to render "+this.id+" widget: "+_33);if(_34){_34.removeChild(this.domNode);_34.appendChild(_35);}else{var _36=(arguments.length==2&&arguments[1].nodeName)?arguments[1]:null;if(_36&&_36.parentNode){_36.parentNode.appendChild(_35);}}}}else{if(_2e){var _37=(arguments.callee.caller)?"from scope "+arguments.callee.caller.toString():"from unknown scope";}return new arguments.callee(arguments);}};if(_2d){for(var x in _2d){_30[x]=_2d[x];}_30.prototype=_2d.prototype;_30.prototype.constructor=_30;}return _30;};function _38(_39){var _3a=[];for(var i=0,l=_39.length;i<l;i++){var _3b=_39[i],_3c=(typeof _3b=="string")?_d.getObject(_3b):_3b;if(_3c==null||typeof (_3c)=="object"){throw new Error("mxui.widget.declare: Mixin '"+_3b.toString()+"' is not loaded! Maybe it's broken???");}_3a.push(_3c);}return _3a;};function _3d(_3e,_3f,_40){var _41=function(_42){var _43=_42.inputargs,_44=false;if(_43 instanceof Array){var _45={};for(var i=0,l=_43.length;i<l;i++){if(typeof _43[i]=="object"){for(var x in _43[i]){_45[x]=_43[i][x];break;}_44=true;}else{_45[_43[i]]="";}}if(_44){}_43=_45;}if(_43){var _46=_3e.__inputargs?_3e.__inputargs:(_3e.__inputargs={});for(var i in _43){_46[i]=_3e[i]=_43[i];}}};for(var i=0,l=_3f.length;i<l;i++){var _47=_3f[i].prototype;_41(_47);}_41(_3e);for(var i=0,l=_40.length;i<l;i++){var _48=_40[i].prototype;_41(_48);}};_f.declare=function(_49,_4a){var _4b=_4a.superclass||_9,_4c=_4a.mixins,_4d=_4a.constructor,_4e=_49.split(".");if(!_4c&&_4a.addons){_b.deprecated("mxui.widget.declare: addons are deprecated, use mixins instead (widget: "+_49+")","","3.1");_4c=_4a.addons;}_4c=_4c||[];if(_4e.length==1){_49="mxui.widget."+_4e;_4e=_49.split(".");}var _4f=_4b.prototype["_mx_"]?[_4b]:[_4b,_4];var _4c=_38(_4c),_50=_4f.concat(_4c),_51=_4e.pop();_4a.moduleName=_4e.join(".");_4a.className=_51;_4a["initializer"]=_22(_50,"create","initialize");_4a["uninitializer"]=_22(_50,"destroy","uninitialize");_3d(_4a,_4f,_4c);var _52=_e(_49,_50,_4a);var _53=_2c(_52,true,_49);return _d.setObject(_49,_53);};_f.createCSSMap=function(_54,css){for(var i in css){css[i]=_54+"-"+css[i];}css.baseClass=_54;return css;};_f.getDescendantWidgets=function(_55){return _55?_c.map(_55.querySelectorAll("[widgetid]"),_a.byNode):[];};_f.loadWidgetsIn=function(_56,_57,_58,_59){_5.parse(_56,_57);var _5a=_a.findWidgets(_56);_7.collect(_c.map(_5a,function(_5b){var _5c=_f.getDescendantWidgets(_5b.domNode),_5d=_5c.concat([_5b]);return function(_5e){_f.fireOnReady(_5d,function(){_f.applyContext([_5b],_58,_5e);});};}),_59);};_f.ready=function(_5f,_60,_61){var _62=[];_c.forEach(_5f,function(_63){if(_63.addOnLoad){_62.push(function(_64){_63.addOnLoad(_64);});}});_7.collect(_62,_60,_61);};_f.applyContext=function(_65,_66,_67){_7.collect(_c.map(_65,function(_68){if(_68.applyContext){return function(cb){try{_68.applyContext(_66,cb);}catch(e){throw new Error(_68.id+".applyContext: "+e);}};}else{return function(cb){try{var _69=_a.findWidgets(_68.domNode);_f.applyContext(_69,_66,cb);}catch(e){throw new Error(_68.id+".applyContext: "+e);}};}}),_67);};var _6a=null;_f.showTooltip=function(){if(!_6a){_6a=new _1();}_6a.show.apply(_6a,arguments);};_f.hideTooltip=function(_6b){if(!_6a){_6a=new _1();}if(_6b==null){_6b=_6a.currentNode;}_6a.hide(_6b);};});