/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/LayoutContainer",["mxui/widget/_WidgetBase","mxui/mixin/_Stateful","mxui/dom","dojo/aspect","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","dojo/_base/declare","dojo/_base/fx","dojo/_base/lang"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){var _c=_9([_1,_2],{declaredClass:"mxui.widget.LayoutContainer",design:"",regions:null,_isFixed:false,_regionMap:null,_resizeNodes:null,_toggleRegion:"",_toggleState:false,_overlayNode:null,startup:function(){this._regionMap={};this._resizeNodes=[];this._isFixed=_5.contains(this.domNode,"mx-layoutcontainer-fixed");var _d=this.domNode.children,_e;for(var i=0;_e=_d[i];i++){var _f=this.regions[i],_10=_e.children[0];var _11=this._regionMap[_f.position]={node:_e,width:_e.offsetWidth,position:_f.position};if(_f.collapsible){this._toggleRegion=_11;var _12=_e.style.width;_11.cssWidth=parseInt(_12,10);_11.cssUnits=_12.indexOf("%")!=-1?"%":"px";_11.node.setAttribute("focusIndex",-1);}if(_10&&_10.style.height){_10.style.overflow="auto";}if(this.design!=="vertical"||_f.position==="middle"){this._resizeNodes.push(_e.children[0]);}}if(this._toggleRegion){_7.set(this.domNode.parentNode,"overflowX","hidden");this.listen("toggleSidebar",this.toggleSidebar);this.own(_4.after(this.mxform,"onNavigation",_b.hitch(this,"hideSidebar")));this._overlayNode=_3.create("div",{style:{position:"absolute"}});this.connect(this._overlayNode,"click","hideSidebar");if(this.getState("sidebarVisible",false)){this.showSidebar({immediate:true});}}},resizeSidebar:function(){var _13=this._toggleRegion;if(!_13){return;}_7.set(this.domNode,"width","");_7.set(_13.node,"display","none");var _14=this.domNode.offsetWidth,_15=this._toggleState;if(_13.cssUnits==="%"){_13.width=_13.cssWidth*_14/100;}var _16={position:"relative",width:_14+_13.width+"px"};if(_13.position==="left"&&!_15||_13.position==="right"&&_15){_16[window.mx.ui.isRtl()?"right":"left"]=-_13.width+"px";}_7.set(this.domNode,_16);_7.set(_13.node,{display:"",width:_13.width+"px"});if(_15){this.positionOverlay();}},resize:function(box){if(!this._resizeNodes){return;}this.resizeSidebar();if(box){var _17=box.h;if(this.design==="vertical"){for(var _18 in this._regionMap){var _19=this._regionMap[_18];if(_18==="top"||_18==="bottom"){_17-=_19.node.offsetHeight;}}}var _1a=_17>=100;for(var j=0,_1b;_1b=this._resizeNodes[j];j++){var _1c=Math.max(0,_17)+"px";if(this._isFixed){_1b.style.height=_1a?_1c:"auto";this.resizeChildren(_1b,!_1a);}else{_1b.style.minHeight=_1a?_1c:"";this.resizeChildren(_1b,true);}}}else{for(var k=0,_1b;_1b=this._resizeNodes[k];k++){_1b.style.height="auto";this.resizeChildren(_1b,true);}}},toggleSidebar:function(){if(this._toggleState){this.hideSidebar();}else{this.showSidebar();}},showSidebar:function(_1d){var _1e=this._toggleRegion;if(!_1e||this._toggleState){return;}this._toggleState=true;var _1f={};_1f[window.mx.ui.isRtl()?"right":"left"]={end:_1e.position==="left"?0:-_1e.width,units:"px"};_a.animateProperty({node:this.domNode,duration:_1d&&_1d.immediate?0:300,properties:_1f}).play();document.body.appendChild(this._overlayNode);this.positionOverlay();},hideSidebar:function(){var _20=this._toggleRegion;if(!_20||!this._toggleState){return;}this._toggleState=false;var _21={};_21[window.mx.ui.isRtl()?"right":"left"]={end:_20.position==="left"?-_20.width:0,units:"px"};_a.animateProperty({node:this.domNode,duration:300,properties:_21}).play();_3.orphan(this._overlayNode);},positionOverlay:function(){var _22=this._toggleRegion,rtl=window.mx.ui.isRtl();_6.setMarginBox(this._overlayNode,{t:_6.position(_22.node,true).y,l:_22.position==="left"?(rtl?0:_22.width):(rtl?_22.width:0),w:Math.max(0,_8.getBox().w-_22.width),h:_22.node.offsetHeight});},storeState:function(_23){_23("sidebarVisible",this._toggleState);}});return _c;});