
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/SearchInput",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.SearchInput");_1.declare("mxui.widget.SearchInput",mxui.widget._WidgetBase,{name:"",display:"",klass:"node",operator:"=",key:"",referenceStringKey:"",tag:"",query:"",entity:"",toKey:"",toOperator:"",attribute:"",referenceAttr:"",hidden:false,sortorder:null,mxid:null,defaults:"",xpath:"",metaobject:null,mxcontext:null,disabled:false,show:true,_MS_IN_DAY:24*60*60*1000,_setupCompleted:false,_input:null,_widget:null,_tooltip:null,_localized:true,_finalize:null,_type:"",postMixInProperties:function(){this.mxcontext=this.mxcontext||new mxui.lib.MxContext();var _4=this.name.split("/");switch(_4.length){case 1:this.key=this.name;this.attribute=this.key;break;case 2:this.key=_4[1];this.attribute=_4[1];break;default:this.tag=_4[_4.length-1];this.key=_4[0];this.attribute=_4[_4.length-1];this.referenceAttr=_4[0];this.referenceStringKey=this.name;this.entity=_4[_4.length-2];this.query="//"+this.entity;break;}if(this.toKey&&this.toOperator){_4=this.toKey.split("/");if(_4.length==2){this.toKey=_4[1];}else{this.toKey=this.toKey;}this.toOperator=this.toOperator;}this._type=this.klass.toLowerCase();},buildRendering:function(){var _5=null,$=mxui.dom.create;switch(this._type){case "boolean":this._input=$("select",{"class":"form-control"});this._finalize=this._setupBoolean;break;case "referencestring":this.key=this.referenceStringKey;case "node":case "noderange":this._input=$("input",{type:"text","class":"form-control"});if(this.defaults){this._input.value=this.defaults.toString();}this._finalize=this._completeSetup;break;case "referencedropdown":this._input=$("select",{"class":"form-control"});this._finalize=this._setupReferenceDropDown;break;case "referenceenum":this._input=$("select",{"class":"form-control"});this._finalize=this._setupReferenceEnum;break;case "enum":this._input=$("select",{"class":"form-control"});this._finalize=this._setupEnum;break;case "date":case "daterange":this._widget=new mxui.widget.DatePicker();this._finalize=this._setupDateTimePicker;break;default:this._input=$("input",{type:"text","class":"form-control"});}var _6,_7;if(this._widget){_6=this._widget.domNode;this.connect(this._widget,"onKeyUp","onKeyUp");this.connect(this._widget,"onChange","onChange");}else{_6=this._input;this.connect(this._input,"keyup","onKeyUp");this.connect(this._input,"blur","onChange");}_7=mxui.dom.div({"class":"mx-grid-search-item"},$("div",{"class":"mx-grid-search-label"},$("label",this.display||"")),$("div",{"class":"mx-grid-search-input"},_6));this.domNode=_7;if(this.get("hidden")){_7.style.display="none";}if(!this.show){this.domNode.style.display="none";}},startup:function(){this.inherited(arguments);if(this._finalize){this._finalize.call(this);}this.set("disabled",this.disabled);},reset:function(){this._resetSearchField();},reinit:function(_8){if(this._type==="referencedropdown"){this._setupReferenceDropDown(_8);}else{_8();}},focus:function(){if(this._widget){this._widget.focus();}else{_2.focus(this._input);}},hideTooltip:function(){this._tooltip&&this._tooltip.hide(this._widget&&this._widget.domNode||this._input);},onChange:function(){if(!this.get("valid")){if(!this._tooltip){this._tooltip=new mxui.widget._MasterTooltip();}this._tooltip.show(/date|betweendate/i.test(this._type)?mx.ui.translate("mendix.lib.Validations","invalid_date"):mx.ui.translate("mendix.lib.Validations","invalid_number"),this._widget||this._input);}else{this.hideTooltip();}},onKeyUp:function(){},uninitialize:function(){if(this._tooltip){this._tooltip.destroyRecursive();}},_resetSearchField:function(){switch(this._type){case "date":case "daterange":var _9="";if(this.defaults){if(this.defaults==="[%CurrentDateTime%]"){_9=+new Date();}else{if(this.defaults==="[%BeginOfCurrentDay%]"){_9=new Date().setHours(0,0,0,0);}else{_9=mx.parser.localizeEpoch(Number(this.defaults));}}}this._widget.set("value",_9);break;default:this._input.value=this.defaults;break;}},_setupEnum:function(){mxui.dom.setSelectOptions(this._input,this.metaobject.getEnumKVPairs(this.key),this.defaults);this._completeSetup();},_setupBoolean:function(){this._input.options[0]=new Option("","",(!this.defaults&&this.defaults===""));this._input.options[1]=new Option(mx.ui.translate("mxui.widget.DataGrid","true"),"true");this._input.options[2]=new Option(mx.ui.translate("mxui.widget.DataGrid","false"),"false");if(this.defaults!==""){if(/true|yes/.test(this.defaults)){this._input.options[1].selected=true;}else{this._input.options[2].selected=true;}}this._completeSetup();},_setupReferenceEnum:function(){var _a=mx.meta.getEntity(this.entity);var _b=_a.getEnumKVPairs(this.tag);mxui.dom.setSelectOptions(this._input,_b,this.defaults);this._completeSetup();},_setupReferenceDropDown:function(_c){var _d=this.xpath;if(_d.match(/\[%CurrentObject%\]/)){var _e=this.mxcontext.getTrackId();if(_e){_d=this.xpath.replace(/\[%CurrentObject%\]/g,_e);}else{_c&&_c();return;}}mx.data.get({xpath:this.query+_d,filter:{attributes:[this.tag],distinct:true,sort:this.sortOrder||[[this.tag,"asc"]],id:this.mxid},callback:_1.hitch(this,function(_f){var _10={};for(var i=0,l=_f.length;i<l;++i){var _11=_f[i].get(this.tag);_10[_11]=_11;}mxui.dom.setSelectOptions(this._input,_10,this.defaults);this._completeSetup(_c);}),error:function(e){mx.onError(e);_c&&_c();}});},_setupDateTimePicker:function(){try{var _12=this.entity?mx.meta.getEntity(this.entity):this.metaobject;if(this.referenceAttr&&!this.metaobject.isReference(this.referenceAttr)){this.metaobject=_12;}this._localized=_12.isLocalizedDate(this.attribute);this._resetSearchField();}catch(e){}this._completeSetup();},_completeSetup:function(_13){this._setupCompleted=true;_13&&_13();},_quoteValue:function(val){var _14=this.entity?mx.meta.getEntity(this.entity):this.metaobject;var _15=(_14.isNumber(this.attribute)||_14.isCurrency(this.attribute)||_14.isDate(this.attribute)||/autonumber/i.test(_14.getAttributeType(this.attribute)));return _15?val:("'"+val+"'");},_stringForOperator:function(key,_16,_17){return key+_16+this._quoteValue(_17);},_stringForContains:function(key,_18,_19){return _18+"("+key+","+this._quoteValue(_19)+")";},_xpString:function(key,_1a,_1b){return (/contains|starts-with/.test(_1a))?this._stringForContains(key,_1a,_1b):this._stringForOperator(key,_1a,_1b);},_xpWithEmptyString:function(_1c,key){return "("+_1c+" or "+key+"=empty)";},_xpAndString:function(){return Array.prototype.join.call(arguments," and ");},_xpDateString:function(key,_1d,_1e){var _1f=0;switch(_1d){case ">":_1d=">=";_1f=this._MS_IN_DAY;break;case "<=":_1d="<";_1f=this._MS_IN_DAY;break;}return this._xpString(key,_1d,(_1e+_1f)+"");},_prepareNodeValue:function(){var _20=this.metaobject,_21=mxui.dom.escapeHTMLQuotes(this._input.value);if(this.referenceAttr&&this.metaobject.isReference(this.referenceAttr)){_20=mx.meta.getEntity(this.entity);}if(this.get("valid")&&_21!==""){if(/integer/i.test(_20.getAttributeType(this.attribute))){_21=Math.floor(_21);this._input.value=_21=(_21>2147483647)?0:_21;}return _21;}else{return null;}},_getValueAttr:function(){try{if(this._setupCompleted){var _22="",_23;switch(this._type){case "boolean":var _24=this._input.options[this._input.selectedIndex];_22=_24.value;return (_22!=="")?this._xpString(this.key,this.operator,_22):"";case "referencestring":case "node":this.onChange();_22=this._prepareNodeValue();return (_22!=null)?this._xpString(this.key,this.operator,_22):"";case "noderange":this.onChange();_22=this._prepareNodeValue();if(_22!=null){_23=this.referenceStringKey||this.key;return this._xpAndString(this._xpWithEmptyString(this._xpString(_23,this.operator,_22),_23),this._xpWithEmptyString(this._xpString(this.toKey,this.toOperator,_22),this.toKey));}else{return "";}break;case "enum":_22=mxui.dom.getSelectedValue(this._input);_22=mxui.dom.escapeHTMLQuotes(_22);if(_22!==""){return this._xpString(this.key,this.operator,_22);}else{return "";}break;case "referencedropdown":case "referenceenum":_22=mxui.dom.getSelectedValue(this._input);_22=mxui.dom.escapeHTMLQuotes(_22);if(_22!==""){return this._xpString(this.referenceStringKey,this.operator,_22);}else{return "";}break;case "date":_22=this._widget.get("value");if(_22!=null&&_22!==""){var _25=+_22;if(!this._localized){_25=mx.parser.delocalizeEpoch(_25);}var _26=this.referenceStringKey||this.key;if(this.operator=="="){return this._xpAndString("("+this._xpString(_26,">=",_25)+")","("+this._xpString(_26,"<",_25+this._MS_IN_DAY)+")");}else{return this._xpDateString(_26,this.operator,_25);}}else{return "";}break;case "daterange":_22=+this._widget.get("value");if(_22||_22===0){if(!this._localized){_22=mx.parser.delocalizeEpoch(_22);}var _27=parseInt(_22,10);_23=this.referenceStringKey||this.key;return this._xpAndString(this._xpWithEmptyString(this._xpString(_23,this.operator,_27+this._MS_IN_DAY),_23),this._xpWithEmptyString(this._xpString(this.toKey,this.toOperator,_27),this.toKey));}else{return "";}break;default:return this._input.value;}}else{}}catch(e){logger.error(this.id+": error retrieving search value : "+e.message);}return "";},_getValidAttr:function(){var _28=this.entity?mx.meta.getEntity(this.entity):this.metaobject;if(_28.isNumber(this.attribute)||_28.isCurrency(this.attribute)){return (/^\d*(\.\d+)?$/).test(this._input.value);}else{if(_28.isDate(this.attribute)){return (this._widget.get("value")!=null);}}return true;},_getAttrHidden:function(){return this.hidden;},_setAttrHidden:function(_29){this.hidden=_29;},_setDisabledAttr:function(_2a){var _2b;this.disabled=_2a;if(this._widget){_2b=this._widget.domNode;this._widget.set("disabled",_2a);}else{_2b=this._input;if(_2a){_2b.setAttribute("readonly","readonly");mxui.dom.disableNode(_2b);}else{_2b.removeAttribute("readonly","readonly");mxui.dom.enableNode(_2b);}}if(_2a){_1.addClass(_2b,"MxClient_formDisabled");}else{_1.removeClass(_2b,"MxClient_formDisabled");}},_getDisabledAttr:function(){return this.disabled;}});});