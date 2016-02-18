/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/form/InlineForm",["mxui/lib/form/_FormBase","mxui/widget","mxui/wm/focus","mxui/dom","mendix/lib/Error","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7){"use strict";var _8=_7(_1,{_params:null,constructor:function(_9,_a,_b,_c){this.place=_9;this.path=_a.path;this.title=_c||_a.title;this._params=_6.mixin({},_b,{mxform:this});this.domNode=_4.create("div");if(_a.components.length!=1){throw new _5("Got "+_a.components.length+" top level templates while expecting only one, on page "+this.path);}_a.components[0].appendTo(this.domNode);},loadWidgets:function(_d,_e){this._context=_d;_2.loadWidgetsIn(this.domNode,this._params,_d,_e);},destroy:function(){_3.removeBox(this.domNode);_4.orphan(this.domNode);_2.destroyWidgetsIn(this.domNode);}});return _8;});