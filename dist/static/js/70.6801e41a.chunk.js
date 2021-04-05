(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[70],{1951:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},2016:function(e,a,t){"use strict";t.r(a);var s=t(11),n=t(12),r=t(14),o=t(13),l=t(0),c=t.n(l),i=t(1216),u=t(1217),p=t(1218),d=t(1219),m=t(1220),f=t(1221),b=t(797),g=t(788),h=t(801),O=t(178),y=t(1951),v=t.n(y),j=t(26),E=(t(862),t(52)),N=t.n(E),w=t(849),k=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={email:"",error:"",status:!1},e}return Object(n.a)(t,[{key:"callApi",value:function(){var e=this;console.log("calling api");var a=this.state.email;if(""!==a){N.a.post("http://localhost:2000/auth/forget-password-email",{email:a,login_type:"email"}).then((function(a){a.data&&(e.setState({status:a.data.status}),j.a.push("/reset-password"))})).catch((function(a){a.response&&a.response.data?(console.log(a.response.data.error),e.setState({error:a.response.data.error})):e.setState({error:"Something went wrong"})}))}else this.setState({error:"Enter valid Email"})}},{key:"render",value:function(){var e=this,a=this.state,t=a.email,s=a.error;return c.a.createElement(i.a,{className:"m-0 justify-content-center"},c.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},c.a.createElement(i.a,{className:"m-0"},c.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},c.a.createElement("img",{src:v.a,alt:"fgImg"})),c.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},c.a.createElement(p.a,{className:"rounded-0 mb-0 px-2 py-1"},c.a.createElement(d.a,{className:"pb-1"},c.a.createElement(m.a,null,c.a.createElement("h4",{className:"mb-0"},"Recover your password"))),""===s&&c.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),""!==s&&c.a.createElement(w.a,{color:"warning"},s),c.a.createElement(f.a,{className:"pt-1 pb-0"},c.a.createElement(b.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"text",name:"email",placeholder:"Email",required:!0,value:t,onChange:function(a){return e.setState({email:a.target.value})}}),c.a.createElement(h.a,null,"Email")),c.a.createElement("div",{className:"float-md-left d-block mb-1"},c.a.createElement(O.a.Ripple,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return j.a.push("/login")}},"Back to Login")),c.a.createElement("div",{className:"float-md-right d-block mb-1"},c.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:function(){return e.callApi()}},"Recover Password")))))))))}}]),t}(c.a.Component);a.default=k},788:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(10),o=t(15),l=t(0),c=t.n(l),i=t(1),u=t.n(i),p=t(3),d=t.n(p),m=t(4),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,p=e.addon,f=e.plaintext,b=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),v="form-control";f?(v+="-plaintext",y=u||"input"):"file"===r?v+="-file":"range"===r?v+="-range":h&&(v=p?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var j=Object(m.mapToCssModules)(d()(a,i&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,v),t);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!f&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(s.a)({},g,{ref:b,className:j,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},797:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(1),c=t.n(l),i=t(3),u=t.n(i),p=t(4),d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.row,l=e.disabled,c=e.check,i=e.inline,d=e.tag,m=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.mapToCssModules)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return"fieldset"===d&&(m.disabled=l),o.a.createElement(d,Object(s.a)({},m,{className:f}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},801:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(1),c=t.n(l),i=t(3),u=t.n(i),p=t(4),d=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,i=e.check,d=e.size,m=e.for,f=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];l.forEach((function(a,s){var n=e[a];if(delete f[a],n||""===n){var r,o=!s;if(Object(p.isObject)(n)){var l,c=o?"-":"-"+a+"-";r=g(o,a,n.size),b.push(Object(p.mapToCssModules)(u()(((l={})[r]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l))),t)}else r=g(o,a,n),b.push(r)}}));var h=Object(p.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return o.a.createElement(c,Object(s.a)({htmlFor:m},f,{className:h}))};h.propTypes=f,h.defaultProps=b,a.a=h},849:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(40),o=t(0),l=t.n(o),c=t(1),i=t.n(c),u=t(3),p=t.n(u),d=t(4),m=t(77);function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:d.tagPropType,transition:i.a.shape(m.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:b(b({},m.a.defaultProps),{},{unmountOnExit:!0})};function O(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,o=e.cssModule,c=e.tag,i=e.color,u=e.isOpen,f=e.toggle,g=e.children,h=e.transition,O=e.fade,y=e.innerRef,v=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=Object(d.mapToCssModules)(p()(a,"alert","alert-"+i,{"alert-dismissible":f}),o),E=Object(d.mapToCssModules)(p()("close",t),o),N=b(b(b({},m.a.defaultProps),h),{},{baseClass:O?h.baseClass:"",timeout:O?h.timeout:0});return l.a.createElement(m.a,Object(s.a)({},v,N,{tag:c,className:j,in:u,role:"alert",innerRef:y}),f?l.a.createElement("button",{type:"button",className:E,"aria-label":r,onClick:f},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}O.propTypes=g,O.defaultProps=h,a.a=O},862:function(e,a,t){}}]);
//# sourceMappingURL=70.6801e41a.chunk.js.map