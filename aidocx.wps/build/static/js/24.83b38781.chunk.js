(this.webpackJsonpaidocx=this.webpackJsonpaidocx||[]).push([[24],{302:function(e,n,t){"use strict";t.d(n,"d",(function(){return o})),t.d(n,"f",(function(){return a})),t.d(n,"e",(function(){return s})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return i}));t(316);function o(e){return e.success?null==e.head?null==e.msg?"":e.msg:'{"head":'+e.head+',"data":'+e.msg+"}":""}function a(e){return e.success?null!=e.head?null==e.msg?"":e.msg:'{"head":'+e.head+',"data":'+e.msg+"}":""}function s(e){return e.success?null==e.head?null==e.msg?"":e.msg:'{"head":'+e.head+',"data":'+e.msg+"}":""}function l(e,n){var t={};if(-1!==e.indexOf(n)){var o=JSON.parse(e);for(var a in o){var s=a.substring(a.indexOf("_")+1);t.title=s.substring(0,s.lastIndexOf(":")),t.key=s.substring(s.lastIndexOf(":")+1);var r=[];for(var c in o[a]){var i={};if(""!==o[a][c]){var u='{"'+c+'":'+JSON.stringify(o[a][c])+"}";i=l(u,n),-1!==u.indexOf(n)&&r.push(i)}else if(-1!==c.indexOf(n)){var f=c.substring(c.indexOf("_")+1);i.title=f.substring(0,f.lastIndexOf(":")),i.key=f.substring(f.lastIndexOf(":")+1),r.push(i)}}r.length>0&&(t.children=r)}}return t}function r(e,n){var t=[];for(var o in e){var a=l(e[o]["\u6587\u672c\u5143\u7ed3\u6784"],n);"{}"!==JSON.stringify(a)&&t.push(a)}return console.log("TreeJson:",t),t}function c(e){var n=[];for(var t in e){console.log(t),console.log("JsonStr:",e[t]);var o={};o.title=e[t]["\u5e74\u4efd"],o.key=t,n.push(o)}return console.log("TreeJson:",n),n}function i(e){var n=[],t=[],o=[],a=0;for(var s in e)if("\u8d22\u62a5ID"==s||"\u516c\u53f8ID"==s);else{var l={},r={};l.title=s,l.key=a,r.key=a,r.value=e[""+s],n.push(l),t.push(r),a++}return o.push(n),o.push(t),console.log(o),o}},502:function(e,n,t){"use strict";t.r(n);var o=t(93),a=t(94),s=t(96),l=t(95),r=t(0),c=t.n(r),i=t(304),u=t(476),f=(t(298),t(45)),d=t(302),g=t(26),h=t(142),v=[],p=[],b=[],m=function(e,n){var t={};console.log("selected",e,n);var o=wps.WpsApplication().Selection.Range;console.log("\u83b7\u5f97\u5355\u5143\u683c\u4f4d\u7f6e\uff1a",o),console.log("\u83b7\u5f97\u884c\u6570\uff1a",o.Columns.Count);var a=o.Columns.Item(1).Index+","+o.Rows.Item(1).Index;t.key=e[0],t.value=a,v.push(t),console.log(v),console.log(p)},O=function(e,n){console.log("onCheck",e,n),b=e},k=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).reloaddata=function(e,n){if(console.log("filltable_this.props.location:",a.props.location),console.log("provide_state",e),console.log("provide_useData",n),console.log("typeof_useData",typeof n),void 0===n){var t={"\u516c\u53f8ID":1,"\u5e74\u4efd":2020};Object(f.b)("".concat(g.apiWritePath,"getinf/getFinance"),t).then((function(e){if(console.log("get-Repository-tree-result:",e),!0===e.success){var n=Object(d.e)(e),t=Object(d.b)(n)[0];p=Object(d.b)(n)[1],a.setState({treeData:t})}}),(function(e){}))}else n()},a.insertdata=function(e,n,t){console.log("checkedkeys",b),console.log("state",e),console.log("selectData",n)},a.state={treeData:a.reloaddata()},console.log("finace table ini:",a.state),a}return Object(a.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){console.log("filltable_this.props.location:",this.props.location)}},{key:"render",value:function(){var e=this;return c.a.createElement(h.a,null,(function(n){var t=n.state,o=n.useData,a=n.selectData;return c.a.createElement("div",null,c.a.createElement("h2",null,"\u62a5\u8868\u4fe1\u606f"),c.a.createElement(i.a,{onClick:e.insertdata.bind(e,t,a)},"\u63d2\u5165"),c.a.createElement(i.a,{onClick:e.reloaddata.bind(e,t,o)},"\u5237\u65b0"),c.a.createElement("br",null),c.a.createElement(u.a,{checkable:!0,onSelect:m,onCheck:O,treeData:e.state.treeData}))}))}}]),t}(r.Component);n.default=k}}]);
//# sourceMappingURL=24.83b38781.chunk.js.map