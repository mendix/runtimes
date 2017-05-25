/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/html",[],function(){return {attrs:{"ForRole":"visibleForRoles","FormTitle":"formTitle"},stripTags:function(_1){if(typeof _1=="string"){return _1.replace(/<[a-zA-Z\/][^>]*>/g," ");}else{return _1;}},escapeQuotes:function(_2){return _2.replace(/\'/g,"&#39;").replace(/\"/g,"&#34;");}};});