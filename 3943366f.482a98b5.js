(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{235:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(235)),s={title:"React Checklist",sidebar_label:"React"},i={unversionedId:"developers/checklists/react-checklist",id:"developers/checklists/react-checklist",isDocsHomePage:!1,title:"React Checklist",description:"REACT-01: Components should be simple.",source:"@site/docs/developers/checklists/react-checklist.md",slug:"/developers/checklists/react-checklist",permalink:"/docs/developers/checklists/react-checklist",version:"current",sidebar_label:"React",sidebar:"someSidebar",previous:{title:"Javascript, Typescript, and ESLint Checklist",permalink:"/docs/developers/checklists/js-ts-checklist"},next:{title:"Overview of RadGrad Testing",permalink:"/docs/developers/testing/overview"}},c=[{value:"REACT-01: Components should be simple.",id:"react-01-components-should-be-simple",children:[]},{value:"REACT-03: No state updates in loops.",id:"react-03-no-state-updates-in-loops",children:[]},{value:"REACT-04: Do not rename default exports.",id:"react-04-do-not-rename-default-exports",children:[]},{value:"REACT-05: Destructure props in component parameter.",id:"react-05-destructure-props-in-component-parameter",children:[]},{value:"REACT-06: Define typed constants in withTracker().",id:"react-06-define-typed-constants-in-withtracker",children:[]},{value:"REACT-07: Use React.CSSProperties to type style objects.",id:"react-07-use-reactcssproperties-to-type-style-objects",children:[]},{value:"REACT-08: Don&#39;t retrieve collection data inside render()",id:"react-08-dont-retrieve-collection-data-inside-render",children:[]},{value:"REACT-09: Imported component names and file names should match",id:"react-09-imported-component-names-and-file-names-should-match",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"react-01-components-should-be-simple"},"REACT-01: Components should be simple."),Object(a.b)("p",null,"Components should do one thing.  If they are doing many things, then consider breaking them up into subcomponents."),Object(a.b)("h3",{id:"react-03-no-state-updates-in-loops"},"REACT-03: No state updates in loops."),Object(a.b)("p",null,"Are there state updates in loops?"),Object(a.b)("h3",{id:"react-04-do-not-rename-default-exports"},"REACT-04: Do not rename default exports."),Object(a.b)("p",null,'When importing a component that is exported "by default", do not rename the component.  The code is more understandable if every component is always referenced by its original name.'),Object(a.b)("h3",{id:"react-05-destructure-props-in-component-parameter"},"REACT-05: Destructure props in component parameter."),Object(a.b)("p",null,"Consider ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0"}),"destructuring props"),". This makes the code clearer by identifying exactly which properties are of interest in the function signature."),Object(a.b)("h3",{id:"react-06-define-typed-constants-in-withtracker"},"REACT-06: Define typed constants in withTracker()."),Object(a.b)("p",null,"When using withTracker, define a (typed) const to compute each property, then put the properties in the return using object shorthand notation. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const StudentHomeIcePageContainer = withTracker(() => {\n  const { username } = useParams();\n  const studentID = Users.getProfile(username).userID; // TODO type this.\n  const earnedICE: Ice = StudentProfiles.getEarnedICE(username);\n  const projectedICE: Ice = StudentProfiles.getProjectedICE(username);\n  const helpMessages = HelpMessages.findNonRetired({}); // TODO type this.\n  const favoriteInterests: IFavoriteInterest[] = FavoriteInterests.findNonRetired({ userID: studentID });\n  const courseInstances: ICourseInstance[] = CourseInstances.findNonRetired({ studentID });\n  const opportunityInstances: IOpportunityInstance[] = OpportunityInstances.findNonRetired({ studentID });\n  return {\n    helpMessages,\n    earnedICE,\n    projectedICE,\n    favoriteInterests,\n    courseInstances,\n    opportunityInstances,\n  };\n})(StudentIcePage);\n")),Object(a.b)("h3",{id:"react-07-use-reactcssproperties-to-type-style-objects"},"REACT-07: Use React.CSSProperties to type style objects."),Object(a.b)("p",null,'When passing an object as a style property, type it as "React.CSSProperties". That will detect misspellings of properties or unknown properties. For example:'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const whiteBG: React.CSSProperties = { backgroundColor: '#ffffff', width: '100%' };\n")),Object(a.b)("h3",{id:"react-08-dont-retrieve-collection-data-inside-render"},"REACT-08: Don't retrieve collection data inside render()"),Object(a.b)("p",null,"Some of our components get data from collections in the render method. This is not reactive. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"const AdvisorPageMenuWidget: React.FC = () => {\n  const match = useRouteMatch();\n  const { username } = useParams();\n  const divStyle = { marginBottom: 30 };\n  const profile: IAdvisorOrFacultyProfile = AdvisorProfiles.getProfile(username);\n  let numMod = 0;\n  numMod += Reviews.findNonRetired({ moderated: false }).length;\n  let moderationLabel = 'Moderation';\n  if (numMod > 0) {\n    moderationLabel = `${moderationLabel} (${numMod})`;\n  }\n  let numRequests = 0;\n  numRequests += VerificationRequests.findNonRetired({ status: 'Open' }).length;\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"numMod")," and ",Object(a.b)("inlineCode",{parentName:"p"},"numRequests")," are not reactive."),Object(a.b)("h3",{id:"react-09-imported-component-names-and-file-names-should-match"},"REACT-09: Imported component names and file names should match"),Object(a.b)("p",null,'Many React components are exported "by default", which gives the importing client the ability to rename them in the file that they are used in.'),Object(a.b)("p",null,"The convention in RadGrad is to import a component with a name that matches the file name used to define the component. Let's look at a simple example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// File: AdminAnalyticsNewsletterWidget.ts\n\nconst AdminAnalyticsNewsletterWidget: React.FC<IAdminAnalyticsNewsletterWidgetProps> = () => {\n  :\n  :\n}\n\nconst AdminAnalyticsNewsletterWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(AdminAnalyticsNewsletterWidget);\nexport default AdminAnalyticsNewsletterWidgetContainer;\n")),Object(a.b)("p",null,'In this case, we have a component (AdminAnalyticsNewsletterWidget), defined in a file called "AdminAnalyticsNewsletterWidget.ts", but the actual exported object is a wrapped version of the widget called AdminAnalyticsNewsletterWidgetContainer.'),Object(a.b)("p",null,"Our convention is to import this component in the following way:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import AdminAnalyticsNewsletterWidget from '../../components/admin/analytics/newsletter/AdminAnalyticsNewsletterWidget';\n")),Object(a.b)("p",null,'In other words, we name the imported component using the name associated with the file, and not the "containerized" name.'))}p.isMDXComponent=!0}}]);