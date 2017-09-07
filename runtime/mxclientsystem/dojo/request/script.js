/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/script","module ./watch ./util ../_base/kernel ../_base/array ../_base/lang ../on ../dom ../dom-construct ../has ../_base/window".split(" "),function(p,q,h,r,t,u,n,v,w,l,x){function y(a,b){a.canDelete&&f._remove(a.id,b.options.frameDoc,!0)}function z(a){g&&g.length&&(t.forEach(g,function(a){f._remove(a.id,a.frameDoc);a.frameDoc=null}),g=[]);return a.options.jsonp?!a.data:!0}function A(a){return!!this.scriptLoaded}function B(a){return(a=a.options.checkString)&&eval("typeof("+a+
') !\x3d\x3d "undefined"')}function C(a,b){if(this.canDelete){var c=this.response.options;g.push({id:this.id,frameDoc:c.ioArgs?c.ioArgs.frameDoc:c.frameDoc});c.ioArgs&&(c.ioArgs.frameDoc=null);c.frameDoc=null}b?this.reject(b):this.resolve(a)}function f(a,b,c){var e=h.parseArgs(a,h.deepCopy({},b));a=e.url;b=e.options;var d=h.deferred(e,y,z,b.jsonp?null:b.checkString?B:A,C);u.mixin(d,{id:m+D++,canDelete:!1});b.jsonp&&((new RegExp("[?\x26]"+b.jsonp+"\x3d")).test(a)||(a+=(~a.indexOf("?")?"\x26":"?")+
b.jsonp+"\x3d"+(b.frameDoc?"parent.":"")+m+"_callbacks."+d.id),d.canDelete=!0,k[d.id]=function(a){e.data=a;d.handleResponse(e)});h.notify&&h.notify.emit("send",e,d.promise.cancel);if(!b.canAttach||b.canAttach(d)){var g=f._attach(d.id,a,b.frameDoc);if(!b.jsonp&&!b.checkString)var l=n(g,E,function(a){if("load"===a.type||F.test(g.readyState))l.remove(),d.scriptLoaded=a})}n.once(g,"error",function(a){d.reject(a);f._remove(d.id,b.frameDoc,!0)});q(d);return c?d:d.promise}l.add("script-readystatechange",
function(a,b){return"undefined"!==typeof b.createElement("script").onreadystatechange&&("undefined"===typeof a.opera||"[object Opera]"!==a.opera.toString())});var m=p.id.replace(/[\/\.\-]/g,"_"),D=0,E=l("script-readystatechange")?"readystatechange":"load",F=/complete|loaded/,k=r.global[m+"_callbacks"]={},g=[];f.get=f;f._attach=function(a,b,c){c=c||x.doc;var e=c.createElement("script");e.type="text/javascript";e.src=b;e.id=a;e.async=!0;e.charset="utf-8";return c.getElementsByTagName("head")[0].appendChild(e)};
f._remove=function(a,b,c){w.destroy(v.byId(a,b));k[a]&&(c?k[a]=function(){delete k[a]}:delete k[a])};f._callbacksProperty=m+"_callbacks";return f});
//# sourceMappingURL=script.js.map