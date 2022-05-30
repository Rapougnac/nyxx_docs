"use strict";(self.webpackChunknyxx_docs=self.webpackChunknyxx_docs||[]).push([[600],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,f=d["".concat(c,".").concat(y)]||d[y]||l[y]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(2182),o=n(9028),i=(n(9496),n(9613)),a=["components"],s={title:"Intents",author:"L7ssha",timestamp:new Date("2021-09-21T00:00:00.000Z"),category:"guides",sidebar_position:4},c=void 0,u={unversionedId:"guides/intents",id:"guides/intents",title:"Intents",description:"Gateway intents were introduced so bot developers could choose which events they want to receive. If you don't want",source:"@site/docs/guides/intents.md",sourceDirName:"guides",slug:"/guides/intents",permalink:"/nyxx_docs/docs/guides/intents",editUrl:"https://github.com/Rapougnac/nyxx_docs/tree/docusaurus/docs/guides/intents.md",tags:[],version:"current",lastUpdatedBy:"Rapougnac",lastUpdatedAt:1653221289,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:4,frontMatter:{title:"Intents",author:"L7ssha",timestamp:"2021-09-21T00:00:00.000Z",category:"guides",sidebar_position:4},sidebar:"guideSidebar",previous:{title:"Migration to nyxx_* 3.x",permalink:"/nyxx_docs/docs/guides/migration"},next:{title:"Message components",permalink:"/nyxx_docs/docs/guides/components"}},p={},l=[{value:"Specifying intents",id:"specifying-intents",level:3},{value:"More on bit fields",id:"more-on-bit-fields",level:3}],d={toc:l};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gateway intents were introduced so bot developers could choose which events they want to receive. If you don't want\nto receive certain events you can just omit its intent and they won't be sent to your bot."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More on intents: ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#gateway-intents"},"https://discord.com/developers/docs/topics/gateway#gateway-intents"))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"specifying-intents"},"Specifying intents"),(0,i.kt)("p",null,"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx"},(0,i.kt)("inlineCode",{parentName:"a"},"nyxx"))," 2.x passing intents is required in nyxx constructor. You can pass the int value or you can pass constant values from ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx/latest/nyxx/GatewayIntents-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"GatewayIntents"))," class combined with a binary OR (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),"):"),(0,i.kt)("br",null),(0,i.kt)("p",null,"For example, the following code would only recieve guild message or private message events,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'final bot = NyxxFactory.createNyxxWebsocket("TOKEN", GatewayIntents.guildMessages | GatewayIntents.directMessages);\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"more-on-bit-fields"},"More on bit fields"),(0,i.kt)("p",null,"Discord Intents and Permissions are stored in integers and calculated using bitwise operations.\nIf you want to dive deeper into what's happening behind the curtains, check the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bit_field"},"Wikipedia page"),"."))}y.isMDXComponent=!0}}]);