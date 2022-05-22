"use strict";(self.webpackChunknyxx_docs=self.webpackChunknyxx_docs||[]).push([[895],{9613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return h}});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,u=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return t?a.createElement(u,s(s({ref:n},m),{},{components:t})):a.createElement(u,s({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},337:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=t(2182),o=t(9028),i=(t(9496),t(9613)),s=["components"],r={title:"Slash commands",author:"l7ssha",timestamp:new Date("2021-09-21T00:00:00.000Z"),category:"guides",sidebar_position:7},d=void 0,l={unversionedId:"guides/slash_commands",id:"guides/slash_commands",title:"Slash commands",description:"While [nyxxinteractions] was the original way to create slash commands, it can be very easily replaced by [nyxxcommands] which itself depends on nyxx_interactions but provides a way to create both text-and-slash commands.",source:"@site/docs/guides/slash_commands.md",sourceDirName:"guides",slug:"/guides/slash_commands",permalink:"/docs/guides/slash_commands",editUrl:"https://github.com/Rapougnac/nyxx_docs/tree/docusaurus/docs/guides/slash_commands.md",tags:[],version:"current",lastUpdatedBy:"Rapougnac",lastUpdatedAt:1652773645,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:7,frontMatter:{title:"Slash commands",author:"l7ssha",timestamp:"2021-09-21T00:00:00.000Z",category:"guides",sidebar_position:7},sidebar:"guideSidebar",previous:{title:"Creating a bot account",permalink:"/docs/guides/creating_a_bot_account"},next:{title:"Command handling",permalink:"/docs/guides/command_handling"}},m={},c=[{value:"Interactions extension",id:"interactions-extension",level:2},{value:"Registering commands",id:"registering-commands",level:2},{value:"Subcommands",id:"subcommands",level:4},{value:"Syncing commands",id:"syncing-commands",level:3},{value:"Sync types inside nyxx",id:"sync-types-inside-nyxx",level:4},{value:"Responding to commands",id:"responding-to-commands",level:3},{value:"Ephemeral responses",id:"ephemeral-responses",level:4}],p={toc:c};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx_interactions"},(0,i.kt)("inlineCode",{parentName:"a"},"nyxx_interactions"))," was the original way to create slash commands, it can be very easily replaced by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx_commands"},(0,i.kt)("inlineCode",{parentName:"a"},"nyxx_commands"))," which itself depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"nyxx_interactions")," but provides a way to create both text-and-slash commands."),(0,i.kt)("p",{parentName:"div"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"nyxx_interactions")," if:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"You don't want to be limited from ",(0,i.kt)("inlineCode",{parentName:"li"},"nyxx_commands"),";"),(0,i.kt)("li",{parentName:"ul"},"You want to go beyond for the possibilities of base slash commands.")),(0,i.kt)("p",{parentName:"div"},"Don't use it if:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"You want create simple (and complicated too) slash commands;"),(0,i.kt)("li",{parentName:"ul"},"You want new features from ",(0,i.kt)("inlineCode",{parentName:"li"},"nyxx_interactions"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There are fastly implemented in ",(0,i.kt)("inlineCode",{parentName:"li"},"nyxx_commands"),".")))),(0,i.kt)("p",{parentName:"div"},"Look ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/command_handling"},"here")," for more informations."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Slash commands are a new way of interacting with bots via chat using commands registered on the Discord API.\nSuch commands provide visual feedback in the UI and are more tied to the platform than classic text based commands."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"interactions-extension"},"Interactions extension"),(0,i.kt)("p",null,"Before registering any commands you have to instantiate new instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteraction-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IInteractions"))," class, which is an extension for\nnyxx that provides slash command and message components functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'final bot = NyxxFactory.createNyxxWebsocket("<TOKEN>", GatewayIntents.allUnprivileged);\nfinal interactions = IInteractions.create(WebsocketInteractionBackend(bot));\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteraction-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IInteractions"))," class contains all the methods and utils needed to register and handle slash commands."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"registering-commands"},"Registering commands"),(0,i.kt)("p",null,"Nyxx provides an easy to use interface for registering commands to the Discord API and internal handlers to provide functionality to a command. Commands can be registered on the API and added internally so that the bot can respond to them via websocket."),(0,i.kt)("br",null),(0,i.kt)("p",null,"To register an command use the ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractions/registerSlashCommand.html"},(0,i.kt)("inlineCode",{parentName:"a"},"registerSlashCommand"))," method which takes instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/SlashCommandBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SlashCommandBuilder"))," class.\n",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/SlashCommandBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SlashCommandBuilder"))," provides all the information needed for the framework and API about how to handle a given slash command."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/SlashCommandBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SlashCommandBuilder"))," allows you to build commands with the following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"/// Command name to be shown to the user in the Slash Command UI\nfinal String name;\n\n/// Command description shown to the user in the Slash Command UI\nfinal String? description;\n\n/// If people can use the command by default or if they need permissions to use it.\nfinal bool defaultPermissions;\n\n/// The guild that the slash Command is registered in. This can be null if its a global command.\nSnowflake? guild;\n\n/// The arguments that the command takes\nList<CommandOptionBuilder> options;\n\n/// Permission overrides for the command\nList<ICommandPermissionBuilder>? permissions;\n\n/// Target of slash command if different that SlashCommandTarget.chat - slash command will\n/// become context menu in appropriate context\nSlashCommandType type;\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"This example registers a ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," command that responds with ",(0,i.kt)("inlineCode",{parentName:"p"},'"pong"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'// Creates instance of slash command builder with name, description and sub options.\n// Its used to synchronise commands with discord and also to be able to respond to them.\n// SlashCommandBuilder allows to register handler for slash command that you will be able\n// to respond to command event.\nfinal singleCommand = SlashCommandBuilder("ping", "Simple command that responds with `pong`", [])\n  ..registerHandler((event) async {\n    // Handler accepts a function with parameter of SlashCommandInteraction which contains\n    // all of the stuff needed to respond to interaction.\n    // From there you have two routes: ack and then respond later or respond immediately without ack.\n    // Sending ack will display indicator that bot is thinking and from there you will have 15 mins to respond to\n    // that interaction.\n    await event.respond(MessageBuilder.content("Pong!"));\n  });\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"We specified the name of the command as ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," and provided a short description so that the user would now what the command does. We also invoked the ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder/registerHandler.html"},(0,i.kt)("inlineCode",{parentName:"a"},"registerHandler"))," method that registers an internal callback so that the command could be responded to by the bot. In that case we only respond with a ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx/latest/nyxx/MessageBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))," with a content of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pong!"),"."),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"subcommands"},"Subcommands"),(0,i.kt)("p",null,"Subcommands are handled by adding instances of ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CommandOptionBuilder"))," to ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/SlashCommandBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SlashCommandBuilder"))," via the ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionType-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"options"))," parameter in the constructor. In the Discord API, subcommands are just options in a base command and are handled in the same way."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CommandOptionBuilder"))," has a ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder/registerHandler.html"},(0,i.kt)("inlineCode",{parentName:"a"},"registerHandler"))," method which allows you to register callback that will be invoked when client receives an interaction, just like the base slash command."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder/registerHandler.html"},(0,i.kt)("inlineCode",{parentName:"a"},"registerHandler"))," cannot be executed on ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionBuilder-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CommandOptionBuilder"))," that has a type other than ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/CommandOptionType/subCommand-constant.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CommandOptionType.subCommand")),".")),(0,i.kt)("br",null),(0,i.kt)("p",null,"For example, if we want to have a command named ",(0,i.kt)("inlineCode",{parentName:"p"},"game")," and few different games as subcommands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'// If you want your command to have subcommand you don\'t need to register handler\n// for main handler because only sub commands will be invokable.\n// In list for options you can create new instances of sub commands with\n// commands handlers that command could be responded by bot.\nfinal subCommand = SlashCommandBuilder("game", "This is example game command", [\n  subCommandFlipGame\n]);\n\n// Subcommand event handler receives same SlashCommandInteraction parameter with all\n// info and tools need to respond to an interaction\nfinal subCommandFlipGame = CommandOptionBuilder(CommandOptionType.subCommand, "coinflip", "Coin flip game")\n  ..registerHandler((event) async {\n    final result = Random().nextBool() ? "tail" : "heads";\n\n    await event.respond(MessageBuilder.content("You flipped: $result"));\n  });\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"syncing-commands"},"Syncing commands"),(0,i.kt)("p",null,"Registered commands need to be synced with Discord's API. After calling ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractions/syncOnReady.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IInteractions#syncOnReady")),", the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx_interactions"},(0,i.kt)("inlineCode",{parentName:"a"},"nyxx_interactions"))," framework will perform a bulk override of registered command which means that new commands will be added, existing commands will be updated, and commands that are missing will be erased from the API. Global commands have ~1h long caching span, so they will be available after approx. 1 hour and guild commands are available instantly."),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"sync-types-inside-nyxx"},"Sync types inside nyxx"),(0,i.kt)("p",null,"Nyxx provides an interface to customise syncing logic. Classes implementing ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ICommandsSync-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ICommandsSync"))," can be passed to ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractions/syncOnReady.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IInteractions#syncOnReady"))," to customise how syncing behaves. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nyxx-discord/nyxx_interactions"},(0,i.kt)("inlineCode",{parentName:"a"},"nyxx_interactions"))," provides two options by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ManualCommandSync-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ManualCommandSync")),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"false")," switch indicating whether commands should be synced;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/LockFileCommandSync-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"LockFileCommandSync")),": Creates a lock file storing registered commands and only sync if significant changes have been made.")),(0,i.kt)("p",null,"The default is ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ManualCommandSync-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ManualCommandSync"))," and by default commands sync on each bot startup, so if you already registered your commands and you won't make any further changes to their properties you can pass ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/ManualCommandSync-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ManualCommandSync"))," instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and commands won't be synced with Discord to avoid API abuse."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"responding-to-commands"},"Responding to commands"),(0,i.kt)("p",null,"The initial response to a slash command interaction can either be a response or an acknowledgement. The initial response must be sent within 3 seconds or the commands will be marked as failed in the user's UI, but after acknowledging you can respond for up to 15 minutes."),(0,i.kt)("p",null,"So, to properly handle the interaction from a code perspective you have to respond or acknowledge in 3 seconds and then respond in 15 mins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'..registerHandler((event) async {\n  await event.acknowledge(); // After that you have 15 mins to call event.respond\n\n  await event.respond(MessageBuilder.content("Respond"));\n});\n')),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"ephemeral-responses"},"Ephemeral responses"),(0,i.kt)("p",null,"Messages can sent as ephemeral responses which means that the message will only be visible for the user that invoked the command in public chat, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Clyde")," in the Discord client."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractionEventWithAcknowledge/acknowledge.html"},(0,i.kt)("inlineCode",{parentName:"a"},"acknowledge"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/nyxx_interactions/latest/nyxx_interactions/IInteractionEventWithAcknowledge/respond.html"},(0,i.kt)("inlineCode",{parentName:"a"},"respond"))," have an optional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden")," which allows to specify if the response should be ephermal or not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'..registerHandler((event) async {\n  await event.acknowledge(); // After that you have 15 mins to event.respond\n\n  await event.respond(MessageBuilder.content("Respond"), hidden: true);\n});\n')))}h.isMDXComponent=!0}}]);