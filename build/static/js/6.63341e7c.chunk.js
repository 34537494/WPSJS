(this.webpackJsonpaidocx=this.webpackJsonpaidocx||[]).push([[6],{361:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}function h(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?d(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=r(0),y=(r(68),r(460)),C=r(363);function b(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}var w={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push("M".concat(o+e," ").concat(n+e,"h").concat(a-o,"v1H").concat(o+e,"z")),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M".concat(a+e,",").concat(n+e," h1v1H").concat(a+e,"z")):r.push("M".concat(o+e,",").concat(n+e," h").concat(a+1-o,"v1H").concat(o+e,"z"))}}))})),r.join("")}function E(t,e){return t.slice().map((function(t,r){return r<e.y||r>=e.y+e.h?t:t.map((function(t,r){return(r<e.x||r>=e.x+e.w)&&t}))}))}function x(t,e){var r=t.imageSettings,n=t.size,o=t.includeMargin;if(null==r)return null;var i=o?4:0,a=e.length+2*i,s=Math.floor(.1*n),l=a/n,u=(r.width||s)*l,c=(r.height||s)*l,h=null==r.x?e.length/2-u/2:r.x*l,f=null==r.y?e.length/2-c/2:r.y*l,d=null;if(r.excavate){var p=Math.floor(h),m=Math.floor(f);d={x:p,y:m,w:Math.ceil(u+h-p),h:Math.ceil(c+f-m)}}return{x:h,y:f,h:c,w:u,excavation:d}}var D=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}(),P=function(t){function e(){var t,r;l(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return g(d(r=h(this,(t=f(e)).call.apply(t,[this].concat(o)))),"_canvas",void 0),g(d(r),"_image",void 0),g(d(r),"state",{imgLoaded:!1}),g(d(r),"handleImageLoad",(function(){r.setState({imgLoaded:!0})})),r}return p(e,t),c(e,[{key:"componentDidMount",value:function(){this._image&&this._image.complete&&this.handleImageLoad(),this.update()}},{key:"componentWillReceiveProps",value:function(t){var e,r;(null===(e=this.props.imageSettings)||void 0===e?void 0:e.src)!==(null===(r=t.imageSettings)||void 0===r?void 0:r.src)&&this.setState({imgLoaded:!1})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var t=this.props,e=t.value,r=t.size,n=t.level,o=t.bgColor,i=t.fgColor,a=t.includeMargin,s=t.imageSettings,l=new y(-1,C[n]);if(l.addData(b(e)),l.make(),null!=this._canvas){var u=this._canvas,c=u.getContext("2d");if(!c)return;var h=l.modules;if(null===h)return;var f=a?4:0,d=h.length+2*f,p=x(this.props,h);null!=s&&null!=p&&null!=p.excavation&&(h=E(h,p.excavation));var m=window.devicePixelRatio||1;u.height=u.width=r*m;var g=r/d*m;c.scale(g,g),c.fillStyle=o,c.fillRect(0,0,d,d),c.fillStyle=i,D?c.fill(new Path2D(_(h,f))):h.forEach((function(t,e){t.forEach((function(t,r){t&&c.fillRect(r+f,e+f,1,1)}))})),this.state.imgLoaded&&this._image&&null!=p&&c.drawImage(this._image,p.x+f,p.y+f,p.w,p.h)}}},{key:"render",value:function(){var t=this,e=this.props,r=(e.value,e.size),n=(e.level,e.bgColor,e.fgColor,e.style),i=(e.includeMargin,e.imageSettings),l=s(e,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),u=a({height:r,width:r},n),c=null,h=i&&i.src;return null!=i&&null!=h&&(c=v.createElement("img",{src:h,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(e){return t._image=e}})),v.createElement(v.Fragment,null,v.createElement("canvas",o({style:u,height:r,width:r,ref:function(e){return t._canvas=e}},l)),c)}}]),e}(v.PureComponent);g(P,"defaultProps",w);var T=function(t){function e(){return l(this,e),h(this,f(e).apply(this,arguments))}return p(e,t),c(e,[{key:"render",value:function(){var t=this.props,e=t.value,r=t.size,n=t.level,i=t.bgColor,a=t.fgColor,l=t.includeMargin,u=t.imageSettings,c=s(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),h=new y(-1,C[n]);h.addData(b(e)),h.make();var f=h.modules;if(null===f)return null;var d=l?4:0,p=f.length+2*d,m=x(this.props,f),g=null;null!=u&&null!=m&&(null!=m.excavation&&(f=E(f,m.excavation)),g=v.createElement("image",{xlinkHref:u.src,height:m.h,width:m.w,x:m.x+d,y:m.y+d,preserveAspectRatio:"none"}));var w=_(f,d);return v.createElement("svg",o({shapeRendering:"crispEdges",height:r,width:r,viewBox:"0 0 ".concat(p," ").concat(p)},c),v.createElement("path",{fill:i,d:"M0,0 h".concat(p,"v").concat(p,"H0z")}),v.createElement("path",{fill:a,d:w}),g)}}]),e}(v.PureComponent);g(T,"defaultProps",w);var A=function(t){var e=t.renderAs,r=s(t,["renderAs"]),n="svg"===e?T:P;return v.createElement(n,r)};A.defaultProps=a({renderAs:"canvas"},w),t.exports=A},362:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},363:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},364:function(t,e,r){var n=r(365);function o(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(i)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=n.gexp(n.glog(t.get(i))+e);return new o(r,0).mod(t)}},t.exports=o},365:function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},n=0;n<8;n++)r.EXP_TABLE[n]=1<<n;for(n=8;n<256;n++)r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8];for(n=0;n<255;n++)r.LOG_TABLE[r.EXP_TABLE[n]]=n;t.exports=r},366:function(t,e,r){"use strict";var n=r(465),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var r,i,a,s,l,u,c=!1;e||(e={}),r=e.debug||!1;try{if(a=n(),s=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=t,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[e.format]||o.default;window.clipboardData.setData(i,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))})),document.body.appendChild(u),s.selectNodeContents(u),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(h){r&&console.error("unable to copy using execCommand: ",h),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),c=!0}catch(h){r&&console.error("unable to copy using clipboardData: ",h),r&&console.error("falling back to prompt"),i=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,t)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),u&&document.body.removeChild(u),a()}return c}},367:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var n=r(5),o={root:"ms-DocumentCardLocation"},i=function(t){var e=t.theme,r=t.className,i=e.palette,a=e.fonts;return{root:[Object(n.v)(o,e).root,a.small,{color:i.themePrimary,display:"block",fontWeight:n.d.semibold,overflow:"hidden",padding:"8px 16px",position:"relative",textDecoration:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",selectors:{":hover":{color:i.themePrimary,cursor:"pointer"}}},r]}}},368:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var n=r(5),o={root:"ms-DocumentCardTitle"},i=function(t){var e=t.theme,r=t.className,i=t.showAsSecondaryTitle,a=e.palette,s=e.fonts;return{root:[Object(n.v)(o,e).root,i?s.medium:s.large,{padding:"8px 16px",display:"block",overflow:"hidden",wordWrap:"break-word",height:i?"45px":"38px",lineHeight:i?"18px":"21px",color:i?a.neutralSecondary:a.neutralPrimary},r]}}},369:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var n=r(5),o={root:"ms-DocumentCardActivity",multiplePeople:"ms-DocumentCardActivity--multiplePeople",details:"ms-DocumentCardActivity-details",name:"ms-DocumentCardActivity-name",activity:"ms-DocumentCardActivity-activity",avatars:"ms-DocumentCardActivity-avatars",avatar:"ms-DocumentCardActivity-avatar"},i=function(t){var e=t.theme,r=t.className,i=t.multiplePeople,a=e.palette,s=e.fonts,l=Object(n.v)(o,e);return{root:[l.root,i&&l.multiplePeople,{padding:"8px 16px",position:"relative"},r],avatars:[l.avatars,{marginLeft:"-2px",height:"32px"}],avatar:[l.avatar,{display:"inline-block",verticalAlign:"top",position:"relative",textAlign:"center",width:32,height:32,selectors:{"&:after":{content:'" "',position:"absolute",left:"-1px",top:"-1px",right:"-1px",bottom:"-1px",border:"2px solid "+a.white,borderRadius:"50%"},":nth-of-type(2)":i&&{marginLeft:"-16px"}}}],details:[l.details,{left:i?"72px":"56px",height:32,position:"absolute",top:8,width:"calc(100% - 72px)"}],name:[l.name,{display:"block",fontSize:s.small.fontSize,lineHeight:"15px",height:"15px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:a.neutralPrimary,fontWeight:n.d.semibold}],activity:[l.activity,{display:"block",fontSize:s.small.fontSize,lineHeight:"15px",height:"15px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:a.neutralSecondary}]}}},460:function(t,e,r){var n=r(461),o=r(462),i=r(463),a=r(464),s=r(364);function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var u=l.prototype;u.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},u.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new i,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var l=this.dataList[s];r.put(l.mode,4),r.put(l.getLength(),a.getLengthInBits(l.mode,t)),l.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},u.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},u.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},u.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(s,i),n.lineTo(s+1,i),n.lineTo(s+1,i+1),n.lineTo(s,i+1),n.endFill())}return n},u.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},u.setupPositionAdjustPattern=function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},u.setupTypeNumber=function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},u.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=a.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},u.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var l=0;l<2;l++)if(null==this.modules[n][s-l]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1)),a.getMask(e,n,s-l)&&(u=!u),this.modules[n][s-l]=u,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){for(var n=o.getRSBlocks(t,e),s=new i,u=0;u<r.length;u++){var c=r[u];s.put(c.mode,4),s.put(c.getLength(),a.getLengthInBits(c.mode,t)),c.write(s)}var h=0;for(u=0;u<n.length;u++)h+=n[u].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*h)&&(s.put(l.PAD0,8),!(s.getLengthInBits()>=8*h));)s.put(l.PAD1,8);return l.createBytes(s,n)},l.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),l=new Array(e.length),u=0;u<e.length;u++){var c=e[u].dataCount,h=e[u].totalCount-c;n=Math.max(n,c),o=Math.max(o,h),i[u]=new Array(c);for(var f=0;f<i[u].length;f++)i[u][f]=255&t.buffer[f+r];r+=c;var d=a.getErrorCorrectPolynomial(h),p=new s(i[u],d.getLength()-1).mod(d);l[u]=new Array(d.getLength()-1);for(f=0;f<l[u].length;f++){var m=f+p.getLength()-l[u].length;l[u][f]=m>=0?p.get(m):0}}var g=0;for(f=0;f<e.length;f++)g+=e[f].totalCount;var v=new Array(g),y=0;for(f=0;f<n;f++)for(u=0;u<e.length;u++)f<i[u].length&&(v[y++]=i[u][f]);for(f=0;f<o;f++)for(u=0;u<e.length;u++)f<l[u].length&&(v[y++]=l[u][f]);return v},t.exports=l},461:function(t,e,r){var n=r(362);function o(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},462:function(t,e,r){var n=r(363);function o(t,e){this.totalCount=t,this.dataCount=e}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=new Array,a=0;a<n;a++)for(var s=r[3*a+0],l=r[3*a+1],u=r[3*a+2],c=0;c<s;c++)i.push(new o(l,u));return i},o.getRsBlockTable=function(t,e){switch(e){case n.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},463:function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},464:function(t,e,r){var n=r(362),o=r(364),i=r(365),a=0,s=1,l=2,u=3,c=4,h=5,f=6,d=7,p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;p.getBCHDigit(e)-p.getBCHDigit(p.G15)>=0;)e^=p.G15<<p.getBCHDigit(e)-p.getBCHDigit(p.G15);return(t<<10|e)^p.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;p.getBCHDigit(e)-p.getBCHDigit(p.G18)>=0;)e^=p.G18<<p.getBCHDigit(e)-p.getBCHDigit(p.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return p.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case s:return e%2==0;case l:return r%3==0;case u:return(e+r)%3==0;case c:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var l=-1;l<=1;l++)o+l<0||e<=o+l||0==s&&0==l||a==t.isDark(n+s,o+l)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var u=0;t.isDark(n,o)&&u++,t.isDark(n+1,o)&&u++,t.isDark(n,o+1)&&u++,t.isDark(n+1,o+1)&&u++,0!=u&&4!=u||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&c++;return r+=10*(Math.abs(100*c/e/e-50)/5)}};t.exports=p},465:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],n=0;n<t.rangeCount;n++)r.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||r.forEach((function(e){t.addRange(e)})),e&&e.focus()}}},520:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n,o=r(278),i=r(1),a=r(0),s=r(255),l=r(21),u=r(212),c=r(166),h=r(89);!function(t){t[t.normal=0]="normal",t[t.compact=1]="compact"}(n||(n={}));var f=Object(s.a)(),d=function(t){function e(e){var r=t.call(this,e)||this;return r._rootElement=a.createRef(),r._onClick=function(t){r._onAction(t)},r._onKeyDown=function(t){t.which!==l.a.enter&&t.which!==l.a.space||r._onAction(t)},r._onAction=function(t){var e=r.props,n=e.onClick,o=e.onClickHref,i=e.onClickTarget;n?n(t):!n&&o&&(i?window.open(o,i,"noreferrer noopener nofollow"):window.location.href=o,t.preventDefault(),t.stopPropagation())},Object(u.a)(r),Object(c.a)("DocumentCard",e,{accentColor:void 0}),r}return Object(i.c)(e,t),e.prototype.render=function(){var t,e=this.props,r=e.onClick,o=e.onClickHref,s=e.children,l=e.type,u=e.accentColor,c=e.styles,d=e.theme,p=e.className,m=Object(h.h)(this.props,h.f,["className","onClick","type","role"]),g=!(!r&&!o);this._classNames=f(c,{theme:d,className:p,actionable:g,compact:l===n.compact}),l===n.compact&&u&&(t={borderBottomColor:u});var v=this.props.role||(g?r?"button":"link":void 0),y=g?0:void 0;return a.createElement("div",Object(i.a)({ref:this._rootElement,tabIndex:y,"data-is-focusable":g,role:v,className:this._classNames.root,onKeyDown:g?this._onKeyDown:void 0,onClick:g?this._onClick:void 0,style:t},m),s)},e.prototype.focus=function(){this._rootElement.current&&this._rootElement.current.focus()},e.defaultProps={type:n.normal},e}(a.Component),p=r(5),m=r(126),g={root:"ms-DocumentCardPreview",icon:"ms-DocumentCardPreview-icon",iconContainer:"ms-DocumentCardPreview-iconContainer"},v=r(369),y=r(368),C=r(367),b={root:"ms-DocumentCard",rootActionable:"ms-DocumentCard--actionable",rootCompact:"ms-DocumentCard--compact"},w=Object(o.a)(d,(function(t){var e,r,n=t.className,o=t.theme,i=t.actionable,a=t.compact,s=o.palette,l=o.fonts,u=o.effects,c=Object(p.v)(b,o);return{root:[c.root,{WebkitFontSmoothing:"antialiased",backgroundColor:s.white,border:"1px solid "+s.neutralLight,maxWidth:"320px",minWidth:"206px",userSelect:"none",position:"relative",selectors:(e={":focus":{outline:"0px solid"}},e["."+m.a+" &:focus"]=Object(p.y)(s.neutralSecondary,u.roundedCorner2),e["."+C.a.root+" + ."+y.a.root]={paddingTop:"4px"},e)},i&&[c.rootActionable,{selectors:{":hover":{cursor:"pointer",borderColor:s.neutralTertiaryAlt},":hover:after":{content:'" "',position:"absolute",top:0,right:0,bottom:0,left:0,border:"1px solid "+s.neutralTertiaryAlt,pointerEvents:"none"}}}],a&&[c.rootCompact,{display:"flex",maxWidth:"480px",height:"108px",selectors:(r={},r["."+g.root]={borderRight:"1px solid "+s.neutralLight,borderBottom:0,maxHeight:"106px",maxWidth:"144px"},r["."+g.icon]={maxHeight:"32px",maxWidth:"32px"},r["."+v.a.root]={paddingBottom:"12px"},r["."+y.a.root]={paddingBottom:"12px 16px 8px 16px",fontSize:l.mediumPlus.fontSize,lineHeight:"16px"},r)}],n]}}),void 0,{scope:"DocumentCard"})},532:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(278),o=r(1),i=r(0),a=r(255),s=r(137),l=r(151),u=r(212),c=Object(a.a)(),h=function(t){function e(e){var r=t.call(this,e)||this;return r._titleElement=i.createRef(),r._measureTitleElement=i.createRef(),r._truncateTitle=function(){r.state.needMeasurement&&r._async.requestAnimationFrame(r._truncateWhenInAnimation)},r._truncateWhenInAnimation=function(){var t=r.props.title,e=r._measureTitleElement.current;if(e){var n=getComputedStyle(e);if(n.width&&n.lineHeight&&n.height){var o=e.clientWidth,i=e.scrollWidth,a=Math.floor((parseInt(n.height,10)+5)/parseInt(n.lineHeight,10)),s=i/(parseInt(n.width,10)*a);if(s>1){var l=t.length/s-3;return r.setState({truncatedTitleFirstPiece:t.slice(0,l/2),truncatedTitleSecondPiece:t.slice(t.length-l/2),clientWidth:o,needMeasurement:!1})}}}return r.setState({needMeasurement:!1})},r._shrinkTitle=function(){var t=r.state,e=t.truncatedTitleFirstPiece,n=t.truncatedTitleSecondPiece;if(e&&n){var o=r._titleElement.current;if(!o)return;(o.scrollHeight>o.clientHeight+5||o.scrollWidth>o.clientWidth)&&r.setState({truncatedTitleFirstPiece:e.slice(0,e.length-1),truncatedTitleSecondPiece:n.slice(1)})}},Object(u.a)(r),r._async=new s.a(r),r._events=new l.a(r),r.state={truncatedTitleFirstPiece:"",truncatedTitleSecondPiece:"",previousTitle:e.title,needMeasurement:!!e.shouldTruncate},r}return Object(o.c)(e,t),e.prototype.componentDidUpdate=function(){this.props.title!==this.state.previousTitle&&this.setState({truncatedTitleFirstPiece:void 0,truncatedTitleSecondPiece:void 0,clientWidth:void 0,previousTitle:this.props.title,needMeasurement:!!this.props.shouldTruncate}),this._events.off(window,"resize",this._updateTruncation),this.props.shouldTruncate&&(this._truncateTitle(),requestAnimationFrame(this._shrinkTitle),this._events.on(window,"resize",this._updateTruncation))},e.prototype.componentDidMount=function(){this.props.shouldTruncate&&(this._truncateTitle(),this._events.on(window,"resize",this._updateTruncation))},e.prototype.componentWillUnmount=function(){this._events.dispose(),this._async.dispose()},e.prototype.render=function(){var t=this.props,e=t.title,r=t.shouldTruncate,n=t.showAsSecondaryTitle,o=t.styles,a=t.theme,s=t.className,l=this.state,u=l.truncatedTitleFirstPiece,h=l.truncatedTitleSecondPiece,f=l.needMeasurement;return this._classNames=c(o,{theme:a,className:s,showAsSecondaryTitle:n}),f?i.createElement("div",{className:this._classNames.root,ref:this._measureTitleElement,title:e,style:{whiteSpace:"nowrap"}},e):r&&u&&h?i.createElement("div",{className:this._classNames.root,ref:this._titleElement,title:e},u,"\u2026",h):i.createElement("div",{className:this._classNames.root,ref:this._titleElement,title:e},e)},e.prototype._updateTruncation=function(){var t=this;this._async.requestAnimationFrame((function(){if(t._titleElement.current){var e=t._titleElement.current.clientWidth;clearTimeout(t._titleTruncationTimer),t.state.clientWidth!==e&&(t._titleTruncationTimer=t._async.setTimeout((function(){return t.setState({truncatedTitleFirstPiece:void 0,truncatedTitleSecondPiece:void 0,needMeasurement:!0})}),250))}}))},e}(i.Component),f=r(368),d=Object(n.a)(h,f.b,void 0,{scope:"DocumentCardTitle"})}}]);
//# sourceMappingURL=6.63341e7c.chunk.js.map