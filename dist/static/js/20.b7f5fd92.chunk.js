(this["webpackJsonpGETFIT-FRONTEND"]=this["webpackJsonpGETFIT-FRONTEND"]||[]).push([[20],{559:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d={tag:u.l,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,r=e.body,i=e.inverse,o=e.outline,d=e.tag,f=e.innerRef,b=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.i)(m()(a,"card",!!i&&"text-white",!!r&&"card-body",!!n&&(o?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(s.a)({},b,{className:g,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},561:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d={tag:u.l,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,r=e.tag,i=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.i)(m()(a,"card-body"),t);return c.a.createElement(r,Object(s.a)({},i,{className:o,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},562:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d=i.a.oneOfType([i.a.number,i.a.string]),f={tag:u.l,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,r=e.tag,i=e.form,o=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];o.forEach((function(a,t){var s=e[a];if(delete d[a],s){var l=!t;f.push(l?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var b=Object(u.i)(m()(a,n?"no-gutters":null,i?"form-row":"row",f),t);return c.a.createElement(r,Object(s.a)({},d,{className:b}))};g.propTypes=f,g.defaultProps=b,a.a=g},563:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),b={tag:u.l,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,r=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,s){var l=e[a];if(delete i[a],l||""===l){var n=!s;if(Object(u.g)(l)){var c,r=n?"-":"-"+a+"-",d=p(n,a,l.size);o.push(Object(u.i)(m()(((c={})[d]=l.size||""===l.size,c["order"+r+l.order]=l.order||0===l.order,c["offset"+r+l.offset]=l.offset||0===l.offset,c)),t))}else{var f=p(n,a,l);o.push(f)}}})),o.length||o.push("col");var d=Object(u.i)(m()(a,o),t);return c.a.createElement(r,Object(s.a)({},i,{className:d}))};E.propTypes=b,E.defaultProps=g,a.a=E},569:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d={tag:u.l,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),i=Object(u.i)(m()(a,"card-header"),t);return c.a.createElement(n,Object(s.a)({},r,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},570:function(e,a,t){"use strict";var s=t(3),l=t(6),n=t(0),c=t.n(n),r=t(1),i=t.n(r),o=t(4),m=t.n(o),u=t(5),d={tag:u.l,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),i=Object(u.i)(m()(a,"card-title"),t);return c.a.createElement(n,Object(s.a)({},r,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},706:function(e,a,t){},917:function(e,a,t){"use strict";t.r(a);var s=t(12),l=t(13),n=t(15),c=t(14),r=t(0),i=t.n(r),o=t(562),m=t(563),u=t(559),d=t(569),f=t(570),b=t(561),g=t(244),p=t(194),E=t(201),N=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,"Activity Timeline")),i.a.createElement(b.a,null,i.a.createElement("ul",{className:"activity-timeline timeline-left list-unstyled"},i.a.createElement("li",null,i.a.createElement("div",{className:"timeline-icon bg-primary"},i.a.createElement(g.a,{size:16})),i.a.createElement("div",{className:"timeline-info"},i.a.createElement("p",{className:"font-weight-bold mb-0"},"Client Meeting"),i.a.createElement("span",{className:"font-small-3"},"Bonbon macaroon jelly beans gummi bears jelly lollipop apple")),i.a.createElement("small",{className:"text-muted"},"25 mins ago")),i.a.createElement("li",null,i.a.createElement("div",{className:"timeline-icon bg-warning"},i.a.createElement(p.a,{size:16})),i.a.createElement("div",{className:"timeline-info"},i.a.createElement("p",{className:"font-weight-bold mb-0"},"Email Newsletter"),i.a.createElement("span",{className:"font-small-3"},"Cupcake gummi bears souffl\xe9 caramels candy")),i.a.createElement("small",{className:"text-muted"},"15 days ago")),i.a.createElement("li",null,i.a.createElement("div",{className:"timeline-icon bg-danger"},i.a.createElement(E.a,{size:16})),i.a.createElement("div",{className:"timeline-info"},i.a.createElement("p",{className:"font-weight-bold mb-0"},"Plan Webinar"),i.a.createElement("span",{className:"font-small-3"},"Candy ice cream cake. Halvah gummi bears")),i.a.createElement("small",{className:"text-muted"},"20 days ago")),i.a.createElement("li",null,i.a.createElement("div",{className:"timeline-icon bg-success"},i.a.createElement(E.a,{size:16})),i.a.createElement("div",{className:"timeline-info"},i.a.createElement("p",{className:"font-weight-bold mb-0"},"Launch Website"),i.a.createElement("span",{className:"font-small-3"},"Candy ice cream cake. ")),i.a.createElement("small",{className:"text-muted"},"25 days ago")),i.a.createElement("li",null,i.a.createElement("div",{className:"timeline-icon bg-primary"},i.a.createElement(E.a,{size:16})),i.a.createElement("div",{className:"timeline-info"},i.a.createElement("p",{className:"font-weight-bold mb-0"},"Marketing"),i.a.createElement("span",{className:"font-small-3"},"Candy ice cream. Halvah bears Cupcake gummi bears.")),i.a.createElement("small",{className:"text-muted"},"28 days ago")))))}}]),t}(i.a.Component),v=(t(706),function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{className:"match-height"},i.a.createElement(m.a,{lg:"12"},i.a.createElement(N,null))))}}]),t}(i.a.Component));a.default=v}}]);
//# sourceMappingURL=20.b7f5fd92.chunk.js.map