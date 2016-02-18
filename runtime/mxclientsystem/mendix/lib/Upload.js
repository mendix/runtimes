/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/lib/Upload",["mxui/io/iframe","mendix/lib/Error","mendix/lang","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5){var _6=_5(null,{constructor:function(_7){_4.mixin(this,_7);},upload:function(){if(window.FormData){this._uploadViaFormData();}else{this._uploadViaIFrame();}},_uploadViaFormData:function(){var _8=this;var _9=this.form.mxdocument.files[0];var _a={maxFileSize:this.maxFileSize};if(this.width!=null){_a.width=this.width;}if(this.height!=null){_a.height=this.height;}this.startUpload();mx.data.saveDocument(this.objectGuid,_a,_9,function(){if(_8.finishUpload){_8.finishUpload();}if(_8.callback){_8.callback();}},function(e){if(_8.finishUpload){_8.finishUpload();}if(_8.error){_8.error(e);}});},_uploadViaIFrame:function(){var _b=this.form,_c=this;_b.action=this._determineUrl();this.startUpload(false);_1.send({form:_b,handleAs:"json",handle:function(_d){try{if(_d instanceof _2){if(_c.error){_c.error(_d);}}else{if(_c.callback){_c.callback();}}}finally{_c.finishUpload(false);}}});}});return _6;});