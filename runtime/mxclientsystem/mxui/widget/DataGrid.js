
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/DataGrid",["dojo","dijit","dojox","dojo/require!mxui/widget/_Grid,mxui/html/render,mxui/lib/ColumnResizer,mxui/widget/plugins/DataGrid/Calculations,mxui/widget/plugins/DataGrid/GridEditor,mxui/widget/plugins/DataGrid/HoverPreview,mxui/widget/plugins/DataGrid/KeyNavigation"],function(_1,_2,_3){_1.provide("mxui.widget.DataGrid");_1.require("mxui.widget._Grid");_1.require("mxui.html.render");_1.require("mxui.lib.ColumnResizer");_1.require("mxui.widget.plugins.DataGrid.Calculations");_1.require("mxui.widget.plugins.DataGrid.GridEditor");_1.require("mxui.widget.plugins.DataGrid.HoverPreview");_1.require("mxui.widget.plugins.DataGrid.KeyNavigation");_1.declare("mxui.widget.DataGrid",mxui.widget._Grid,{templateString:_1.cache("mxui.widget","templates/DataGrid.html","<div class=\"${baseClass} mx-datagrid\">\n    <div class=\"${baseClass}-searchbar clearfix\" dojoAttachPoint=\"searchNode\" focusIndex=\"0\">\n        <div class=\"${baseClass}-search-controls\" focusIndex=\"1\" dojoAttachPoint=\"searchControlNode\"></div>\n        <div class=\"${baseClass}-search-inputs\" focusIndex=\"0\" dojoAttachPoint=\"searchArgumentNode\"></div>\n        <div class=\"${baseClass}-search-message\" dojoAttachPoint=\"messageNode\"></div>\n    </div>\n    \n    <div class=\"${baseClass}-controlbar clearfix\" dojoAttachPoint=\"controlNode\" focusIndex=\"1\">\n        <div class=\"${baseClass}-pagingbar\" dojoAttachPoint=\"pagingBarNode\"></div>\n        <div class=\"${baseClass}-toolbar\" dojoAttachPoint=\"toolBarNode\"></div>\n    </div>\n        \n    <div class=\"${baseClass}-content\" dojoAttachPoint=\"contentNode\" focusIndex=\"2\">\n        <div class=\"${subClass}-content-wrapper\" dojoAttachPoint=\"tableWrapper\">\n            <table class=\"table table-bordered ${subClass}-head-table\" dojoAttachPoint=\"headTable\">\n                <colgroup dojoAttachPoint=\"headTableGroupNode\"></colgroup>\n                <thead class=\"${subClass}-head\" dojoAttachPoint=\"gridHeadNode\"></thead>\n            </table>\n            <table class=\"table table-striped table-bordered ${subClass}-body-table\" dojoAttachPoint=\"gridTable\">\n                <colgroup dojoAttachPoint=\"bodyTableGroupNode\"></colgroup>\n                <tbody class=\"${subClass}-body\" dojoAttachPoint=\"gridBodyNode\"></tbody>\n                <tfoot class=\"${subClass}-foot\" dojoAttachPoint=\"gridFootNode\"></tfoot>\n            </table>\n        </div>\n    </div>\n</div>\n"),subClass:"mx-datagrid",cssmap:mxui.widget.createCSSMap("mx-datagrid",{sortText:"sort-text",sortIcon:"sort-icon",headCaption:"head-caption",headWrapper:"head-wrapper",columnResizer:"column-resizer",dataWrapper:"data-wrapper"}),readOnly:false,gridBodyNode:null,gridFootNode:null,_deferSyncQueue:0,_deferSyncCallback:null,_selectedGuids:null,_mxObjects:null,_gridColumnNodes:null,_gridRowNodes:null,_gridMatrix:null,_hiddenAggregates:null,constructor:function(){this._selectedGuids=[];this._mxObjects=[];this._gridColumnNodes={};this._gridRowNodes=[];this._gridMatrix=[];this._hiddenAggregates=[];this._gridState={sortable:true,selectable:true,selectionmode:"single",searchbar:true,controlbar:true,pagingbar:true,inDenial:false,searchBarVisible:false,searchBarTogglable:true,xpathConstraint:"",loading:false,invertedSelection:false};},postCreate:function(){this.inherited(arguments);if(this._metaEntity){this._addFocusBoxForTable();this.setupScroll();this.buildGridBody();this.loadPlugins();this.doGridAttributes();this.triggerOnLoad();}this.loaded();},setColumnStyle:function(_4,_5){var _6=_5.display,_7=_6.align||"left",_8=_6.cssClass||"",_9=_6.cssStyle;if(mx.ui.isRtl()){_7=_7=="right"?"left":"right";}if(_9){_4.style=_9;}_1.addClass(_4,[_7==="right"?"mx-right-aligned":"mx-left-aligned",_8].join(" "));},buildGridRow:function(_a,_b){var tr=mxui.dom.tr();this.domData(tr,"gridrow",_b);var td,_c=null,_d=[];for(var i=0,_e;_e=_a[i];i++){td=mxui.dom.td();this.domData(td,{row:_b,column:i,key:_e.tag});this.setColumnStyle(td,_e);td.appendChild(mxui.dom.div({"class":this.cssmap.dataWrapper}));tr.appendChild(td);_d[i]=td;}this._gridMatrix.push(_d);return tr;},setNodeTitle:function(_f,_10){_10=_10||_f;var _11=_10.textContent?_10.textContent:_10.innerText;_11&&_f.setAttribute("title",_11.replace(/^\s\s*/,"").replace(/\s\s*$/,""));},gridbodyFillCell:function(_12,_13,_14){var _15=null,_16;if(_13.has(_14)){_16=_13.get(_14);switch(_12.render.toLowerCase()){case "icon":case "enumicon":var src=_12.display.mapping[_16];_16=src?"<img src='"+src+"'/>":"";break;case "weblink":break;default:try{var _17=_12.display,_18=_17.dateFormat||"date";_16=mxui.html.renderValue(_13,_14,{format:_18.toLowerCase().replace("custom","date"),datepattern:_17.format,formatted:_17.formatted,precision:_17.precision});_16=mxui.dom.escapeString(_16.replace(/\n/g," "));}catch(e){logger.error("mxui.widget.DataGrid.gridbodyFillCell : "+e.message);}break;}_16=(_16?_16:String.fromCharCode(160));}else{_16=String.fromCharCode(160);}return _16;},createRenderItem:function(obj,_19,_1a){return ({mxobj:obj,attrname:_19,attrs:_1a});},disableRow:function(tr){tr.style.display="";this.domData(tr,"mendixguid",null);var tds=tr.getElementsByTagName("td");for(var i=0;i<tds.length;i++){tds[i].firstChild.innerHTML="&nbsp";tds[i].setAttribute("title","");}},setupGridState:function(){this.inherited(arguments);this._gridState.sortable=this._gridConfig.gridSetting("sortable");},loadPlugins:function(_1b){this.hideFootNode();if(this._gridState.editable){this.loadPlugin("GridEditor");mxui.wm.focus.removeBox(this.contentNode);}var _1c=this._gridConfig.getPlugins();for(var i in _1c){this.loadPlugin(i,_1c[i]);}},setupScroll:function(_1d){var _1e=this.headTable,_1f=this.contentNode;this.connect(_1f,"scroll",function(e){_1e.style.top=_1f.scrollTop+"px";});},resize:function(box){this.inherited(arguments);this._resizer.recalculate();},buildGridBody:function(){var _20=this._gridConfig.gridAttributes();var _21=this;var _22=null;var _23=null;var _24=null;var _25=null;var row=mxui.dom.tr();var _26=mxui.dom.div({"class":this.cssmap.headCaption});var _27=mxui.dom.div({"class":this.cssmap.headWrapper});var _28=[];mxui.dom.disableSelection(row);var _29=this._gridConfig.gridSetting("sortparams"),_2a={};if(_29){for(var j=0,_2b;_2b=_29[j];j++){_2a[_2b[0]]=_2b;}}var _2c=this._gridConfig.getPlugins()["Calculations"]||{};var _2d=0;for(var i=0,_2e;_2e=_20[i];i++,_2d+=_2e.tag in _2c?1:0){var _2f=_22;var _30=_2e.display.width;if(_30!=null&&(_30=="0px"||_30=="0%")){if(_2e.tag in _2c){this._hiddenAggregates.push(_2d);}_20.splice(i--,1);continue;}_22=mxui.dom.th();this.domData(_22,{datakey:_2e.tag,key:i});this.setColumnStyle(_22,_2e);var _31=_2e.display.string;_25=_26.cloneNode(true);_25.innerHTML=!_31?"&nbsp;":_31;var _32=_27.cloneNode(true);_23=mxui.dom.div({"class":this.cssmap.sortIcon,style:"display: none"},_24=mxui.dom.span({"class":this.cssmap.sortText}));_32.appendChild(_23);_32.appendChild(_25);_22.appendChild(_32);this.setNodeTitle(_22,_25);var _33=_2e.display.width;var col=mxui.dom.col({style:"width:"+_33}),_34=col.cloneNode(true);this.headTableGroupNode.appendChild(col);this.bodyTableGroupNode.appendChild(_34);_28[i]=[col,_34];var _35=_2a[_2e.tag];if(_35){var _36=_35[1];this.domData(_22,"sortorder",_36);if(_36=="asc"){_24.innerHTML="&#9650;";}else{_24.innerHTML="&#9660;";}_23.style.display="";}this._gridColumnNodes[i]=_22;row.appendChild(_22);}_2a=null;this.gridHeadNode.appendChild(row);if(this._gridState.sortable){this.own(_1.on(this.gridHeadNode,"th:click",function(e){var key=_21.domData(this,"key");if(_20[key].sortable!==false){_21.eventColumnClicked(e,this);}}));}this._resizer=new mxui.lib.ColumnResizer({thNodes:mxui.dom.toArray(row.children),colNodes:_28,colUnits:_20[0].display.width.indexOf("%")>0?"%":"px",rtl:!this.isLeftToRight(),tableNode:this.headTable,gridNode:this.gridTable});if(this._gridState.showemptyrows){var _37=this._gridConfig.gridSetting("rows");for(var i=0;i<_37;i++){this.addNewRow();}}this.own(_1.on(this.gridBodyNode,"tr:click",function(e){_21.eventItemClicked(e,this);}));this.liveConnect(this.gridBodyNode,"onclick",{td:"eventCellClicked"});this.liveConnect(this.gridBodyNode,"onmouseover",{tr:"eventRowMouseOver"});this.liveConnect(this.gridBodyNode,"onmouseout",{tr:"eventRowMouseOut"});var _38=function(e){_21.eventActionBindingHandler(this,e.type);};var _39=this._gridConfig.gridActionBindings();for(var _3a in _39){this.own(_1.on(this.gridBodyNode,"tr:"+_3a.replace(/^on/,""),_38));}},addNewRow:function(){var _3b=this._gridConfig.gridAttributes();var _3c=this._gridConfig.gridSetting("rows");var _3d=this._gridRowNodes.length;if(_3d>_3c){return null;}var tr=this.buildGridRow(_3b,_3d);this._gridRowNodes.push(tr);this.gridBodyNode.appendChild(tr);var box=this.getFocusBox(this.contentNode);box.add&&box.add(tr);return tr;},doGridAttributes:function(){var _3e=this._gridConfig.gridAttributes();for(var i=0,_3f;_3f=_3e[i];i++){var _40=_3f.tag.split("/");switch(_40.length){case 2:_40=[_40[1]];break;case 1:break;case 4:_40=[_40[1],_40[2],_40[3]];break;}_3f.attrs=_40;}},fillGrid:function(){this._mxObjects=this._dataSource.getObjects()||[];var _41=this._gridConfig.gridAttributes();var _42,_43=null;try{if(this._gridState.selectfirst&&!this._gridState.invertedSelection&&this._mxObjects.length>0&&this._selectedGuids.length===0){this._selectedGuids.push(this._mxObjects[0].getGuid());setTimeout(_1.hitch(this,function(){this.shareSelected();}),1000);}var _44=this._mxObjects.length-this._gridRowNodes.length,i,l,id;if(_44>0){for(i=0;i<_44;i++){this.addNewRow();}this.mxform.resize();}else{if(_44<0){var _45=this._gridRowNodes.length;var _46=_45+_44;for(i=_46;i<_45;i++){var _47=this._gridRowNodes[i];if(this._gridState.showemptyrows){this.disableRow(_47);}else{_47.style.display="none";}}}}var _48={};for(i=0;id=this._selectedGuids[i];i++){_48[id]=true;}for(i=0,l=this._mxObjects.length;i<l;i++){_42=this._mxObjects[i].getGuid();_43=this._gridRowNodes[i];this.domData(_43,"mendixguid",_42);this._gridbodyFillRow(this._mxObjects[i],this._gridMatrix[i],_41);if(!_48[_42]){this.deselectRow(_43);}else{this.selectRow(_43);}_43.style.display="";}if(this._gridState.showemptyrows){var _49=this._mxObjects.length;var _4a=this._gridRowNodes.length;if(_49<_4a){for(i=_49;i<_4a;i++){this.deselectRow(this._gridRowNodes[i]);}}}_48=null;}catch(e){}},refreshGrid:function(){this.triggerPreRefresh();this.inherited(arguments);this.triggerOnRefresh();},triggerOnLoad:function(){this.triggerPluginEvent("onLoad");},triggerOnSync:function(){this.triggerPluginEvent("onSync");},triggerOnRefresh:function(){this.triggerPluginEvent("onRefresh");},triggerPreRefresh:function(){this.triggerPluginEvent("preRefresh");},triggerOnSearchChanged:function(){this.triggerPluginEvent("onSearchChanged");},actDeferSyncAction:function(_4b){if(this._deferSyncQueue===0){_4b&&_4b();}else{if(this._deferSyncCallback==null){this._deferSyncCallback=_4b;}else{}}},eventCellClicked:function(e){this.triggerPluginEvent("onCellClicked",e);},eventRowMouseOver:function(e){this.triggerPluginEvent("onRowMouseOver",e);},eventRowMouseOut:function(e){this.triggerPluginEvent("onRowMouseOut",e);},eventCellMouseOut:function(e){this.triggerPluginEvent("onCellMouseOut",e);},eventCellMouseOver:function(e){this.triggerPluginEvent("onCellMouseOver",e);},eventSelectRow:function(e){this.triggerPluginEvent("onSelectRow",e);},eventColumnClicked:function(e,_4c){var _4d=e.shiftKey;var _4e=null;if(!_4d){for(var i in this._gridColumnNodes){_4e=this._gridColumnNodes[i];_1.query("."+this.cssmap.sortIcon,_4e)[0].style.display="none";}}else{mxui.dom.clearSelection();}var _4f=this.domData(_4c,"datakey");var _50="asc";if(this.domData(_4c,"sortorder")){_50=this.domData(_4c,"sortorder");_50=(_50=="asc")?"desc":"asc";}this.domData(_4c,"sortorder",_50);var _51=_1.query("."+this.cssmap.sortText,_4c)[0];if(_50=="asc"){_51.innerHTML="&#9650;";}else{_51.innerHTML="&#9660;";}_51.parentNode.style.display="";this._dataSource.setSortOptions(_4f,_50,_4d);if(this.constraintsFilled()){this._dataSource.refresh(_1.hitch(this,"refreshGrid"));}},filterSelected:function(){var _52=[];for(var i=0,_53;_53=this._selectedGuids[i];i++){if(this._dataSource.getObject(_53)!=null){_52.push(_53);}}this._selectedGuids=_52;},deselectGridRows:function(){for(var i=0,l=this._gridRowNodes.length;i<l;++i){this.deselectRow(this._gridRowNodes[i]);}},getAggregates:function(){return this._dataSource.getAggregates();},actionExport:function(_54){if(this.constraintsFilled()){var _55=mx.ui.getProgressIndicator("popup");_55.start();this._dataSource.generateExport({params:_54,callback:function(){_55.stop();},error:function(e){_55.stop();mx.onError(e);}});}},actionInsertNewAtTop:function(_56){var _57=this._getEntity(_56);if(_57){this._insertNewFirstOrLast(_57,_56[_57],false);}},actionInsertNewAtBottom:function(_58){var _59=this._getEntity(_58);if(_59){this._insertNewFirstOrLast(_59,_58[_59],true);}},getCellNode:function(row,key){var rob=this._gridMatrix[row];if(rob){for(var i=0;i<rob.length;i++){if(this.domData(rob[i],"key")==key){return rob[i];}}}return null;},getMxObjectAtRow:function(x){return (this._mxObjects.length>=x)?this._mxObjects[x]:false;},getRowForMxObject:function(_5a){var ret=null;if(!_5a||!_5a.getEntity){return ret;}var _5b=_5a.getGuid();for(var i=0,obj;obj=this._mxObjects[i];i++){if(obj.getGuid()==_5b){ret=i;}}return ret;},getKeyPositions:function(){var pos={};var _5c=0;for(var i in this._gridColumnNodes){pos[i]=_5c++;}return pos;},getEntityProperties:function(){return this._gridConfig.gridAttributes();},getHiddenAggregates:function(){return this._hiddenAggregates.slice();},getActionProperties:function(_5d,_5e){var _5f=this._gridConfig.dataEntityConfigs();var act=null;if(_5f[_5d]){act=_5f[_5d][_5e];}return act;},getCurrentGridSize:function(){return this._mxObjects.length;},getGridNodeHash:function(){return this._gridMatrix;},getCurrentXPath:function(){var _60=this._dataSource?this._dataSource.getCurrentXPath()||"":"";return _60+this._gridState.xpathConstraint;},preventUpdates:function(){this._gridState.inDenial=true;},acceptUpdates:function(){this._gridState.inDenial=false;},acceptingUpdates:function(){return !this._gridState.inDenial;},updateMxObject:function(_61,_62){var row=this.getRowForMxObject(_61);if(row!=null){try{this._gridbodyFillRow(_61,this._gridMatrix[row],this._gridConfig.gridAttributes());}catch(e){}}_62&&_62();},showFootNode:function(){this.gridFootNode.style.display="";},hideFootNode:function(){this.gridFootNode.style.display="none";},addToSyncDeferQueue:function(){this._deferSyncQueue++;},removeFromSyncDeferQueue:function(){this._deferSyncQueue--;if(this._deferSyncQueue===0){if(this._deferSyncCallback!=null){this._deferSyncCallback();this._deferSyncCallback=null;}else{}}},uninitialize:function(){this._resizer.destroy();this.triggerPluginEvent("onDestroy");this.inherited(arguments);},_setSelectableAttr:function(_63){this._gridState.selectable=!!_63;},_setDisabledAttr:function(_64){},_setReadOnlyAttr:function(_65){if(this._gridState.controlbar&&_65!=this.readOnly){var _66=this._gridConfig.gridTools();if(_65==true){for(var i=_66.length-1,_67;_67=_66[i];i--){if(_67.mxid){var _68=this._gridConfig.getActionsByKey(_67.mxid);if(_68&&/AddRef|DeleteRef|CreateRef/.test(_68.actionCall)){this.toolBarNode.removeChild(_67._domNode);}}}}else{for(var i=_66.length-1,_67;_67=_66[i];i--){if(_67.mxid){var _68=this._gridConfig.getActionsByKey(_67.mxid);if(_68&&/AddRef|DeleteRef|CreateRef/.test(_68.actionCall)){if(_67._nextNode){this.toolBarNode.insertBefore(_67._domNode,_67._nextNode);}else{this.toolBarNode.appendChild(_67._domNode);}}}}}this.readOnly=!!_65;}},_gridbodyFillRow:function(_69,_6a,_6b){var _6c=[];var _6d=" - ";var _6e=null;for(var i=0,td;td=_6a[i];i++){var _6f=[];var _70=_6b[i];var _71=false;_6c=_70.attrs;if(_6c.length==1){_6f.push(this.createRenderItem(_69,_6c[0],_70));}else{var _72=_69;var _73=_6c.concat([]);while(_73.length>3){var _74=_73.shift();var _75=_73.shift();var _76=_72.getChildren(_74);if(_72=_76[0]){if(!_72.isA(_75)){logger.error(this.id+".gridBodyFillRow: Entity and reference do not match");_72=null;break;}}else{_72=null;break;}}if(_72!=null&&(_73.length)==3){_6e=_72.getChildren(_73[0]);_1.forEach(_6e,function(_77){_6f.push(this.createRenderItem(_77,_73[2],_70));},this);if(_6c.length==3&&_6e.length===0){_71=!!_69.get(_6c[0]);}}}var _78=td.firstChild;_78.innerHTML="";if(!_71){var _79=[];try{if(_6f.length!==0){var _7a=[];for(var j=0,_7b;_7b=_6f[j];j++){var _6d=this.gridbodyFillCell(_7b.attrs,_7b.mxobj,_7b.attrname);if(_6d!=null){_7a.push(_6d);}else{logger.error(this.id+".gridBodyFillRow: Received NO content!!!");}if(/^(enum)?icon$/i.test(_7b.attrs.render)){_79.push(_7b.mxobj.getEnumCaption(_7b.attrname));}}_78.innerHTML=_7a.join(_7a.length>1?", ":"");}}catch(e){logger.error(this.id+".gridBodyFillRow :"+e.message);}if(_78.childNodes.length===0){_78.innerHTML="&nbsp;";}if(_79.length!==0){td.setAttribute("title",_79.join(";"));}else{this.setNodeTitle(td);}}else{if(_69.isReference(_6c[0])){(function(td){var _7c=_70;var _7d=(_6c.length==3)?_6c[2]:_6c[3];var _7e=_69.getReferences(_6c[0]);var _7f=_78;mx.data.get({guids:_7e,callback:function(_80){var _81=[],_79=[];_1.forEach(_80,function(obj){var _82=this.gridbodyFillCell(_7c,obj,_7d);if(_82!=null){_81.push(_82);}else{logger.error(this.id+".gridBodyFillRow: Recivied NO content!!!");}if(/^(enum)?icon$/i.test(_7c.render)){_79.push(obj.getEnumCaption(_7d));}});var _83=_81.length;_7f.innerHTML=_83===0?"&nbsp;":_81.join(_83>1?";":"");if(_7f.childNodes.length===0){_7f.innerHTML="&nbsp;";}if(_79.length!==0){td.setAttribute("title",_79.join(";"));}else{this.setNodeTitle(td);}},error:mx.onError},this);}).call(this,td);}else{logger.error(this.id+".gridBodyFillRow: Attribute "+_6c[0]+" is not a reference(set)");}}}},_insertNewFirstOrLast:function(_84,_85,_86){var _87=function(_88){mx.data.create({entity:_84,context:this.mxcontext,persistent:_85.persistent,callback:function(obj){if(!_86){this._dataSource.insertMxObjectAtStart(obj);}else{this._dataSource.insertMxObjectAtEnd(obj);}_88();},error:mx.onError},this);};this.triggerOnSync();this.sequence([_87,"actDeferSyncAction",function(){this.refreshGrid();var row=_86?this._dataSource.getObjects().length-1:0;this.eventSelectRow({row:row});}]);},_clearSelection:function(){this._selectedGuids=[];},_getEntity:function(_89){return mendix.lang.firstKey(_89);},_getSelectedGuids:function(){return this._selectedGuids;},_getCurrentGuid:function(){return this._selectedGuids[this._selectedGuids.length-1];},_addObjectToSelection:function(obj){var _8a=obj.getGuid();if(_1.indexOf(this._selectedGuids,_8a)==-1){this._selectedGuids.push(_8a);}},_removeObjectFromSelection:function(obj){var _8b=obj.getGuid(),_8c=_1.indexOf(this._selectedGuids,_8b);if(_8c!=-1){this._selectedGuids.splice(_8c,1);}},_getNodeFromEvent:function(e){return mxui.dom.getAncestorNode(e.target,"TR");},_getActionFromEvent:function(e){var _8d=this._gridConfig.gridActionBindings(),_8e=_8d["on"+e.type];return this._gridConfig.getActionsByKey(_8e);},_getObjectFromNode:function(_8f){return this._mxObjects[this.domData(_8f,"gridrow")];},_addFocusBoxForTable:function(){var box=this.addFocusBox(this.contentNode);box.pressed({DOWN_ARROW:box.FOCUS_NEXT,UP_ARROW:box.FOCUS_PREV,SPACE:function(e){this.eventItemClicked(e,e.target);},ENTER:function(e,_90){if(_90){this.eventActionBindingHandler(_90,"dblclick");}},LEFT_ARROW:function(){if(!this._dataSource.atBeginning()){this._dataSource.previous(_1.hitch(this,function(){this.refreshGrid();mxui.wm.focus.restore();}));}},RIGHT_ARROW:function(){if(!this._dataSource.atEnd()){this._dataSource.next(_1.hitch(this,function(){this.refreshGrid();mxui.wm.focus.restore();}));}}},this);}});});