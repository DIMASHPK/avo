(this.webpackJsonpavo=this.webpackJsonpavo||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),c=n(67),s=n(13),l=n(42),u={people:[],currentPerson:null,isLoading:!1,page:0,next:null,previous:null,error:null,favoritePeople:JSON.parse(localStorage.getItem("favoritePeople"))||[]},d=Object(c.b)({name:"people",initialState:u,reducers:{setLoading:function(e,t){var n=t.payload;e.isLoading=n},setPage:function(e,t){var n=t.payload;e.page=n},setData:function(e,t){var n=t.payload,a=n.results,r=n.count,i=n.next,o=n.previous,c=n.error;if(c)return e.error=c,void(e.people=[]);e.people=a,e.count=r,e.next=i,e.previous=o},setCurrentPersonData:function(e,t){var n=t.payload,a=n.error,r=Object(l.a)(n,["error"]);if(a)return e.error=a,void(e.currentPerson=null);e.currentPerson=r},addFavorite:function(e,t){var n=t.payload,a=e.favoritePeople;8===a.length&&a.pop(),e.favoritePeople.push(n),localStorage.setItem("favoritePeople",JSON.stringify(e.favoritePeople))},removeFavorite:function(e,t){var n=t.payload;e.favoritePeople=e.favoritePeople.filter((function(e,t){return n!==t})),localStorage.setItem("favoritePeople",JSON.stringify(e.favoritePeople))},insertBeforeCurrentFavorite:function(e,t){var n=t.payload,a=n.draggedPerson,r=n.indexOfDropItem;8===e.favoritePeople.length&&e.favoritePeople.pop(),e.favoritePeople.splice(r,0,a),localStorage.setItem("favoritePeople",JSON.stringify(e.favoritePeople))},swap:function(e,t){var n=t.payload,a=n.draggedItem,r=n.dropItem;e.favoritePeople=e.favoritePeople.map((function(e){var t=e.name,n=Object(l.a)(e,["name"]);return t===a.name?Object(s.a)({},r):t===r.name?Object(s.a)({},a):Object(s.a)({name:t},n)})),localStorage.setItem("favoritePeople",JSON.stringify(e.favoritePeople))}}}),p=d.actions,j=p.setLoading,b=p.setPage,g=p.setData,v=p.setCurrentPersonData,f=p.removeFavorite,O=p.addFavorite,h=p.swap,m=p.insertBeforeCurrentFavorite,x=d.reducer,y=Object(c.a)({reducer:{people:x}}),w=n(20),I=n(102),C=n(11),D=n(5),S=n.n(D),P=(S.a.oneOfType([S.a.arrayOf(S.a.node),S.a.node]),S.a.shape({birth_year:S.a.string,created:S.a.string,edited:S.a.string,eye_color:S.a.string,films:S.a.arrayOf(S.a.string),gender:S.a.string,hair_color:S.a.string,height:S.a.string,homeworld:S.a.string,mass:S.a.string,name:S.a.string,skin_color:S.a.string,species:S.a.arrayOf(S.a.string),starships:S.a.arrayOf(S.a.string),url:S.a.string,vehicles:S.a.arrayOf(S.a.string)}),n(188)),k=n(144),N=n(185),L=Object(N.a)((function(){return{paper:{display:"flex",alignItems:"center",minHeight:"97vh"},contentContainer:{flexGrow:1}}})),B=n(3),F=n(4),H=Object(a.memo)((function(e){var t=e.children,n=e.elevation,a=void 0===n?1:n,r=e.classes,i=void 0===r?{}:r,o=L();return Object(F.jsx)(P.a,{className:Object(B.a)(o.container,i.container),children:Object(F.jsx)(k.a,{className:Object(B.a)(o.paper,i.paper),elevation:a,children:Object(F.jsx)("div",{className:Object(B.a)(o.contentContainer,i.contentContainer),children:t})})})}));H.displayName="Layout";var R=H,A=n(194),J=n(191),T=n(193),E=n(192),_=n(69),q=n(14),M=n.n(q),W=n(26),z=n(63),G=n(50),V=n(28),U=n(55),X=n(54),Z=n(48),K=n(49),Q=n(98),Y=n.n(Q),$={baseURL:"https://swapi.dev/api"},ee=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;Object(Z.a)(this,e),this.config=t,this.instance=Y.a.create(t)}return Object(K.a)(e,[{key:"get",value:function(){var e=Object(W.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",this.instance.get("/".concat(t)));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),te=function(e){Object(U.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(Z.a)(this,n),(a=t.call(this)).speciesConfig=e,a}return Object(K.a)(n,[{key:"getSingle",value:function(){var e=Object(W.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(G.a)(Object(V.a)(n.prototype),"get",this).call(this,"".concat(this.speciesConfig.path,"/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(ee),ne=function(e){Object(U.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(Z.a)(this,n),(a=t.call(this)).filmsConfig=e,a}return Object(K.a)(n,[{key:"getSingle",value:function(){var e=Object(W.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(G.a)(Object(V.a)(n.prototype),"get",this).call(this,"".concat(this.filmsConfig.path,"/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(ee),ae=function(e){Object(U.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(Z.a)(this,n),(a=t.call(this)).starshipsConfig=e,a}return Object(K.a)(n,[{key:"getSingle",value:function(){var e=Object(W.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(G.a)(Object(V.a)(n.prototype),"get",this).call(this,"".concat(this.starshipsConfig.path,"/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(ee),re=new(function(e){Object(U.a)(n,e);var t=Object(X.a)(n);function n(e){var a,r;return Object(Z.a)(this,n),(r=t.call(this)).getAll=Object(W.a)(M.a.mark((function e(){var t,i=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.abrupt("return",Object(G.a)((a=Object(z.a)(r),Object(V.a)(n.prototype)),"get",a).call(a,"".concat(r.peopleConfig.path,"/?page=").concat(t)));case 2:case"end":return e.stop()}}),e)}))),r.handleInnerRequest=function(){var e=Object(W.a)(M.a.mark((function e(t){var n,a,r,i,o,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data,a=void 0===n?[]:n,r=t.api,a.length){e.next=3;break}return e.abrupt("return",null);case 3:return i=function(e){var t=e.split("/");return t[t.length-2]},o=a.map(i),e.next=7,Promise.allSettled(o.map(function(){var e=Object(W.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.getSingle(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=[];case 10:return c=e.t0,e.abrupt("return",c.filter((function(e){return"fulfilled"===e.status})).map((function(e){var t=e.value;return null===t||void 0===t?void 0:t.data})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.peopleConfig=e,r}return Object(K.a)(n,[{key:"getSingle",value:function(){var e=Object(W.a)(M.a.mark((function e(t){var a,r,i,o,c,u,d,p,j;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new te({path:"species"}),r=new ae({path:"starships"}),i=new ne({path:"films"}),e.prev=3,e.next=6,Object(G.a)(Object(V.a)(n.prototype),"get",this).call(this,"".concat(this.peopleConfig.path,"/").concat(t));case 6:if(o=e.sent,c=o.data,u=Object(l.a)(o,["data"]),!c){e.next=20;break}return e.next=12,this.handleInnerRequest({data:null===c||void 0===c?void 0:c.films,api:i});case 12:return d=e.sent,e.next=15,this.handleInnerRequest({data:null===c||void 0===c?void 0:c.starships,api:r});case 15:return p=e.sent,e.next=18,this.handleInnerRequest({data:null===c||void 0===c?void 0:c.species,api:a});case 18:return j=e.sent,e.abrupt("return",Object(s.a)({data:Object(s.a)(Object(s.a)({},c),{},{films:d,starships:p,species:j})},u));case 20:return console.log(Object(s.a)({data:c},u)),e.abrupt("return",Object(s.a)({data:c},u));case 24:return e.prev=24,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",{data:{error:"something went wrong"}});case 28:case"end":return e.stop()}}),e,this,[[3,24]])})));return function(t){return e.apply(this,arguments)}}()}]),n}(ee))({path:"people"}),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(W.a)(M.a.mark((function t(n){var a,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b(e)),n(j(!0)),t.prev=2,t.next=5,re.getAll(e+1);case 5:a=t.sent,r=a.data,n(g(r)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),n(g({error:"something went wrong"}));case 14:return t.prev=14,n(j(!1)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,10,14,17]])})));return function(e){return t.apply(this,arguments)}}()},oe=Object(N.a)((function(e){return{cartContainer:{maxWidth:500,margin:"auto"},contentContainer:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:200,flexDirection:"column"},contentWrapper:{flexGrow:1,width:"100%"}}})),ce=n(190),se=Object(N.a)((function(e){return{preloader:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:50,height:50,"& > div":{width:"100%",height:"100%"}}}})),le=Object(a.memo)((function(e){var t=e.isLoading,n=void 0!==t&&t,a=e.className,r=void 0===a?null:a,i=se();return n?Object(F.jsx)("div",{className:Object(B.a)(i.preloader,r),children:Object(F.jsx)(ce.a,{size:"small"})}):null}));le.displayName="Preloader";var ue=le,de=Object(a.memo)((function(){var e=Object(w.c)((function(e){return e.people})),t=e.isLoading,n=e.currentPerson,r=e.error,i=oe(),o=Object(C.f)().id,c=Object(C.e)().push,s=Object(w.b)();Object(a.useEffect)((function(){s(function(e){return function(){var t=Object(W.a)(M.a.mark((function t(n){var a,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(j(!0)),t.next=3,re.getSingle(e);case 3:a=t.sent,r=a.data,n(v(r)),n(j(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(o))}),[s,o]);var l=function(e){var t=e.value,n=e.title;return Object(F.jsxs)(_.a,{children:[n,":\xa0",(null===t||void 0===t?void 0:t.length)?t.toString():"none"]})};return Object(F.jsx)(R,{elevation:0,children:Object(F.jsxs)(J.a,{className:i.cartContainer,children:[Object(F.jsx)(E.a,{className:i.contentContainer,children:function(){var e,a,o;return!r||n||t?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ue,{isLoading:t}),n&&!t&&Object(F.jsxs)("div",{className:i.contentWrapper,children:[Object(F.jsx)(_.a,{variant:"h5",component:"h2",children:"Person description"}),Object(F.jsxs)(_.a,{children:["Name: ",n.name]}),l({title:"Species",value:null===n||void 0===n||null===(e=n.species)||void 0===e?void 0:e.map((function(e){return e.name}))}),l({title:"Movies",value:null===n||void 0===n||null===(a=n.films)||void 0===a?void 0:a.map((function(e){return e.title}))}),l({title:"Spaceships",value:null===n||void 0===n||null===(o=n.species)||void 0===o?void 0:o.map((function(e){return e.name}))})]})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(_.a,{variant:"h5",component:"h2",children:"Error :("}),Object(F.jsx)(_.a,{children:r})]})}()}),Object(F.jsx)(T.a,{children:Object(F.jsx)(A.a,{variant:"contained",size:"small",onClick:function(){c("/")},children:"Back"})})]})})}));de.displayName="DetailsView";var pe=de,je=n(202),be=n(204),ge=n(201),ve=n(203),fe=n(205),Oe=n(196),he=n(195),me=Object(N.a)((function(e){return{tableRow:{cursor:"pointer","&:hover td":{background:e.palette.grey[400],color:e.palette.common.white}}}})),xe=Object(a.memo)((function(e){var t=e.data,n=t.name,r=t.gender,i=t.birth_year,o=t.height,c=t.mass,s=t.url,l=Object(C.e)().push,u=me(),d=Object(a.useMemo)((function(){var e=s.split("/");return e[e.length-2]}),[s]),p=function(e){e.stopPropagation(),e.dataTransfer.setData("name",n)};return Object(F.jsxs)(he.a,{onDrag:p,onDragStart:p,onClick:function(){l("/".concat(d))},draggable:!0,className:u.tableRow,children:[Object(F.jsx)(Oe.a,{children:n}),Object(F.jsx)(Oe.a,{children:r}),Object(F.jsx)(Oe.a,{children:i}),Object(F.jsx)(Oe.a,{children:c}),Object(F.jsx)(Oe.a,{children:o})]})}));xe.displayName="Row";var ye=xe,we=Object(N.a)((function(e){return{paper:{margin:"0 50px",minHeight:"auto"},container:{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"97vh"},tableContainer:{position:"relative",maxHeight:"min(80vh, 640px)"},tableWrapper:{},errorHint:{textAlign:"center",borderBottom:"none"}}})),Ie=n(43),Ce=n(53),De=n(207),Se=Object(N.a)((function(e){return{toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(1),minHeight:"auto",marginTop:8},drawer:{width:300,flexShrink:0,whiteSpace:"nowrap"},overFlowHidden:{overflow:"hidden"},dragActive:{background:e.palette.grey[400]},drawerOpen:{width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden",width:50},chevronIcon:{transition:e.transitions.create("transform",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},rotatedIcon:{transform:"rotateZ(180deg)"},toggleButton:{padding:5},title:{transition:e.transitions.create("opacity",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),opacity:0,width:"100%",textAlign:"left"},showedTitle:{opacity:1}}})),Pe=n(200),ke=n(101),Ne=n.n(ke),Le=Object(N.a)((function(e){return{hiddenContainer:{transition:e.transitions.create("opacity",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),opacity:0},hiddenContainerVisible:{opacity:1},list:{padding:0},listItem:{padding:8},removeButton:{padding:5},emptyHint:{padding:8,height:50,boxSizing:"border-box",display:"flex",alignItems:"center"},dragOverItem:{background:e.palette.grey[400]}}})),Be=n(197),Fe=n(198),He=n(199),Re=n(100),Ae=n.n(Re),Je=Object(a.memo)((function(e){var t,n=e.open,r=void 0!==n&&n,i=e.onDragStart,o=e.onDropItem,c=e.dragSideBarItemData,u=e.onDragOverItem,d=e.onDragLeaveItem,p=Object(w.b)(),j=Object(w.c)((function(e){return e.people})).favoritePeople,b=Object(C.e)().push,g=Le(),v=Object(a.useCallback)((function(e){var t;return(null===c||void 0===c||null===(t=c.dragOverIem)||void 0===t?void 0:t.name)===e}),[null===c||void 0===c||null===(t=c.dragOverIem)||void 0===t?void 0:t.name]);return Object(F.jsx)("div",{className:Object(B.a)(g.hiddenContainer,r&&g.hiddenContainerVisible),children:j.length?Object(F.jsx)(Be.a,{className:g.list,children:j.map((function(e,t){var n=e.name,a=e.url,r=Object(l.a)(e,["name","url"]);return Object(F.jsxs)(Fe.a,{draggable:!0,button:!0,onDragStart:function(e){return i(e,Object(s.a)({name:n,url:a},r))},onDrop:function(e){return o(e,Object(s.a)({name:n,url:a},r))},onDragOver:function(e){return u(e,Object(s.a)({name:n,url:a},r))},onDragLeave:d,onClick:function(){return function(e){var t=e.split("/");b("/".concat(t[t.length-2]))}(a)},className:Object(B.a)(g.listItem,v(n)&&g.dragOverItem),children:[Object(F.jsx)(He.a,{primary:n}),Object(F.jsx)(Pe.a,{className:g.removeButton,onClick:function(e){return function(e,t){e.stopPropagation(),p(f(t))}(e,t)},children:Object(F.jsx)(Ae.a,{})})]},n)}))}):Object(F.jsx)(_.a,{className:g.emptyHint,children:"No Favorite"})})}));Je.displayName="RenderItems";var Te=Je,Ee=Object(a.memo)((function(){var e,t,n=Object(a.useState)(!1),r=Object(Ce.a)(n,2),i=r[0],o=r[1],c=function(e){var t=e.setOpen,n=void 0===t?function(){}:t,r=Object(w.c)((function(e){return e.people})),i=r.people,o=r.favoritePeople,c=Object(w.b)(),l=Object(a.useState)(!1),u=Object(Ce.a)(l,2),d=u[0],p=u[1],j=Object(a.useState)({draggedItem:null,dragOverIem:null}),b=Object(Ce.a)(j,2),g=b[0],v=b[1],f=Object(a.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),x=Object(a.useCallback)((function(e){var t=e.dataTransfer.getData("name");return i.find((function(e){return e.name===t}))}),[i]),y=Object(a.useCallback)((function(e){f(e),n(!0),g.draggedItem||p(!0)}),[g.draggedItem,f,n]),I=Object(a.useCallback)((function(e){f(e),g.draggedItem||(p(!1),n(!1))}),[g.draggedItem,f,n]),C=Object(a.useCallback)((function(e){f(e);var t=x(e);p(!1),t&&(o.map((function(e){return e.name})).includes(t.name)||c(O(t)))}),[c,o,x,f]),D=Object(a.useCallback)((function(e,t){e.stopPropagation(),v((function(e){return Object(s.a)(Object(s.a)({},e),{},{draggedItem:t})}))}),[]),S=Object(a.useCallback)((function(e,t){f(e);var n=g.draggedItem,a=x(e);if(v((function(e){return{draggedItem:null,dragOverIem:null}})),n&&c(h({draggedItem:Object(s.a)({},n),dropItem:Object(s.a)({},t)})),a&&!o.map((function(e){return e.name})).includes(null===a||void 0===a?void 0:a.name)){var r=o.findIndex((function(e){return e.name===t.name}));c(m({draggedPerson:a,indexOfDropItem:r})),console.log(a)}}),[c,g,o,x,f]),P=Object(a.useCallback)((function(e,t){f(e),n(!0),v((function(e){return Object(s.a)(Object(s.a)({},e),{},{dragOverIem:t})}))}),[f,n]),k=Object(a.useCallback)((function(e){f(e),v((function(e){return Object(s.a)(Object(s.a)({},e),{},{dragOverIem:null})}))}),[f]);return{preventingFunc:f,onDragOver:y,onDragLeave:I,onDrop:C,onDragStart:D,onDropItem:S,dragSideBarActive:d,dragSideBarItemData:g,onDragOverItem:P,onDragLeaveItem:k}}({setOpen:o}),l=c.preventingFunc,u=c.onDragOver,d=c.onDragLeave,p=c.onDrop,j=c.dragSideBarActive,b=c.onDragStart,g=c.onDropItem,v=c.dragSideBarItemData,f=c.onDragOverItem,x=c.onDragLeaveItem,y=Se();return Object(F.jsxs)(De.a,{variant:"permanent",className:Object(B.a)(y.drawer,y.overFlowHidden,(e={},Object(Ie.a)(e,y.drawerOpen,i),Object(Ie.a)(e,y.drawerClose,!i),e)),onDragOver:u,onDragEnter:l,onDragLeave:d,onDrop:p,classes:{paper:Object(B.a)(y.overFlowHidden,j&&y.dragActive,(t={},Object(Ie.a)(t,y.drawerOpen,i),Object(Ie.a)(t,y.drawerClose,!i),t))},children:[Object(F.jsxs)("div",{className:y.toolbar,children:[Object(F.jsx)(_.a,{variant:"h5",component:"h2",className:Object(B.a)(y.title,i&&y.showedTitle),children:"Favorite Persons List"}),Object(F.jsx)(Pe.a,{className:y.toggleButton,onClick:i?function(){o(!1)}:function(){o(!0)},children:Object(F.jsx)(Ne.a,{className:Object(B.a)(y.chevronIcon,i&&y.rotatedIcon)})})]}),Object(F.jsx)(Te,{open:i,onDragStart:b,onDropItem:g,dragSideBarItemData:v,onDragOverItem:f,onDragLeaveItem:x})]})}));Ee.displayName="SideBar";var _e=Ee,qe=Object(a.memo)((function(){var e=Object(w.c)((function(e){return e.people})),t=e.count,n=e.page,r=e.people,i=e.isLoading,o=e.error,c=Object(w.b)(),s=we();Object(a.useEffect)((function(){c(ie())}),[c]);var l=Object(a.useCallback)((function(e,t){c(ie(t))}),[c]);return Object(F.jsxs)(R,{classes:{paper:s.paper,container:s.container},children:[Object(F.jsxs)(ge.a,{className:s.tableContainer,children:[Object(F.jsxs)(je.a,{stickyHeader:!0,children:[Object(F.jsx)(ve.a,{children:Object(F.jsxs)(he.a,{children:[Object(F.jsx)(Oe.a,{children:"Name"}),Object(F.jsx)(Oe.a,{children:"Gender"}),Object(F.jsx)(Oe.a,{children:"Date of birthday"}),Object(F.jsx)(Oe.a,{children:"Mass"}),Object(F.jsx)(Oe.a,{children:"Height"})]})}),Object(F.jsxs)(be.a,{children:[null===r||void 0===r?void 0:r.map((function(e,t){return Object(F.jsx)(ye,{data:e},e.url)})),Boolean(!i&&!r.length&&o)&&Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(Oe.a,{className:s.errorHint,colSpan:5,children:[Object(F.jsx)(_.a,{variant:"h5",component:"h2",children:"Error :("}),Object(F.jsx)(_.a,{children:o})]})})]})]}),Object(F.jsx)(ue,{isLoading:i})]}),Object(F.jsx)(fe.a,{count:t||0,rowsPerPageOptions:[],rowsPerPage:10,page:n,component:"div",onPageChange:l}),Object(F.jsx)(_e,{})]})}));qe.displayName="PeopleTable";var Me=qe,We="/",ze="/:id",Ge=Object(a.memo)((function(){return Object(F.jsxs)(I.a,{basename:"/",children:[Object(F.jsx)(C.a,{exact:!0,path:ze,children:Object(F.jsx)(pe,{})}),Object(F.jsx)(C.a,{exact:!0,path:We,children:Object(F.jsx)(Me,{})})]})}));Ge.displayName="Routes";var Ve=Ge,Ue=function(){return Object(F.jsx)(w.a,{store:y,children:Object(F.jsx)(Ve,{})})};o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(Ue,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.c6ac1a51.chunk.js.map