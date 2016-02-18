
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/html",[],function(){return {attrs:{"ForRole":"visibleForRoles","FormTitle":"formTitle"},stripTags:function(_1){if(typeof _1=="string"){return _1.replace(/<[a-zA-Z\/][^>]*>/g," ");}else{return _1;}},escapeQuotes:function(_2){return _2.replace(/\'/g,"&#39;").replace(/\"/g,"&#34;");}};});