(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return S}));var r=n(8),c=n.n(r),a=n(19),i=n(44),s=n(3),u=n(35),o=n(13),l=function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},j=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},b=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},O={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It is my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],newPostText:"",profile:null,status:""},p={addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===t.sent.resultCode&&n(p.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(r=t.sent).resultCode&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,b(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(h(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case"SN/PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(141),i=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bcdf24e0-2cad-40e4-be67-f9d4eea9b547"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(44),c=n(3),a={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Viktor"},{id:3,name:"Sveta"},{id:4,name:"Andrew"},{id:5,name:"Sasha"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your It-kamasutra? "},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessageBody:""},i={sendMessageCreator:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},140:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1nMrh",selectedPage:"Users_selectedPage__35YmP"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2HG0W",item:"Navbar_item__1wlkt",activeLink:"Navbar_activeLink__1ES7X"}},176:function(e,t,n){},177:function(e,t,n){},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(3),c=n(92),a=n(1),i=(n(0),n(93)),s=n(53),u=n.n(s),o=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,i=n&&r;return Object(a.jsxs)("div",{className:u.a.formControl+" "+(i?u.a.error:""),children:[Object(a.jsx)("div",{children:c}),i&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function j(e,t,n,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},s))," ",u]})}},300:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(66),s=n.n(i),u=(n(176),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,305)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))}),o=(n(177),n(15)),l=n.n(o),d=n(16),j=function(){return Object(r.jsxs)("nav",{className:l.a.nav,children:[Object(r.jsx)("div",{className:l.a.item,children:Object(r.jsx)(d.b,{to:"/profile",activeClassName:l.a.activeLink,children:" Profile"})}),Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/dialogs",activeClassName:l.a.activeLink,children:" Messages"})}),Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/users",activeClassName:l.a.activeLink,children:" Users"})}),Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/news",activeClassName:l.a.activeLink,children:" News"})}),Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/music",activeClassName:l.a.activeLink,children:" Music"})}),Object(r.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(r.jsx)(d.b,{to:"/settings",activeClassName:l.a.activeLink,children:" Settings"})})]})},f=function(e){return Object(r.jsx)("div",{})},b=function(){return Object(r.jsx)("div",{})},O=function(e){return Object(r.jsx)("div",{})},p=n(12),h=n(10),g=n(3),m=n(70),v=n(102),S=n(75),x=n.n(S),E=n(97),_=n.n(E),w=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,i=void 0===a?1:a,s=e.onPageChanged,u=void 0===s?function(e){return e}:s,o=e.portionSize,l=void 0===o?10:o,d=Math.ceil(t/n),j=[],f=1;f<=d;f++)j.push(f);var b=Math.ceil(d/l),O=Object(c.useState)(1),p=Object(v.a)(O,2),h=p[0],g=p[1],S=(h-1)*l+1,E=h*l;return Object(r.jsxs)("div",{className:_()(x.a.paginator),children:[h>1&&Object(r.jsx)("button",{onClick:function(){g(h-1)},children:"PREV"}),j.filter((function(e){return e>=S&&e<=E})).map((function(e){return Object(r.jsx)("span",{className:_()(Object(m.a)({},x.a.selectedPage,i===e),x.a.pageNumber),onClick:function(t){u(e)},children:e},e)})),b>h&&Object(r.jsx)("button",{onClick:function(){g(h+1)},children:"NEXT"})]})},P=n(140),N=n.n(P),C=n.p+"static/media/114-1149878_setting-user-avatar-in-specific-size-without-breaking.e582e4ba.png",y=function(e){var t=e.user,n=e.followingInProgress,c=e.unfollow,a=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(d.b,{to:"./profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:C,className:N.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.fullName}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsx)("span",{})]})]})},I=n(8),T=n.n(I),U=n(19),L=n(44),R=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},k=n(13),A={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return k.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return k.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},F={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},z=function(e){return{type:"SN/USERS/SET_USERS",users:e}},D=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},G=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},M=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},H=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},B=function(e,t,n){return function(){var r=Object(U.a)(T.a.mark((function r(c){var a;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(H(!0)),c(D(e)),c(G(n)),r.next=5,A.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(H(!1)),c(z(a.items)),c(M(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},V=n(56),Y=function(e){return e.usersPage.users},W=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalUsersCount},X=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},K=function(e){return e.usersPage.followingInProgress},Z=function(e){return e.usersPage.filter},Q=function(e){return{}},$=a.a.memo((function(e){var t=Object(h.d)(Z);return Object(r.jsx)("div",{children:Object(r.jsx)(V.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Q,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(r.jsxs)(V.b,{children:[Object(r.jsx)(V.a,{type:"text",name:"term"}),Object(r.jsxs)(V.a,{name:"friend",as:"select",children:[Object(r.jsx)("option",{value:"null",children:"All"}),Object(r.jsx)("option",{value:"true",children:"only followed"}),Object(r.jsx)("option",{value:"false",children:"only unfollowed"})]}),Object(r.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),ee=n(98),te=function(e){var t=Object(h.d)(q),n=Object(h.d)(Y),a=Object(h.d)(X),i=Object(h.d)(K),s=Object(h.d)(W),u=Object(h.d)(Z),o=Object(h.c)(),l=Object(p.f)();Object(c.useEffect)((function(){var e=ee.parse(l.location.search.substr(1)),t=a,n=u;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(g.a)(Object(g.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(g.a)(Object(g.a)({},n),{},{friend:null});break;case"true":n=Object(g.a)(Object(g.a)({},n),{},{friend:!0});break;case"false":n=Object(g.a)(Object(g.a)({},n),{},{friend:!1})}o(B(t,s,n))}),[]),Object(c.useEffect)((function(){var e={};u.term&&(e.term=u.term),null!==u.friend&&(e.friend=String(u.friend)),1!==a&&(e.page=String(a)),l.push({pathname:"/users",search:ee.stringify(e)})}),[u,a]);var d=function e(t){o(e(t))},j=function e(t){o(e(t))};return Object(r.jsxs)("div",{children:[Object(r.jsx)($,{onFilterChanged:function(e){o(B(1,s,e))}}),Object(r.jsx)(w,{totalItemsCount:t,pageSize:s,currentPage:a,onPageChanged:function(e){o(B(e,s,u))}}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(y,{user:e,unfollow:j,follow:d,followingInProgress:i},e.id)}))})]})},ne=n(69),re=function(e){var t=Object(h.d)(J);return Object(r.jsxs)(r.Fragment,{children:[t?Object(r.jsx)(ne.a,{}):null,Object(r.jsx)(te,{})]})},ce=n(112),ae=n(113),ie=n(138),se=n(136),ue=n(99),oe=n.n(ue),le=function(e){return Object(r.jsxs)("header",{className:oe.a.header,children:[Object(r.jsx)("img",{src:"https://p1.hiclipart.com/preview/570/557/170/react-logo-redux-javascript-vuejs-babel-nodejs-npm-web-application-png-clipart.jpg"}),Object(r.jsx)("div",{className:oe.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(d.b,{to:"/login",children:"Login"})})]})},de=n(35),je=function(){return k.c.get("auth/me")},fe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return k.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},be=function(){return k.c.delete("auth/login")},Oe=function(){return k.c.get("security/get-captcha-url")},pe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},he=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},ge=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},me=function(){return function(){var e=Object(U.a)(T.a.mark((function e(t){var n,r,c,a,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:(n=e.sent).data.resultCode===k.a.Success&&(r=n.data.data,c=r.id,a=r.email,i=r.login,t(he(c,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(U.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:n=e.sent,r=n.data.url,t(ge(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},xe=function(e){Object(ie.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),Ee=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(U.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:e.sent.data.resultCode===k.a.Success&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),_e=n(135),we=n(67),Pe=n(30),Ne=n(53),Ce=n.n(Ne),ye=Object(_e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,c=e.captchaUrl;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(Pe.c)("Email","email",[we.b],Pe.a),Object(Pe.c)("Password","password",[we.b],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me"),c&&Object(r.jsx)("img",{src:c,alt:"not found"}),c&&Object(Pe.c)("Symbols from image","captcha",[we.b],Pe.a,{}),n&&Object(r.jsx)("div",{className:Ce.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Ie=function(){var e=Object(h.d)((function(e){return e.auth.captchaUrl})),t=Object(h.d)((function(e){return e.auth.isAuth})),n=Object(h.c)();return t?Object(r.jsx)(p.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ye,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captchaUrl,function(){var e=Object(U.a)(T.a.mark((function e(n){var i,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t,r,c,a);case 2:(i=e.sent).resultCode===k.a.Success?n(me()):(i.resultCode===k.b.CaptchaIsRequired&&n(ve()),s=i.messages.length>0?i.messages[0]:"some error",n(Object(de.a)("login",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},Te={initialized:!1,globalError:null},Ue={initializedSuccess:function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},Re=n(11),ke=n(103),Ae=n(134),Fe={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},De=n(145),Ge=n(137),Me=Object(Re.c)({profilePage:ke.b,dialogsPage:Ae.b,sidebar:ze,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:R(e.users,t.usersId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:R(e.users,t.usersId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:Se,form:Ge.a,app:Le}),He=Object(Re.e)(Me,Object(Re.a)(De.a));window.store=He;var Be=He;function Ve(e){return function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)("div",{children:"loading..."}),children:Object(r.jsx)(e,Object(g.a)({},t))})}}var Ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),qe=Ve(Ye),Xe=Ve(We),Je=Object(Re.d)(p.g,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e(Ue.initializedSuccess())}))}}}))((function(e){var t=e.initialized,n=e.initializeApp,a=function(e){alert("Some error occured")};return Object(c.useEffect)((function(){n(),window.addEventListener("unhandledrejection",a),window.removeEventListener("unhandledrejection",a)}),[]),t?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Ee,{}),Object(r.jsx)(j,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(p.a,{to:"/profile"})}}),Object(r.jsx)(p.b,{path:"/dialogs",render:function(){return Object(r.jsx)(qe,{})}}),Object(r.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Xe,{})}}),Object(r.jsx)(p.b,{path:"/users",render:function(){return Object(r.jsx)(re,{})}}),Object(r.jsx)(p.b,{path:"/login",render:function(){return Object(r.jsx)(Ie,{})}}),Object(r.jsx)(p.b,{path:"/dialogs",render:function(){return Object(r.jsx)(f,{})}}),Object(r.jsx)(p.b,{path:"/profile",render:function(){return Object(r.jsx)(b,{})}}),Object(r.jsx)(p.b,{path:"/dialogs",render:function(){return Object(r.jsx)(O,{})}})]})]}):Object(r.jsx)(ne.a,{})})),Ke=function(){return Object(r.jsx)(d.a,{children:Object(r.jsx)(h.a,{store:Be,children:Object(r.jsx)(Je,{})})})};s.a.render(Object(r.jsx)(Ke,{}),document.getElementById("root")),u()},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__Ceuz6",error:"FormsControls_error__2gDaN",formSummaryError:"FormsControls_formSummaryError__r1pzm"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required!"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),c=n.p+"static/media/Spin-1.4s-137px (1).509019ba.svg",a=(n(0),function(e){return Object(r.jsx)("div",{style:{backgroundColor:""},children:Object(r.jsx)("img",{src:c})})})},75:function(e,t,n){e.exports={paginator:"Paginator_paginator__245Xh",pageNumber:"Paginator_pageNumber__2DhQX",selectedPage:"Paginator_selectedPage__2JAKO"}},99:function(e,t,n){e.exports={header:"Header_header__3WY8I",loginBlock:"Header_loginBlock__1ARoA"}}},[[300,1,2]]]);
//# sourceMappingURL=main.d044240c.chunk.js.map