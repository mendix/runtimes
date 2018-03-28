/* @preserve
    Copyright (c) 2005-2016, Mendix bv. All rights reserved.
    See mxclientsystem/licenses.txt for third party licenses that apply.
*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(t,e,i){var a=i(131),n=i(6);t.exports=function(t){var e=t.reportid||null,i=t.startdormant||!0,r=t.page,s={information:{title:"Empty report",xaxis:"X",yaxis:"Y"},interval_descriptives:[],series_descriptives:[],series_data:[]},o={},h={},c=0,l=0,u=function(t){window.mx.data.generateReport(e,c,r,h,function(e){s=e,e.information&&e.information.count&&(l=e.information.count),t&&t()},function(e){window.mx.onError(e),t()})};this.execQuery=function(t){u(t||function(){})};var d=this.execQuery.bind(this);this.getQueryParameters=function(){return h},this.getInformation=function(){return s.information},this.getSeriesDescriptives=function(){return s.series_descriptives},this.getAggregateRows=function(){return s.aggregate_rows||[]},this.getSeriesTypes=function(){return s.series_info||[]},this.getIntervalType=function(){return s.interval_info||{}},this.getIntervalDescriptives=function(){if(s.interval_descriptives&&s.interval_descriptives.length&&0!==s.interval_descriptives.length)return s.interval_descriptives;if(s.series_data.length>0){for(var t=[],e=0;e<s.series_data[0].length;e++)t.push(" ");return t}return[]},this.getSeriesData=function(t){return t?s.series_data[t]:s.series_data},this.setParams=function(t){for(var e in h={},t)e.match(/_config_hash/)||""!==t[e]&&(h[e]=t[e])},this.size=function(){return l},this.getSize=function(){return this.size()},this.getPageSize=function(){return r},this.setPageSize=function(t,e){r=t,e&&d(e)},this.getOffset=function(){return c},this.setOffset=function(t,e){c=t,e&&d(e)},this.setPageSize=function(t,e){r=t,e&&d(e)},this.getOffset=function(){return c},this.first=function(t){c=0,t&&d(t)},this.last=function(t){c=r>=l?0:l-r,t&&d(t)},this.next=function(t){c>=l-r?c=l-r:c+=r,t&&d(t)},this.previous=function(t){l<r||c-r<=0?c=0:c-=r,t&&d(t)},this._getstats=function(){var t=s;if(t){var e=t.information.count;null==e&&(e=l);var i=t.series_data,a=t.aggregate_rows?t.aggregate_rows.length:0,n=i.length?i[0].length-a:0;return[0!==n?c+1:c,c+n,e]}return[0,0,0]},this.getStatusMessage=function(){return window.mx.ui.translate("mxui.lib.MxDataSource","status",this._getstats())},this.atBeginning=function(){return 0===c},this.atEnd=function(){var t=this._getstats();return t[1]>=t[2]},n.sequence([function(t){window.mx.data.getReportParameters(e,function(e){o=e,t&&t()})}.bind(this),function(t){a.register(e,o),t&&t()}.bind(this),i?function(t){t()}:u.bind(this)],function(){t.load&&setTimeout(t.load,1)})}},192:function(t,e){t.exports=function(t){this.getRenderValue=function(e,i){var a=t[e];switch(a.type){case"Boolean":var n=String(i);return n.match(/true|false/)?window.mx.ui.translate("mxui.widget.DataGrid",n):i;case"Date":case"DateTime":if("string"==typeof i)return i;var r=window.mx.parser.formatDate(i,{datePattern:a.format});return window.mx.ui.isRtl()&&r&&(r=r.split("‏/").reverse().join("/")),r;case"Enum":if(a.options)for(var s=0;s<a.options.length;s++){var o=a.options[s];for(var h in o){if(i==h)return o[h];break}}return i;default:return String(i)}}}},290:function(t,e,i){var a=i(80),n=i(26);t.exports={weekMs:6048e5,dayMs:864e5,getFirstWeekOfYear:function(t){var e=new Date(t,0,1),i=e.getDay(),r=e.getTime();if(0===i)return e.getTime();if(r-=864e5*(i-(n.locale.match(/nl/i)?1:0)),0!==(e=new Date(r)).getMonth()){var s=a.getDaysInMonth(e)-3;if(e.getDate()<=s)return r+6048e5}else{if(e.getDate()>=5)return r-6048e5}return r}}},291:function(t,e,i){var a=i(290),n=i(48),r=i(11),s=i(5),o=i(157),h=i(109),c=i(79),l=i(7),u=i(2),d=u(r,{_items:null,postCreate:function(){this.connect(this.domNode,"change","onChange"),s.setSelectOptions(this.domNode,{},"")},setItems:function(t){if(t){this._items=t;var e={};l.forEach(this._items,function(t,i){e[i]=t.display}),s.setSelectOptions(this.domNode,e,"")}},getDateInterval:function(){var t=s.getSelectedValue(this.domNode);return""!==t?this._items[t]:{from:"",to:""}},_getValueAttr:function(){return s.getSelectedText(this.domNode)},_setValueAttr:function(t){s.selectOptionByText(this.domNode,t)},onChange:function(){}}),p={set:function(){},get:function(){return""},onChange:function(){},setItems:function(){}};var g={period:function(t){for(var e=a.getFirstWeekOfYear(t),i=e,n=[],r=t,s=1,o=a.getFirstWeekOfYear(t+1);t==r&&o>i;){var h=e;i=e+=4*a.weekMs,14==s&&(i=o),i-=a.dayMs,n.push({from:new Date(h),to:new Date(i),display:String(s++)}),t=new Date(e).getUTCFullYear()}return n},quarter:function(t){return l.map([0,1,2,3],function(e){return{display:(e+1).toString(),from:new Date(t,3*e,1),to:new Date(t,3*e+3,0)}})},month:function(t){return l.map(h.getNames("months","wide"),function(e,i){return{display:e,from:new Date(t,i,1),to:new Date(t,i+1,0)}})},week:function(t){var e=new Date(a.getFirstWeekOfYear(t)),i=[],n=1;do{var r=new Date(e.getTime()+a.weekMs-1);i.push({display:"Week "+(n++).toString(),from:e,to:r}),e=new Date(r.getTime()+1)}while(e.getFullYear()==t);return i}},f=["period","quarter","month","week"],m=f.concat(["year"]),A=u([r,n],{reportid:"",parameter:"",startYear:null,endYear:null,hasDates:!0,_periodSelectorsParameterName:"",_periodSelectors:null,_dateInputs:null,_value:null,postCreate:function(){this._periodSelectorsParameterName=this.parameter.toString()+"_config_hash",this._periodSelectors={},this._dateInputs={},this._value={from:"",to:""},this._buildPeriodSelectors(),this._periodSelectors.year.setItems(function(t,e){for(var i=[],a=t;a<=e;a++)i.push({display:a.toString(),from:new Date(a,0,1),to:new Date(a+1,0,0)});return i}(this.startYear,this.endYear)),this._subscribeToYearChange(),this._subscribeToPeriodChange(),this.hasDates&&(this._buildDateInputs(),this._subscribeToDateChange())},_buildPeriodSelectors:function(){var t=this;l.forEach(m,function(e){var i=t.domNode.querySelector("select[name='"+e+"']");t._periodSelectors[e]=i?new d({},i):p})},_buildDateInputs:function(){var t=this;l.forEach(["from","to"],function(e,i){var a=t.domNode.querySelector("input[name='"+e+"']"),n=new o({selector:"date"});a.parentNode.replaceChild(n.domNode,a),t._dateInputs[e]=n})},_subscribeToYearChange:function(){var t=this;this.connect(this._periodSelectors.year,"onChange",function(){var e=this._periodSelectors.year.get("value");""==e?l.forEach(f,function(e){t._periodSelectors[e].setItems([])}):(this._setValue(this._periodSelectors.year.getDateInterval()),l.forEach(f,function(i){var a=t._periodSelectors[i].get("value");t._periodSelectors[i].setItems(g[i](e)),""!=a&&(t._periodSelectors[i].set("value",a),t._periodSelectors[i].onChange())}),this._onChange())})},_subscribeToPeriodChange:function(){var t=this;l.forEach(f,function(e){var i=t._periodSelectors[e];t.connect(i,"onChange",function(){""!==i.get("value")&&(t._setValue(i.getDateInterval()),l.forEach(f,function(i){i!=e&&t._periodSelectors[i].set("value","")}),t._onChange())})})},_subscribeToDateChange:function(){var t=this;l.forEach(["from","to"],function(e){t.connect(t._dateInputs[e],"onChange",function(){var i=t._dateInputs[e].get("value");t._value[e]=i,""!==i&&(l.forEach(f,function(e){t._periodSelectors[e].set("value","")}),i.getFullYear()!=t._periodSelectors.year.get("value")&&t._periodSelectors.year.set("value","")),t._onChange()})})},startup:function(){this.domNode.parentNode.style.padding="0px",this.inherited(arguments)},update:function(t,e){var i=this.getState("value",this.mxcontext.hasParam(this.parameter)?this.mxcontext.getParam(this.parameter):""),a=this.getState("config",this.mxcontext.hasParam(this._periodSelectorsParameterName)?this.mxcontext.getParam(this._periodSelectorsParameterName):""),n=this;if(a&&(this._periodSelectors.year.set("value",a.year),this._periodSelectors.year.onChange(),l.forEach(f,function(t){n._periodSelectors[t].set("value",a[t])})),i){var r="",s="";i.length?(r=new Date(i[0]),s=new Date(i[1])):""!=i&&(r=s=new Date(i)),this.hasDates&&(this._dateInputs.from.set("value",r),this._dateInputs.to.set("value",s)),this._value={from:r,to:s}}this._onChange(),e&&e()},_setValue:function(t){this.hasDates&&(this._dateInputs.from.set("value",t.from),this._dateInputs.to.set("value",t.to)),this._value=t},_getValue:function(){return""!=this._value.from&&""!=this._value.to?[this._value.from.getTime(),this._value.to.getTime()]:""},_getSelectorConfig:function(){var t=this,e={};return l.forEach(m,function(i){e[i]=t._periodSelectors[i].get("value")}),e},_onChange:function(){this.mxcontext.setParam(this.parameter,this._getValue()),this.mxcontext.setParam(this._periodSelectorsParameterName,this._getSelectorConfig()),c.publish("context_seed_"+this.mxform.hash,this.mxcontext)},storeState:function(t){t("value",this._getValue()),t("config",this._getSelectorConfig())}});t.exports=A},292:function(t,e,i){var a=i(131),n=i(10),r=i(48),s=i(11),o=i(5),h=i(6),c=i(79),l=i(2),u=o.create;function d(t){var e="reporting.widget.ReportParameter";return null==t[0]&&null==t[1]?window.mx.ui.translate(e,"all"):null==t[0]?window.mx.ui.translate(e,"less_than",t[1].toString()):null==t[1]?window.mx.ui.translate(e,"greater_than",t[0].toString()):window.mx.ui.translate(e,"from_to",[t[0].toString(),t[1].toString()])}function p(t,e){var i=[];if("enum"==e)i=t;else if("boolean"==e||"datetime"==e)i="string"==typeof t[0]?t.map(function(t){return[t,t]}):t;else if("decimal"==e)if(t.isRange)i=t.values.map(function(t,e){return[e,d(t)]});else{i={};for(var a,r=0;a=t.values[r];r++)if(null!==a[0]&&null!==a[1])for(var s=new n(a[0]),o=new n(a[1]),h=s;h.lt(o);h=h.plus(1))i[h.toString()]=h.toString()}else i=t.values||t;if(null!=i.length){var c=i;i={},c.forEach(function(t){var e,a;i[t[0]]=(e=t[1]||t[0],(a=String(e)).match(/true|false/)?mx.ui.translate("mxui.widget.DataGrid",a):e)})}return i}var g=l([s,r],{parameter:"",paramtype:"",reportid:"",autoLoad:!1,_selectNode:null,_parameterInfo:null,buildRendering:function(){this.domNode=u("div",{class:"reportingReportParameter"},this._selectNode=u("select",{class:"form-control"})),this.connect(this._selectNode,"change",function(t){t.stopPropagation(),this._onChange()})},postCreate:function(){var t=this;a.retrieve(this.reportid,function(e){if(t._parameterInfo=e[t.parameter],t._parameterInfo){var i=p(t._parameterInfo,t.paramtype);o.setSelectOptions(t._selectNode,i,""),t.set("loaded",!0)}else t.set("loaded",!0)})},update:function(t,e){var i=this.getState("value",this.mxcontext.hasParam(this.parameter)?this.mxcontext.getParam(this.parameter):void 0);if(void 0!==i)if("decimal"==this.paramtype){if(this._parameterInfo.isRange&&!(i instanceof Array)){var a=new n(i);i=h.find(this._parameterInfo.values,function(t){return(null==t[0]||a.gte(t[0]))&&(null==t[1]||a.lt(t[1]))})}var r=i instanceof Array?d(i):i;o.selectOptionByText(this._selectNode,r)}else o.selectOptionByValue(this._selectNode,i.toString());else o.selectOptionByValue(this._selectNode,"");this._onChange(),e&&e()},_getValue:function(){var t=o.getSelectedValue(this._selectNode);return this._parameterInfo.isRange&&""!=t&&(t=this._parameterInfo.values[parseInt(t,10)]),t},_onChange:function(){this.mxcontext.setParam(this.parameter,this._getValue()),c.publish("context_seed_"+this.mxform.hash,this.mxcontext)},storeState:function(t){t("value",this._getValue())}});t.exports=g},293:function(t,e,i){var a=i(110),n=i(8),r=i(78),s=i(2);t.exports=s(a,{declaredClass:"reporting.widget.ReportTrigger",buildRendering:function(){this.inherited(arguments),n.add(this.domNode,"reportingReportTrigger")},onClick:function(){r.publish("report_"+this.mxform.hash,["runreport"])}})},294:function(t,e,i){t.exports=i.p+"static/FCF_MSColumn3D.8a5a3b39cb648b1f5c66379ac285beaf.swf"},295:function(t,e,i){t.exports=i.p+"static/FCF_MSColumn2D.83cc942ca6d138ecfacda4783ead4225.swf"},296:function(t,e,i){t.exports=i.p+"static/FCF_MSArea2D.a0e53f6630b1e6d7c5f0227f987a9a51.swf"},297:function(t,e,i){t.exports=i.p+"static/FCF_MSLine.a2c8d73d680586182060cbc20c6bdfd6.swf"},298:function(t,e,i){t.exports=i.p+"static/FCF_MSBar2D.4609b814eac599fe9f5c41191c263e6d.swf"},299:function(t,e){t.exports='<div class="ReportCharts" style="z-index:-1;display:none;">\n\t<div style="clear:both"/>\n\t<div style="text-align:center; padding:10px 0px 10px;">\n\t\t<div dojoAttachPoint="chartNode">\n\t\t</div>\n\t</div>\n</div>\n'},300:function(t,e,i){var a=i(192),n=i(59);t.exports=function(t){var e=t.oqlsource.getSeriesData(),i=t.oqlsource.getSeriesDescriptives(),r=t.oqlsource.getIntervalDescriptives(),s=t.oqlsource.getInformation(),o=null,h=null,c=0,l=new a([t.oqlsource.getIntervalType()]);"number"==typeof t.ymin&&(o=t.ymin),"number"==typeof t.ymax&&(h=t.ymax),"number"==typeof t.precision&&(c=t.precision);var u={multi:["38BDFF","387EFF","5638FF","B938FF","FF38A6","FF4538","FF8938","FFB538","FFDD38","F9FF38","C7F627","21F228"],single:["0099FF","0037FF","4800FF","C800FF","FF006A","FF3300","FF7900","FFAE00","FFE100","EAFF00","97CE0C","0CCE86"]},d=0;function p(t){return t.replace(/['"<>&]/g," ")}function g(t){return t.replace(/"/g,"%26quot;").replace(/'/g,"%26apos;")}s.title="",s.xaxis=p(t.xcaption),s.yaxis=p(t.ycaption);var f="<graph caption='"+s.title+"' xAxisName='"+s.xaxis+"' yAxisName='"+s.yaxis+"' showValues='0' rotateNames='0' slantLabels='0' showShadow='1' showToolTip='1' formatNumberScale='0'",m=isNaN(o)?0:parseInt(o),A=isNaN(h)?1:h>m?parseInt(h):m+1;f+=" yAxisMinValue='"+parseInt(m)+"'",f+=" yAxisMaxValue='"+parseInt(A)+"'",1==A&&0===m&&0===c&&(c=2),null!=c&&(f+=" decimalPrecision='"+c+"'");var v,w=n.getLocalization("dojo.cldr","number");f+=" thousandSeparator='"+w.group+"'",f+=" decimalSeparator='"+w.decimal+"'",f+=">",f+="<categories>",r.forEach(function(t){f+="<category name='"+g(l.getRenderValue(0,t))+"' />"}),f+="</categories>";for(var x=0;x<i.length;x++){f+="<dataset seriesName='"+g(i[x])+"' color='"+(d=d==u[v="multi"].length?0:d+1,u[v][d])+"'>";for(var b=0;b<e[x].length;b++)f+="<set value='"+e[x][b]+"' />";f+="</dataset>"}return f+="</graph>"}},301:function(t,e,i){var a;void 0===(a=function(){var t=new Object;return void 0===t.FusionChartsFreeUtil&&(t.FusionChartsFreeUtil=new Object),t.FusionChartsFree=function(e,i,a,n,r,s,o,h,c,l,u){document.getElementById&&(this.initialDataSet=!1,this.params=new Object,this.variables=new Object,this.attributes=new Array,e&&this.setAttribute("swf",e),i&&this.setAttribute("id",i),a&&this.setAttribute("width",a),n&&this.setAttribute("height",n),o&&this.addParam("bgcolor",o),this.addParam("quality","high"),this.addParam("allowScriptAccess","always"),this.addVariable("chartWidth",a),this.addVariable("chartHeight",n),r=r||0,this.addVariable("debugMode",r),this.addVariable("DOMId",i),s=s||0,this.addVariable("registerWithJS",s),h=h||"noScale",this.addVariable("scaleMode",h),c=c||"EN",this.addVariable("lang",c),this.detectFlashVersion=l||1,this.autoInstallRedirect=u||1,this.installedVer=t.FusionChartsFreeUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(t.FusionChartsFree.doPrepUnload=!0))},t.FusionChartsFree.prototype={setAttribute:function(t,e){this.attributes[t]=e},getAttribute:function(t){return this.attributes[t]},addParam:function(t,e){this.params[t]=e},getParams:function(){return this.params},addVariable:function(t,e){this.variables[t]=e},getVariable:function(t){return this.variables[t]},getVariables:function(){return this.variables},getVariablePairs:function(){var t,e=new Array,i=this.getVariables();for(t in i)e.push(t+"="+i[t]);return e},getSWFHTML:function(){var t="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){t='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"  ',t+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ',t+='wmode="transparent" ';var e=this.getParams();for(var i in e)t+=[i]+'="'+e[i]+'" ';(a=this.getVariablePairs().join("&")).length>0&&(t+='flashvars="'+a+'"'),t+="/>"}else{t='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">',t+='<param name="movie" value="'+this.getAttribute("swf")+'" />',t+='<param name="wmode" value="transparent" />';var a;e=this.getParams();for(var i in e)t+='<param name="'+i+'" value="'+e[i]+'" />';(a=this.getVariablePairs().join("&")).length>0&&(t+='<param name="flashvars" value="'+a+'" />'),t+="</object>"}return t},setDataURL:function(e){0==this.initialDataSet?(this.addVariable("dataURL",e),this.initialDataSet=!0):t.FusionChartsFreeUtil.getChartObject(this.getAttribute("id")).setDataURL(e)},setDataXML:function(e){0==this.initialDataSet?(this.addVariable("dataXML",e),this.initialDataSet=!0):t.FusionChartsFreeUtil.getChartObject(this.getAttribute("id")).setDataXML(e)},render:function(t){return 1==this.detectFlashVersion&&this.installedVer.major<6?1==this.autoInstallRedirect&&(!!window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.")&&void(window.location="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")):(("string"==typeof t?document.getElementById(t):t).innerHTML=this.getSWFHTML(),document.embeds[this.getAttribute("id")]||window[this.getAttribute("id")]||(window[this.getAttribute("id")]=document.getElementById(this.getAttribute("id"))),!0)}},t.FusionChartsFreeUtil.getPlayerVersion=function(){var e=new t.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var i=navigator.plugins["Shockwave Flash"];i&&i.description&&(e=new t.PlayerVersion(i.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0)for(var a=1,n=3;a;)try{n++,a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+n),e=new t.PlayerVersion([n,0,0])}catch(t){a=null}else{try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(i){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");e=new t.PlayerVersion([6,0,21]),a.AllowScriptAccess="always"}catch(t){if(6==e.major)return e}try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){}}null!=a&&(e=new t.PlayerVersion(a.GetVariable("$version").split(" ")[1].split(",")))}return e},t.PlayerVersion=function(t){this.major=null!=t[0]?parseInt(t[0]):0,this.minor=null!=t[1]?parseInt(t[1]):0,this.rev=null!=t[2]?parseInt(t[2]):0},t.FusionChartsFreeUtil.cleanupSWFs=function(){for(var t=document.getElementsByTagName("OBJECT"),e=t.length-1;e>=0;e--)for(var i in t[e].style.display="none",t[e])"function"==typeof t[e][i]&&(t[e][i]=function(){})},t.FusionChartsFree.doPrepUnload&&(t.unloadSet||(t.FusionChartsFreeUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",t.FusionChartsFreeUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",t.FusionChartsFreeUtil.prepUnload),t.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=function(t){return document.all[t]}),null==Array.prototype.push&&(Array.prototype.push=function(t){return this[this.length]=t,this.length}),t.FusionChartsFreeUtil.getChartObject=function(t){var e=null;return(e=-1==navigator.appName.indexOf("Microsoft Internet")?document.embeds&&document.embeds[t]?document.embeds[t]:window.document[t]:window[t])||(e=document.getElementById(t)),e},t.FusionChartsFreeUtil.updateChartXML=function(e,i){var a=t.FusionChartsFreeUtil.getChartObject(e);a.SetVariable("_root.dataURL",""),a.SetVariable("_root.isNewData","1"),a.SetVariable("_root.newData",i),a.TGotoLabel("/","JavaScriptHandler")},{Chart:t.FusionChartsFree,updateChartXML:t.FusionChartsFreeUtil.updateChartXML}}.apply(e,[]))||(t.exports=a),i.dr("reporting/FusionChartsFree/FusionChartsFree",t)},302:function(t,e,i){var a=i(301),n=i(191),r=i(300),s=i(24),o=i(89),h=i(108),c=i(48),l=i(21),u=i(78),d=i(130),p=i(156),g=i(299);t.exports=s.declare("reporting.widget.ReportChart",{mixins:[o,d,p,h,c],aspect:"",reportid:"",yaxisminimum:"",yaxismaximum:"",yaxisprecision:0,yaxiscaption:"",xaxiscaption:"",charttype:"",nested:!1,startdormant:!1,width:550,height:350,_chartTarget:"",chartTypes:{MSBar2D:i(298),MSLine:i(297),MSArea2D:i(296),MSColumn2D:i(295),MSColumn3D:i(294)},constructor:function(){this.templateString=g,this.domNode=null,this.chartNode=null;var t="",e={},i=[],s=null,o={},h=!1;this.applyContext=function(t,e){this.startdormant=this.getState("dormant",this.startdormant),this.startdormant?(this.startdormant=!1,e&&e()):(this.contextNotification(t),this.refresh(e))},this.actSetupOQLSource=function(t){s=new n({reportid:this.reportid,startdormant:this.startdormant,load:t})},this.actSetupChart=function(t){var i=this.id+"_flashNode",n=this.getChartSize();(e={rendered:!1,node:this.chartNode,flash:new a.Chart(this._chartTarget,i,n.width,n.height,"0","1"),_id:i}).node.id=this.id+"_parentNode",this.loaded(),t()},this.actRunReport=function(t){h=!0,s.execQuery(t)},this.getChartSize=function(){var t=null;if(this.aspect)try{var e=this.aspect.split(/:/);t=parseInt(e[1],10)/parseInt(e[0],10)}catch(t){}return t||(t=.5),{width:l.getContentBox(this.domNode.parentNode).w||this.width,height:this.width*t*.7}},this.actFillChart=function(i){this.domNode.style.display="",t=r({oqlsource:s,ymin:this.yaxisminimum,ymax:this.yaxismaximum,precision:this.yaxisprecision,xcaption:this.xaxiscaption,ycaption:this.yaxiscaption});try{e.rendered?a.updateChartXML(e._id,t):(e.flash.setDataXML(t),e.rendered=!0,e.flash.render(e.node.id))}catch(t){console.error(this.id+": Problem rendering chart : "+t.message)}i&&i()},this.actRegisterUIEvents=function(t){i.push(u.subscribe("report_"+this.mxform.hash,this,"topicUpdate")),t()},this.refresh=function(t){this.sequence(["actRunReport","actFillChart"],t)},this.topicUpdate=function(){this.refresh()},this.contextNotification=function(t){var e=t.getParams();for(var i in e)o[i]=e[i];s.setParams(o)},this.uninitialize=function(){for(var t=0;t<i.length;t++)i[t].remove()},this.storeState=function(t){t("dormant",!h)}},postCreate:function(){this.initContext();var t="context_seed_"+this.mxform.hash,e=u.subscribe(t,this.contextNotification.bind(this));this.addOnDestroy(function(){e.remove()}),this._chartTarget=this.chartTypes[this.charttype],""!=this.yaxisminimum&&(this.yaxisminimum=parseFloat(this.yaxisminimum)),""!=this.yaxismaximum&&(this.yaxismaximum=parseFloat(this.yaxismaximum));var i=["actSetupOQLSource","actSetupChart","actRegisterUIEvents"];this.startdormant||i.push("actRunReport","actFillChart"),this.sequence(i)}})},303:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEQAQAOYAAHula4CpcLHVqYm0e+Xv5TBSHabPnNrp2zSGMfn6+Ory6t7r3oSudVZ6QOz07PL38laLPI+7gOPu40yVSpS2iR13HPD28E6LNO717maNVClMGfX59QNoA/P482GGTNfm1+Lt4fz9/N3q3fr8+4ypgPf59/X49YTAe3u6cmirY+fw59no2XS1bOjx6GOYYP39/dzp22SpW/T49FyARm6vZ/7+/kiGQf3+/fv8++jw6XWxYkaSP9jn2F2ZVuDs4HafZXGaXkFlK1mBVpvGk2qVV0ZsMi9RK1mjVDdcJUtyOV6SSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAARABAAAAfxgBEDDAEAP0BEGRkeHjMNDUlJAwICBgZDmBQUgoSFkgI1NTchIwklJRsdFhgOP0kMAi8hpKYmJqqsCq4BBi80KSk9Jg8PQsZCLUBFAAY4EwIoKErGNEcIHATKP0OlOwYsMTY21tgSREFAQwkbMghDMUdHRdggPudEFOwP1hFKShNIXLhYoARJhgiqjug4UuHEiX9ISMAo6GHAPiMYjVSowALigYIzGORqoUICCRIZjayAUKBBAAcKchCQAGLBAhEHDqz4wLIBAAUqZtYUIQLGAR4fPlzQkMTQIURE/PmDAOHC0khJimgNwjUIkq8FwmoIBAA7"},304:function(t,e){t.exports='<div class="mx-grid mx-reportmatrix" style="display:none;">\n\t<div class="mx-grid-controlbar clearfix" focusindex="0">\n        <div class="mx-grid-pagingbar" dojoAttachPoint="pagingNode"></div>\n        <div class="mx-grid-toolbar" dojoAttachPoint="toolBarNode"></div>\n\t</div>\n\t<div class="mx-grid-content" focusindex="1">\n        <table class="table table-bordered table-striped mx-reportmatrix-table">\n            <thead dojoAttachPoint="theadNode"></thead>\n            <tbody dojoAttachPoint="tbodyNode"></tbody>\n            <tfoot dojoAttachPoint="tfootNode"></tfoot>\n        </table>\n    </div>\n</div>\n'},305:function(t,e,i){var a=i(192),n=i(191),r=i(70),s=i(89),o=i(108),h=i(48),c=i(24),l=i(5),u=(i(14).MxObject,i(78)),d=i(3),p=(i(2),i(130)),g=i(156),f=i(304);t.exports=c.declare("reporting.widget.ReportMatrix",{mixins:[s,p,g,o,h],startdormant:!1,showexportbutton:!1,reportid:"",intervalvalues:"",target:"",pagesize:10,usepaging:!1,columns:null,constructor:function(){this.templateString=f,this.domNode=null,this.theadNode=null,this.tfootNode=null,this.tbodyNode=null,this.toolBarNode=null,this.btFirst=null,this.btPrevious=null,this.btNext=null,this.btLast=null,this.pagingNode=null;var t=null,e=!1,s={},o=[],h={},p=[],g=[],m=[],A=null,v=this;this.applyContext=function(t,e){this.startdormant=this.getState("dormant",this.startdormant),this.startdormant?(this.startdormant=!1,e&&e()):(this.contextNotification(t),this.actRefreshMatrix(function(){v._updatePagingStatus(),e&&e()}))};var w=function(){this.domNode.style.display="",p=t.getSeriesData(),g=t.getSeriesDescriptives(),m=t.getIntervalDescriptives(),h=function(t){for(var e={},i=0;i<t.length;i++)e[t[i]]=t[i];return e}(t.getAggregateRows());var e=t.getSeriesTypes();A=new a(e);var i,n,r=99/(g.length+1);r=r.toString()+"%";var s="",o=l.create("th");o.innerHTML="&nbsp;",o.setAttribute("width","1%"),n=l.create("tr",{},o),this.theadNode.appendChild(n);var c,u={};for(i=0;i<g.length;i++)c=this.columns[i],s=""===(s=g[i].toString())?" ":s,(o=l.create("th",{class:this._getAlignmentClass(c.alignment)},s)).setAttribute("width",c.weight+"%"),c.weight?n.appendChild(o):u[i]=!0;for(i=0;i<m.length;i++){s=m[i].toString(),s=/^\s*$/.test(s)?"&nbsp;":s;var d=l.create("th");d.innerHTML=s,(n=l.create("tr",{},d)).setAttribute("offset",i),null!=h[i]&&(n.className="mx-reportmatrix-aggregate-row");for(var f=0;f<g.length;f++)u[f]||(s=""===(s="boolean"!=typeof(s=null!=p[f][i]?p[f][i]:" ")&&"number"!=typeof s&&""===s?" ":A.getRenderValue(f,s))?" ":s,o=l.create("td",{class:this._getAlignmentClass(this.columns[f].alignment)},s),n.appendChild(o));this.tbodyNode.appendChild(n)}};this.actInitialize=function(t){if(""===this.reportid)throw new Error("No report parameter passed to Report Matrix: aborting!");this.usepaging||(this.pagingNode.style.display="none"),l.empty(this.theadNode),l.empty(this.tbodyNode),l.empty(this.tfootNode),this._fillMatrix=d.hitch(this,w),t()},this.actSetupOQLSource=function(e){t=new n({reportid:this.reportid,page:this.usepaging?this.pagesize:null,startdormant:!0,load:e})},this.actRunReport=function(i){e=!0,t.execQuery(i)},this._fillMatrix=function(){},this.actRefreshMatrix=function(t){this.actRunReport(function(){v._refreshView(),t&&t()})},this._refreshView=function(){this._resetMatrix(),this._updatePagingStatus(),this._fillMatrix()},this.actSetupEvents=function(t){if(o.push(u.subscribe("report_"+this.mxform.hash,this,"topicUpdate")),this.connect(this.tbodyNode,"ondblclick","eventMatrixClicked"),this.showexportbutton){var e=new r({caption:window.mx.ui.translate(this.declaredClass,"excel_btn_caption"),onClick:d.hitch(this,"eventExcelExportClicked"),cssClasses:["reportingReportMatrix_exportButton"],iconUrl:i(303)});this.toolBarNode.appendChild(e.domNode)}else this.toolBarNode.style.display="none";if(this.usepaging){var a=this.isLeftToRight(),n=document.createDocumentFragment(),s=l.create;this.btFirst=new r({iconClass:a?"glyphicon-step-backward":"glyphicon-step-forward",onClick:d.hitch(this,"eventPagingButtonClicked","first")}),n.appendChild(s("#",this.btFirst.domNode," ")),this.btPrevious=new r({iconClass:a?"glyphicon-backward":"glyphicon-forward",onClick:d.hitch(this,"eventPagingButtonClicked","previous")}),n.appendChild(s("#",this.btPrevious.domNode," ")),this._pagingStatusNode=s("div",{class:"dijitInline mx-grid-paging-status"}),n.appendChild(s("#",this._pagingStatusNode," ")),this.btNext=new r({iconClass:a?"glyphicon-forward":"glyphicon-backward",onClick:d.hitch(this,"eventPagingButtonClicked","next")}),n.appendChild(s("#",this.btNext.domNode," ")),this.btLast=new r({iconClass:a?"glyphicon-step-forward":"glyphicon-step-backward",onClick:d.hitch(this,"eventPagingButtonClicked","last")}),n.appendChild(s("#",this.btLast.domNode," ")),this.pagingNode.appendChild(n),l.disableSelection(this.pagingNode)}t&&t()},this._resetMatrix=function(){l.empty(this.theadNode),l.empty(this.tbodyNode),l.empty(this.tfootNode)},this._updatePagingStatus=function(){this.usepaging&&(l.text(this._pagingStatusNode,t.getStatusMessage()),t.atBeginning()?(this.btFirst.set("disabled",!0),this.btPrevious.set("disabled",!0)):(this.btFirst.set("disabled",!1),this.btPrevious.set("disabled",!1)),t.atEnd()?(this.btNext.set("disabled",!0),this.btLast.set("disabled",!0)):(this.btNext.set("disabled",!1),this.btLast.set("disabled",!1)))},this.topicUpdate=function(){t.first(),this.actRefreshMatrix()},this.contextNotification=function(e){var i=e.getParams();for(var a in i)s[a]=i[a];t.first(),t.setParams(s)},this.contextUpdate=function(){},this.eventMatrixClicked=function(t){var e=t.target.parentNode,i=parseInt(e.getAttribute("offset")),a=this.createContext();a.dupFrom(this.mxcontext);var n=this.intervalvalues;if(""!==n)for(var r=0;r<n.length;r++){var s=n[r];if(""!==s&&!a.hasParam(s)){var o=p[r][i];a.setParam(s,o)}}""!==this.target&&window.mx.ui.openForm(this.target,{location:"content",context:a})},this.eventExcelExportClicked=function(){window.mx.data.generateExcelReport(this.reportid,t.getQueryParameters(),function(t){window.mx.ui.downloadFile({mxobject:t})})},this.eventPagingButtonClicked=function(e){switch(e.toLowerCase()){case"first":t.atBeginning()||t.first(d.hitch(this,"_refreshView"));break;case"last":t.atEnd()||t.last(d.hitch(this,"_refreshView"));break;case"next":t.atEnd()||t.next(d.hitch(this,"_refreshView"));break;case"previous":t.atBeginning()||t.previous(d.hitch(this,"_refreshView"))}},this.uninitialize=function(){try{for(var t=0;t<o.length;t++)o[t].remove();c.destroyWidgetsIn(this.toolBarNode)}catch(t){console.error(this.id+" Cannot uninitialize: "+t.message)}},this.storeState=function(t){t("dormant",!e)},this._getAlignmentClass=function(t){return window.mx.ui.isRtl()&&(t="right"==t?"left":"right"),{left:"mx-left-aligned",right:"mx-right-aligned",center:"mx-center-aligned"}[t]}},postCreate:function(){this.initContext();var t="context_seed_"+this.mxform.hash,e=u.subscribe(t,d.hitch(this,"contextNotification"));this.addOnDestroy(function(){e.remove()}),this.sequence(["actInitialize","actSetupOQLSource","actSetupEvents","actLoaded"])}})},335:function(t,e,i){var a=i(305),n=i(302),r=i(293),s=i(292),o=i(291);window.reporting={widget:{ReportMatrix:a,ReportChart:n,ReportTrigger:r,ReportParameter:s,DateRange:o}}}}]);