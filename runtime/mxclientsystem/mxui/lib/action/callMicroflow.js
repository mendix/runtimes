/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/action/callMicroflow",["mxui/lib/actionRegistry","mendix/lang","mendix/lib/ValidationError"],function(_1,_2,_3){function _4(e){if(!(e instanceof _3)){window.mx.onError(e);}};_1.add("callMicroflow",function(_5){var _6=[];if(_5.confirmation){_6.push(function(_7){window.mx.ui.confirmation({cancel:_5.confirmation.cancel,proceed:_5.confirmation.proceed,content:_5.confirmation.question,handler:_7});});}if(_5.abortOnClientValidations&&_5.validate==="view"){_6.push(function(_8){_5.origin.validate(_8,_5.error||_4);});}_5.params=_5.params||{};if(_5.abortOnServerValidations){_5.params=Object.assign(_5.params,{validationGuids:_5.origin.getSubmitGuids()});}_6.push(function(_9){_5.origin.submit(_9,_5.error||_4);});_2.sequence(_6,function(){window.mx.ui.action(_5.name,_5);});});});