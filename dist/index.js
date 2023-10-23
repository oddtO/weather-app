!function(){"use strict";class t extends Error{constructor(t,e){super(t),this.name=this.constructor.name,this.relatedError=e}}async function e(e,n){e.searchParams.set("q",n);const r=await fetch(e,{mode:"cors"}),a=r.json();if(200!=r.status)throw new t("error in api",a);return a}const n=new URL("https://api.weatherapi.com/v1");function r(t,e,n,r){const a=new URL(t);return a.pathname+=`/${e}`,a.searchParams.set(n,r),a}function a(t){return r(n,t,"key","aea933f100c44dcb81f185825230810")}const i=a("current.json"),o=a("forecast.json");const s=r(new URL("https://api.giphy.com/v1/gifs"),"search","api_key","SPTXvu03oRCg29rDUFlQrAbkBpwpp9RG");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===u(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function d(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(t){c(1,arguments);var e=l(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function m(t){c(1,arguments);var e=l(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=h(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=h(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}var f={};function g(){return f}function w(t,e){var n,r,a,i,o,s,u,h;c(1,arguments);var m=g(),f=d(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:m.weekStartsOn)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(h=u.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=l(t),v=w.getUTCDay(),p=(v<f?7:0)+v-f;return w.setUTCDate(w.getUTCDate()-p),w.setUTCHours(0,0,0,0),w}function v(t,e){var n,r,a,i,o,s,u,h;c(1,arguments);var m=l(t),f=m.getUTCFullYear(),v=g(),p=d(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:v.firstWeekContainsDate)&&void 0!==r?r:null===(u=v.locale)||void 0===u||null===(h=u.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,p),y.setUTCHours(0,0,0,0);var b=w(y,e),T=new Date(0);T.setUTCFullYear(f,0,p),T.setUTCHours(0,0,0,0);var C=w(T,e);return m.getTime()>=b.getTime()?f+1:m.getTime()>=C.getTime()?f:f-1}function p(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var y=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===e?r%100:r,e.length)},b=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):p(n+1,2)},T=function(t,e){return p(t.getUTCDate(),e.length)},C=function(t,e){return p(t.getUTCHours()%12||12,e.length)},S=function(t,e){return p(t.getUTCHours(),e.length)},D=function(t,e){return p(t.getUTCMinutes(),e.length)},M=function(t,e){return p(t.getUTCSeconds(),e.length)},E=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),e.length)},k={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y(t,e)},Y:function(t,e,n,r){var a=v(t,r),i=a>0?a:1-a;return"YY"===e?p(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):p(i,e.length)},R:function(t,e){return p(m(t),e.length)},u:function(t,e){return p(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return b(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){c(1,arguments);var n=l(t),r=w(n,e).getTime()-function(t,e){var n,r,a,i,o,s,u,l;c(1,arguments);var h=g(),m=d(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(u=h.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=v(t,e),p=new Date(0);return p.setUTCFullYear(f,0,m),p.setUTCHours(0,0,0,0),w(p,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):p(a,e.length)},I:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=h(e).getTime()-function(t){c(1,arguments);var e=m(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),h(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):p(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):T(t,e)},D:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):p(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return p(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return p(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return p(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):S(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):D(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return E(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return U(a);case"XXXX":case"XX":return P(a);default:return P(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(a);case"xxxx":case"xx":return P(a);default:return P(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+P(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+P(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return p(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return p((r._originalDate||t).getTime(),e.length)}};function x(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+p(i,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+p(Math.abs(t)/60,2):P(t,e)}function P(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}var W=k,L=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},N=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},q={p:N,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return L(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",L(a,e)).replace("{{time}}",N(i,e))}},H=["D","DD"],Y=["YY","YYYY"];function F(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var I={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var _={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function R(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return o=t.valueCallback?t.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(s.length)}}}var z,Q={ordinalNumber:(z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(z.matchPattern);if(!n)return null;var r=n[0],a=t.match(z.parsePattern);if(!a)return null;var i=z.valueCallback?z.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:R({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:R({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:R({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:R({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:R({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},$={code:"en-US",formatDistance:function(t,e,n){var r,a=O[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:I,formatRelative:function(t,e,n,r){return G[t]},localize:_,match:Q,options:{weekStartsOn:0,firstWeekContainsDate:1}},B=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function Z(t,e,n){var r,a,i,o,s,h,m,f,w,v,p,y,b,T,C,S,D,M;c(2,arguments);var E=String(e),k=g(),x=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:$,U=d(null!==(i=null!==(o=null!==(s=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(m=n.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==s?s:k.firstWeekContainsDate)&&void 0!==o?o:null===(w=k.locale)||void 0===w||null===(v=w.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==i?i:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=d(null!==(p=null!==(y=null!==(b=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(C=n.locale)||void 0===C||null===(S=C.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==b?b:k.weekStartsOn)&&void 0!==y?y:null===(D=k.locale)||void 0===D||null===(M=D.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==p?p:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var L=l(t);if(!function(t){if(c(1,arguments),!function(t){return c(1,arguments),t instanceof Date||"object"===u(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=l(t);return!isNaN(Number(e))}(L))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(L),O=function(t,e){return c(2,arguments),function(t,e){c(2,arguments);var n=l(t).getTime(),r=d(e);return new Date(n+r)}(t,-d(e))}(L,N),A={firstWeekContainsDate:U,weekStartsOn:P,locale:x,_originalDate:L};return E.match(X).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,q[e])(t,x.formatLong):t})).join("").match(B).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(J))?i[1].replace(V,"'"):a;var s,u=W[o];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=r,-1===Y.indexOf(s))||F(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==H.indexOf(t)}(r)||F(r,e,String(t)),u(O,r,x.localize,A);if(o.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}const tt=a("search.json");function et(t,e){return t().catch(e)}class nt{static CELSIUS_SIGN="°C";static FAHRENHEIT_SIGN="°F";constructor(t){this.errorElem=t.querySelector(".error"),this.searchFormElem=t.querySelector("header > form"),this.searchInputElem=this.searchFormElem.city,this.loadingComponent=t.querySelector(".loading-component"),this.searchFormElem.addEventListener("submit",(async t=>{t.preventDefault(),this.errorElem.classList.remove("shown-message"),this.loadingComponent.classList.add("active"),await et(this.getWeatherData.bind(this),this.displayError.bind(this)),this.loadingComponent.classList.remove("active")})),this.weatherModeSelect=t.querySelector(".weather-mode-select");for(const t of this.weatherModeSelect.querySelectorAll("input"))t.addEventListener("change",(()=>{this.renderWeatherData()}));this.conditionDetailed={gifElem:t.querySelector(".weather-gif-wrapper > img"),countryElem:t.querySelector(".country"),cityElem:t.querySelector(".city"),iconElem:t.querySelector(".weather-condition > img"),temperatureAmount:t.querySelector(".weather-condition > .temperature > .number"),temperatureScale:t.querySelector(".weather-condition > .temperature > .scale-temperature"),feelsLikeAmount:t.querySelector(".feels-like-condition > .temperature > .number"),feelsLikeScale:t.querySelector(".feels-like-condition > .temperature > .scale-temperature"),conditionName:t.querySelector(".name-condition"),chanceOfRain:t.querySelector(".chance-of-rain > .chance"),currentTime:t.querySelector(".condition-detailed > time")},this.hoursTodayRows=t.querySelectorAll(".table-wrapper tr"),this.nextDaysConditions=t.querySelectorAll(".next-days > .condition"),this.autocompleteList=t.querySelector(".autocomplete"),this.searchSubmitBtn=t.querySelector('.search-wrapper + input[type="submit"]'),console.log(this),this.searchInputElem.addEventListener("input",(()=>{console.log("input"),et(this.getAutocompleteData.bind(this,this.searchInputElem.value),this.displayError.bind(this))})),this.autocompleteList.addEventListener("click",this.submitForm.bind(this)),this.searchSubmitBtn.click()}submitForm(t){const e=t.target;e instanceof HTMLLIElement&&(this.searchInputElem.value=e.dataset.cityName,this.searchSubmitBtn.click(),this.autocompleteList.classList.remove("active"))}displayError(e){console.log("err",Object.entries(e)),e instanceof t?e.relatedError.then((t=>{let{error:e}=t;this.errorElem.innerHTML=`${e.code}: ${e.message}`})):this.errorElem.innerHTML=`${e.name}: ${e.message}`,this.errorElem.classList.add("shown-message")}async getAutocompleteData(t){t.length<2?this.autocompleteList.classList.remove("active"):(this.autocompleteList.classList.add("active"),this.autocompletedEntries=await function(t){return e(tt,t+"*")}(t),this.renderAutocompleteData())}renderAutocompleteData(){this.autocompleteList.innerHTML="";for(const t of this.autocompletedEntries)this.autocompleteList.insertAdjacentHTML("beforeend",`<li data-city-name="${t.name}">${t.name}</li>`)}async getWeatherData(){await this.updateWeatherData(),console.log(this.response),console.log(this.responseStats),this.renderWeatherData()}renderWeatherData(){this.renderConditionDetailed(),this.renderHoursToday(),this.renderNextDaysConditions()}renderConditionDetailed(){this.conditionDetailed.gifElem.src=this.gifs.data[0].images.downsized_still.url,clearTimeout(this.timerId),this.timerId=setTimeout(this.changeGifs.bind(this),3e3,0),this.conditionDetailed.countryElem.textContent=this.response.location.country,this.conditionDetailed.cityElem.textContent=this.response.location.name,this.conditionDetailed.iconElem.src="https:"+this.response.current.condition.icon,console.log(nt.isCelcius()),nt.isCelcius()?(this.conditionDetailed.temperatureAmount.textContent=this.response.current.temp_c,this.conditionDetailed.temperatureScale.textContent=nt.CELSIUS_SIGN,this.conditionDetailed.feelsLikeAmount.textContent=this.response.current.feelslike_c,this.conditionDetailed.feelsLikeScale.textContent=nt.CELSIUS_SIGN):(this.conditionDetailed.temperatureAmount.textContent=this.response.current.temp_f,this.conditionDetailed.temperatureScale.textContent=nt.FAHRENHEIT_SIGN,this.conditionDetailed.feelsLikeAmount.textContent=this.response.current.feelslike_f,this.conditionDetailed.feelsLikeScale.textContent=nt.FAHRENHEIT_SIGN),this.conditionDetailed.conditionName.textContent=this.response.current.condition.text,this.conditionDetailed.chanceOfRain.textContent=this.responseStats.forecast.forecastday[0].hour[(new Date).getHours()].chance_of_rain,this.conditionDetailed.currentTime.textContent=this.response.location.localtime}renderHoursToday(){const t=this.responseStats.forecast.forecastday[0].hour;console.log(this);for(let e=0;e<this.hoursTodayRows.length;++e){let n=null,r=null;nt.isCelcius()?(n=t[e].temp_c,r=nt.CELSIUS_SIGN):(n=t[e].temp_f,r=nt.FAHRENHEIT_SIGN);const a=this.hoursTodayRows[e],i=new Date(t[e].time);a.innerHTML=`<td>\n\t\t\t\t${Z(i,"HH:mm")}\n\t\t\t</td><td>\n\t\t\t\t<img src="${"https:"+t[e].condition.icon}"/>\n\t\t\t</td><td><span class="temperature"><span class="number">${n}</span>\n\t\t\t\t<span class="scale-temperature">${r}</span>\n\n\t\t\t</span></td>`}}renderNextDaysConditions(){const t=this.responseStats.forecast.forecastday;for(let e=1;e<t.length;++e){let n=null,r=null;nt.isCelcius()?(n=t[e].day.avgtemp_c,r=nt.CELSIUS_SIGN):(n=t[e].day.avgtemp_f,r=nt.FAHRENHEIT_SIGN);const a=new Date(t[e].date);this.nextDaysConditions[e-1].innerHTML=`\n<time class="day-of-month">${Z(a,"do")}</time>\t\n<time class="weekday">${Z(a,"EEEE")}</time>\n<div class="weather-condition">\n\t<img src="${"https:"+t[e].day.condition.icon}" alt="weather condition name">\n                        <span class="temperature">\n\t\t<span class="number">${n}</span>\n\t\t<span class="scale-temperature">${r}</span></span>\n                    </div>\n<strong class="name-condition">${t[e].day.condition.text}</strong>\n`}}async updateWeatherData(){await this.updateWeatherDataFromQuery(this.searchInputElem.value||"auto:ip")}async updateWeatherDataFromQuery(t){const n=this.fetchWeatherData(t),r=(a=t,i=3,o.searchParams.set("days",i),e(o,a));var a,i;console.log("pre:",n,r),[this.response,this.responseStats]=await Promise.all([n,r]),console.log("post:",this.response,this.responseStats);const u=(new Date).getHours();this.gifs=await async function(t){return console.log(t),s.searchParams.set("q",t),(await fetch(s,{mode:"cors"})).json()}(this.response.current.condition.text+" weather "+(u>=20||u<=6?" night ":" noon "))}changeGifs(t){t>=this.gifs.data.length&&(t=0),this.conditionDetailed.gifElem.src=this.gifs.data[t].images.downsized_still.url,this.timerId=setTimeout(this.changeGifs.bind(this),3e3,++t)}fetchWeatherData(t){return function(t){return e(i,t)}(t)}static isCelcius(){return"celsius"==document.querySelector("input[name='temperature-scale']:checked").value}}new nt(document.body)}();