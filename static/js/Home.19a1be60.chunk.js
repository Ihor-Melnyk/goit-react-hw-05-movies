"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{4126:function(n,e,r){r.d(e,{e:function(){return c}});var t=r(6871),a=r(501),u=r(184),c=function(n){var e=n.movies,r=(0,t.TH)();return(0,u.jsx)(u.Fragment,{children:e.map((function(n){var e=n.id,t=n.title;return(0,u.jsx)("div",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:r},children:t})},e)}))})}},7700:function(n,e,r){r.d(e,{$L:function(){return s},Ai:function(){return d},Ny:function(){return f},np:function(){return v},yw:function(){return p}});var t=r(5861),a=r(7757),u=r.n(a),c=r(4569),o=r.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var i="0bd2f89e5997215ec06dea49692dc792",s=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5999:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(4126),a=r(8494),u=r(184),c=function(){return(0,u.jsx)(a.$B1,{})},o=r(5861),i=r(885),s=r(7757),f=r.n(s),p=r(7700),v=r(2791),d=function(){var n=function(){var n=(0,v.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,v.useState)(null),u=(0,i.Z)(a,2),c=u[0],s=u[1],d=(0,v.useState)(null),l=(0,i.Z)(d,2),h=l[0],m=l[1];return(0,v.useEffect)((function(){m(!0);var n=function(){var n=(0,o.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.$L)();case 3:return e=n.sent,n.abrupt("return",t(e));case 7:n.prev=7,n.t0=n.catch(0),s(!0),console.error(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{movies:r,error:c,isLoading:h}}(),e=n.movies,r=n.error,a=n.isLoading;return(0,u.jsxs)(u.Fragment,{children:[r&&console.log(r),a&&(0,u.jsx)(c,{}),(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)(t.e,{movies:e})]})}}}]);
//# sourceMappingURL=Home.19a1be60.chunk.js.map