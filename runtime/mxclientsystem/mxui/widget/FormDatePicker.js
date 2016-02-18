
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
require({cache:{"url:mxui/widget/templates/FormDatePicker.html":"<div class=\"${baseClass}\">\n\t<div class=\"${baseClass}_buttonPick\" dojoAttachPoint=\"iconNode\">\n        <span class=\"${baseClass}_buttonTextIcon\">&#9658;</span>\n    </div>\n    <div class=\"${baseClass}_inputPane\" dojoAttachPoint=\"dateNode\">\n\t\t<input type=\"text\" class=\"${baseClass}_dateInput form-control\" dojoAttachPoint=\"inputNode\" />\n\t</div>\n</div>\n"}});define("mxui/widget/FormDatePicker",["mxui/widget/_MasterTooltip","mxui/widget/Calendar","mxui/widget","mxui/dom","mendix/logger","dijit/_TemplatedMixin","dijit/_Contained","dijit/BackgroundIframe","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/text!mxui/widget/templates/FormDatePicker.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var _f=_3.declare("mxui.widget.FormDatePicker",{mixins:[_6,_7],inputargs:["name","dateFormat","format"],onvaluechange:"",onmouseclick:"",onfocusleave:"",obligatory:false,obligatorycause:"",domNode:null,inputNode:null,baseClass:"mendixFormDatePicker",templateString:_e,noValidation:false,trigger:"",readOnly:false,datePicker:null,dropDown:null,hoverState:false,viewState:false,justPicked:false,keyEvents:null,blurEvent:null,isRtl:null,hasDate:false,dateParams:null,postCreate:function(){this.keyEvents=[];this.domNode.name=this.name;if(!this.dateFormat){this.dateFormat="date";}else{this.dateFormat=this.dateFormat.toLowerCase();}this.dateParams={selector:this.dateFormat=="custom"?"date":this.dateFormat,datePattern:this.format};this.hasDate=(/date/.test(this.dateFormat)||this.dateFormat=="custom"&&/[dMy]/.test(this.format));if(this.hasDate){this.connect(this.iconNode,"onclick","onIconClick");}else{this.iconNode.parentNode.removeChild(this.iconNode);}this.isRtl=!this.isLeftToRight();this.connect(this.inputNode,"onfocus","onInputFocus");this.connect(this.inputNode,"onblur","onInputBlur");this.set("disabled",this.isInactive);this.loaded();},onInputClick:function(e){if(!this.isInactive&&!this.viewState){this.showDatePicker();}},onIconClick:function(e){this.showDatePicker();},onInputFocus:function(e){this.inputNode.focused=true;this.justClicked=false;},onInputBlur:function(e){if(!this.hoverState){if(!this.isInactive&&this.viewState){this.hideDatePicker();}this.justClicked=false;}else{this.justClicked=true;setTimeout(_d.hitch(this,function(){this.inputNode.focus();}),0);}},onBodyMouseDown:function(e){if(this.isMouseOut(e)){this.hoverState=false;this.onInputBlur();}},isMouseOut:function(e){var _10=_a.position(this.inputNode);var _11=_a.position(this.dropDown);return (e.clientX<_10.x||e.clientX>_10.x+_10.w||e.clientY<_10.y||e.clientY>_10.y+_10.h)&&(e.clientX<_11.x||e.clientX>_11.x+_11.w||e.clientY<_11.y||e.clientY>_11.y+_11.h);},onInputKeyDown:function(e){if(e.keyCode==9&&this.viewState&&!this.isInactive){this.hideDatePicker();}},onInputKeyUp:function(e){switch(e.keyCode){case 27:if(this.viewState){this.hideDatePicker();}break;case 40:if(!this.viewState){this.showDatePicker();}break;default:var _12=this.get("value");if(this.datePicker&&_12){this.datePicker.set("value",_12);}}},showDatePicker:function(){if(!this.datePicker){var _13=null;var _14=this.domNode.parentNode;while(!_13&&_14&&_14!=document){_13=parseInt(_b.get(_14,"zIndex"),10);_14=_14.parentNode;}this.dropDown=_4.create("div",{"style":"position: absolute; display: none","id":this.id+"_lolipop"});this.bgIframe=new _8(this.dropDown);if(_13){_b.set(this.dropDown,"zIndex",_13);}this.datePicker=new _2({lang:_c.locale.toLowerCase(),onValueSelected:_d.hitch(this,this.handlerDatePicked),constraints:{selector:"date"},datePackage:/th$/i.test(_d.locale)?"dojox.date.buddhist":"dojo.date"});this.dropDown.appendChild(this.datePicker.domNode);document.body.appendChild(this.dropDown);this.dropDown.onmouseover=_d.hitch(this,function(e){this.hoverState=true;});this.dropDown.onmouseout=_d.hitch(this,function(e){this.hoverState=false;});}var _15=this.get("value");_15=(_15==null||_15==="")?+new Date():_15;this.datePicker.set("value",_15);var _16=_a.position(this.inputNode,true);this.dropDown.style.display="";var _17={l:this.isRtl?_16.x+_16.w-_a.getMarginBox(this.dropDown).w:_16.x,t:_16.y+_16.h};_a.setMarginBox(this.dropDown,_17);this.viewState=true;this.blurEvent=this.connect(document.body,"onmousedown","onBodyMouseDown");},hideDatePicker:function(){this.dropDown.style.display="none";this.hoverState=false;this.viewState=false;this.blurEvent=this.disconnect(this.blurEvent);},_setDisabledAttr:function(_18){this.isInactive=(/true/.test(_18));var _19=this.iconNode.parentNode;if(this.isInactive){_9.add(this.domNode,this.baseClass+"Disabled");this.inputNode.setAttribute("readonly","readonly");var evt;while(evt=this.keyEvents.pop()){this.disconnect(evt);}if(this.hasDate){_19&&_19.removeChild(this.iconNode);}}else{_9.remove(this.domNode,this.baseClass+"Disabled");this.inputNode.removeAttribute("readonly");var _1a=this.keyEvents,_1b=this.inputNode;if(!_1a.length){_1a.push(this.connect(_1b,"onkeydown","onInputKeyDown"));_1a.push(this.connect(_1b,"onkeyup","onInputKeyUp"));_1a.push(this.connect(_1b,"onchange","onChange"));}if(this.hasDate){this.domNode.insertBefore(this.iconNode,this.dateNode);}}},setDatePart:function(_1c,_1d){_1c.setFullYear(_1d.getFullYear());_1c.setMonth(_1d.getMonth());_1c.setDate(_1d.getDate());},setTimePart:function(_1e,_1f){_1e.setHours(_1f.getHours());_1e.setMinutes(_1f.getMinutes());_1e.setSeconds(_1f.getSeconds());_1e.setMilliseconds(_1f.getMilliseconds());},mergeDates:function(_20,_21){switch(this.dateFormat){case "date":this.setDatePart(_20,_21);break;case "time":this.setTimePart(_20,_21);break;case "datetime":case "custom":_20=_21;}return +_20;},_setValueAttr:function(_22){if(_22===null||_22===""){this.inputNode.value="";}else{if(_22 instanceof Date){var _23=window.mx.parser.formatDate(_22.getTime(),this.dateParams);this.inputNode.value=_23;}else{var nr=Number(_22);if(!isNaN(nr)){this.set("value",new Date(nr));}}}this._value=_22||_22===0?_22:undefined;},_getValueAttr:function(){var _24=this.inputNode.value;if(_24===""){return "";}var _25=new Date(this._value!==undefined?this._value:window.mx.parser.localizeEpoch(0)),_26=window.mx.parser.parseDate(_24,this.dateParams);if(_26!=null){return this.mergeDates(_25,new Date(_26));}else{return null;}},validate:function(e){var _27=this.inputNode.value;if(!_27){_3.hideTooltip(this._table);return;}if(_27.match(/^\d+[\/\-]\d+[\/\-]\d+$/)!=null){var _28=window.mx.parser.parseDate(_27,this.dateParams);if(isNaN(_28)){this.showValidationMsg();}else{this.inputNode.value=window.mx.parser.formatDate(_28,this.dateParams);_3.hideTooltip(this._table);}}else{this.showValidationMsg();}},showValidationMsg:function(){_3.showTooltip(window.mx.ui.translate("mendix.lib.Validations","invalid_date"),this._table);setTimeout(_d.hitch(this,function(){this.inputNode.focus();}),1);},onChange:function(){},handlerDatePicked:function(_29){if(_29!=null){var _2a=new Date(this._value!==undefined?this._value:window.mx.parser.localizeEpoch(0));this.set("value",this.mergeDates(_2a,new Date(_29)));this.onChange();}try{if(this.trigger!=""){this.trigger(_29);}}catch(e){}this.hideDatePicker();this.justClicked=true;this.inputNode.focus();},uninitialize:function(){if(this.dropDown){document.body.removeChild(this.dropDown);this.dropDown=null;}if(this.datePicker){this.datePicker.destroyRecursive();this.datePicker=null;}try{_3.hideTooltip(this._table);}catch(e){}this.bgIframe&&this.bgIframe.destroy();},getInvalidCause:function(){return window.mx.ui.translate("mendix.lib.Validations","invalid_date");}});return _f;});