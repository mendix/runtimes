//>>built
define("dijit/form/_ToggleButtonMixin",["dojo/_base/declare","dojo/dom-attr"],function(e,d){return e("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(a){var c=this.checked;this._set("checked",!c);var b=this.inherited(arguments);this.set("checked",b?this.checked:c);return b},_setCheckedAttr:function(a,c){this._set("checked",a);var b=this.focusNode||this.domNode;this._created&&d.get(b,"checked")!=!!a&&d.set(b,"checked",!!a);b.setAttribute(this._aria_attr,
String(a));this._handleOnChange(a,c)},postCreate:function(){this.inherited(arguments);var a=this.focusNode||this.domNode;this.checked&&a.setAttribute("checked","checked");void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.checked)},reset:function(){this._hasBeenBlurred=!1;this.set("checked",this.params.checked||!1)}})});
