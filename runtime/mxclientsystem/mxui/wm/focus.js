
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/wm/focus",["dojo","dijit","dojox","dojo/require!dijit/_base/focus,mxui/dom"],function(_1,_2,_3){_1.provide("mxui.wm.focus");_1.require("dijit._base.focus");_1.require("mxui.dom");mxui.wm.focus.Stack={create:function(){var _4=[];_4.find=this.find;_4.each=this.each;_4.dump=this.dump;_4.box=null;_4.last=null;_4.first=null;_4.f_first=null;_4.f_last=null;return _4;},buildStack:function(_5,_6){var _7=null;var _8=null;var _9=null;var _a=null;var _b=null;var _c=mxui.wm.focus;var _d=mxui.dom;var _e=mxui.dom.getFocusIndex;var _f=_c.focusable;var el=mxui.dom.nodeTypes.ELEMENT_NODE;var _10=this.create();_10.box=_6=(_6||_c.byNode(_5));var _11=_5==_6.domNode;var ni=_11?"0":mxui.dom.getTabIndex(_5);var _12=_6.domNode;var _13=null;var _14=null;var _15=null;var _16=null;if(!_11&&!_f(_5)){_13=_5;while((_13=_13.parentNode)!=null){var vi=_f(_13);if(vi||_13==_12){_14=_15;break;}_15=_13;}}_d.walkNode(_12,function(_17,_18){if(_17==_12){return true;}var one=(_17==_5);if(!one){var vi=_f(_17);if(!vi){if(_14){if(_16){if(_d.nextNode(_16,_18)){_16=false;}else{return true;}}else{if(_17==_14){_16=_18;return true;}}}return vi===0;}}var _19=this.isBox(_17);var ci=_e(_17);if(!ci&&_19){if(mxui.dom.getTabIndex(_17)<0){return false;}ci=_17.getAttribute("focusIndex")||"0";}if(one||ci){var _1a={node:_17,stack:_10,next:null,prev:null};if(ni==-1){if(_9){if(_a==null||(_a>ci)){_a=ci;_b=_1a;}}else{if(one){_9=true;}}}if(ci){if(!_7){_7=_1a;}_8=_1a;var _1b=_10[ci];if(!_1b){_1b=_10[ci]=[];}_1b.push(_1a);}else{_10._curr=_1a;}return false;}},_c);if(ni==-1){var _1c=_10._curr;if(_1c){_1c.prev=_1c.next=_b;}}_10.each(function(_1d,_1e,_1f){if(!this.first){this.first=_1e;}var _20=_1e.prev=this.last;if(_20){_20.next=_1e;}this.last=_1e;if(_5==_1d){this._curr=_1e;}},null,_10);_10.f_first=_7;_10.f_last=_8;return _10;},each:function(fnc,_21,_22){if(_21=="prev"){var i=this.length;while(0<=--i){var _23=this[i];var l=_23&&_23.length;if(l){for(var c=l-1;0<=c;c--){var _24=fnc.call(_22,_23[c].node,_23[c],i);if(_24!=null){return _24;}}}}}else{var i=-1;while(++i<this.length){var _23=this[i];var l=_23&&_23.length;if(l){for(var c=0;c<l;c++){var _24=fnc.call(_22,_23[c].node,_23[c],i);if(_24!=null){return _24;}}}}}return null;},find:function(_25){if(this._curr&&this._curr.node==_25){return this._curr;}var ni=mxui.dom.getTabIndex(_25)||"0";var _26=null;var _27=null;var _28=null;if(ni!=-1){var i=ni;do{var _29=this[i];if(_29){for(var c=0,l=_29.length;c<l;c++){var n=_29[c];if(n.node==_25){return n;}}}}while(++i<this.length);}var _2a=null;var _2b=this.box.domNode;var _2c=_25;var el=mxui.dom.nodeTypes.ELEMENT_NODE;var _2d=mxui.dom.getFocusIndex;var vi=mxui.wm.focus.focusable;while((_2c=_2c.parentNode)!=null&&_2c!=_2b){if(!vi(_2c)){continue;}if(_2d(_2c)){_2a=_2c;}}return _2a?this.find(_2a):null;},dump:function(str){this.each(function(_2e,_2f){});}};mxui.wm.focus._addon={getFocusStack:function(){var gfd=mxui.wm.focus;var _30=mxui.dom.getFocusIndex;var _31=gfd.focusable;var _32=gfd.Stack.create();_32.box=this;var _33=null;var _34=null;var _35=false;var _36=this.nodes;for(var i=0,l=_36.length;i<l;i++){var _37=_36[i].node;var tab=_30(_37);var vi=_31(_37);if(tab){if(vi){_33=_37;break;}else{_35=true;_37.tabIndex=-1;}}else{if(vi){if(_35){_33=_37;_33.tabIndex=1;break;}_34=_37;}}}if(!_33){_33=_34;_33&&(_33.tabIndex=1);}if(_33){_32.push(_33);_32.last=_32.first=_32._curr={prev:null,next:null,node:_33,stack:_32};}return _32;},_onmousedown:function(e){var _38=e.target;if(_38.nodeName.toLowerCase()=="option"){_38=_38.parentNode;}var _39=_38;var s=null;var _3a=this.domNode;var _3b=mxui.dom.data;do{s=_3b(_39,"box-node");if(s&&s.box==this){break;}}while((_39!=null)&&(_39!=_3a)&&(_39=_39.parentNode)!=null);if(s){var _3c=mxui.dom.getTabIndex(_38);this._focus(s.node,_3c!=null);}},_focus:function(_3d,_3e){var gfd=mxui.wm.focus;var _3f=this.getFocusStack();var _40=_3f._curr;if(_40){_40.node.tabIndex=-1;}_3d.tabIndex=1;_3d=gfd._tryNode({node:_3d,stack:_3f},"next");if(!_3e){gfd.put(_3d);}},next:function(_41,dir){var _42=mxui.dom.data(_41,"box-node");if(_42){var _43=this._getNextNode(_42,dir);if(_43){var _44=_43.node;_44.tabIndex=0;_41.tabIndex=-1;return _44;}else{}}else{}return null;},_getNextNode:function(_45,dir){if(!_45){return null;}var _46=_45;var _47=mxui.wm.focus.focusable;while((_46=_46[dir])!=null){var _48=_46.node;if(_47(_48)){return _46;}}return null;}};_1.declare("mxui.wm.focus.Box",null,{id:null,domNode:null,nested:false,FOCUS_NEXT:"FOCUS_NEXT",FOCUS_PREV:"FOCUS_PREV",constructor:function(_49){this.id=mxui.wm.focus.getUniqueId(this);this.domNode=_49;this.nodes=[];this.keys={};this.handlers={};_49.setAttribute("focus-id",this.id);},add:function(_4a){var s=mxui.dom.data(_4a,"box-node",{box:this,next:null,prev:null,node:_4a});var _4b=this.nodes.length;if(_4b!=0){var _4c=this.nodes[_4b-1];s.prev=_4c;_4c.next=s;_4a.tabIndex=-1;}else{_4a.tabIndex=0;}if(!this.converted){this.converted=true;_1.mixin(this,mxui.wm.focus._addon);this._boxhandler=_1.connect(this.domNode,"onmousedown",this,"_onmousedown");}this.nodes.push(s);},pressed:function(_4d,_4e){var _4f=this.keys;var $=_1.keys;var hs=this.handlers;for(var key in _4d){var _50=$[key]||key;var fnc=_4d[key];if(fnc==this.FOCUS_NEXT){_4f[_50]="next";}else{if(fnc==this.FOCUS_PREV){_4f[_50]="prev";}else{if(typeof fnc=="string"){fnc=_4e[type];}if(typeof fnc!="function"){logger.error(this.id+".pressed: Passed stuff is not a function : "+key);}else{if(hs[_50]){}hs[_50]=[_4e,fnc];}}}}},destroy:function(){if(!this._destroyed){var _51=this.nodes;for(var i=0,l=_51.length;i<l;i++){var _52=_51[i].node;mxui.dom.data(_52,"box-node",null);}this.nodes=null;this.keys=null;this.handlers=null;this._boxhandler&&_1.disconnect(this._boxhandler);this._destroyed=true;}},getHandler:function(e){var _53=typeof (e.charOrCode)!="undefined"?e.charOrCode:e.keyCode;return this.handlers[(_53==" ")?_1.keys.SPACE:_53];},getFocusDirection:function(e){var nav=this.domNode.getAttribute("focuskeys");if(nav){var up,lr;if(nav=="up-down"){if(e.keyCode==_1.keys.UP_ARROW){up="prev";}else{if(e.keyCode==_1.keys.DOWN_ARROW){up="next";}}}if(nav=="left-right"){if(e.keyCode==_1.keys.LEFT_ARROW){lr="prev";}else{if(e.keyCode==_1.keys.RIGHT_ARROW){lr="next";}}}return up||lr;}else{var _54=typeof (e.charOrCode)!="undefined"?e.charOrCode:e.keyCode;_54=(_54==" ")?_1.keys.SPACE:_54;var key=this.keys[_54];if(key){return key;}}return null;},onFocusPress:function(e,_55){var gfd=mxui.wm.focus;var dir=this.getFocusDirection(e);if(e.altKey||e.shiftKey||e.ctrlKey){return true;}if(dir){var _56=mxui.dom.data(_55,"box-node");if(_56){var _57=this.next(_55,dir);if(_57){gfd.put(_57);return false;}_1.stopEvent(e);}else{}}else{var h=this.getHandler(e);if(h){try{return h[1].call(h[0],e,_55);}catch(error){logger.error(this.id+".onFocusPress : Error when executing handler : "+error.message);return true;}}}return true;},next:function(_58,dir){var gfd=mxui.wm.focus;var _59=gfd._getStack(_58,this);var _5a=gfd._doNext(_59.find(_58),dir);return _5a;}});_1.mixin(mxui.wm.focus,{name:"mxui.wm.focus",state:{skipCyclic:false,skipReadonly:true},registry:{},boxCounter:{},start:function(){if(this._started){return;}this._started=true;_1.connect(window.document,"onkeypress",this,"onkeypress");_1.connect(window.document,"onkeydown",this,"keydownpatch");_1.connect(_2,"_onFocusNode",this,"onfocus");_1.connect(_2,"_onBlurNode",this,"_onBlurNode");_1.connect(document,"onmousedown",this,"blur");var _5b=this.state;this.timer_clear=function(){_5b._timer=null;_5b._shift=false;};},skipCyclic:function(_5c){var _5d=this.state;_5d.skipCyclic=!!_5c;},skipReadonly:function(_5e){var _5f=this.state;_5f.skipReadonly=!!_5e;},get:function(){var f=_2.getFocus();return f.node;},watch:function(_60){var _61=function(evt){};var _62=function(evt){};var _63=function(){if(_1.isIE){_60.detachEvent("onactivate",_61);_60.detachEvent("ondeactivate",_62);}else{_60.removeEventListener("focus",_61,true);_60.removeEventListener("blur",_62,true);}};if(_1.isIE){_60.attachEvent("onactivate",_61);_60.attachEvent("ondeactivate",_62);}else{_60.addEventListener("focus",_61,true);_60.addEventListener("blur",_62,true);}return _63;},put:function(_64){if(!_64||_64.nodeType!=1){return false;}if(_1.isIE){try{document.selection.empty();}catch(e){}}setTimeout(function(){try{_64.focus();}catch(e){}var _65=_64.nodeName.toLowerCase();if((_65=="input"&&_64.type=="text")||_65=="textarea"){_64.select&&_64.select();}},0);},restore:function(){var _66=_2.getFocus();if(_66.node){var _67=_66.node;var _68=this._getStack(_67);var _69=_68._curr;_67=_69?this._tryNode(_69,"next"):null;if(_67){this.put(_67);}}},first:function(_6a){this.put(this.getFirst(_6a,"next"));},last:function(_6b){this.put(this.getFirst(_6b,"prev"));},next:function(_6c){this.put(this._getNextNode(_6c,false));},prev:function(_6d){this.put(this._getNextNode(_6d,true));},blur:function(e){this.state_clear();this._clickedNode=e.target;},_ontab:function(_6e){var _6f=this.state;var _70=_6f._shift;this.timer_clear();var box=null;if(box){}else{this.state_clear();}},onfocus:function(_71){if(_1.isIE){if(!mxui.dom.getTabIndex(_71)){return;}}if(_71.nodeType!=1){return;}var _72=this.state;_72.active=_71;if(_72._timer){this._ontab(_71);}else{_1.addClass(_71,"mx-focus");}},_onBlurNode:function(_73){_1.removeClass(_73,"mx-focus");},state_clear:function(){var _74=this.state;_74.node=null;_74.box=null;},timer_clear:function(){},next:function(){var _75=this.state;if(_75.active&&_75.active.nodeType==1){var _76=_75.active;var _77=this.byNode(_76);if(_77){var _78=this._getNextNode(_76);if(_78){this.put(_78);}else{}return;}}},keydownpatch:function(e){if(e.keyCode==_1.keys.UP_ARROW||e.keyCode==_1.keys.DOWN_ARROW){var _79=this.state;this.onkeypress(e);_79._patch_inWork=true;setTimeout(function(){_79._patch_inWork=null;},10);}},onkeypress:function(e){var _7a=this.state;if(_7a._patch_inWork){return;}var _7b=false;var _7c=e.shiftKey;var tab=e.keyCode===_1.keys.TAB;var _7d=e.target;if(tab){if(_7d.nodeName.toLowerCase()=="html"){if(this._clickedNode){_7d=this._clickedNode;}else{return;}}var _7e=this._getNextNode(_7d,_7c);if(_7e){this.put(_7e);}else{}_1.stopEvent(e);}else{var _7f=_7d;var box=this.byNode(_7d);if(box){do{var _80=box.domNode;if(box.onFocusPress){if(!box.onFocusPress(e,_7f)){_1.stopEvent(e);break;}}_7f=_80;var nn=_80.parentNode;}while(nn&&(box=this.byNode(nn))!=null);}}},_getStack:function(_81,box){box=(box||this.byNode(_81));if(box.getFocusStack){try{return box.getFocusStack(_81);}catch(e){var _82=this.Stack.create();_82.box=box;return _82;}}return this.Stack.buildStack(_81,box);},getFirst:function(_83,dir,_84){if(this.isBox(_83)){var _84=_84||this._getStack(_83);if(_84.length==0){if(mxui.dom.getFocusIndex(_83)){return _83;}return null;}var _85=_84[dir=="next"?"first":"last"];return _85?this._tryNode(_85,dir):null;}return _83;},_tryNode:function(_86,dir){var _87=_86.node;if(this.isBox(_87)){var _88=this.getFirst(_87,dir);if(_88){return _88;}else{return this._doNext(_86,dir);}}else{return _87;}return null;},_doNext:function(_89,dir){if(!_89){return null;}var _8a=_89[dir];if(!_8a){return null;}return this._tryNode(_8a,dir);},_getNextNode:function(_8b,_8c){var box=null;var _8d=null;var _8e=null;var _8f=null;var dir=!_8c?"next":"prev";if(this.isBox(_8b)){box=this.byNode(_8b.parentNode);}else{box=this.byNode(_8b);}if(!box){return null;}_8e=this._getStack(_8b,box);_8f=this._doNext(_8e.find(_8b),dir);if(!_8f){_8d=_8e.box.domNode;if(this.cyclic(_8d)){return this.getFirst(_8d,dir,_8e);}else{_8f=this._getNextNode(box.domNode,_8c);if(!_8f){}}}return _8f;},skip:function(_90,_91){if(_90&&_90.setAttribute){if(arguments.length==2){_91=!!_91;_90.setAttribute("focusNoSkip",_91);return _91;}var _92=/true/.test(_90.getAttribute("focusNoSkip"));return _92?!_92:_90.readOnly;}return true;},focusable:function(_93){if(!_93||_93.nodeType!=1){return false;}if(_93.disabled){return false;}var f=mxui.wm.focus;if(f.skip(_93)&&f.state.skipReadonly){return false;}var _94=_93.style;if(_94.display=="none"||_94.visibility=="hidden"){return false;}if(_93.offsetWidth==0&&_93.offsetHeight==0){return 0;}return true;},cyclic:function(_95,_96){if(_95&&_95.setAttribute){if(arguments.length==2){var s=/true/.test(_96);_95.setAttribute("focusCycle",s);return s;}return /true/.test(_95.getAttribute("focusCycle"));}return false;},focusIndex:function(_97,_98){if(_97&&_97.getAttribute){if(arguments.length==2){_97.setAttribute("focusIndex",_98);return _98;}return _97.getAttribute("focusIndex");}return null;},addBox:function(_99){var box=new this.Box(_99);this.register(box);return box;},removeBox:function(_9a){var box=this.byNode(_9a);if(box){this.unregister(box);return true;}return false;},isBox:function(_9b){if(_9b&&_9b.getAttribute){var fi=this.focusIndex(_9b);if(_2.byNode(_9b)){return fi!=-2?true:false;}else{if(fi){return true;}}return !!(_9b.getAttribute("focus-id"));}return false;},byNode:function(_9c){var fi,id,w;do{if(_9c&&_9c.getAttribute){fi=this.focusIndex(_9c);if(fi==-2){continue;}w=_2.byNode(_9c);if(w){return w;}id=_9c.getAttribute("focus-id");if(id){return this.byId(id);}if(fi){return {domNode:_9c};}}}while(_9c&&(_9c=_9c.parentNode));return null;},byId:function(_9d){return this.registry[_9d];},getUniqueId:function(_9e){var _9f=_9e.declaredClass.replace(/\./g,"_");var id;var _a0=this.boxCounter;do{id=_9f+"_"+(_9f in _a0?++_a0[_9f]:_a0[_9f]=0);}while(this.byId(id));return id;},register:function(box){var id=box.id;if(this.registry[id]){return false;}else{this.registry[id]=box;return true;}},unregister:function(box){var id=box.id;var _a1=this.boxCounter;if(this.registry[id]){var _a2=box.declaredClass.replace(/\./g,"_");box.domNode.removeAttribute("focus-id");delete this.registry[id];if(_a1[_a2]){_a1[_a2]--;}box.destroy();}}});_1.addOnLoad(mxui.wm.focus,"start");});