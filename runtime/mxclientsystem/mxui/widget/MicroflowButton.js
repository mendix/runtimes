/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/MicroflowButton",["mxui/widget/_Button","mendix/logger","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.MicroflowButton",microflow:null,confirmation:null,onClick:function(){var _6=this,mf=this.microflow,_7=mf.confirmation,_8=[];if(_7){_8.push(function(cb){window.mx.ui.confirmation({cancel:_7.cancel,proceed:_7.proceed,content:_7.question,handler:cb});});}if(mf.validate=="view"){_8.push(_3.hitch(this.mxform,"validate"));}_8.push(function(_9){_6.mxform.save(_9,function(_a){if(!(_a instanceof mendix.lib.ValidationError)){window.mx.onError(_a);}});});_8.push(function(){window.mx.ui.execute({microflow:mf},{context:_6.mxcontext,store:{dir:_6.direction,caller:_6.mxform}});});this.sequence(_8);}});return _5;});