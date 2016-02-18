
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/sys/Remote",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mendix.sys.Remote");mendix.sys.Remote=function(_4){_4=_4||{};var _5=this,_6="mendix.sys.Remote",_7=false,_8=mendix.sys.Remote,_9={system:new _8.SystemCall(),component:new _8.ComponentCall(),application:new _8.ApplicationCall()};var _a=function(_b,_c){var _d=_b.instructions,_e=[];for(var i=0,_f;_f=_d[i];i++){if(/(open_form|close)/.test(_f.type)){_e.push(_f);_d.splice(i,1);}}if(_c){}else{_d=_e.concat(_d);}return _d;};this.toString=function(){return _6;};this.startup=function(_10){_7=true;_10();};this.shutdown=function(){_7=false;};this.isLoaded=function(){return _7;};this.hasInstructions=function(_11){return !!(_11&&_11.instructions!=null&&_11.instructions.length);};this.execute=function(_12,_13,_14,_15){if(this.hasInstructions(_12)){var _16=[],_17=_a(_12,_14);if(_17.length>10){}for(var i=0,_18;_18=_17[i];i++){var _19=_18.target;if(_9[_19]){_16.push(_9[_19].buildInstruction(_18,_13||{}));}else{}}mendix.lang.sequence(_16,_15);}else{_15&&_15();}};this.hasValidation=function(_1a){return mendix.ov.hasValidations(_1a);};this.getValidations=function(_1b){return mendix.ov.getValidations(_1b);};};mendix.sys.Remote.SystemCall=function(){var _1c="mendix.sys.Remote.SystemCall",_1d={text_message:"actTextMessage",refresh_object_list:"actRefreshObjectList",refresh_object:"actRefreshObject",refresh_class:"actRefreshClass",open_form:"actOpenForm",download_file:"actDownloadFile",show_login:"actShowLogin",logout:"logout"};var _1e=function(_1f){var _20=mx.context.create();if(!_1f){return _20;}var _21="",_22=_1f.items||[];for(var i=0,_23;_23=_22[i];i++){var _24=_23.guid,_25=_23.classname;if(_25&&_24){_20.setContext(_25,_24);if(_24==_1f.activeguid){_21=_25;}}}if(_21){_20.setTrackEntity(_21);}return _20;};var _26=function(_27){return {target:"Screen",params:{title:_27.title,uilocation:_27.uilocation||"content",targeturl:_27.targeturl,width:_27.width,height:_27.height,resizable:_27.resizable,onHide:false,targetparams:{mxcontext:_27.mxcontext}}};};this.actTextMessage=function(_28,_29,_2a){var _2b=_28.args,_2c=_2b.MessageContent,_2d=_2b.MessageType,_2e=String(_2b.MessageBlock)=="true";if(_2c!=null&&_2d!=null){(mx.ui[_2d.toLowerCase()]||mx.ui.info)(_2c,_2e);}else{throw new Error(_1c+".actTextMessage: message content is null");}_2a&&_2a();};this.actRefreshObjectList=function(_2f,_30,_31){var _32=_2f.args.ObjectIds,_33=_2f.args.mxobjects,_34=[];if(_33&&_33.length){var _35={},_36=_33.length;while(_36--){var obj=_33[_36];if(typeof obj=="object"&&obj.objectType){var _37=mx.data.setOrRetrieveMxObject(obj);_35[_37.getEntity()]=true;_34.push((function(_38){return function(cb){mx.data.objectPing(_38,cb);};})(_37));}else{logger.error(_1c+"actRefreshObjectList: invalid json object");}}_34.push(function(cb){for(var _39 in _35){mx.data.sendClassUpdate(_39);}cb();});mendix.lang.collect(_34,_31);}else{_31&&_31();}};this.actRefreshClass=function(_3a,_3b,_3c){var _3d=_3a.args.ObjectClass;if(_3d!=null){mx.data.sendClassUpdate(_3d);}else{}_3c&&_3c();};this.actOpenForm=function(_3e,_3f,_40){var _41=_1e(_3e.context),_42=_3e.args,_43=String(_42.FormTarget).toLowerCase();if(_42.FormGuid){_41.setContext(_42.FormEntity,_42.FormGuid);}mx.ui.openForm(_42.FormPath,{title:_42.FormTitle,location:(_43=="window")?"popup":_43,width:_42.FormWidth,height:_42.FormHeight,resizable:_42.FormResizable,context:_41,dir:_3f.dir});_40&&_40();};this.actDownloadFile=function(_44,_45,_46){var _47=_44.args.FileDocument,_48=_44.args.Target;if(!_47){_46&&_46();return;}mx.ui.downloadFile({mxobject:mx.data.setOrRetrieveMxObject(_47),target:_48});_46&&_46();};this.actShowLogin=function(_49,_4a,_4b){mx.ui.showLogin();_4b&&_4b();};this.logout=function(_4c,_4d,_4e){mx.logout();_4e();};this.buildInstruction=function(_4f,_50){var _51=_1d[_4f.type];if(_51){return _1.hitch(this,_1d[_4f.type],_4f,_50);}else{return function(_52){_52&&_52();};}};};mendix.sys.Remote.ComponentCall=function(){var _53="mendix.sys.Remote.ComponentCall";this.buildInstruction=function(_54,_55){var _56=_55.caller;if(_56&&_56.hasInterface&&_56.hasInterface(_54.type)){return function(_57){try{_56.invokeCall(_54.type,_54.args);}catch(e){logger.error(_53+".buildInstruction: error occurred while executing instruction: "+e.message);}_57&&_57();};}else{return function(_58){_58&&_58();};}};};mendix.sys.Remote.ApplicationCall=function(){var _59="mendix.sys.Remote.ApplicationCall";this.buildInstruction=function(_5a,_5b){return function(_5c){_5c&&_5c();};};};});