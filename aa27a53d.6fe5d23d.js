(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),o=(n(0),n(195)),a={title:"Design Anti-Patterns"},c={unversionedId:"developers/design/concepts/design-antipatterns",id:"developers/design/concepts/design-antipatterns",isDocsHomePage:!1,title:"Design Anti-Patterns",description:"Circular imports",source:"@site/docs/developers/design/concepts/design-antipatterns.md",slug:"/developers/design/concepts/design-antipatterns",permalink:"/docs/developers/design/concepts/design-antipatterns",version:"current",sidebar:"someSidebar",previous:{title:"Design Patterns",permalink:"/docs/developers/design/concepts/design-patterns"},next:{title:"Entity-Relationship Model",permalink:"/docs/developers/design/concepts/entity-relationship-model"}},s=[{value:"Circular imports",id:"circular-imports",children:[]},{value:"Use of Strings to identify things",id:"use-of-strings-to-identify-things",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"circular-imports"},"Circular imports"),Object(o.b)("p",null,"Currently, we have many circular imports in RadGrad2."),Object(o.b)("h2",{id:"use-of-strings-to-identify-things"},"Use of Strings to identify things"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Publication and Subscription"),Object(o.b)("li",{parentName:"ul"},"User Interactions")))}l.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);