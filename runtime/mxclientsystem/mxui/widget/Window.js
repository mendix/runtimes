/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/Window",["mxui/widget/_Popup","mxui/widget/DataView","mxui/dom","mxui/widget","dojo/sniff","dojo/dom-construct","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dojo/touch","dojo/_base/event","dojo/_base/declare","dijit/registry"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){var $=_3.create;var _e=_c(_1,{declaredClass:"mxui.widget.Window",title:"",width:0,height:0,resizable:true,content:null,cssStyle:"",cssClass:"",_headerNode:null,buildRendering:function(){this.domNode=$("div",{"class":"modal-dialog mx-window "+this.cssClass,"style":this.cssStyle},this._contentNode=$("div",{"class":"modal-content mx-window-content"},this._headerNode=$("div",{focusindex:"-1","class":"modal-header mx-window-header"},$("h4",this.title||"...")),this.content));_8.add(this.content,"modal-body mx-window-body");var _f=$("button",{type:"button","class":"close"});_f.innerHTML="&times;";_6.place(_f,this._headerNode,"first");this.connect(_f,"click",function(e){this.onClose();if(_5("ie")==8){_b.stop(e);}});this.inherited(arguments);_7.set(this.domNode,"opacity","0");},onBeforeShow:function(){this.inherited(arguments);_3.moveFocusTo(this.content);var _10=_d.findWidgets(this.content);if(_10.length==1&&_10[0] instanceof _2&&_4.findNonPlaceholderParent(_10[0].domNode)==this.content){_8.add(this.domNode,"mx-window-view");}var box={};if(this.width){box.w=this.width;}if(this.height){box.h=this.height;}this.resize(box);},layout:function(){var _11=_9.getContentBox(this.domNode).h,_12=_9.getMarginBox(this._headerNode).h,_13=_3.getNodeExtents(this._contentNode).h;_9.setContentSize(this.content,{h:Math.max(0,_11-_13-_12)});this.resizeChildren(this.content);},activate:function(){_8.add(this.domNode,"mx-window-active");},deactivate:function(){_8.remove(this.domNode,"mx-window-active");},_setTitleAttr:function(){},onClose:function(){}});return _e;});