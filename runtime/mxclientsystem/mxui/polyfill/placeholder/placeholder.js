
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/polyfill/placeholder/placeholder",["mxui/dom","dojo/dom-style","dojo/dom-geometry","dojo/on","dojo/sniff","dojo/_base/array","dojo/_base/lang","require"],function(_1,_2,_3,_4,_5,_6,_7,_8){"use strict";var $=_1.create;if(_5("ie")!=8&&_5("ie")!=9){return;}if(_5("ie")==9){_5.add("dom-parser",false,undefined,true);}_9("input[placeholder], textarea[placeholder]","behavior: url('"+_8.toUrl("./placeholder.htc")+"')");_7.setObject("mxui.polyfill.placeholder",{initialize:function(_a){if(_a._placeholder){return;}_b(_a);},destroy:function(_c){if(!_c._placeholder){return;}_d(_c);}});function _b(_e){_e._placeholder=_f(_e);_e.parentNode.appendChild(_e._placeholder);if(_e.parentNode&&_2.get(_e.parentNode,"position")=="static"){_e.parentNode.style.position="relative";}_10(_e);_e.onpropertychange=function(e){e=e||window.event;if(e.propertyName=="value"){_11(_e);}else{if(e.propertyName=="placeholder"||e.propertyName=="className"||e.propertyName=="rows"||e.propertyName.indexOf("style")==0){_10(_e);}}};_e._placeholder._events.push(_4(_e,"keyup",_7.partial(_11,_e)));};function _d(_12){_12.onpropertychange=null;_6.forEach(_12._placeholder._events,function(_13){_13.remove();});_1.orphan(_12._placeholder);delete _12._placeholder;};function _f(_14){var _15=$(_14.tagName,{tabindex:-1});_15._events=[];_15._events.push(_4(_15,"focus",_7.hitch(_14,"focus")),_4(_14,"resize",_7.partial(_16,_14)));return _15;};function _16(_17){var _18=_2.getComputedStyle(_17),_19=_3.getMarginBox(_17,_18),_1a=_3.getPadBorderExtents(_17,_18),_1b=_3.getContentBox(_17,_18);_17._placeholder.style.left=_19.l+"px";_17._placeholder.style.top=_19.t+"px";_17._placeholder.style.width=(_1a.w+_1b.w)+"px";_17._placeholder.style.height=(_1a.h+_1b.h)+"px";};function _11(_1c){_1c._placeholder.style.display=_1c.value.length?"none":"";};function _1d(_1e){_1e.style.position="absolute";_1e.style.overflow="hidden";_1e.style.background="transparent";_1e.style.borderColor="transparent";_1e.style.boxShadow="none";_1e.style.color="#888";};function _10(_1f){var _20=_1f.getAttribute("rows");if(_20){_1f._placeholder.rows=_20;}_1f._placeholder.value=_1f.getAttribute("placeholder")||"";_1f._placeholder.className=_1f.className;_1f._placeholder.style.cssText=_1f.style.cssText;_1d(_1f._placeholder);_16(_1f);if(_2.get(_1f,"display")!="none"){_11(_1f);}};function _9(_21,_22){document.getElementsByTagName("head")[0].appendChild($("style"));var _23=document.styleSheets[document.styleSheets.length-1];if(_23.insertRule){_23.insertRule(_21+"{"+_22+"}",0);}else{_23.addRule(_21,_22,0);}};});