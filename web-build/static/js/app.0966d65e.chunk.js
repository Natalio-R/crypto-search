(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/logo_black.284c1661.png"},67:function(e,a,t){"use strict";var c=t(33),r=t.n(c),n=t(23),l=t.n(n),s=t(0),i=t.n(s),o=t(3),d=t(14),p=t(66),m=t(4),u=t(57),f=t(40),g=t.n(f),_=t(34),h=t(15),E=m.a.create({conTextPrice:{display:"flex",alignItems:"flex-end"},textPrice:{color:"#000",paddingHorizontal:10,paddingVertical:5,fontWeight:"600",backgroundColor:"#f2f2f2",borderRadius:50,textAlign:"center"},conTextPerce1:{display:"flex",alignItems:"flex-end"},conTextPerce24:{display:"flex",alignItems:"flex-end"},conTextPerce7:{display:"flex",alignItems:"flex-end"},pricePercentage:{textAlign:"center",paddingHorizontal:10,paddingVertical:5,borderRadius:50},priceUp:{color:"#0B756D",backgroundColor:"#0B756D20"},priceDown:{color:"#fc4422",backgroundColor:"#fc442220"}}),x=function(e){var a=e.coin;return i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row border-top border-1 border-gray py-2 align-items-center"},i.a.createElement("div",{class:"col-1"},a.market_cap_rank),i.a.createElement("div",{class:"col-3 d-flex flex-row align-items-center justify-content-start"},i.a.createElement("img",{src:a.image,width:"30",height:"30"}),i.a.createElement("div",{class:"d-flex flex-column align-items-start justify-content-start ms-3"},i.a.createElement("p",{class:"fw-bold lh-sm m-0"},a.name),i.a.createElement("p",{class:"fw-light lh-sm m-0 text-uppercase"},a.symbol))),i.a.createElement("div",{class:"col-2"},i.a.createElement(o.a,{style:E.conTextPerce1},i.a.createElement(d.a,{style:[E.pricePercentage,a.price_change_percentage_1h_in_currency>0?E.priceUp:E.priceDown]},i.a.createElement(_.a,{icon:a.price_change_percentage_1h_in_currency>0?h.b:h.a}),"\xa0",a.price_change_percentage_1h_in_currency.toFixed(4)," %"))),i.a.createElement("div",{class:"col-2"},i.a.createElement(o.a,{style:E.conTextPerce24},i.a.createElement(d.a,{style:[E.pricePercentage,a.price_change_percentage_24h_in_currency>0?E.priceUp:E.priceDown]},i.a.createElement(_.a,{icon:a.price_change_percentage_24h_in_currency>0?h.b:h.a}),"\xa0",a.price_change_percentage_24h_in_currency.toFixed(4)," %"))),i.a.createElement("div",{class:"col-2"},i.a.createElement(o.a,{style:E.conTextPerce7},i.a.createElement(d.a,{style:[E.pricePercentage,a.price_change_percentage_7d_in_currency>0?E.priceUp:E.priceDown]},i.a.createElement(_.a,{icon:a.price_change_percentage_7d_in_currency>0?h.b:h.a}),"\xa0",a.price_change_percentage_7d_in_currency.toFixed(4)," %"))),i.a.createElement("div",{class:"col-2"},i.a.createElement(o.a,{style:E.conTextPrice},i.a.createElement(d.a,{style:E.textPrice},a.current_price.toFixed(3)," \u20ac")))))},y=(t(83),t(87),m.a.create({searchInput:{paddingStart:"1rem",color:"#000",backgroundColor:"#f2f2f2",borderRadius:4,width:"40%",height:40,textAlign:"left",outlineWidth:0,outline:"none"}}));a.a=function(){var e=Object(s.useState)([]),a=r()(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),m=r()(n,2),f=m[0],_=m[1],h=Object(s.useState)(!1),E=r()(h,2),b=E[0],v=E[1],w=function(){var e,a;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"));case 2:return e=t.sent,t.next=5,l.a.awrap(e.json());case 5:a=t.sent,c(a);case 7:case"end":return t.stop()}}),null,null,null,Promise)};return Object(s.useEffect)((function(){w()}),[]),i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"container d-flex justify-content-between align-items-center border-bottom border-primary border-2 border-red py-3 px-0"},i.a.createElement("div",{class:"d-flex justify-content-start align-items-center w-100"},i.a.createElement("img",{src:g.a,width:"60"}),i.a.createElement("h1",{class:"ms-3"},"Crypo Search")),i.a.createElement(u.a,{placeholder:"Buscar una moneda...",placeholderTextColor:"#666",onChangeText:function(e){return _(e)},"aria-label":"Buscar una moneda...",type:"search",style:y.searchInput})),i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-1"},i.a.createElement("p",{class:"my-2 fw-bold"},"#")),i.a.createElement("div",{class:"col-3"},i.a.createElement("p",{class:"my-2 fw-bold"},"Moneda")),i.a.createElement("div",{class:"col-2"},i.a.createElement("p",{class:"my-2 fw-bold text-end"},"Porcentaje (1h)")),i.a.createElement("div",{class:"col-2"},i.a.createElement("p",{class:"my-2 fw-bold text-end"},"Porcentaje (24h)")),i.a.createElement("div",{class:"col-2"},i.a.createElement("p",{class:"my-2 fw-bold text-end"},"Porcentaje (7d)")),i.a.createElement("div",{class:"col-2"},i.a.createElement("p",{class:"my-2 fw-bold text-end"},"Precio")))),i.a.createElement(p.a,{data:t.filter((function(e){return e.name.toLowerCase().includes(f)||e.symbol.toLowerCase().includes(f)||e.name.toUpperCase().includes(f)||e.symbol.toUpperCase().includes(f)})),renderItem:function(e){var a=e.item;return i.a.createElement(x,{coin:a})},showsVerticalScrollIndicator:!1,refreshing:b,onRefresh:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,l.a.awrap(w());case 3:v(!1);case 4:case"end":return e.stop()}}),null,null,null,Promise)}}),i.a.createElement(o.a,null,i.a.createElement(d.a,null,"\xa92020 Copyright | Todos los derechos reservados. Desarrollado e implementado por ",i.a.createElement("a",{href:"https://natalio.netlify.app"},"Natalio R"))))}},68:function(e,a,t){e.exports=t(101)}},[[68,1,2]]]);
//# sourceMappingURL=app.0966d65e.chunk.js.map