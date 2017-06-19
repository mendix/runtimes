/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/datasource/_DataSource",["mendix/lang","mendix/logger","dojo/_base/array","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(null,{name:"webcore.datasource.DataSource",context:null,_pageSize:0,_offset:0,_pageObjs:null,_setsize:0,_holdObjs:null,_schemaId:"",constructor:function(_6){this.context=_6.context;this._pageSize=_6.page||0;this._offset=_6.offset||0;this._pageObjs=[];this._holdObjs=[];this._schemaId=_6.queryid||"";if(_6.load){_2.scream(this.name+".constructor : Do not pass callbacks into a constructor! Stop doing this!");_1.thread(_6.load);}},reload:function(_7){_7&&_7();},refresh:function(_8){_8&&_8();},update:function(_9){_9&&_9();},entityUpdate:function(_a){_a&&_a();},isValid:function(_b){_b&&_b(true);},_setSetSize:function(n){this._setsize=n;},_setObjects:function(_c){this._pageObjs=_c;},getSetSize:function(){return this._setsize||0;},getObjects:function(){return this._pageObjs||[];},getPageSize:function(){return this._pageSize;},setPageSize:function(n,_d){this._pageSize=n;if(_d){this.refresh(_d);}},getOffset:function(){return this._offset;},setOffset:function(n,_e){this._offset=n;if(_e){this.refresh(_e);}},first:function(_f){this._offset=0;if(_f){this.refresh(_f);}},last:function(_10){var _11=this.getSetSize();if(this._pageSize>=_11){this._offset=0;}else{this._offset=Math.floor((_11-1)/this._pageSize)*this._pageSize;}if(_10){this.refresh(_10);}},toPage:function(n,_12){var off=(n-1)*this._pageSize;if(off>=0&&off<this.getSetSize()){this._offset=off;}if(_12){this.refresh(_12);}},next:function(_13){if(this.atEnd()){this._offset=this.getSetSize()-this._pageSize;}else{this._offset=this._offset+this._pageSize;}if(_13){this.refresh(_13);}},previous:function(_14){if((this.getSetSize()<this._pageSize)||((this._offset-this._pageSize)<=0)){this._offset=0;}else{this._offset-=this._pageSize;}if(_14){this.refresh(_14);}},getStatusMessage:function(){var st=0,en=0,_15=this.getSetSize();if(_15!=0){st=this._offset+1;en=Math.min(this._offset+this._pageSize,_15);}return window.mx.ui.translate("mxui.lib.MxDataSource","status",[st,en,_15]);},generateExport:function(_16){_16.callback&&_16.callback();},atBeginning:function(){return (this._offset==0);},atEnd:function(){return !this._hasPaging()||(this._offset>=(this.getSetSize()-this._pageSize));},afterEnd:function(){return this._hasPaging()&&this.getSetSize()>0&&this._offset>=this.getSetSize();},getAttributes:function(_17){return _3.map(this.getObjects(),function(obj){return obj.get2(_17);});},getObject:function(_18){var _19=this.getObjects();for(var i=0,obj;obj=_19[i];++i){if(obj.getGuid()==_18){return obj;}}return null;},each:function(_1a){return _3.map(this.getObjects(),_1a);},insertMxObjectAtStart:function(obj){var _1b=this._pageObjs;_1b.unshift(obj);if(this._hasPaging()&&this._pageSize<_1b.length){_1b.pop();}this._setsize++;},insertMxObjectAtEnd:function(_1c){var _1d=this._pageObjs;_1d.push(_1c);if(this._hasPaging()!=0&&this._pageSize<_1d.length){_1d.shift();}this._setsize++;},clean:function(_1e){this._setsize=0;this._offset=0;this._pageObjs=[];_1e&&_1e();},hold:function(_1f){if(this._holdObjs.length){this.release();}this._holdObjs=this._holdObjs.concat(_1f);},release:function(){window.mx.data.release(this._holdObjs);this._holdObjs=[];},destroy:function(){this.release();},toString:function(){return this.name;},_hasPaging:function(){return this._pageSize!=0;},_pageUpdate:function(_20){var _21=this.getOffset(),_22=this._hasPaging()?this._objs.slice(_21,_21+this.getPageSize()):this._objs;this._setObjects(_22);this._setSetSize(this._objs.length);_1.nullExec(_20);},size:function(){this.getSetSize.apply(this,arguments);},getSize:function(){this.getSetSize.apply(this,arguments);},getGeneratedXPath:function(){this.getCurrentXPath.apply(this,arguments);}});return _5;});