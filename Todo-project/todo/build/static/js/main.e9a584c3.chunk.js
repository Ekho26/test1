(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{46:function(e,t,a){e.exports=a(70)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(14),c=a.n(r),i=(a(51),a(32)),l=a(90),d=a(92),s=a(91),u=a(89),m=a(40),f=a.n(m),p=(a(52),a(53),a(87)),E=a(88),h=a(93),b=a(29),v=a.n(b),j=v.a.initializeApp({apiKey:"AIzaSyDu7xR9MRt9nmR9YxiPDe40Bz60ojf9U7A",authDomain:"todo-project-7fdf6.firebaseapp.com",databaseURL:"https://todo-project-7fdf6.firebaseio.com",projectId:"todo-project-7fdf6",storageBucket:"todo-project-7fdf6.appspot.com",messagingSenderId:"263673182145",appId:"1:263673182145:web:4a6bfda396f8dddd11e140",measurementId:"G-02V00GCH0E"}).firestore();var g=function(e){return n.a.createElement(p.a,{className:"todo_list"},n.a.createElement(E.a,null,n.a.createElement(h.a,{primary:e.todo.todo,secondary:"Task"})),n.a.createElement(u.a,{onClick:function(t){j.collection("todos").doc(e.todo.id).delete()}}))};var k=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(""),m=Object(i.a)(c,2),p=m[0],E=m[1];return Object(o.useEffect)((function(){j.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return e.data().todo})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Todo"),n.a.createElement("form",null,n.a.createElement(l.a,null,n.a.createElement(d.a,null,"Add a task"),n.a.createElement(s.a,{value:p,onChange:function(e){return E(e.target.value)}})),n.a.createElement(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",type:"submit",onClick:function(e){e.preventDefault(),j.collection("todos").add({todo:p,timestamp:v.a.firestore.FieldValue.serverTimestamp()}),E("")},disabled:!p},n.a.createElement(f.a,null))),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(g,{todo:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.e9a584c3.chunk.js.map