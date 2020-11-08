(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(195)),i={title:"Continuous Integration",sidebar_label:"Continuous Integration"},c={unversionedId:"developers/testing/concepts/continuous-integration",id:"developers/testing/concepts/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"ci-badge",source:"@site/docs/developers/testing/concepts/continuous-integration.md",slug:"/developers/testing/concepts/continuous-integration",permalink:"/docs/developers/testing/concepts/continuous-integration",version:"current",sidebar_label:"Continuous Integration",sidebar:"someSidebar",previous:{title:"Database Fixtures",permalink:"/docs/developers/testing/concepts/database-fixtures"},next:{title:"How to write unit tests",permalink:"/docs/developers/testing/howto/write-unit-tests"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/radgrad/radgrad2/workflows/ci-radgrad/badge.svg",alt:"ci-badge"}))),Object(a.b)("p",null,"RadGrad  uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions"}),"GitHub Actions")," to automatically run ESLint, unit tests, integration tests, and acceptance tests each time a commit is made to the master branch."),Object(a.b)("p",null,'You can see the results of all recent "workflows" at ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/actions"}),"https://github.com/radgrad/radgrad2/actions"),"."),Object(a.b)("p",null,"The workflow definition file is quite simple and is located at\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/.github/workflows/ci.yml"}),".github/workflows/ci.yml"),"."))}p.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);