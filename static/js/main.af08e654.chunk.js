(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},108:function(e,t){},111:function(e,t){},133:function(e,t){},134:function(e,t){},158:function(e,t,n){"use strict";n.r(t);var c=n(24),r=n.n(c),a=n(95),s=n.n(a),o=(n(105),n(3)),i=n(9),u=n(1),l=n.n(u),f=n.p+"static/media/twitter-logo.d89d9a86.svg",p=(n(107),n(53)),b=n(8),d=n(25),m=n(99),g=n(15),j=d.d.SystemProgram,v=(d.d.Keypair,Object.values(m._keypair.secretKey)),h=new Uint8Array(v),x=d.d.Keypair.fromSecretKey(h),y=new b.PublicKey(p.metadata.address),w=Object(b.clusterApiUrl)("devnet"),O="processed",k="_buildspace",S="https://twitter.com/".concat(k),K=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),u=s[0],m=s[1],v=Object(c.useState)([]),h=Object(i.a)(v,2),K=h[0],N=h[1],A=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==u.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return m(""),console.log("Gif link:",u),e.prev=5,t=C(),n=new d.a(p,y,t),e.next=10,n.rpc.addGif(u,{accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",u),e.next=13,F();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.target.value;m(t)},C=function(){var e=new b.Connection(w,O);return new d.b(e,window.solana,O)},E=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C(),n=new d.a(p,y,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey,systemProgram:j.programId},signers:[x]});case 6:return console.log("Created a new BaseAccount w/ address:",x.publicKey.toString()),e.next=9,F();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var F=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C(),n=new d.a(p,y,t),e.next=5,n.account.baseAccount.fetch(x.publicKey);case 5:c=e.sent,console.log("Got the account",c),N(c.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),N(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),F())}),[n]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsx)("p",{className:"header",children:"\ud83d\uddbc GIF Portal on Solana "}),Object(g.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"}),!n&&Object(g.jsx)("button",{className:"cta-button connect-wallet-button",onClick:G,children:"Connect to Wallet"}),n&&(null===K?Object(g.jsx)("div",{className:"connected-container",children:Object(g.jsx)("button",{className:"cta-button submit-gif-button",onClick:E,children:"Do One-Time Initialization For GIF Program Account"})}):Object(g.jsxs)("div",{className:"connected-container",children:[Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I()},children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:u,onChange:P}),Object(g.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(g.jsx)("div",{className:"gif-grid",children:K.map((function(e,t){return Object(g.jsx)("div",{className:"gif-item",children:Object(g.jsx)("img",{src:e.gifLink})},t)}))})]}))]}),Object(g.jsxs)("div",{className:"footer-container",children:[Object(g.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:f}),Object(g.jsx)("a",{className:"footer-text",href:S,target:"_blank",rel:"noreferrer",children:"built on @".concat(k)})]})]})})};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(K,{})}),document.getElementById("root"))},53:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"8XJR8CQbY1ZmpYTFSPtmeoNJwfVCgT415feykfwj3AbG"}}')},99:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":60,"1":66,"2":158,"3":76,"4":208,"5":207,"6":72,"7":195,"8":75,"9":170,"10":58,"11":235,"12":130,"13":25,"14":58,"15":24,"16":15,"17":93,"18":111,"19":98,"20":52,"21":31,"22":6,"23":18,"24":65,"25":213,"26":5,"27":31,"28":141,"29":25,"30":103,"31":143},"secretKey":{"0":145,"1":198,"2":155,"3":151,"4":38,"5":69,"6":224,"7":185,"8":38,"9":247,"10":89,"11":44,"12":189,"13":189,"14":167,"15":1,"16":74,"17":67,"18":115,"19":127,"20":158,"21":16,"22":242,"23":144,"24":187,"25":132,"26":39,"27":222,"28":251,"29":73,"30":219,"31":104,"32":60,"33":66,"34":158,"35":76,"36":208,"37":207,"38":72,"39":195,"40":75,"41":170,"42":58,"43":235,"44":130,"45":25,"46":58,"47":24,"48":15,"49":93,"50":111,"51":98,"52":52,"53":31,"54":6,"55":18,"56":65,"57":213,"58":5,"59":31,"60":141,"61":25,"62":103,"63":143}}}')}},[[158,1,2]]]);
//# sourceMappingURL=main.af08e654.chunk.js.map