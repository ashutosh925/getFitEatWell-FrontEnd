(this["webpackJsonpGETFIT-FRONTEND"]=this["webpackJsonpGETFIT-FRONTEND"]||[]).push([[14],{559:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f={tag:d.l,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,f=e.tag,m=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.i)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(f,Object(s.a)({},p,{className:b,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},561:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f={tag:d.l,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.i)(u()(a,"card-body"),t);return o.a.createElement(c,Object(s.a)({},l,{className:i,ref:r}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},562:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f=l.a.oneOfType([l.a.number,l.a.string]),m={tag:d.l,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,f=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete f[a],s){var n=!t;m.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.i)(u()(a,r?"no-gutters":null,l?"form-row":"row",m),t);return o.a.createElement(c,Object(s.a)({},f,{className:p}))};b.propTypes=m,b.defaultProps=p,a.a=b},563:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:f,offset:f})]),p={tag:d.l,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var n=e[a];if(delete l[a],n||""===n){var r=!s;if(Object(d.g)(n)){var o,c=r?"-":"-"+a+"-",f=g(r,a,n.size);i.push(Object(d.i)(u()(((o={})[f]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o)),t))}else{var m=g(r,a,n);i.push(m)}}})),i.length||i.push("col");var f=Object(d.i)(u()(a,i),t);return o.a.createElement(c,Object(s.a)({},l,{className:f}))};h.propTypes=p,h.defaultProps=b,a.a=h},569:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f={tag:d.l,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.i)(u()(a,"card-header"),t);return o.a.createElement(r,Object(s.a)({},c,{className:l}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},570:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f={tag:d.l,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.i)(u()(a,"card-title"),t);return o.a.createElement(r,Object(s.a)({},c,{className:l}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},571:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(9),o=t(10),c=t(0),l=t.n(c),i=t(1),u=t.n(i),d=t(4),f=t.n(d),m=t(5),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,b=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),N="form-control";p?(N+="-plaintext",j=u||"input"):"file"===r?N+="-file":"range"===r?N+="-range":h&&(N=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(m.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var O=Object(m.i)(f()(a,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,N),t);return("input"===j||u&&"function"===typeof u)&&(g.type=r),g.children&&!p&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(m.o)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(j,Object(s.a)({},g,{ref:b,className:O,"aria-invalid":i}))},a}(l.a.Component);b.propTypes=p,b.defaultProps={type:"text"},a.a=b},574:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.l,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,l=e.check,i=e.inline,f=e.tag,m=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.i)(u()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),t);return"fieldset"===f&&(m.disabled=c),o.a.createElement(f,Object(s.a)({},m,{className:p}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},576:function(e,a,t){},579:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(4),u=t.n(i),d=t(5),f=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:f,order:f,offset:f})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.l,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,l=e.tag,i=e.check,f=e.size,m=e.for,p=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach((function(a,s){var n=e[a];if(delete p[a],n||""===n){var r,o=!s;if(Object(d.g)(n)){var c,l=o?"-":"-"+a+"-";r=g(o,a,n.size),b.push(Object(d.i)(u()(((c={})[r]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c))),t)}else r=g(o,a,n),b.push(r)}}));var h=Object(d.i)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return o.a.createElement(l,Object(s.a)({htmlFor:m},p,{className:h}))};h.propTypes=p,h.defaultProps=b,a.a=h},613:function(e,a,t){"use strict";var s=t(3),n=t(6),r=t(9),o=t(10),c=t(0),l=t.n(c),i=t(1),u=t.n(i),d=t(4),f=t.n(d),m=t(5),p={children:u.a.node,inline:u.a.bool,tag:m.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,i=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.i)(f()(a,!!r&&"form-inline"),t);return l.a.createElement(o,Object(s.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=p,b.defaultProps={tag:"form"},a.a=b},860:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},903:function(e,a,t){"use strict";t.r(a);var s=t(12),n=t(13),r=t(15),o=t(14),c=t(0),l=t.n(c),i=t(562),u=t(563),d=t(559),f=t(569),m=t(570),p=t(561),b=t(613),g=t(574),h=t(571),v=t(579),j=t(346),N=t(860),O=t.n(N),y=t(21),E=(t(576),function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(d.a,{className:"bg-authentication rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},l.a.createElement("img",{src:O.a,alt:"fgImg"})),l.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(d.a,{className:"rounded-0 mb-0 px-2 py-1"},l.a.createElement(f.a,{className:"pb-1"},l.a.createElement(m.a,null,l.a.createElement("h4",{className:"mb-0"},"Recover your password"))),l.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),l.a.createElement(p.a,{className:"pt-1 pb-0"},l.a.createElement(b.a,null,l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(h.a,{type:"text",placeholder:"Email",required:!0}),l.a.createElement(v.a,null,"Email")),l.a.createElement("div",{className:"float-md-left d-block mb-1"},l.a.createElement(j.a.Ripple,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return y.a.push("/login")}},"Back to Login")),l.a.createElement("div",{className:"float-md-right d-block mb-1"},l.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:function(e){e.preventDefault(),y.a.push("/")}},"Recover Password"))))))))))}}]),t}(l.a.Component));a.default=E}}]);
//# sourceMappingURL=14.f1095e18.chunk.js.map