/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/FileInput",["mxui/widget/Button","mxui/widget/_LabeledWidget","mxui/mixin/_ValidationHelper","mxui/dom","mendix/lang","mendix/lib/ConnectionError","mendix/lib/Upload","mendix/logger","dijit/focus","dojo/sniff","dojo/dom-class","dojo/keys","dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10){var _11="...";var _12=_e([_2,_3],{declaredClass:"mxui.widget.FileInput",input:null,maxFileSize:0,restrictions:"",accept:"",uploadable:false,downloadable:false,target:"internal",_allowedExts:null,_labelNode:null,_uploadButton:null,_formNode:null,_selectState:"none",buildRendering:function(){var $=_4.create,_13=!_a("mobile");if(_13){this._sendFile=this._sendFileReal;}this.domNode=$("div",{"class":"mx-fileinput"});if(this.uploadable){if(_13){var _14=this._uploadButton=new _1({caption:window.mx.ui.translate("mxui.widget.MxFormView","upload"),cssClasses:["mx-fileinput-upload-button"]});this.domNode.appendChild($("#",this._labelNode=$("input",{"class":"form-control mx-wrapped-label",type:"text",readonly:"readonly",value:_11})," ",this._formNode=$("form",{"class":"mx-wrapped-form",enctype:"multipart/form-data",method:"POST"},this.input=$("input",{"class":"mx-wrapped-input",type:"file",name:"mxdocument",accept:this.accept,tabindex:-1}),_14.domNode)));this.connect(this._uploadButton.domNode,"focus",function(){_b.add(this._labelNode,"mx-focus");});this.connect(this._uploadButton.domNode,"blur",function(){_b.remove(this._labelNode,"mx-focus");});this.connect(this._labelNode,"click",function(){_9.focus(this._uploadButton.domNode);});this.connect(this._formNode,"keyup",function(e){if(e.keyCode==_c.DELETE||e.keycode==_c.BACKSPACE){this._reset();_f.stop(e);}});}else{this.domNode.appendChild(this._formNode=$("form",{"class":"mx-normal-form",enctype:"multipart/form-data",method:"POST"},this.input=$("input",{type:"file",name:"mxdocument",accept:this.accept})));}this.connect(this._formNode,"submit",function(){return false;});this.connect(this.input,"click",function(){this._selectState="selecting";});this.connect(this.input,"change","_handleFileSelected");}if(this.downloadable){var _15=this._downloadButton=new _1({caption:window.mx.ui.translate("mxui.widget.MxFormView","download"),onClick:_10.hitch(this,"_handleDownloadClick"),cssClasses:["mx-fileinput-download-button"]});this.domNode.appendChild($("#"," ",_15.domNode));}},postCreate:function(){this._allowedExts=this.restrictions.toLowerCase().split(";");this.listen("submit",this._sendFile);},update:function(obj,_16){this._mxObject=obj;this._reset();this.updateDisabled();this._updateDownloadDisabled();_16&&_16();},_updateDownloadDisabled:function(){if(this._downloadButton){this._downloadButton.set("disabled",!this._mxObject||!this._mxObject.get2("HasContents"));}},checkDisabled:function(){return this.inherited(arguments)||!this._mxObject;},_setDisabledState:function(_17){if(this.uploadable){if(this._uploadButton){this._uploadButton.set("disabled",_17);}if(_17){this.input.setAttribute("disabled","disabled");}else{this.input.removeAttribute("disabled");}}},enable:function(){this._setDisabledState(false);},disable:function(){this._setDisabledState(true);},validate:function(){if(!this.input||!this.input.value){return null;}if(this.restrictions!==""){var _18=this.input.value;var _19=_18.lastIndexOf(".");var _1a=_18.substring(_19+1).toLowerCase();if(_19==-1||_d.indexOf(this._allowedExts,_1a)==-1){return window.mx.ui.translate("mendix.widget.MxFileinput","incorrect_extension",this.restrictions.replace(/;/g,", "));}}if(this.maxFileSize&&this.input.files){var _1b=this.input.files[0].size/1048576;if(_1b>this.maxFileSize){return window.mx.ui.translate("mendix.widget.MxFileinput","file_too_large",[_1b.toFixed(2),this.maxFileSize.toString()]);}}return null;},uninitialize:function(){this._uploadButton&&this._uploadButton.destroy();this._downloadButton&&this._downloadButton.destroy();},_handleDownloadClick:function(e){this._downloadFile();_f.stop(e);},_handleFileSelected:function(e){this._selectState="selected";this.isValid();if(this._labelNode){this._labelNode.value=this.input.value?this.input.value.replace(/^.*\//,""):_11;}},_reset:function(){this.removeError();if(this._formNode){this.input.value="";this._formNode.reset();}if(this._labelNode){this._labelNode.value=_11;}},_sendFile:function(_1c,_1d){var _1e=this,_1f=function(){return _1e._selectState!=="selecting";};var pid=window.mx.ui.showProgress();_5.waitUntilPredicateHolds(_1f,function(){window.mx.ui.hideProgress(pid);_1e._sendFileReal(_1c,_1d);},[100,200,500,500,500,500]);},_sendFileReal:function(_20,_21){if(this._selectState==="none"||this.input.value===""||this.validate()!=null){_20();return;}var _22=this,pid;var _23=new _7({form:this._formNode,width:this.thumbnailWidth,height:this.thumbnailHeight,objectGuid:this._mxObject.getGuid(),maxFileSize:this.maxFileSize,callback:function(){_22._selectState="none";if(_20){_20();}},error:function(e){_22._selectState="selected";if(_21){_21(e);}},startUpload:function(){pid=window.mx.ui.showProgress();},finishUpload:function(){window.mx.ui.hideProgress(pid);}});_23.upload();},_downloadFile:function(){if(this._mxObject){window.mx.ui.downloadFile({mxobject:this._mxObject,target:this.target});}}});return _12;});