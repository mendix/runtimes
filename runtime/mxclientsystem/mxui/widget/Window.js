
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Window",["mxui/widget/_Popup","mxui/mixin/_OverflowHelper","mxui/widget/DataView","mxui/dom","mxui/widget","dojo/sniff","dojo/dom-construct","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dojo/_base/fx","dojo/touch","dojo/_base/lang","dojo/_base/event","dojo/_base/declare","dijit/registry"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10){var $=_4.create;var _11=_f([_1,_2],{declaredClass:"mxui.widget.Window",title:"",width:0,height:0,resizable:true,content:null,cssStyle:"",cssClass:"",_headerNode:null,_layerId:0,buildRendering:function(){this.domNode=$("div",{"class":"modal-dialog mx-window "+this.cssClass,"style":this.cssStyle},this._contentNode=$("div",{"class":"modal-content mx-window-content"},this._headerNode=$("div",{"class":"modal-header mx-window-header"},$("h4",this.title||"...")),this.content));_9.add(this.content,"modal-body mx-window-body");var _12=$("button",{type:"button","class":"close"});_12.innerHTML="&times;";_7.place(_12,this._headerNode,"first");this.connect(_12,_c.press,function(e){this.onClose();if(_6("ie")==8){_e.stop(e);}});this.hideOverflow(document.body);_8.set(this.domNode,"opacity",0);document.body.appendChild(this.domNode);this.inherited(arguments);},show:function(){if(this._visible){return;}this.onShow();var _13=_10.findWidgets(this.content);if(_13.length==1&&_5.findNonPlaceholderParent(_13[0].domNode)==this.content){_9.add(this.domNode,"mx-window-view");}var box={};if(this.width){box.w=this.width;}if(this.height){box.h=this.height;}this.resize(box);this.showOverflow(document.body);if(this.delay){_b.fadeIn({node:this.domNode,duration:this.delay}).play();}else{_8.set(this.domNode,"opacity",100);}this.onAfterShow();},hide:function(){var _14=this;if(!this._visible){return;}this.onHide();if(this.delay){_b.fadeOut({node:this.domNode,duration:this.delay,onEnd:function(){_14.destroy();}}).play();}else{this.destroy();}},layout:function(){var _15=_a.getContentBox(this.domNode).h,_16=_a.getMarginBox(this._headerNode).h,_17=_4.getNodeExtents(this._contentNode).h;_a.setContentSize(this.content,{h:_15-_17-_16});this.resizeChildren(this.content);},activate:function(){_9.add(this.domNode,"mx-window-active");},deactivate:function(){_9.remove(this.domNode,"mx-window-active");},_setTitleAttr:function(){},onAfterShow:function(){},onClose:function(){}});return _11;});