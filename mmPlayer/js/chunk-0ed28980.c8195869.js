(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed28980"],{"0a7a":function(t,e,n){},"0d03":function(t,e,n){var r=n("6eeb"),a=Date.prototype,i="Invalid Date",c="toString",o=a[c],s=a.getTime;new Date(NaN)+""!=i&&r(a,c,(function(){var t=s.call(this);return t===t?o.call(this):i}))},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),c=n("1d80"),o=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),m=n("d039"),f=[].push,h=Math.min,p=4294967295,v=!m((function(){return!RegExp(p,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?p:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var o,s,l,u=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,m+"g");while(o=d.call(v,r)){if(s=v.lastIndex,s>h&&(u.push(r.slice(h,o.index)),o.length>1&&o.index<r.length&&f.apply(u,o.slice(1)),l=o[0].length,h=s,u.length>=i))break;v.lastIndex===o.index&&v.lastIndex++}return h===r.length?!l&&v.test("")||u.push(""):u.push(r.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var c=n(r,t,this,a,r!==e);if(c.done)return c.value;var d=i(t),m=String(this),f=o(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new f(v?d:"^(?:"+d.source+")",b),y=void 0===a?p:a>>>0;if(0===y)return[];if(0===m.length)return null===u(x,m)?[m]:[];var C=0,_=0,w=[];while(_<m.length){x.lastIndex=v?_:0;var k,O=u(x,v?m:m.slice(_));if(null===O||(k=h(l(x.lastIndex+(v?0:_)),m.length))===C)_=s(m,_,g);else{if(w.push(m.slice(C,_)),w.length===y)return w;for(var S=1;S<=O.length-1;S++)if(w.push(O[S]),w.length===y)return w;_=C=k}}return w.push(m.slice(C)),w}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},2332:function(t,e,n){"use strict";var r=n("77a3"),a=n.n(r);a.a},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,i=n("e070");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),c=n("50c4"),o=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,m=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n){return[function(n,r){var a=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,i){var s=n(e,t,this,i);if(s.done)return s.value;var f=a(t),h=String(this),p="function"===typeof i;p||(i=String(i));var g=f.global;if(g){var b=f.unicode;f.lastIndex=0}var x=[];while(1){var y=u(f,h);if(null===y)break;if(x.push(y),!g)break;var C=String(y[0]);""===C&&(f.lastIndex=l(h,c(f.lastIndex),b))}for(var _="",w=0,k=0;k<x.length;k++){y=x[k];for(var O=String(y[0]),S=d(m(o(y.index),h.length),0),j=[],I=1;I<y.length;I++)j.push(v(y[I]));var E=y.groups;if(p){var D=[O].concat(j,S,h);void 0!==E&&D.push(E);var L=String(i.apply(void 0,D))}else L=r(O,h,S,j,E,i);S>=w&&(_+=h.slice(w,S)+L,w=S+O.length)}return _+h.slice(w)}];function r(t,n,r,a,c,o){var s=r+t.length,l=a.length,u=p;return void 0!==c&&(c=i(c),u=h),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":o=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var d=f(u/10);return 0===d?e:d<=l?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}o=a[u-1]}return void 0===o?"":o}))}}))},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,c,o=String(a(e)),s=r(n),l=o.length;return s<0||s>=l?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"77a3":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=void 0!==/()??/.exec("")[1],l=o||s;l&&(c=function(t){var e,n,c,l,u=this;return s&&(n=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),o&&(e=u.lastIndex),c=a.call(u,t),o&&c&&(u.lastIndex=u.global?c.index+c[0].length:e),s&&c&&c.length>1&&i.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},a3ad:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t.hotComments.length>0?n("dl",{staticClass:"comment-list",on:{scroll:function(e){return t.listScroll(e)}}},[n("dt",{staticClass:"comment-title"},[t._v("精彩评论")]),t._l(t.hotComments,(function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"comment-item-pic"}),n("h2",{staticClass:"comment-item-title"},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),n("span",{staticClass:"comment-opt-liked"},[n("mm-icon",{attrs:{type:"good"}}),t._v(" "+t._s(e.likedCount)+" ")],1)])])})),n("dt",{staticClass:"comment-title"},[t._v("最新评论（"+t._s(t.total)+"）")]),t._l(t.commentList,(function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"cover-img"})]),n("h2",{staticClass:"comment-item-title"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._l(e.beReplied,(function(e){return n("div",{key:e.user.userId,staticClass:"comment-item-replied"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))]),t._v(" ："+t._s(e.content)+" ")])})),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),e.likedCount>0?n("span",{staticClass:"comment-opt-liked"},[n("mm-icon",{attrs:{type:"good"}}),t._v(" "+t._s(e.likedCount)+" ")],1):t._e()])],2)}))],2):t._e()],1)},a=[],i=(n("99af"),n("0d03"),n("284c")),c=n("365c"),o=n("ca00"),s=n("f904"),l=n("ac0d"),u={name:"Comment",components:{MmLoading:s["a"]},filters:{format:function(t){var e,n=new Date(t),r={year:n.getFullYear(),month:n.getMonth(),date:n.getDate(),hours:n.getHours(),minutes:n.getMinutes()},a=new Date,i=a.getTime()-t;return e=a.getDate()===r.date&&i<6e4?"刚刚":a.getDate()===r.date&&i>6e4&&i<36e5?"".concat(Math.floor(i/6e4),"分钟前"):a.getDate()===r.date&&i>36e5&&i<864e5?"".concat(Object(o["a"])(r.hours),":").concat(Object(o["a"])(r.minutes)):a.getDate()!==r.date&&i<864e5?"昨天".concat(Object(o["a"])(r.hours),":").concat(Object(o["a"])(r.minutes)):a.getFullYear()===r.year?"".concat(r.month+1,"月").concat(r.date,"日"):"".concat(r.year,"年").concat(r.month+1,"月").concat(r.date,"日"),e}},mixins:[l["a"]],data:function(){return{lockUp:!0,page:0,hotComments:[],commentList:[],total:null}},watch:{commentList:function(t,e){t.length!==e.length&&(this.lockUp=!1)}},created:function(){this.initData()},methods:{initData:function(){var t=this;Object(c["a"])(this.$route.params.id,this.page).then((function(e){200===e.data.code&&(t.hotComments=e.data.hotComments,t.commentList=e.data.comments,t.total=e.data.total,t.lockUp=!0,t._hideLoad())}))},listScroll:function(t){if(!this.lockUp){var e=t.target,n=e.scrollTop,r=e.scrollHeight,a=e.offsetHeight;n+a>=r-100&&(this.lockUp=!0,this.page+=1,this.pullUp())}},pullUp:function(){var t=this;Object(c["a"])(this.$route.params.id,this.page).then((function(e){200===e.data.code&&(t.commentList=[].concat(Object(i["a"])(t.commentList),Object(i["a"])(e.data.comments)))}))}}},d=u,m=(n("b01f"),n("2877")),f=Object(m["a"])(d,r,a,!1,null,"a22effda",null);e["default"]=f.exports},ac0d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("2fa7"),a=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}c({},Object(a["c"])(["playing","currentMusic"])),c({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(a["d"])({setPlaying:"SET_PLAYING"}),{},Object(a["b"])(["selectPlay"]));var o={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b01f:function(t,e,n){"use strict";var r=n("0a7a"),a=n.n(r);a.a},ca00:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s}));n("99af"),n("ac1f"),n("5319"),n("1276"),n("498a");function r(t,e){var n=-1,r=t.length;e||(e=new Array(r));while(++n<r)e[n]=t[n];return e}var a=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,a=e-1,i=r(t);while(++n<e){var c=n+Math.floor(Math.random()*(a-n+1)),o=i[c];i[c]=i[n],i[n]=o}return i};function i(t){return t<10?"0"+t:t}var c=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;function o(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;r++){var a=e[r],i=c.exec(a);if(i){var o=a.replace(c,"").trim();o&&n.push({time:(6e4*i[1]+1e3*i[2]+1*(i[3]||0))/1e3,text:o})}}return n}function s(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(i(e),":").concat(i(n))}},d784:function(t,e,n){"use strict";var r=n("9112"),a=n("6eeb"),i=n("d039"),c=n("b622"),o=n("9263"),s=c("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var m=c(t),f=!i((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),h=f&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!f||!h||"replace"===t&&!l||"split"===t&&!u){var p=/./[m],v=n(m,""[t],(function(t,e,n,r,a){return e.exec===o?f&&!a?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=v[0],b=v[1];a(String.prototype,t,g),a(RegExp.prototype,m,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)}),d&&r(RegExp.prototype[m],"sham",!0)}}},e070:function(t,e,n){var r=n("d039"),a=n("5899"),i="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},f904:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[n("div",{staticClass:"mm-loading-content"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},a=[],i={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},c=i,o=(n("2332"),n("2877")),s=Object(o["a"])(c,r,a,!1,null,null,null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-0ed28980.c8195869.js.map