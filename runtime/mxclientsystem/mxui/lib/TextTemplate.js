/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/TextTemplate",["mendix/lang","mxui/dom","dojo/Deferred","dojo/promise/all","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(null,{_template:null,_callback:null,_rootObject:null,_subscriptions:null,_pendingFetch:null,constructor:function(_8,_9){this._template=_8;this._callback=_9;this._subscriptions=[];},update:function(_a,_b){this._rootObject=_a;this._clearSubscriptions();if(!this._template.parameters){this._callback(this._template.text);if(_b){_b();}}else{if(!_a){this._callback("");if(_b){_b();}}else{this._reload(_b);}}},destroy:function(){this._clearSubscriptions();},_reload:function(_c){var _d=this;if(this._pendingFetch){this._pendingFetch.cancel();}this._pendingFetch=this._fetchObjects();this._pendingFetch.then(function(_e){_d._pendingFetch=null;_d._addSubscriptions(_e);_d._callback(_d._fillTemplate(_e));if(_c){_c();}});},_fetchObjects:function(){var _f={};_1.forEach(this._template.parameters,function(_10,key){_f[key]=new _3();var _11=_10.split("/"),_12=_11.pop();this._rootObject.fetch(_11,function(obj){var _13={obj:obj,attr:_12,path:_10};_f[key].resolve(_13);});},this);return _4(_f);},_fillTemplate:function(_14){var _15=this;return this._template.text.replace(/(?:^|[^\{])(?:\{\{)*(\{(\d+)\})/g,function(_16,_17,_18){var arg=_14[_18];return _16.replace(_17,_15._renderAttrValue(arg.obj,arg.attr));}).replace(/\{\{/g,"{");},_renderAttrValue:function(obj,_19){return obj?window.mx.parser.formatAttribute(obj,_19):"";},_addSubscriptions:function(_1a){this._addSubscription(this._rootObject);_1.forEach(_1a,function(arg){var _1b=arg.path.split("/");if(_1b.length>2){this._addSubscription(this._rootObject,_1b[1]);}if(arg.obj){this._addSubscription(arg.obj);this._addSubscription(arg.obj,arg.attr);}},this);},_addSubscription:function(obj,_1c){var _1d=_5.some(this._subscriptions,function(sub){return sub.guid===obj.getGuid()&&sub.attr===_1c;});if(_1d){return;}var _1e=this;var _1f={attr:_1c,guid:obj.getGuid(),callback:function(){_1e._reload();}};this._subscriptions.push({attr:_1c,guid:obj.getGuid(),handle:window.mx.data.subscribe(_1f)});},_clearSubscriptions:function(){while(this._subscriptions.length){window.mx.data.unsubscribe(this._subscriptions.pop().handle);}}});return _7;});