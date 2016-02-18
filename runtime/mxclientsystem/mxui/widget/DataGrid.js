/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
require({cache:{"url:mxui/widget/templates/DataGrid.html":"<div class=\"${baseClass} mx-datagrid\">\n    <div class=\"${baseClass}-searchbar clearfix\" dojoAttachPoint=\"searchNode\" focusIndex=\"0\">\n        <div class=\"${baseClass}-search-controls\" focusIndex=\"1\" dojoAttachPoint=\"searchControlNode\"></div>\n        <div class=\"${baseClass}-search-inputs\" focusIndex=\"0\" dojoAttachPoint=\"searchArgumentNode\"></div>\n        <div class=\"${baseClass}-search-message\" dojoAttachPoint=\"messageNode\"></div>\n    </div>\n    \n    <div class=\"${baseClass}-controlbar clearfix\" dojoAttachPoint=\"controlNode\" focusIndex=\"1\">\n        <div class=\"${baseClass}-pagingbar\" dojoAttachPoint=\"pagingBarNode\"></div>\n        <div class=\"${baseClass}-toolbar\" dojoAttachPoint=\"toolBarNode\"></div>\n    </div>\n        \n    <div class=\"${baseClass}-content\" dojoAttachPoint=\"contentNode\" focusIndex=\"2\">\n        <div class=\"${subClass}-content-wrapper\" dojoAttachPoint=\"tableWrapper\">\n            <table class=\"table table-bordered ${subClass}-head-table\" dojoAttachPoint=\"headTable\">\n                <colgroup dojoAttachPoint=\"headTableGroupNode\"></colgroup>\n                <thead class=\"${subClass}-head\" dojoAttachPoint=\"gridHeadNode\"></thead>\n            </table>\n            <table class=\"table table-striped table-bordered ${subClass}-body-table\" dojoAttachPoint=\"gridTable\">\n                <colgroup dojoAttachPoint=\"bodyTableGroupNode\"></colgroup>\n                <tbody class=\"${subClass}-body\" dojoAttachPoint=\"gridBodyNode\"></tbody>\n                <tfoot class=\"${subClass}-foot\" dojoAttachPoint=\"gridFootNode\"></tfoot>\n            </table>\n        </div>\n    </div>\n</div>\n"}});define("mxui/widget/DataGrid",["mxui/widget/_Grid","mxui/widget","mxui/wm/focus","mxui/dom","mxui/lib/ColumnResizer","mendix/lang","mendix/logger","dojo/query","dojo/on","dojo/dom-class","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/text!mxui/widget/templates/DataGrid.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var _f=_d(_1,{declaredClass:"mxui.widget.DataGrid",templateString:_e,subClass:"mx-datagrid",cssmap:_2.createCSSMap("mx-datagrid",{sortText:"sort-text",sortIcon:"sort-icon",headCaption:"head-caption",headWrapper:"head-wrapper",columnResizer:"column-resizer",dataWrapper:"data-wrapper"}),readOnly:false,gridBodyNode:null,gridFootNode:null,_deferSyncQueue:0,_deferSyncCallback:null,_mxObjects:null,_gridColumnNodes:null,_gridRowNodes:null,_gridMatrix:null,_visibleColumns:null,_hiddenAggregates:null,constructor:function(){this._mxObjects=[];this._gridColumnNodes=[];this._gridRowNodes=[];this._gridMatrix=[];this._visibleColumns=[];this._hiddenAggregates=[];this._gridState={sortable:true,selectable:true,selectionmode:"single",searchbar:true,controlbar:true,pagingbar:true,inDenial:false,searchBarVisible:false,searchBarTogglable:true,xpathConstraint:"",loading:false,invertedSelection:false};},postCreate:function(){this.inherited(arguments);if(this._metaEntity){this._addFocusBoxForTable();this.setupScroll();this.buildGridBody();this.loadPlugins();this.doGridAttributes();this.triggerOnLoad();}this.loaded();},setColumnStyle:function(_10,_11){var _12=_11.display,_13=_12.align||"left";if(window.mx.ui.isRtl()){_13=(_13==="right"?"left":"right");}if(_12.cssStyle){_10.setAttribute("style",_12.cssStyle);}else{_10.removeAttribute("style");}_a.add(_10,[_11.name?"mx-name-"+_11.name:"","mx-"+_13+"-aligned"]);_a.add(_10,_12.cssClass);},buildGridRow:function(_14,_15){var $=_4.create,tr=$("tr",{"class":"mx-name-index-"+_15}),row;this.domData(tr,"gridrow",_15);row=_b.map(_14,function(_16,i){var td=$("td");this.domData(td,{row:_15,column:i,key:_16.tag});this.setColumnStyle(td,_16);td.appendChild($("div",{"class":this.cssmap.dataWrapper}));tr.appendChild(td);return td;},this);this._gridMatrix.push(row);return tr;},setNodeTitle:function(_17,_18){if(!_17){return;}var _19=_4.text(_18||_17);_17.setAttribute("title",_c.trim(_19));},gridbodyFillCell:function(_1a,_1b,_1c){var _1d;if(!_1b.has(_1c)){return "&nbsp;";}switch(_1a.render.toLowerCase()){case "icon":case "enumicon":var src=_1a.display.mapping[_1b.get2(_1c)];_1d=src?"<img src='"+src+"'>":"";break;case "weblink":_1d=_1b.get2(_1c);break;default:var _1e=_1a.display,_1f=_1e.dateFormat||"date";_1d=window.mx.parser.formatAttribute(_1b,_1c,{selector:_1f.toLowerCase().replace("custom","date"),datePattern:_1e.format,groups:_1e.formatted,places:_1e.precision});_1d=_4.escapeString(_1d.replace(/\n/g," "));}return _1d||"&nbsp;";},disableRow:function(tr){tr.style.display="";this.domData(tr,"mendixguid",null);_b.forEach(tr.getElementsByTagName("td"),function(td){td.firstChild.innerHTML="&nbsp";td.setAttribute("title","");});},setupGridState:function(){this.inherited(arguments);this._gridState.sortable=this._gridConfig.gridSetting("sortable");},loadPlugins:function(){this.hideFootNode();if(this._gridState.editable){this.loadPlugin("GridEditor");_3.removeBox(this.contentNode);}var _20=this._gridConfig.getPlugins();for(var _21 in _20){this.loadPlugin(_21,_20[_21]);}},setupScroll:function(){var _22=this.headTable,_23=this.contentNode;this.connect(_23,"scroll",function(){_22.style.top=_23.scrollTop+"px";});},resize:function(box){this.inherited(arguments);this._resizer.recalculate();},buildGridBody:function(){var _24=this,$=_4.create,_25=this._gridConfig.gridAttributes(),_26=[],_27=[],row=$("tr",{"class":"mx-name-head-row"}),_28=$("div",{"class":this.cssmap.headCaption}),_29=$("div",{"class":this.cssmap.headWrapper}),_2a={},_2b=this._gridConfig.getPlugins()["Calculations"]||{};_4.disableSelection(row);_b.forEach(this.getState("sortOptions",this._gridConfig.gridSetting("sortparams")),function(_2c){_2a[_2c[0]]=_2c;});_b.forEach(_25,function(_2d,i){var _2e=_2d.display.width,_2f=_2d.tag in _2b,_30=_2e!=null&&(_2e=="0px"||_2e=="0%");if(_2f){_27.push(_30);}if(!_30){this._visibleColumns.push(_2d);}},this);_b.forEach(_27,function(_31,i){if(_31){this._hiddenAggregates.push(i);}},this);_b.forEach(this._visibleColumns,function(_32,i){var _33=$("th");this.domData(_33,{datakey:_32.tag,index:i});this.setColumnStyle(_33,_32);var _34=$("span",{"class":this.cssmap.sortText});var _35=$("div",{"class":this.cssmap.sortIcon,style:"display: none"},_34);var _36=_2a[_32.tag];if(_36){var _37=_36[1];this.domData(_33,"sortorder",_37);_34.innerHTML=_37==="asc"?"&#9650;":"&#9660;";_35.style.display="";}var _38=_28.cloneNode(true);_38.innerHTML=_32.display.string||"&nbsp;";var _39=_29.cloneNode(true);_39.appendChild(_35);_39.appendChild(_38);_33.appendChild(_39);this.setNodeTitle(_33,_38);var _3a=$("col",{style:"width:"+_32.display.width}),_3b=_3a.cloneNode(true);this.headTableGroupNode.appendChild(_3a);this.bodyTableGroupNode.appendChild(_3b);_26.push([_3a,_3b]);this._gridColumnNodes.push(_33);row.appendChild(_33);},this);this.gridHeadNode.appendChild(row);if(this._gridState.sortable){this.own(_9(this.gridHeadNode,"th:click",function(e){var key=_24.domData(this,"index");if(_25[key].sortable!==false){_24.eventColumnClicked(e,this);}}));}this._resizer=new _5({thNodes:_4.toArray(row.children),colNodes:_26,colUnits:_25[0].display.width.indexOf("%")>0?"%":"px",rtl:!this.isLeftToRight(),tableNode:this.headTable,gridNode:this.gridTable});if(this._gridState.showemptyrows){var _3c=this._gridConfig.gridSetting("rows");for(var i=0;i<_3c;i++){this.addNewRow();}}this.own(_9(this.gridBodyNode,"tr:click",function(e){_24.eventItemClicked(e,this);}));this.liveConnect(this.gridBodyNode,"onclick",{td:"eventCellClicked"});this.liveConnect(this.gridBodyNode,"onmouseover",{tr:"eventRowMouseOver"});this.liveConnect(this.gridBodyNode,"onmouseout",{tr:"eventRowMouseOut"});var _3d=function(e){_24.eventActionBindingHandler(this,e.type);};var _3e=this._gridConfig.gridActionBindings();for(var _3f in _3e){this.own(_9(this.gridBodyNode,"tr:"+_3f.replace(/^on/,""),_3d));}},addNewRow:function(){var _40=this._visibleColumns,_41=this._gridConfig.gridSetting("rows"),_42=this._gridRowNodes.length;if(_42>_41){return null;}var tr=this.buildGridRow(_40,_42);this._gridRowNodes.push(tr);this.gridBodyNode.appendChild(tr);var box=this.getFocusBox(this.contentNode);box.add&&box.add(tr);return tr;},doGridAttributes:function(){var _43=this._visibleColumns;_b.forEach(_43,function(_44){var _45=_44.tag.split("/");if(_45.length==2||_45.length==4){_45.shift();}_44.attrs=_45;},this);},fillGrid:function(){this._mxObjects=this._dataSource.getObjects()||[];var _46=this._visibleColumns,_47=(this._gridState.selectfirst&&!this._gridState.invertedSelection&&this._mxObjects.length>0&&!this._hasSelection());if(_47){this._addToSelection(this._mxObjects[0].getGuid());setTimeout(_c.hitch(this,function(){this._shareSelection(this._metaEntity.getEntity());}),1000);}var _48=this._mxObjects.length-this._gridRowNodes.length;if(_48>0){while(_48--){this.addNewRow();}this.mxform.resize();}else{if(_48<0){_b.forEach(this._gridRowNodes.slice(this._mxObjects.length),function(_49){_a.remove(_49,"selected");if(this._gridState.showemptyrows){this.disableRow(_49);}else{_49.style.display="none";}},this);}}_b.forEach(this._mxObjects,function(_4a,i){var _4b=_4a.getGuid(),_4c=this._gridRowNodes[i];this.domData(_4c,"mendixguid",_4b);this._gridbodyFillRow(_4a,this._gridMatrix[i],_46);if(!this._isSelected(_4b)){this.deselectRow(_4c);}else{this.selectRow(_4c);}_4c.style.display="";},this);},refreshGrid:function(){this.triggerPreRefresh();this.inherited(arguments);this.triggerOnRefresh();},triggerOnLoad:function(){this.triggerPluginEvent("onLoad");},triggerOnSync:function(){this.triggerPluginEvent("onSync");},triggerOnRefresh:function(){this.triggerPluginEvent("onRefresh");},triggerPreRefresh:function(){this.triggerPluginEvent("preRefresh");},triggerOnSearchChanged:function(){this.triggerPluginEvent("onSearchChanged");},actDeferSyncAction:function(_4d){if(this._deferSyncQueue===0){_4d&&_4d();}else{if(this._deferSyncCallback==null){this._deferSyncCallback=_4d;}else{}}},eventCellClicked:function(e){this.triggerPluginEvent("onCellClicked",e);},eventRowMouseOver:function(e){this.triggerPluginEvent("onRowMouseOver",e);},eventRowMouseOut:function(e){this.triggerPluginEvent("onRowMouseOut",e);},eventCellMouseOut:function(e){this.triggerPluginEvent("onCellMouseOut",e);},eventCellMouseOver:function(e){this.triggerPluginEvent("onCellMouseOver",e);},eventSelectRow:function(e){this.triggerPluginEvent("onSelectRow",e);},eventColumnClicked:function(e,_4e){var _4f=e.shiftKey;if(!_4f){_b.forEach(this._gridColumnNodes,function(_50){_50.querySelector("."+this.cssmap.sortIcon).style.display="none";},this);}else{_4.clearSelection();}var _51=this.domData(_4e,"datakey"),_52="asc";if(this.domData(_4e,"sortorder")){_52=this.domData(_4e,"sortorder");_52=(_52==="asc")?"desc":"asc";}this.domData(_4e,"sortorder",_52);var _53=_4e.querySelector("."+this.cssmap.sortText);_53.innerHTML=(_52==="asc"?"&#9650;":"&#9660;");_53.parentNode.style.display="";this._dataSource.setSortOptions(_51,_52,_4f);if(this.constraintsFilled()){this._dataSource.refresh(_c.hitch(this,"refreshGrid"));}},deselectGridRows:function(){_b.forEach(this._gridRowNodes,function(_54){this.deselectRow(_54);},this);},getAggregates:function(){return this._dataSource.getAggregates();},actionExport:function(_55){if(this.constraintsFilled()){var _56=window.mx.ui.getProgressIndicator("popup");_56.start();this._dataSource.generateExport({params:_55,callback:function(){_56.stop();},error:function(e){_56.stop();window.mx.onError(e);}});}},actionInsertNewAtTop:function(_57){var _58=this._getEntity(_57);if(_58){this._insertNewFirstOrLast(_58,_57[_58],false);}},actionInsertNewAtBottom:function(_59){var _5a=this._getEntity(_59);if(_5a){this._insertNewFirstOrLast(_5a,_59[_5a],true);}},getCellNode:function(_5b,key){var row=this._gridMatrix[_5b];if(row){for(var i=0;i<row.length;i++){if(this.domData(row[i],"key")===key){return row[i];}}}return null;},getMxObjectAtRow:function(_5c){return (this._mxObjects.length>=_5c)?this._mxObjects[_5c]:false;},getRowForMxObject:function(_5d){var _5e=this._mxObjects;for(var i=0;i<_5e.length;++i){if(_5e[i].getGuid()===_5d.getGuid()){return i;}}},getEntityProperties:function(){return this._visibleColumns;},getHiddenAggregates:function(){return this._hiddenAggregates.slice();},getActionProperties:function(_5f,_60){var _61=this._gridConfig.dataEntityConfigs(),act=null;if(_61[_5f]){act=_61[_5f][_60];}return act;},getCurrentGridSize:function(){return this._mxObjects.length;},getGridNodeHash:function(){return this._gridMatrix;},getCurrentXPath:function(){var _62=this._dataSource?this._dataSource.getCurrentXPath()||"":"";return _62+this._gridState.xpathConstraint;},preventUpdates:function(){this._gridState.inDenial=true;},acceptUpdates:function(){this._gridState.inDenial=false;},acceptingUpdates:function(){return !this._gridState.inDenial;},updateMxObject:function(_63,_64){var row=this.getRowForMxObject(_63);if(!row){this._gridbodyFillRow(_63,this._gridMatrix[row],this._visibleColumns);}_64&&_64();},showFootNode:function(){this.gridFootNode.style.display="";},hideFootNode:function(){this.gridFootNode.style.display="none";},addToSyncDeferQueue:function(){this._deferSyncQueue++;},removeFromSyncDeferQueue:function(){this._deferSyncQueue--;if(this._deferSyncQueue===0){if(this._deferSyncCallback!=null){this._deferSyncCallback();this._deferSyncCallback=null;}else{}}},uninitialize:function(){this._resizer.destroy();this.triggerPluginEvent("onDestroy");this.inherited(arguments);},_setSelectableAttr:function(_65){this._gridState.selectable=!!_65;},_setDisabledAttr:function(_66){},_setReadOnlyAttr:function(_67){var _68=this;function _69(_6a,_6b){_b.forEach(_6a,function(_6c){if(_6c.mxid){var _6d=this._gridConfig.getActionsByKey(_6c.mxid);if(_6d&&/AddRef|DeleteRef|CreateRef/.test(_6d.actionCall)){_6b&&_6b(_6c);}}},_68);};if(this._gridState.controlbar&&_67!=this.readOnly){var _6e=this._gridConfig.gridTools();if(_67){_69(_6e,function(_6f){_68.toolBarNode.removeChild(_6f._domNode);});}else{_69(_6e,function(_70){if(_70._nextNode){_68.toolBarNode.insertBefore(_70._domNode,_70._nextNode);}else{_68.toolBarNode.appendChild(_70._domNode);}});}this.readOnly=!!_67;}},_renderObjectsToCell:function(_71,td,_72,_73){var _74=_72.attrs.slice(-1)[0],_75=td.firstChild,_76=[],_77=[];td.firstChild.innerHTML="";_b.forEach(_71,function(obj){var _78=this.gridbodyFillCell(_72,obj,_74);if(_78!=null){_76.push(_78);}else{_7.error(this.id+".gridBodyFillRow: received no content");}if(/^(enum)?icon$/i.test(_72.render)){_77.push(obj.getEnumCaption(_74));}},this);_75.innerHTML=_76.join(_73);if(_75.childNodes.length===0){_75.innerHTML="&nbsp;";}if(_77.length!==0){td.setAttribute("title",_77.join(";"));}else{this.setNodeTitle(td);}},_gridbodyFillRow:function(_79,_7a,_7b){_b.forEach(_7a,function(td,i){var _7c=[],_7d=_7b[i],_7e=false,_7f=_7d.attrs;if(_7f.length===1){_7c.push(_79);}else{var _80=_79,_81;for(var j=0;j<_7f.length-1;j+=2){var _82=_7f[j],_83=_7f[j+1];_81=_80.getChildren(_82);if(_81.length>0){if(j>0&&!_81[0].isA(_83)){_7.error(this.id+".gridBodyFillRow: entity and reference do not match");_81=[];break;}_80=_81[0];}else{if(_7f.length===3){_7e=!!_79.get2(_82);break;}else{break;}}}[].push.apply(_7c,_81);}if(!_7e){this._renderObjectsToCell(_7c,td,_7d,", ");}else{if(_79.isReference(_7f[0])){var _84=this;window.mx.data.get({guids:_79.getReferences(_7f[0]),callback:function(_85){_84._renderObjectsToCell(_85,td,_7d,_7f.length===3?_7f[2]:_7f[3],";");},error:window.mx.onError},this);}else{_7.error(this.id+".gridBodyFillRow: attribute '"+_7f[0]+"' is not a reference(set)");}}},this);},_insertNewFirstOrLast:function(_86,_87,_88){var _89=function(_8a){window.mx.data.create({entity:_86,context:this.mxcontext,persistent:_87.persistent,callback:function(obj){if(!_88){this._dataSource.insertMxObjectAtStart(obj);}else{this._dataSource.insertMxObjectAtEnd(obj);}_8a();},error:window.mx.onError},this);};this.triggerOnSync();this.sequence([_89,"actDeferSyncAction",function(){this.refreshGrid();var row=_88?this._dataSource.getObjects().length-1:0;this.eventSelectRow({row:row});}]);},_getEntity:function(_8b){return _6.firstKey(_8b);},_getCurrentGuid:function(){return this.selection[this.selection.length-1];},_getNodeFromEvent:function(e){return _4.getAncestorNode(e.target,"TR");},_getActionFromEvent:function(e){var _8c=this._gridConfig.gridActionBindings(),_8d=_8c["on"+e.type];return this._gridConfig.getActionsByKey(_8d);},_getObjectFromNode:function(_8e){return this._mxObjects[this.domData(_8e,"gridrow")];},_addFocusBoxForTable:function(){var box=this.addFocusBox(this.contentNode);box.pressed({DOWN_ARROW:box.FOCUS_NEXT,UP_ARROW:box.FOCUS_PREV,SPACE:function(e){this.eventItemClicked(e,e.target);},ENTER:function(e,_8f){if(_8f){this.eventActionBindingHandler(_8f,"dblclick");}},LEFT_ARROW:function(){if(!this._dataSource.atBeginning()){this._dataSource.previous(_c.hitch(this,function(){this.refreshGrid();_3.restore();}));}},RIGHT_ARROW:function(){if(!this._dataSource.atEnd()){this._dataSource.next(_c.hitch(this,function(){this.refreshGrid();_3.restore();}));}}},this);}});return _f;});