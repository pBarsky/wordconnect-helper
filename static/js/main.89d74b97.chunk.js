(this["webpackJsonpwordconnect-helper"]=this["webpackJsonpwordconnect-helper"]||[]).push([[0],{160:function(e,n,t){},169:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(58),u=t.n(a),r=(t(160),t(161),t(144)),s=t(145),l=t(181),o=t(28),m=t(62),c=t(146),b=t(183),d=t(9),h=function(e){var n=e.message,t=e.visible;return Object(d.jsx)(c.a,{visible:t,animation:"fade down",duration:500,children:Object(d.jsx)(b.a,{negative:!0,children:n})})},j=t(139),x={en:{query:{required:"Required",onlyLetters:"Must contain only letters or space character"},maxCount:{minimum:"Maximum number of letters in a word must be at least 1.",lesserThanMin:"Maximum number of letters must greater or equal to minimum number of letters."},minCount:{minimum:"Minimum number of letters in a word must be at least 1.",greaterThanMax:"Minimum number of letters must less or equal to maximum number of letters."}},pl:{query:{required:"Wymagane",onlyLetters:"Musi zawiera\u0107 wy\u0142acznie litery lub znak spacji."},maxCount:{minimum:"Maksymalna liczba liter musi by\u0107 wi\u0119szka lub r\xf3wna 1.",lesserThanMin:"Maksymalna liczba liter musi by\u0107 wi\u0119ksza lub r\xf3wna minimalnej liczbie liter."},minCount:{minimum:"Minimalna liczba liter w s\u0142owie musi wynosi\u0107 co najmniej 1.",greaterThanMax:"Minimalna liczba liter musi by\u0107 mniejsza lub r\xf3wna maksymalnej liczbie liter."}}};var y=Object(o.f)({mapPropsToValues:function(e){var n,t,i,a;return{query:null!==(n=e.initialQuery)&&void 0!==n?n:"",maxCount:null!==(t=e.initialMaxCount)&&void 0!==t?t:5,minCount:null!==(i=e.initialMinCount)&&void 0!==i?i:1,unique:null===(a=e.initialUnique)||void 0===a||a}},validate:function(e){var n={};return function(e,n){var t=e.query;t?t.match(/^[a-zA-Z z\u017c\u017a\u0107\u0144\xf3\u0142\u0119\u0105\u015b\u017b\u0179\u0106\u0104\u015a\u0118\u0141\xd3\u0143]+$/)||(n.query=x.pl.query.onlyLetters):n.query=x.pl.query.required}(e,n),function(e,n){var t=e.minCount,i=e.maxCount;t<1?n.minCount=x.pl.minCount.minimum:t>i&&(n.minCount=x.pl.minCount.greaterThanMax)}(e,n),function(e,n){var t=e.maxCount,i=e.minCount;t<1?n.minCount=x.pl.maxCount.minimum:i>t&&(n.minCount=x.pl.maxCount.lesserThanMin)}(e,n),n},handleSubmit:function(e,n){var t=n.props,i=t.handleQuerySearch,a=t.clearResults,u=n.setSubmitting;a(),i(e),u(!1)}})((function(e){var n,t,i,a=e.touched,u=e.errors,r=e.isSubmitting,s=e.values,l=s.minCount,o=s.maxCount;return Object(d.jsxs)(m.b,{style:{maxWidth:"400px"},children:[Object(d.jsxs)(j.a,{widths:"equal",grouped:!0,children:[Object(d.jsx)(m.c,{label:"Litery",type:"text",name:"query"}),Object(d.jsx)(m.a,{name:"unique",label:"Bez powt\xf3rze\u0144"}),Object(d.jsx)(h,{visible:!!u.query&&!!a.query,message:null!==(n=u.query)&&void 0!==n?n:""})]}),Object(d.jsxs)(j.a,{widths:"equal",children:[Object(d.jsx)(m.c,{label:"Maks liczba liter",type:"number",name:"maxCount",min:l}),Object(d.jsx)(h,{visible:!!u.maxCount&&!!a.maxCount,message:null!==(t=u.maxCount)&&void 0!==t?t:""}),Object(d.jsx)(m.c,{label:"Min liczba liter",type:"number",name:"minCount",min:1,max:o}),Object(d.jsx)(h,{visible:!!u.minCount&&!!a.minCount,message:null!==(i=u.minCount)&&void 0!==i?i:""})]}),Object(d.jsx)(m.d,{style:{marginTop:"20px"},type:"submit",disabled:r,children:"Szukaj"})]})})),C=t(142),v=t(182),f=function(e){var n=e.results,t={width:"80vw",maxWidth:"500px"};return n.length>0?Object(d.jsx)(C.a,{as:v.a,duration:400,divided:!0,size:"huge",style:t,children:n.map((function(e){return Object(d.jsx)(v.a.Item,{children:e},e)}))}):Object(d.jsxs)(b.a,{style:t,children:[Object(d.jsx)(b.a.Header,{children:"No results to show."}),Object(d.jsx)(b.a.Content,{children:"Please search for something else."})]})},p=t(140),O=t(141),g=function(){function e(n,t){var i=n.maxCount,a=n.minCount,u=n.query,r=n.unique,s=t.addResult;Object(p.a)(this,e),this._letters=void 0,this._maxCount=void 0,this._minCount=void 0,this._unique=void 0,this._addResult=void 0,this._unique=r,this._addResult=s,this._letters=u.split(" "),this._maxCount=i,this._minCount=a}return Object(O.a)(e,[{key:"Search",value:function(){var e=this,n=new RegExp("^".concat(this.PrepareRegex(),"$"),"i");window.POLISH_WORDS.forEach((function(t){t.match(n)&&e._addResult(t)}))}},{key:"PrepareRegex",value:function(){var e="".concat(this._unique?"(?!.*(.).*\\1)":"","[");return this._letters.forEach((function(n){e+="".concat(n)})),e+="]{".concat(this._minCount,",").concat(this._maxCount,"}")}}]),e}();var q=function(){var e=Object(i.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],u=function(e){a((function(n){return[].concat(Object(r.a)(n),[e])}))};return Object(d.jsxs)(l.a,{style:{marginTop:"5vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(d.jsx)(y,{handleQuerySearch:function(e){new g(e,{addResult:u}).Search()},initialMinCount:3,initialMaxCount:7,clearResults:function(){a([])}}),Object(d.jsx)(f,{results:t})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,185)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,u=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),u(e),r(e)}))};u.a.render(Object(d.jsx)(q,{}),document.getElementById("root")),w()}},[[169,1,2]]]);
//# sourceMappingURL=main.89d74b97.chunk.js.map