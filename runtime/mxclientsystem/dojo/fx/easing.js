/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/fx/easing",["../_base/lang"],function(d){var b={linear:function(a){return a},quadIn:function(a){return Math.pow(a,2)},quadOut:function(a){return a*(a-2)*-1},quadInOut:function(a){a*=2;return 1>a?Math.pow(a,2)/2:-1*(--a*(a-2)-1)/2},cubicIn:function(a){return Math.pow(a,3)},cubicOut:function(a){return Math.pow(a-1,3)+1},cubicInOut:function(a){a*=2;return 1>a?Math.pow(a,3)/2:(Math.pow(a-2,3)+2)/2},quartIn:function(a){return Math.pow(a,4)},quartOut:function(a){return-1*(Math.pow(a-1,4)-1)},
quartInOut:function(a){a*=2;return 1>a?Math.pow(a,4)/2:-.5*(Math.pow(a-2,4)-2)},quintIn:function(a){return Math.pow(a,5)},quintOut:function(a){return Math.pow(a-1,5)+1},quintInOut:function(a){a*=2;return 1>a?Math.pow(a,5)/2:(Math.pow(a-2,5)+2)/2},sineIn:function(a){return-1*Math.cos(Math.PI/2*a)+1},sineOut:function(a){return Math.sin(Math.PI/2*a)},sineInOut:function(a){return-1*(Math.cos(Math.PI*a)-1)/2},expoIn:function(a){return 0==a?0:Math.pow(2,10*(a-1))},expoOut:function(a){return 1==a?1:-1*Math.pow(2,
-10*a)+1},expoInOut:function(a){if(0==a)return 0;if(1==a)return 1;a*=2;if(1>a)return Math.pow(2,10*(a-1))/2;--a;return(-1*Math.pow(2,-10*a)+2)/2},circIn:function(a){return-1*(Math.sqrt(1-Math.pow(a,2))-1)},circOut:function(a){return Math.sqrt(1-Math.pow(a-1,2))},circInOut:function(a){a*=2;return 1>a?-.5*(Math.sqrt(1-Math.pow(a,2))-1):.5*(Math.sqrt(1-Math.pow(a-2,2))+1)},backIn:function(a){return Math.pow(a,2)*(2.70158*a-1.70158)},backOut:function(a){--a;return Math.pow(a,2)*(2.70158*a+1.70158)+1},
backInOut:function(a){a*=2;if(1>a)return Math.pow(a,2)*(3.5949095*a-2.5949095)/2;a-=2;return(Math.pow(a,2)*(3.5949095*a+2.5949095)+2)/2},elasticIn:function(a){if(0==a||1==a)return a;--a;return-1*Math.pow(2,10*a)*Math.sin(2*(a-.075)*Math.PI/.3)},elasticOut:function(a){return 0==a||1==a?a:Math.pow(2,-10*a)*Math.sin(2*(a-.075)*Math.PI/.3)+1},elasticInOut:function(a){if(0==a)return 0;a*=2;if(2==a)return 1;var b=.3*1.5,c=b/4;if(1>a)return--a,-.5*Math.pow(2,10*a)*Math.sin(2*(a-c)*Math.PI/b);--a;return.5*
Math.pow(2,-10*a)*Math.sin(2*(a-c)*Math.PI/b)+1},bounceIn:function(a){return 1-b.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*Math.pow(a,2):a<2/2.75?7.5625*Math.pow(a-1.5/2.75,2)+.75:a<2.5/2.75?7.5625*Math.pow(a-2.25/2.75,2)+.9375:7.5625*Math.pow(a-2.625/2.75,2)+.984375},bounceInOut:function(a){return.5>a?b.bounceIn(2*a)/2:b.bounceOut(2*a-1)/2+.5}};d.setObject("dojo.fx.easing",b);return b});
