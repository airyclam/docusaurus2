(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(235)),c={title:"Code Review Checklist",sidebar_label:"Checklist"},l={unversionedId:"developers/checklists/review-checklist",id:"developers/checklists/review-checklist",isDocsHomePage:!1,title:"Code Review Checklist",description:"Some example checklist items for React and Typescript.",source:"@site/docs/developers/checklists/review-checklist.md",slug:"/developers/checklists/review-checklist",permalink:"/docs/developers/checklists/review-checklist",version:"current",sidebar_label:"Checklist"},o=[{value:"Naming",id:"naming",children:[]},{value:"Code",id:"code",children:[]},{value:"ES6",id:"es6",children:[]},{value:"ESLint",id:"eslint",children:[]},{value:"React",id:"react",children:[]},{value:"Maintainability",id:"maintainability",children:[]},{value:"Reusability",id:"reusability",children:[]}],s={rightToc:o};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Some example checklist items for React and Typescript."),Object(a.b)("h3",{id:"naming"},"Naming"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Do filenames have consistent casing and extensions?"),Object(a.b)("li",{parentName:"ul"},"Do variables/functions/modules have consistent casing?"),Object(a.b)("li",{parentName:"ul"},"Do variables/functions/modules have descriptive names?")),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Look for blocks of code  with more than a few lines of code that look similar. Is it possible to refactor to reduce duplication?"),Object(a.b)("li",{parentName:"ul"},"Look for \u201ctoo smart\u201d and over-engineered code. Can it be simplified?"),Object(a.b)("li",{parentName:"ul"},"Are there multiple if/else blocks?  "),Object(a.b)("li",{parentName:"ul"},"Is there unused/unreachable code?"),Object(a.b)("li",{parentName:"ul"},"Is there commented out code?"),Object(a.b)("li",{parentName:"ul"},"Are there unnecessary comments? Comments that describe the ",Object(a.b)("em",{parentName:"li"},"how"),"."),Object(a.b)("li",{parentName:"ul"},"Are there missing comments? Comments that describe the ",Object(a.b)("em",{parentName:"li"},"why"),"."),Object(a.b)("li",{parentName:"ul"},"Can we change the type any to something more specific?")),Object(a.b)("h3",{id:"es6"},"ES6"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Can you use the spread operator?"),Object(a.b)("li",{parentName:"ul"},"Can you use object deconstruction?"),Object(a.b)("li",{parentName:"ul"},"Is there consistent use of arrow functions?"),Object(a.b)("li",{parentName:"ul"},"Is there ES6 use of functions that lodash provides?")),Object(a.b)("h3",{id:"eslint"},"ESLint"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Are there any lint errors?"),Object(a.b)("li",{parentName:"ul"},"Are there console.logs? Are they needed?")),Object(a.b)("h3",{id:"react"},"React"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Are the components small?"),Object(a.b)("li",{parentName:"ul"},"Is the render method small? Minimize logic in the render method."),Object(a.b)("li",{parentName:"ul"},"Are there state updates in loops?")),Object(a.b)("h3",{id:"maintainability"},"Maintainability"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is the code readable? Code should be self-explanatory. Get a feel of story reading, while going through the code."),Object(a.b)("li",{parentName:"ul"},"Is the code easy to test? "),Object(a.b)("li",{parentName:"ul"},"Is the code easy to debug?")),Object(a.b)("h3",{id:"reusability"},"Reusability"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is the code DRY (Do not Repeat Yourself)? The same code should not be repeated more than twice."),Object(a.b)("li",{parentName:"ul"},"Are there reusable services, functions and components?")))}u.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);