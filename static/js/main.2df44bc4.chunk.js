(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required!"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),c=n.p+"static/media/Spin-1.4s-137px (1).509019ba.svg",a=(n(0),function(e){return Object(r.jsx)("div",{style:{backgroundColor:""},children:Object(r.jsx)("img",{src:c})})})},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return x}));var r=n(18),c=n.n(r),a=n(32),s=n(69),i=n(11),u=n(65),o=n(24),l=function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},b=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},h={posts:[{id:1,message:"5 Secret features of JSON.stringify()",likesCount:1273893},{id:2,message:"Use Chrome DevTools Like a Senior Frontend Developer",likesCount:258743},{id:3,message:" 7 really good reasons not to use TypeScript",likesCount:67844},{id:4,message:"19 things I stole from great developers",likesCount:2682167}],newPostText:"",profile:null,status:""},p={addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===t.sent.resultCode&&n(p.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(r=t.sent).resultCode&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,b(e);case 3:if(0!==(s=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(O(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case"SN/PROFILE/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"SN/PROFILE/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},153:function(e,t,n){"use strict";t.a=n.p+"static/media/114-1149878_setting-user-avatar-in-specific-size-without-breaking.e582e4ba.png"},182:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(69),c=n(11),a={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Viktor"},{id:3,name:"Sveta"},{id:4,name:"Andrew"},{id:5,name:"Sasha"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hello,How are you today? How may I help you? :)"},{id:2,message:"Hey! I'm fine. Thanks for asking! "},{id:3,message:"I have a question about your product. "},{id:4,message:"Could you help me?"},{id:5,message:" of course, what's the problem?"}],newMessageBody:""},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}},i={sendMessageCreator:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return I})),n.d(t,"b",(function(){return T}));var r=n(18),c=n.n(r),a=n(32),s=n(69),i=n(11),u={"messages-received":[],"status-changed":[]},o=null,l=function(){console.log("CLOSE WS"),h("pending"),setTimeout(p,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},f=function(){h("ready")},j=function(){h("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",f),null===(r=o)||void 0===r||r.removeEventListener("error",j)},h=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function p(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n"),h("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",f),o.addEventListener("error",j)}var O=function(){p()},g=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},m=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},S=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},x=function(e){var t;null===(t=o)||void 0===t||t.send(e)},v=n(370),E={messages:[],status:"pending"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/CHAT/MESSAGES_RECEIVED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(v.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/CHAT/STATUS_CHANGED":default:return e}},y=null,w=function(e){return null===y&&(y=function(t){e(U.messagesReceived(t))}),y},C=null,P=function(e){return null===C&&(C=function(t){e(U.statusChanged(t))}),C},N=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),m("messages-received",w(t)),m("status-changed",P(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("messages-received",w(t)),S("status-changed",P(t)),g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U={messagesReceived:function(e){return{type:"SN/CHAT/MESSAGES_RECEIVED",payload:{messages:e}}},statusChanged:function(e){return{type:"SN/CHAT/STATUS_CHANGED",payload:{status:e}}}}},195:function(e,t,n){e.exports={header:"Header_header__3WY8I",loginBlock:"Header_loginBlock__1ARoA"}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(190),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bcdf24e0-2cad-40e4-be67-f9d4eea9b547"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},240:function(e,t,n){},241:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(30),i=n.n(s),u=(n(240),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,384)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),o=(n(241),n(242),n(148)),l=n(367),d=n(368),f=n(373),j=n(374),b=n(375),h=n(35),p=n(23),O=n(17),g=n(2),m=n(110),S=n(151),x=n(82),v=n.n(x),E=n(6),_=n.n(E),y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=void 0===a?1:a,i=e.onPageChanged,u=void 0===i?function(e){return e}:i,o=e.portionSize,l=void 0===o?10:o,d=Math.ceil(t/n),f=[],j=1;j<=d;j++)f.push(j);var b=Math.ceil(d/l),h=Object(c.useState)(1),p=Object(S.a)(h,2),O=p[0],g=p[1],x=(O-1)*l+1,E=O*l;return Object(r.jsxs)("div",{className:_()(v.a.paginator),children:[O>1&&Object(r.jsx)("button",{className:v.a.btn,onClick:function(){g(O-1)},children:"PREV"}),f.filter((function(e){return e>=x&&e<=E})).map((function(e){return Object(r.jsx)("span",{className:_()(Object(m.a)({},v.a.selectedPage,s===e),v.a.pageNumber),onClick:function(t){u(e)},children:e},e)})),b>O&&Object(r.jsx)("button",{className:v.a.btn,onClick:function(){g(O+1)},children:"NEXT"})]})},w=n(62),C=n.n(w),P=n(153),N=function(e){var t=e.user,n=e.followingInProgress,c=e.unfollow,a=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.c,{to:"./profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:P.a,className:C.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{className:C.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{className:C.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.fullName}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsx)("span",{})]})]})},I=n(57),T=n.n(I),U=n(97),R=n(42),L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},A=n(24),k={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return A.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return A.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return A.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},F={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},D=function(e){return{type:"SN/USERS/SET_USERS",users:e}},G=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},H=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},z=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},M=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},V=function(e,t,n){return function(){var r=Object(U.a)(T.a.mark((function r(c){var a;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(M(!0)),c(G(e)),c(H(n)),r.next=5,k.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(M(!1)),c(D(a.items)),c(z(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},B=n(98),W=function(e){return e.usersPage.users},q=function(e){return e.usersPage.pageSize},J=function(e){return e.usersPage.totalUsersCount},K=function(e){return e.usersPage.currentPage},X=function(e){return e.usersPage.isFetching},Y=function(e){return e.usersPage.followingInProgress},Z=function(e){return e.usersPage.filter},Q=function(e){return{}},$=a.a.memo((function(e){var t=Object(O.d)(Z);return Object(r.jsx)("div",{children:Object(r.jsx)(B.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Q,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(r.jsxs)(B.b,{children:[Object(r.jsx)(B.a,{type:"text",name:"term"}),Object(r.jsxs)(B.a,{name:"friend",as:"select",children:[Object(r.jsx)("option",{className:C.a.option,value:"null",children:"All"}),Object(r.jsx)("option",{value:"true",children:"only followed"}),Object(r.jsx)("option",{value:"false",children:"only unfollowed"})]}),Object(r.jsx)("button",{className:C.a.btn,type:"submit",disabled:t,children:"Find"})]})}})})})),ee=n(143),te=function(e){var t=Object(O.d)(J),n=Object(O.d)(W),a=Object(O.d)(K),s=Object(O.d)(Y),i=Object(O.d)(q),u=Object(O.d)(Z),o=Object(O.c)(),l=Object(p.g)();Object(c.useEffect)((function(){var e=ee.parse(l.location.search.substr(1)),t=a,n=u;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(g.a)(Object(g.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(g.a)(Object(g.a)({},n),{},{friend:null});break;case"true":n=Object(g.a)(Object(g.a)({},n),{},{friend:!0});break;case"false":n=Object(g.a)(Object(g.a)({},n),{},{friend:!1})}o(V(t,i,n))}),[]),Object(c.useEffect)((function(){var e={};u.term&&(e.term=u.term),null!==u.friend&&(e.friend=String(u.friend)),1!==a&&(e.page=String(a)),l.push({pathname:"/users",search:ee.stringify(e)})}),[u,a]);var d=function e(t){o(e(t))},f=function e(t){o(e(t))};return Object(r.jsxs)("div",{children:[Object(r.jsx)($,{onFilterChanged:function(e){o(V(1,i,e))}}),Object(r.jsx)(y,{totalItemsCount:t,pageSize:i,currentPage:a,onPageChanged:function(e){o(V(e,i,u))}}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(N,{user:e,unfollow:f,follow:d,followingInProgress:s},e.id)}))})]})},ne=n(109),re=function(e){var t=Object(O.d)(X);return Object(r.jsxs)(r.Fragment,{children:[t?Object(r.jsx)(ne.a,{}):null,Object(r.jsx)(te,{})]})},ce=n(185),ae=n(107),se=n(55),ie=n(64),ue=n.n(ie),oe=n(18),le=n.n(oe),de=n(32),fe=n(11),je=n(65),be=function(){return A.c.get("auth/me")},he=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return A.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},pe=function(){return A.c.delete("auth/login")},Oe=function(){return A.c.get("security/get-captcha-url")},ge={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},me=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},Se=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},xe=function(){return function(){var e=Object(de.a)(le.a.mark((function e(t){var n,r,c,a,s;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:(n=e.sent).data.resultCode===A.a.Success&&(r=n.data.data,c=r.id,a=r.email,s=r.login,t(me(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(de.a)(le.a.mark((function e(t){var n,r;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:n=e.sent,r=n.data.url,t(Se(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=Object(ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,c=e.captchaUrl;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(se.c)("Email","email",[ae.b],se.a),Object(se.c)("Password","password",[ae.b],se.a,{type:"password"}),Object(se.c)(null,"rememberMe",[],se.a,{type:"checkbox"},""),c&&Object(r.jsx)("img",{src:c,alt:"not found"}),c&&Object(se.c)("Symbols from image","captcha",[ae.b],se.a,{}),n&&Object(r.jsx)("div",{className:ue.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:ue.a.btn,children:"Login"})})]})})),_e=function(){var e=Object(O.d)((function(e){return e.auth.captchaUrl})),t=Object(O.d)((function(e){return e.auth.isAuth})),n=Object(O.c)();return t?Object(r.jsx)(p.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{style:{padding:"20px",margin:"10px",textTransform:"uppercase"},children:"Login"}),Object(r.jsx)(Ee,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captchaUrl,function(){var e=Object(de.a)(le.a.mark((function e(n){var s,i;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(t,r,c,a);case 2:(s=e.sent).resultCode===A.a.Success?n(xe()):(s.resultCode===A.b.CaptchaIsRequired&&n(ve()),i=s.messages.length>0?s.messages[0]:"some error",n(Object(je.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},ye={initialized:!1,globalError:null},we={initializedSuccess:function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}}},Ce=n(21),Pe=n(152),Ne=n(182),Ie={},Te=n(187),Ue=n(194),Re=n(186),Le=Object(Ce.c)({profilePage:Pe.b,dialogsPage:Ne.b,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:L(e.users,t.usersId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:L(e.users,t.usersId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(R.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(fe.a)(Object(fe.a)({},e),t.payload);default:return e}},form:Re.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(fe.a)(Object(fe.a)({},e),{},{initialized:!0});default:return e}},chat:Te.a}),Ae=Object(Ce.e)(Le,Object(Ce.a)(Ue.a));window.store=Ae;var ke=Ae;function Fe(e){return function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)("div",{children:"loading..."}),children:Object(r.jsx)(e,Object(g.a)({},t))})}}var De=n(195),Ge=n.n(De),He=n(371),ze=n(372),Me=n(369),Ve=n(119),Be=function(e){return e.auth.isAuth},We=function(e){return e.auth.login},qe=function(){var e=Object(O.d)(Be),t=Object(O.d)(We),n=Object(O.c)(),c=l.a.Header;return Object(r.jsxs)(c,{className:Ge.a.header,children:[Object(r.jsx)("div",{className:"logo"}),Object(r.jsxs)(He.a,{children:[Object(r.jsx)(ze.a,{span:18,children:Object(r.jsx)(o.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(r.jsx)(o.a.Item,{children:Object(r.jsx)(h.b,{to:"/users",children:" Developers"})},"1")})}),e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(ze.a,{span:3,children:[Object(r.jsx)(Me.a,{style:{backgroundColor:"#87d068"},icon:Object(r.jsx)(f.a,{})}),Object(r.jsxs)("span",{style:{color:"White"},children:[" ",t," "]})]}),Object(r.jsx)(ze.a,{span:3,children:Object(r.jsx)(Ve.a,{onClick:function(){n(function(){var e=Object(de.a)(le.a.mark((function e(t){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:e.sent.data.resultCode===A.a.Success&&t(me(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(r.jsx)(ze.a,{span:6,children:Object(r.jsx)(Ve.a,{children:Object(r.jsx)(h.b,{to:"/login",children:"Login"})})})]})]})},Je=a.a.lazy((function(){return n.e(5).then(n.bind(null,388))})),Ke=a.a.lazy((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,387))})),Xe=a.a.lazy((function(){return n.e(6).then(n.bind(null,385))})),Ye=Fe(Je),Ze=Fe(Ke),Qe=Fe(Xe),$e=Object(Ce.d)(p.h,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(xe());Promise.all([t]).then((function(){e(we.initializedSuccess())}))}}}))((function(e){var t=e.initialized,n=e.initializeApp,a=function(e){alert("Some error occured")};if(Object(c.useEffect)((function(){n(),window.addEventListener("unhandledrejection",a),window.removeEventListener("unhandledrejection",a)}),[]),!t)return Object(r.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(r.jsx)(ne.a,{})});var s=o.a.SubMenu,i=l.a.Content,u=l.a.Footer,O=l.a.Sider;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(qe,{}),Object(r.jsxs)(i,{style:{padding:"0 50px"},children:[Object(r.jsxs)(d.a,{style:{margin:"16px 0"},children:[Object(r.jsx)(d.a.Item,{children:"Home"}),Object(r.jsx)(d.a.Item,{children:"List"}),Object(r.jsx)(d.a.Item,{children:"App"})]}),Object(r.jsxs)(l.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(r.jsx)(O,{className:"site-layout-background",width:200,children:Object(r.jsxs)(o.a,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},children:[Object(r.jsxs)(s,{icon:Object(r.jsx)(f.a,{}),title:"My profile",children:[Object(r.jsxs)(o.a.Item,{children:[" ",Object(r.jsx)(h.b,{to:"/profile",children:" Profile"})]},"1"),Object(r.jsxs)(o.a.Item,{children:[" ",Object(r.jsx)(h.b,{to:"/dialogs",children:" Messages"})]},"2")]},"sub1"),Object(r.jsx)(s,{icon:Object(r.jsx)(j.a,{}),title:"Developers",children:Object(r.jsx)(o.a.Item,{children:Object(r.jsx)(h.b,{to:"/users",children:" Users"})},"5")},"sub2"),Object(r.jsx)(s,{icon:Object(r.jsx)(b.a,{}),title:"Messages",children:Object(r.jsx)(o.a.Item,{children:Object(r.jsx)(h.b,{to:"/chat",children:"Chat"})},"9")},"sub3")]})}),Object(r.jsx)(i,{style:{padding:"0 24px",minHeight:280},children:Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(p.a,{to:"/profile"})}}),Object(r.jsx)(p.b,{path:"/dialogs",render:function(){return Object(r.jsx)(Ye,{})}}),Object(r.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Ze,{})}}),Object(r.jsx)(p.b,{path:"/users",render:function(){return Object(r.jsx)(re,{})}}),Object(r.jsx)(p.b,{path:"/login",render:function(){return Object(r.jsx)(_e,{})}}),Object(r.jsx)(p.b,{path:"/chat",render:function(){return Object(r.jsx)(Qe,{})}})]})})]})]}),Object(r.jsx)(u,{style:{textAlign:"center"},children:"Social Network \xa92021 Created by Samurai Zhanat"})]})})),et=function(){return Object(r.jsx)(h.a,{children:Object(r.jsx)(O.a,{store:ke,children:Object(r.jsx)($e,{})})})};i.a.render(Object(r.jsx)(et,{}),document.getElementById("root")),u()},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(11),c=n(149),a=n(1),s=(n(0),n(138)),i=n(64),u=n.n(i),o=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,s=n&&r;return Object(a.jsxs)("div",{className:u.a.formControl+" "+(s?u.a.error:""),children:[Object(a.jsx)("div",{children:c}),s&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:u.a.textarea},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({className:u.a.input},t),n))}))};function f(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},i))," ",u]})}},62:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1nMrh",selectedPage:"Users_selectedPage__35YmP",btn:"Users_btn__2LpXE"}},64:function(e,t,n){e.exports={formControl:"FormsControls_formControl__Ceuz6",error:"FormsControls_error__2gDaN",formSummaryError:"FormsControls_formSummaryError__r1pzm",textarea:"FormsControls_textarea__2VN1o",btn:"FormsControls_btn__2YZL-",input:"FormsControls_input__uu352"}},82:function(e,t,n){e.exports={paginator:"Paginator_paginator__245Xh",pageNumber:"Paginator_pageNumber__2DhQX",selectedPage:"Paginator_selectedPage__2JAKO",btn:"Paginator_btn__1rK7p"}}},[[364,1,2]]]);
//# sourceMappingURL=main.2df44bc4.chunk.js.map