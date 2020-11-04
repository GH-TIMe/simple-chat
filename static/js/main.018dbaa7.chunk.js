(this["webpackJsonpchat-frontend"]=this["webpackJsonpchat-frontend"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(43),s=a.n(r),o=a(17),l=a.n(o),m=a(44),i=a(3),u=a(1),d=(a(53),function(e){var t=e.onLogin,a=Object(n.useState)("test"),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),u=m[0],d=m[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),p=E[0],h=E[1];return c.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),h(!0);var a={roomID:s,userName:u};h(!1),t(a)}(e)},className:"form-size"},c.a.createElement("h1",{className:"text-center"},"\u0412\u043e\u0439\u0442\u0438"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"chat-rooms"},"Room:"),c.a.createElement("select",{onChange:function(e){return function(e){o(e.target.value)}(e)},className:"custom-select",id:"chat-rooms",value:s,required:!0},c.a.createElement("option",{value:"test"},"test"),c.a.createElement("option",{value:"frontend"},"frontend"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"username"},"Name:"),c.a.createElement("input",{id:"username",type:"name",placeholder:"Enter your name",className:"form-control",onChange:function(e){d(e.target.value)},value:u,required:!0})),c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:p},p?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"spinner-border spinner-border-sm spinner-margin",role:"status","aria-hidden":"true"}),"Loading..."):"Sign in"))}),f=a(5),E=a.n(f),p=a(45),h="https://chat-backend-socket-vers.herokuapp.com",b=a.n(p).a.connect(h),v=function(e){var t=e.refLink,a=e.onSubmit,r={value:"",rows:1,minRows:1,maxRows:3},s=Object(n.useState)(r),o=Object(i.a)(s,2),l=o[0],m=o[1],d=function(e){(13===e.keyCode&&!e.shiftKey||e.target.classList.contains("btn-send"))&&(e.preventDefault(),a(),m(r))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("textarea",{ref:t,className:"form-control textarea-autosize","aria-label":"With textarea",rows:l.rows,style:{resize:"none"},placeholder:"Message",value:l.value,onChange:function(e){var t=l.minRows,a=l.maxRows,n=e.target.rows;e.target.rows=t;var c=~~(e.target.scrollHeight/24);c===n&&(e.target.rows=c),c>=a&&(e.target.rows=a,e.target.scrollTop=e.target.scrollHeight),m(Object(u.a)(Object(u.a)({},l),{},{rows:c<a?c:a,value:e.target.value}))},onKeyDown:d,autoFocus:!0}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{onClick:d,className:"btn btn-primary btn-send",type:"button"},"Send")))},_=(a(86),function(e){var t=e.roomID,a=e.setRoom,r=Object(n.useState)(!0),s=Object(i.a)(r,2),o=s[0],l=s[1],m=Object(n.useRef)(),u=Object(n.useState)(t),d=Object(i.a)(u,2),f=d[0],p=d[1],h=function(e){var t=e.path||e.composedPath&&e.composedPath();t&&(t.includes(m.current)||l(!0))};Object(n.useEffect)((function(){document.body.addEventListener("click",h)}),[]);return c.a.createElement("div",{className:"switcher",ref:m},c.a.createElement("h5",{className:"switcher__title"},"room:",c.a.createElement("div",{className:"switcher__content"},c.a.createElement("span",{className:"switcher__active-room",onClick:function(){l(!o)}},f),c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:E()("switcher__icon",{active:!o}),role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"10"},c.a.createElement("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})),c.a.createElement("ul",{className:E()("switcher__rooms",{disable:o})},["test","frontend"].map((function(e,t){return c.a.createElement("li",{className:E()("switcher__room",{active:f===e}),onClick:function(){return function(e){e!==f&&(b.emit("ROOM:REJOIN",{oldRoom:f,newRoom:e}),a(e),p(e),l(!0))}(e)},key:"".concat(e,"_").concat(t)},e)}))))))}),g=function(e){var t=e.users,a=e.messages,r=e.handleSendMessage,s=e.roomID,o=e.setRoom,l=e.userName,m=Object(n.useRef)(null),u=Object(n.useRef)(null),d=Object(n.useState)(!1),f=Object(i.a)(d,2),p=f[0],h=f[1];Object(n.useEffect)((function(){u.current.scrollTop=u.current.scrollHeight}),[a]);var b=function(){return m.current.value},g=function(){h(!p)};return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__container"},c.a.createElement("div",{className:"chat__content"},c.a.createElement("div",{className:E()("chat__left-side",{active:p})},c.a.createElement("div",{className:"chat__left-side-container"},c.a.createElement("div",{className:"sidebar__close"},c.a.createElement("svg",{onClick:g,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"15",viewBox:"0 0 352 512"},c.a.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),c.a.createElement(_,{roomID:s,setRoom:o}),c.a.createElement("h4",{className:"chat__online"},"Users (",t.length,"):"),c.a.createElement("ul",{className:"chat__users"},t.map((function(e,t){return c.a.createElement("li",{className:"chat__user",key:"".concat(e,"_").concat(t)},e)}))))),c.a.createElement("div",{className:"chat__right-side"},c.a.createElement("div",{className:"sidebar__open"},c.a.createElement("svg",{onClick:g,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 448 512"},c.a.createElement("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})),c.a.createElement("span",null,l)),c.a.createElement("ul",{className:"chat__messages",ref:u},a.map((function(e,t){var a=e.text,n=e.author;return c.a.createElement("li",{className:"chat__message",key:"".concat(n,"_").concat(t)},c.a.createElement("div",{className:"chat__bubble"},c.a.createElement("p",{className:"chat__text"},a)),c.a.createElement("div",{className:"chat__author"},n))}))),c.a.createElement("div",{className:"input-group chat__input-text"},c.a.createElement(v,{refLink:m,onSubmit:function(){""!==m.current.value&&r(b(m))}}))))))},O=a(46),N=a.n(O),w=function(e,t){switch(t.type){case"SET_ROOM":return Object(u.a)(Object(u.a)({},e),{},{roomID:t.payload});case"JOINED":return Object(u.a)(Object(u.a)({},e),{},{roomID:t.payload.roomID,userName:t.payload.userName,joined:!0});case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});case"SET_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:t.payload});case"SET_DATA":return Object(u.a)(Object(u.a)({},e),{},{users:t.payload.users,messages:t.payload.messages});default:return e}},S=function(){var e=Object(n.useReducer)(w,{joined:!1,roomID:null,userName:null,users:[],messages:[]}),t=Object(i.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"JOINED",payload:t}),b.emit("ROOM:JOIN",t),e.next=4,N.a.get("".concat(h,"/rooms/").concat(t.roomID));case 4:a=e.sent,n=a.data,r({type:"SET_DATA",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e){r({type:"SET_USERS",payload:e})},u=function(e){r({type:"SET_MESSAGES",payload:e})};return Object(n.useEffect)((function(){b.on("ROOM:SET_USERS",o),b.on("ROOM:SET_MESSAGES",u)}),[]),c.a.createElement("div",{className:"wrapper"},a.joined?c.a.createElement(g,Object.assign({},a,{handleSendMessage:function(e){var t={roomID:a.roomID,text:e,author:a.userName};b.emit("ROOM:SET_MESSAGE",t)},setRoom:function(e){r({type:"SET_ROOM",payload:e})}})):c.a.createElement(d,{onLogin:s}))};s.a.render(c.a.createElement(S,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a(103)},53:function(e,t,a){},83:function(e,t){},86:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.018dbaa7.chunk.js.map