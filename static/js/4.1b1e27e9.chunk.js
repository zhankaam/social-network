(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{291:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__XUIay",dialogsItems:"Dialogs_dialogsItems__3HR55",active:"Dialogs_active__ICjGL",messages:"Dialogs_messages__36TXD",message:"Dialogs_message__2DeW4"}},297:function(e,s,a){"use strict";a.r(s);var i=a(129),n=a(1),t=(a(0),a(291)),c=a.n(t),d=a(16),o=function(e){var s="/dialogs/1"+e.id;return Object(n.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(n.jsx)(d.b,{to:s,children:e.name})})},l=function(e){return Object(n.jsx)("div",{className:"message",children:e.message})},g=a(90),r=a(130),j=a(33),m=a(75),b=Object(m.a)(50),u=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{component:j.b,validate:[m.b,b],name:"newMessageBody",placeholder:"Enter your message"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(o,{name:e.name,id:e.id})})),a=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(l,{message:e.message},e.id)}));return Object(n.jsxs)("div",{className:c.a.dialogs,children:[Object(n.jsx)("div",{className:c.a.dialogsItems,children:s}),Object(n.jsx)("div",{className:"messages",children:Object(n.jsx)("div",{children:a})}),Object(n.jsx)(u,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},h=a(15),x=a(9),f=a(98);s.default=Object(x.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),f.a)(O)}}]);
//# sourceMappingURL=4.1b1e27e9.chunk.js.map