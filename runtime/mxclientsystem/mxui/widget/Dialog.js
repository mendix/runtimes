/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/Dialog",["mxui/widget/_Popup","mxui/wm/focus","mxui/dom","dojo/dom-geometry","dojo/dom-style","dojo/touch","dojo/sniff","dojo/_base/event","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){var _a=_9(_1,{declaredClass:"mxui.widget.Dialog",caption:"",content:"",buttons:null,closable:true,resizable:true,_handler:null,_headerNode:null,_bodyNode:null,_footerNode:null,_captionNode:null,_closeButton:null,buildRendering:function(){this.buildDialog();this.setCaption(this.caption);this.setContent(this.content);this.setButtons(this.buttons);this.inherited(arguments);},buildDialog:function(){var $=_3.create;this.domNode=$("div",{"class":"modal-dialog mx-dialog"},this._contentNode=$("div",{"class":"modal-content mx-dialog-content"},this._headerNode=$("div",{focusindex:"-1","class":"modal-header mx-dialog-header"},this._captionNode=$("h4",{"class":"caption mx-dialog-caption"})),this._bodyNode=$("div",{"class":"modal-body mx-dialog-body"}),this._footerNode=$("div",{"class":"modal-footer mx-dialog-footer",style:"display: none"})));_5.set(this.domNode,"opacity",0);if(this.closable){var _b=this._closeButton=$("button",{type:"button","class":"close mx-dialog-close"});_b.innerHTML="&times;";this.connect(_b,_6.press,function(e){this.hide();if(_7("ie")==8){_8.stop(e);}});this._headerNode.insertBefore(_b,this._captionNode);}_2.addBox(this._footerNode);},onBeforeShow:function(){this.inherited(arguments);_3.moveFocusTo(this.domNode);this.connect(window,"orientationchange","center");this.resize();},getLayerName:function(){return "dialog";},getPositionName:function(){return "center";},layout:function(){var _c=_4.getContentBox(this.domNode).h,_d=_4.getMarginBox(this._headerNode).h,_e=_4.getMarginBox(this._footerNode).h,_f=_3.getNodeExtents(this._contentNode).h;_4.setContentSize(this._bodyNode,{h:_c-_f-_d-_e});},setCaption:function(_10){var _11=_3.escapeString(_10);this._captionNode.innerHTML=_11||"&nbsp;";},setContent:function(_12){_3.empty(this._bodyNode);if(_12){this._bodyNode.appendChild(_3.create("#",_12));}},setButtons:function(_13){_3.empty(this._footerNode);if(_13){for(var i=0,_14;_14=_13[i];i++){this._footerNode.appendChild(_14);}this._footerNode.style.display="";}}});return _a;});