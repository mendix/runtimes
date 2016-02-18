
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Tooltip",["dojo","dijit","dojox","dojo/require!dijit/Tooltip"],function(_1,_2,_3){_1.provide("mxui.widget.Tooltip");_1.require("dijit.Tooltip");_1.declare("mxui.widget._MasterTooltip",[_2._MasterTooltip,_2._TemplatedMixin],{constructor:function(){this.templateString=_1.cache("mxui.widget","templates/Tooltip.html","<div class=\"dijitTooltip dijitTooltipLeft\" id=dojoTooltip>\n\t<div class=\"dijitTooltipContainer dijitTooltipContents\" style=\"display:none\" dojoAttachPoint=\"containerNode\" role='alert'></div>\n\t<div class=\"dijitTooltipContainer dijitTooltipContents\">\n\t\t<div class=\"mx-tooltip-content\" dojoAttachPoint=\"contentNode\"></div>\n\t\t<div class=\"mx-tooltip-prepare\" dojoAttachPoint=\"prepareNode\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" dojoAttachPoint=\"connectorNode\"></div>\n</div>\n");this.currentNode=null;this.isPreparing=false;this.show=function(_4,_5,_6,dv){var cn=this.contentNode;var pn=this.prepareNode;if(!_4){this.isPreparing=true;cn.style.display="none";pn.style.display="block";}else{this.isPreparing=false;cn.style.display="block";pn.style.display="none";if(typeof (_4)=="string"){cn.innerHTML=_4;}else{if(_4.nodeName!=null){while(cn.firstChild){cn.removeChild(cn.firstChild);}cn.appendChild(_4);}}if(dv){dv.resize();var _7=_1.marginBox(this.domNode),_8=_2.getViewport();if(_7.h>_8.h){dv.resize({h:_1.contentBox(cn.parentNode).h-(_7.h-_8.h)});}}}this.domNode.style.display="";this.currentNode=_5;this.aroundNode=null;mxui.widget._MasterTooltip.superclass.show.call(this,_4,_5,_6);_1.addClass(this.domNode,"mx-tooltip");};this.hide=function(){mxui.widget._MasterTooltip.superclass.hide.apply(this,arguments);};}});mxui.widget.showTooltip=function(){if(!mendix._masterTT){mendix._masterTT=new mxui.widget._MasterTooltip();}mendix._masterTT.show.apply(mendix._masterTT,arguments);};mxui.widget.hideTooltip=function(_9){if(!mendix._masterTT){mendix._masterTT=new mxui.widget._MasterTooltip();}if(_9==null){_9=mendix._masterTT.currentNode;}mendix._masterTT.hide(_9);};});