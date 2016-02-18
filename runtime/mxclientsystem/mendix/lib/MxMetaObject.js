
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/MxMetaObject",["dojo/_base/json"],function(_1){function _2(_3){var _4=_3.json?_3.json:false,_5=_4?_4.guid:"0";var _6=function(_7){return (_4.attributes[_7]);};this.getGuid=function(){return (_5);};this.has=function(_8){if(!(typeof (_8)=="string")){throw new Error("mendix.lib.MxMetaObject.has: parameter attr is not of type String.");}return (_4.attributes[_8]!=null);};this.isEnum=function(_9){if(!(typeof (_9)=="string")){throw new Error("mendix.lib.MxMetaObject.isEnum : parameter attr is not of type String.");}var _a=this.getAttributeType(_9);return ((_a=="Enum")||(_a=="EnumSet"));};this.isNumber=function(_b){if(!(typeof (_b)=="string")){throw new Error("mendix.lib.MxMetaObject.isNumber : parameter attr is not of type String.");}var _c=this.getAttributeType(_b);return /Integer|Float|Long|AutoNumber/.test(_c);};this.isPassword=function(_d){if(!(typeof (_d)=="string")){throw new Error("mendix.lib.MxMetaObject.isDate : parameter attr is not of type String.");}var _e=this.getAttributeType(_d);return (_e=="HashString");};this.isCurrency=function(_f){if(!(typeof (_f)=="string")){throw new Error("mendix.lib.MxMetaObject.isCurrency : parameter attr is not of type String.");}return (this.getAttributeType(_f)=="Currency");};this.isDate=function(_10){if(!(typeof (_10)=="string")){throw new Error("mendix.lib.MxMetaObject.isDate : parameter attr is not of type String.");}var _11=this.getAttributeType(_10);return ((_11=="Date")||(_11=="DateTime"));};this.isLocalizedDate=function(_12){if(this.isDate(_12)){return /true/.test(_6(_12)["localize"]);}else{return null;}};this.isBoolean=function(_13){if(!(typeof (_13)=="string")){throw new Error("mendix.lib.MxMetaObject.isBoolean : parameter attr is not of type String.");}var _14=this.getAttributeType(_13);return (_14=="Boolean");};this.isReference=function(_15){if(!(typeof (_15)=="string")){throw new Error("mendix.lib.MxMetaObject.isReference : parameter attr is not of type String.");}var _16=this.getAttributeType(_15);return (!((_16!="ObjectReference")&&(_16!="ObjectReferenceSet")));};this.isObjectReference=function(_17){if(!(typeof (_17)=="string")){throw new Error("mendix.lib.MxMetaObject.isObjectReference : parameter attr is not of type String.");}return (this.getAttributeType(_17)=="ObjectReference");};this.isObjectReferenceSet=function(_18){if(!(typeof (_18)=="string")){throw new Error("mendix.lib.MxMetaObject.isObjectReferenceSet : parameter attr is not of type String.");}return (this.getAttributeType(_18)=="ObjectReferenceSet");};this.getOptions=function(_19){if(!(typeof (_19)=="string")){throw new Error("mendix.lib.MxMetaObject.getOptions : parameter attr is not of type String.");}else{if(!(this.isEnum(_19))){throw new Error("mendix.lib.MxMetaObject.getOptions : attribute '"+_19+"' is not an Enumeration.");}}try{var _1a=false;if(_6(_19)){var arr=_6(_19)["options"];if(arr&&arr.length){_1a=[];for(var i=0;i<arr.length;i++){for(var j in arr[i]){_1a.push(arr[i][j]);}}}return _1a;}}catch(e){return false;}};this.getEnumKeys=function(_1b,_1c){if(!this.isEnum(_1b)){}var arr=_6(_1b)["options"];var _1d={};var ret=[];if(typeof (_1c)=="string"){_1c=_1c.split(/,/);}for(var i=0;i<arr.length;i++){for(var j in arr[i]){_1d[j]=arr[i][j];}}for(var i in _1d){for(var j=0;j<_1c.length;j++){if(_1c[j]==_1d[i]){ret.push(i);}}}return (ret.join(","));};this.getEnumMap=function(_1e){if(!this.isEnum(_1e)){return null;}var map=[];var arr=_6(_1e)["options"];for(var i=0;i<arr.length;i++){for(var j in arr[i]){map.push({key:j,caption:arr[i][j]});break;}}return map;};this.getEnumKVPairs=function(_1f){if(!this.isEnum(_1f)){return null;}var map={};var arr=_6(_1f)["options"];for(var i=0;i<arr.length;i++){for(var j in arr[i]){map[j]=arr[i][j];}}return map;};this.getEnumValue=function(_20,_21){return _21;};this.getEnumCaption=function(_22,_23){if(!this.isEnum(_22)){return null;}var arr=_6(_22)["options"];for(var i=0;i<arr.length;i++){var _24=arr[i];for(var key in _24){if(key==_23){return _24[key];}}}return _23;};this.getReferenceAttributes=function(){var _25=[];for(var i in _4.attributes){if(this.isReference(i)){_25.push(i);}}return _25;};this.getAttributes=function(){var _26=[];for(var i in _4.attributes){_26.push(i);}return (_26);};this.getAttributesWithoutReferences=function(){var _27=[];for(var i in _4.attributes){if(!this.isReference(i)){_27.push(i);}}return _27;};this.getAttributeType=function(_28){if(!(typeof (_28)=="string")){throw new Error("mendix.lib.MxMetaObject.getAttributeType : parameter attr is not of type String.");}if(this.has(_28)){return (_6(_28)["type"]);}else{return false;}};this.getSelectorEntity=function(_29){if(!(typeof (_29)=="string")){throw new Error("mendix.lib.MxMetaObject.getSelectorEntity : parameter attr is not of type String.");}if(this.has(_29)){return _6(_29)["klass"];}else{return false;}};this.getEntity=function(){return (_4["objectType"]);};this.isA=function(_2a){if(this.getEntity()==_2a){return true;}return this.inheritsFrom(_2a);};this.hasSuperEntities=function(){return (_4.properties["superclasses"].length!=0);};this.getSuperEntities=function(){var _2b=_4.properties["superclasses"];if(typeof (_2b)=="string"){return ([_2b]);}else{return _2b;}};this.hasSubEntities=function(){return (_4.properties["subclasses"].length!=0);};this.getSubEntities=function(){var _2c=_4.properties["subclasses"];return (typeof (_2c)=="string")?[_2c]:_2c;};this.serialize=function(){alert("mxobject.serialize : XXX");return (_1.toJson(_4,true));};this.dump=function(){return _1.toJson(_4).replace(/}/g,"}\n");};this.dumpAttribute=function(_2d){return _4.attributes[_2d].toSource();};this.inheritsFrom=function(_2e){var _2f=this.getSuperEntities()||[];for(var i=0,_30;_30=_2f[i];i++){if(_2e==_30){return true;}var _31=window.mx.meta.getEntity("System.User");if(_31.inheritsFrom(_2e)){return true;}}return false;};};return _2;});