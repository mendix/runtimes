//>>built
define("dijit/layout/SplitContainer","dojo/_base/array dojo/cookie dojo/_base/declare dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/_base/event dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ../registry ../_WidgetBase ./_LayoutWidget".split(" "),function(e,k,d,l,t,m,g,n,p,u,h,q,v,w,x,y){d=d("dijit.layout.SplitContainer",y,{constructor:function(){u.deprecated("dijit.layout.SplitContainer is deprecated","use BorderContainer with splitter instead",2)},activeSizing:!1,
sizerWidth:7,orientation:"horizontal",persist:!0,baseClass:"dijitSplitContainer",postMixInProperties:function(){this.inherited("postMixInProperties",arguments);this.isHorizontal="horizontal"==this.orientation},postCreate:function(){this.inherited(arguments);this.sizers=[];v("mozilla")&&(this.domNode.style.overflow="-moz-scrollbars-none");if("object"==typeof this.sizerWidth)try{this.sizerWidth=parseInt(this.sizerWidth.toString())}catch(b){this.sizerWidth=7}var a=this.ownerDocument.createElement("div");
this.virtualSizer=a;a.style.position="relative";a.style.zIndex=10;a.className=this.isHorizontal?"dijitSplitContainerVirtualSizerH":"dijitSplitContainerVirtualSizerV";this.domNode.appendChild(a);l.setSelectable(a,!1)},destroy:function(){delete this.virtualSizer;if(this._ownconnects)for(var a;a=this._ownconnects.pop();)a.remove();this.inherited(arguments)},startup:function(){this._started||(e.forEach(this.getChildren(),function(a,b,c){this._setupChild(a);b<c.length-1&&this._addSizer()},this),this.persist&&
this._restoreState(),this.inherited(arguments))},_setupChild:function(a){this.inherited(arguments);a.domNode.style.position="absolute";t.add(a.domNode,"dijitSplitPane")},_onSizerMouseDown:function(a){if(a.target.id){for(var b=0;b<this.sizers.length&&this.sizers[b].id!=a.target.id;b++);b<this.sizers.length&&this.beginSizing(a,b)}},_addSizer:function(a){a=void 0===a?this.sizers.length:a;var b=this.ownerDocument.createElement("div");b.id=w.getUniqueId("dijit_layout_SplitterContainer_Splitter");this.sizers.splice(a,
0,b);this.domNode.appendChild(b);b.className=this.isHorizontal?"dijitSplitContainerSizerH":"dijitSplitContainerSizerV";a=this.ownerDocument.createElement("div");a.className="thumb";b.appendChild(a);this.connect(b,"onmousedown","_onSizerMouseDown");l.setSelectable(b,!1)},removeChild:function(a){if(this.sizers.length){var b=e.indexOf(this.getChildren(),a);-1!=b&&(b==this.sizers.length&&b--,m.destroy(this.sizers[b]),this.sizers.splice(b,1))}this.inherited(arguments);this._started&&this.layout()},addChild:function(a,
b){if("undefined"==typeof b||"last"==b)b=this.getChildren().length;this.inherited(arguments,[a,b]);this._started&&(1<this.getChildren().length&&this._addSizer(b),this.layout())},layout:function(){this.paneWidth=this._contentBox.w;this.paneHeight=this._contentBox.h;var a=this.getChildren();if(a.length){var b=this.isHorizontal?this.paneWidth:this.paneHeight;1<a.length&&(b-=this.sizerWidth*(a.length-1));var c=0;e.forEach(a,function(a){c+=a.sizeShare});var z=b/c,r=0;e.forEach(a.slice(0,a.length-1),function(a){var b=
Math.round(z*a.sizeShare);a.sizeActual=b;r+=b});a[a.length-1].sizeActual=b-r;this._checkSizes();var f=0,d=a[0].sizeActual;this._movePanel(a[0],f,d);a[0].position=f;f+=d;this.sizers&&e.some(a.slice(1),function(a,b){if(!this.sizers[b])return!0;this._moveSlider(this.sizers[b],f,this.sizerWidth);this.sizers[b].position=f;f+=this.sizerWidth;d=a.sizeActual;this._movePanel(a,f,d);a.position=f;f+=d},this)}},_movePanel:function(a,b,c){this.isHorizontal?(a.domNode.style.left=b+"px",a.domNode.style.top=0,b=
{w:c,h:this.paneHeight}):(a.domNode.style.left=0,a.domNode.style.top=b+"px",b={w:this.paneWidth,h:c});a.resize?a.resize(b):g.setMarginBox(a.domNode,b)},_moveSlider:function(a,b,c){this.isHorizontal?(a.style.left=b+"px",a.style.top=0,g.setMarginBox(a,{w:c,h:this.paneHeight})):(a.style.left=0,a.style.top=b+"px",g.setMarginBox(a,{w:this.paneWidth,h:c}))},_growPane:function(a,b){0<a&&b.sizeActual>b.sizeMin&&(b.sizeActual-b.sizeMin>a?(b.sizeActual-=a,a=0):(a-=b.sizeActual-b.sizeMin,b.sizeActual=b.sizeMin));
return a},_checkSizes:function(){var a=0,b=0,c=this.getChildren();e.forEach(c,function(c){b+=c.sizeActual;a+=c.sizeMin});if(a<=b){var d=0;e.forEach(c,function(a){a.sizeActual<a.sizeMin&&(d+=a.sizeMin-a.sizeActual,a.sizeActual=a.sizeMin)});0<d&&(c=this.isDraggingLeft?c.reverse():c,e.forEach(c,function(a){d=this._growPane(d,a)},this))}else e.forEach(c,function(c){c.sizeActual=Math.round(c.sizeMin/a*b)})},beginSizing:function(a,b){var c=this.getChildren();this.paneBefore=c[b];this.paneAfter=c[b+1];this.paneBefore.sizeBeforeDrag=
this.paneBefore.sizeActual;this.paneAfter.sizeBeforeDrag=this.paneAfter.sizeActual;this.paneAfter.positionBeforeDrag=this.paneAfter.position;this.isSizing=!0;this.sizingSplitter=this.sizers[b];this.sizingSplitter.positionBeforeDrag=n.get(this.sizingSplitter,this.isHorizontal?"left":"top");this.cover?this.cover.style.zIndex=5:this.cover=m.create("div",{style:{position:"absolute",zIndex:5,top:0,left:0,width:"100%",height:"100%"}},this.domNode);this.sizingSplitter.style.zIndex=6;this.startPoint=this.lastPoint=
this.isHorizontal?a.pageX:a.pageY;this.maxDelta=this.paneAfter.sizeActual-this.paneAfter.sizeMin;this.minDelta=-1*(this.paneBefore.sizeActual-this.paneBefore.sizeMin);this.activeSizing||this._showSizingLine();this._ownconnects=[q(this.ownerDocument.documentElement,"mousemove",h.hitch(this,"changeSizing")),q(this.ownerDocument.documentElement,"mouseup",h.hitch(this,"endSizing"))];p.stop(a)},changeSizing:function(a){if(this.isSizing){this.lastPoint=this.isHorizontal?a.pageX:a.pageY;var b=Math.max(Math.min(this.lastPoint-
this.startPoint,this.maxDelta),this.minDelta);this.activeSizing?this._updateSize(b):this._moveSizingLine(b);p.stop(a)}},endSizing:function(){if(this.isSizing){this.cover&&(this.cover.style.zIndex=-1);this.activeSizing||this._hideSizingLine();this._updateSize(Math.max(Math.min(this.lastPoint-this.startPoint,this.maxDelta),this.minDelta));this.isSizing=!1;this.persist&&this._saveState(this);for(var a;a=this._ownconnects.pop();)a.remove()}},_updateSize:function(a){this.paneBefore.sizeActual=this.paneBefore.sizeBeforeDrag+
a;this.paneAfter.position=this.paneAfter.positionBeforeDrag+a;this.paneAfter.sizeActual=this.paneAfter.sizeBeforeDrag-a;e.forEach(this.getChildren(),function(a){a.sizeShare=a.sizeActual});this._started&&this.layout()},_showSizingLine:function(){this._moveSizingLine(0);g.setMarginBox(this.virtualSizer,this.isHorizontal?{w:this.sizerWidth,h:this.paneHeight}:{w:this.paneWidth,h:this.sizerWidth});this.virtualSizer.style.display="block"},_hideSizingLine:function(){this.virtualSizer.style.display="none"},
_moveSizingLine:function(a){n.set(this.virtualSizer,this.isHorizontal?"left":"top",a+this.sizingSplitter.positionBeforeDrag+"px")},_getCookieName:function(a){return this.id+"_"+a},_restoreState:function(){e.forEach(this.getChildren(),function(a,b){var c=this._getCookieName(b);if(c=k(c))c=parseInt(c),"number"==typeof c&&(a.sizeShare=c)},this)},_saveState:function(){this.persist&&e.forEach(this.getChildren(),function(a,b){k(this._getCookieName(b),a.sizeShare,{expires:365})},this)}});d.ChildWidgetProperties=
{sizeMin:10,sizeShare:10};h.extend(x,d.ChildWidgetProperties);return d});
