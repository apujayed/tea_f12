(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[18],{134:function(s,e,a){"use strict";a.r(e);var c=a(5),t=a(93),r=a(7),o=a(0),n=a(9),l=a.n(n),d=a(129),i=a(128),b=a(1);e.default=function(){var s=Object(o.useState)({previousPassword:"",newPassword:"",confirmPassword:""}),e=Object(r.a)(s,2),a=e[0],n=e[1],j=Object(o.useState)(""),m=Object(r.a)(j,2),u=m[0],h=m[1],w=Object(o.useState)(!1),x=Object(r.a)(w,2),O=x[0],p=x[1],f=function(s){var e=s.target,r=e.name,o=e.value;n(Object(t.a)(Object(t.a)({},a),{},Object(c.a)({},r,o))),h("")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"col-lg-7 connectedSortable",children:Object(b.jsx)("div",{className:"box box-danger",children:Object(b.jsx)("div",{className:"tab-content no-padding",children:Object(b.jsxs)("form",{onSubmit:function(s){s.preventDefault(),a.newPassword===a.confirmPassword?l.a.post("".concat("http://68.183.81.28:3009","/resetpassword"),a).then((function(s){s.data.success?(alert("Password updated successfully."),n({previousPassword:"",newPassword:"",confirmPassword:""})):h(s.data.message)})):h("New password and Confirm password must match.")},children:[Object(b.jsx)("div",{className:"box-header header-custom",children:Object(b.jsx)("h3",{className:"box-title",children:"Change Password"})}),Object(b.jsx)("div",{className:"box-body form-horizontal",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"previousPassword",className:"col-sm-3 control-label",children:"Previous"}),Object(b.jsx)("div",{className:"col-sm-9",children:Object(b.jsx)("input",{type:O?"text":"password",name:"previousPassword",value:a.previousPassword,onChange:f,required:!0,className:"form-control"})})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"newPassword",className:"col-sm-3 control-label",children:"New Password"}),Object(b.jsx)("div",{className:"col-sm-9",children:Object(b.jsx)("input",{type:O?"text":"password",name:"newPassword",value:a.newPassword,onChange:f,required:!0,className:"form-control"})})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"confirmPassword",className:"col-sm-3 control-label",children:"Confirm Password"}),Object(b.jsx)("div",{className:"col-sm-9",children:Object(b.jsx)("input",{type:O?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:f,required:!0,className:"form-control"})})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("div",{className:"col-sm-9 col-sm-offset-3",children:Object(b.jsx)("button",{type:"button",onClick:function(){p((function(s){return!s}))},className:"btn btn-link",children:Object(b.jsx)(d.a,{icon:O?i.b:i.a})})})})]})})}),u&&Object(b.jsx)("p",{children:u}),Object(b.jsx)("div",{className:"box-footer",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Change"})})]})})})})})}}}]);
//# sourceMappingURL=18.76f777de.chunk.js.map