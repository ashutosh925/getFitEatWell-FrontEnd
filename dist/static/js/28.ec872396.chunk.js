(this["webpackJsonpGETFIT-FRONTEND"]=this["webpackJsonpGETFIT-FRONTEND"]||[]).push([[28],{594:function(e,t,a){},857:function(e,t,a){},901:function(e,t,a){"use strict";a.r(t);var l=a(82),n=a.n(l),r=a(124),i=a(12),s=a(13),c=a(15),o=a(14),m=a(0),d=a.n(m),u=a(562),f=a(563),p=a(559),E=a(569),g=a(570),v=a(819),h=a(561),N=a(840),S=a(574),w=a(579),b=a(571),C=a(551),A=a(557),D=a(552),k=a(550),y=a(701),z=a(46),x=a.n(z),F=a(168),R=a(848),O=a(215),T=a(258),V=a(202),j=a(247),G=a(173),M=a(206),I=a(246),L=a(211),P=a(4),Q=a.n(P),U=a(21),B=(a(857),a(594),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={rowData:null,pageSize:20,isVisible:!0,reload:!1,collapse:!0,status:"Opened",role:"All",selectStatus:"All",verified:"All",department:"All",defaultColDef:{sortable:!0},searchVal:"",columnDefs:[{headerName:"ID",field:"id",width:150,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer",onClick:function(){return U.a.push("/app/user/edit")}},d.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.avatar,alt:"user avatar",height:"30",width:"30"}),d.a.createElement("span",null,e.data.name))}},{headerName:"Email",field:"email",filter:!0,width:250},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:200},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"active"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-light-success"},e.value):"blocked"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-light-danger"},e.value):"deactivated"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-light-warning"},e.value):null}},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:function(e){return!0===e.value?d.a.createElement("div",{className:"bullet bullet-sm bullet-primary"}):!1===e.value?d.a.createElement("div",{className:"bullet bullet-sm bullet-secondary"}):null}},{headerName:"Department",field:"department",filter:!0,width:160},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(O.a,{className:"mr-50",size:15,onClick:function(){return U.a.push("/app/user/edit")}}),d.a.createElement(T.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},e.filterData=function(t,a){var l=null;"all"!==a&&(l={type:"equals",filter:a}),e.gridApi.getFilterInstance(t).setModel(l),e.gridApi.onFilterChanged()},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({pageSize:t}))},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t),e.setState({searchVal:t})},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1,role:"All",selectStatus:"All",verified:"All",department:"All"})}),500)},e.toggleCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEntered=function(){e.setState({status:"Opened"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExited=function(){e.setState({status:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("api/users/list").then((function(e){var a=e.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,l=t.columnDefs,n=t.defaultColDef,r=t.pageSize;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,{className:Q()("card-action card-reload",{"d-none":!1===this.state.isVisible,"card-collapsed":"Closed"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status,refreshing:this.state.reload})},d.a.createElement(E.a,null,d.a.createElement(g.a,null,"Filters"),d.a.createElement("div",{className:"actions"},d.a.createElement(V.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleCollapse}),d.a.createElement(j.a,{className:"mr-50",size:15,onClick:function(){e.refreshCard(),e.gridApi.setFilterModel(null)}}),d.a.createElement(G.a,{size:15,onClick:this.removeCard}))),d.a.createElement(v.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},d.a.createElement(h.a,null,this.state.reload?d.a.createElement(N.a,{color:"primary",className:"reload-spinner"}):"",d.a.createElement(u.a,null,d.a.createElement(f.a,{lg:"3",md:"6",sm:"12"},d.a.createElement(S.a,{className:"mb-0"},d.a.createElement(w.a,{for:"role"},"Role"),d.a.createElement(b.a,{type:"select",name:"role",id:"role",value:this.state.role,onChange:function(t){e.setState({role:t.target.value},(function(){return e.filterData("role",e.state.role.toLowerCase())}))}},d.a.createElement("option",{value:"All"},"All"),d.a.createElement("option",{value:"User"},"User"),d.a.createElement("option",{value:"Staff"},"Staff"),d.a.createElement("option",{value:"Admin"},"Admin")))),d.a.createElement(f.a,{lg:"3",md:"6",sm:"12"},d.a.createElement(S.a,{className:"mb-0"},d.a.createElement(w.a,{for:"status"},"Status"),d.a.createElement(b.a,{type:"select",name:"status",id:"status",value:this.state.selectStatus,onChange:function(t){e.setState({selectStatus:t.target.value},(function(){return e.filterData("status",e.state.selectStatus.toLowerCase())}))}},d.a.createElement("option",{value:"All"},"All"),d.a.createElement("option",{value:"Active"},"Active"),d.a.createElement("option",{value:"Blocked"},"Blocked"),d.a.createElement("option",{value:"Deactivated"},"Deactivated")))),d.a.createElement(f.a,{lg:"3",md:"6",sm:"12"},d.a.createElement(S.a,{className:"mb-0"},d.a.createElement(w.a,{for:"verified"},"Verified"),d.a.createElement(b.a,{type:"select",name:"verified",id:"verified",value:this.state.verified,onChange:function(t){e.setState({verified:t.target.value},(function(){return e.filterData("is_verified",e.state.verified.toLowerCase())}))}},d.a.createElement("option",{value:"All"},"All"),d.a.createElement("option",{value:"True"},"True"),d.a.createElement("option",{value:"False"},"False")))),d.a.createElement(f.a,{lg:"3",md:"6",sm:"12"},d.a.createElement(S.a,{className:"mb-0"},d.a.createElement(w.a,{for:"department"},"Department"),d.a.createElement(b.a,{type:"select",name:"department",id:"department",value:this.state.department,onChange:function(t){e.setState({department:t.target.value},(function(){return e.filterData("department",e.state.department.toLowerCase())}))}},d.a.createElement("option",{value:"All"},"All"),d.a.createElement("option",{value:"Sales"},"Sales"),d.a.createElement("option",{value:"Development"},"Development"),d.a.createElement("option",{value:"Management"},"Management"))))))))),d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(h.a,null,d.a.createElement("div",{className:"ag-theme-material ag-grid-table"},d.a.createElement("div",{className:"ag-grid-actions d-flex justify-content-between flex-wrap mb-1"},d.a.createElement("div",{className:"sort-dropdown"},d.a.createElement(C.a,{className:"ag-dropdown p-1"},d.a.createElement(A.a,{tag:"div"},"1 - ",r," of 150",d.a.createElement(V.a,{className:"ml-50",size:15})),d.a.createElement(D.a,{right:!0},d.a.createElement(k.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(k.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(k.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(k.a,{tag:"div",onClick:function(){return e.filterSize(150)}},"150")))),d.a.createElement("div",{className:"filter-actions d-flex"},d.a.createElement(b.a,{className:"w-50 mr-1 mb-1 mb-sm-0",type:"text",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.searchVal}),d.a.createElement("div",{className:"dropdown actions-dropdown"},d.a.createElement(y.a,null,d.a.createElement(A.a,{className:"px-2 py-75",color:"white"},"Actions",d.a.createElement(V.a,{className:"ml-50",size:15})),d.a.createElement(D.a,{right:!0},d.a.createElement(k.a,{tag:"a"},d.a.createElement(T.a,{size:15}),d.a.createElement("span",{className:"align-middle ml-50"},"Delete")),d.a.createElement(k.a,{tag:"a"},d.a.createElement(M.a,{size:15}),d.a.createElement("span",{className:"align-middle ml-50"},"Archive")),d.a.createElement(k.a,{tag:"a"},d.a.createElement(I.a,{size:15}),d.a.createElement("span",{className:"align-middle ml-50"},"Print")),d.a.createElement(k.a,{tag:"a"},d.a.createElement(L.a,{size:15}),d.a.createElement("span",{className:"align-middle ml-50"},"CSV"))))))),null!==this.state.rowData?d.a.createElement(F.a.Consumer,null,(function(t){return d.a.createElement(R.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:l,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",paginationPageSize:r,resizable:!0,enableRtl:"rtl"===t.state.direction})})):null)))))}}]),a}(d.a.Component));t.default=B}}]);
//# sourceMappingURL=28.ec872396.chunk.js.map