/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/file-transfer",["bluebird/bluebird","./applicative","./file-helpers","./monad","./Task"],function(_1,_2,_3,_4,_5){var _6={};_6.downloadFile=function(_7,_8,_9,_a){var _b=_8.path.split("/");var _c=_b.pop();var _d=_e(_7,{"X-Csrf-Token":window.mx.session.getCSRFToken()},{responseType:"blob"});_3.getFileSystem(_8.location).then(function(fs){var _f=_3.openDirectory(fs.root,_b);_2.sequence([_d,_f],_5).chain(function(res){var _10=res[0];var de=res[1];return _3.saveBlob(_10,de,_c,{create:true});}).fork(_a,_9);});};return _6;function _e(url,_11,_12){return new _5(function(_13,_14){var xhr=new XMLHttpRequest();xhr.open("GET",url);Object.keys(_12).forEach(function(key){xhr[key]=_12[key];});Object.keys(_11).forEach(function(key){xhr.setRequestHeader(key,_11[key]);});xhr.onreadystatechange=function(e){var xhr=e.target;if(xhr.readyState===4){if(xhr.status>=200&&xhr.status<300){_14(xhr.response);}else{_13(xhr.response);}}};xhr.onerror=_13;xhr.send();});};});