(this.webpackJsonpaidocx=this.webpackJsonpaidocx||[]).push([[18],{282:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2);function r(e,t){var n=Object(a.a)({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}},283:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(0),r=a.isValidElement;function o(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}(e,e,t)}},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},308:function(e,t,n){"use strict";var a=n(4),r=n(11),o=n(14),c=n(23),i=n(0),l=n.n(i),s=n(33),u=n.n(s),d=n(282),f=n(77),p=n(102),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=i.createContext(void 0),b=function(e){var t,n=i.useContext(f.b),o=n.getPrefixCls,c=n.direction,l=e.prefixCls,s=e.size,d=e.className,b=m(e,["prefixCls","size","className"]),g=o("btn-group",l),h="";switch(s){case"large":h="lg";break;case"small":h="sm";break;case"middle":case void 0:break;default:Object(p.a)(!s,"Button.Group","Invalid prop `size`.")}var y=u()(g,(t={},Object(r.a)(t,"".concat(g,"-").concat(h),h),Object(r.a)(t,"".concat(g,"-rtl"),"rtl"===c),t),d);return i.createElement(v.Provider,{value:s},i.createElement("div",Object(a.a)({},b,{className:y})))},g=n(30),h=n(31),y=n(104),O=n(37),E=n(38),j=n(107),x=n(129),w=n(128),C=0,k={};function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=C++,a=t;function r(){(a-=1)<=0?(e(),delete k[n]):k[n]=Object(w.a)(r)}return k[n]=Object(w.a)(r),n}N.cancel=function(e){void 0!==e&&(w.a.cancel(k[e]),delete k[e])},N.ids=k;var S,A=n(283);function T(e){return!e||null===e.offsetParent||e.hidden}function P(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var I=function(e){Object(O.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.apply(this,arguments)).containerRef=i.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var a,r,o=e.props,c=o.insertExtraNode;if(!(o.disabled||!t||T(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var i=Object(y.a)(e).extraNode,l=e.context.getPrefixCls;i.className="".concat(l(""),"-click-animating-node");var s=e.getAttributeName();if(t.setAttribute(s,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&P(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){i.style.borderColor=n;var u=(null===(a=t.getRootNode)||void 0===a?void 0:a.call(t))||t.ownerDocument,d=u instanceof Document?u.body:null!==(r=u.firstChild)&&void 0!==r?r:u;S=Object(j.a)("\n      [".concat(l(""),"-click-animating-without-extra-node='true']::after, .").concat(l(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:d})}c&&t.appendChild(i),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!T(n.target)){e.resetEffect(t);var a=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,a)}),0),N.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=N((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,a=e.props.children;if(e.csp=n,!i.isValidElement(a))return a;var r=e.containerRef;return Object(x.c)(a)&&(r=Object(x.a)(a.ref,e.containerRef)),Object(A.a)(a,{ref:r})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),S&&(S.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return i.createElement(f.a,null,this.renderWave)}}]),n}(i.Component);I.contextType=f.b;var D=n(289),R=n(131),L=n(143),B=n(147),W=function(){return{width:0,opacity:0,transform:"scale(0)"}},F=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},V=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?l.a.createElement("span",{className:"".concat(t,"-loading-icon")},l.a.createElement(B.a,null)):l.a.createElement(L.b,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:W,onAppearActive:F,onEnterStart:W,onEnterActive:F,onLeaveStart:F,onLeaveActive:W},(function(e,n){var a=e.className,r=e.style;return l.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:r,ref:n},l.a.createElement(B.a,{className:a}))}))},z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},M=/^[\u4e00-\u9fa5]{2}$/,U=M.test.bind(M);function _(e){return"text"===e||"link"===e}function G(e,t){if(null!=e){var n,a=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&U(e.props.children)?Object(A.a)(e,{children:e.props.children.split("").join(a)}):"string"===typeof e?U(e)?i.createElement("span",null,e.split("").join(a)):i.createElement("span",null,e):(n=e,i.isValidElement(n)&&n.type===i.Fragment?i.createElement("span",null,e):e)}}Object(D.a)("default","primary","ghost","dashed","link","text"),Object(D.a)("default","circle","round"),Object(D.a)("submit","button","reset");var J=function(e,t){var n,l=e.loading,s=void 0!==l&&l,m=e.prefixCls,b=e.type,g=void 0===b?"default":b,h=e.danger,y=e.shape,O=void 0===y?"default":y,E=e.size,j=e.className,x=e.children,w=e.icon,C=e.ghost,k=void 0!==C&&C,N=e.block,S=void 0!==N&&N,A=e.htmlType,T=void 0===A?"button":A,P=z(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),D=i.useContext(R.b),L=i.useContext(v),B=i.useState(!!s),W=Object(o.a)(B,2),F=W[0],M=W[1],J=i.useState(!1),X=Object(o.a)(J,2),H=X[0],$=X[1],q=i.useContext(f.b),K=q.getPrefixCls,Q=q.autoInsertSpaceInButton,Y=q.direction,Z=t||i.createRef(),ee=function(){return 1===i.Children.count(x)&&!w&&!_(g)},te="object"===Object(c.a)(s)&&s.delay?s.delay||!0:!!s;i.useEffect((function(){var e=null;return"number"===typeof te?e=window.setTimeout((function(){e=null,M(te)}),te):M(te),function(){e&&(window.clearTimeout(e),e=null)}}),[te]),i.useEffect((function(){if(Z&&Z.current&&!1!==Q){var e=Z.current.textContent;ee()&&U(e)?H||$(!0):H&&$(!1)}}),[Z]);var ne=function(t){var n=e.onClick,a=e.disabled;F||a?t.preventDefault():null===n||void 0===n||n(t)};Object(p.a)(!("string"===typeof w&&w.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(w,"` at https://ant.design/components/icon")),Object(p.a)(!(k&&_(g)),"Button","`link` or `text` button can't be a `ghost` button.");var ae=K("btn",m),re=!1!==Q,oe=L||E||D,ce=oe&&{large:"lg",small:"sm",middle:void 0}[oe]||"",ie=F?"loading":w,le=u()(ae,(n={},Object(r.a)(n,"".concat(ae,"-").concat(O),"default"!==O&&O),Object(r.a)(n,"".concat(ae,"-").concat(g),g),Object(r.a)(n,"".concat(ae,"-").concat(ce),ce),Object(r.a)(n,"".concat(ae,"-icon-only"),!x&&0!==x&&!!ie),Object(r.a)(n,"".concat(ae,"-background-ghost"),k&&!_(g)),Object(r.a)(n,"".concat(ae,"-loading"),F),Object(r.a)(n,"".concat(ae,"-two-chinese-chars"),H&&re),Object(r.a)(n,"".concat(ae,"-block"),S),Object(r.a)(n,"".concat(ae,"-dangerous"),!!h),Object(r.a)(n,"".concat(ae,"-rtl"),"rtl"===Y),n),j),se=w&&!F?w:i.createElement(V,{existIcon:!!w,prefixCls:ae,loading:!!F}),ue=x||0===x?function(e,t){var n=!1,a=[];return i.Children.forEach(e,(function(e){var t=Object(c.a)(e),r="string"===t||"number"===t;if(n&&r){var o=a.length-1,i=a[o];a[o]="".concat(i).concat(e)}else a.push(e);n=r})),i.Children.map(a,(function(e){return G(e,t)}))}(x,ee()&&re):null,de=Object(d.a)(P,["navigate"]);if(void 0!==de.href)return i.createElement("a",Object(a.a)({},de,{className:le,onClick:ne,ref:Z}),se,ue);var fe=i.createElement("button",Object(a.a)({},P,{type:T,className:le,onClick:ne,ref:Z}),se,ue);return _(g)?fe:i.createElement(I,{disabled:!!F},fe)},X=i.forwardRef(J);X.displayName="Button",X.Group=b,X.__ANT_BUTTON=!0;var H=X;t.a=H},510:function(e,t,n){"use strict";n.r(t);var a=n(98),r=n(99),o=n(101),c=n(100),i=n(0),l=n.n(i),s=n(308),u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onSelectDoc=function(e){var t=e.target.files.length;console.log("event.target.files num:",t),t>0&&function(){var n=wps.WpsApplication(),a=wps.Env.GetTempPath()+"/TempDoc";a=a.replace(/\\/g,"/"),wps.FileSystem.Exists(a)||wps.FileSystem.Mkdir(a);for(var r=n.Documents.Add(null,null,0,!0),o=0;o<t;o++){var c=new FileReader;c.onload=function(e){var t=a+"/TempDoc"+(new Date).getTime().toString()+e.total+".docx";console.log("byteArr:",e.target.result),wps.FileSystem.writeAsBinaryString(t,e.target.result),wps.FileSystem.Exists(t)&&(r.Range(0,0).InsertFile(t),wps.FileSystem.Remove(t))},c.readAsBinaryString(e.target.files[o])}}()},e}return Object(r.a)(n,[{key:"ComineDocContent",value:function(e,t,n,a){var r=wps.WpsApplication(),o=[],c=r.Documents,i=c.Count;console.log("test wpsapp.Documents:",c);for(var l=1;l<=i;l++)o.push(r.Documents.Item(l).WordOpenXML);try{var s=c.Add(null,null,0,!0);s.Activate();for(var u=0;u<i;u++)console.log(o[u]),s.Range(0,0).InsertXML(o[u]);console.log("newdoc_text:",s)}catch(d){}}},{key:"base64toBlob",value:function(e,t){for(var n=atob(e,t),a=n.length,r=new Uint8Array(a);a--;)r[a]=n.charCodeAt(a);return new Blob([r],{type:t})}},{key:"render",value:function(){return l.a.createElement("div",{style:{margin:"10px 10px 50px 10px",padding:"10px"}},l.a.createElement("h2",null,"\u6587\u6863\u5408\u5e76"),l.a.createElement(s.a,{onClick:this.ComineDocContent},"\u5408\u5e76\u5f53\u524d\u6253\u5f00\u7684\u6587\u6863"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"\u5408\u5e76\u76ee\u5f55\u4e0b\u6587\u4ef6\u793a\u4f8b "),l.a.createElement("input",{type:"file",id:"docfile",multiple:"multiple",accept:"application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:this.onSelectDoc}))}}]),n}(i.Component);t.default=u}}]);
//# sourceMappingURL=18.ce3d18dc.chunk.js.map