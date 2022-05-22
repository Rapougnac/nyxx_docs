"use strict";(self.webpackChunknyxx_docs=self.webpackChunknyxx_docs||[]).push([[647],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2011:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var o=n(2182),a=n(9028),s=(n(9496),n(9613)),i=["components"],r={title:"Message components",author:"HarryET",timestamp:new Date("2021-09-22T00:00:00.000Z"),category:"guides",sidebar_position:5},l=void 0,c={unversionedId:"guides/components",id:"guides/components",title:"Message components",description:"Message components allow for interactivity between a message sent by a bot and the user receiving it. You can add buttons, links, select menus & multiselects.",source:"@site/docs/guides/components.md",sourceDirName:"guides",slug:"/guides/components",permalink:"/nyxx_docs/docs/guides/components",editUrl:"https://github.com/Rapougnac/nyxx_docs/tree/docusaurus/docs/guides/components.md",tags:[],version:"current",lastUpdatedBy:"Rapougnac",lastUpdatedAt:1652773645,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:5,frontMatter:{title:"Message components",author:"HarryET",timestamp:"2021-09-22T00:00:00.000Z",category:"guides",sidebar_position:5},sidebar:"guideSidebar",previous:{title:"Intents",permalink:"/nyxx_docs/docs/guides/intents"},next:{title:"Creating a bot account",permalink:"/nyxx_docs/docs/guides/creating_a_bot_account"}},d={},u=[{value:"Interactions extension",id:"interactions-extension",level:2},{value:"Components (buttons and select menus)",id:"components-buttons-and-select-menus",level:3},{value:"Adding components to message",id:"adding-components-to-message",level:3},{value:"Listening to component events",id:"listening-to-component-events",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Message components allow for interactivity between a message sent by a bot and the user receiving it. You can add buttons, links, select menus & multiselects."),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"interactions-extension"},"Interactions extension"),(0,s.kt)("p",null,"Before you use message components you have to instantiate new instance of the ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteraction-class.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions"))," class, which is an extension for nyxx that provides slash command and message components functionality:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'final bot = NyxxFactory.createNyxxWebsocket("<TOKEN>", GatewayIntents.allUnprivileged);\nfinal interactions = IInteractions.create(WebsocketInteractionBackend(bot));\n')),(0,s.kt)("br",null),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteraction-class.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions"))," class contains all the methods and utils needed to send and manage messages with components."),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"components-buttons-and-select-menus"},"Components (buttons and select menus)"),(0,s.kt)("p",null,"Components (buttons and select menus at the moment) can be created on any message but button events can be listened only from the ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteraction-class.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions"))," object."),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"adding-components-to-message"},"Adding components to message"),(0,s.kt)("p",null,"Components can be created using the ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ComponentMessageBuilder-class.html"},(0,s.kt)("inlineCode",{parentName:"a"},"ComponentMessageBuilder"))," class from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx_interactions"},(0,s.kt)("inlineCode",{parentName:"a"},"nyxx_interactions"))," package. It extends the basic\n",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx/latest/nyxx/MessageBuilder-class.html"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))," from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx"},(0,s.kt)("inlineCode",{parentName:"a"},"nyxx"))," package with an additional ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ComponentRowBuilder/addComponent.html"},(0,s.kt)("inlineCode",{parentName:"a"},"addComponent"))," method which allows adding component rows and\ncomponents to a message."),(0,s.kt)("p",null,"The following example shows how to create a message with buttons and select menus. These can be sent with any message\nsent by the bot, including webhooks (provided the bot application also owns the webhook):"),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'final singleCommand = SlashCommandBuilder("help", "This is example help command", [])\n  ..registerHandler((event) async {\n    // All "magic" happens via ComponentMessageBuilder class that extends MessageBuilder\n    // from main nyxx package. This new builder allows to create message with components.\n    final componentMessageBuilder = ComponentMessageBuilder();\n\n    // There are two types of button - regular ones that can be responded to an interaction\n    // and url button that only redirects to specified url.\n    // Here we are focusing on regular button that we can respond to.\n    // Label is what user will see on button, customId is id that we ca use later to\n    // catch button event and respond to, and style is what kind of button we want create.\n    final componentRow = ComponentRowBuilder()\n      ..addComponent(ButtonBuilder("This is button label", "thisisid", ButtonStyle.success))\n      ..addComponent(ButtonBuilder("This is another button", "thisisid2", ButtonStyle.success))\n      ..addComponent(ButtonBuilder("This is a disabled button", "thisisid3", ButtonStyle.danger)\n        ..disabled = true,\n    );\n\n    // Then component row can be added to message builder and sent to user.\n    // You MUST add content to the MessageBuilder class, otherwise, Discord will throw an error.\n    componentMessageBuilder.addComponentRow(componentRow..content = \'Hey, I got buttons!\');\n    await event.respond(componentMessageBuilder);\n  });\n')),(0,s.kt)("br",null),"Of course, you can do this with a select menu.",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'final singleCommand = SlashCommandBuilder("help", "This is example help command", [])\n  ..registerHandler((event) async {\n    // All "magic" happens via ComponentMessageBuilder class that extends MessageBuilder\n    // from main nyxx package. This new builder allows to create message with components.\n    final componentMessageBuilder = ComponentMessageBuilder();\n\n    // Adding selects is as easy as adding buttons. Use MultiselectBuilder with custom id\n    // and list of multiselect options.\n    final componentRow = ComponentRowBuilder()\n      ..addComponent(MultiselectBuilder("customId", [\n        MultiselectOptionBuilder("example option 1", "option1"),\n        MultiselectOptionBuilder("example option 2", "option2"),\n        MultiselectOptionBuilder("example option 3", "option3"),\n      ]));\n    // Then component row can be added to message builder and sent to user.\n    // You MUST add content to the MessageBuilder class, otherwise, Discord will throw an error.\n    componentMessageBuilder.addComponentRow(componentRow..content = \'Hey, I got a select menu!\');\n    await event.respond(componentMessageBuilder);\n')),(0,s.kt)("br",null),"Or add a custom placeholder:",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'final componentRow = ComponentRowBuilder()\n      ..addComponent(MultiselectBuilder("customId", [\n        MultiselectOptionBuilder("example option 1", "option1"),\n        MultiselectOptionBuilder("example option 2", "option2"),\n        MultiselectOptionBuilder("example option 3", "option3"),\n      ])\n      // Use the setter `placeholder` to set a custom placeholder\n      //highlight-next-line\n      ..placeholder = "A custom placeholder",\n  );\n\ncomponentMessageBuilder.addComponentRow(componentRow..content = \'Hey, I got a select menu!\');\nawait event.respond(componentMessageBuilder);\n')),(0,s.kt)("br",null),"You can even disable the select menu:",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'final componentRow = ComponentRowBuilder()\n      ..addComponent(MultiselectBuilder("customId", [\n        MultiselectOptionBuilder("example option 1", "option1"),\n        MultiselectOptionBuilder("example option 2", "option2"),\n        MultiselectOptionBuilder("example option 3", "option3"),\n      ])\n      // Use the setter `disabled` to disable the select menu\n      //highlight-next-line\n      ..disabled = true,\n  );\n\ncomponentMessageBuilder.addComponentRow(componentRow..content = \'Hey, I got a select menu!\');\nawait event.respond(componentMessageBuilder);\n')),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"listening-to-component-events"},"Listening to component events"),(0,s.kt)("p",null,"If your custom id doesn't hold specific data, you can use ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractions/registerButtonHandler.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions.registerButtonHandler"))," or ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractions/registerMultiselectHandler.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions.registerMultiselectHandler")),"\nto listen for specific events. If your custom id for the component holds, for example, state data you can listen to\n",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IEventController/onMultiselectEvent.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions.events.onMultiselectEvent"))," or ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IEventController/onButtonEvent.html"},(0,s.kt)("inlineCode",{parentName:"a"},"IInteractions.events.onButtonEvent"))," events and then handle the interaction yourself."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},'// To handle button interaction you need need function that accepts\n// ButtonInteractionEvent as parameter. Since button event is interaction like\n// slash command it needs to acknowledged and/or responded.\n// If you know that command handler would take more that 3 second to complete\n// you would need to acknowledge and then respond later with proper result.\nFuture<void> buttonHandler(ButtonInteractionEvent event) async {\n  await event.acknowledge(); // ack the interaction so we can send response later\n\n  // Send followup to button click with id of button\n  await event.sendFollowup(MessageBuilder.content(\n      "Button pressed with id: ${event.interaction.customId}")\n  );\n}\n\n// Handling multiselect events is no different from handling button.\n// Only thing that changes is type of function argument -- it now passes information\n// about values selected with multiselect\nFuture<void> multiselectHandlerHandler(MultiselectInteractionEvent event) async {\n  await event.acknowledge(); // ack the interaction so we can send response later\n\n  // Send followup to button click with id of button\n  await event.sendFollowup(MessageBuilder.content(\n      "Options chosen with values: ${event.interaction.values}")\n  );\n}\n\nvoid main() {\n  final bot = NyxxFactory.createNyxxWebsocket("<TOKEN>", GatewayIntents.allUnprivileged);\n  IInteractions.create(WebsocketInteractionBackend(bot))\n    ..registerSlashCommand(singleCommand) // Register created before slash command\n    ..registerButtonHandler("thisisid", buttonHandler) // register handler for button with id: thisisid\n    ..registerMultiselectHandler("customId", multiselectHandlerHandler) // register handler for multiselect with id: customId\n    ..syncOnReady(); // This is needed if you want to sync commands on bot startup.\n}\n')))}m.isMDXComponent=!0}}]);