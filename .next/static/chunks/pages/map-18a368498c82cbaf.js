(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{6833:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return c(597)}])},597:function(a,b,c){"use strict";c.r(b),c.d(b,{Wrapper:function(){return y},"default":function(){return x}});var d=c(4051),e=c.n(d),f=c(5944),g=c(7887),h=c(166),i=c(1163),j=c(7294),k=c(4480),l=c(6620),m=c(3926),n=c(3035),o=c(536),p=c(1230);function q(){var a,b,c=(a=["\n  query fetchMapBoards($lat: Float!, $lng: Float!, $distance: Float!) {\n    fetchMapBoards(lat: $lat, lng: $lng, distance: $distance) {\n      id\n      artist {\n        id\n        active_name\n        artistImageURL\n      }\n      category {\n        id\n        name\n      }\n      boardAddress {\n        id\n        lat\n        lng\n      }\n      start_time\n      end_time\n      isShowTime\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return q=function(){return c},c}var r=(0,p.Ps)(q());function s(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function t(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function u(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||v(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function v(a,b){if(a){if("string"==typeof a)return s(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return s(a,b)}}function w(){var a,b,c=(a=["\n  width: 100vw;\n  height: calc(100vh - 100px);\n  position: relative;\n  @media "," {\n    height: calc(100vh - 50px);\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return w=function(){return c},c}function x(){var a=(0,i.useRouter)(),b=u((0,k.FV)(l.LK),2),c=b[0],d=b[1],h=u((0,k.FV)(l.iq),2),p=h[0],q=h[1];(0,j.useEffect)(function(){c.lat||navigator.geolocation.getCurrentPosition(function(a){d({lat:String(a.coords.latitude),lng:String(a.coords.longitude)})}),q(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))},[]);var s,v=(0,g.a)(r,{variables:{lat:Number(c.lat),lng:Number(c.lng),distance:p?.008:.006}}).data;return(0,f.tZ)(y,{children:""===c.lat?(0,f.tZ)("div",{style:{width:"100%",height:"100%"},children:"불러오는 중입니다..."}):(0,f.BX)("div",{style:{width:"100%",height:"100%",position:"relative",margin:"0 auto"},children:[(0,f.tZ)(o.Z,{address:"",position:c,data:v}),(0,f.tZ)(n.Z,{style:{position:"absolute",bottom:"".concat(p?"80px":"50px"),left:"50%",transform:"translate(-50%,-50%)",zIndex:"2",backgroundColor:"".concat(m.EB),color:"white"},onClick:(s=e().mark(function b(){return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,a.push("/main/list");case 2:return b.abrupt("return",b.sent);case 3:case"end":return b.stop()}},b)}),function(){var a=this,b=arguments;return new Promise(function(c,d){var e=s.apply(a,b);function f(a){t(e,c,d,f,g,"next",a)}function g(a){t(e,c,d,f,g,"throw",a)}f(void 0)})}),children:"리스트로 보기"})]})})}var y=h.Z.div(w(),m.Eg.mobile)},3035:function(a,b,c){"use strict";var d=c(5944),e=c(166),f=c(3926);function g(){var a,b,c=(a=["\n  border: 1px solid ",";\n  background-color: white;\n  padding: 0.5rem 1.5rem;\n  font-size: 1.4rem;\n  border-radius: 5px;\n  color: ",";\n  cursor: pointer;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return g=function(){return c},c}b.Z=function(a){return(0,d.tZ)(h,{id:a.id,style:a.style,onClick:a.onClick,children:(0,d.tZ)(d.HY,{children:a.children})})};var h=e.Z.button(g(),f.EB,f.EB)},9654:function(a,b,c){"use strict";var d=c(5944),e=c(166);function f(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function g(){var a=f(["\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ddd;\n"]);return g=function(){return a},a}function h(){var a=f(["\n  width: 80%;\n  height: 80%;\n"]);return h=function(){return a},a}b.Z=function(a){return(0,d.tZ)(i,{style:{width:a.width,height:a.height},children:(0,d.tZ)(j,{src:a.src||"/avatar.png"})})};var i=e.Z.div(g()),j=e.Z.img(h())},536:function(a,b,c){"use strict";var d=c(4051),e=c.n(d),f=c(5944),g=c(7294),h=c(8356),i=c(9654),j=c(7937),k=c(1163),l=c(166);function m(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function n(){var a,b,c=(a=["\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n\n  animation: flicker 1.5s infinite;\n\n  @keyframes flicker {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return n=function(){return c},c}b.Z=function(a){var b=a.position,c=a.address,d=a.isMap,l=a.setValue,n=a.data,p=(0,k.useRouter)(),q=(0,g.useState)([]),r=q[0],s=q[1],t=(0,g.useState)({lat:null==b?void 0:b.lat,lng:null==b?void 0:b.lng}),u=t[0],v=t[1],w=function(a){return function(){console.log(a,"클릭됨"),s(function(b){return b.map(function(b,c){return c===a?!b:b})})}};console.log(r),(0,g.useEffect)(function(){kakao.maps.load(function(){d||new kakao.maps.services.Geocoder().addressSearch(c,function(a,b){if(b===kakao.maps.services.Status.OK){var c=a[0];v({lat:c.y,lng:c.x}),null==l||l("boardAddressInput.lat",c.y),null==l||l("boardAddressInput.lng",c.x)}})}),n&&s(new Array(n.fetchMapBoards.length).fill(!1))},[b,c,d,l,n]);var x=function(a){var b;return b=e().mark(function b(){return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,p.push("/main/list/".concat(a));case 2:case"end":return b.stop()}},b)}),function(){var a=this,c=arguments;return new Promise(function(d,e){var f=b.apply(a,c);function g(a){m(f,d,e,g,h,"next",a)}function h(a){m(f,d,e,g,h,"throw",a)}g(void 0)})}};return(0,f.tZ)(h.D5,{center:{lat:c?Number(u.lat):Number(null==b?void 0:b.lat),lng:c?Number(u.lng):Number(null==b?void 0:b.lng)},style:{width:"100%",height:"100%",margin:"0 auto"},level:window.outerWidth>1e3?4:5,zoomable:!1,children:c?(0,f.tZ)(h.O_,{position:{lat:Number(u.lat),lng:Number(u.lng)}}):(0,f.BX)(f.HY,{children:[(0,f.BX)(h.le,{position:{lat:Number(null==b?void 0:b.lat),lng:Number(null==b?void 0:b.lng)},clickable:!1,children:[(0,f.tZ)(o,{}),(0,f.tZ)("span",{style:{color:"red",fontWeight:"bold",position:"relative",left:"-20px",fontSize:"1.5rem",cursor:"none"},children:"현재 위치"})]}),null==n?void 0:n.fetchMapBoards.map(function(a,b){var c={lat:a.boardAddress.lat,lng:a.boardAddress.lng},d=new Intl.DateTimeFormat("ko-KR",{hour:"numeric",minute:"numeric"}).format(new Date(a.start_time)),e=new Intl.DateTimeFormat("ko-KR",{hour:"numeric",minute:"numeric"}).format(new Date(a.end_time));return(0,f.BX)("div",{children:[(0,f.tZ)(h.O_,{position:c,onClick:w(b)}),r[b]&&(0,f.tZ)(h.le,{position:c,zIndex:99,children:(0,f.tZ)("div",{className:"wrap",children:(0,f.BX)("div",{className:"info",children:[(0,f.BX)("div",{className:"title",children:[a.artist.active_name,(0,f.tZ)("div",{className:"close",onClick:w(b),title:"닫기",children:(0,f.tZ)(j.Z,{})})]}),(0,f.BX)("div",{className:"body",children:[(0,f.tZ)("div",{className:"img",children:(0,f.tZ)(i.Z,{width:"75px",height:"75px",src:""})}),(0,f.BX)("div",{className:"desc",children:[(0,f.BX)("div",{className:"ellipsis",children:["# ",a.category.name]}),(0,f.BX)("div",{className:"jibun ellipsis",children:["시작: ",d]}),(0,f.BX)("div",{className:"jibun ellipsis",children:["종료: ",e]}),(0,f.tZ)("span",{className:"link",title:"",onClick:x(a.id),children:"버스킹 정보 보러가기"})]})]})]})})})]},b)})]})})};var o=l.Z.div(n())}},function(a){a.O(0,[937,356,774,888,179],function(){return a(a.s=6833)}),_N_E=a.O()}])