(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(6),o=(r(0),r(195)),i={title:"DevOps Evaluation",sidebar_label:"Evaluation"},l={unversionedId:"archive/devops/evaluation",id:"archive/devops/evaluation",isDocsHomePage:!1,title:"DevOps Evaluation",description:"The goals of the DevOps project are to: (1) explore how RadGrad can be hosted on different deployment platforms, and (2)  determine how to evaluate and improve the performance of RadGrad.",source:"@site/docs/archive/devops/evaluation.md",slug:"/archive/devops/evaluation",permalink:"/docs/archive/devops/evaluation",version:"current",sidebar_label:"Evaluation",sidebar:"someSidebar",previous:{title:"DevOps Resources",permalink:"/docs/archive/devops/resources"},next:{title:"Heroku",permalink:"/docs/archive/devops/deployment/heroku"}},s=[{value:"Deployment Platform Evaluation",id:"deployment-platform-evaluation",children:[]}],p={rightToc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goals of the DevOps project are to: (1) explore how RadGrad can be hosted on different deployment platforms, and (2)  determine how to evaluate and improve the performance of RadGrad."),Object(o.b)("h2",{id:"deployment-platform-evaluation"},"Deployment Platform Evaluation"),Object(o.b)("p",null,"Over the course of the summer, we have identified eight potential hosting platforms and technologies for RadGrad: AWS, Digital Ocean, Google Cloud, Heroku, Microsoft Azure, Node Chef, Waves Hosting, and UH ITS."),Object(o.b)("p",null,"Evaluating deployment platforms involves answering the following questions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Can we succeed in deploying RadGrad to that platform? Success, in this case, means that one developer has deployed RadGrad, provided documentation on how to do so, and a second developer has verified deployment by following (and potentially improving) the documentation.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"What are the costs associated with the platform for hosting?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"What kinds of performance and deployment monitoring tools are offered as part of the platform?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"What is the relative responsiveness of the hosting site? To determine this, use a performance tool such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jmeter.apache.org/"}),"Apache JMeter")," to make (say) 1000 requests for the listing page of the deployed sample application (retrieve this page in order to require a database access), and determine average response time.  This does not provide any absolute performance information about RadGrad, but instead enables us to evaluate the relative performance of the different hosting alternatives.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Are there any other issues associated with the deployment site that future developers should be aware of?"))),Object(o.b)("h1",{id:"performance-evaluation-and-improvement"},"Performance Evaluation and Improvement"),Object(o.b)("p",null,"To perform performance evaluation and improvement, we must deploy RadGrad with a production-sized database, generate a set of requests that assess its performance on a variety of pages and under a variety of circumstances, instrument the system, run the tests, and then analyze the results to determine how the code base must be changed in order to improve performance."),Object(o.b)("p",null,"Some initial performance evaluation and improvement should be possible independent of the hosting platform, but after identifying and removing the initial set of bottlenecks, further improvements will probably depend upon the specific hosting platform chosen."))}c.isMDXComponent=!0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.a.createElement(f,l(l({ref:t},p),{},{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);