(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),r=s(2),i=s.n(r),o=s(5),c=s(3),l=s(4),u=s(7),m=s(6),b=(s(13),function(t){var e=t.goods;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"title"},"Goods"),a.a.createElement("ul",{className:"section"},e.map((function(t){return a.a.createElement("li",{key:t},t)}))))}),h=function(t){var e=t.showList;return a.a.createElement("button",{type:"button",className:"button is-success",onClick:e},"Start")},p=(s(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),y=function(t){Object(u.a)(s,t);var e=Object(m.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:p,isListVisible:!1,isListReversed:!1,sortBy:null},t.showList=function(){t.setState((function(t){return{isListVisible:!t.isListVisible}}))},t.reverse=function(){t.setState((function(t){return{isListReversed:!t.isListReversed}}))},t.sortByAlphabet=function(){t.setState({sortBy:"alphabet",isListReversed:!1})},t.sortByLength=function(){t.setState({sortBy:"length",isListReversed:!1})},t.reset=function(){t.setState({goods:p,isListReversed:!1,sortBy:null})},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state,e=t.goods,s=t.isListVisible,n=t.isListReversed,r=t.sortBy,i=Object(o.a)(e);return!1===s?a.a.createElement(h,{showList:this.showList}):(i.sort((function(t,e){switch(r){case"alphabet":return t.localeCompare(e);case"length":return e.length-t.length;default:return 0}})),n&&i.reverse(),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement(b,{goods:i}),a.a.createElement("button",{type:"button",className:"button is-primary",onClick:this.reverse},"Reverse"),a.a.createElement("button",{type:"button",className:"button is-primary",onClick:this.sortByAlphabet},"Sort alphabetically"),a.a.createElement("button",{type:"button",className:"button is-warning",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",className:"button is-primary",onClick:this.sortByLength},"Sort by length"))))}}]),s}(a.a.PureComponent);i.a.render(a.a.createElement(y,null),document.getElementById("root"))},8:function(t,e,s){t.exports=s(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b453538a.chunk.js.map