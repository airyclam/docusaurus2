(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(235)),l={title:"Settings files"},o={unversionedId:"developers/design/config/settings",id:"developers/design/config/settings",isDocsHomePage:!1,title:"Settings files",description:"Meteor supports the use of a settings file to store configuration setting. Meteor Chef provides a nice tutorial called Making use of settings.json. If you are not familiar with settings files, this is a good place to start.",source:"@site/docs/developers/design/config/settings.md",slug:"/developers/design/config/settings",permalink:"/docs/developers/design/config/settings",version:"current",sidebar:"someSidebar",previous:{title:"Overview of the config/ directory",permalink:"/docs/developers/design/config/overview"},next:{title:"Overview of scripts/",permalink:"/docs/developers/design/scripts/overview"}},s=[{value:"Settings file structure",id:"settings-file-structure",children:[{value:"Public fields",id:"public-fields",children:[]},{value:"Server-only fields",id:"server-only-fields",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Meteor supports the use of a settings file to store configuration setting. Meteor Chef provides a nice tutorial called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.meteor.com/the-meteor-chef-making-use-of-settings-json-3ed5be2d0bad"}),"Making use of settings.json"),". If you are not familiar with settings files, this is a good place to start."),Object(i.b)("p",null,"In RadGrad, the settings file is used to specify the data to be used to initialize the database (if the database is currently empty), certain RadGrad parameters (such as the point values for levels), and external service parameters and keys (such as for CAS, Cloudinary, MailGun, and Monti APM)."),Object(i.b)("p",null,"RadGrad supports separate settings files for development and deployment.  For development, the settings file in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json"}),"config/settings.development.json")," is loaded when running the script ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json#L6"}),"meteor npm run start"),"."),Object(i.b)("p",null,'Sometimes, individual developers may wish to create their own settings.development.json files to facilitate their current development tasks. To support this, developers can create a (git ignored) top-level directory called "custom" and put their own modified version of settings.development.json inside it.  Then, ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json#L6"}),"meteor npm run start-custom")," will invoke RadGrad with that settings file. Since the directory is git-ignored, no other developers will see this custom settings.development.json file, and so multiple developers can use that same start-custom command to get their own customized run-time configuration of RadGrad."),Object(i.b)("p",null,"The settings file used for production is called settings.js, and is located in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/tree/master/app/.deploy"}),"app/.deploy"),".  The settings.js file used for production will contain credentials for external services, and so is git-ignored.  Contact Philip if you need to deploy to production so he can provide you with credential values."),Object(i.b)("h2",{id:"settings-file-structure"},"Settings file structure"),Object(i.b)("p",null,'In Meteor, all fields in the settings file are available on the server only, unless the field is a subfield of a top-level field called "public", in which case it is available on both the server and the client.  Here is a summary of the supported fields in RadGrad settings files.'),Object(i.b)("h3",{id:"public-fields"},"Public fields"),Object(i.b)("p",null,"The following table lists the public fields, which provides values that are available to the server and to the client:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Public Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cas"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Client-side CAS settings for login")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cloudinary"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Credentials for Cloudinary image service")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"admin"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Admin email address and how credentials are specified")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"level"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Level criteria. ",Object(i.b)("br",null)," ",Object(i.b)("em",{parentName:"td"},"Why is this public?"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RadGrad"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Various RadGrad settings. ",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},'Why are these public? Why have a "RadGrad" subsection?'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"databaseRestoreFileName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"File used to initialize empty database. ",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Why is this public?"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"appLogging"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Is this still needed? Why is this public?"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fixUserInteractions"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Is this still needed? Why is this public?"))))),Object(i.b)("h3",{id:"server-only-fields"},"Server-only fields"),Object(i.b)("p",null,"The following table lists the non-public fields, which are values available only to the server:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Server-only Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cas"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Server-side CAS configuration information. ",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Does this ever differ from public field values? If not, can we get rid of it?"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Environment variables, including MAIL_URL.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"monti"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Credentials for sending run-time data to Monti APM")))))}b.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);