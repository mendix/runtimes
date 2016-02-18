
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
require(["mendix/lib/MxContext","mendix/lib/MxObject","mendix/lang","dojo/_base/kernel","dojo/_base/lang","mendix/mendix","mxui/startup"],function(_1,_2,_3,_4,_5){var _6="6.0";_3.deprecate("mendix.lang",{runBindActions:"sequence",runAsyncActions:"collect",runActions:"sequence"},_6);_3.deprecate("mendix.lang","clone","dojo","clone",_6);_3.deprecate("mendix.lang","round","dojo.number","round",_6);_3.deprecate("mendix.lang","toFixed","dojo.number","round",_6);_3.deprecate("mendix.lang","dupObject","dojo","clone",_6);var _7={sequence:_3.sequence,collect:_3.collect};_5.mixin(_3,{sequence:function(_8,_9,_a){if(_9 instanceof Array){_4.deprecated("mendix.lang.sequence","Method signature has changed to sequence(seq, callback, scope)",_6);return _7.sequence.call(_3,_9,_a,_8);}else{return _7.sequence.apply(_3,arguments);}},collect:function(_b,_c,_d){if(_c instanceof Array){_4.deprecated("mendix.lang.collect","Method signature has changed to collect(coll, callback, scope)",_6);return _7.collect.call(_3,_c,_d,_b);}else{return _7.collect.apply(_3,arguments);}}});_3.deprecate("mx","moduleUrl","dojo","moduleUrl",_6);_3.deprecate("mx.meta",{getMetaMap:"getMap"},_6);var _e=window.mx.meta;_5.mixin(_e,{getMetaEntity:function(_f,_10){_4.deprecated("mx.meta.getMetaEntity is deprecated, use getEntity instead","",_6);if(typeof _f!="string"){_4.deprecated("mx.meta.getEntity should have one parameter of type string, which is the entity name","",_6);var _11=_e.getEntity(_f.className),_12=_f.error,_13=_f.callback;if(!_11){_12&&_12.call(_10);}else{_13&&_13.call(_10,_11);}return _11;}return _e.getEntity.apply(_e,arguments);}});_3.deprecate("mx.metadata","mx.meta",_6);_3.deprecate("mx.server",{getResource:"get"},_6);_3.deprecate("mx.xas","action","mx.data","action",_6);var _14=window.mx.data,_15={},_16={types:{},guids:{}};for(var _17 in _14){_15[_17]=_14[_17];}var _18=function(_19,map){if(_19.length==1&&map.length!=1){return _19[0];}else{var _1a={};for(var i=0,l=map.length;i<l;i++){var _1b=map[i],_1c=_19[i];if(_1c){_1a[_1b]=_1c;}}return _1a;}};var _1d=function(_1e,_1f){if(arguments.length>1){_4.deprecated("mx.data."+_1e+": deprecated arguments, use use { xpath : '', resulttype : '', callback : callback, error : error } instead","",_6);_1f=_18([].slice.call(arguments,1),["xpath","callback","resulttype"]);}return _15[_1e](_1f);};_5.mixin(_14,{distributeChange:function(_20,_21,_22){_4.deprecated("mx.data.distributeChange is deprecated, use update instead","",_6);return _14.update({guid:_20,attr:_21,value:_22});},addChangeListener:function(_23,_24,_25){_4.deprecated("mx.data.addChangeListener is deprecated, use subscribe instead","",_6);return _14.subscribe({guid:_23,attr:_24,callback:_25});},removeChangeListener:function(_26){_4.deprecated("mx.data.removeChangeListener is deprecated, use unsubscribe instead","",_6);return _14.unsubscribe(_26);},subscribeToClass:function(_27,_28){_4.deprecated("mx.data.subscribeToClass is deprecated, use subscribe instead","",_6);var id=_27.id,sub=_16.types,map=sub[id]||(sub[id]={});if(map[_28]){return map[_28];}else{var _29=_14.subscribe({entity:_28,callback:_5.hitch(_27,"objectUpdate")});return (map[_28]=_29);}},unSubscribeFromClass:function(_2a,_2b){_4.deprecated("mx.data.unSubscribeFromClass is deprecated, use unsubscribe instead","",_6);var id=_2a.id,sub=_16.types,_2c=sub[id]&&sub[id][_2b];if(_2c){_14.unsubscribe(_2c);delete sub[id][_2b];if(!_3.itemCount(sub[id])){delete sub[id];}}},subscribeToGUID:function(_2d,_2e){_4.deprecated("mx.data.subscribeToGUID is deprecated, use subscribe instead","",_6);var id=_2d.id,sub=_16.guids,map=sub[id]||(sub[id]={});if(map[_2e]){return map[_2e];}else{var _2f=_14.subscribe({guid:_2e,callback:_5.hitch(_2d,"objectUpdate")});return (map[_2e]=_2f);}},unSubscribeFromGUID:function(_30,_31){_4.deprecated("mx.data.unSubscribeFromGUID is deprecated, use unsubscribe instead","",_6);var id=_30.id,sub=_16.guids,_32=sub[id]&&sub[id][_31];if(_32){_14.unsubscribe(_32);delete sub[id][_31];if(!_3.itemCount(sub[id])){delete sub[id];}}},xasAction:function(_33){_4.deprecated("mx.data.xasAction is deprecated, use action instead","",_6);var _34=_33.callback;_33.callback=function(_35,_36){return _34&&_34(_36,_35);};return _14.action.call(_14,_33);},action:function(_37){if(_37.caller){_4.deprecated("mx.data.action: deprecated arguments, use store property for caller parameter ({ store : { caller : obj }})","",_6);var _38=_37.caller,_39=_37.store||(_37.store={});_39.caller=_37.caller;}if(_37.params){_15.action.apply(_14,arguments);}else{_4.deprecated("mx.data.action: deprecated arguments, use params property for action parameters","",_6);var _3a={context:_37.context,callback:_37.callback,error:_37.error,store:_37.store,onValidation:_37.onValidation,async:_37.async,params:_37};delete _37.context;delete _37.callback;delete _37.error;delete _37.store;delete _37.caller;delete _37.onValidation;delete _37.async;_15.action(_3a);}},getObjectsByXPath:function(){_4.deprecated("mx.data.getObjectsByXPath is deprecated, use get instead","",_6);var _3b=arguments;var _3c=(typeof _3b[1]=="function")?_18(_3b,["xpath","callback","useCache"]):_18(_3b,["xpath","options","callback","useCache"]);var _3d=_3c.xpath,_3e=_3c.options||{},_3f=_3c.callback,_40=_3c.error||_3e.error;return _14.get({xpath:_3d,callback:_3f,error:_3e.error,count:_3e.addcount,filter:{limit:_3e.limit,offset:_3e.offset,sort:_3e.sort,attributes:_3e.tags}});},getAttributeListByXPath:function(_41){_4.deprecated("mx.data.getAttributeListByXPath is deprecated, use get instead","",_6);_41=_41||{};var _42=_41.callback,_43=_41.error,_44=_41.options,_45=_41.attribute;return _14.get({xpath:_41.xpath,callback:function(_46){var _47={};for(var i=0,l=_46.length;i<l;i++){var _48=_46[i].getAttribute(_45);_47[_48]=_48;}_42&&_42(_47);},error:_43,filter:{limit:_44.limit,offset:_44.offset,sort:_44.sort,attributes:[_45],distinct:true}});},getObjectsByXPathSchema:function(){_4.deprecated("mx.data.getObjectsByXPathSchema is deprecated, use get instead","",_6);var _49=_18(arguments,["xpath","options","callback","useCache"]),_4a=_49.options||{},_4b=_49.xpath,_4c=_49.callback,_4d=_49.error||_4a.error;return _14.get({xpath:_4b,callback:_4c,error:_4a.error,count:_4a.addcount,noCache:!_49.useCache,filter:{id:_4a.queryid,limit:_4a.limit,offset:_4a.offset,sort:_4a.sort}});},getObjectsByMicroFlow:function(_4e,_4f,_50){_4.deprecated("mx.data.getObjectsByMicroFlow is deprecated, use get instead","",_6);_4f=_4f||{};_14.action({params:{actionname:_4e,applyto:_4f.applyto||"none",constraints:_4f.constraints||"",guids:_4f.guids||null},context:_4f.context,callback:_50,error:function(e){_4f.error?_4f.error(e):_50&&_50([]);}});},getObjectsById:function(_51){_4.deprecated("mx.data.getObjectsById is deprecated, use get instead","",_6);var _52,_53,_54,_55;if(_51.length==null&&arguments.length==1){var _56=_51;_51=_56.ids;_52=_56.options;_53=_56.callback;_55=_56.error;_54=_56.nocache;}else{if(typeof arguments[1]=="function"){_53=arguments[1];_54=arguments[2];}else{_52=arguments[1];_53=arguments[2];_54=arguments[3];_55=_52?_52.error:null;}}_52=_52||{};return _14.get({guids:_51,callback:_53,error:_55,count:_52.addcount,filter:{limit:_52.limit,offset:_52.offset,sort:_52.sort,attributes:_52.tags}});},getObjectByXPath:function(_57){_4.deprecated("mx.data.getObjectByXPath is deprecated, use get instead","",_6);return _14.get({xpath:_57.xpath,callback:_57.callback,error:_57.error,filter:{limit:1}});},getObject:function(_58,_59,_5a){_4.deprecated("mx.data.getObject is deprecated, use get instead","",_6);var _5b=_18(arguments,["objId","callback","nocache"]);return _14.get({guid:_5b.objId,error:_5b.error,callback:_5b.callback,noCache:_5b.nocache});},createObjectByClass:function(){_4.deprecated("mx.data.createObjectByClass is deprecated, use create instead","",_6);var _5c=arguments[0],_5d=arguments[1],_5e=arguments[2],_5f=arguments[3];if((typeof _5c!="string")&&(!(_5c instanceof String))){throw new Error(name+".createObjectByClass: parameter entity is not of type String");}else{if(typeof _5d!="function"){throw new Error(name+".createObjectByClass: parameter callbackFunction is not of type Function");}else{if(!(_5e instanceof _1)){}}}return _14.create({entity:_5c,callback:_5d,error:_5f,context:_5e});},createObject:function(_60){_4.deprecated("mx.data.createObject is deprecated, use create instead","",_6);return _14.create({entity:_60.className,callback:_60.callback,error:_60.error,context:_60.context});},deleteObjectsByGUID:function(_61,_62,_63){_4.deprecated("mx.data.deleteObjectsByGUID is deprecated, use remove instead","",_6);return _14.remove({guids:_61,callback:_62,error:_63});},saveObject:function(_64,_65){_4.deprecated("mx.data.saveObject is deprecated, use save instead","",_6);return _14.save({mxobj:_64,callback:_65.callback,error:_65.error});},commitObject:function(obj,_66){_4.deprecated("mx.data.commitObject is deprecated, use commit instead","",_6);return _14.commit({mxobj:obj,callback:_66.callback,error:_66.error});},rollbackObject:function(obj,_67){_4.deprecated("mx.data.rollbackObject is deprecated, use rollback instead","",_6);return _14.rollback({mxobj:obj,callback:_67.callback,error:_67.error});},deleteObject:function(obj,_68){_4.deprecated("mx.data.deleteObject is deprecated, use remove instead","",_6);return _14.remove({guid:obj.getGuid(),callback:_68.callback,error:_68.error});},deleteMxObjects:function(_69){_4.deprecated("mx.data.deleteMxObjects is deprecated, use remove instead","",_6);var ids=[],_6a=[],_6b=_69.mxObjects;for(var i in _6b){ids.push(_6b[i].getGuid());_6a.push(_6b[i].getEntity());}_14.remove({guids:ids,callback:function(){for(var i=0,_6c;_6c=_6a[i];i++){_14.sendClassUpdate(_6c);}_69.callback&&_69.callback();},error:_69.error});},sizeOfXPathSet:function(_6d){return _1d("sizeOfXPathSet",_6d);},sumOfXPathQuery:function(_6e){_4.deprecated("mx.data.sumOfXPathQuery is deprecated, use sumOfXPathSet instead","",_6);return _1d("sumOfXPathSet",_6e);},sizeOfXPathQuery:function(_6f){_4.deprecated("mx.data.sizeOfXPathQuery is deprecated, use sizeOfXPathSet instead","",_6);return _1d("sizeOfXPathQuery",_6f);},countOfXPathQuery:function(_70){_4.deprecated("mx.data.countOfXPathQuery is deprecated, use sizeOfXPathSet instead","",_6);return _1d("countOfXPathQuery",_70);},avgOfXPathQuery:function(_71){_4.deprecated("mx.data.avgOfXPathQuery is deprecated, use avgOfXPathSet instead","",_6);return _1d("avgOfXPathQuery",_71);},maxOfXPathQuery:function(_72){_4.deprecated("mx.data.maxOfXPathQuery is deprecated, use maxOfXPathSet instead","",_6);return _1d("maxOfXPathQuery",_72);},minOfXPathQuery:function(_73){_4.deprecated("mx.data.minOfXPathQuery is deprecated, use minOfXPathSet instead","",_6);return _1d("minOfXPathQuery",_73);},ceilingOfXPathQuery:function(_74){_4.deprecated("mx.data.ceilingOfXPathQuery is deprecated, use maxOfXPathSet instead","",_6);return _1d("maxOfXPathQuery",_74);},floorOfXPathQuery:function(_75){_4.deprecated("mx.data.floorOfXPathQuery is deprecated, use minOfXPathSet instead","",_6);return _1d("minOfXPathQuery",_75);}});_3.deprecate("mx.processor","mx.data",_6);_3.deprecate("mendix.lib.MxContext",{hasActiveClass:"hasTrackEntity",hasActiveGUID:"hasTrackId",hasTrackID:"hasTrackId",getActiveClass:"getTrackEntity",getActiveGUID:"getTrackId",getTrackID:"getTrackId",setActiveClass:"setTrackEntity",setActive:"setTrackEntity",setTrackID:"setTrackId",setContextFromMxObject:"setContext"},_6);_3.deprecate("mendix.lib.MxObject",{getGUID:"getGuid",getClass:"getEntity",getAttribute:"get",setAttribute:"set",hasAttribute:"has",getAttributeClass:"getAttributeType",inheritsOf:"inheritsFrom",hasSubClasses:"hasSubEntities",getSubClasses:"getSubEntities",hasSuperClasses:"hasSuperEntities",getSuperClasses:"getSuperEntities",getSelectorClass:"getSelectorEntity"},_6);_5.extend(_2,{save:function(_76){_4.deprecated("mendix.lib.MxObject.save is deprecated, use mx.data.save instead","",_6);return window.mx.data.save({mxobj:this,error:_76.error,callback:_76.callback});},commit:function(_77){_4.deprecated("mendix.lib.MxObject.commit is deprecated, use mx.data.commit instead","",_6);return window.mx.data.commit({mxobj:this,error:_77.error,callback:_77.callback});},rollback:function(_78){_4.deprecated("mendix.lib.MxObject.rollback is deprecated, use mx.data.rollback instead","",_6);return window.mx.data.rollback({mxobj:this,error:_78.error,callback:_78.callback});},saveSequence:function(_79){_4.deprecated("mendix.lib.MxObject.saveSequence is deprecated, use mx.data.save and mx.data.commit instead","",_6);var _7a=this;return window.mx.data.save({mxobj:_7a,callback:function(){window.mx.data.commit({mxobj:_7a,callback:function(){}});}});}});_3.deprecate("mendix.lib.MxMetaObject",{getGUID:"getGuid",getClass:"getEntity",hasAttribute:"has",getAttributeClass:"getAttributeType",inheritsOf:"inheritsFrom",hasSubClasses:"hasSubEntities",getSubClasses:"getSubEntities",hasSuperClasses:"hasSuperEntities",getSuperClasses:"getSuperEntities",getSelectorClass:"getSelectorEntity"},_6);});