(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),s=n.n(i),c=n(7),d=n.n(c),h=(n(20),n(12)),r=n(8),o=n(9),u=n(3),l=n(14),b=n(13),j=(n(21),n(22),n(10));var m=function(e){var t=e.items.map((function(t){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"checkbox",id:t.key,checked:!t.isChecked,onChange:function(n){e.handleCheckboxChange(!t.isChecked,t.key)}}),Object(a.jsx)("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),Object(a.jsx)("span",{children:Object(a.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}})})]})},t.key)}));return Object(a.jsx)("div",{children:t})},k=n(4),p=n(11);k.b.add(p.a);var x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:"",isChecked:!0}},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.handleCheckboxChange=a.handleCheckboxChange.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.setUpdate=a.setUpdate.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now(),isChecked:!0}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){console.log(t);var n=[].concat(Object(h.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:" ",isChecked:!0}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"handleCheckboxChange",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.isChecked=e)})),this.setState({items:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})}),Object(a.jsx)(m,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate,handleCheckboxChange:this.handleCheckboxChange})]})}}]),n}(s.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};d.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),f()}},[[28,1,2]]]);
//# sourceMappingURL=main.9ea0d65c.chunk.js.map