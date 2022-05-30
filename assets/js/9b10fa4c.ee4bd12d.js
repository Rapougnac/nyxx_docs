"use strict";(self.webpackChunknyxx_docs=self.webpackChunknyxx_docs||[]).push([[226],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9589:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=t(2182),a=t(9028),o=(t(9496),t(9613)),r=["components"],l={title:"Migration to nyxx_* 3.x",sidebar_position:3,author:"l7ssha",timestamp:new Date("2021-12-17T00:00:00.000Z"),category:"guides"},s=void 0,d={unversionedId:"guides/migration",id:"guides/migration",title:"Migration to nyxx_* 3.x",description:"3.0.0 includes some big changes which are breaking to most of the code from previous version.",source:"@site/docs/guides/migration.md",sourceDirName:"guides",slug:"/guides/migration",permalink:"/nyxx_docs/docs/guides/migration",editUrl:"https://github.com/Rapougnac/nyxx_docs/tree/docusaurus/docs/guides/migration.md",tags:[],version:"current",lastUpdatedBy:"Rapougnac",lastUpdatedAt:1648733887,formattedLastUpdatedAt:"3/31/2022",sidebarPosition:3,frontMatter:{title:"Migration to nyxx_* 3.x",sidebar_position:3,author:"l7ssha",timestamp:"2021-12-17T00:00:00.000Z",category:"guides"},sidebar:"guideSidebar",previous:{title:"Cache",permalink:"/nyxx_docs/docs/guides/cache"},next:{title:"Intents",permalink:"/nyxx_docs/docs/guides/intents"}},c={},p=[{value:"nyxx",id:"nyxx",level:2},{value:"<code>INyxxFactory</code> and <code>connect</code> in INyxx",id:"inyxxfactory-and-connect-in-inyxx",level:4},{value:"<code>Interface-based entity model</code>",id:"interface-based-entity-model",level:4},{value:"<code>Plugin system</code>",id:"plugin-system",level:4},{value:"Improved cache",id:"improved-cache",level:4},{value:"Using nyxx in REST only mode",id:"using-nyxx-in-rest-only-mode",level:4},{value:"Other changes",id:"other-changes",level:4},{value:"nyxx_interactions",id:"nyxx_interactions",level:2},{value:"IInteractions",id:"iinteractions",level:4},{value:"<code>Interface-based entity model</code>",id:"interface-based-entity-model-1",level:4},{value:"Improved autocomplete handling",id:"improved-autocomplete-handling",level:4},{value:"Other changes",id:"other-changes-1",level:4},{value:"nyxx_commander",id:"nyxx_commander",level:2},{value:"ICommander",id:"icommander",level:4},{value:"<code>Interface-based entity model</code>",id:"interface-based-entity-model-2",level:4},{value:"Other changes",id:"other-changes-2",level:4},{value:"nyxx_extensions",id:"nyxx_extensions",level:2},{value:"nyxx_lavalink",id:"nyxx_lavalink",level:2},{value:"<code>Interface-based entity model</code>",id:"interface-based-entity-model-3",level:4}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"3.0.0")," includes some big changes which are breaking to most of the code from previous version.\nThis guide is going to be broken into parts for each library."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Biggest change for each library are new entities model which incorporates interfaces for each class provided by library.")),(0,o.kt)("p",null,"The biggest change for all libraries is new entities model - concrete implementation and internal logic is hidden behind interfaces\nand only said interfaces are accessible by end user of library. This allows easier extending, mocking and replacing nyxx\nand its components."),(0,o.kt)("h2",{id:"nyxx"},"nyxx"),(0,o.kt)("h4",{id:"inyxxfactory-and-connect-in-inyxx"},(0,o.kt)("inlineCode",{parentName:"h4"},"INyxxFactory")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"connect")," in INyxx"),(0,o.kt)("p",null,"Since this release the only way to spawn a new instance of nyxx is via ",(0,o.kt)("inlineCode",{parentName:"p"},"NyxxFactory"),"'s method ",(0,o.kt)("inlineCode",{parentName:"p"},"createNyxxWebsocket")," which creates\nnew instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"INyxxWebsocket")," which is comparable to old ",(0,o.kt)("inlineCode",{parentName:"p"},"Nyxx"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"createNyxxRest")," method creates a new instance of nyxx that won't\nconnect to websocket and will operate in REST only mode."),(0,o.kt)("p",null,"Another big change in that regard is addition of new method ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," on both ",(0,o.kt)("inlineCode",{parentName:"p"},"INyxxRest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"INyxxWebsocket")," which delegates\nsome logic from constructors of each class to make possible to implement other features."),(0,o.kt)("h4",{id:"interface-based-entity-model"},(0,o.kt)("inlineCode",{parentName:"h4"},"Interface-based entity model")),(0,o.kt)("p",null,"Concrete implementations of classes are now hidden and interfaces are exposed.\nHere, nothing should particularly change but keep in mind that you are now receiving not ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," but ",(0,o.kt)("inlineCode",{parentName:"p"},"IUser")," which represents\nthe user entity, but it's completely transparent on what it can do but hides internal implementation. It allows us to modify underlying\nlogic more easily."),(0,o.kt)("h4",{id:"plugin-system"},(0,o.kt)("inlineCode",{parentName:"h4"},"Plugin system")),(0,o.kt)("p",null,"This version ships with first iteration of plugin system which allows creating small and lightweight addons for library.\nFunctionality which was previously default is now moved to 3 plugins that are provided by default and developer needs to\nspecify what plugin they want to use. Plugins provided by default are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CliIntegration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IgnoreExceptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Logging"))),(0,o.kt)("p",null,"Example usage of plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'final bot = NyxxFactory.createNyxxWebsocket("<TOKEN>", GatewayIntents.allUnprivileged)\n  ..registerPlugin(Logging())\n  ..connect();\n')),(0,o.kt)("p",null,"Now there are 3 hooks that are exposed for developers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"FutureOr<void> onRegister(INyxx nyxx, Logger logger) async {}\nFutureOr<void> onBotStart(INyxx nyxx, Logger logger) async {}\nFutureOr<void> onBotStop(INyxx nyxx, Logger logger) async {}\n")),(0,o.kt)("p",null,"Future version of nyxx will add more hooks and ways of extending the functionality of nyxx."),(0,o.kt)("h4",{id:"improved-cache"},"Improved cache"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SnowflakeCache")," is completely rewritten and now implements ",(0,o.kt)("inlineCode",{parentName:"p"},"MapMixin<Snowflake, T>")," which allows using cache as a normal Map.\nOld ",(0,o.kt)("inlineCode",{parentName:"p"},"SnowflakeCache"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelCache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageCache")," were removed."),(0,o.kt)("h4",{id:"using-nyxx-in-rest-only-mode"},"Using nyxx in REST only mode"),(0,o.kt)("p",null,"It's now possible to use nyxx in REST only mode using ",(0,o.kt)("inlineCode",{parentName:"p"},"INyxxRest")," instance - nyxx won't connect to gateway and only\nREST API calls will be accessible."),(0,o.kt)("h4",{id:"other-changes"},"Other changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for text messages in voice channels. See: ",(0,o.kt)("inlineCode",{parentName:"li"},"ITextVoiceTextChannel")),(0,o.kt)("li",{parentName:"ul"},"Auth header is now only sent when needed. ",(0,o.kt)("inlineCode",{parentName:"li"},"IHttpEndpoints.sendRawRequests")," allows specifying if request should have auth header injected"),(0,o.kt)("li",{parentName:"ul"},"Implemented thread channel edit functionality. See: ",(0,o.kt)("inlineCode",{parentName:"li"},"IThreadChannel.edit")),(0,o.kt)("li",{parentName:"ul"},"Nyxx won't call exit() anymore - that allows using nyxx in flutter without any problems"),(0,o.kt)("li",{parentName:"ul"},"Official support for Dart 2.15.x")),(0,o.kt)("h2",{id:"nyxx_interactions"},"nyxx_interactions"),(0,o.kt)("h4",{id:"iinteractions"},"IInteractions"),(0,o.kt)("p",null,"Similarly to main nyxx library to nyxx_interactions you have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"IInteractions.create")," method because the constructor is hidden from the public API.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function also accepts instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractionBackend")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"INyxx")," instance due to upcoming HTTP interactions support.\nThis allows us to create additional backends for interactions or to alter existing ones for wider compatibility and extensibility."),(0,o.kt)("h4",{id:"interface-based-entity-model-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"Interface-based entity model")),(0,o.kt)("p",null,"Concrete implementations of classes are now hidden and interfaces are exposed.\nHere, nothing should particularly change but keep in mind that you are now receiving not ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," but ",(0,o.kt)("inlineCode",{parentName:"p"},"IUser")," which represents\nthe user entity, but it's completely transparent on what it can do but hides internal implementation. It allows us to modify underlying\nlogic more easily."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"/// Where bot is instance of INyxx\nIInteractions.create(WebsocketInteractionBackend(bot));\n")),(0,o.kt)("p",null,"Currently, only the websocket backend is available (",(0,o.kt)("inlineCode",{parentName:"p"},"WebsocketInteractionBackend"),"). In the future a backend for HTTP interactions will be added."),(0,o.kt)("h4",{id:"improved-autocomplete-handling"},"Improved autocomplete handling"),(0,o.kt)("p",null,"Autocomplete handlers can be now registered on instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandOptionBuilder")," instead globally on IInteractions. This allows registering\nautocomplete handler per command option instead of globally per given option name. In the future we are planning to provide shortcuts for\ncreating autocomplete command options to simplify code."),(0,o.kt)("h4",{id:"other-changes-1"},"Other changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed various bugs with registering commands and their permissions."),(0,o.kt)("li",{parentName:"ul"},"Add ability to remove guild commands from given guild completely. Previously this behavior was not possible.")),(0,o.kt)("h2",{id:"nyxx_commander"},"nyxx_commander"),(0,o.kt)("h4",{id:"icommander"},"ICommander"),(0,o.kt)("p",null,"Similarly to main nyxx library to nyxx_commander you have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommander.create")," method because\nconstructor is hidden from public API."),(0,o.kt)("h4",{id:"interface-based-entity-model-2"},(0,o.kt)("inlineCode",{parentName:"h4"},"Interface-based entity model")),(0,o.kt)("p",null,"Concrete implementations of classes are now hidden and interfaces are exposed.\nHere, nothing should particularly change but keep in mind that you are now receiving not ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," but ",(0,o.kt)("inlineCode",{parentName:"p"},"IUser")," which represents\nthe user entity, but it's completely transparent on what it can do but hides internal implementation. It allows us to modify underlying\nlogic more easily."),(0,o.kt)("h4",{id:"other-changes-2"},"Other changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed bugs with invalid behavior of registering commands")),(0,o.kt)("h2",{id:"nyxx_extensions"},"nyxx_extensions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use minified version of emojis endpoint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filterEmojiDefinitions")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"emoji")," library now returns ",(0,o.kt)("inlineCode",{parentName:"li"},"Stream<EmojiDefinition>")),(0,o.kt)("li",{parentName:"ul"},"Export library for each file (part of ",(0,o.kt)("inlineCode",{parentName:"li"},"Interface-based entity model")," for whole library stack)")),(0,o.kt)("h2",{id:"nyxx_lavalink"},"nyxx_lavalink"),(0,o.kt)("h4",{id:"interface-based-entity-model-3"},(0,o.kt)("inlineCode",{parentName:"h4"},"Interface-based entity model")),(0,o.kt)("p",null,"Concrete implementations of classes are now hidden and interfaces are exposed.\nHere, nothing should particularly change but keep in mind that you are now receiving not ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," but ",(0,o.kt)("inlineCode",{parentName:"p"},"IUser")," which represents\nthe user entity, but it's completely transparent on what it can do but hides internal implementation. It allows us to modify underlying\nlogic more easily."),(0,o.kt)("p",null,"External and internal API hadn't changed since previous version."))}m.isMDXComponent=!0}}]);