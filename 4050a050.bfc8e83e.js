(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(235)),i={title:"Setup a production server using Docker",sidebar_label:"Setup production server (Docker)"},c={unversionedId:"archive/docker/setup-production-server",id:"archive/docker/setup-production-server",isDocsHomePage:!1,title:"Setup a production server using Docker",description:"We are moving to deployment based on Meteor Up.",source:"@site/docs/archive/docker/setup-production-server.md",slug:"/archive/docker/setup-production-server",permalink:"/docs/archive/docker/setup-production-server",version:"current",sidebar_label:"Setup production server (Docker)",sidebar:"someSidebar",previous:{title:"Opportunities",permalink:"/docs/about/opportunities"},next:{title:"Build and publish a new release of RadGrad",permalink:"/docs/archive/docker/build-a-release"}},d=[{value:"Setup location",id:"setup-location",children:[]},{value:"Open ports",id:"open-ports",children:[]},{value:"Install Docker",id:"install-docker",children:[]},{value:"Clone radgrad-docker",id:"clone-radgrad-docker",children:[]},{value:"Setup config/",id:"setup-config",children:[]},{value:"Setup settings",id:"setup-settings",children:[]},{value:"Setup https",id:"setup-https",children:[{value:"Modify nginx.env",id:"modify-nginxenv",children:[]},{value:"Perform a test run",id:"perform-a-test-run",children:[]},{value:"Request real SSL certificate",id:"request-real-ssl-certificate",children:[]},{value:"Debugging:  Check service status",id:"debugging--check-service-status",children:[]},{value:"Debugging: Check Docker logs",id:"debugging-check-docker-logs",children:[]}]},{value:"Setup oplog tailing",id:"setup-oplog-tailing",children:[]},{value:"Setup DB indexes",id:"setup-db-indexes",children:[]}],s={rightToc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We are moving to deployment based on Meteor Up."),Object(o.b)("p",{parentName:"div"},"The instructions on this page are deprecated"))),Object(o.b)("p",null,"This page documents the process of setting up a production server for RadGrad using a Docker-based build mechanism."),Object(o.b)("h2",{id:"setup-location"},"Setup location"),Object(o.b)("p",null,"To start, you will need to create the ability for multiple developers to manage a single RadGrad installation on this server.  You can do this either via multiple logins, each with sudo access, and a shared directory, or else via a single account whose password is shared amongst developers involved in production."),Object(o.b)("p",null,'In this page, we will assume you (or a sysadmin) has created an account called "radgrad" that is used by all developers to manage this installation.'),Object(o.b)("h2",{id:"open-ports"},"Open ports"),Object(o.b)("p",null,"Several ports on the server will need to be open:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Port"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Service"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"22"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ssh")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"443"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"https")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"80"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"web")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8888"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"http")))),Object(o.b)("h2",{id:"install-docker"},"Install Docker"),Object(o.b)("p",null,"First, install Docker and Docker Compose."),Object(o.b)("p",null,"Please consult the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker installation documentation")," and the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose installation documentation")," for instructions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"TO install Docker on Ubuntu 18, I followed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04"}),"these instructions"),"."),Object(o.b)("p",{parentName:"div"},"There are useful instructions at the end documenting how to setup the user to not need sudo for docker."))),Object(o.b)("h2",{id:"clone-radgrad-docker"},"Clone radgrad-docker"),Object(o.b)("p",null,"Next, clone the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad-docker"}),"radgrad-docker repository")," with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone https://github.com/radgrad/radgrad-docker.git\n")),Object(o.b)("h2",{id:"setup-config"},"Setup config/"),Object(o.b)("p",null,'Your local radgrad-docker directory contains a subdirectory called "sample-config" containing various files and directories needed for the installation.'),Object(o.b)("p",null,"A production server will access a customized version of these template files from a directory you must create called config/.  Here's how to do it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"radgrad-docker $ mkdir config\nradgrad-docker $ cp -R sample-config/* config\n")),Object(o.b)("h2",{id:"setup-settings"},"Setup settings"),Object(o.b)("p",null,'In order for RadGrad to deploy successfully, it expects to find a file called "settings.production.json" in the config/ directory. To create this file from a template, run:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"radgrad-docker $ mv config/sample.settings.production.json config/settings.production.json\n")),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../reference/settings-file"}),"reference guide on settings.production.json")," for details."),Object(o.b)("h2",{id:"setup-https"},"Setup https"),Object(o.b)("p",null,"RadGrad needs to run on HTTPS. Here is a procedure to request SSL certificates for your domain (from Let's Encrypt) so that it can run over HTTPS."),Object(o.b)("p",null,"In addition to Meteor and MongoDB services, the RadGrad Docker services include nginx and certbot. The Nginx web server on port 80 is configured to forward HTTP traffic to an HTTPS web server on port 443, which subsequently reverse proxies traffic to the RadGrad application on port 8888."),Object(o.b)("h3",{id:"modify-nginxenv"},"Modify nginx.env"),Object(o.b)("p",null,"To begin, you will need to modify some of the configuration variables in the radgrad-docker/config/nginx/nginx.env file on the production server. This configuration file should have already been copied over from the sample-config/ directory earlier during the setup process."),Object(o.b)("p",null,"This file contains three variables that you will need to modify. It defaults to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"export NGINX_SERVER_NAME=example.org\nLETSENCRYPT_EMAIL=user@example.org\nLETSENCRYPT_STAGING_MODE=1\n")),Object(o.b)("p",null,"Modify the NGINX_SERVER_NAME variable with the domain name pointing to your host machine."),Object(o.b)("p",null,"Modify the LETSENCRYPT_EMAIL variable with an email address that should be associated with the SSL certificate generated for the given domain name."),Object(o.b)("p",null,"Finally, leave the LETSENCRYPT_STAGING_MODE variable set to ",Object(o.b)("inlineCode",{parentName:"p"},"1")," for the time being. This will ensure that you do not hit any certificate request limit while testing your HTTPS configuration."),Object(o.b)("p",null,"Your nginx.env file should now look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu\nLETSENCRYPT_EMAIL=admin@radgrad.org\nLETSENCRYPT_STAGING_MODE=1\n")),Object(o.b)("h3",{id:"perform-a-test-run"},"Perform a test run"),Object(o.b)("p",null,"Before we begin, ensure that all RadGrad services are shut down by changing into the radgrad-docker directory and invoking ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose down"),"."),Object(o.b)("p",null,"Then, invoke the init-letsencrypt.sh script and follow the prompts. It should look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'radgrad-docker$ ./init-letsencrypt.sh\n\nExisting data found for radgrad2.ics.hawaii.edu. Continue and replace existing certificate? (y/N) y\nDeleting existing files in ./data/certbot. Sudo is used in case the ./data/certbot files are owned by root, which can occur if Docker Compose has already been previously spun-up prior to running this script.\n\n### Creating dummy certificate for radgrad2.ics.hawaii.edu ...\nStarting radgrad-docker_nginx_1 ... done\nCreating radgrad-docker_certbot_run ... done\nGenerating a RSA private key\n.....+++++\n......+++++\nwriting new private key to \'/etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem\'\n-----\n\n### Starting nginx ...\nStopping radgrad-docker_certbot_1 ... done\nStopping radgrad-docker_radgrad_1 ... done\nStopping radgrad-mongo            ... done\nRemoving radgrad-docker_certbot_1 ... done\nRemoving radgrad-docker_nginx_1   ... done\nRemoving radgrad-docker_radgrad_1 ... done\nRemoving radgrad-mongo            ... done\nRemoving network radgrad-docker_default\n\n# Startup Docker-Compose. Note: Be sure that docker-compose.yml is same directory as this script.\ndocker-compose up -d --remove-orphans\nCreating network "radgrad-docker_default" with the default driver\nCreating radgrad-mongo ... done\nCreating radgrad-docker_radgrad_1 ... done\nCreating radgrad-docker_nginx_1   ... done\nCreating radgrad-docker_certbot_1 ... done\n\n### Deleting dummy certificate for radgrad2.ics.hawaii.edu ...\ndocker-compose run --rm --entrypoint "\\\n  rm -Rf /etc/letsencrypt/live/$domains && \\\n  rm -Rf /etc/letsencrypt/archive/$domains && \\\n  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot\nCreating radgrad-docker_certbot_run ... done\n\n### Requesting Let\'s Encrypt certificate for radgrad2.ics.hawaii.edu ...\nCreating radgrad-docker_certbot_run ... done\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator webroot, Installer None\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nWould you be willing, once your first certificate is successfully issued, to\nshare your email address with the Electronic Frontier Foundation, a founding\npartner of the Let\'s Encrypt project and the non-profit organization that\ndevelops Certbot? We\'d like to send you email about our work encrypting the web,\nEFF news, campaigns, and ways to support digital freedom.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(Y)es/(N)o: n\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge for radgrad2.ics.hawaii.edu\nUsing the webroot path /var/www/certbot for all unmatched domains.\nWaiting for verification...\nCleaning up challenges\n\nIMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem\n   Your cert will expire on 2020-12-27. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - Your account credentials have been saved in your Certbot\n   configuration directory at /etc/letsencrypt. You should make a\n   secure backup of this folder now. This configuration directory will\n   also contain certificates and private keys obtained by Certbot so\n   making regular backups of this folder is ideal.\n\n### Reloading nginx ...\n2020/09/28 20:46:31 [notice] 10#10: signal process started\nradgrad-docker$\n')),Object(o.b)("h3",{id:"request-real-ssl-certificate"},"Request real SSL certificate"),Object(o.b)("p",null,"Now that everything looks good, we can now go ahead and request a real SSL certificate!"),Object(o.b)("p",null,"First, shut down all RadGrad services by changing into the radgrad-docker directory and invoking:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"radgrad-docker $ docker-compose down\n")),Object(o.b)("p",null,"Then, open the opq-docker/config/nginx/nginx.env file and set the LETSENCRYPT_STAGING_MODE variable to 0. The file should now look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu\nLETSENCRYPT_EMAIL=admin@radgrad.org\nLETSENCRYPT_STAGING_MODE=0\n")),Object(o.b)("p",null,"Finally, invoke the init-letsencrypt.sh script and follow the prompts. The output should be nearly identical to that of the test run that was performed earlier."),Object(o.b)("p",null,"Verify that the certificate was granted by visiting the RadGrad application using https."),Object(o.b)("h3",{id:"debugging--check-service-status"},"Debugging:  Check service status"),Object(o.b)("p",null,"Check to make sure all required services are running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'radgrad-docker$ docker ps\nCONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                                      NAMES\n536005ec471f        certbot/certbot         "/bin/sh -c \'trap ex\u2026"   27 seconds ago      Up 25 seconds       80/tcp, 443/tcp                            radgrad-docker_certbot_1\n89376ec0e6a9        nginx:1.15-alpine       "/bin/sh -c \'while :\u2026"   28 seconds ago      Up 26 seconds       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   radgrad-docker_nginx_1\n7bb923963c49        radgrad/radgrad:2.0.0   "docker-entrypoint.s\u2026"   29 seconds ago      Up 27 seconds       80/tcp, 0.0.0.0:8888->8888/tcp             radgrad-docker_radgrad_1\n1ffaad0fa3b5        mongo:4.0.5             "docker-entrypoint.s\u2026"   30 seconds ago      Up 28 seconds       127.0.0.1:27017->27017/tcp                 radgrad-mongo\nradgrad@radgrad2:~/radgrad-docker$\n')),Object(o.b)("h3",{id:"debugging-check-docker-logs"},"Debugging: Check Docker logs"),Object(o.b)("p",null,"Sometimes they reveal problems. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'radgrad-docker$ docker logs radgrad-docker_nginx_1\n2020/09/28 20:39:16 [emerg] 1#1: host not found in upstream "boxupdateserver:8151" in /etc/nginx/conf.d/app.conf:6\nradgrad@radgrad2:~/radgrad-docker$\n')),Object(o.b)("h2",{id:"setup-oplog-tailing"},"Setup oplog tailing"),Object(o.b)("p",null,"TBA"),Object(o.b)("h2",{id:"setup-db-indexes"},"Setup DB indexes"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"ensure-indexes.js is not yet ready for use with RadGrad."))),Object(o.b)("p",null,"When you create a new RadGrad database, it's best to ensure that the indexes are created before any data is accepted."),Object(o.b)("p",null,"Change directories into the radgrad-docker/scripts/mongodb directory."),Object(o.b)("p",null,"Next, ensure that the MongoDB docker container is running."),Object(o.b)("p",null,"Finally, invoke the ensure-indexes.sh script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"radgrad-docker/scripts/mongodb $ ./ensure-indexes.sh\n")))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);