
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/dom",["dojo/sniff","dojo/_base/lang","dojo/_base/kernel","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","mendix/logger"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){var _b=0,_c=document.createElement("p");var _d=function(_e){_e=_e||{};var _f=function(id,_10){if(!id){id=_b++;_10.setAttribute("data-id",id);}return id;};return function(_11,key,_12){var id=typeof _11==="string"?_11:_11.getAttribute("data-id"),map=_e[id];switch(arguments.length){case 1:return map;case 2:if(key===null){delete _e[id];return;}else{if(typeof key=="object"){if(!map){return _e[_f(id,_11)]=key;}else{return _2.mixin(map,key);}}else{return map&&map[key];}}break;case 3:if(_12===null){if(map){delete map[key];}for(var i in map){return;}delete _e[id];return;}else{if(!map){map=_e[_f(id,_11)]={};}return map[key]=_12;}}};};var dom={minContainerHeight:100,nodeTypes:{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},walkTree:function(_13,_14){if(_13&&_13.hasChildNodes){for(var i=0;i<_13.childNodes.length;i++){dom.walkTree(_13.childNodes[i],_14);}}_14(_13);},walkNode:function(_15,_16,_17){var _18=[0],_19;var _1a=function(_1b){try{_19=_1b?_16.call(_17,_1b,_18.slice())!==false:false;}catch(e){_a.error("mxui.dom.walkNode: Unable to execute action on node: "+e.message);_19=false;}if(_19&&_1b.hasChildNodes){var i=_18.push(0)-1;var _1c=null,_1d=_1b.firstChild;while(_1d){_1d=(_1c=_1d).nextSibling;_1a(_1c);_18[i]++;}_18.pop();}};_1a(_15);},nextNode:function(_1e,_1f){if(!_1e||!_1f){return true;}var cl=_1f.length,sl=_1e.length,_20=_1f.length-1;return (sl>cl)||(cl==sl&&_1f[_20]>_1e[_20]);},getAncestorNode:function(_21,_22,_23){return _21&&((_21.nodeName==_22)?_21:((--_23==0)?false:arguments.callee(_21.parentNode,_22,_23)));},getFirstChild:function(_24,_25){_3.deprecated("mxui.dom.getFirstChild","Use dojo.query instead","5.0");if(typeof _25=="string"){_25=[_25.toLowerCase()];}var _26=false;var _27=function(_28){for(var i=0;i<_25.length;i++){if(_28.nodeName.toLowerCase()==_25[i]){if(_26==false){_26=_28;return false;}}}return true;};function _29(_2a,_2b){if(_2a&&_2b(_2a)&&_2a.hasChildNodes){for(var i=0;i<_2a.childNodes.length;i++){_29(_2a.childNodes[i],_2b);}}};_29(_24,_27);return _26;},escapeHTMLQuotes:function(str){return str.replace(/\'/g,"&#39;").replace(/\"/g,"&#34;");},convertNlToBr:function(str){return str.replace(/\n/g,"<br />");},setSelectOptions:function(_2c,_2d,_2e){var $=dom.create;if(!_2c){return;}_2d=_2d||{};dom.empty(_2c);_2c.appendChild($("option",{value:""},""));for(var key in _2d){var _2f=$("option",{value:key},_2d[key]);_2c.appendChild(_2f);if(key==_2e){_2f.selected=true;}}},getSelectedValue:function(_30){if(_30.nodeName.toLowerCase()=="select"){return (_30.selectedIndex!=-1)?_30.options[_30.selectedIndex].value:null;}else{return null;}},getSelectedText:function(_31){return _31.options[_31.selectedIndex].text;},selectOptionByValue:function(_32,_33){for(var i=0;i<_32.length;++i){if(_32.options[i].value==_33){_32.options[i].selected=true;}}},selectOptionByText:function(_34,_35){for(var i=0;i<_34.length;++i){if(_34.options[i].text==_35){_34.options[i].selected=true;}}},enableNode:function(_36){_36.removeAttribute("readonly");_36.removeAttribute("disabled");},disableNode:function(_37){_37.setAttribute("disabled","disabled");_37.setAttribute("readonly","readonly");},disableSelection:function(e){if(!_1("ie")){e.style.MozUserSelect="none";}else{e.unselectable="on";}return true;},clearSelection:function(){var w=window,s=document.selection;if(s){try{s.empty&&s.empty();}catch(e){}}else{s=w.getSelection&&w.getSelection();s&&s.removeAllRanges&&s.removeAllRanges();}},selectTextRange:function(_38,_39,_3a){if(_38.createTextRange){var _3b=_38.createTextRange();_3b.collapse(true);_3b.moveEnd("character",_3a);_3b.moveStart("character",_39);_3b.select();}else{if(_38.setSelectionRange){_38.setSelectionRange(_39,_3a);}}},getCursorPosition:function(_3c){if(document.selection){var _3d=Math.abs(document.selection.createRange().moveStart("character",-1000000));document.selection.createRange().moveEnd("character",-1000000);return _3d;}else{if(_3c.setSelectionRange){return _3c.selectionStart;}}},getSelection:function(_3e){if(document.selection){var _3f=Math.abs(document.selection.createRange().moveStart("character",-1000000));var end=Math.abs(document.selection.createRange().moveEnd("character",-1000000));return {start:_3f,end:end};}else{if(_3e.setSelectionRange){return {start:_3e.selectionStart,end:_3e.selectionEnd};}}},insertAtCaret:function(_40,_41){var _42=this.getSelection(_40),_43=_42.start+_41.length,_44=_40.value;_40.value=_44.substring(0,_42.start)+_41+_44.substring(_42.end,_44.length);this.selectTextRange(_40,_43,_43);},liveConnect:function(_45,evt,_46,r,_47){if(arguments.length==3){r=_46;_46=null;}var _48={},_49=[];for(var i in r){var _4a=i.split(".");var tag=_4a[0];var _4b=_4a[1];var _4c=r[i];if((typeof _4c=="string"&&_46[_4c])||typeof _4c=="function"){var _4d={fnc:_4c};if(tag){_48[String(tag).toUpperCase()]=_4d;}else{if(_4b){_49.push(_4d);}}if(_4b){_4d.clazz=_4b;}}}var _4e=function(_4f){for(var i=0,_4c;_4c=_49[i];i++){if(_6.contains(_4f,_4c.clazz)){return _4c;}}return null;};var run=function(fnc,e){if(typeof (fnc)=="function"){fnc(e);}else{_46&&_46[fnc](e);}};return _4.connect(_45,evt,function(e){var _50=e.target;var _51=_45;var e2={target:e.target};for(var i in e){var val=e[i];if(val==null||!(val instanceof Object)){e2[i]=val;}}while(_50!=_51&&_50!=null){var _52=_48[_50.nodeName];var _53=_4e(_50);if(_52){var _54=_52.clazz;_52=((!_54)||(_6.contains(_50,_54)))?_52:null;}e2.currentTarget=_50;_52&&run(_52.fnc,e2);_53&&run(_53.fnc,e2);if(_47&&(_52||_53)){break;}_50=_50.parentNode;}});},liveDisconnect:function(_55){_4.disconnect(_55);},create:function(tag,_56,_57){var _58,_59=[].slice.call(arguments,1);_56=_56||{};if(_56.nodeName||typeof _56=="string"){_57=_59;_56={};}else{_57=_59.slice(1);}if(tag=="#"){_58=document.createDocumentFragment();}else{_58=document.createElement(tag);for(var _5a in _56){var _5b=_56[_5a];if(_5a=="style"&&typeof _5b!="string"){var _5c=_58.style;for(var i in _5b){_5c[i]=_5b[i];}}else{_58.setAttribute(_5a,_5b);}}}_5.forEach(_57,function(_5d){if(typeof _5d=="string"){_5.forEach(_5d.split("\r\n"),function(_5e,i){if(i>0){_58.appendChild(dom.create("br"));}_58.appendChild(document.createTextNode(_5e));});}else{_58.appendChild(_5d);}});return _58;},synthesizeEvent:function(evt,_5f){var _60=_2.mixin({},evt,_5f);_60.preventDefault=function(){evt.preventDefault();};_60.stopPropagation=function(){evt.stopPropagation();};return _60;},capture:function(_61,evt,_62){var _63=!_61.addEventListener,_64=_61[_63?"attachEvent":"addEventListener"],_65=_61[_63?"detachEvent":"removeEventListener"],_66=_63?"on"+evt:evt;_64.call(_61,_66,_62,true);return {remove:function(){_65.call(_61,_66,_62,true);}};},supports:function(_67){var _68=document.body.style;if(_67 in _68){return _67;}else{var _69=["Webkit","Moz"],_6a=_67.charAt(0).toUpperCase()+_67.slice(1);for(var i=_69.length;i--;){var _6b=_69[i]+_6a;if(_6b in _68){return _6b;}}}},text:function(_6c,str){if(typeof str!=="undefined"){_6c.innerHTML="";_6c.appendChild(document.createTextNode(str));}else{return "textContent" in _6c?_6c.textContent:_6c.innerText;}},html:function(_6d,str){if(typeof str!=="undefined"){_6d.innerHTML=str;}else{return _6d.innerHTML;}},orphan:function(_6e){var p=_6e.parentNode;if(p){p.removeChild(_6e);}},empty:function(_6f){var _70;while(_70=_6f.firstChild){_6f.removeChild(_70);}},toArray:function(_71){return _5.map(_71,function(_72){return _72;});},escapeString:function(str){var _73=str.split(/\r\n|\n/),out=[];for(var i=0;i<_73.length;++i){dom.text(_c,_73[i]);out.push(_c.innerHTML);}return out.join("\n");},unescapeString:function(str){return str.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,"\"").replace(/&amp;/g,"&");},getCss:function(_74,doc,_75){doc=doc||document;var _76=doc.getElementsByTagName("link"),re=new RegExp(mx.appUrl+_74);for(var i=0,_77;_77=_76[i];i++){if(re.test(_77.href)){return _77;}}return null;},addCss:function(_78,doc,_79){doc=doc||document;if(dom.getCss(_78,doc,_79)){return;}var _7a=doc.getElementsByTagName("head")[0],_7b=dom.create("link",{rel:"stylesheet",type:"text/css",media:_79||"screen",href:mx.appUrl+_78});_7a.appendChild(_7b);},removeCss:function(_7c,doc,_7d){var _7e=dom.getCss(_7c,doc,_7d);if(_7e){_7e.parentNode.removeChild(_7e);return true;}return false;},ieFocusable:{"a":true,"body":true,"button":true,"frame":true,"iframe":true,"input":true,"isIndex":true,"object":true,"select":true,"textarea":true},getTabIndex:function(_7f){if(!_7f||!_7f.getAttribute){return null;}var _80;if(_1("ie")||_1("trident")){_80=_7f.tabIndex;if(_80===0){var _81=_7f.nodeName.toLowerCase(),_82=_7f.attributes.tabIndex,_83=_82&&_82.specified===true;return _83||dom.ieFocusable[_81]?"0":null;}else{return ""+_80;}}else{var _84=_7f.getAttribute("tabindex");_80=String(_7f.tabIndex);if(_84!=null||_80>=0){if(!_1("ff")){return (_84==="")?null:_80;}else{return _80;}}else{return null;}}},getFocusIndex:function(_85){var _86=dom.getTabIndex(_85);return _86>=0?_86:null;},coords:function(_87){return _2.mixin(_7.position(_87),_7.getMarginBox(_87));},data:_d(),getScopedData:_d,moveIntoView:function(_88,_89){_89=_89||0;var pos=_7.position(_88),_8a=_9.getBox(),_8b=_88.style,_8c=pos.y+pos.h+_89,_8d=pos.x+pos.w+_89;if(pos.y<_89||pos.h+_89*2>_8a.h){_8b.top=_89+"px";}else{if(_8c>_8a.h){_8b.top=pos.y-(_8c-_8a.h)+"px";}}if(pos.x<_89||pos.w+_89*2>_8a.w){_8b.left=_89+"px";}else{if(_8d>_8a.w){_8b.left=pos.x-(_8d-_8a.w)+"px";}}},getNodeExtents:function(_8e){var cs=_8.getComputedStyle(_8e),me=_7.getMarginExtents(_8e,cs),be=_7.getBorderExtents(_8e,cs),pe=_7.getPadExtents(_8e,cs);return {w:me.w+be.w+pe.w,h:me.h+be.h+pe.h};}};return dom;});