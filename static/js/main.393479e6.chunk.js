(this["webpackJsonptechpit-markdown-editor"]=this["webpackJsonptechpit-markdown-editor"]||[]).push([[0],{146:function(e,n,t){"use strict";t.r(n);var r=t(3),i=t(0),c=t.n(i),o=t(54),a=t.n(o),d=t(4),s=t(15),b=t(55),j=t.n(b),l=t(37),h=t.n(l),O=t(56),u=new(t(57).a)("markdown-editor");u.version(1).stores({memos:"&datetime"});var x,p,m,f,g,v,w,y,k,S,C,I,z,D,E,F=u.table("memos"),J=function(){var e=Object(O.a)(h.a.mark((function e(n,t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(new Date).toISOString(),e.next=3,F.put({datetime:r,title:n,text:t});case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),M=t(1),B=d.b.button(x||(x=Object(r.a)(["\n  background-color: dodgerblue;\n  border: none;\n  box-shadow: none;\n  color: white;\n  font-size: 1rem;\n  height: 2rem;\n  min-width: 5rem;\n  padding: 0 1rem;\n\n  &.cancel {\n    background: white;\n    border: 1px solid gray;\n    color: gray;\n  }\n"]))),N=function(e){return Object(M.jsx)(B,{onClick:e.onClick,className:e.cancel?"cancel":"",children:e.children})},T=d.b.div(p||(p=Object(r.a)(["\n  align-items: center;\n  background-color: #0002;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n"]))),q=d.b.div(m||(m=Object(r.a)(["\n  background: #fff;\n  padding: 1rem;\n  width: 32rem;\n"]))),A=d.b.input(f||(f=Object(r.a)(["\n  width: 29rem;\n  padding: 0.5rem;\n"]))),G=d.b.div(g||(g=Object(r.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1rem;\n"]))),H=function(e){var n=e.onCancel,t=e.onSave,r=Object(i.useState)((new Date).toISOString()),c=Object(s.a)(r,2),o=c[0],a=c[1];return Object(M.jsx)(T,{children:Object(M.jsxs)(q,{children:[Object(M.jsx)("p",{children:"\u30c6\u30ad\u30b9\u30c8\u306e\u5185\u5bb9\u3092\u4fdd\u5b58\u3057\u307e\u3059"}),Object(M.jsx)("p",{children:"\u4fdd\u5b58\u5185\u5bb9\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u4fdd\u5b58\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044"}),Object(M.jsx)("p",{children:Object(M.jsx)(A,{type:"text",value:o,onChange:function(e){return a(e.target.value)}})}),Object(M.jsxs)(G,{children:[Object(M.jsx)(N,{onClick:n,cancel:!0,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(M.jsx)(N,{onClick:function(){return t(o)},children:"\u4fdd\u5b58"})]})]})})},K=t(20),L=d.b.header(v||(v=Object(r.a)(["\n  align-content: center;\n  display: flex;\n  height: 2rem;\n  justify-content: space-between;\n  line-height: 2rem;\n  padding: 0.5rem 1rem;\n"]))),P=d.b.div(w||(w=Object(r.a)(["\n  font-size: 1.5rem;\n"]))),Q=d.b.div(y||(y=Object(r.a)(["\n  align-content: center;\n  display: flex;\n  height: 2rem;\n  justify-content: center;\n\n  & > * {\n    margin-left: 0.5rem;\n  }\n"]))),R=function(e){return Object(M.jsxs)(L,{children:[Object(M.jsx)(P,{children:e.title}),Object(M.jsx)(Q,{children:e.children})]})},U=d.b.div(k||(k=Object(r.a)(["\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 3rem;\n"]))),V=d.b.div(S||(S=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  top: 0;\n  left: 0;\n"]))),W=d.b.textarea(C||(C=Object(r.a)(["\n  border-right: 1px solid silver;\n  border-top: 1px solid silver;\n  bottom: 0;\n  font-size: 1rem;\n  left: 0;\n  padding: 0.5rem;\n  position: absolute;\n  top: 0;\n  width: 50vw;\n"]))),X=d.b.div(I||(I=Object(r.a)(["\n  border-top: 1px solid silver;\n  bottom: 0;\n  overflow-y: scroll;\n  padding: 1rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50vw;\n"]))),Y=function(){var e=function(e,n){var t=Object(i.useState)(localStorage.getItem(n)||e),r=Object(s.a)(t,2),c=r[0],o=r[1];return[c,function(e){o(e),localStorage.setItem(n,e)}]}("","pages/editor:test"),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),a=o[0],d=o[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(V,{children:Object(M.jsxs)(R,{title:"Markdown Editor",children:[Object(M.jsx)(N,{onClick:function(){return d(!0)},children:"\u4fdd\u5b58\u3059\u308b"}),Object(M.jsx)(K.b,{to:"/history",children:"\u5c65\u6b74\u3092\u898b\u308b"})]})}),Object(M.jsxs)(U,{children:[Object(M.jsx)(W,{onChange:function(e){return r(e.target.value)},value:t}),Object(M.jsx)(X,{children:Object(M.jsx)(j.a,{source:t})})]}),a&&Object(M.jsx)(H,{onSave:function(e){J(e,t),d(!1)},onCancel:function(){return d(!1)}})]})},Z=t(2),$=d.b.div(z||(z=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  top: 0;\n  left: 0;\n"]))),_=d.b.div(D||(D=Object(r.a)(["\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 3rem;\n  padding: 0 1rem;\n"]))),ee=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)($,{children:Object(M.jsx)(R,{title:"\u5c65\u6b74",children:Object(M.jsx)(K.b,{to:"editor",children:"\u30a8\u30c7\u30a3\u30bf\u306b\u623b\u308b"})})}),Object(M.jsx)(_,{children:"TODO:\u5c65\u6b74\u8868\u793a"})]})},ne=Object(d.a)(E||(E=Object(r.a)(["\n  body * {\n    box-sizing : border-box;\n  }\n  "])));a.a.render(Object(M.jsxs)(c.a.StrictMode,{children:[Object(M.jsx)(ne,{}),Object(M.jsxs)(K.a,{children:[Object(M.jsx)(Z.b,{exact:!0,path:"/editor",children:Object(M.jsx)(Y,{})}),Object(M.jsx)(Z.b,{exact:!0,path:"/history",children:Object(M.jsx)(ee,{})}),Object(M.jsx)(Z.a,{to:"/editor",path:"*"})]})]}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.393479e6.chunk.js.map