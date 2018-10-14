"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4959:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(9960),o=a(4477),i=a(2263),s=a(643).version.split("."),l=[s[0],s[1]].join(".");const p=function(e){var t=e.to,a=e.children,s=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},a)}},9983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(4959),s=["components"],l={id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},p=void 0,c={unversionedId:"introduction/saving-data",id:"introduction/saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/07-saving-data.mdx",sourceDirName:"introduction",slug:"/introduction/saving-data",permalink:"/docs/next/introduction/saving-data",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1661390287,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:7,frontMatter:{id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Scraping",permalink:"/docs/next/introduction/scraping"},next:{title:"Refactoring",permalink:"/docs/next/introduction/refactoring"}},d={},u=[{value:"What&#39;s <code>Dataset.pushData()</code>",id:"whats-datasetpushdata",level:2},{value:"Finding saved data",id:"finding-saved-data",level:2},{value:"Next lesson",id:"next-lesson",level:2}],m={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A data extraction job would not be complete without saving the data for later use and processing. We've come to the final and most difficult part of this tutorial so make sure to pay attention very carefully!"),(0,o.kt)("p",null,"First, add a new import to the top of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightCrawler, Dataset } from 'crawlee';\n")),(0,o.kt)("p",null,"Then, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(results)")," call with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Dataset.pushData(results);\n")),(0,o.kt)("p",null,"and that's it. Unlike earlier, we are being serious now. That's it, we're done. The final code looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`)\n        if (request.label === 'DETAIL') {\n            const urlParts = request.url.split('/').slice(-2);\n            const modifiedTimestamp = await page.locator('time[datetime]').getAttribute('datetime');\n            const runsRow = page.locator('ul.ActorHeader-stats > li').filter({ hasText: 'Runs' });\n            const runCountString = await runsRow.locator('span').last().textContent();\n\n            const results = {\n                url: request.url,\n                uniqueIdentifier: urlParts.join('/'),\n                owner: urlParts[0],\n                title: await page.locator('h1').textContent(),\n                description: await page.locator('span.actor-description').textContent(),\n                modifiedDate: new Date(Number(modifiedTimestamp)),\n                runCount: Number(runCountString.replaceAll(',', '')),\n            }\n\n            await Dataset.pushData(results);\n        } else {\n            await page.waitForSelector('.ActorStorePagination-pages a');\n            await enqueueLinks({\n                selector: '.ActorStorePagination-pages > a',\n                label: 'LIST',\n            })\n            await page.waitForSelector('.ActorStoreItem');\n            await enqueueLinks({\n                selector: '.ActorStoreItem',\n                label: 'DETAIL', // <= note the different label\n            })\n        }\n    }\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)("h2",{id:"whats-datasetpushdata"},"What's ",(0,o.kt)("inlineCode",{parentName:"h2"},"Dataset.pushData()")),(0,o.kt)("p",null,"\u200b",(0,o.kt)(i.Z,{to:"core/class/Dataset#pushData",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.pushData()"))," is a function that saves data to the default ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset")," is a storage designed to hold data in a format similar to a table. Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.pushData()")," a new row in the table is created, with the property names serving as column titles. In the default configuration, the rows are represented as JSON files saved on your disk, but other storage systems can be plugged into Crawlee as well."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Each time you start Crawlee a default ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset")," is automatically created, so there's no need to initialize it or create an instance first. You can create as many datasets as you want and even give them names. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"../guides/result-storage#dataset",target:null,rel:null},"Result storage guide")," and the ",(0,o.kt)(i.Z,{to:"core/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.open()"))," function.")),(0,o.kt)("h2",{id:"finding-saved-data"},"Finding saved data"),(0,o.kt)("p",null,"Unless you changed the configuration that Crawlee uses locally, which would suggest that you knew what you were doing, and you didn't need this tutorial anyway, you'll find your data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," directory that Crawlee creates in the working directory of the running script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{PROJECT_FOLDER}/storage/datasets/default/\n")),(0,o.kt)("p",null,"The above folder will hold all your saved data in numbered files, as they were pushed into the dataset. Each file represents one invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.pushData()")," or one table row."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to store your data in a single big file, instead of many small ones, see the ",(0,o.kt)("a",{parentName:"p",href:"../guides/result-storage#key-value-store",target:null,rel:null},"Result storage guide")," for Key-value stores.")),(0,o.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,o.kt)("p",null,"In the next and final lesson, we will show you some improvements that you can add to your crawler code that will make it more readable and maintainable in the long run."))}f.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 15.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);