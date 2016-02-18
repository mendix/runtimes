
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_Focusable",["mendix/logger","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{initialize:function(){var _4=this.domNode;if(this.focusIndex){_4.tabIndex=this.focusIndex;}else{if(this.tabIndex){_4.tabIndex=this.tabIndex;}else{_4.tabIndex=0;}}this.connect(_4,"onkeypress","onKey");},onFocus:function(e){},onBlur:function(e){},onKey:function(e){}});return _3;});