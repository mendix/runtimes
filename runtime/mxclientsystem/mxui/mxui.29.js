/* @preserve
    Copyright (c) 2005-2016, Mendix bv. All rights reserved.
    See mxclientsystem/licenses.txt for third party licenses that apply.
*/
webpackJsonp([29],{648:function(e,a,n){!function(e,a){a(n(131))}(0,function(e){"use strict";function a(e,a,n,t){var r=e+" ";switch(n){case"s":return a||t?"nekaj sekund":"nekaj sekundami";case"m":return a?"ena minuta":"eno minuto";case"mm":return r+=1===e?a?"minuta":"minuto":2===e?a||t?"minuti":"minutama":e<5?a||t?"minute":"minutami":a||t?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return r+=1===e?a?"ura":"uro":2===e?a||t?"uri":"urama":e<5?a||t?"ure":"urami":a||t?"ur":"urami";case"d":return a||t?"en dan":"enim dnem";case"dd":return r+=1===e?a||t?"dan":"dnem":2===e?a||t?"dni":"dnevoma":a||t?"dni":"dnevi";case"M":return a||t?"en mesec":"enim mesecem";case"MM":return r+=1===e?a||t?"mesec":"mesecem":2===e?a||t?"meseca":"mesecema":e<5?a||t?"mesece":"meseci":a||t?"mesecev":"meseci";case"y":return a||t?"eno leto":"enim letom";case"yy":return r+=1===e?a||t?"leto":"letom":2===e?a||t?"leti":"letoma":e<5?a||t?"leta":"leti":a||t?"let":"leti"}}return e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})}});