/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/dom",["mxui/wm/focus","mendix/lang","dojo/sniff","dojo/_base/lang","dojo/_base/kernel","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","mendix/logger"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){var _d=0,_e=document.createElement("p");function _f(url){if(!/^\w+:\/\//.test(url)){url=mx.appUrl+url;}var _10=mx.server.getCacheBust();if(_2.startsWith(url,mx.appUrl)&&!_2.endsWith(url,_10)){url+=(/\?/.test(url)?"&":"?")+_10;}return url;};function _11(_12){_12=_12||{};var _13=function(id,_14){if(!id){id=_d++;_14.setAttribute("data-id",id);}return id;};return function(_15,key,_16){var id=typeof _15==="string"?_15:_15.getAttribute("data-id"),map=_12[id];switch(arguments.length){case 1:return map;case 2:if(key===null){delete _12[id];return;}else{if(typeof key=="object"){if(!map){return _12[_13(id,_15)]=key;}else{return _4.mixin(map,key);}}else{return map&&map[key];}}break;case 3:if(_16===null){if(map){delete map[key];}if(_2.objectIsEmpty(map)){return;}delete _12[id];return;}else{if(!map){map=_12[_13(id,_15)]={};}return map[key]=_16;}}};};var dom={minContainerHeight:100,nodeTypes:{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},walkNode:function(_17,_18,_19){var _1a=[0],_1b;var _1c=function(_1d){try{_1b=_1d?_18.call(_19,_1d,_1a.slice())!==false:false;}catch(e){_c.error("mxui.dom.walkNode: Unable to execute action on node: "+e.message);_1b=false;}if(_1b&&_1d.hasChildNodes){var i=_1a.push(0)-1;var _1e=null,_1f=_1d.firstChild;while(_1f){_1f=(_1e=_1f).nextSibling;_1c(_1e);_1a[i]++;}_1a.pop();}};_1c(_17);},nextNode:function(_20,_21){if(!_20||!_21){return true;}var cl=_21.length,sl=_20.length,_22=_21.length-1;return (sl>cl)||(cl==sl&&_21[_22]>_20[_22]);},getAncestorNode:function(_23,_24,_25){return _23&&((_23.nodeName==_24)?_23:((--_25===0)?false:arguments.callee(_23.parentNode,_24,_25)));},findOverflowParent:function(_26){while(_26=_26.parentNode){if(_26===document.body){break;}var _27=_a.get(_26,"overflow");if(_27==="auto"||_27==="scroll"){return _26;}}return document.documentElement.scrollTop>0?document.documentElement:document.body;},scrollOverflowParentTo:function(_28,to){var _29=dom.findOverflowParent(_28);if(_29){_29.scrollTop=to;}},getElementsByTagNameNoNS:function(doc,_2a){if(doc.getElementsByTagNameNS){return doc.getElementsByTagNameNS("*",_2a);}else{if("selectNodes" in doc){doc.setProperty("SelectionLanguage","XPath");return doc.selectNodes("//*[local-name() = '"+_2a+"']");}else{throw new Error("mxui.dom.getElementsByTagNameNoNS not supported");}}},escapeHTMLQuotes:function(str){return str.replace(/'/g,"&#39;").replace(/\"/g,"&#34;");},convertNlToBr:function(str){return str.replace(/\n/g,"<br />");},setSelectOptions:function(_2b,_2c,_2d){var $=dom.create;if(!_2b){return;}_2c=_2c||{};dom.empty(_2b);_2b.appendChild($("option",{value:""},""));for(var key in _2c){var _2e=$("option",{value:key},_2c[key]);_2b.appendChild(_2e);if(key==_2d){_2e.selected=true;}}},getSelectedValue:function(_2f){if(_2f.nodeName.toLowerCase()=="select"){return (_2f.selectedIndex!=-1)?_2f.options[_2f.selectedIndex].value:null;}else{return null;}},getSelectedText:function(_30){return _30.options[_30.selectedIndex].text;},selectOptionByValue:function(_31,_32){for(var i=0;i<_31.length;++i){if(_31.options[i].value==_32){_31.options[i].selected=true;}}},selectOptionByText:function(_33,_34){for(var i=0;i<_33.length;++i){if(_33.options[i].text==_34){_33.options[i].selected=true;}}},enableNode:function(_35){_35.removeAttribute("readonly");_35.removeAttribute("disabled");},disableNode:function(_36){_36.setAttribute("disabled","disabled");_36.setAttribute("readonly","readonly");},disableSelection:function(e){if(!_3("ie")){e.style.MozUserSelect="none";}else{e.unselectable="on";}return true;},clearSelection:function(){var w=window,s=document.selection;if(s){try{if(s.empty){s.empty();}}catch(e){}}else{s=w.getSelection&&w.getSelection();if(s&&s.removeAllRanges){s.removeAllRanges();}}},selectTextRange:function(_37,_38,_39){if(_37.createTextRange){var _3a=_37.createTextRange();_3a.collapse(true);_3a.moveEnd("character",_39);_3a.moveStart("character",_38);_3a.select();}else{if(_37.setSelectionRange){_37.setSelectionRange(_38,_39);}}},getCursorPosition:function(_3b){if(document.selection){var _3c=Math.abs(document.selection.createRange().moveStart("character",-1000000));document.selection.createRange().moveEnd("character",-1000000);return _3c;}else{if(_3b.setSelectionRange){return _3b.selectionStart;}}},getSelection:function(_3d){if(document.selection){var _3e=Math.abs(document.selection.createRange().moveStart("character",-1000000));var end=Math.abs(document.selection.createRange().moveEnd("character",-1000000));return {start:_3e,end:end};}else{if(_3d.setSelectionRange){return {start:_3d.selectionStart,end:_3d.selectionEnd};}}},insertAtCaret:function(_3f,_40){var _41=this.getSelection(_3f),_42=_41.start+_40.length,_43=_3f.value;_3f.value=_43.substring(0,_41.start)+_40+_43.substring(_41.end,_43.length);this.selectTextRange(_3f,_42,_42);},liveConnect:function(_44,evt,_45,r,_46){if(arguments.length==3){r=_45;_45=null;}var _47={},_48=[];for(var i in r){var _49=i.split(".");var tag=_49[0];var _4a=_49[1];var _4b=r[i];if((typeof _4b=="string"&&_45[_4b])||typeof _4b=="function"){var _4c={fnc:_4b};if(tag){_47[String(tag).toUpperCase()]=_4c;}else{if(_4a){_48.push(_4c);}}if(_4a){_4c.clazz=_4a;}}}var _4d=function(_4e){for(var i=0,_4b;_4b=_48[i];i++){if(_8.contains(_4e,_4b.clazz)){return _4b;}}return null;};var run=function(fnc,e){if(typeof (fnc)=="function"){fnc(e);}else{if(_45&&_45[fnc]){_45[fnc](e);}}};return _6.connect(_44,evt,function(e){var _4f=e.target;var _50=_44;var e2={target:e.target};for(var i in e){var val=e[i];if(val==null||!(val instanceof Object)){e2[i]=val;}}while(_4f!=_50&&_4f!=null){var _51=_47[_4f.nodeName];var _52=_4d(_4f);if(_51){var _53=_51.clazz;_51=((!_53)||(_8.contains(_4f,_53)))?_51:null;}e2.currentTarget=_4f;if(_51){run(_51.fnc,e2);}if(_52){run(_52.fnc,e2);}if(_46&&(_51||_52)){break;}_4f=_4f.parentNode;}});},liveDisconnect:function(_54){_6.disconnect(_54);},create:function(_55,_56,_57){var _58,_59=[].slice.call(arguments,1);_56=_56||{};if(_56.nodeName||typeof _56=="string"){_57=_59;_56={};}else{_57=_59.slice(1);}if(_55=="#"){_58=document.createDocumentFragment();}else{_58=document.createElement(_55);for(var _5a in _56){var _5b=_56[_5a];if(_5a=="style"&&typeof _5b!="string"){var _5c=_58.style;for(var i in _5b){_5c[i]=_5b[i];}}else{_58.setAttribute(_5a,_5b);}}}_7.forEach(_57,function(_5d){if(typeof _5d=="string"){_7.forEach(_5d.split("\r\n"),function(_5e,i){if(i>0){_58.appendChild(dom.create("br"));}_58.appendChild(document.createTextNode(_5e));});}else{_58.appendChild(_5d);}});return _58;},synthesizeEvent:function(evt,_5f){var _60=_4.mixin({},evt,_5f);_60.preventDefault=function(){evt.preventDefault();};_60.stopPropagation=function(){evt.stopPropagation();};return _60;},capture:function(_61,evt,_62){var _63=!_61.addEventListener,_64=_61[_63?"attachEvent":"addEventListener"],_65=_61[_63?"detachEvent":"removeEventListener"],_66=_63?"on"+evt:evt;_64.call(_61,_66,_62,true);return {remove:function(){_65.call(_61,_66,_62,true);}};},supports:function(_67){var _68=document.body.style;if(_67 in _68){return _67;}},text:function(_69,str){if(typeof str!=="undefined"){_69.innerHTML="";_69.appendChild(document.createTextNode(str));}else{return "textContent" in _69?_69.textContent:_69.innerText;}},html:function(_6a,str){if(typeof str!=="undefined"){_6a.innerHTML=str;}else{return _6a.innerHTML;}},orphan:function(_6b){var p=_6b.parentNode;if(p){p.removeChild(_6b);}},isOrphan:function(_6c){return !_6c.parentNode||_6c.parentNode.nodeType==dom.nodeTypes.DOCUMENT_FRAGMENT_NODE;},empty:function(_6d){var _6e;while(_6e=_6d.firstChild){_6d.removeChild(_6e);}},toArray:function(_6f){return _7.map(_6f,function(_70){return _70;});},escapeString:function(str){var _71=str.split(/\r\n|\n/),out=[];for(var i=0;i<_71.length;++i){dom.text(_e,_71[i]);out.push(_e.innerHTML);}return out.join("\n");},unescapeString:function(str){return str.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,"\"").replace(/&amp;/g,"&");},getCss:function(_72,doc){doc=doc||document;_72=_f(_72);return _2.find(doc.getElementsByTagName("link"),function(_73){return _73.href==_72;});},createCssLink:function(_74,_75){var _76={rel:"stylesheet",href:_f(_74)};if(_75){_76.media=_75;}return dom.create("link",_76);},addCss:function(_77,doc,_78){doc=doc||document;var _79=dom.getCss(_77,doc);if(_79){return _79;}var _7a=dom.createCssLink(_77,_78);doc.querySelector("head").appendChild(_7a);return _7a;},removeCss:function(_7b,doc){var _7c=dom.getCss(_7b,doc);if(_7c){_7c.parentNode.removeChild(_7c);return true;}return false;},ieFocusable:{"a":true,"body":true,"button":true,"frame":true,"iframe":true,"input":true,"isIndex":true,"object":true,"select":true,"textarea":true},getTabIndex:function(_7d){if(!_7d||!_7d.getAttribute){return null;}var _7e;if(_3("ie")||_3("trident")||_3("edge")){_7e=_7d.tabIndex;if(_7e===0){var _7f=_7d.nodeName.toLowerCase(),_80=_7d.attributes.tabIndex,_81=_80&&_80.specified===true;return _81||dom.ieFocusable[_7f]?"0":null;}else{return ""+_7e;}}else{var _82=_7d.getAttribute("tabindex");_7e=String(_7d.tabIndex);if(_82!=null||_7e>=0){if(!_3("ff")){return (_82==="")?null:_7e;}else{return _7e;}}else{return null;}}},moveFocusTo:function(_83){if(_3("mobile")){_1.blur();}else{_1.first(_83);}},data:_11(),getScopedData:_11,moveIntoView:function(_84,_85){_85=_85||0;var pos=_9.position(_84),_86=_b.getBox(),_87=_84.style,_88=pos.y+pos.h+_85,_89=pos.x+pos.w+_85;if(pos.y<_85||pos.h+_85*2>_86.h){_87.top=_85+"px";}else{if(_88>_86.h){_87.top=pos.y-(_88-_86.h)+"px";}}if(pos.x<_85||pos.w+_85*2>_86.w){_87.left=_85+"px";}else{if(_89>_86.w){_87.left=pos.x-(_89-_86.w)+"px";}}},getNodeExtents:function(_8a){var cs=_a.getComputedStyle(_8a),me=_9.getMarginExtents(_8a,cs),be=_9.getBorderExtents(_8a,cs),pe=_9.getPadExtents(_8a,cs);return {w:me.w+be.w+pe.w,h:me.h+be.h+pe.h};},dispatchEvent:function(_8b,_8c){if("createEvent" in document){var evt=document.createEvent("HTMLEvents");evt.initEvent(_8c.substr(2,_8c.length),true,true);_8b.dispatchEvent(evt);}else{if(_8b.fireEvent){_8b.fireEvent([_8c]);}}}};return dom;});