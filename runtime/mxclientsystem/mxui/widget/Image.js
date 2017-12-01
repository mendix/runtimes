/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/Image",["mxui/widget/StaticImage","mendix/logger","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.Image",datasource:null,defaultUrl:"",_entity:"",_xpath:"",_referred:"",postCreate:function(){this.inherited(arguments);var _5=this.datasource.path.split("/");this._entity=_5.pop();this._referred=!!_5.length;this._xpath="//"+this._entity;if(this._referred){this._xpath+="["+_5.reverse().join("/")+"=[%CurrentObject%]]";}},applyContext:function(_6,_7){this.unsubscribeAll();this.mxcontext.mixin(_6);var _8=this.mxcontext.getTrackId();var _9=function(e){window.mx.onError(e);_7&&_7();};if(!_8){this.update(null,_7);}else{if(this._referred){window.mx.data.get({xpath:this._xpath.replace("[%CurrentObject%]",_8),callback:function(_a){this.updateReferred(_a[0],_7,_6);},error:_9},this);}else{window.mx.data.get({guid:_8,noCache:true,callback:function(_b){this.update(_b,_7);},error:_9},this);}}},update:function(_c,_d){if(_c){this.subscribe({guid:_c.getGuid(),callback:function(){this.update(_c);}});}this._setImage(_c,_d);},updateReferred:function(_e,_f,_10){if(_e){this.subscribe({guid:_10.getTrackId(),callback:function(){this.applyContext(_10);}});}this.mxcontext.setContext(this._entity,_e?_e.getGuid():"");this.update(_e,_f);},_setImage:function(obj,_11){var url;if(obj&&obj.get2("HasContents")){url="file?"+["guid="+obj.getGuid(),"thumb="+this.thumb,"changedDate="+obj.get2("changedDate")].join("&");}else{url=this.defaultUrl;}this.setUrl(url,_11);}});return _4;});