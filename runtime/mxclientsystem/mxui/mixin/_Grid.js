
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_Grid",["dojo","dijit","dojox","dojo/require!dojo/fx,mxui/mixin/_OverflowHelper"],function(_1,_2,_3){_1.provide("mxui.mixin._Grid");_1.require("dojo.fx");_1.require("mxui.mixin._OverflowHelper");_1.declare("mxui.mixin._Grid",mxui.mixin._OverflowHelper,{_toolWidgets:null,_pagingStatusNode:null,_metaEntity:null,baseClass:"mx-grid",css:mxui.widget.createCSSMap("mx-grid",{pagingStatus:"paging-status",searchButton:"search-button",resetButton:"reset-button"}),fetchMetaObject:function(){this._metaEntity=mx.meta.getEntity(this.entity);if(this._metaEntity==null){logger.error(this.id+".fetchMetaObject : This grid has been configured for an entity the current user doesn't have access to - ABORTING");this.loaded();return false;}return true;},_getMetaEntity:function(){return this._metaEntity;},_setMetaEntity:function(v){this._metaEntity=v;},_saveSelection:function(){this.mxform.setReturnValue("selection",this._getSelectedGuids());},setupGridConfig:function(){this._setGridConfig(new mxui.lib.MxGridConfig({config:this.config,nested:this.nested}));},setupGridState:function(){var _4=this._getGridConfig(),_5=this._getGridState();_5.updateperiod=_4.gridSetting("refresh");_5.searchbar=_4.gridSetting("searchbar");_5.controlbar=_4.gridSetting("controlbar");_5.pagingbar=_4.gridSetting("pagingbar");_5.selectionmode=_4.gridSetting("selectionmode");_5.editable=_4.gridSetting("editable");_5.showemptyrows=_4.gridSetting("showemptyrows");_5.selectfirst=_4.gridSetting("selectfirst");_5.selectable=(_5.selectionmode!=="none");if(this.selectable){_5.selectable=/^(single|multi)$/.test(this.selectable);if(this.selectable!=="multi"||_5.selectionmode!=="simplemulti"){_5.selectionmode=this.selectable;}this.mxform.setReturnValue("selection",[]);}this.setupGridStateSpecific();},setupDataSource:function(){var _6=this._getGridConfig(),_7=_6.getDataSource(),_8;if(this.customDataSource){_8=this.customDataSource;_8.setPageSize(_6.gridSetting("pageSize"));_8.setOffset(0);var _9=_6.gridSetting("sortparams");if(_9){_8.setSortOptions(_9[0][0],_9[0][1]);}}else{if(_7){var _a=this instanceof mxui.widget.DataGrid?this.schema:"";if(_7.microflow){_8=new mendix.lib.MicroflowSource({microflow:_7.microflow.name,queryid:_a,context:this.mxcontext,page:_6.gridSetting("pageSize")});}else{if(_7.entityPath){_8=new mendix.lib.EntityPathSource({path:_7.entityPath.path,queryid:_a,context:this.mxcontext,page:_6.gridSetting("pageSize")});}else{_8=new mendix.lib.XPathSource({entity:this.entity,queryid:_a,constraint:this.constraint,useContext:this.useContext,context:this.mxcontext,page:_6.gridSetting("pageSize"),sortparams:_6.gridSetting("sortparams"),aggregates:this.hasPlugin("Calculations")});}}}}this._setDataSource(_8);},setupGridStateSpecific:function(){},resizeGrid:function(){this.contentNode.scrollTop=0;},setUpdateInterval:function(){var _b=this._getGridState(),_c=_b.updateperiod;if(_c&&_c.toString()!="0"){this.clearInterval();_b.update=setInterval(_1.hitch(this,"actReloadGrid"),parseInt(_c*1000,10));}},setupDevMode:function(_d){if(mx.session.inDevMode()){this.devBlock=new mxui.widget.MxDevBlock({parent:this,xpath:true,guid:false});}},shareSelected:function(){var _e=this.createContext(),_f=this._getMetaEntity();_e.setTrackEntity(_f.getEntity());var _10=this._getCurrentGuid();if(_10){_e.setContext(_f.getEntity(),_10);}else{_e.setContext(_f.getEntity(),null);}_e.freeze();this.notifyListeners(_e);mx.ui.cleanContext(_e.ident,this);},actionSelectPage:function(_11){var _12=this._getGridState(),_13=this._getDataSource();if(!_12.invertedSelection){for(var i=0,_14=_13.getObjects(),_15;_15=_14[i];i++){this._addObjectToSelection(_15);}}this._saveSelection();this.refreshGrid();},actionSelectAllPages:function(_16){this._clearSelection();this._getGridState().invertedSelection=true;this.refreshGrid();},actionClearSelection:function(_17){if(this._getSelectedGuids().length>0||this._getGridState().invertedSelection){this._clearSelection();this._getGridState().invertedSelection=false;this.refreshGrid();}},actionEditSelection:function(_18){var _19=this._getSelectedGuids(),_1a=this._getGridState();if(_19.length===0&&!_1a.invertedSelection){mx.ui.info(mx.ui.translate("mxui.widget.DataGrid","no_selection"));}else{for(var i=0,obj;obj=_19[i];i++){var _1b=this._getDataSource().getObject(obj),_1c=_18[_1b.getEntity()];if(_1c){var _1d=this.createContext();_1d.dupFrom(this.mxcontext);_1d.setObject(null,_1b.getEntity(),_1b.getGuid());mx.ui.execute(_1c,{context:_1d});}}}},actionInsertNew:function(_1e){var _1f=this._getEntity(_1e),_20=_1e[_1f],_21=this._getGridConfig();if(_20&&_1f){mx.data.create({entity:_1f,context:this.useContext?this.mxcontext:null,persistent:_20.persistent,callback:function(obj){if(!this.useContext){var _22=_21.getDataSource(),_23=_22.entityPath&&_22.entityPath.path||this.reference,_24=_23.split("/"),_25=this.mxcontext.getTrackId();if(_24.length==2&&_25){var _26=_24[1];if(obj.isReference(_26)){obj.set(_26,_25);}}}var _27=this.createContext();_27.setContext(obj);mx.ui.execute(_20,{context:_27});},error:function(e){mx.onError(e);}},this);}},postCreate:function(){if((this.contentUrl==="")&&(this.contenturl!=="")){this.contentUrl=this.contenturl;}var req=this.reqConstraints,ref=this.reference;this.reqConstraints=req?req.split(","):[];if(ref){this.reqConstraints.push(ref.substr(0,ref.indexOf("/")));}var box=this.addFocusBox(this.controlNode);box.pressed({RIGHT_ARROW:box.FOCUS_NEXT,LEFT_ARROW:box.FOCUS_PREV});this.offerInterfaces(["close"]);this.initContext();this.postCreateSpecific();},getSchemaId:function(){return this.schema;},postCreateSpecific:function(){},getSelected:function(){return this._getSelectedGuids();},deselectAll:function(){this._clearSelection();this.deselectGridRows();},registerSubscriptions:function(){this.removeSubscriptions();var _28=this.mxcontext.getTrackId();if(_28){this.subscribe({guid:this.mxcontext.getTrackId(),callback:_1.hitch(this,"objectUpdate")});}var _29=mx.meta.getEntity(this.entity);if(_29){var _2a=[_29.getEntity()].concat(_29.getSubEntities()).concat(_29.getSuperEntities());for(var i=0,_2b;_2b=_2a[i];i++){this.subscribe({entity:_2b,callback:_1.hitch(this,"objectUpdate")});}}},eventActionBindingHandler:function(_2c,_2d){var _2e=this._getGridConfig(),_2f=_2e.gridActionBindings(),_30=_2e.getActionsByKey(_2f["on"+_2d]),_31=_30?this["action"+_30.actionCall]:null,_32=this._getObjectFromNode(_2c),_33=this._getGridState();if(_33.invertedSelection){return;}if(_30&&_31&&_2c&&_32){if(_33.selectable){this.deselectAll();mxui.dom.clearSelection();this.selectRow(_2c);}this._addObjectToSelection(_32);_31&&_31.call(this,_30.params);}else{}},eventControlBarButtonClicked:function(e){var _34=e.currentTarget,_35=_34.getAttribute("data-mendix-id");if(_35){var _36=this._getGridConfig().getActionsByKey(_35);if(_36){if(_36.actionCall==="ActionSelected"){_36.actionCall="EditSelection";}else{if(_36.actionCall==="Create"){_36.actionCall="InsertNew";}}var _37="action"+_36.actionCall;if(this[_37]){this[_37](_36.params);}else{logger.error(this.id+".eventControlBarButtonClicked: Called function '"+_37+"' does not exist in this component");}}else{logger.error(this.id+".eventControlBarButtonClicked: Action with action key '"+_35+"' is not defined");}}else{logger.error(this.id+".eventControlBarButtonClicked: No action key defined!");}},actionInvokeMicroflow:function(_38){this.triggerPluginEvent("invokeMicroflow",null,_1.hitch(this,"invokeMicroflow",_38));},invokeMicroflow:function(_39){var _3a=this._getGridState(),_3b=this.entity,_3c=_39[_3b],_3d=_3c.microflow,_3e={applyto:_3c.applyTo};if(_3c&&_3b){var _3f=_3a.invertedSelection,_40=this._getSelectedGuids(),_41=this._getDataSource(),_42=this.schema,_43;switch(_3c.applyTo){case "selection":if(_3f){_43=[];_41.each(function(obj){var _44=obj.getGuid();if(_1.indexOf(_40,_44)===-1){_43.push(_44);}});}else{_43=_40;}if(_43.length===0){mx.ui.info(mx.ui.translate("mxui.widget.DataGrid","no_selection"));return;}_3e.guids=_43;if(_43.length===1){_3e.gridid=_42;}break;case "all":_43=_1.clone(_41.getObjects());_1.mixin(_3e,{guids:_43,applyto:"selection"});if(_43.length===1){_3e.gridid=_42;}break;case "selectionset":var _45,_46,_47;if(_3f){_47=_41.getSetSize()-_40.length;_45=_41.getCurrentXPath();}else{_47=_40.length;_45="//"+_3b;}if(_47===0){mx.ui.info(mx.ui.translate("mxui.widget.DataGrid","no_selection"));return;}var _48=[];for(var i=0,id;id=_40[i];++i){var obj=_41.getObject(id);_48.push("id"+(_3f?"!=":"=")+"\""+id+"\"");}if(_48.length===0){_46="";}else{_46="["+_48.join(_3f?" and ":" or ")+"]";}_1.mixin(_3e,{xpath:_45,constraints:_46,sort:_41.getSortSettings()});if(_47===1){_3e.gridid=_42;}break;case "set":if(_41.getSetSize()===0){_3e.applyto="none";}else{_1.mixin(_3e,{xpath:_41.getCurrentXPath(),sort:_41.getSortSettings()});}break;}var _49=this,_4a=_3d.confirmation,_4b=[];var _4c=function(cb){mx.ui.confirmation({cancel:_4a.cancel,proceed:_4a.proceed,content:_4a.question,handler:cb});};if(this.actTriggerOnSync){_4b.push("actTriggerOnSync");}if(this.actDeferSyncAction){_4b.push("actDeferSyncAction");}var run=function(_4d){mx.ui.execute({microflow:_3d},{params:_3e,context:_49.mxcontext,store:{caller:_49},callback:_4d});};if(_4a){_4b.push(_4c);}if(_3d&&_3d.validate==="view"){_4b.push(_1.hitch(this.mxform,"validate"));}_4b.push(run);_4b.push(function(_4e){if(!this._destroyed&&!_3c.maintainSelection){this.deselectAll();this.shareSelected();}_4e();});this.sequence(_4b);}},actionReturnSelection:function(_4f){var _50=this,_51=this.mxform;this._saveSelection();_51.suspend();_51.validate(function(){_51.suspend();var _52=function(e){_51.resume();if(!(e instanceof mendix.lib.ValidationError)){mx.onError(e);}};_51.save(function(){_51.commit(function(){_51.dispose();},_52);},_52);});},controlNode:null,_setToolbarAttr:function(_53){for(var i=0,btn;btn=this._toolWidgets[i++];){btn.set("disabled",_53);}},buildControlBar:function(){var _54=this._getGridState();if(!_54.controlbar&&!_54.pagingbar){this.controlNode.style.display="none";}},buildToolBar:function(){this._toolWidgets=[];if(!this._getGridState().controlbar){this.toolBarNode.style.display="none";return;}var _55=this._getGridConfig().gridTools();var box=this.getFocusBox(this.controlNode);var _56=document.createDocumentFragment();for(var i in _55){var _57=_55[i];var _58=new mxui.widget.Button({"mxid":_57.mxid,"caption":_57.title,"iconUrl":_57.icon,"onClick":_1.hitch(this,"eventControlBarButtonClicked"),"cssClasses":_57.cssClass,"cssStyle":_57.cssStyle});this._toolWidgets.push(_58);var _59=_58.domNode;try{if(_55[i].gridFunction){_59.setAttribute("gridFunction",_55[i].gridFunction);_59.setAttribute("param",_55[i].param);if(_55[i].background){_59.setAttribute("background-job",_55[i].background);}if(_55[i].progress){_59.setAttribute("progress",_55[i].progress);}if(_55[i].message){_59.setAttribute("message",_55[i].message);}}if(i>0){_55[i-1]._nextNode=_59;}_55[i]._domNode=_59;_56.appendChild(_59);_56.appendChild(document.createTextNode(" "));box.add(_59);_58.startup();}catch(e){}}this.toolBarNode.appendChild(_56);mxui.dom.disableSelection(this.toolBarNode);},buildPagingBar:function(){if(!this._getGridState().pagingbar){this.pagingBarNode.style.display="none";return;}var ltr=this.isLeftToRight(),css=this.css,_5a=document.createDocumentFragment(),box=this.getFocusBox(this.controlNode),$=mxui.dom.create;this.btFirst=new mxui.widget.Button({iconClass:"glyphicon "+(ltr?"glyphicon-step-backward":"glyphicon-step-forward"),"onClick":_1.hitch(this,"eventPagingFirstClicked")});_5a.appendChild($("#",this.btFirst.domNode," "));box.add(this.btFirst.domNode);this.btPrevious=new mxui.widget.Button({iconClass:"glyphicon "+(ltr?"glyphicon-backward":"glyphicon-forward"),"onClick":_1.hitch(this,"eventPagingPreviousClicked")});_5a.appendChild($("#",this.btPrevious.domNode," "));box.add(this.btPrevious.domNode);this._pagingStatusNode=mxui.dom.div({"class":"dijitInline "+this.css.pagingStatus});_5a.appendChild($("#",this._pagingStatusNode," "));this.btNext=new mxui.widget.Button({iconClass:"glyphicon "+(ltr?"glyphicon-forward":"glyphicon-backward"),"onClick":_1.hitch(this,"eventPagingNextClicked")});_5a.appendChild($("#",this.btNext.domNode," "));box.add(this.btNext.domNode);this.btLast=new mxui.widget.Button({iconClass:"glyphicon "+(ltr?"glyphicon-step-forward":"glyphicon-step-backward"),"onClick":_1.hitch(this,"eventPagingLastClicked")});_5a.appendChild($("#",this.btLast.domNode," "));box.add(this.btLast.domNode);this.pagingBarNode.appendChild(_5a);mxui.dom.disableSelection(this.pagingBarNode);},updatePagingStatus:function(_5b){if(!this._getGridState().pagingbar){return;}var _5c=this._getDataSource(),_5d=_5c.getStatusMessage();mxui.html.setContent(this._pagingStatusNode,_5d);if(_5c.atBeginning()){this.btFirst.set("disabled",true);this.btPrevious.set("disabled",true);}else{this.btFirst.set("disabled",false);this.btPrevious.set("disabled",false);}if(_5c.atEnd()){this.btNext.set("disabled",true);this.btLast.set("disabled",true);}else{this.btNext.set("disabled",false);this.btLast.set("disabled",false);}},eventPagingFirstClicked:function(){var _5e=this._getDataSource();if(!_5e.atBeginning()){_5e.first(_1.hitch(this,"refreshGrid"));}},eventPagingPreviousClicked:function(){var _5f=this._getDataSource();if(!_5f.atBeginning()){_5f.previous(_1.hitch(this,"refreshGrid"));}},eventPagingNextClicked:function(){var _60=this._getDataSource();if(!_60.atEnd()){_60.next(_1.hitch(this,"refreshGrid"));}},eventPagingLastClicked:function(){var _61=this._getDataSource();if(!_61.atEnd()){_61.last(_1.hitch(this,"refreshGrid"));}},_searchElements:null,_searchFilled:false,searchArgumentNode:null,searchControlNode:null,_searchGetConstraints:function(){var _62="";var _63=[];for(var i in this._searchElements){var _64=this._searchElements[i].get("value");(_64!=="")&&_63.push(_64);}if(_63.length){_62="["+_63.join(" and ")+"]";}return _62+this._getGridState().xpathConstraint;},buildSearchBlock:function(){var _65=this._getGridState(),_66=this._getGridConfig(),css=this.CSS,$=mxui.dom.create;if(_65.isSearchBuild){return;}this._searchElements=[];_65.isSearchBuild=true;var _67=this.searchButton=new mxui.widget.Button({"caption":mx.ui.translate("mxui.widget.DataGrid",["search"]),"onClick":_1.hitch(this,"eventSearchActivated"),"class":this.css.searchButton});this.searchControlNode.appendChild($("#",_67.domNode," "));var _68=this.resetButton=new mxui.widget.Button({"caption":mx.ui.translate("mxui.widget.DataGrid",["reset"]),"onClick":_1.hitch(this,"eventSearchResetClicked"),"class":this.css.resetButton});this.searchControlNode.appendChild($("#",_68.domNode," "));var _69=_66.searchBarItems(),_6a=document.createDocumentFragment();for(var i in _69){var _6b=_69[i];_6b.metaobject=this._getMetaEntity();_6b.mxcontext=this.mxcontext;_6b.baseclass=this.css.baseClass;var _6c=new mxui.widget.SearchInput(_6b);this.connect(_6c,"onKeyUp","eventSearchActivated");this._searchElements[i.toString()]=_6c;_6a.appendChild(_6c.domNode);_6c.startup();}this.searchArgumentNode.appendChild(_6a);},buildSearchBar:function(){var _6d=this._getGridState(),_6e=this._getGridConfig();if(!_6d.searchbar){this.searchNode.style.display="none";this._searchFilled=true;return;}var _6f=_6e.searchBarConfig();if(_6f){_6d.searchBarVisible=!_6f.startFolded;_6d.searchBarTogglable=!!_6f.foldable;}else{_6d.searchBarVisible=true;}if(!_6d.searchBarVisible){var _70=false;var _71=_6e.searchBarItems();for(var i in _71){var _72=_71[i];if(_72.defaults){this.buildSearchBlock();_70=true;break;}}this.searchNode.style.display="none";_6d.isSearchBuild=_70;}else{this.buildSearchBlock();this.searchNode.style.display="";}this.checkSearchFields();},eventSearchActivated:function(e){var _73=this,_74=this._getDataSource();_1.stopEvent(e);var _75=this.searchButton;var _76=_1.hitch(this,function(){this._clearSelection();this.refreshGrid();if(this.triggerOnSearchChanged){this.triggerOnSearchChanged();}_75.set("disabled",false);});var _77=false;if(e.type==="click"){this.checkSearchFields();_77=true;}else{if(e.shiftKey&&e.keyCode===13){}else{if(e.keyCode===13){this.checkSearchFields();_77=true;}}}if(!this.constraintsFilled()){_77=false;}if(_77){_75.set("disabled",true);_74.isValid(function(_78){if(_78){_74.setConstraints(_73._searchGetConstraints(),_76);}else{_75.set("disabled",false);}});}},eventSearchResetClicked:function(e){var _79=this,_7a=this._getDataSource();for(var i in this._searchElements){this._searchElements[i].reset();}this.checkSearchFields();_7a.setConstraints(this._searchGetConstraints());var _7b=_1.hitch(this,function(){this.refreshGrid();if(this.triggerOnSearchChanged){this.triggerOnSearchChanged();}});if(this.constraintsFilled()){_7a.isValid(function(_7c){if(_7c){_7a.refresh(_7b);}else{_7a.clean(_7b);}});}},checkSearchFields:function(){var _7d=this._getGridConfig();var _7e=_7d.gridSetting("waitforsearch");if(!_7e){this._searchFilled=true;return;}for(var i in this._searchElements){var _7f=this._searchElements[i].get("value");if(_7f!==""){this.messageNode.innerHTML="";this.messageNode.style.display="none";this._searchFilled=true;return;}}this.messageNode.innerHTML=mx.ui.translate("mxui.widget.DataGrid",["waitForSearch"]);this.messageNode.style.display="block";this._searchFilled=false;},constraintsFilled:function(){if(!this._searchFilled){return false;}for(var i=0,_80;_80=this.reqConstraints[i];i++){if(!this.mxcontext.getContext(_80)){return false;}}return true;},actionToggleSearch:function(_81){var _82=this,_83=this._getGridState();if(!_83.searchBarTogglable){return;}this.buildSearchBlock();if(!(_83.searchBarVisible=!_83.searchBarVisible)){this._searchWipeOut=this._searchWipeOut||_1.fx.wipeOut({node:this.searchNode,duration:200,onEnd:function(){setTimeout(function(){_82.resize(_82._resizeBox);},0);for(var x in _82._searchElements){_82._searchElements[x].hideTooltip();}}});this._searchWipeOut.play();}else{this._searchWipeIn=this._searchWipeIn||_1.fx.wipeIn({node:this.searchNode,duration:200,onEnd:function(){setTimeout(function(){_82.showOverflow();_82.resize(_82._resizeBox);},0);try{for(var x in _82._searchElements){if(!_82._searchElements[x].get("hidden")){_82._searchElements[x].focus();break;}}}catch(e){}}});this.hideOverflow();this._searchWipeIn.play();}},applyContext:function(_84,_85){var _86=this._getMetaEntity(),_87=this._getDataSource(),_88=this._getGridState(),_89=this._getGridConfig(),_8a=this;if(_86==null){_85&&_85();return;}if(!_87){logger.error(this.id+".applyContext: Applying context before rendered!!!");_85&&_85();return;}this._clearSelection();this.cloneContext(_84);this.setUpdateInterval();_88.xpathConstraint=this.xpathConstraint;var _8b=this.mxcontext.getParam("xpathConstraint");if(_8b){_88.xpathConstraint+=_8b;}this.removeSubscriptions();this.registerSubscriptions();if(this.reference){var _8c=this.reference.split(/\//),_8d=_8c[0],_8e=_8c[1];var id=this.mxcontext.getContext(_8d);if(id){var _8f="["+_8e+"=\""+id+"\"]";_88.xpathConstraint+=_8f;}else{}}if(!_88.inDenial){var _90=[];if(this.constraintsFilled()){var _91=[];var _92=function(_93){return function(_94){_93.reinit(_94);};};for(var i in this._searchElements){_91.push(_92(this._searchElements[i]));}_90.push(function(cb){this.collect(_91,cb);});_90.push(function(_95){if(_87.setConstraints){_87.setConstraints(_8a._searchGetConstraints());}_87.reload(_95);});}else{_90.push("actCleanDS");}this.sequence(_90,function(){this.refreshGrid();this.filterSelected();this.shareSelected();_85();});}else{_85&&_85();}},objectUpdateNotification:function(){var _96=this,_97=this._getGridState(),_98=this._getDataSource();if(!_97.inDenial&&this.constraintsFilled()){_98.isValid(function(_99){if(_99){_96.sequence([_1.hitch(_98,"entityUpdate"),function(_9a){_96.refreshGrid();_9a&&_9a();},"filterSelected"]);}});}},actionDeleteSelection:function(_9b){var _9c=this._getGridState(),_9d=this._getSelectedGuids();if(_9c.invertedSelection){}else{if(!_9d.length){mx.ui.info(mx.ui.translate("mxui.widget.DataGrid","no_selection"));}else{var _9e=this;var _9f=function(){var _a0=_9d;_9e._clearSelection();_9e.deselectGridRows();_9e.shareSelected();mx.data.remove({guids:_a0,callback:function(){mx.data.sendClassUpdate(_9e.entity);},error:function(e){mx.onError(e);}});};if(_9b===true){_9f();}else{mx.ui.confirmation({content:mx.ui.translate("mxui.widget.DataGrid","confirm_delete",_9d.length),handler:_9f});}}}},resize:function(box){var _a1=this.domNode,_a2=this.contentNode;_1.style(_a2,"height","auto");if(box){var _a3=_1.marginBox(_a1),_a4=_1.marginBox(_a2),_a5=box.h-(_a3.h-_a4.h);if(_a5>=100){_1.style(_a2,"height",_a5+"px");if(this.headTable){_1.style(this.headTable,"top","0px");}}}this._resizeBox=box;},close:function(){this.disposeContent();},uninitialize:function(_a6){var _a7=null;try{this.clearInterval();this.removeSubscriptions();mxui.widget.destroyChildren(this.searchControlNode);mxui.widget.destroyChildren(this.toolBarNode);mxui.widget.destroyChildren(this.pagingBarNode);if(this.itemNode){mxui.widget.destroyChildren(this.itemNode);}if(_a7){_a7.destroy();}for(var i in this._searchElements){this._searchElements[i].destroy();}this.devBlock&&this.devBlock.destroyRecursive();this._uninitializeGrid&&this._uninitializeGrid();}catch(e){logger.error(this.id+".uninitialize : error : "+e.message);}this._setGridConfig(null);this._setMetaEntity(null);this._setDataSource(null);this._searchElements=null;}});});