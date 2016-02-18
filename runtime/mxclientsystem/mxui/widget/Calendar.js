
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Calendar",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.Calendar");_1.declare("mxui.widget.Calendar",[_2._Widget,_2._TemplatedMixin,_2._CssStateMixin],{templateString:_1.cache("mxui.widget","templates/Calendar.html","<table cellspacing=\"0\" cellpadding=\"0\" class=\"dijitCalendarContainer\" role=\"grid\" dojoAttachEvent=\"onkeypress: _onKeyPress\">\n\t<thead>\n\t\t<tr class=\"dijitReset dijitCalendarMonthContainer\" valign=\"top\">\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarDecrease\" waiRole=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"decreaseArrowNode\" class=\"dijitA11ySideArrow\">-</span>\n\t\t\t</th>\n\t\t\t<th class='dijitReset' colspan=\"5\">\n\t\t\t\t<div class=\"dijitVisible\">\n\t\t\t\t\t<div class=\"dijitPopup dijitMenu dijitMenuPassive dijitHidden\" dojoAttachPoint=\"monthDropDown\" dojoAttachEvent=\"onmouseup: _onMonthSelect, onmouseover: _onMenuHover, onmouseout: _onMenuHover\">\n\t\t\t\t\t\t<div class=\"dijitCalendarMonthLabelTemplate dijitCalendarMonthLabel\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div dojoAttachPoint=\"monthLabelSpacer\" class=\"dijitSpacer\"></div>\n\t\t\t\t<div dojoAttachPoint=\"monthLabelNode\" class=\"dijitCalendarMonthLabel dijitInline dijitVisible\" dojoAttachEvent=\"onmousedown: _onMonthToggle\"></div>\n\t\t\t</th>\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarIncrease\" waiRole=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"increaseArrowNode\" class=\"dijitA11ySideArrow\">+</span>\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th class=\"dijitReset dijitCalendarDayLabelTemplate\" role=\"columnheader\"><span class=\"dijitCalendarDayLabel\"></span></th>\n\t\t</tr>\n\t</thead>\n\t<tbody dojoAttachEvent=\"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp\" class=\"dijitReset dijitCalendarBodyContainer\">\n\t\t<tr class=\"dijitReset dijitCalendarWeekTemplate\" role=\"row\">\n\t\t\t<td class=\"dijitReset dijitCalendarDateTemplate\" role=\"gridcell\"><span class=\"dijitCalendarDateLabel\"></span></td>\n\t\t</tr>\n\t</tbody>\n\t<tfoot class=\"dijitReset dijitCalendarYearContainer\">\n\t\t<tr>\n\t\t\t<td class='dijitReset' valign=\"top\" colspan=\"7\">\n\t\t\t\t<h3 class=\"dijitCalendarYearLabel\">\n\t\t\t\t\t<span dojoAttachPoint=\"previousYearLabelNode\" class=\"dijitInline dijitCalendarPreviousYear\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"currentYearLabelNode\" class=\"dijitInline dijitCalendarSelectedYear\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"nextYearLabelNode\" class=\"dijitInline dijitCalendarNextYear\"></span>\n\t\t\t\t</h3>\n\t\t\t</td>\n\t\t</tr>\n\t</tfoot>\n</table>"),value:new Date(),datePackage:"dojo.date",dayWidth:"narrow",tabIndex:"0",baseClass:"dijitCalendar",cssStateNodes:{"decrementMonth":"dijitCalendarArrow","incrementMonth":"dijitCalendarArrow","previousYearLabelNode":"dijitCalendarPreviousYear","nextYearLabelNode":"dijitCalendarNextYear"},attributeMap:_1.delegate(_2._Widget.prototype.attributeMap,{tabIndex:"domNode"}),setValue:function(_4){_1.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");this.set("value",_4);},_getValueAttr:function(){var _5=new this.dateClassObj(this.value);_5.setHours(0,0,0,0);if(_5.getDate()<this.value.getDate()){_5=this.dateFuncObj.add(_5,"hour",1);}return _5;},_setValueAttr:function(_6){if(!this.value||this.dateFuncObj.compare(_6,this.value)){_6=new this.dateClassObj(_6);_6.setHours(1);this.displayMonth=new this.dateClassObj(_6);if(!this.isDisabledDate(_6,this.lang)){this.value=_6;this.onChange(this.get("value"));}_1.attr(this.domNode,"aria-label",this.dateLocaleModule.format(_6,{selector:"date",formatLength:"full"}));this._populateGrid();}},_setText:function(_7,_8){while(_7.firstChild){_7.removeChild(_7.firstChild);}_7.appendChild(_1.doc.createTextNode(_8));},goToToday:function(){this.set("value",new this.dateClassObj());},constructor:function(_9){var _a=(_9.datePackage&&(_9.datePackage!="dojo.date"))?_9.datePackage+".Date":"Date";this.dateClassObj=_1.getObject(_a,false);this.datePackage=_9.datePackage||this.datePackage;this.dateFuncObj=_1.getObject(this.datePackage,false);this.dateLocaleModule=_1.getObject(this.datePackage+".locale",false);},postMixInProperties:function(){if(isNaN(this.value)){delete this.value;}this.inherited(arguments);},postCreate:function(){this.inherited(arguments);_1.setSelectable(this.domNode,false);var _b=_1.hitch(this,function(_c,n){var _d=_1.query(_c,this.domNode)[0];for(var i=0;i<n;i++){_d.parentNode.appendChild(_d.cloneNode(true));}});_b(".dijitCalendarDayLabelTemplate",6);_b(".dijitCalendarDateTemplate",6);_b(".dijitCalendarWeekTemplate",5);var _e=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang);var _f=_1.cldr.supplemental.getFirstDayOfWeek(this.lang);_1.query(".dijitCalendarDayLabel",this.domNode).forEach(function(_10,i){this._setText(_10,_e[(i+_f)%7]);},this);var _11=new this.dateClassObj(this.value);var _12=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_11);_b(".dijitCalendarMonthLabelTemplate",_12.length-1);_1.query(".dijitCalendarMonthLabelTemplate",this.domNode).forEach(function(_13,i){_1.attr(_13,"month",i);if(i in _12){this._setText(_13,_12[i]);}_1.place(_13.cloneNode(true),this.monthLabelSpacer);},this);this.value=null;this.set("value",_11);},_onMenuHover:function(e){_1.stopEvent(e);_1.toggleClass(e.target,"dijitMenuItemHover");},_adjustDisplay:function(_14,_15){this.displayMonth=this.dateFuncObj.add(this.displayMonth,_14,_15);this._populateGrid();},_onMonthToggle:function(evt){_1.stopEvent(evt);if(evt.type=="mousedown"){var _16=_1.position(this.monthLabelNode);var dim={width:_16.w+"px",top:-this.displayMonth.getMonth()*_16.h+"px"};if((_1.isIE&&_1.isQuirks)||_1.isIE<7){dim.left=-_16.w/2+"px";}_1.style(this.monthDropDown,dim);this._popupHandler=this.connect(document,"onmouseup","_onMonthToggle");}else{this.disconnect(this._popupHandler);delete this._popupHandler;}_1.toggleClass(this.monthDropDown,"dijitHidden");_1.toggleClass(this.monthLabelNode,"dijitVisible");},_onMonthSelect:function(evt){this._onMonthToggle(evt);this.displayMonth.setMonth(_1.attr(evt.target,"month"));this._populateGrid();},_onDayClick:function(evt){_1.stopEvent(evt);for(var _17=evt.target;_17&&!_17.dijitDateValue;_17=_17.parentNode){}if(_17&&!_1.hasClass(_17,"dijitCalendarDisabledDate")){this.set("value",_17.dijitDateValue);this.onValueSelected(this.get("value"));}},_onDayMouseOver:function(evt){var _18=_1.hasClass(evt.target,"dijitCalendarDateLabel")?evt.target.parentNode:evt.target;if(_18&&(_18.dijitDateValue||_18==this.previousYearLabelNode||_18==this.nextYearLabelNode)){_1.addClass(_18,"dijitCalendarHoveredDate");this._currentNode=_18;}},_onDayMouseOut:function(evt){if(!this._currentNode){return;}if(evt.relatedTarget&&evt.relatedTarget.parentNode==this._currentNode){return;}_1.removeClass(this._currentNode,"dijitCalendarHoveredDate");if(_1.hasClass(this._currentNode,"dijitCalendarActiveDate")){_1.removeClass(this._currentNode,"dijitCalendarActiveDate");}this._currentNode=null;},_onDayMouseDown:function(evt){var _19=evt.target.parentNode;if(_19&&_19.dijitDateValue){_1.addClass(_19,"dijitCalendarActiveDate");this._currentNode=_19;}},_onDayMouseUp:function(evt){var _1a=evt.target.parentNode;if(_1a&&_1a.dijitDateValue){_1.removeClass(_1a,"dijitCalendarActiveDate");}},_onKeyPress:function(evt){var dk=_1.keys,_1b=-1,_1c,_1d=this.value;switch(evt.keyCode){case dk.RIGHT_ARROW:_1b=1;case dk.LEFT_ARROW:_1c="day";if(!this.isLeftToRight()){_1b*=-1;}break;case dk.DOWN_ARROW:_1b=1;case dk.UP_ARROW:_1c="week";break;case dk.PAGE_DOWN:_1b=1;case dk.PAGE_UP:_1c=evt.ctrlKey?"year":"month";break;case dk.END:_1d=this.dateFuncObj.add(_1d,"month",1);_1c="day";case dk.HOME:_1d=new Date(_1d).setDate(1);break;case dk.ENTER:this.onValueSelected(this.get("value"));break;case dk.ESCAPE:default:return;}_1.stopEvent(evt);if(_1c){_1d=this.dateFuncObj.add(_1d,_1c,_1b);}this.set("value",_1d);},onValueSelected:function(_1e){},onChange:function(_1f){},_isSelectedDate:function(_20,_21){return !this.dateFuncObj.compare(_20,this.value,"date");},isDisabledDate:function(_22,_23){},getClassForDate:function(_24,_25){},_populateGrid:function(){var _26=this.displayMonth;_26.setDate(1);var _27=_26.getDay(),_28=this.dateFuncObj.getDaysInMonth(_26),_29=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(_26,"month",-1)),_2a=new this.dateClassObj(),_2b=_1.cldr.supplemental.getFirstDayOfWeek(this.lang);if(_2b>_27){_2b-=7;}_1.query(".dijitCalendarDateTemplate",this.domNode).forEach(function(_2c,i){i+=_2b;var _2d=new this.dateClassObj(_26),_2e,_2f="dijitCalendar",adj=0;if(i<_27){_2e=_29-_27+i+1;adj=-1;_2f+="Previous";}else{if(i>=(_27+_28)){_2e=i-_27-_28+1;adj=1;_2f+="Next";}else{_2e=i-_27+1;_2f+="Current";}}if(adj){_2d=this.dateFuncObj.add(_2d,"month",adj);}_2d.setDate(_2e);if(!this.dateFuncObj.compare(_2d,_2a,"date")){_2f="dijitCalendarCurrentDate "+_2f;}if(this._isSelectedDate(_2d,this.lang)){_2f="dijitCalendarSelectedDate "+_2f;}if(this.isDisabledDate(_2d,this.lang)){_2f="dijitCalendarDisabledDate "+_2f;}var _30=this.getClassForDate(_2d,this.lang);if(_30){_2f=_30+" "+_2f;}_2c.className=_2f+"Month dijitCalendarDateTemplate";_2c.dijitDateValue=_2d.valueOf();var _31=_1.query(".dijitCalendarDateLabel",_2c)[0],_32=_2d.getDateLocalized?_2d.getDateLocalized(this.lang):_2d.getDate();this._setText(_31,_32);},this);var _33=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,_26);this._setText(this.monthLabelNode,_33[_26.getMonth()]);_1.query(".dijitCalendarMonthLabelTemplate",this.domNode).forEach(function(_34,i){_1.toggleClass(_34,"dijitHidden",!(i in _33));this._setText(_34,_33[i]);},this);var y=_26.getFullYear()-1;var d=new this.dateClassObj();_1.forEach(["previous","current","next"],function(_35){d.setFullYear(y++);this._setText(this[_35+"YearLabelNode"],this.dateLocaleModule.format(d,{selector:"year",locale:this.lang}));},this);var _36=this;var _37=function(_38,_39,adj){_36._connects.push(_2.typematic.addMouseListener(_36[_38],_36,function(_3a){if(_3a>=0){_36._adjustDisplay(_39,adj);}},0.8,500));};_37("incrementMonth","month",1);_37("decrementMonth","month",-1);_37("nextYearLabelNode","year",1);_37("previousYearLabelNode","year",-1);},_onDayClick:function(evt){_1.stopEvent(evt);for(var _3b=evt.target;_3b&&typeof _3b.dijitDateValue=="undefined";_3b=_3b.parentNode){}if(_3b&&!_1.hasClass(_3b,"dijitCalendarDisabledDate")){this.set("value",_3b.dijitDateValue);this.onValueSelected(this.get("value"));}}});});