(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{235:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return v}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=t,v=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?o.a.createElement(v,a(a({ref:r},l),{},{components:n})):o.a.createElement(v,a({ref:r},l))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(2),o=n(6),i=(n(0),n(235)),c={title:"Overview of the config/ directory",sidebar_label:"Overview"},a={unversionedId:"developers/design/config/overview",id:"developers/design/config/overview",isDocsHomePage:!1,title:"Overview of the config/ directory",description:"When downloaded, the config/ directory contains a single file called settings.development.json.",source:"@site/docs/developers/design/config/overview.md",slug:"/developers/design/config/overview",permalink:"/docs/developers/design/config/overview",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Overview of ui/",permalink:"/docs/developers/design/app/imports/ui/overview"},next:{title:"Settings files",permalink:"/docs/developers/design/config/settings"}},s=[],l={rightToc:s};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When downloaded, the config/ directory contains a single file called settings.development.json."),Object(i.b)("img",{src:"/img/design/radgrad2/config.png"}),Object(i.b)("p",null,"However, developers may create additional files in this directory that are .gitignored in order to deploy radgrad with production credentials."),Object(i.b)("p",null,"The next section discusses settings files in Meteor and RadGrad2."))}d.isMDXComponent=!0}}]);