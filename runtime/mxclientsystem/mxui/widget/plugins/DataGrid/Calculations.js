
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/plugins/DataGrid/Calculations",["mxui/dom","mendix/logger","dojo/_base/lang"],function(_1,_2,_3){var $=_1.create;function _4(_5){var _6="mxui.widget.plugins.DataGrid.Calculations";var _7=[];var _8=_5.parent;var _9=_5.config;if(!_8&&(_8.widgetType!="DataGrid")){throw new Error(_6+".initialize : can only register to DataGrid!");}var _a={onDestroy:"plugineventOnDestroy",onRefresh:"plugineventOnRefresh"};var _b={};var _c=_8.getEntityProperties();var _d=function(){_8.showFootNode();var _e=$("tr");var _f=$("tr");_8.gridFootNode.appendChild(_e);_8.gridFootNode.appendChild(_f);var th,td=null;for(var i=0,_10;_10=_c[i];i++){var tag=_10.tag;th=$("th");td=$("td");_8.setColumnStyle(th,_10);_8.setColumnStyle(td,_10);if(_9[tag]){th.innerHTML=_9[tag].title||"";switch(_10.render.toLowerCase()){case "float":case "currency":_9[tag].resulttype="float";break;default:_9[tag].resulttype="integer";break;}}td.innerHTML="&nbsp;";_b[i]=td;_e.appendChild(th);_f.appendChild(td);}};var _11=function(){for(var i=0,_12;_12=_c[i];i++){_b[i].innerHTML="&nbsp;";}};var _13=function(){if(!_8.constraintsFilled()){_11();return;}window.mx.server.request({request:{action:"retrieve_aggregates",params:{id:_8.schema,xpath:_8.getCurrentXPath()}},options:{callback:function(_14,_15){_16(_15.aggregates);},useCache:false,preventCache:true}});};var _16=function(_17){if(!_17){return;}var _18=0,_19=_8.getHiddenAggregates().reverse();for(var h=0;h<_19.length;h++){_17.splice(_19[h],1);}for(var i=0,_1a;_1a=_c[i];i++){var tag=_1a.tag;if(_9[tag]){var _1b=_9[tag].resulttype,_1c=_17[_18++];if(_1c==null){continue;}if(_1c==""){_1c=0;}var _1d=_c[i].display;switch(_1b.toLowerCase()){case "currency":case "float":var val=parseFloat(_1c).toFixed(parseInt(_1d.precision));_b[i].innerHTML=window.mx.parser.formatNumber(val,_1d.formatted,_1d.precision);break;default:_b[i].innerHTML=window.mx.parser.formatNumber(_1c,_1d.formatted,0);break;}}}};this.plugineventOnDestroy=function(){this.destroy();};this.plugineventOnRefresh=function(){if(_8.constraintsFilled()){_16(_8.getAggregates());}else{_11();}};this.destroy=function(){while(_7.length!=0){window.mx.data.unsubscribe(_7.shift());}_8=null;};this.objectUpdate=function(){if(!_8.acceptingUpdates()&&!_8.isSuspended()){_13();}};_d();for(var i in _a){_8.registerToPluginEvent(i,_3.hitch(this,_a[i]));}var _1e={};_1e[_8.entity]=true;metaEntity=window.mx.meta.getEntity(_8.entity);if(metaEntity.hasSuperEntities()){var _1f=metaEntity.getSuperEntities();for(var i=0;i<_1f.length;i++){_1e[_1f[i]]=true;}}if(metaEntity.hasSubEntities()){var _20=metaEntity.getSubEntities();for(var i=0;i<_20.length;i++){_1e[_20[i]]=true;}}for(var i in _1e){_7.push(window.mx.data.subscribe({entity:i,callback:_3.hitch(this,"objectUpdate")}));}};return _4;});