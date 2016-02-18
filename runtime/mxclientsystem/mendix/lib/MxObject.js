
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/lib/MxObject",["mendix/lang","mendix/logger","dojo/_base/json","dojo/_base/array","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var _7=_6(null,{constructor:function(_8){this.id="mendix.lib.MxObject";this.jsonData=_8?_8.json:false;this.metaData=_8?_8.meta:false;this._changeData={};this._backup=null;this._references=null;if(this.jsonData&&this.metaData){this._guid=this.jsonData.guid;this._classname=this.jsonData.objectType;this.id+="("+this._classname+":"+this._guid+")";}if(!this._classname){var _9=this.jsonData&&this.jsonData.objectType;_2.error(this.id+".create: Invalid Mendix object. Check entity access"+(_9?" for entity "+_9:"")+".");this._guid=0;this._classname="";this.jsonData=null;}if(!this._guid){this._guid="0";this.save=this.commit=this.rollback=function(){};}},attachReferences:function(_a){if(_a&&_a.length>0){this._references={};_4.forEach(_a,function(_b){this._references[_b.getGuid()]=_b;},this);}},resetFromJSON:function(_c){this.jsonData=_c;this._changeData={};this._guid=this.jsonData?this.jsonData["guid"]:0;this._backup=null;},getGuid:function(){return (this._guid);},hasChanges:function(){return !_1.objectIsEmpty(this._changeData);},_collectChanges:function(){return _5.mixin({},this._changeData);},set:function(_d,_e){return this._setContent(_d,_e);},_setContent:function(_f,_10){if(!(typeof (_f)=="string")){var _11=this.id+"._setContent : parameter attr ("+_f+") is not of type String.";_2.error(_11);throw new Error(_11);}try{if(this.metaData.has(_f)){var _12=this.get(_f);if(_12==null&&_10==""){return false;}if(this.isNumber(_f)||this.isCurrency(_f)){if(_1.numberTooBig(_10)){var msg;if(window.mx.ui&&window.mx.ui.translate){msg=window.mx.ui.translate("mendix.lib.Validations","number_too_big");}else{msg="Invalid number: number too big";}window.mx.data.addValidation(this._guid,_f,msg);return;}}else{if(this.isEnum(_f)){}else{if(this.isDate(_f)){var _13=this.isLocalizedDate(_f);if(_10!==""){if(_13){_10=Number(_10);}else{_10=window.mx.parser.delocalizeEpoch(_10);}}}else{if(this.isPassword(_f)){_10=_10.replace(/[\s\t]+$/,"").replace(/^[\s\t]+/,"");}else{if(this.isBoolean(_f)){_10=!!_10;}else{if(_5.isArray(_10)&&this.isObjectReference(_f)){throw new Error("mendix.lib.MxObject._setContent : trying to set single object reference to multiple values");}else{if(!_5.isArray(_10)&&this.isObjectReferenceSet(_f)){throw new Error("mendix.lib.MxObject._setContent : trying to set object reference set to single value");}}}}}}}if(_10!==_12){return (this._makeChange(_f,_10));}}else{return (false);}}catch(e){throw new Error("mendix.lib.MxObject._setContent caught : "+e);}},isReadonlyAttr:function(_14){if(this.has(_14)){var _15=this._getAttributeNode(_14);return !!_15.readonly;}else{if(this.metaData.has(_14)){return false;}else{return true;}}},fetch:function(_16,_17){var _18=this,obj=this,_19=null,_1a;if(!_16){_1a=[];}else{if(_16 instanceof Array){_1a=_16.slice();}else{_1a=_16.split("/");}}if(this.isA(_1a[0])){_1a.shift();}if(typeof _17!="function"){throw new Error(_18.id+".fetch : callback is not a function");}var _1b=function(){if(_1a.length===0){_17(obj);}else{if(_1a.length==1){if(_19){window.mx.data.release(_19);}_17(obj.get(_1a[0]));}else{if(_19){window.mx.data.release(_19);}var ref=_1a.shift(),_1c=false,_1d,_1e;if(obj.isObjectReference(ref)){var _1f=obj.get(ref);if(_1f===""){_17(null);return;}if(typeof _1f=="object"){_1d=[_1f.guid];}else{_1d=[_1f];}}else{if(obj.isObjectReferenceSet(ref)){if(_1a.length==1){_1c=true;var _20=obj.get(ref);if(_20.length===0){_17(null);return;}if(typeof _1d[0]=="object"){_1d=[];while(_20.length>0){_1d.push(_20.shift().guid);}}else{_1d=_20;}}else{throw new Error(_18.id+".fetch : "+obj+" reference set should be last reference in path");}}else{return _17(null);}}_1e=_1a.shift();if(!_1e){throw new Error(_18.id+".fetch : no type specified");}if(_1d){window.mx.data.get({guids:_1d,callback:function(_21){if(_1c){if(_21.length===0||_21[0].isA(_1e)){_17(_21);}else{_17(null);}}else{_19=obj=_21[0];if(_21.length>1){window.mx.data.release(_21.slice(1));}if(obj){if(obj.isA(_1e)){_1b();}else{_17(null);}}else{_17(null);}}},error:function(e){throw new Error(_18.id+".fetch : could not get objects with GUIDs "+_1d);}});}else{throw new Error(_18.id+".fetch : "+obj+"'s '"+ref+"' attribute is empty");}}}};_1b();},get:function(_22){if(!(typeof (_22)=="string")){var e=this.id+".get : parameter attr "+_22+" is not of type String";_2.error(e);throw new Error(e);}if(this.has(_22)||this.metaData.has(_22)){var _23=(this._changeData[_22]!=null)?this._changeData[_22]:this._getAttributeValue(_22);if(this.isDate(_22)){var _24=this.isLocalizedDate(_22);if(_23===""||_23==null){_23="";}else{_23=_24?Number(_23):window.mx.parser.localizeEpoch(_23);}}else{if(this.isBoolean(_22)){if(typeof _23=="string"&&_23!=""){_23=_23.match(/true/)!=null;}}}return (typeof _23=="object")?_5.clone(_23):_23;}else{return null;}},has:function(_25){if(!(typeof (_25)=="string")){var e=this.id+".has : parameter attr "+_25+" is not of type String.";_2.error(e);throw new Error(e);}return (this.jsonData!=null&&(_25 in this.jsonData.attributes));},getReferences:function(_26){if(!(typeof (_26)=="string")){var e=this.id+".getReferences : parameter attr "+_26+" is not of type String.";_2.error(e);throw new Error(e);}var _27=[];if(this.has(_26)){if(this.isReference(_26)){if(this._hasChildren(_26)&&this._changeData[_26]==null){var _28=this.getChildren(_26);var _29=[];for(var i=0;i<_28.length;i++){_29.push(_28[i].getGuid());}_27=_29;}else{_27=this.get(_26);}if(_27==""){_27=[];}else{if(typeof (_27)=="string"||typeof (_27)=="number"){_27=[_27];}else{if((typeof (_27)=="object")&&(_27.length==null)){_27=_1.objectToArray(_27);}}}}else{var e=this.id+".getReferences: attribute "+_26+" is not an ObjectReference(Set).";_2.error(e);throw new Error(e);}}else{}return _27;},getReference:function(_2a){if(!(typeof (_2a)=="string")){var e=this.id+".getReference : parameter attr is not of type String.";_2.error(e);throw new Error(e);}if(this.has(_2a)){if(!this.metaData.isObjectReference(_2a)){var e=this.id+".getReference: attribute "+_2a+" is not an ObjectReference.";_2.exception(e);throw new Error(e);}}else{return null;}if(this._hasChildren(_2a)){return (this.getChild(_2a)).getGuid();}else{return (this.get(_2a));}},isEnum:function(_2b){return this.metaData.isEnum(_2b);},isNumber:function(_2c){return this.metaData.isNumber(_2c);},isCurrency:function(_2d){return this.metaData.isCurrency(_2d);},isPassword:function(_2e){return this.metaData.isPassword(_2e);},isDate:function(_2f){return this.metaData.isDate(_2f);},isLocalizedDate:function(_30){return this.metaData.isLocalizedDate(_30);},isBoolean:function(_31){return this.metaData.isBoolean(_31);},isReference:function(_32){return this.metaData.isReference(_32);},isObjectReference:function(_33){return this.metaData.isObjectReference(_33);},isObjectReferenceSet:function(_34){return this.metaData.isObjectReferenceSet(_34);},getOptions:function(_35){return this.metaData.getOptions(_35);},getEnumKeys:function(_36,_37){return this.metaData.getEnumKeys(_36,_37);},getEnumMap:function(_38){return this.metaData.getEnumMap(_38);},getEnumKVPairs:function(_39){return this.metaData.getEnumKVPairs(_39);},getEnumValue:function(_3a){return this.metaData.getEnumValue(_3a,this.get(_3a));},getEnumCaption:function(_3b){return this.metaData.getEnumCaption(_3b,this.get(_3b));},hasChildren:function(_3c){if(!(typeof (_3c)=="string")){var _3d=this.id+".hasChildren : parameter attr ("+_3c+") is not of type String.";_2.error(_3d);throw new Error(_3d);}return (this.isReference(_3c)&&this._hasChildren(_3c));},getChildren:function(_3e){if(!(typeof (_3e)=="string")){var _3f=this.id+".getChildren : parameter attr ("+_3e+") is not of type String.";_2.error(_3f);throw new Error(_3f);}var _40=[];var _41=null;if(this.has(_3e)){if(this.isReference(_3e)){if(this._hasChildren(_3e)){_41=this.get(_3e);if(this.isObjectReference(_3e)){if(this._references&&this._references[_41]){var _42=this._references[_41];_42._references=this._references;_40.push(_42);}else{_40.push(window.mx.data.jsonToMxObject(_41));}}else{for(var i in _41){if(this._references&&this._references[_41]){var _42=this._references[i];_42._references=this._references;_40.push(_42);}else{_40.push(window.mx.data.jsonToMxObject(_41[i]));}}}}else{}}else{var e=this.id+".getChildren: attribute "+_3e+" is not an ObjectReference(Set).";_2.exception(e);throw new Error(e);}}else{}return _40;},getChild:function(_43){if(!(typeof (_43)=="string")){var e=this.id+".getChild : parameter attr("+_43+") is not of type String.";_2.error(e);throw new Error(e);}if(this.has(_43)&&this.isObjectReference(_43)){var _44=this.get(_43);if(this._references&&this._references[_44]){var _45=this._references[_44];_45._references=this._references;return _45;}else{if(typeof _44=="object"){return new _7({json:_44,meta:window.mx.meta.getEntity(_44.objectType)});}else{return null;}}}},removeReferences:function(_46,_47){if(!(typeof (_46)=="string")){var e=this.id+".removeReference : parameter attr is not of type String.";_2.error(e);throw new Error(e);}else{if(this.has(_46)){if(!this.isReference(_46)){var e=this.id+".removeReference : attempt to remove Reference from non-Reference attribute : "+_46;_2.exception(e);throw new Error(e);}}else{return false;}}if(!(_5.isArray(_47))){_47=[_47];}try{if(!this._hasChildren(_46)){if(this.isObjectReference(_46)){this._setContent(_46,"");}else{this._setContent(_46,_1.arraySubtract(this.getReferences(_46),_47));}}else{if(this.isObjectReference(_46)){this._setContent(_46,"");}else{for(var i=0;i<_47.length;i++){delete this.jsonData.attributes[_46].value[_47[i]];}var val=_1.arraySubtract(this.getReferences(_46),_47);return this._makeChange(_46,val);}}}catch(e){_2.error(this.id+".removeReference caught : "+e);return false;}},addReference:function(_48,_49){if(!(typeof (_48)=="string")){var e=this.id+".addReference : parameter attr is not of type String.";_2.error(e);throw new Error(e);}else{if(!_49){var e=this.id+".addReference : parameter guid is not set.";_2.error(e);throw new Error(e);}else{if(this.has(_48)){if(!this.isReference(_48)){var e=this.id+".addReference : attempt to add Reference to non-Reference attribute : "+_48;_2.exception(e);throw new Error(e);}}else{return false;}}}try{if(this.isObjectReference(_48)){this._setContent(_48,_49);}else{var _4a=this.getReferences(_48);var _4b=_4a.join(";");if(!(_4b.match(_49))){_4a.push(_49);this._setContent(_48,_4a);}}}catch(e){return false;}},addReferences:function(_4c,_4d){for(var i=0;i<_4d.length;i++){var _4e=_4d[i];if(_4e!=0&&!isNaN(_4e)){this.addReference(_4c,_4e);}}},getReferenceAttributes:function(){return this.metaData.getReferenceAttributes();},getAttributes:function(){return this.metaData.getAttributes();},getPrimitives:function(){return this.metaData.getAttributesWithoutReferences();},getAttributeType:function(_4f){return this.metaData.getAttributeType(_4f);},getSelectorEntity:function(_50){return this.metaData.getSelectorEntity(_50);},getEntity:function(){return (this.jsonData&&this.jsonData["objectType"]);},isA:function(_51){return this.metaData.isA(_51);},hasSuperEntities:function(){return this.metaData.hasSuperEntities();},getSuperEntities:function(){return this.metaData.getSuperEntities();},hasSubEntities:function(){return this.metaData.hasSubEntities();},getSubEntities:function(){return this.metaData.getSubEntities();},reset:function(){this._changeData=this._backup!=null?this._backup:{};},inheritsFrom:function(_52){return this.metaData.inheritsFrom(_52);},compare:function(_53){if(_53.getEntity()!=this.getEntity()){return false;}var _54=this.getAttributesWithoutReferences();for(var i=0,_55;_55=_54[i];i++){if(this.get(_55)!=_53.get(_55)){return false;}}var _56=this.getReferenceAttributes();for(var i=0,ref;ref=_56[i];i++){if((ref=="System.changedBy")||(ref=="System.owner")){continue;}var _57=_53.getReferences(ref);var _58=this.getReferences(ref);var _59=_58.join(",");for(var j=0,id;id=_57[j];j++){if(!_59.match(id)){return false;}}}return true;},toString:function(){return this.getGuid();},dump:function(){return _3.toJson(this.jsonData).replace(/}/g,"}\n");},dumpAttribute:function(_5a){return String(this._getAttributeValue(_5a));},clean:function(){},_hasChildren:function(_5b){if(this._changeData[_5b]){return false;}var _5c=this._getAttributeValue(_5b);if(this._references&&this._references[_5c]){return true;}return (_5c&&(typeof _5c=="object")&&(_5c.length==null));},_getAttributeValue:function(_5d){var val=this.jsonData.attributes[_5d];if(val===undefined){val=null;}return (val&&(typeof val=="object")&&("value" in val))?val.value:val;},_setAttributeValue:function(_5e,_5f){var val=this.jsonData.attributes[_5e];if(_5f===undefined){_5f=null;}if(val&&(typeof (val)=="object")&&"value" in val){val.value=_5f;}else{this.jsonData.attributes[_5e]=_5f;}},_getAttributeNode:function(_60){return (this.jsonData.attributes[_60]);},_testArgs:function(_61,_62){for(var i=0;i<_61.length;i++){}},_makeChange:function(_63,_64){this._changeData[_63]=_64;window.mx.data.makeChange(this,_63,_64);return true;},_applyChangeSet:function(){for(var _65 in this._changeData){this._setAttributeValue(_65,this._changeData[_65]);}this._backup=this._changeData;this._changeData={};},_commitChangeSet:function(){this._backup=null;}});return _7;});