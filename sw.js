if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const a=e=>s(e,r),o={module:{uri:r},exports:c,require:a};i[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(f(...e),c)))}}define(["./workbox-5361f2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-8f3ea16b.js",revision:null},{url:"assets/index-b011aaea.css",revision:null},{url:"index.html",revision:"ac15ddbc218ef46804f87e88a1753a3c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"4a9da9c8f1de82e6b546ed768de3849b"},{url:"images/icon/72.png",revision:"5910ed56b1d62bee6d581ee081a2d7dc"},{url:"images/icon/96.png",revision:"ffeeeef5f48aa46b7a11af84770de596"},{url:"images/icon/128.png",revision:"da21fe746f73d86789c9f4f5f40ef751"},{url:"images/icon/144.png",revision:"c11e1c4875af911ff237f48f42d28353"},{url:"images/icon/192.png",revision:"3ffabbad2f3a12e458fd646c5805aa42"},{url:"images/icon/512.png",revision:"fa154d7e81d536ffb3293fe08705d091"},{url:"manifest.webmanifest",revision:"b6809d5a7ac6d8d5b4b864589917305c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
