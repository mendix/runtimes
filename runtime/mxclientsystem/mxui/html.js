
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/html",["dojo/sniff"],function(_1){return {attrs:{"ForRole":"visibleForRoles","FormTitle":"formTitle"},dispatchEvent:function(_2,_3){if("dispatchEvent" in _2){var _4=document.createEvent("HTMLEvents");_4.initEvent(_3.substr(2,_3.length),true,true);_2.dispatchEvent(_4);}else{_2.fireEvent&&_2.fireEvent([_3]);}},stripTags:function(_5){if(typeof _5=="string"){return _5.replace(/<[a-zA-Z\/][^>]*>/g," ");}else{return _5;}},escapeQuotes:function(_6){return _6.replace(/\'/g,"&#39;").replace(/\"/g,"&#34;");}};});