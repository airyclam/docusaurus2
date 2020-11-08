(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(195)),i={title:"Install RadGrad"},d={unversionedId:"developers/getting-started/howto/install-radgrad",id:"developers/getting-started/howto/install-radgrad",isDocsHomePage:!1,title:"Install RadGrad",description:"First, download and install Meteor.",source:"@site/docs/developers/getting-started/howto/install-radgrad.md",slug:"/developers/getting-started/howto/install-radgrad",permalink:"/docs/developers/getting-started/howto/install-radgrad",version:"current",sidebar:"someSidebar",previous:{title:"Setup the IDE",permalink:"/docs/developers/getting-started/howto/setup-the-ide"},next:{title:"Run NPM scripts",permalink:"/docs/developers/getting-started/howto/run-scripts"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First, download and install ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.meteor.com/"}),"Meteor"),". "),Object(o.b)("p",null,"Second, download the RadGrad source code from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2"}),"https://github.com/radgrad/radgrad2"),"."),Object(o.b)("p",null,"Next, cd to the ",Object(o.b)("inlineCode",{parentName:"p"},"radgrad2/app/")," directory and invoke ",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm install"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"radgrad2/app $ meteor npm install\n")),Object(o.b)("p",null,"This will download and install the third-party libraries required to run this system. If you are not in the ",Object(o.b)("inlineCode",{parentName:"p"},"app")," directory and you run ",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm install"),". You will see something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"radgrad2 $ meteor npm install\nnpm WARN saveError ENOENT: no such file or directory, open 'radgrad2\\package.json'\nnpm WARN enoent ENOENT: no such file or directory, open 'radgrad2\\package.json'\nnpm WARN radgrad2 No description\nnpm WARN radgrad2 No repository field.\nnpm WARN radgrad2 No README data\nnpm WARN radgrad2 No license field.\n\nup to date in 0.426s\nfound 0 vulnerabilities\n\nradgrad2 $\n")),Object(o.b)("p",null,"To make sure the database starts from an empty state, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"radgrad2/app$ meteor reset\nProject reset.\nradgrad2/app $\n")),Object(o.b)("p",null,"To run the system, invoke this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'radgrad2/app$ meteor npm run start\n\n> radgrad2@ start radgrad2/app\n> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3200\n\n[[[[[ radgrad2/app ]]]]]\n\n=> Started proxy.\n=> Started MongoDB.\nI20200611-08:48:54.054(-10)? Defining admin radgrad@hawaii.edu with password foo\nI20200611-08:48:54.136(-10)? Loading database from file database/snapshot/2020-01-24-11-37-22.json, dumped 5 months ago.\nI20200611-08:48:54.137(-10)? Defining 29 AcademicTermCollection documents.\nI20200611-08:48:54.641(-10)? Have 29 documents.\n[snip]\nI20200611-08:49:19.985(-10)? Defining 0 FavoriteOpportunityCollection documents.\nI20200611-08:49:19.986(-10)? Have 0 documents.\nI20200611-08:49:19.986(-10)? Finished loading database.\nI20200611-08:49:25.023(-10) (packages\\percolate_synced-cron.js:87) SyncedCron: Scheduled "Create/update Ice Snapshot for each student" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)\nI20200611-08:49:25.025(-10) (packages\\percolate_synced-cron.js:87) SyncedCron: Scheduled "Run the PublicStats.generateStats method" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)\nI20200611-08:49:25.025(-10) (packages\\percolate_synced-cron.js:87) SyncedCron: Scheduled "Run StudentParticipations.upsertEnrollmentData" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)\n=> Started your app.\n\n=> App running at: http://localhost:3200/\n   Type Control-C twice to stop.\n\n')),Object(o.b)("p",null,'This will invoke the "start" script in ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json"}),"package.json"),", which initializes the database (if empty) with sample data.  Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3200"}),"http://localhost:3200")," to confirm that the system is running:"),Object(o.b)("img",{src:"/img/radgrad2/developer/home-page.png",width:"100%"}))}s.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=r,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return n?a.a.createElement(b,d(d({ref:t},p),{},{components:n})):a.a.createElement(b,d({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);