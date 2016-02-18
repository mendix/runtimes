/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ListView",["mxui/widget/Button","mxui/widget/_WidgetBase","mxui/mixin/_Stateful","mxui/mixin/_ContainingSelection","mxui/dom","mendix/lib/MxContext","mendix/lang","webcore/dataSourceFactory","dojo/dom-class","dojo/dom-construct","dojo/aspect","dojo/_base/array","dojo/_base/declare","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var $=_5.create;var _f=_d(_2,{declaredClass:"mxui.widget.ListViewItem",datasource:null,listview:null,template:null,action:null,selectable:"",name:"",_selected:false,_checknode:null,buildRendering:function(){var _10=this.domNode=$("li",{"class":this.name+" mx-listview-item"}),_11=this.selectable;if(_11){var _12=$("#");if(_11!="singleandmaintain"){_12.appendChild($("div",{"class":"mx-listview-selection"},this._checknode=_11=="multi"?$("input",{type:"checkbox"}):$("input",{type:"radio"})));}_12.appendChild($("div",{"class":"mx-listview-content"},this.template||""));_10.appendChild(_12);}else{if(this.template){_10.appendChild(this.template);}}this.connect(this.domNode,"click","onClick");},startup:function(){this.parseContent(this.domNode,{schema:""});},select:function(){_9.add(this.domNode,"selected");if(this._checknode){this._checknode.checked=true;}this._selected=true;},deselect:function(){_9.remove(this.domNode,"selected");if(this._checknode){this._checknode.checked=false;}this._selected=false;},getGuid:function(){return this.mxcontext.getTrackId();},onClick:function(_13){if(this.selectable){if(this._selected){this.listview._deselectItem(this);}else{this.listview._selectItem(this);}}else{if(this.action){_13.stopPropagation();var _14=this,_15=this.action,_16=new _6();var run=function(){window.mx.ui.execute(_15,{context:_16});_14.listview._shareSelection(_14.listview._entity);};_16.mixin(this.mxcontext);_16.setTrackObject(null);if(_15.microflow&&_15.microflow.validate){this.mxform.validate(run);}else{run();}}}}});var _17=_d([_2,_3,_4],{declaredClass:"mxui.widget.ListView",datasource:null,dataSourceMixin:null,page:5,search:null,action:null,sort:null,selectable:"",templateMap:null,_entity:"",_itemIndex:0,_itemList:null,_loadButton:null,_clearButton:null,_searchNode:null,_listNode:null,_emptyNode:null,_loadNode:null,_datasource:null,_lastRenderId:0,_preserveSelection:false,constructor:function(_18){if(_18.selection){this._preserveSelection=true;}},postMixInProperties:function(){if(this.listViewSelectionMode){this.selectable=this.listViewSelectionMode;}},buildRendering:function(){this._loadButton=new _1({caption:this.translate("load_more"),iconClass:"glyphicon-repeat",onClick:_e.hitch(this,"_loadMore"),"class":"mx-listview-loadMore"});this.domNode=$("div",{"class":"mx-listview"},this._listNode=$("ul",{"class":"mx-list mx-list-striped mx-listview-list"}),this._loadButton.domNode);if(this.selectable!="singleandmaintain"){_9.add(this.domNode,"mx-listview-selectable");}if(this.action){_9.add(this.domNode,"mx-listview-clickable");}this._emptyNode=$("li",{"class":"mx-listview-empty"},$("label",this.translate("no_items")));this._loadNode=$("li",{"class":"mx-listview-loading"},$("img",{src:require.toUrl("mxui/ui/widget/images/loading.gif")}));if(this.search){this._clearButton=new _1({iconClass:"glyphicon-refresh",onClick:_e.hitch(this,"_clearSearchNode"),"class":"mx-listview-clear-button"});_a.place($("div",{"class":"mx-listview-searchbar clearfix"},this._clearButton.domNode,$("div",{"class":"mx-listview-search-input"},this._searchNode=$("input",{type:"text",placeholder:this.translate("search"),"class":"form-control",value:this.getState("searchValue","")}))),this.domNode,"first");this.connect(this._searchNode,"keyup","_searchKeyDown");}},postCreate:function(){this._createSource();this._itemList=[];this.templateMap=this.templateMap||[];this.selection=this.getState("selection",this.selection);},_onLoad:function(_19){if(this.selectable){if(!this._preserveSelection){var _1a=_c.map(this._datasource.getObjects(),function(obj){return obj.getGuid();});this.selection=_c.filter(this.selection,function(_1b){return _c.indexOf(_1a,_1b)!=-1;});}this._ensureSelection();this._shareSelection(this._entity);}if(_19){_19();}},update:function(obj,_1c){this._registerSubscriptions();_5.orphan(this._emptyNode);this._loadData(_1c);},_registerSubscriptions:function(){this.unsubscribeAll();this.subscribe({entity:this._entity,callback:function(){this.update();}});var _1d=this.mxcontext.getTrackId();if(_1d){this.subscribe({guid:_1d,callback:function(){this.update();}});}},storeState:function(_1e){if(this._searchNode){_1e("searchValue",this._searchNode.value);}_1e("datasourceOffset",this._datasource.getOffset());_1e("selection",this.selection);},uninitialize:function(){this._clearData();this._datasource.destroy();},_createSource:function(){this._datasource=_8.create(_e.mixin({sort:this.sort,context:this.mxcontext,page:this.page},this.datasource,this.dataSourceMixin));this._entity="entity" in this.datasource?this.datasource.entity:this.datasource.path.split("/").pop();if(this.search){this._datasource.setConstraints(this._getSearchConstraint());}var _1f=this.getState("datasourceOffset",0);if(_1f){this._datasource.setPageSize(_1f+this.page);this._datasource.setOffset(0);var _20=this,_21=_b.after(this,"_onLoad",function(){_20._datasource.setPageSize(_20.page);_20._datasource.setOffset(_1f);_21.remove();});}},_clearData:function(){while(this._itemList.length){var _22=this._itemList.pop();if(_22.domNode){_22.destroy();}}},_showLoadingIcon:function(){this._listNode.appendChild(this._loadNode);},_hideLoadingIcon:function(){_5.orphan(this._loadNode);},_showLoadMoreButton:function(){this.domNode.appendChild(this._loadButton.domNode);},_hideLoadMoreButton:function(){_5.orphan(this._loadButton.domNode);},_updateLoadMoreButton:function(){if(!this._datasource.atEnd()){this._showLoadMoreButton();}else{this._hideLoadMoreButton();}},_searchKeyDown:function(){var _23=this,_24=this._datasource;this._clearButton.set("iconClass",this._searchNode.value?"glyphicon-remove":"glyphicon-refresh");clearTimeout(this._searchTimeout);this._searchTimeout=setTimeout(function(){_23._clearData();_23._showLoadingIcon();_23._hideLoadMoreButton();_24.setConstraints(_23._getSearchConstraint());_23.update();},500);},_clearSearchNode:function(){clearTimeout(this._searchTimeout);this._clearButton.set("iconClass","glyphicon-refresh");this._searchNode.value="";this._datasource.setConstraints("");this.update();},_selectItem:function(_25){var _26=_25.getGuid();if(/^(single|singleandmaintain)$/.test(this.selectable)){var _27=this.selection[0],_28=_7.find(this._itemList,function(_29){return _29.getGuid()==_27;});if(_28){_28.deselect();}this.selection=[_26];}else{this._addToSelection(_26);}this._shareSelection(this._entity);_25.select();},_deselectItem:function(_2a){if(this.selectable!=="singleandmaintain"){this._removeFromSelection(_2a.getGuid());this._shareSelection(this._entity);_2a.deselect();}},_getSearchConstraint:function(){var _2b=this._searchNode.value,_2c=[],_2d=this.search.attributes,_2e=this.search.method;if(_2b){for(var i=0,_2f;_2f=_2d[i];++i){_2c.push(_2e+"("+_2f+",'"+_2b+"')");}return "["+_2c.join(" or ")+"]";}return "";},_loadData:function(_30){this._datasource.first();this.sequence(["_sourceReload","_onLoad","_renderData"],function(){this._updateLoadMoreButton();if(_30){_30();}});},_loadMore:function(){this._showLoadingIcon();this._hideLoadMoreButton();this.sequence(["_sourceNext","_renderData"],function(){this._updateLoadMoreButton();});},_sourceReload:function(_31){this._datasource.reload(_31);},_sourceNext:function(_32){this._datasource.next(_32);},_renderData:function(_33){var _34=this._datasource.getObjects(),_35=this._datasource.getOffset()===0?0:this._itemIndex,_36=this._createListItems(_34,_35),_37=$("div",{"class":"mx-offscreen"}),_38=this._lastRenderId=_7.getUniqueId();this.domNode.appendChild(_37);_c.forEach(_36,function(_39){_37.appendChild(_39.domNode);_39.startup();});this._loadListItems(_36,_34,_e.hitch(this,function(){_5.orphan(_37);if(_38!=this._lastRenderId){_c.forEach(_36,function(_3a){_3a.destroy();});if(_33){_33();}return;}this._hideLoadingIcon();if(this._datasource.getOffset()===0){this._clearData();}this._itemList=this._itemList.concat(_36);this._itemIndex=this._itemList.length;_c.forEach(_36,function(_3b){this._listNode.appendChild(_3b.domNode);},this);if(this._itemList.length===0){this._listNode.appendChild(this._emptyNode);}if(_33){_33();}}));},_createListItems:function(_3c,_3d){return _c.map(_3c,function(obj){var _3e=this.templateMap[obj.getEntity()];if(!_3e){_c.some(obj.getSuperEntities(),function(_3f){return _3e=this.templateMap[_3f];},this);}var _40=new _f({uniqueid:this.uniqueid+"_obj"+obj.getGuid(),listview:this,name:"mx-name-index-"+_3d++,mxform:this.mxform,template:this.getTemplate(_3e),action:this.action,selectable:this.selectable});if(this.selectable&&this._isSelected(obj.getGuid())){_40.select();}return _40;},this);},_loadListItems:function(_41,_42,_43){this.collect(_c.map(_41,function(_44,i){return function(cb){var _45=new _6({mxcontext:this.mxcontext});_45.setObject(_42[i]);_44.applyContext(_45,cb);};}),_43);},_ensureSelection:function(){var _46=this._datasource.getObjects();if(this.selectable==="singleandmaintain"&&!this._hasSelection()&&_46.length>0){this._addToSelection(_46[0].getGuid());}}});return _17;});