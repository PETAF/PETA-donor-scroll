(()=>{var i={705:i=>{"use strict";i.exports=function(i){var n=[];return n.toString=function(){return this.map((function(n){var e=i(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(i,e,p){"string"==typeof i&&(i=[[null,i,""]]);var r={};if(p)for(var t=0;t<this.length;t++){var a=this[t][0];null!=a&&(r[a]=!0)}for(var c=0;c<i.length;c++){var o=[].concat(i[c]);p&&r[o[0]]||(e&&(o[2]?o[2]="".concat(e," and ").concat(o[2]):o[2]=e),n.push(o))}},n}},600:(i,n,e)=>{var p=e(906),r=e(930),t=e(319),a=e(866),c=e(217),o=e(977),d=e(84);d.alea=p,d.xor128=r,d.xorwow=t,d.xorshift7=a,d.xor4096=c,d.tychei=o,i.exports=d},906:function(i,n,e){var p;!function(i,r,t){function a(i){var n,e=this,p=(n=4022871197,function(i){i=i.toString();for(var e=0;e<i.length;e++){var p=.02519603282416938*(n+=i.charCodeAt(e));p-=n=p>>>0,n=(p*=n)>>>0,n+=4294967296*(p-=n)}return 2.3283064365386963e-10*(n>>>0)});e.next=function(){var i=2091639*e.s0+2.3283064365386963e-10*e.c;return e.s0=e.s1,e.s1=e.s2,e.s2=i-(e.c=0|i)},e.c=1,e.s0=p(" "),e.s1=p(" "),e.s2=p(" "),e.s0-=p(i),e.s0<0&&(e.s0+=1),e.s1-=p(i),e.s1<0&&(e.s1+=1),e.s2-=p(i),e.s2<0&&(e.s2+=1),p=null}function c(i,n){return n.c=i.c,n.s0=i.s0,n.s1=i.s1,n.s2=i.s2,n}function o(i,n){var e=new a(i),p=n&&n.state,r=e.next;return r.int32=function(){return 4294967296*e.next()|0},r.double=function(){return r()+11102230246251565e-32*(2097152*r()|0)},r.quick=r,p&&("object"==typeof p&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.alea=o}(0,i=e.nmd(i),e.amdD)},977:function(i,n,e){var p;!function(i,r,t){function a(i){var n=this,e="";n.next=function(){var i=n.b,e=n.c,p=n.d,r=n.a;return i=i<<25^i>>>7^e,e=e-p|0,p=p<<24^p>>>8^r,r=r-i|0,n.b=i=i<<20^i>>>12^e,n.c=e=e-p|0,n.d=p<<16^e>>>16^r,n.a=r-i|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,i===Math.floor(i)?(n.a=i/4294967296|0,n.b=0|i):e+=i;for(var p=0;p<e.length+20;p++)n.b^=0|e.charCodeAt(p),n.next()}function c(i,n){return n.a=i.a,n.b=i.b,n.c=i.c,n.d=i.d,n}function o(i,n){var e=new a(i),p=n&&n.state,r=function(){return(e.next()>>>0)/4294967296};return r.double=function(){do{var i=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===i);return i},r.int32=e.next,r.quick=r,p&&("object"==typeof p&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.tychei=o}(0,i=e.nmd(i),e.amdD)},930:function(i,n,e){var p;!function(i,r,t){function a(i){var n=this,e="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var i=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^i^i>>>8},i===(0|i)?n.x=i:e+=i;for(var p=0;p<e.length+64;p++)n.x^=0|e.charCodeAt(p),n.next()}function c(i,n){return n.x=i.x,n.y=i.y,n.z=i.z,n.w=i.w,n}function o(i,n){var e=new a(i),p=n&&n.state,r=function(){return(e.next()>>>0)/4294967296};return r.double=function(){do{var i=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===i);return i},r.int32=e.next,r.quick=r,p&&("object"==typeof p&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.xor128=o}(0,i=e.nmd(i),e.amdD)},217:function(i,n,e){var p;!function(i,r,t){function a(i){var n=this;n.next=function(){var i,e,p=n.w,r=n.X,t=n.i;return n.w=p=p+1640531527|0,e=r[t+34&127],i=r[t=t+1&127],e^=e<<13,i^=i<<17,e^=e>>>15,i^=i>>>12,e=r[t]=e^i,n.i=t,e+(p^p>>>16)|0},function(i,n){var e,p,r,t,a,c=[],o=128;for(n===(0|n)?(p=n,n=null):(n+="\0",p=0,o=Math.max(o,n.length)),r=0,t=-32;t<o;++t)n&&(p^=n.charCodeAt((t+32)%n.length)),0===t&&(a=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,t>=0&&(a=a+1640531527|0,r=0==(e=c[127&t]^=p+a)?r+1:0);for(r>=128&&(c[127&(n&&n.length||0)]=-1),r=127,t=512;t>0;--t)p=c[r+34&127],e=c[r=r+1&127],p^=p<<13,e^=e<<17,p^=p>>>15,e^=e>>>12,c[r]=p^e;i.w=a,i.X=c,i.i=r}(n,i)}function c(i,n){return n.i=i.i,n.w=i.w,n.X=i.X.slice(),n}function o(i,n){null==i&&(i=+new Date);var e=new a(i),p=n&&n.state,r=function(){return(e.next()>>>0)/4294967296};return r.double=function(){do{var i=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===i);return i},r.int32=e.next,r.quick=r,p&&(p.X&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.xor4096=o}(0,i=e.nmd(i),e.amdD)},866:function(i,n,e){var p;!function(i,r,t){function a(i){var n=this;n.next=function(){var i,e,p=n.x,r=n.i;return i=p[r],e=(i^=i>>>7)^i<<24,e^=(i=p[r+1&7])^i>>>10,e^=(i=p[r+3&7])^i>>>3,e^=(i=p[r+4&7])^i<<7,i=p[r+7&7],e^=(i^=i<<13)^i<<9,p[r]=e,n.i=r+1&7,e},function(i,n){var e,p=[];if(n===(0|n))p[0]=n;else for(n=""+n,e=0;e<n.length;++e)p[7&e]=p[7&e]<<15^n.charCodeAt(e)+p[e+1&7]<<13;for(;p.length<8;)p.push(0);for(e=0;e<8&&0===p[e];++e);for(8==e?p[7]=-1:p[e],i.x=p,i.i=0,e=256;e>0;--e)i.next()}(n,i)}function c(i,n){return n.x=i.x.slice(),n.i=i.i,n}function o(i,n){null==i&&(i=+new Date);var e=new a(i),p=n&&n.state,r=function(){return(e.next()>>>0)/4294967296};return r.double=function(){do{var i=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===i);return i},r.int32=e.next,r.quick=r,p&&(p.x&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.xorshift7=o}(0,i=e.nmd(i),e.amdD)},319:function(i,n,e){var p;!function(i,r,t){function a(i){var n=this,e="";n.next=function(){var i=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^i^i<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,i===(0|i)?n.x=i:e+=i;for(var p=0;p<e.length+64;p++)n.x^=0|e.charCodeAt(p),p==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function c(i,n){return n.x=i.x,n.y=i.y,n.z=i.z,n.w=i.w,n.v=i.v,n.d=i.d,n}function o(i,n){var e=new a(i),p=n&&n.state,r=function(){return(e.next()>>>0)/4294967296};return r.double=function(){do{var i=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===i);return i},r.int32=e.next,r.quick=r,p&&("object"==typeof p&&c(p,e),r.state=function(){return c(e,{})}),r}r&&r.exports?r.exports=o:e.amdD&&e.amdO?void 0===(p=function(){return o}.call(n,e,n,r))||(r.exports=p):this.xorwow=o}(0,i=e.nmd(i),e.amdD)},84:(i,n,e)=>{var p;!function(r,t){var a,c=(0,eval)("this"),o=256,d=t.pow(o,6),h=t.pow(2,52),s=2*h,$=255;function m(i,n,e){var p=[],$=y(f((n=1==n?{entropy:!0}:n||{}).entropy?[i,g(r)]:null==i?function(){try{var i;return a&&(i=a.randomBytes)?i=i(o):(i=new Uint8Array(o),(c.crypto||c.msCrypto).getRandomValues(i)),g(i)}catch(i){var n=c.navigator,e=n&&n.plugins;return[+new Date,c,e,c.screen,g(r)]}}():i,3),p),m=new l(p),v=function(){for(var i=m.g(6),n=d,e=0;i<h;)i=(i+e)*o,n*=o,e=m.g(1);for(;i>=s;)i/=2,n/=2,e>>>=1;return(i+e)/n};return v.int32=function(){return 0|m.g(4)},v.quick=function(){return m.g(4)/4294967296},v.double=v,y(g(m.S),r),(n.pass||e||function(i,n,e,p){return p&&(p.S&&u(p,m),i.state=function(){return u(m,{})}),e?(t.random=i,n):i})(v,$,"global"in n?n.global:this==t,n.state)}function l(i){var n,e=i.length,p=this,r=0,t=p.i=p.j=0,a=p.S=[];for(e||(i=[e++]);r<o;)a[r]=r++;for(r=0;r<o;r++)a[r]=a[t=$&t+i[r%e]+(n=a[r])],a[t]=n;(p.g=function(i){for(var n,e=0,r=p.i,t=p.j,a=p.S;i--;)n=a[r=$&r+1],e=e*o+a[$&(a[r]=a[t=$&t+n])+(a[t]=n)];return p.i=r,p.j=t,e})(o)}function u(i,n){return n.i=i.i,n.j=i.j,n.S=i.S.slice(),n}function f(i,n){var e,p=[],r=typeof i;if(n&&"object"==r)for(e in i)try{p.push(f(i[e],n-1))}catch(i){}return p.length?p:"string"==r?i:i+"\0"}function y(i,n){for(var e,p=i+"",r=0;r<p.length;)n[$&r]=$&(e^=19*n[$&r])+p.charCodeAt(r++);return g(n)}function g(i){return String.fromCharCode.apply(0,i)}if(t.seedrandom=m,y(t.random(),r),i.exports){i.exports=m;try{a=e(42)}catch(i){}}else void 0===(p=function(){return m}.call(n,e,n,i))||(i.exports=p)}([],Math)},159:(i,n,e)=>{e(600);var p=e(972);i.exports=p},972:function(i){(function(){var n={};Math.seedrandom&&(seedrandom=Math.seedrandom);var e=function(i){return"[object Array]"===Object.prototype.toString.call(i)},p=function(i){return/(number|string)/i.test(Object.prototype.toString.call(i).match(/^\[object (.*)\]$/)[1])?i:isNaN(i)?Number(String(this.strSeed=i).split("").map((function(i){return i.charCodeAt(0)})).join("")):i},r=function(i,n,e){return Math.floor(i()*(e-n+1))+n};n.shuffle=function(i,n){if(!e(i))return null;n=p(n)||"none";for(var t=i.length,a=seedrandom(n),c=[],o=[],d=0;d<t;d++)o.push(d);for(d=0;d<t;d++){var h=r(a,0,o.length-1),s=o[h];o.splice(h,1),c.push(i[s])}return c},n.unshuffle=function(i,n){if(!e(i))return null;n=p(n)||"none";for(var t=i.length,a=seedrandom(n),c=[],o=[],d=0;d<t;d++)c.push(null),o.push(d);for(d=0;d<t;d++){var h=r(a,0,o.length-1),s=o[h];o.splice(h,1),c[s]=i[d]}return c},i.exports=n}).call(this)},745:(i,n,e)=>{"use strict";e.d(n,{Z:()=>t});var p=e(705),r=e.n(p)()((function(i){return i[1]}));r.push([i.id,"#ticker-scroll{height:1.1rem;overflow:hidden;position:relative;height:4rem;text-align:center;background-color:#e8e8e8;font-size:1.125rem;font-family:open sans,Arial,Helvetica,sans-serif;color:#555;line-height:1.4;font-weight:700;margin:0 0 1rem 0}#ticker-scroll ul{margin-left:0px !important;float:left;width:100%;-webkit-animation:tickerScroll 100s cubic-bezier(1, 0, 0.5, 0) infinite;animation:tickerScroll 100s cubic-bezier(1, 0, 0.5, 0) infinite}#ticker-scroll ul:hover{-webkit-animation-play-state:paused;animation-play-state:paused}#ticker-scroll ul li{line-height:4rem;list-style:none}.en__field--donorScrollPreference>.en__field__label{display:none}.en__field--donorScrollPreference .en__field__label--item{font-size:1rem;width:100%;vertical-align:top !important}.Anonymous__alignment{float:right;width:63%;padding:0 31px 0 20px}@media(min-width: 601px)and (max-width: 944px){.Anonymous__alignment{float:unset;padding:0px}}@media screen and (max-width: 472px){.Anonymous__alignment{float:unset;padding:0px}}@-webkit-keyframes tickerScroll{0%{margin-top:0}1.98%{margin-top:-4rem}3.96%{margin-top:-8rem}5.9399999999999995%{margin-top:-12rem}7.92%{margin-top:-16rem}9.9%{margin-top:-20rem}11.879999999999999%{margin-top:-24rem}13.86%{margin-top:-28rem}15.84%{margin-top:-32rem}17.82%{margin-top:-36rem}19.8%{margin-top:-40rem}21.78%{margin-top:-44rem}23.759999999999998%{margin-top:-48rem}25.74%{margin-top:-52rem}27.72%{margin-top:-56rem}29.7%{margin-top:-60rem}31.68%{margin-top:-64rem}33.66%{margin-top:-68rem}35.64%{margin-top:-72rem}37.62%{margin-top:-76rem}39.6%{margin-top:-80rem}41.58%{margin-top:-84rem}43.56%{margin-top:-88rem}45.54%{margin-top:-92rem}47.519999999999996%{margin-top:-96rem}49.5%{margin-top:-100rem}51.48%{margin-top:-104rem}53.46%{margin-top:-108rem}55.44%{margin-top:-112rem}57.42%{margin-top:-116rem}59.4%{margin-top:-120rem}61.38%{margin-top:-124rem}63.36%{margin-top:-128rem}65.34%{margin-top:-132rem}67.32%{margin-top:-136rem}69.3%{margin-top:-140rem}71.28%{margin-top:-144rem}73.26%{margin-top:-148rem}75.24%{margin-top:-152rem}77.22%{margin-top:-156rem}79.2%{margin-top:-160rem}81.17999999999999%{margin-top:-164rem}83.16%{margin-top:-168rem}85.14%{margin-top:-172rem}87.12%{margin-top:-176rem}89.1%{margin-top:-180rem}91.08%{margin-top:-184rem}93.06%{margin-top:-188rem}95.03999999999999%{margin-top:-192rem}97.02%{margin-top:-196rem}99%{margin-top:-200rem}100%{margin-top:0}}@keyframes tickerScroll{0%{margin-top:0}1.98%{margin-top:-4rem}3.96%{margin-top:-8rem}5.9399999999999995%{margin-top:-12rem}7.92%{margin-top:-16rem}9.9%{margin-top:-20rem}11.879999999999999%{margin-top:-24rem}13.86%{margin-top:-28rem}15.84%{margin-top:-32rem}17.82%{margin-top:-36rem}19.8%{margin-top:-40rem}21.78%{margin-top:-44rem}23.759999999999998%{margin-top:-48rem}25.74%{margin-top:-52rem}27.72%{margin-top:-56rem}29.7%{margin-top:-60rem}31.68%{margin-top:-64rem}33.66%{margin-top:-68rem}35.64%{margin-top:-72rem}37.62%{margin-top:-76rem}39.6%{margin-top:-80rem}41.58%{margin-top:-84rem}43.56%{margin-top:-88rem}45.54%{margin-top:-92rem}47.519999999999996%{margin-top:-96rem}49.5%{margin-top:-100rem}51.48%{margin-top:-104rem}53.46%{margin-top:-108rem}55.44%{margin-top:-112rem}57.42%{margin-top:-116rem}59.4%{margin-top:-120rem}61.38%{margin-top:-124rem}63.36%{margin-top:-128rem}65.34%{margin-top:-132rem}67.32%{margin-top:-136rem}69.3%{margin-top:-140rem}71.28%{margin-top:-144rem}73.26%{margin-top:-148rem}75.24%{margin-top:-152rem}77.22%{margin-top:-156rem}79.2%{margin-top:-160rem}81.17999999999999%{margin-top:-164rem}83.16%{margin-top:-168rem}85.14%{margin-top:-172rem}87.12%{margin-top:-176rem}89.1%{margin-top:-180rem}91.08%{margin-top:-184rem}93.06%{margin-top:-188rem}95.03999999999999%{margin-top:-192rem}97.02%{margin-top:-196rem}99%{margin-top:-200rem}100%{margin-top:0}}#ticker-news{width:99%;overflow:hidden;height:5rem;box-sizing:content-box;margin:0 0 1rem 0;border:3px solid #e9e9e9;border-radius:10px}#ticker-news .ticker{display:inline-block;height:5rem;line-height:5rem;white-space:nowrap;padding-right:100%;box-sizing:content-box;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:tickerNews;animation-name:tickerNews;-webkit-animation-duration:250s;animation-duration:250s}#ticker-news .ticker:hover{-webkit-animation-play-state:paused;animation-play-state:paused}#ticker-news .ticker__item{display:inline-block;padding:0 2rem;font-size:1.125rem;font-family:open sans,Arial,Helvetica,sans-serif;color:#555;line-height:1.4;font-weight:700}#ticker-news .ticker__item:hover{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes tickerNews{0%{transform:translate3d(0%, 0, 0);visibility:visible}90%{transform:translate3d(-87.5%, 0%, 0)}90.01%{transform:translate3d(-87.5%, 80%, 0)}90.02%{transform:translate3d(9%, 80%, 0)}90.03%{transform:translate3d(9%, 0, 0)}90.04%{transform:translate3d(9%, 0, 0)}100%{transform:translate3d(0%, 0, 0)}}@keyframes tickerNews{0%{transform:translate3d(0%, 0, 0);visibility:visible}90%{transform:translate3d(-87.5%, 0%, 0)}90.01%{transform:translate3d(-87.5%, 80%, 0)}90.02%{transform:translate3d(9%, 80%, 0)}90.03%{transform:translate3d(9%, 0, 0)}90.04%{transform:translate3d(9%, 0, 0)}100%{transform:translate3d(0%, 0, 0)}}",""]);const t=r},379:i=>{"use strict";var n=[];function e(i){for(var e=-1,p=0;p<n.length;p++)if(n[p].identifier===i){e=p;break}return e}function p(i,p){for(var t={},a=[],c=0;c<i.length;c++){var o=i[c],d=p.base?o[0]+p.base:o[0],h=t[d]||0,s="".concat(d," ").concat(h);t[d]=h+1;var $=e(s),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==$?(n[$].references++,n[$].updater(m)):n.push({identifier:s,updater:r(m,p),references:1}),a.push(s)}return a}function r(i,n){var e=n.domAPI(n);return e.update(i),function(n){if(n){if(n.css===i.css&&n.media===i.media&&n.sourceMap===i.sourceMap)return;e.update(i=n)}else e.remove()}}i.exports=function(i,r){var t=p(i=i||[],r=r||{});return function(i){i=i||[];for(var a=0;a<t.length;a++){var c=e(t[a]);n[c].references--}for(var o=p(i,r),d=0;d<t.length;d++){var h=e(t[d]);0===n[h].references&&(n[h].updater(),n.splice(h,1))}t=o}}},569:i=>{"use strict";var n={};i.exports=function(i,e){var p=function(i){if(void 0===n[i]){var e=document.querySelector(i);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(i){e=null}n[i]=e}return n[i]}(i);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(e)}},216:i=>{"use strict";i.exports=function(i){var n=document.createElement("style");return i.setAttributes(n,i.attributes),i.insert(n),n}},565:(i,n,e)=>{"use strict";i.exports=function(i){var n=e.nc;n&&i.setAttribute("nonce",n)}},795:i=>{"use strict";i.exports=function(i){var n=i.insertStyleElement(i);return{update:function(e){!function(i,n,e){var p=e.css,r=e.media,t=e.sourceMap;r?i.setAttribute("media",r):i.removeAttribute("media"),t&&"undefined"!=typeof btoa&&(p+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),n.styleTagTransform(p,i)}(n,i,e)},remove:function(){!function(i){if(null===i.parentNode)return!1;i.parentNode.removeChild(i)}(n)}}}},589:i=>{"use strict";i.exports=function(i,n){if(n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}},42:()=>{}},n={};function e(p){var r=n[p];if(void 0!==r)return r.exports;var t=n[p]={id:p,loaded:!1,exports:{}};return i[p].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}e.amdD=function(){throw new Error("define cannot be used indirect")},e.amdO={},e.n=i=>{var n=i&&i.__esModule?()=>i.default:()=>i;return e.d(n,{a:n}),n},e.d=(i,n)=>{for(var p in n)e.o(n,p)&&!e.o(i,p)&&Object.defineProperty(i,p,{enumerable:!0,get:n[p]})},e.o=(i,n)=>Object.prototype.hasOwnProperty.call(i,n),e.nmd=i=>(i.paths=[],i.children||(i.children=[]),i),(()=>{"use strict";function i(i,n){for(var e=0;e<n.length;e++){var p=n[e];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(i,p.key,p)}}var n=e(159);const p=function(){function e(){!function(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.donors=["Anonymous chipped in $15","Marty F. chipped in $50","Cynthia C. chipped in $3","Mary G. chipped in $25","Jenna W. chipped in $3","Jean B. chipped in $20","Connor E. chipped in $5","Anonymous chipped in $150","Sidni T. chipped in $25","Lori R. chipped in $25","Lavinia R. chipped in $5","Astrid P. chipped in $25","Anonymous chipped in $12","Donna K. chipped in $25","Joan L. chipped in $10","Yuliya J. chipped in $5","Audra M. chipped in $25","Darlene B. chipped in $3","Ana C. chipped in $35","Marion A. chipped in $25","Mark S. chipped in $50","Sandy Z. chipped in $20","Robin C. chipped in $25","Joseph M. chipped in $15","Miriam K. chipped in $50","Jill W. chipped in $25","Ramona F. chipped in $10","Greg M. chipped in $25","Shoshannah T. chipped in $15","Raymond H. chipped in $10","Vera T. chipped in $50","Barbara Y. chipped in $35","Kaoshi J. chipped in $5","Pua A. chipped in $25","Sheereen M. chipped in $5","Anonymous chipped in $5","Patrick G. chipped in $100","Josephine A. chipped in $5","Aldo C. chipped in $35","Jude C. chipped in $35","mariana w. chipped in $35","Gail G. chipped in $35","Mattie E. chipped in $25","Zhixiao C. chipped in $10","Karalyn S. chipped in $5","Anonymous chipped in $3","Anonymous chipped in $20","Ember B. chipped in $25","Dirk R. chipped in $5","Pat L. chipped in $3","Claudia M. chipped in $25","Laurie W. chipped in $50","Harry M. chipped in $16","Cherry H. chipped in $10","Patricia A. chipped in $10","Anonymous chipped in $35","Cristian P. chipped in $20","Nell R. chipped in $25","Donna R. chipped in $3","Jean S. chipped in $10","Vivian K. chipped in $25","Anonymous chipped in $25","Molly R. chipped in $50","Janee T. chipped in $35","Millie O. chipped in $25","Anonymous chipped in $107","Sally B. chipped in $25","Brooke R. chipped in $20","Sarah G. chipped in $50","Abigail G. chipped in $35","Anonymous chipped in $20","Johanna D. chipped in $35","Amaliya R. chipped in $3","Carole R. chipped in $5","Beth C. chipped in $15","Danielle F. chipped in $50","Ylva G. chipped in $3","Terri T. chipped in $3","Maria F. chipped in $35","Myoung C. chipped in $10","Roxanne S. chipped in $25","Sara H. chipped in $3","Erica P. chipped in $10","Daniel F. chipped in $3","Myles J. chipped in $4","Loredana P. chipped in $10","Evelin P. chipped in $15","Barbaral L. chipped in $50","Leilani M. chipped in $12","Nicholas F. chipped in $25","Sudha B. chipped in $50","Anonymous chipped in $5","Elisabeth R. chipped in $6","Jaesung S. chipped in $6","Doriane E. chipped in $25","Debbie K. chipped in $25","RondaM. B. chipped in $25","Gioia M. chipped in $5","Mahesh R. chipped in $5","Teri S. chipped in $5","Vanyoska G. chipped in $3","Anonymous chipped in $100","Zadina J. chipped in $3","Renata K. chipped in $10","Alison T. chipped in $10","Sylvia W. chipped in $3","Annie D. chipped in $5","Vittoria V. chipped in $25","Anonymous chipped in $50","Sabrina C. chipped in $3","Linda B. chipped in $10","Melissa N. chipped in $15","Barbara L. chipped in $35","Adam T. chipped in $20","Rain W. chipped in $5","Melissa S. chipped in $4","Gary M. chipped in $25","Anonymous chipped in $35","Anonymous chipped in $5","Joanne M. chipped in $25","Anonymous chipped in $3","Anna U. chipped in $10","Franklin C. chipped in $25","Kara M. chipped in $25","Anonymous chipped in $60","Natalia S. chipped in $35","Lyndsey B. chipped in $3","Anonymous chipped in $25","Anonymous chipped in $3","Zana K. chipped in $7","Dawn B. chipped in $35","Anonymous chipped in $5","Karen O. chipped in $25","Bruno G. chipped in $2","David H. chipped in $25","Judith B. chipped in $35","Thomas G. chipped in $10","Julie P. chipped in $35","Anonymous chipped in $35","Lewis S. chipped in $35","Debbie P. chipped in $20","Sherry B. chipped in $15","Adam B. chipped in $10","Carol J. chipped in $5","Anonymous chipped in $5","Carole R. chipped in $5","Vasil T. chipped in $35","Carol K. chipped in $35","Connie B. chipped in $10","Anonymous chipped in $5","Sherrel C. chipped in $10","Brandy J. chipped in $3","Redding O. chipped in $3","Colin F. chipped in $5","Christine M. chipped in $10","Anonymous chipped in $10","Kevin P. chipped in $35","Robert T. chipped in $10","Christian H. chipped in $25","Peter H. chipped in $10","Anil K. chipped in $35","James C. chipped in $3","Sharon B. chipped in $10","Eleonora C. chipped in $35","David D. chipped in $3","Lynne E. chipped in $5","Anne L. chipped in $5","Jennifer O. chipped in $10","Anonymous chipped in $100","Annette S. chipped in $3","Marilyne G. chipped in $5","Jennifer A. chipped in $3","Lonnell V. chipped in $1","Lee K. chipped in $25","Anonymous chipped in $25","Elizabeth A. chipped in $150","Diana V. chipped in $7","Anonymous chipped in $100","David H. chipped in $3","Ana M. chipped in $20","Erica M. chipped in $35","Meg B. chipped in $20","Marla D. chipped in $5","Kaya S. chipped in $25","Kimberly N. chipped in $25","Ginger G. chipped in $5","Jolanta D. chipped in $5","Kara L. chipped in $3","Marta C. chipped in $25","Kalha l. chipped in $3","Nomi D. chipped in $25","Shelley T. chipped in $5","Ellen M. chipped in $2","Tracy R. chipped in $25","Alicjia L. chipped in $3.5","Brian L. chipped in $1","Tracey H. chipped in $35","Jonelle H. chipped in $5","Kirsten L. chipped in $25","Susan T. chipped in $10","Viviana C. chipped in $25","Rose M. chipped in $5","Mariana B. chipped in $20","Pam E. chipped in $25","Catherine M. chipped in $50","Audra M. chipped in $3","Daniel R. chipped in $35","Elina T. chipped in $25","Joseph G. chipped in $5","Valerie Y. chipped in $10","Brandon B. chipped in $35","Pilar C. chipped in $25","Emilia T. chipped in $5","Anonymous chipped in $25","Luis L. chipped in $35","Anna B. chipped in $25","Aiyana A. chipped in $10","Wendy O. chipped in $3","Sarah D. chipped in $15","Suzy L. chipped in $20","Eugenia B. chipped in $25","Elizabeth J. chipped in $35","Anonymous chipped in $35","Jim S. chipped in $3","Kimberley B. chipped in $35","Lisa B. chipped in $35","Margo A. chipped in $10","Hannah S. chipped in $25","Kathryn J. chipped in $15","Deborah C. chipped in $10","Ashley A. chipped in $25","Anonymous chipped in $25","Alida W. chipped in $25","Lynn P. chipped in $3","Caroline C. chipped in $3","Anonymous chipped in $5","Anonymous chipped in $3","Cristal L. chipped in $3","Anonymous chipped in $3","Beverly D. chipped in $10","William H. chipped in $100","Kerri L. chipped in $25","Nancy C. chipped in $5","Amy G. chipped in $25","Neve B. chipped in $25","Robyn B. chipped in $25","Diane C. chipped in $10","Paris P. chipped in $3","Samantha F. chipped in $25","Virginia J. chipped in $20","Linda N. chipped in $5","Katie C. chipped in $5","Patrick S. chipped in $5","Anonymous chipped in $35","Anonymous chipped in $5","Anonymous chipped in $3","Glen B. chipped in $35","Melanie K. chipped in $3","Deborah K. chipped in $35","Janet S. chipped in $25","Gin S. chipped in $5","Holly G. chipped in $10","Mandy E. chipped in $10","Richard L. chipped in $20","Isabel T. chipped in $20","Sophia A. chipped in $5","Lesha E. chipped in $35","Anonymous chipped in $25","Jan K. chipped in $25","Margot H. chipped in $5","Edna D. chipped in $20","Anna N. chipped in $100","James M. chipped in $100","Marie K. chipped in $10","Patrice L. chipped in $100","Catherine S. chipped in $35","Anonymous chipped in $5","Anonymous chipped in $10","Faith F. chipped in $10","Edh S. chipped in $2","Anonymous chipped in $5","Anna V. chipped in $10","Anonymous chipped in $35","Deeann B. chipped in $25","Ann A. chipped in $100","Anonymous chipped in $5","Raphael S. chipped in $3","Anonymous chipped in $3","Angie B. chipped in $10","Niani D. chipped in $3","Anita E. chipped in $3","Jean W. chipped in $3","Kim B. chipped in $25","Jonea B. chipped in $3","Lydia R. chipped in $5","Ruth K. chipped in $35","Anonymous chipped in $10","Kathy S. chipped in $25","Alison B. chipped in $25","Anonymous chipped in $25","Maria C. chipped in $5","Anonymous chipped in $10","Tami F. chipped in $25","Lynn R. chipped in $20","Angela M. chipped in $35","Jay T. chipped in $10","Christina P. chipped in $10","Lidia M. chipped in $25","Anneli N. chipped in $3","Piari K. chipped in $35","Anonymous chipped in $50","Jacinta A. chipped in $10","Yolanda B. chipped in $35","Deb S. chipped in $20","Karen B. chipped in $35","Anonymous chipped in $10","Elnara K. chipped in $35","Jose M. chipped in $10","Anonymous chipped in $3","Kathleen S. chipped in $100","Marcella B. chipped in $35","Carmen H. chipped in $25","Sandra A. chipped in $25","Carol P. chipped in $100","Dixie P. chipped in $50","April C. chipped in $10","Anne M. chipped in $25","Valerie O. chipped in $20","Anonymous chipped in $15","Ella H. chipped in $5","Bonnie G. chipped in $3","Deborah B. chipped in $5","Lori K. chipped in $25","Suzanne H. chipped in $10","Jean M. chipped in $15","Anonymous chipped in $35","Kim K. chipped in $35","Jill B. chipped in $25","David W. chipped in $10","Maria D. chipped in $7","Anonymous chipped in $25","Hudson S. chipped in $35","Beverly C. chipped in $5","Ann E. chipped in $5","Anonymous chipped in $10","Anonymous chipped in $25","Elizabeth W. chipped in $35","Anonymous chipped in $35","Anonymous chipped in $25","Tamela R. chipped in $35","Chuck L. chipped in $25","Michelle M. chipped in $5","Leigh S. chipped in $35","Dianne L. chipped in $10","Krista S. chipped in $3","Pille J. chipped in $25","Kamiar M. chipped in $25","Nicolas E. chipped in $25","Patricia P. chipped in $20","Burton W. chipped in $3","Deborah D. chipped in $25","Artur D. chipped in $25","Peter W. chipped in $35","Richard Z. chipped in $25","Jane B. chipped in $25","Camryn M. chipped in $5","Kathleen T. chipped in $10","Laura T. chipped in $50","Elizabeth W. chipped in $3","Anonymous chipped in $11","Teresa W. chipped in $25","Lucie B. chipped in $6","Renee G. chipped in $25","Anjala T. chipped in $25","Abha S. chipped in $25","Liana P. chipped in $10","Marguerite W. chipped in $5","Lynn H. chipped in $25","Judy P. chipped in $3","Jessica A. chipped in $25","akram g. chipped in $25","Susan M. chipped in $10","Anonymous chipped in $20","Linda G. chipped in $25","Cosma F. chipped in $35","Elaine R. chipped in $5","Lisa G. chipped in $5","Amy B. chipped in $25","Radha B. chipped in $35","Donna A. chipped in $35","Gail F. chipped in $20","Pamela K. chipped in $100","Stacey R. chipped in $23","Amelie B. chipped in $10","Anonymous chipped in $5","Elaine S. chipped in $25","Stella K. chipped in $50","Audra H. chipped in $10","Carlos G. chipped in $10","Lucy H. chipped in $10","Marcus S. chipped in $10","Lesley J. chipped in $5","Thomas S. chipped in $35","Mona A. chipped in $5","Anonymous chipped in $25","Ron M. chipped in $10","Sajid A. chipped in $20","Anonymous chipped in $2","Trese B. chipped in $10","Julia C. chipped in $2","Tone D. chipped in $25","Shannon T. chipped in $25","Anonymous chipped in $5","Sandi R. chipped in $5","Lisa C. chipped in $5","Nadine R. chipped in $10","John B. chipped in $10","Kenzie B. chipped in $5","Alexandros V. chipped in $25","Angelika Z. chipped in $5","Lucia P. chipped in $35","Sharae P. chipped in $25","Melanie H. chipped in $35","Paige R. chipped in $3","Kevin M. chipped in $5","Barry M. chipped in $3","Pierre B. chipped in $35","Kristin B. chipped in $3","Suzanne V. chipped in $20","Gord C. chipped in $35","Celeste O. chipped in $35","Kari B. chipped in $25","Alan K. chipped in $10","Daina O. chipped in $35","Anonymous chipped in $10","Dempsey H. chipped in $8","Charlotte S. chipped in $25","Sharine M. chipped in $35","Regina B. chipped in $3","Eva P. chipped in $30","Margaret M. chipped in $25","Harold P. chipped in $20","Heidi M. chipped in $25","Janey O. chipped in $35","Bonita M. chipped in $5","Sandra S. chipped in $3","Eve M. chipped in $10","Anonymous chipped in $3","Camille S. chipped in $7","Jeanne S. chipped in $25","Marsha S. chipped in $10","Maria P. chipped in $25","Anonymous chipped in $10","Syah J. chipped in $5","Velda F. chipped in $10","Anonymous chipped in $5","Pierre B. chipped in $35","Anna Y. chipped in $50","Claire B. chipped in $15","Susan H. chipped in $35","Rosalee T. chipped in $25","Rosemary A. chipped in $35","Lydia C. chipped in $20","Anonymous chipped in $10","Dave R. chipped in $35","Debra A. chipped in $10","Michael W. chipped in $35","Claire S. chipped in $15","Moses R. chipped in $5","Susan B. chipped in $5","Bonny W. chipped in $25","Susie A. chipped in $25","Pierre B. chipped in $35","Makayla A. chipped in $25","Lori B. chipped in $25","Michele M. chipped in $50","Jennifer K. chipped in $35","Anonymous chipped in $35","Diane V. chipped in $25","Mary U. chipped in $3","Yasmin I. chipped in $25","Francesca R. chipped in $5","Rakhi K. chipped in $25","Robin K. chipped in $10","Christine C. chipped in $10","Janice G. chipped in $25","Doris B. chipped in $35","Anonymous chipped in $82","Robert M. chipped in $3","Janice H. chipped in $10","Tove K. chipped in $35","Anonymous chipped in $1","Delain P. chipped in $20","Denise L. chipped in $5","Jamie B. chipped in $25","Anonymous chipped in $15","Nora B. chipped in $25","Anonymous chipped in $25","Steve G. chipped in $35","Anonymous chipped in $10"],this.init()}var p,r;return p=e,(r=[{key:"init",value:function(){this.displayDonations(this.getDonors())}},{key:"getPageId",value:function(){return"pageJson"in window&&"campaignPageId"in window.pageJson?parseInt(window.pageJson.campaignPageId):1}},{key:"getSeed",value:function(){return(new Date).getDate()+this.getPageId()}},{key:"getDonors",value:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=this.getSeed(),p=n.shuffle(this.donors,e),r=new Date,t=r.getHours(),a=r.getMinutes(),c=Math.round((60*t+a)/5),o=p.slice(c,c+i).reverse();return o}},{key:"displayCheckbox",value:function(){var i=document.getElementsByClassName("en__component en__component--formblock en__donation--billing--info"),n=document.createElement("div");n.className="en__field en__field--checkbox en__field--000000 en__field--donorScrollPreference",n.innerHTML='<label class="en__field__label" style="">Donor Recognition</label>\n\t  <div class="en__field__element en__field__element--checkbox\t">\n\t  \t<div class="en__field__item Anonymous__alignment">\n\t  \t\t<input id="en__field_transaction_donor_scroll_preference" type="checkbox"   class="en__field__input en__field__input--checkbox" name="transaction.  donorScrollPreference">\n\t  \t\t<label for="en__field_transaction_donor_scroll_preference"  class="en__field__label en__field__label--item">List my name as "Anonymous" on the donor scroll.</label>\n\t  \t</div>\n\t  </div>',i[0].appendChild(n)}},{key:"appendScrollTicker",value:function(i){for(var n=document.querySelector("#donor-ticker"),e="<ul>",p=0;p<i.length;p++)e+="<li>"+i[p]+"</li>";e='<div id="ticker-scroll">'+e+"</ul></div>",n.innerHTML+=e}},{key:"appendNewsTicker",value:function(i){for(var n=document.querySelector("#donor-ticker"),e='<div class="ticker">',p=0;p<i.length;p++)e+='<div class="ticker__item">'+i[p]+"</div>";e='<div id="ticker-news">'+e+"</div></div>",n.innerHTML=e}},{key:"displayDonations",value:function(i){var n=document.querySelector("#donor-ticker");if("horizontal"==n.dataset.layout){switch(n.dataset.style){case"news":this.appendNewsTicker(i);break;case"scroll":this.appendScrollTicker(i);break;default:this.appendNewsTicker(i)}this.displayCheckbox()}}}])&&i(p.prototype,r),e}();var r=e(379),t=e.n(r),a=e(795),c=e.n(a),o=e(569),d=e.n(o),h=e(565),s=e.n(h),$=e(216),m=e.n($),l=e(589),u=e.n(l),f=e(745),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=m(),t()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals,window.addEventListener("load",(function(){window.DonorScroll=p,new p}))})()})();