(this.webpackJsonpreacttodo=this.webpackJsonpreacttodo||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(15),i=n.n(a),r=(n(20),n(12)),s=n(7),d=(n(21),n(30)),j=n(28),u=n(29),l=(n(22),n(0));function b(e){var t=e.todo,n=e.index,c=e.markTodo,o=e.removeTodo;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("span",{style:{textDecoration:t.isDone?"line-through":""},children:t.text}),Object(l.jsxs)("div",{children:[Object(l.jsx)(d.a,{variant:"outline-success",onClick:function(){return c(n)},children:"\u2713"})," ",Object(l.jsx)(d.a,{variant:"outline-danger",onClick:function(){return o(n)},children:"\u2715"})]})]})}function x(e){var t=e.addTodo,n=o.a.useState(""),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(l.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),a&&(t(a),i(""))},children:[Object(l.jsxs)(j.a.Group,{children:[Object(l.jsx)(j.a.Label,{children:Object(l.jsx)("b",{children:"Add Todo"})}),Object(l.jsx)(j.a.Control,{type:"text",className:"input",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Add new todo"})]}),Object(l.jsx)(d.a,{variant:"primary mb-3",type:"submit",children:"Submit"})]})}var h=function(){var e=o.a.useState([{text:"Sumit",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=function(e){var t=Object(r.a)(n);t[e].isDone=!0,c(t)},i=function(e){var t=Object(r.a)(n);t.splice(e,1),c(t)};return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"text-center mb-4",children:"Todo List"}),Object(l.jsx)(x,{addTodo:function(e){var t=[].concat(Object(r.a)(n),[{text:e}]);c(t)}}),Object(l.jsx)("div",{children:n.map((function(e,t){return Object(l.jsx)(u.a,{children:Object(l.jsx)(u.a.Body,{children:Object(l.jsx)(b,{index:t,todo:e,markTodo:a,removeTodo:i},t)})})}))})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),O()}},[[26,1,2]]]);
//# sourceMappingURL=main.93948d8d.chunk.js.map