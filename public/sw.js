if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9dd56c8ceaa1b75b16d653cf9cf61bf1"},{url:"/_next/static/63EoRZnJoG-gqql9X9Rxk/_buildManifest.js",revision:"44bf2d7a083188d5cd5be3ef9dac4583"},{url:"/_next/static/63EoRZnJoG-gqql9X9Rxk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-f6d4d414c406548b.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/684-34f5a7c7e940bb63.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/742.9da5f7f3cbc07b7f.js",revision:"9da5f7f3cbc07b7f"},{url:"/_next/static/chunks/766-4193ee4913ecb28e.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/917.e0ad4ef2bee146b9.js",revision:"e0ad4ef2bee146b9"},{url:"/_next/static/chunks/app/_not-found/page-1aedb88b2aaa1e30.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/app/eventdetails/page-2c1a5f0ea1382608.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/app/itinerarychoice/page-a61e5b9e9239130b.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/app/layout-9ee22ec0ea09125c.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/app/page-006f0162bbb7db97.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/d0deef33.45bccf931ff63787.js",revision:"45bccf931ff63787"},{url:"/_next/static/chunks/e9841c0d.ff2338ddf27f367b.js",revision:"ff2338ddf27f367b"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/main-8d9975505db129c2.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/main-app-10504efe2e87308a.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/pages/_app-da15c11dea942c36.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-dc9b1e8fa6aa69ae.js",revision:"63EoRZnJoG-gqql9X9Rxk"},{url:"/_next/static/css/1de76be520b4de19.css",revision:"1de76be520b4de19"},{url:"/_next/static/css/bc7f609b3b60f838.css",revision:"bc7f609b3b60f838"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/flower.png",revision:"4cf4ad25c62893f2e2172d557b03ed10"},{url:"/icons/icon-192x192.png",revision:"5cdd631a26353172c0088514ff7cf8e5"},{url:"/icons/icon-512x512.png",revision:"ae944483952a3806638012d830751c05"},{url:"/icons/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/icons/marker.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/itinerary-card/classic-itinerary.svg",revision:"686e5da6f1848d30308c5338bd25a5d1"},{url:"/itinerary-card/cultural-itinerary.svg",revision:"684ed9ff2e1012948337e6dc9b4b40e5"},{url:"/itinerary-card/gourmet-itinerary.svg",revision:"fd762cae6e44dcbe4acff6260bcd01ce"},{url:"/logo.svg",revision:"4aa7786888da02514ab3f8b3d0b9cdb4"},{url:"/logotypo.svg",revision:"8d8cc21717cf08e910d858d2a88e040c"},{url:"/manifest.json",revision:"4577a776b250f013f1504de32f6c6210"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.ts",revision:"452724e3045545fec13d9c70d86fefc0"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
