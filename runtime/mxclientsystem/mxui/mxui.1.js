/* @preserve
    Copyright (c) 2005-2016, Mendix bv. All rights reserved.
    See mxclientsystem/licenses.txt for third party licenses that apply.
*/
webpackJsonp([1],{385:function(t,e,i){var a=i(485),r=i(484),n=i(487),s=i(486),o=i(483);window.reporting={widget:{ReportMatrix:a,ReportChart:r,ReportTrigger:n,ReportParameter:s,DateRange:o}}},448:function(t,e){function i(t){this.getRenderValue=function(e,i){var a=t[e];switch(a.type){case"Boolean":var r=String(i);return r.match(/true|false/)?window.mx.ui.translate("mxui.widget.DataGrid",r):i;case"Date":case"DateTime":if("string"==typeof i)return i;var n=window.mx.parser.formatDate(i,{datePattern:a.format});return window.mx.ui.isRtl()&&n&&(n=n.split("‏/").reverse().join("/")),n;case"Enum":if(a.options)for(var s=0;s<a.options.length;s++){var o=a.options[s];for(var h in o){if(i==h)return o[h];break}}return i;default:return String(i)}}}t.exports=i},449:function(t,e,i){var a=i(121),r=i(4),n=i(5),s=function(t){var e="reporting.lib.OQLSource",i=t.reportid||null,s=t.startdormant||!0,o=t.page,h={information:{title:"Empty report",xaxis:"X",yaxis:"Y"},interval_descriptives:[],series_descriptives:[],series_data:[]},c={},l={},u=0,d=0,g=function(t){window.mx.data.getReportParameters(i,function(e){c=e,t&&t()})},p=function(t){a.register(i,c),t&&t()},f=function(t){window.mx.data.generateReport(i,u,o,l,function(e){h=e,e.information&&e.information.count&&(d=e.information.count),t&&t()},function(e){window.mx.onError(e),t()})};this.execQuery=function(t){f(t||function(){})};var m=this.execQuery.bind(this);this.getQueryParameters=function(){return l},this.getInformation=function(){return h.information},this.getSeriesDescriptives=function(){return h.series_descriptives},this.getAggregateRows=function(){return h.aggregate_rows||[]},this.getSeriesTypes=function(){return h.series_info||[]},this.getIntervalType=function(){return h.interval_info||{}},this.getIntervalDescriptives=function(){if(h.interval_descriptives&&h.interval_descriptives.length&&0!==h.interval_descriptives.length)return h.interval_descriptives;if(h.series_data.length>0){for(var t=[],e=0;e<h.series_data[0].length;e++)t.push(" ");return t}return[]},this.getSeriesData=function(t){return t?h.series_data[t]:h.series_data},this.setParams=function(t){l={};for(var i in t)i.match(/_config_hash/)?i.match(/_config_hash/)||n.warn(e+".setParams : PARAMETER "+i+" is not valid for this OQLSource"):""!==t[i]&&(l[i]=t[i])},this.size=function(){return d},this.getSize=function(){return this.size()},this.getPageSize=function(){return o},this.setPageSize=function(t,e){o=t,e&&m(e)},this.getOffset=function(){return u},this.setOffset=function(t,e){u=t,e&&m(e)},this.setPageSize=function(t,e){o=t,e&&m(e)},this.getOffset=function(){return u},this.first=function(t){u=0,t&&m(t)},this.last=function(t){u=o>=d?0:d-o,t&&m(t)},this.next=function(t){u>=d-o?u=d-o:u+=o,t&&m(t)},this.previous=function(t){d<o||u-o<=0?u=0:u-=o,t&&m(t)},this._getstats=function(){var t=h;if(t){var e=t.information.count;null==e&&(e=d);var i=t.series_data,a=t.aggregate_rows?t.aggregate_rows.length:0,r=i.length?i[0].length-a:0,n=0!==r?u+1:u,s=u+r;return[n,s,e]}return[0,0,0]},this.getStatusMessage=function(){return window.mx.ui.translate("mxui.lib.MxDataSource","status",this._getstats())},this.atBeginning=function(){return 0===u},this.atEnd=function(){var t=this._getstats();return t[1]>=t[2]},r.sequence([g.bind(this),p.bind(this),s?function(t){t()}:f.bind(this)],function(){t.load&&setTimeout(t.load,1)})};t.exports=s},480:function(t,e,i){var a,r;a=[],r=function(){var t=new Object;return"undefined"==typeof t.FusionChartsFreeUtil&&(t.FusionChartsFreeUtil=new Object),t.FusionChartsFree=function(e,i,a,r,n,s,o,h,c,l,u){document.getElementById&&(this.initialDataSet=!1,this.params=new Object,this.variables=new Object,this.attributes=new Array,e&&this.setAttribute("swf",e),i&&this.setAttribute("id",i),a&&this.setAttribute("width",a),r&&this.setAttribute("height",r),o&&this.addParam("bgcolor",o),this.addParam("quality","high"),this.addParam("allowScriptAccess","always"),this.addVariable("chartWidth",a),this.addVariable("chartHeight",r),n=n?n:0,this.addVariable("debugMode",n),this.addVariable("DOMId",i),s=s?s:0,this.addVariable("registerWithJS",s),h=h?h:"noScale",this.addVariable("scaleMode",h),c=c?c:"EN",this.addVariable("lang",c),this.detectFlashVersion=l?l:1,this.autoInstallRedirect=u?u:1,this.installedVer=t.FusionChartsFreeUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(t.FusionChartsFree.doPrepUnload=!0))},t.FusionChartsFree.prototype={setAttribute:function(t,e){this.attributes[t]=e},getAttribute:function(t){return this.attributes[t]},addParam:function(t,e){this.params[t]=e},getParams:function(){return this.params},addVariable:function(t,e){this.variables[t]=e},getVariable:function(t){return this.variables[t]},getVariables:function(){return this.variables},getVariablePairs:function(){var t,e=new Array,i=this.getVariables();for(t in i)e.push(t+"="+i[t]);return e},getSWFHTML:function(){var t="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){t='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"  ',t+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ',t+='wmode="transparent" ';var e=this.getParams();for(var i in e)t+=[i]+'="'+e[i]+'" ';var a=this.getVariablePairs().join("&");a.length>0&&(t+='flashvars="'+a+'"'),t+="/>"}else{t='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">',t+='<param name="movie" value="'+this.getAttribute("swf")+'" />',t+='<param name="wmode" value="transparent" />';var e=this.getParams();for(var i in e)t+='<param name="'+i+'" value="'+e[i]+'" />';var a=this.getVariablePairs().join("&");a.length>0&&(t+='<param name="flashvars" value="'+a+'" />'),t+="</object>"}return t},setDataURL:function(e){if(0==this.initialDataSet)this.addVariable("dataURL",e),this.initialDataSet=!0;else{var i=t.FusionChartsFreeUtil.getChartObject(this.getAttribute("id"));i.setDataURL(e)}},setDataXML:function(e){if(0==this.initialDataSet)this.addVariable("dataXML",e),this.initialDataSet=!0;else{var i=t.FusionChartsFreeUtil.getChartObject(this.getAttribute("id"));i.setDataXML(e)}},render:function(t){if(!(1==this.detectFlashVersion&&this.installedVer.major<6)){var e="string"==typeof t?document.getElementById(t):t;return e.innerHTML=this.getSWFHTML(),document.embeds[this.getAttribute("id")]||window[this.getAttribute("id")]||(window[this.getAttribute("id")]=document.getElementById(this.getAttribute("id"))),!0}if(1!=this.autoInstallRedirect)return!1;var i=window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.");return!!i&&void(window.location="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")}},t.FusionChartsFreeUtil.getPlayerVersion=function(){var e=new t.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var i=navigator.plugins["Shockwave Flash"];i&&i.description&&(e=new t.PlayerVersion(i.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0)for(var a=1,r=3;a;)try{r++,a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+r),e=new t.PlayerVersion([r,0,0])}catch(t){a=null}else{try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(i){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");e=new t.PlayerVersion([6,0,21]),a.AllowScriptAccess="always"}catch(t){if(6==e.major)return e}try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){}}null!=a&&(e=new t.PlayerVersion(a.GetVariable("$version").split(" ")[1].split(",")))}return e},t.PlayerVersion=function(t){this.major=null!=t[0]?parseInt(t[0]):0,this.minor=null!=t[1]?parseInt(t[1]):0,this.rev=null!=t[2]?parseInt(t[2]):0},t.FusionChartsFreeUtil.cleanupSWFs=function(){for(var t=document.getElementsByTagName("OBJECT"),e=t.length-1;e>=0;e--){t[e].style.display="none";for(var i in t[e])"function"==typeof t[e][i]&&(t[e][i]=function(){})}},t.FusionChartsFree.doPrepUnload&&(t.unloadSet||(t.FusionChartsFreeUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",t.FusionChartsFreeUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",t.FusionChartsFreeUtil.prepUnload),t.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=function(t){return document.all[t]}),null==Array.prototype.push&&(Array.prototype.push=function(t){return this[this.length]=t,this.length}),t.FusionChartsFreeUtil.getChartObject=function(t){var e=null;return e=navigator.appName.indexOf("Microsoft Internet")==-1?document.embeds&&document.embeds[t]?document.embeds[t]:window.document[t]:window[t],e||(e=document.getElementById(t)),e},t.FusionChartsFreeUtil.updateChartXML=function(e,i){var a=t.FusionChartsFreeUtil.getChartObject(e);a.SetVariable("_root.dataURL",""),a.SetVariable("_root.isNewData","1"),a.SetVariable("_root.newData",i),a.TGotoLabel("/","JavaScriptHandler")},{Chart:t.FusionChartsFree,updateChartXML:t.FusionChartsFreeUtil.updateChartXML}}.apply(e,a),!(void 0!==r&&(t.exports=r)),i.dr("reporting/FusionChartsFree/FusionChartsFree",t)},481:function(t,e,i){var a=i(448),r=i(34);t.exports=function(t){function e(t){return m=m==f[t].length?0:m+1,f[t][m]}function i(){return r.getLocalization("dojo.cldr","number")}function n(t){return t.replace(/['"<>&]/g," ")}function s(t){return t.replace(/"/g,"%26quot;").replace(/'/g,"%26apos;")}var o=t.oqlsource.getSeriesData(),h=t.oqlsource.getSeriesDescriptives(),c=t.oqlsource.getIntervalDescriptives(),l=t.oqlsource.getInformation(),u=null,d=null,g=0,p=new a([t.oqlsource.getIntervalType()]);"number"==typeof t.ymin&&(u=t.ymin),"number"==typeof t.ymax&&(d=t.ymax),"number"==typeof t.precision&&(g=t.precision);var f={};f.multi=["38BDFF","387EFF","5638FF","B938FF","FF38A6","FF4538","FF8938","FFB538","FFDD38","F9FF38","C7F627","21F228"],f.single=["0099FF","0037FF","4800FF","C800FF","FF006A","FF3300","FF7900","FFAE00","FFE100","EAFF00","97CE0C","0CCE86"];var m=0;l.title="",l.xaxis=n(t.xcaption),l.yaxis=n(t.ycaption);var A="<graph caption='"+l.title+"' xAxisName='"+l.xaxis+"' yAxisName='"+l.yaxis+"' showValues='0' rotateNames='0' slantLabels='0' showShadow='1' showToolTip='1' formatNumberScale='0'",v=isNaN(u)?0:parseInt(u),w=isNaN(d)?1:d>v?parseInt(d):v+1;A+=" yAxisMinValue='"+parseInt(v)+"'",A+=" yAxisMaxValue='"+parseInt(w)+"'",1==w&&0===v&&0===g&&(g=2),null!=g&&(A+=" decimalPrecision='"+g+"'");var b=i();A+=" thousandSeparator='"+b.group+"'",A+=" decimalSeparator='"+b.decimal+"'",A+=">",A+="<categories>",c.forEach(function(t){A+="<category name='"+s(p.getRenderValue(0,t))+"' />"}),A+="</categories>";for(var x=0;x<h.length;x++){A+="<dataset seriesName='"+s(h[x])+"' color='"+e("multi")+"'>";for(var _=0;_<o[x].length;_++)A+="<set value='"+o[x][_]+"' />";A+="</dataset>"}return A+="</graph>"}},482:function(t,e,i){function a(){return n.locale.match(/nl/i)?1:0}var r=i(46),n=i(12),s=864e5,o=7*s,h=4;t.exports={weekMs:o,dayMs:s,getFirstWeekOfYear:function(t){var e=new Date(t,0,1),i=e.getDay(),n=e.getTime();if(0===i)return e.getTime();if(n-=(i-a())*s,e=new Date(n),0!==e.getMonth()){var c=r.getDaysInMonth(e)-(7-h);if(e.getDate()<=c)return n+o}else{var l=1+h;if(e.getDate()>=l)return n-o}return n}}},483:function(t,e,i){function a(t,e){for(var i=[],a=t;a<=e;a++)i.push({display:a.toString(),from:new Date(a,0,1),to:new Date(a+1,0,0)});return i}var r=i(482),n=i(30),s=i(8),o=i(2),h=i(122),c=i(92),l=i(74),u=i(3),d=i(0),g=d(s,{_items:null,postCreate:function(){this.connect(this.domNode,"change","onChange"),o.setSelectOptions(this.domNode,{},"")},setItems:function(t){if(t){this._items=t;var e={};u.forEach(this._items,function(t,i){e[i]=t.display}),o.setSelectOptions(this.domNode,e,"")}},getDateInterval:function(){var t=o.getSelectedValue(this.domNode);return""!==t?this._items[t]:{from:"",to:""}},_getValueAttr:function(){return o.getSelectedText(this.domNode)},_setValueAttr:function(t){o.selectOptionByText(this.domNode,t)},onChange:function(){}}),p={set:function(){},get:function(){return""},onChange:function(){},setItems:function(){}},f={period:function(t){for(var e=r.getFirstWeekOfYear(t),i=e,a=[],n=t,s=1,o=r.getFirstWeekOfYear(t+1);t==n&&o>i;){var h=e;i=e+=4*r.weekMs,14==s&&(i=o),i-=r.dayMs,a.push({from:new Date(h),to:new Date(i),display:String(s++)}),t=new Date(e).getUTCFullYear()}return a},quarter:function(t){return u.map([0,1,2,3],function(e){return{display:(e+1).toString(),from:new Date(t,3*e,1),to:new Date(t,3*e+3,0)}})},month:function(t){return u.map(c.getNames("months","wide"),function(e,i){return{display:e,from:new Date(t,i,1),to:new Date(t,i+1,0)}})},week:function(t){var e=new Date(r.getFirstWeekOfYear(t)),i=[],a=1;do{var n=new Date(e.getTime()+r.weekMs-1);i.push({display:"Week "+(a++).toString(),from:e,to:n}),e=new Date(n.getTime()+1)}while(e.getFullYear()==t);return i}},m=["period","quarter","month","week"],A=m.concat(["year"]),v=d([s,n],{reportid:"",parameter:"",startYear:null,endYear:null,hasDates:!0,_periodSelectorsParameterName:"",_periodSelectors:null,_dateInputs:null,_value:null,postCreate:function(){this._periodSelectorsParameterName=this.parameter.toString()+"_config_hash",this._periodSelectors={},this._dateInputs={},this._value={from:"",to:""},this._buildPeriodSelectors(),this._periodSelectors.year.setItems(a(this.startYear,this.endYear)),this._subscribeToYearChange(),this._subscribeToPeriodChange(),this.hasDates&&(this._buildDateInputs(),this._subscribeToDateChange())},_buildPeriodSelectors:function(){var t=this;u.forEach(A,function(e){var i=t.domNode.querySelector("select[name='"+e+"']");t._periodSelectors[e]=i?new g({},i):p})},_buildDateInputs:function(){var t=this;u.forEach(["from","to"],function(e,i){var a=t.domNode.querySelector("input[name='"+e+"']"),r=new h({selector:"date"});a.parentNode.replaceChild(r.domNode,a),t._dateInputs[e]=r})},_subscribeToYearChange:function(){var t=this;this.connect(this._periodSelectors.year,"onChange",function(){var e=this._periodSelectors.year.get("value");""==e?u.forEach(m,function(e){t._periodSelectors[e].setItems([])}):(this._setValue(this._periodSelectors.year.getDateInterval()),u.forEach(m,function(i){var a=t._periodSelectors[i].get("value");t._periodSelectors[i].setItems(f[i](e)),""!=a&&(t._periodSelectors[i].set("value",a),t._periodSelectors[i].onChange())}),this._onChange())})},_subscribeToPeriodChange:function(){var t=this;u.forEach(m,function(e){var i=t._periodSelectors[e];t.connect(i,"onChange",function(){""!==i.get("value")&&(t._setValue(i.getDateInterval()),u.forEach(m,function(i){i!=e&&t._periodSelectors[i].set("value","")}),t._onChange())})})},_subscribeToDateChange:function(){var t=this;u.forEach(["from","to"],function(e){t.connect(t._dateInputs[e],"onChange",function(){var i=t._dateInputs[e].get("value");t._value[e]=i,""!==i&&(u.forEach(m,function(e){t._periodSelectors[e].set("value","")}),i.getFullYear()!=t._periodSelectors.year.get("value")&&t._periodSelectors.year.set("value","")),t._onChange()})})},startup:function(){this.domNode.parentNode.style.padding="0px",this.inherited(arguments)},update:function(t,e){var i=this.getState("value",this.mxcontext.hasParam(this.parameter)?this.mxcontext.getParam(this.parameter):""),a=this.getState("config",this.mxcontext.hasParam(this._periodSelectorsParameterName)?this.mxcontext.getParam(this._periodSelectorsParameterName):""),r=this;if(a&&(this._periodSelectors.year.set("value",a.year),this._periodSelectors.year.onChange(),u.forEach(m,function(t){r._periodSelectors[t].set("value",a[t])})),i){var n="",s="";i.length?(n=new Date(i[0]),s=new Date(i[1])):""!=i&&(n=s=new Date(i)),this.hasDates&&(this._dateInputs.from.set("value",n),this._dateInputs.to.set("value",s)),this._value={from:n,to:s}}this._onChange(),e&&e()},_setValue:function(t){this.hasDates&&(this._dateInputs.from.set("value",t.from),this._dateInputs.to.set("value",t.to)),this._value=t},_getValue:function(){return""!=this._value.from&&""!=this._value.to?[this._value.from.getTime(),this._value.to.getTime()]:""},_getSelectorConfig:function(){var t=this,e={};return u.forEach(A,function(i){e[i]=t._periodSelectors[i].get("value")}),e},_onChange:function(){this.mxcontext.setParam(this.parameter,this._getValue()),this.mxcontext.setParam(this._periodSelectorsParameterName,this._getSelectorConfig()),l.publish("context_seed_"+this.mxform.hash,this.mxcontext)},storeState:function(t){t("value",this._getValue()),t("config",this._getSelectorConfig())}});t.exports=v},484:function(t,e,i){var a=i(480),r=i(449),n=i(481),s=i(18),o=i(73),h=i(91),c=i(30),l=i(11),u=i(45),d=i(120),g=i(208),p=i(508);t.exports=s.declare("reporting.widget.ReportChart",{mixins:[o,d,g,h,c],aspect:"",reportid:"",yaxisminimum:"",yaxismaximum:"",yaxisprecision:0,yaxiscaption:"",xaxiscaption:"",charttype:"",nested:!1,startdormant:!1,width:550,height:350,_chartTarget:"",chartTypes:{MSBar2D:i(575),MSLine:i(578),MSArea2D:i(574),MSColumn2D:i(576),MSColumn3D:i(577)},constructor:function(){this.templateString=p,this.domNode=null,this.chartNode=null;var t="",e={},i=[],s=null,o={},h=!1;this.applyContext=function(t,e){this.startdormant=this.getState("dormant",this.startdormant),this.startdormant?(this.startdormant=!1,e&&e()):(this.contextNotification(t),this.refresh(e))},this.actSetupOQLSource=function(t){s=new r({reportid:this.reportid,startdormant:this.startdormant,load:t})},this.actSetupChart=function(t){var i=this.id+"_flashNode",r=this.getChartSize();e={rendered:!1,node:this.chartNode,flash:new a.Chart(this._chartTarget,i,r.width,r.height,"0","1"),_id:i},e.node.id=this.id+"_parentNode",this.loaded(),t()},this.actRunReport=function(t){h=!0,s.execQuery(t)},this.getChartSize=function(){var t=null;if(this.aspect)try{var e=this.aspect.split(/:/);t=parseInt(e[1],10)/parseInt(e[0],10)}catch(t){logger.warn(this.id+".actSetupChart : error finding aspect ration, defaulting to 1:2",t)}t||(t=.5);var i=l.getContentBox(this.domNode.parentNode);return{width:i.w||this.width,height:this.width*t*.7}},this.actFillChart=function(i){this.domNode.style.display="",t=n({oqlsource:s,ymin:this.yaxisminimum,ymax:this.yaxismaximum,precision:this.yaxisprecision,xcaption:this.xaxiscaption,ycaption:this.yaxiscaption});try{e.rendered?a.updateChartXML(e._id,t):(e.flash.setDataXML(t),e.rendered=!0,e.flash.render(e.node.id))}catch(t){logger.error(this.id+".actFillChart : Problem rendering chart : "+t.message)}i&&i()},this.actRegisterUIEvents=function(t){i.push(u.subscribe("report_"+this.mxform.hash,this,"topicUpdate")),t()},this.refresh=function(t){this.sequence(["actRunReport","actFillChart"],t)},this.topicUpdate=function(){this.refresh()},this.contextNotification=function(t){var e=t.getParams();for(var i in e)o[i]=e[i];s.setParams(o)},this.uninitialize=function(){for(var t=0;t<i.length;t++)i[t].remove()},this.storeState=function(t){t("dormant",!h)}},postCreate:function(){this.initContext();var t="context_seed_"+this.mxform.hash,e=u.subscribe(t,this.contextNotification.bind(this));this.addOnDestroy(function(){e.remove()}),this._chartTarget=this.chartTypes[this.charttype],""!=this.yaxisminimum&&(this.yaxisminimum=parseFloat(this.yaxisminimum)),""!=this.yaxismaximum&&(this.yaxismaximum=parseFloat(this.yaxismaximum));var i=["actSetupOQLSource","actSetupChart","actRegisterUIEvents"];this.startdormant||i.push("actRunReport","actFillChart"),this.sequence(i)}})},485:function(t,e,i){var a=i(448),r=i(449),n=i(41),s=i(73),o=i(91),h=i(30),c=i(18),l=i(2),u=(i(47),i(45)),d=i(1),g=(i(0),i(120)),p=i(208),f=i(509);t.exports=c.declare("reporting.widget.ReportMatrix",{mixins:[s,g,p,o,h],startdormant:!1,showexportbutton:!1,reportid:"",intervalvalues:"",target:"",pagesize:10,usepaging:!1,columns:null,constructor:function(){function t(t){for(var e={},i=0;i<t.length;i++)e[t[i]]=t[i];return e}this.templateString=f,this.domNode=null,this.theadNode=null,this.tfootNode=null,this.tbodyNode=null,this.toolBarNode=null,this.btFirst=null,this.btPrevious=null,this.btNext=null,this.btLast=null,this.pagingNode=null;var e=null,s=!1,o={},h=[],g={},p=[],m=[],A=[],v=null,w=this,b=" ";this.applyContext=function(t,e){this.startdormant=this.getState("dormant",this.startdormant),this.startdormant?(this.startdormant=!1,e&&e()):(this.contextNotification(t),this.actRefreshMatrix(function(){w._updatePagingStatus(),e&&e()}))};var x=function(){this.domNode.style.display="",p=e.getSeriesData(),m=e.getSeriesDescriptives(),A=e.getIntervalDescriptives(),g=t(e.getAggregateRows());var i=e.getSeriesTypes();v=new a(i);var r=99/(m.length+1);r=r.toString()+"%";var n,s,o="",h=l.create("th");h.innerHTML="&nbsp;",h.setAttribute("width","1%"),s=l.create("tr",{},h),this.theadNode.appendChild(s);var c,u={};for(n=0;n<m.length;n++)c=this.columns[n],o=m[n].toString(),o=""===o?" ":o,h=l.create("th",{class:this._getAlignmentClass(c.alignment)},o),h.setAttribute("width",c.weight+"%"),c.weight?s.appendChild(h):u[n]=!0;for(n=0;n<A.length;n++){o=A[n].toString(),o=/^\s*$/.test(o)?"&nbsp;":o;var d=l.create("th");d.innerHTML=o,s=l.create("tr",{},d),s.setAttribute("offset",n),null!=g[n]&&(s.className="mx-reportmatrix-aggregate-row");for(var f=0;f<m.length;f++)u[f]||(o=null!=p[f][n]?p[f][n]:b,o="boolean"!=typeof o&&"number"!=typeof o&&""===o?" ":v.getRenderValue(f,o),o=""===o?" ":o,h=l.create("td",{class:this._getAlignmentClass(this.columns[f].alignment)},o),s.appendChild(h));this.tbodyNode.appendChild(s)}};this.actInitialize=function(t){if(""===this.reportid)throw logger.error(this.id+".actInitialize : No report parameter passed. Aborting!"),"No report parameter passed to Report Matrix : aborting!";this.usepaging||(this.pagingNode.style.display="none");try{l.empty(this.theadNode),l.empty(this.tbodyNode),l.empty(this.tfootNode)}catch(t){logger.warn(this.id+".actInitialize : can't clear body : "+t.message)}this._fillMatrix=d.hitch(this,x),t()},this.actSetupOQLSource=function(t){e=new r({reportid:this.reportid,page:this.usepaging?this.pagesize:null,startdormant:!0,load:t})},this.actRunReport=function(t){s=!0,e.execQuery(t)},this._fillMatrix=function(){},this.actRefreshMatrix=function(t){this.actRunReport(function(){w._refreshView(),t&&t()})},this._refreshView=function(){this._resetMatrix(),this._updatePagingStatus(),this._fillMatrix()},this.actSetupEvents=function(t){if(h.push(u.subscribe("report_"+this.mxform.hash,this,"topicUpdate")),this.connect(this.tbodyNode,"ondblclick","eventMatrixClicked"),this.showexportbutton){var e=new n({caption:window.mx.ui.translate(this.declaredClass,"excel_btn_caption"),onClick:d.hitch(this,"eventExcelExportClicked"),cssClasses:["reportingReportMatrix_exportButton"],iconUrl:i(579)});this.toolBarNode.appendChild(e.domNode)}else this.toolBarNode.style.display="none";if(this.usepaging){var a=this.isLeftToRight(),r=document.createDocumentFragment(),s=l.create;this.btFirst=new n({iconClass:a?"glyphicon-step-backward":"glyphicon-step-forward",onClick:d.hitch(this,"eventPagingButtonClicked","first")}),r.appendChild(s("#",this.btFirst.domNode," ")),this.btPrevious=new n({iconClass:a?"glyphicon-backward":"glyphicon-forward",onClick:d.hitch(this,"eventPagingButtonClicked","previous")}),r.appendChild(s("#",this.btPrevious.domNode," ")),this._pagingStatusNode=s("div",{class:"dijitInline mx-grid-paging-status"}),r.appendChild(s("#",this._pagingStatusNode," ")),this.btNext=new n({iconClass:a?"glyphicon-forward":"glyphicon-backward",onClick:d.hitch(this,"eventPagingButtonClicked","next")}),r.appendChild(s("#",this.btNext.domNode," ")),this.btLast=new n({iconClass:a?"glyphicon-step-forward":"glyphicon-step-backward",onClick:d.hitch(this,"eventPagingButtonClicked","last")}),r.appendChild(s("#",this.btLast.domNode," ")),this.pagingNode.appendChild(r),l.disableSelection(this.pagingNode)}t&&t()},this._resetMatrix=function(){try{l.empty(this.theadNode),l.empty(this.tbodyNode),l.empty(this.tfootNode)}catch(t){logger.warn(this.id+"_resetMatrix : can't clear body : "+t.message)}},this._updatePagingStatus=function(){this.usepaging&&(l.text(this._pagingStatusNode,e.getStatusMessage()),e.atBeginning()?(this.btFirst.set("disabled",!0),this.btPrevious.set("disabled",!0)):(this.btFirst.set("disabled",!1),this.btPrevious.set("disabled",!1)),e.atEnd()?(this.btNext.set("disabled",!0),this.btLast.set("disabled",!0)):(this.btNext.set("disabled",!1),this.btLast.set("disabled",!1)))},this.topicUpdate=function(){e.first(),this.actRefreshMatrix()},this.contextNotification=function(t){var i=t.getParams();for(var a in i)o[a]=i[a];e.first(),e.setParams(o)},this.contextUpdate=function(){},this.eventMatrixClicked=function(t){var e=t.target,i=e.parentNode,a=parseInt(i.getAttribute("offset")),r=this.createContext();r.dupFrom(this.mxcontext);var n=this.intervalvalues;if(""!==n)try{for(var s=0;s<n.length;s++){var o=n[s];if(""!==o&&!r.hasParam(o)){var h=p[s][a];r.setParam(o,h)}}}catch(t){logger.warn(this.id+".eventMatrixClicked : error setting interval values : "+t.message)}""!==this.target?window.mx.router.openFormInContent(this.target,"",r):logger.warn(this.id+".eventMatrixClicked : No action configured for this ReportMatrix ..")},this.eventExcelExportClicked=function(){window.mx.data.generateExcelReport(this.reportid,e.getQueryParameters(),function(t){window.mx.ui.downloadFile({mxobject:t})})},this.eventPagingButtonClicked=function(t){switch(t.toLowerCase()){case"first":e.atBeginning()||e.first(d.hitch(this,"_refreshView"));break;case"last":e.atEnd()||e.last(d.hitch(this,"_refreshView"));break;case"next":e.atEnd()||e.next(d.hitch(this,"_refreshView"));break;case"previous":e.atBeginning()||e.previous(d.hitch(this,"_refreshView"))}},this.uninitialize=function(){try{for(var t=0;t<h.length;t++)h[t].remove();c.destroyWidgetsIn(this.toolBarNode)}catch(t){logger.warn(this.id+".uninitialize : error : "+t.message)}},this.storeState=function(t){t("dormant",!s)},this._getAlignmentClass=function(t){return window.mx.ui.isRtl()&&(t="right"==t?"left":"right"),{left:"mx-left-aligned",right:"mx-right-aligned",center:"mx-center-aligned"}[t]}},postCreate:function(){this.initContext();var t="context_seed_"+this.mxform.hash,e=u.subscribe(t,d.hitch(this,"contextNotification"));this.addOnDestroy(function(){e.remove()}),this.sequence(["actInitialize","actSetupOQLSource","actSetupEvents","actLoaded"])}})},486:function(t,e,i){function a(t){var e=String(t);return e.match(/true|false/)?mx.ui.translate("mxui.widget.DataGrid",e):t}function r(t){var e="reporting.widget.ReportParameter";return""===t[0]&&""===t[1]?window.mx.ui.translate(e,"all"):""===t[0]?window.mx.ui.translate(e,"less_than",t[1].toString()):""===t[1]?window.mx.ui.translate(e,"greater_than",t[0].toString()):window.mx.ui.translate(e,"from_to",[t[0].toString(),t[1].toString()])}function n(t,e){var i=[];if("enum"==e)i=t;else if("boolean"==e||"datetime"==e)i="string"==typeof t[0]?t.map(function(t){return[t,t]}):t;else if("decimal"==e)if(t.isRange)i=t.values.map(function(t,e){return[e,r(t)]});else{i={};for(var n,s=0;n=t.values[s];s++)if(""!==n[0]&&""!==n[1])for(var h=new o(n[0]),c=new o(n[1]),l=h;l.lt(c);l=l.plus(1))i[l.toString()]=l.toString()}else t.values?i=t.values:(logger.warn("reporting.widget.ReportParameter.buildParams : Don't know how to build params, defaulting"),i=t);if(null!=i.length){var u=i;i={},u.forEach(function(t){i[t[0]]=a(t[1]||t[0])})}return i}var s=i(121),o=i(33),h=i(30),c=i(8),l=i(2),u=i(4),d=i(74),g=i(0),p=l.create,f=g([c,h],{parameter:"",paramtype:"",reportid:"",autoLoad:!1,_selectNode:null,_parameterInfo:null,buildRendering:function(){this.domNode=p("div",{class:"reportingReportParameter"},this._selectNode=p("select",{class:"form-control"})),this.connect(this._selectNode,"change",function(t){t.stopPropagation(),this._onChange()})},postCreate:function(){var t=this;s.retrieve(this.reportid,function(e){if(t._parameterInfo=e[t.parameter],!t._parameterInfo)return void t.set("loaded",!0);var i=n(t._parameterInfo,t.paramtype);l.setSelectOptions(t._selectNode,i,""),t.set("loaded",!0)})},update:function(t,e){var i=this.getState("value",this.mxcontext.hasParam(this.parameter)?this.mxcontext.getParam(this.parameter):void 0);if(void 0!==i)if("decimal"==this.paramtype){if(this._parameterInfo.isRange&&!(i instanceof Array)){var a=new o(i);i=u.find(this._parameterInfo.values,function(t){return(""===t[0]||a.gte(t[0]))&&(""===t[1]||a.lt(t[1]))})}var n=i instanceof Array?r(i):i;l.selectOptionByText(this._selectNode,n)}else l.selectOptionByValue(this._selectNode,i.toString());else l.selectOptionByValue(this._selectNode,"");this._onChange(),e&&e()},_getValue:function(){var t=l.getSelectedValue(this._selectNode);return this._parameterInfo.isRange&&""!=t&&(t=this._parameterInfo.values[parseInt(t,10)]),t},_onChange:function(){this.mxcontext.setParam(this.parameter,this._getValue()),d.publish("context_seed_"+this.mxform.hash,this.mxcontext)},storeState:function(t){t("value",this._getValue())}});t.exports=f},487:function(t,e,i){var a=i(75),r=i(6),n=i(45),s=i(0);t.exports=s(a,{declaredClass:"reporting.widget.ReportTrigger",buildRendering:function(){this.inherited(arguments),r.add(this.domNode,"reportingReportTrigger")},onClick:function(){n.publish("report_"+this.mxform.hash,["runreport"])}})},508:function(t,e){t.exports='<div class="ReportCharts" style="z-index:-1;display:none;">\n\t<div style="clear:both"/>\n\t<div style="text-align:center; padding:10px 0px 10px;">\n\t\t<div dojoAttachPoint="chartNode">\n\t\t</div>\n\t</div>\n</div>\n'},509:function(t,e){t.exports='<div class="mx-grid mx-reportmatrix" style="display:none;">\n\t<div class="mx-grid-controlbar clearfix" focusIndex="0">\n        <div class="mx-grid-pagingbar" dojoAttachPoint="pagingNode"></div>\n        <div class="mx-grid-toolbar" dojoAttachPoint="toolBarNode"></div>\n\t</div>\n\t<div class="mx-grid-content" focusIndex="1">\n        <table class="table table-bordered table-striped mx-reportmatrix-table">\n            <thead dojoAttachPoint="theadNode"></thead>\n            <tbody dojoAttachPoint="tbodyNode"></tbody>\n            <tfoot dojoAttachPoint="tfootNode"></tfoot>\n        </table>\n    </div>\n</div>\n'},574:function(t,e,i){t.exports=i.p+"static/FCF_MSArea2D.a0e53f6630b1e6d7c5f0227f987a9a51.swf"},575:function(t,e,i){t.exports=i.p+"static/FCF_MSBar2D.4609b814eac599fe9f5c41191c263e6d.swf"},576:function(t,e,i){t.exports=i.p+"static/FCF_MSColumn2D.83cc942ca6d138ecfacda4783ead4225.swf"},577:function(t,e,i){t.exports=i.p+"static/FCF_MSColumn3D.8a5a3b39cb648b1f5c66379ac285beaf.swf"},578:function(t,e,i){t.exports=i.p+"static/FCF_MSLine.a2c8d73d680586182060cbc20c6bdfd6.swf"},579:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEQAQAOYAAHula4CpcLHVqYm0e+Xv5TBSHabPnNrp2zSGMfn6+Ory6t7r3oSudVZ6QOz07PL38laLPI+7gOPu40yVSpS2iR13HPD28E6LNO717maNVClMGfX59QNoA/P482GGTNfm1+Lt4fz9/N3q3fr8+4ypgPf59/X49YTAe3u6cmirY+fw59no2XS1bOjx6GOYYP39/dzp22SpW/T49FyARm6vZ/7+/kiGQf3+/fv8++jw6XWxYkaSP9jn2F2ZVuDs4HafZXGaXkFlK1mBVpvGk2qVV0ZsMi9RK1mjVDdcJUtyOV6SSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAARABAAAAfxgBEDDAEAP0BEGRkeHjMNDUlJAwICBgZDmBQUgoSFkgI1NTchIwklJRsdFhgOP0kMAi8hpKYmJqqsCq4BBi80KSk9Jg8PQsZCLUBFAAY4EwIoKErGNEcIHATKP0OlOwYsMTY21tgSREFAQwkbMghDMUdHRdggPudEFOwP1hFKShNIXLhYoARJhgiqjug4UuHEiX9ISMAo6GHAPiMYjVSowALigYIzGORqoUICCRIZjayAUKBBAAcKchCQAGLBAhEHDqz4wLIBAAUqZtYUIQLGAR4fPlzQkMTQIURE/PmDAOHC0khJimgNwjUIkq8FwmoIBAA7"}});