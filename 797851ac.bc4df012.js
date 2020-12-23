(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(235)),c={title:"Deploy a release (Docker)"},l={unversionedId:"archive/docker/deploy-a-release",id:"archive/docker/deploy-a-release",isDocsHomePage:!1,title:"Deploy a release (Docker)",description:"A RadGrad release contains two services: RadGrad (the Meteor application), and MongoDB (the backend database system).",source:"@site/docs/archive/docker/deploy-a-release.md",slug:"/archive/docker/deploy-a-release",permalink:"/docs/archive/docker/deploy-a-release",version:"current",sidebar:"someSidebar",previous:{title:"Build and publish a new release of RadGrad",permalink:"/docs/archive/docker/build-a-release"},next:{title:"Docker management",permalink:"/docs/archive/docker/docker-management"}},i=[{value:"Bring up services",id:"bring-up-services",children:[]},{value:"Verify installation",id:"verify-installation",children:[]},{value:"Update to a new release",id:"update-to-a-new-release",children:[]}],d={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A RadGrad release contains two services: RadGrad (the Meteor application), and MongoDB (the backend database system)."),Object(o.b)("p",null,"Deployment is the process of bringing up these services on a production server."),Object(o.b)("p",null,"We utilize ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to manage deployment."),Object(o.b)("p",null,"We publish the Docker Image for the RadGrad service to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/u/radgrad"}),"RadGrad organization at DockerHub"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Windows-based deployment is not supported."))),Object(o.b)("h2",{id:"bring-up-services"},"Bring up services"),Object(o.b)("p",null,"cd into the radgrad-docker directory, where you should find a script called ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose-run.sh"),".  To make it executable, invoke:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ chmod 775 docker-compose-run.sh\n")),Object(o.b)("p",null,"Invoke it with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ ./docker-compose-run.sh\n")),Object(o.b)("p",null,"This will download all the latest official public images for the two RadGrad services, and run them.  The output should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'$ ./docker-compose-run.sh\nCreating network "opq-docker_default" with the default driver\nPulling mongo (mongo:4.0.5)...\n4.0.5: Pulling from library/mongo\n7b722c1070cd: Pull complete\n5fbf74db61f1: Pull complete\ned41cb72e5c9: Pull complete\n7ea47a67709e: Pull complete\n778aebe6fb26: Pull complete\n3b4b1e0b80ed: Pull complete\n844ccc42fe76: Pull complete\neab01fe8ebf8: Pull complete\ne5758d5381b1: Pull complete\na795f1f35522: Pull complete\n67bc6388d1cd: Pull complete\n89b55f4f3473: Pull complete\n10886b20b4fc: Pull complete\nPulling radgrad (radgrad/radgrad:2.0.8)...\n2.0.8: Pulling from radgrad/radgrad\nf189db1b88b3: Pull complete\n3d06cf2f1b5e: Pull complete\n687ebdda822c: Pull complete\n99119ca3f34e: Pull complete\ne771d6006054: Pull complete\nb0cc28d0be2c: Pull complete\n9bbe77ca0944: Pull complete\n75f7d70e2d07: Pull complete\nf70d7ef53f76: Pull complete\n596c5fb5e7e7: Pull complete\ncafea2ea58df: Pull complete\n')),Object(o.b)("h2",{id:"verify-installation"},"Verify installation"),Object(o.b)("p",null,"Invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"docker ps")," command to verify that all RadGrad containers are running. It should look similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ docker ps\n  CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS                        PORTS                        NAMES\n  6d0666c48674        certbot/certbot         "/bin/sh -c \'trap ex\u2026"   17 seconds ago      Up 16 seconds                 80/tcp, 443/tcp              radgrad-docker_certbot_1\n  a5cb7edeaeff        radgrad/radgrad:2.0.0   "docker-entrypoint.s\u2026"   19 seconds ago      Restarting (1) 1 second ago                                radgrad-docker_radgrad_1\n  91e903641fa1        mongo:4.0.5             "docker-entrypoint.s\u2026"   24 seconds ago      Up 19 seconds                 127.0.0.1:27017->27017/tcp   radgrad-mongo\n\n')),Object(o.b)("p",null,"In addition, you should also check the RadGrad service by opening up your web browser and going to http://production-server:8888."),Object(o.b)("h2",{id:"update-to-a-new-release"},"Update to a new release"),Object(o.b)("p",null,"To update to a new release, cd to the opq-docker directory on your production server and invoke:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ git pull origin master\n")),Object(o.b)("p",null,"This updates the .env file to specify the new version of the RadGrad (or MongoDB) release."),Object(o.b)("p",null,"To restart the services with the updated release, invoke:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ./docker-compose-run.sh\n")))}p.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||o;return r?a.a.createElement(m,l(l({ref:t},d),{},{components:r})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);