
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/LinkButton",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.LinkButton");_1.declare("mxui.widget.LinkButton",[mxui.widget._Button,mxui.mixin._DynamicOptionHelper],{action:"",address:"",caption:"",subject:"",cc:"",bcc:"",body:"",_argNames:{email:["subject","cc","bcc","body"]},_target:"",_url:"",buildRendering:function(){this.inherited(arguments);this._target=(this.action=="open"?"_blank":"_self");},onClick:function(e){window.open(this._url,this._target);},refresh:function(_4){this.updateOptions(["caption","address","subject","cc","bcc","body"],this._mxObject,function(_5){var _6=this.domNode;this.set("caption",_5.caption?mxui.dom.escapeString(_5.caption):"");this.setUrl(_5);_4&&_4();});},setUrl:function(_7){var _8=_7.address,_9;switch(this.action){case "open":_9=_8;break;case "email":_9="mailto:"+window.escape(_8);break;case "call":_9="tel:"+window.escape(_8);break;case "text":_9="sms:"+window.escape(_8);break;default:throw new Error(this.id+".setUrl : invalid action");}var _a=[],_b=this._argNames[this.action];if(_b){for(var i=0,_c;_c=_b[i];++i){var _d=_7[_c];if(_d){_a.push(_c+"="+window.escape(_d));}}if(_a.length>0){_9+="?"+_a.join("&");}}this._url=_9;}});});