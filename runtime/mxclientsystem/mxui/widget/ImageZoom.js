/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ImageZoom",["mxui/widget/_WidgetBase","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.ImageZoom",src:"",_image:null,_offset:0,_content:null,buildRendering:function(){var $=_2.create;this.domNode=$("div",{"class":"mx-imagezoom"},$("div",{"class":"mx-imagezoom-wrapper"},this._image=$("img",{"class":"mx-imagezoom-image",src:this.src})));this._content=document.getElementById("content");this.connect(this.domNode,"click","hide");},show:function(){this._offset=window.pageYOffset;this._content.style.display="none";document.body.appendChild(this.domNode);},hide:function(e){document.body.removeChild(this.domNode);var _6=this;setTimeout(function(){window.scrollTo(0,_6._offset);_6._content.style.display="";});},_setSrcAttr:function(_7){this._image.src=this.src=_7;}});return _5;});