/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/lib/Upload",["mendix/lib/Error","mendix/lang","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(null,{constructor:function(_6){_3.mixin(this,_6);},upload:function(){var _7=this;var _8=this.form.mxdocument.files[0];var _9={maxFileSize:this.maxFileSize};if(this.width!=null){_9.width=this.width;}if(this.height!=null){_9.height=this.height;}this.startUpload();mx.data.saveDocument(this.objectGuid,null,_9,_8,function(){if(_7.finishUpload){_7.finishUpload();}if(_7.callback){_7.callback();}},function(e){if(_7.finishUpload){_7.finishUpload();}if(_7.error){_7.error(e);}});}});return _5;});