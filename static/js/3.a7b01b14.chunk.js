(this["webpackJsonpdaria-app"]=this["webpackJsonpdaria-app"]||[]).push([[3],{290:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var o=s(5),n=s(1),r=s(35),c=s(36),i=s(39),a=s(38),u=s(0),l=s.n(u),j=s(11),p=s(16),b=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(i.a)(u,t);var s=Object(a.a)(u);function u(){return Object(r.a)(this,u),s.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(n.jsx)(e,Object(o.a)({},this.props)):Object(n.jsx)(j.a,{to:"/login"})}}]),u}(l.a.Component);return Object(p.b)(b)(t)}},291:function(e,t,s){e.exports={userImage:"ProfileInfo_userImage__2iqPA",descriptionBlock:"ProfileInfo_descriptionBlock__3tCBt"}},292:function(e,t,s){e.exports={item:"Post_item__2garX"}},293:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__sjhiM",posts:"MyPosts_posts__C8sZj"}},294:function(e,t,s){e.exports={profileBlock:"Profile_profileBlock__a09yL"}},296:function(e,t,s){"use strict";s.r(t);var o=s(5),n=s(1),r=s(35),c=s(36),i=s(39),a=s(38),u=s(0),l=s.n(u),j=s(96),p=s(291),b=s.n(p),d=s(66),f=s(106),h=function(e){var t=Object(u.useState)(!1),s=Object(j.a)(t,2),o=s[0],r=s[1],c=Object(u.useState)(e.status),i=Object(j.a)(c,2),a=i[0],l=i[1];Object(u.useEffect)((function(){l(e.status)}),[e.status]);return Object(n.jsxs)("div",{children:[!o&&Object(n.jsx)("div",{children:Object(n.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[e.status||"No status","  "]})}),o&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{onBlur:function(){r(!1),e.updateUserStatus(a)},onChange:function(e){l(e.currentTarget.value)},autoFocus:!0})})]})},O=s(128),m=s(129),x=s(33),v=s.n(x),g=s(70),k=Object(m.a)({form:"edit-profile"})((function(e){return Object(n.jsx)("form",{onSubmit:e.handleSubmit,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:v.a.descriptionBlock,children:[Object(n.jsx)(O.a,{name:"fullName",placeholder:"fullName",component:g.a}),Object(n.jsx)(O.a,{name:"aboutMe",placeholder:"about me",component:g.b}),Object(n.jsxs)("p",{children:[e.profile.lookingForAJob," "]}),Object(n.jsx)("p",{children:"looking for a job"}),Object(n.jsx)(O.a,{name:"lookingForAJob",component:g.a,type:"checkbox"}),Object(n.jsx)("p",{children:e.profile.lookingForAJobDescription}),Object(n.jsx)(O.a,{name:"lookingForAJobDescription",placeholder:"professianal skills",component:g.b}),Object(n.jsxs)("div",{children:["Contacts: ",Object.keys(e.profile.contacts).map((function(e){return Object(n.jsxs)("div",{className:v.a.contact,children:[Object(n.jsxs)("b",{children:[e,":"]}),"  ",Object(n.jsx)(O.a,{name:"contacts."+e,placeholder:e,component:g.a})]},e)}))]})]}),Object(n.jsx)("button",{children:"save"})]})})})),P=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(n.jsx)("h3",{children:e.profile.fullName}),Object(n.jsx)("b",{children:"about me: "}),Object(n.jsx)("p",{children:e.profile.aboutMe}),Object(n.jsx)("p",{children:e.profile.lookingForAJob?"\u042f \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":"\u042f \u043d\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443, \u0441\u043f\u0430\u0441\u0438\u0431\u043e!"}),Object(n.jsx)("p",{children:e.profile.lookingForAJobDescription}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(t){return Object(n.jsx)(y,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]}),e.isOwner&&Object(n.jsx)("button",{onClick:e.goToEditMode,children:"edit info"})]})},y=function(e){var t=e.contactTitle,s=e.contactValue;return Object(n.jsxs)("div",{className:b.a.contact,children:[t,": ",s]})},S=function(e){var t,s=Object(u.useState)(!1),o=Object(j.a)(s,2),r=o[0],c=o[1];if(!e.profile)return Object(n.jsx)(d.a,{});return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:b.a.userImage,src:null!==(t=e.profile.photos.large)&&void 0!==t?t:f.a,alt:"userImage"}),Object(n.jsx)("br",{}),e.isOwner&&Object(n.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),Object(n.jsx)(h,{status:e.status,updateUserStatus:e.updateUserStatus}),r?Object(n.jsx)(k,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t),c(!1)},profile:e.profile}):Object(n.jsx)(P,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){c(!0)}})]})},_=s(16),U=s(95),B=s(292),w=s.n(B),A=function(e){return Object(n.jsxs)("div",{className:w.a.item,children:[e.message,e.name,Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"\ud83d\udda4 ~ "}),"    ",e.likesCounts]})]})},C=s(293),I=s.n(C),N=s(64),M=Object(N.a)(100),F=l.a.memo((function(e){var t=e.posts.map((function(e){return Object(n.jsx)(A,{message:e.message,likesCounts:e.likesCounts},e.id)})),s=Object(m.a)({form:"addPostForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)(O.a,{component:g.b,name:"newPostBody",validate:[N.b,M],placeholder:"Type your post"}),Object(n.jsx)("button",{children:"Add post"})]})}));return Object(n.jsxs)("div",{className:I.a.postsBlock,children:[Object(n.jsx)("h3",{children:"My posts"}),Object(n.jsx)("div",{children:Object(n.jsx)(s,{onSubmit:function(t){e.addPost(t.newPostBody)}})}),Object(n.jsx)("div",{className:I.a.posts,children:t})]})})),J=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(U.a)(t))}}}))(F),T=s(294),D=s.n(T),E=function(e){return Object(n.jsxs)("div",{className:D.a.profileBlock,children:[Object(n.jsx)(S,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(n.jsx)(J,{store:e.store})]})},V=s(11),z=s(290),q=s(9),L=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(n.jsx)(E,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);t.default=Object(q.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:U.c,getUserStatus:U.d,updateUserStatus:U.g,savePhoto:U.e,saveProfile:U.f}),V.f,z.a)(L)}}]);
//# sourceMappingURL=3.a7b01b14.chunk.js.map