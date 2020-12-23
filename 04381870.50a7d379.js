(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{235:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,h=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(235)),i={title:"Engineering Standards",sidebar_label:"Engineering Standards"},s={unversionedId:"archive/radgrad2/concepts/engineering-standards",id:"archive/radgrad2/concepts/engineering-standards",isDocsHomePage:!1,title:"Engineering Standards",description:"During its 30 years of existence, CSDL has worked with many programming languages (Lisp, C++, Python, Rust, Javascript, Typescript, etc), operating systems (Solaris, Windows/NT, Linux, MacOS), hardware platforms (Unix workstations, Windows/NT workstations, Solaris servers, MacOS laptops), and too many libraries and quality assurance tools to list.",source:"@site/docs/archive/radgrad2/concepts/engineering-standards.md",slug:"/archive/radgrad2/concepts/engineering-standards",permalink:"/docs/archive/radgrad2/concepts/engineering-standards",version:"current",sidebar_label:"Engineering Standards"},c=[],l={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"During its 30 years of existence, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://csdl.ics.hawaii.edu"}),"CSDL")," has worked with many programming languages (Lisp, C++, Python, Rust, Javascript, Typescript, etc), operating systems (Solaris, Windows/NT, Linux, MacOS), hardware platforms (Unix workstations, Windows/NT workstations, Solaris servers, MacOS laptops), and too many libraries and quality assurance tools to list."),Object(a.b)("p",null,"One thing that is clear to me from this experience: the velocity of research benefits greatly from engineering standards, in other words, standardized development tools, languages, and procedures. While students often have personal preferences, and sometimes feel like they would be more productive personally with a given tool or process, I find that having everyone use a common set of engineering standards results in greater overall progress for the following reasons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'The learning curve is "flattened".  When a tool or technique is used by just a single person, then any problems or questions have to be addressed by that single person.  When the entire group is using a single tool or technique, then problems or questions are addressed by the group, and this is generally results in a much faster resolution.'),Object(a.b)("li",{parentName:"ul"},"Computational communication is simplified.  When everyone is using common tools and techniques, then it is easier to communicate what you are doing to others. "),Object(a.b)("li",{parentName:"ul"},'One achieves fluency faster.  The final goal for any tool or technique is for it to fade into the background. You no longer think about it much, you focus all your attention on the actual computational problem.  This is "fluency" with the technology. When everyone in the group is using the same tools or techniques, it is easier to obtain fluency because you are able to see how others are using it, and learn more advanced usages from them.')),Object(a.b)("p",null,"With that in mind, here is an initial set of engineering standards for the RadGrad project."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Communication"),". Slack and Zoom. If there is the chance of a question or answer being relevant to more than one person, then please post it to Slack so that everyone can benefit. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IDE."),' IntelliJ IDEA.  For the technologies to be developed in this project, IntelliJ IDEA is as good as any other, and better than most.  Please do not "cheat" and use your personal preference, thinking that "no one is going to know".  Actually, eventually you\'ll be needing to code in Zoom with someone else, and then it will become obvious. If you\'re having problems with IntelliJ, post a question and let\'s see if we can help you.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language.")," Javascript preferred, or Typescript.  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ESLint.")," All code should pass ESLint. "))}u.isMDXComponent=!0}}]);