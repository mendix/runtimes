/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/action/openPage",["dojo/_base/lang","mxui/lib/actionRegistry","mendix/lang","mendix/lib/ValidationError"],function(_1,_2,_3,_4){function _5(e){if(!(e instanceof _4)){window.mx.onError(e);}};_2.add("openPage",function(_6){var _7=[];if(_6.abortOnClientValidations){_7.push(function(_8){_6.origin.validate(_8,_6.error||_5);});}if(_6.abortOnServerValidations){_7.push(function(_9){_6.origin.save(_9,_6.error||_5);});}_3.sequence(_7,function(){window.mx.ui.openForm(_6.path,_6);});});});