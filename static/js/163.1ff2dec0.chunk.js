"use strict";(self.webpackChunksocial=self.webpackChunksocial||[]).push([[163],{9163:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var t=r(5671),o=r(3144),s=r(9340),i=r(2882),u=r(9627),a=r(8687),c=r(2791),l="User_user__XPhWg",p="User_user__head__HEOXR",f="User_user__body__qaY4a",g="User_avatar__+NstI",h="User_btn__d1X5g",d="User_name__FWqeG",v="User_status__mcw5t",_=r(3504),m=r(184),P=function(e){var n=e.followed?"UNFOLLOW":"FOLLOW";return(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)(_.OL,{to:"/profile/"+e.id,children:(0,m.jsx)("img",{src:e.img,alt:"avatar",className:g})}),(0,m.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.id})),onClick:function(){return e.followThunkCreator(e.followed,e.id)},className:h,children:n})]}),(0,m.jsx)("div",{className:f,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:d,children:e.name}),(0,m.jsx)("div",{className:v,children:e.status})]})})]},e.id)},C="Users_users__YybN7",w=r(8055),y=r(885),S="Paginator_paginator__7icD-",j="Paginator_btnBlock__zq7Li",k="Paginator_btn__jk8H-",x="Paginator_pages__YNn2b",z="Paginator_users__DqVtr",U="Paginator_selectedPage__m1Gzs",N="Paginator_btn_none__JTHT8",b=function(e){(0,c.useEffect)((function(){return o(Math.ceil(e.currentPage/e.portionSize))}),[e.currentPage]);for(var n=(0,c.useState)(1),r=(0,y.Z)(n,2),t=r[0],o=r[1],s=Math.ceil(e.totalItemsCount/e.pageSize),i=Math.ceil(s/e.portionSize),u=(t-1)*e.portionSize+1,a=t*e.portionSize,l=[],p=1;p<=s;p++)l.push(p);return(0,m.jsxs)("div",{className:z,children:[(0,m.jsx)("button",{className:e.currentPage<s?k:N,onClick:e.onShowMoreItems,children:"SHOW MORE"}),(0,m.jsxs)("div",{className:S,children:[(0,m.jsx)("div",{className:j,children:t>1&&(0,m.jsx)("button",{onClick:function(){return o(t-1)},className:k,children:"<<"})}),(0,m.jsx)("div",{className:x,children:l.filter((function(e){return e>=u&&e<=a})).map((function(n){return(0,m.jsx)("span",{className:e.currentPage===n?U:"",onClick:function(){return e.onPageChange(n)},children:n+" "},n)}))}),(0,m.jsx)("div",{className:j,children:i>t&&(0,m.jsx)("button",{onClick:function(){return o(t+1)},className:k,children:">>"})})]})]})},I=function(e){return(0,m.jsxs)("div",{className:C,children:[e.users.map((function(n){return(0,m.jsx)(P,{id:n.id,followed:n.followed,name:n.name,img:null!=n.photos.small?n.photos.small:w,status:n.status?n.status:"no status",followingInProgress:e.followingInProgress,followThunkCreator:e.followThunkCreator},n.id)})),(0,m.jsx)(b,{totalItemsCount:e.totalUsersCount,currentPage:e.currentPage,pageSize:e.pageSize,portionSize:e.portionSize,onShowMoreItems:e.onShowMoreUsers,onPageChange:e.onPageChange})]})},O=r(8410),T="NOT_FOUND";var M=function(e,n){return e===n};function E(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?M:t,s=r.maxSize,i=void 0===s?1:s,u=r.resultEqualityCheck,a=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),c=1===i?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:T},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return T}return{get:t,put:function(n,o){t(n)===T&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,a);function l(){var n=c.get(arguments);if(n===T){if(n=e.apply(null,arguments),u){var r=c.getEntries(),t=r.find((function(e){return u(e.value,n)}));t&&(n=t.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function F(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var s,i=0,u={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(u=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=u,l=c.memoizeOptions,p=void 0===l?r:l,f=Array.isArray(p)?p:[p],g=F(t),h=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(f)),d=e((function(){for(var e=[],n=g.length,r=0;r<n;r++)e.push(g[r].apply(null,arguments));return s=h.apply(null,e)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d};return o}var q=A(E),L=q((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Z=function(e){return e.usersPage.pageSize},D=function(e){return e.usersPage.totalUsersCount},R=function(e){return e.usersPage.currentPage},W=function(e){return e.usersPage.isFetching},H=function(e){return e.usersPage.portionSize},X=function(e){return e.usersPage.followingInProgress},Y=function(e){(0,s.Z)(r,e);var n=(0,i.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).componentDidMount=function(){e.props.getUsersThunkCreator(e.props.currentPage,e.props.pageSize,"set",!0)},e.onShowMoreUsers=function(){e.props.getUsersThunkCreator(e.props.currentPage+1,e.props.pageSize,"add",!1),e.props.upCurrentPage(e.props.currentPage)},e.onPageChange=function(n){e.props.getUsersThunkCreator(n,e.props.pageSize,"set",!1),e.props.setCurrentPage(n)},e}return(0,o.Z)(r,[{key:"render",value:function(){return(0,m.jsx)("div",{children:this.props.isFetching?(0,m.jsx)(O.Z,{}):(0,m.jsx)(I,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,portionSize:this.props.portionSize,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,followThunkCreator:this.props.followThunkCreator,onShowMoreUsers:this.onShowMoreUsers,onPageChange:this.onPageChange})})}}]),r}(c.Component),G={setCurrentPage:u.D4,upCurrentPage:u.$b,getUsersThunkCreator:u.Uk,followThunkCreator:u.AC},$=(0,a.$j)((function(e){return{users:L(e),pageSize:Z(e),totalUsersCount:D(e),currentPage:R(e),isFetching:W(e),followingInProgress:X(e),portionSize:H(e)}}),G)(Y)}}]);
//# sourceMappingURL=163.1ff2dec0.chunk.js.map