"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const s="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7462),a=r(7294),s=r(6010),o=r(2389),u=r(7392),i=r(7094),l=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,w=e.groupId,q=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.U)(),k=v.tabGroupChoices,R=v.setTabGroupChoices,x=(0,a.useState)(b),T=x[0],C=x[1],L=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var E=k[w];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&C(E)}var O=function(e){var t=e.currentTarget,r=L.indexOf(t),n=g[r].value;n!==T&&(N(t),C(n),null!=w&&R(w,String(n)))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=L.indexOf(e.currentTarget)+1;r=null!=(n=L[a])?n:L[0];break;case"ArrowLeft":var s,o=L.indexOf(e.currentTarget)-1;r=null!=(s=L[o])?s:L[L.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},q)},g.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return L.push(e)},onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4959:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(9960),s=r(4477),o=r(2263),u=r(643).version.split("."),i=[u[0],u[1]].join(".");const l=function(e){var t=e.to,r=e.children,u=(0,s.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||u.version===i?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===u.version?"next":u.version)+"/"+t},r)}},6174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>w});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=r(4959),u=r(5488),i=r(5162),l=r(1435);var c=["components"],p={id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},d=void 0,h={unversionedId:"guides/request-storage",id:"version-3.0/guides/request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through",source:"@site/versioned_docs/version-3.0/guides/request_storage.mdx",sourceDirName:"guides",slug:"/guides/request-storage",permalink:"/docs/guides/request-storage",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1661390287,formattedLastUpdatedAt:"Aug 25, 2022",frontMatter:{id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Result Storage",permalink:"/docs/guides/result-storage"}},m={},w=[{value:"Request queue",id:"request-queue",level:2},{value:"Request list",id:"request-list",level:2},{value:"Which one to choose?",id:"which-one-to-choose",level:2},{value:"Cleaning up the storages",id:"cleaning-up-the-storages",level:2}],q={toc:w};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},q,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Crawlee has several request storage types that are useful for specific tasks. The requests are stored on local disk to a directory defined by the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable. If this variable is not defined, by default Crawlee sets ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"./storage")," in the current working directory."),(0,s.kt)("h2",{id:"request-queue"},"Request queue"),(0,s.kt)("p",null,"The request queue is a storage of URLs to crawl. The queue is used for the deep crawling of websites, where we start with several URLs and then recursively follow links to other pages. The data structure supports both breadth-first and depth-first crawling orders."),(0,s.kt)("p",null,"Each Crawlee project run is associated with a ",(0,s.kt)("strong",{parentName:"p"},"default request queue"),". Typically, it is used to store URLs to crawl in the specific crawler run. Its usage is optional."),(0,s.kt)("p",null,"In Crawlee, the request queue is represented by the ",(0,s.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," class."),(0,s.kt)("p",null,"The request queue is managed by ",(0,s.kt)(o.Z,{to:"memory-storage/class/MemoryStorage",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"MemoryStorage"))," class and its data is stored in memory, while also being off-loaded to the local directory specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{CRAWLEE_STORAGE_DIR}/request_queues/{QUEUE_ID}/entries.json\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"{QUEUE_ID}")," is the name or ID of the request queue. The default queue has ID ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),", unless we override it by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_DEFAULT_REQUEST_QUEUE_ID")," environment variable.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"entries.json")," contains an array or requests.")),(0,s.kt)("p",null,"The following code demonstrates the usage of the request queue:"),(0,s.kt)(u.Z,{groupId:"request_queue",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"crawler",label:"Usage with Crawler",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers.\nconst crawler = new CheerioCrawler({\n    // Note that we're not specifying the requestQueue here\n    async requestHandler({ $, crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Add the initial requests.\n// Note that we are not opening the request queue explicitly before\nawait crawler.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// Run the crawler\nawait crawler.run();\n")),(0,s.kt)(i.Z,{value:"crawler_explicit",label:"Explicit usage with Crawler",mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},"import { RequestQueue, CheerioCrawler } from 'crawlee';\n\n// Open the default request queue associated with the current run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial requests\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    async requestHandler({ $, request, enqueueLinks }) {\n        // Add new request to the queue\n        await requestQueue.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n")),(0,s.kt)(i.Z,{value:"basic_operations",label:"Basic Operations",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},"import { RequestQueue } from 'crawlee';\n\n// Open the default request queue associated with the crawler run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial batch of requests (could be an array of just one)\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n]);\n\n// Open the named request queue\nconst namedRequestQueue = await RequestQueue.open('named-queue');\n\n// Remove the named request queue\nawait namedRequestQueue.drop();\n"))),(0,s.kt)("p",null,"To see more detailed example of how to use the request queue with a crawler, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/puppeteer-crawler",target:null,rel:null},"Puppeteer Crawler")," example."),(0,s.kt)("h2",{id:"request-list"},"Request list"),(0,s.kt)("p",null,"The request list is not a storage per se - it represents the list of URLs to crawl that is stored in a crawler run memory (or optionally in default ",(0,s.kt)("a",{parentName:"p",href:"../guides/result-storage#key-value-store",target:null,rel:null},"Key-Value Store")," associated with the run, if specified). The list is used for the crawling of a large number of URLs, when we know all the URLs which should be visited by the crawler and no URLs would be added during the run. The URLs can be provided either in code or parsed from a text file hosted on the web."),(0,s.kt)("p",null,"Request list is created exclusively for the crawler run and only if its usage is explicitly specified in the code. Its usage is optional."),(0,s.kt)("p",null,"In Crawlee, the request list is represented by the ",(0,s.kt)(o.Z,{to:"core/class/RequestList",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestList"))," class."),(0,s.kt)("p",null,"The following code demonstrates basic operations of the request list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { RequestList, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n];\n\n// Open the request list.\n// List name is used to persist the sources and the list state in the key-value store\nconst requestList = await RequestList.open('my-list', sources);\n\n// The crawler will automatically process requests from the list\n// It's used the same way for Cheerio /Playwright crawlers.\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page, request }) {\n        // Process the page (extract data, take page screenshot, etc).\n        // No more requests could be added to the request list here\n    },\n});\n")),(0,s.kt)("h2",{id:"which-one-to-choose"},"Which one to choose?"),(0,s.kt)("p",null,"When using Request queue - we would normally have several start URLs (e.g. category pages on e-commerce website) and then recursively add more (e.g. individual item pages) programmatically to the queue, it supports dynamic adding and removing of requests. No more URLs can be added to Request list after its initialization as it is immutable, URLs cannot be removed from the list either."),(0,s.kt)("p",null,"On the other hand, the Request queue is not optimized for adding or removing numerous URLs in a batch. This is technically possible, but requests are added one by one to the queue, and thus it would take significant time with a larger number of requests. Request list however can contain even millions of URLs, and it would take significantly less time to add them to the list, compared to the queue."),(0,s.kt)("p",null,"Note that Request queue and Request list can be used together by the same crawler. In such cases, each request from the Request list is enqueued into the Request queue first (to the foremost position in the queue, even if Request queue is not empty) and then consumed from the latter. This is necessary to avoid the same URL being processed more than once (from the list first and then possibly from the queue). In practical terms, such a combination can be useful when there are numerous initial URLs, but more URLs would be added dynamically by the crawler."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In Crawlee, there is no much need to combine the request queue together with the request list (although it's technically possible)."),(0,s.kt)("p",{parentName:"admonition"},"Previously there was no way to add the initial requests to the queue in batches (to add an array of requests), i.e. we could have only added the requests one by one to the queue with the help of ",(0,s.kt)(o.Z,{to:"core/class/RequestQueue#addRequest",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"addRequest()"))," function."),(0,s.kt)("p",{parentName:"admonition"},"However, now we could use the ",(0,s.kt)(o.Z,{to:"core/class/RequestQueue#addRequests",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"addRequests()"))," function, which adds requests in batches. Thus, instead of combining the request queue and the request list, we can use only the request queue for such use-cases now. See the examples below.")),(0,s.kt)(u.Z,{groupId:"queue_list",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"add_requests",label:"Request Queue",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},"// This is the suggested way.\n// Note that we are not using the request list at all,\n// and not using the request queue explicitly here.\n\nimport { PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue\n        // and would be processed after the initial requests are processed.\n    },\n});\n\n// Add the initial sources array to the request queue\n// and run the crawler\nawait crawler.run(sources);\n")),(0,s.kt)(i.Z,{value:"queue_list",label:"Request Queue + Request List",mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},"// This is technically correct, but\n// we need to explicitly open/use both the request queue and the request list.\n// We suggest using the request queue and batch add the requests instead.\n\nimport { RequestList, RequestQueue, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// Open the request list with the initial sources array\nconst requestList = await RequestList.open('my-list', sources);\n\n// Open the default request queue. It's not necessary to add any requests to the queue\nconst requestQueue = await RequestQueue.open();\n\n// The crawler will automatically process requests from the list and the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    requestQueue,\n    // Each request from the request list is enqueued to the request queue one by one.\n    // At this point request with the same URL would exist in the list and the queue\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue (but not to the list)\n        // and would be processed after the request list is empty.\n        // No more requests could be added to the list here\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n"))),(0,s.kt)("h2",{id:"cleaning-up-the-storages"},"Cleaning up the storages"),(0,s.kt)("p",null,"Default storages are purged before the crawler starts if not specified otherwise. This happens as early as when we try to open some storage (e.g. via ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue.open()"),") or when we try to work with a default storage via one of the helper methods (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"crawler.addRequests()")," that under the hood calls ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue.open()"),"). If we don't work with storages explicitly in our code, the purging will eventually happen when the ",(0,s.kt)("inlineCode",{parentName:"p"},"run")," method of our crawler is executed. In case we need to purge the storages sooner, we can use the ",(0,s.kt)(o.Z,{to:"core/function/purgeDefaultStorages",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"purgeDefaultStorages()"))," helper explicitly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { purgeDefaultStorages } from 'crawlee';\n\nawait purgeDefaultStorages();\n")),(0,s.kt)("p",null,"Calling this function will clean up the default request storage directory (and also the request list stored in default key-value store). This is a shortcut for running (optional) ",(0,s.kt)("inlineCode",{parentName:"p"},"purge")," method on the ",(0,s.kt)(o.Z,{to:"core/interface/StorageClient",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"StorageClient"))," interface, in other words it will call the ",(0,s.kt)("inlineCode",{parentName:"p"},"purge")," method of the underlying storage implementation we are currently using. In addition, this method will make sure the storage is purged only once for a given execution context, so it is safe to call it multiple times."))}f.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 15.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);