
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
require({cache:{"url:mxui/widget/templates/Calendar.html":"<table cellspacing=\"0\" cellpadding=\"0\" class=\"dijitCalendarContainer\" role=\"grid\" dojoAttachEvent=\"onkeypress: _onKeyPress\">\n\t<thead>\n\t\t<tr class=\"dijitReset dijitCalendarMonthContainer\" valign=\"top\">\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarDecrease\" waiRole=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"decreaseArrowNode\" class=\"dijitA11ySideArrow\">-</span>\n\t\t\t</th>\n\t\t\t<th class='dijitReset' colspan=\"5\">\n\t\t\t\t<div class=\"dijitVisible\">\n\t\t\t\t\t<div class=\"dijitPopup dijitMenu dijitMenuPassive dijitHidden\" dojoAttachPoint=\"monthDropDown\" dojoAttachEvent=\"onmouseup: _onMonthSelect, onmouseover: _onMenuHover, onmouseout: _onMenuHover\">\n\t\t\t\t\t\t<div class=\"dijitCalendarMonthLabelTemplate dijitCalendarMonthLabel\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div dojoAttachPoint=\"monthLabelSpacer\" class=\"dijitSpacer\"></div>\n\t\t\t\t<div dojoAttachPoint=\"monthLabelNode\" class=\"dijitCalendarMonthLabel dijitInline dijitVisible\" dojoAttachEvent=\"onmousedown: _onMonthToggle\"></div>\n\t\t\t</th>\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarIncrease\" waiRole=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"increaseArrowNode\" class=\"dijitA11ySideArrow\">+</span>\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th class=\"dijitReset dijitCalendarDayLabelTemplate\" role=\"columnheader\"><span class=\"dijitCalendarDayLabel\"></span></th>\n\t\t</tr>\n\t</thead>\n\t<tbody dojoAttachEvent=\"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp\" class=\"dijitReset dijitCalendarBodyContainer\">\n\t\t<tr class=\"dijitReset dijitCalendarWeekTemplate\" role=\"row\">\n\t\t\t<td class=\"dijitReset dijitCalendarDateTemplate\" role=\"gridcell\"><span class=\"dijitCalendarDateLabel\"></span></td>\n\t\t</tr>\n\t</tbody>\n\t<tfoot class=\"dijitReset dijitCalendarYearContainer\">\n\t\t<tr>\n\t\t\t<td class='dijitReset' valign=\"top\" colspan=\"7\">\n\t\t\t\t<h3 class=\"dijitCalendarYearLabel\">\n\t\t\t\t\t<span dojoAttachPoint=\"previousYearLabelNode\" class=\"dijitInline dijitCalendarPreviousYear\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"currentYearLabelNode\" class=\"dijitInline dijitCalendarSelectedYear\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"nextYearLabelNode\" class=\"dijitInline dijitCalendarNextYear\"></span>\n\t\t\t\t</h3>\n\t\t\t</td>\n\t\t</tr>\n\t</tfoot>\n</table>"}});define("mxui/widget/Calendar",["dijit/_Widget","dijit/_TemplatedMixin","dijit/_CssStateMixin","dijit/typematic","dojo/cldr/supplemental","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/dom","dojo/keys","dojo/query","dojo/sniff","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/_base/declare","dojo/_base/kernel","dojo/text!mxui/widget/templates/Calendar.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14){var _15=_12([_1,_2,_3],{declaredClass:"mxui.widget.Calendar",templateString:_14,value:new Date(),datePackage:"dojo.date",dayWidth:"narrow",tabIndex:"0",baseClass:"dijitCalendar",cssStateNodes:{"decrementMonth":"dijitCalendarArrow","incrementMonth":"dijitCalendarArrow","previousYearLabelNode":"dijitCalendarPreviousYear","nextYearLabelNode":"dijitCalendarNextYear"},attributeMap:_10.delegate(_1.prototype.attributeMap,{tabIndex:"domNode"}),setValue:function(_16){_13.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");this.set("value",_16);},_getValueAttr:function(){var _17=new this.dateClassObj(this.value);_17.setHours(0,0,0,0);if(_17.getDate()<this.value.getDate()){_17=this.dateFuncObj.add(_17,"hour",1);}return _17;},_setValueAttr:function(_18){if(!this.value||this.dateFuncObj.compare(_18,this.value)){_18=new this.dateClassObj(_18);_18.setHours(1);this.displayMonth=new this.dateClassObj(_18);if(!this.isDisabledDate(_18,this.lang)){this.value=_18;this.onChange(this.get("value"));}_6.set(this.domNode,"aria-label",this.dateLocaleModule.format(_18,{selector:"date",formatLength:"full"}));this._populateGrid();}},_setText:function(_19,_1a){while(_19.firstChild){_19.removeChild(_19.firstChild);}_19.appendChild(document.createTextNode(_1a));},goToToday:function(){this.set("value",new this.dateClassObj());},constructor:function(_1b){var _1c=(_1b.datePackage&&(_1b.datePackage!="dojo.date"))?_1b.datePackage+".Date":"Date";this.dateClassObj=_10.getObject(_1c,false);this.datePackage=_1b.datePackage||this.datePackage;this.dateFuncObj=_10.getObject(this.datePackage,false);this.dateLocaleModule=_10.getObject(this.datePackage+".locale",false);},postMixInProperties:function(){if(isNaN(this.value)){delete this.value;}this.inherited(arguments);},postCreate:function(){this.inherited(arguments);_b.setSelectable(this.domNode,false);var _1d=_10.hitch(this,function(_1e,n){var _1f=_d(_1e,this.domNode)[0];for(var i=0;i<n;i++){_1f.parentNode.appendChild(_1f.cloneNode(true));}});_1d(".dijitCalendarDayLabelTemplate",6);_1d(".dijitCalendarDateTemplate",6);_1d(".dijitCalendarWeekTemplate",5);var _20=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang);var _21=_5.getFirstDayOfWeek(this.lang);_d(".dijitCalendarDayLabel",this.domNode).forEach(function(_22,i){this._setText(_22,_20[(i+_21)%7]);},this);var _23=new this.dateClassObj(this.value);var _24=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_23);_1d(".dijitCalendarMonthLabelTemplate",_24.length-1);_d(".dijitCalendarMonthLabelTemplate",this.domNode).forEach(function(_25,i){_6.set(_25,"month",i);if(i in _24){this._setText(_25,_24[i]);}_9.place(_25.cloneNode(true),this.monthLabelSpacer);},this);this.value=null;this.set("value",_23);},_onMenuHover:function(e){_11.stop(e);_7.toggle(e.target,"dijitMenuItemHover");},_adjustDisplay:function(_26,_27){this.displayMonth=this.dateFuncObj.add(this.displayMonth,_26,_27);this._populateGrid();},_onMonthToggle:function(evt){_11.stop(evt);if(evt.type=="mousedown"){var _28=_a.position(this.monthLabelNode);var dim={width:_28.w+"px",top:-this.displayMonth.getMonth()*_28.h+"px"};if(_e("ie")&&_e("quirks")){dim.left=-_28.w/2+"px";}_8.set(this.monthDropDown,dim);this._popupHandler=this.connect(document,"onmouseup","_onMonthToggle");}else{this.disconnect(this._popupHandler);delete this._popupHandler;}_7.toggle(this.monthDropDown,"dijitHidden");_7.toggle(this.monthLabelNode,"dijitVisible");},_onMonthSelect:function(evt){this._onMonthToggle(evt);this.displayMonth.setMonth(_6.set(evt.target,"month"));this._populateGrid();},_onDayClick:function(evt){_11.stop(evt);for(var _29=evt.target;_29&&!_29.dijitDateValue;_29=_29.parentNode){}if(_29&&!_7.contains(_29,"dijitCalendarDisabledDate")){this.set("value",_29.dijitDateValue);this.onValueSelected(this.get("value"));}},_onDayMouseOver:function(evt){var _2a=_7.contains(evt.target,"dijitCalendarDateLabel")?evt.target.parentNode:evt.target;if(_2a&&(_2a.dijitDateValue||_2a==this.previousYearLabelNode||_2a==this.nextYearLabelNode)){_7.add(_2a,"dijitCalendarHoveredDate");this._currentNode=_2a;}},_onDayMouseOut:function(evt){if(!this._currentNode){return;}if(evt.relatedTarget&&evt.relatedTarget.parentNode==this._currentNode){return;}_7.remove(this._currentNode,"dijitCalendarHoveredDate");if(_7.contains(this._currentNode,"dijitCalendarActiveDate")){_7.remove(this._currentNode,"dijitCalendarActiveDate");}this._currentNode=null;},_onDayMouseDown:function(evt){var _2b=evt.target.parentNode;if(_2b&&_2b.dijitDateValue){_7.add(_2b,"dijitCalendarActiveDate");this._currentNode=_2b;}},_onDayMouseUp:function(evt){var _2c=evt.target.parentNode;if(_2c&&_2c.dijitDateValue){_7.remove(_2c,"dijitCalendarActiveDate");}},_onKeyPress:function(evt){var dk=_c,_2d=-1,_2e,_2f=this.value;switch(evt.keyCode){case dk.RIGHT_ARROW:_2d=1;case dk.LEFT_ARROW:_2e="day";if(!this.isLeftToRight()){_2d*=-1;}break;case dk.DOWN_ARROW:_2d=1;case dk.UP_ARROW:_2e="week";break;case dk.PAGE_DOWN:_2d=1;case dk.PAGE_UP:_2e=evt.ctrlKey?"year":"month";break;case dk.END:_2f=this.dateFuncObj.add(_2f,"month",1);_2e="day";case dk.HOME:_2f=new Date(_2f).setDate(1);break;case dk.ENTER:this.onValueSelected(this.get("value"));break;case dk.ESCAPE:default:return;}_11.stop(evt);if(_2e){_2f=this.dateFuncObj.add(_2f,_2e,_2d);}this.set("value",_2f);},onValueSelected:function(_30){},onChange:function(_31){},_isSelectedDate:function(_32,_33){return !this.dateFuncObj.compare(_32,this.value,"date");},isDisabledDate:function(_34,_35){},getClassForDate:function(_36,_37){},_populateGrid:function(){var _38=this.displayMonth;_38.setDate(1);var _39=_38.getDay(),_3a=this.dateFuncObj.getDaysInMonth(_38),_3b=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(_38,"month",-1)),_3c=new this.dateClassObj(),_3d=_5.getFirstDayOfWeek(this.lang);if(_3d>_39){_3d-=7;}_d(".dijitCalendarDateTemplate",this.domNode).forEach(function(_3e,i){i+=_3d;var _3f=new this.dateClassObj(_38),_40,_41="dijitCalendar",adj=0;if(i<_39){_40=_3b-_39+i+1;adj=-1;_41+="Previous";}else{if(i>=(_39+_3a)){_40=i-_39-_3a+1;adj=1;_41+="Next";}else{_40=i-_39+1;_41+="Current";}}if(adj){_3f=this.dateFuncObj.add(_3f,"month",adj);}_3f.setDate(_40);if(!this.dateFuncObj.compare(_3f,_3c,"date")){_41="dijitCalendarCurrentDate "+_41;}if(this._isSelectedDate(_3f,this.lang)){_41="dijitCalendarSelectedDate "+_41;}if(this.isDisabledDate(_3f,this.lang)){_41="dijitCalendarDisabledDate "+_41;}var _42=this.getClassForDate(_3f,this.lang);if(_42){_41=_42+" "+_41;}_3e.className=_41+"Month dijitCalendarDateTemplate";_3e.dijitDateValue=_3f.valueOf();var _43=_d(".dijitCalendarDateLabel",_3e)[0],_44=_3f.getDateLocalized?_3f.getDateLocalized(this.lang):_3f.getDate();this._setText(_43,_44);},this);var _45=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_38);this._setText(this.monthLabelNode,_45[_38.getMonth()]);_d(".dijitCalendarMonthLabelTemplate",this.domNode).forEach(function(_46,i){_7.toggle(_46,"dijitHidden",!(i in _45));this._setText(_46,_45[i]);},this);var y=_38.getFullYear()-1;var d=new this.dateClassObj();_f.forEach(["previous","current","next"],function(_47){d.setFullYear(y++);this._setText(this[_47+"YearLabelNode"],this.dateLocaleModule.format(d,{selector:"year",locale:this.lang}));},this);var _48=this;var _49=function(_4a,_4b,adj){_48._connects.push(_4.addMouseListener(_48[_4a],_48,function(_4c){if(_4c>=0){_48._adjustDisplay(_4b,adj);}},0.8,500));};_49("incrementMonth","month",1);_49("decrementMonth","month",-1);_49("nextYearLabelNode","year",1);_49("previousYearLabelNode","year",-1);},_onDayClick:function(evt){_11.stop(evt);for(var _4d=evt.target;_4d&&typeof _4d.dijitDateValue=="undefined";_4d=_4d.parentNode){}if(_4d&&!_7.contains(_4d,"dijitCalendarDisabledDate")){this.set("value",_4d.dijitDateValue);this.onValueSelected(this.get("value"));}}});return _15;});