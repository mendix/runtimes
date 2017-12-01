/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/Resizable",["mxui/dom","dojo/on","dojo/touch","dojo/window","dojo/dom","dojo/dom-geometry","dojo/_base/event","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){var $=_1.create;var _a=_9(null,{declaredClass:"mxui.lib.Resizable",node:null,margin:0,resizer:null,minWidth:0,minHeight:0,_events:null,_start:null,_resizing:false,constructor:function(_b,_c){_c=_c||{};this.node=_b;this.margin=_c.margin||0;this.resizer=_c.resizer;this.minWidth=_c.minWidth||0;this.minHeight=_c.minHeight||0;var _d=$("#"),_e=["n","e","s","w","ne","se","sw","nw"];for(var i=0,_f;_f=_e[i];i++){var _10=$("div",{"class":"mx-resizer mx-resizer-"+_f,"data-resize-dir":_f});_5.setSelectable(_10,false);_d.appendChild(_10);}_b.appendChild(_d);this._events=[];this.reset();},reset:function(){this.clean();var _11=this;this._events=[_2(this.node,_3.press,function(e){var dir=e.target.getAttribute("data-resize-dir");if(dir){_11.onMouseDown(dir,e);}})];},clean:function(){while(this._events.length){this._events.pop().remove();}},onMouseDown:function(dir,e){this.onResizeStart(e);this.clean();var box=_6.getMarginBox(this.node);this._start={box:box,viewport:_4.getBox(),pageX:e.pageX,pageY:e.pageY,minWidth:Math.min(this.minWidth,box.w),minHeight:Math.min(this.minHeight,box.h)};this._events.push(_2(document,_3.move,_8.hitch(this,"onMouseMove",dir)),_2(document,_3.release,_8.hitch(this,"onMouseUp")));_7.stop(e);},onMouseMove:function(dir,e){var _12=this._start,box=_12.box,_13=this.margin,_14={};if(/e|w/.test(dir)){var _15=/w/.test(dir),_16=_15?_12.pageX-e.pageX:e.pageX-_12.pageX,_17=(_15?box.l+box.w:_12.viewport.w-box.l)-_13;_14.w=Math.max(_12.minWidth,Math.min(_17,box.w+_16));if(_15){_14.l=Math.max(_13,box.l+box.w-_14.w);}}if(/n|s/.test(dir)){var _18=/n/.test(dir),_19=_18?_12.pageY-e.pageY:e.pageY-_12.pageY,_1a=(_18?box.t+box.h:_12.viewport.h-box.t)-_13;_14.h=Math.max(_12.minHeight,Math.min(_1a,box.h+_19));if(_18){_14.t=Math.max(_13,box.t+box.h-_14.h);}}if(this.resizer){this.resizer(_14);}else{_6.setMarginBox(this.node,_14);}this.onResizing();_7.stop(e);},onMouseUp:function(e){this.onResizeStop(e);this.reset();},onResizeStart:function(){this._resizing=true;},onResizing:function(e){},onResizeStop:function(){this._resizing=false;},destroy:function(){this.clean();}});return _a;});