import fetch from"node-fetch";import{FormData,Blob}from"formdata-node";import{JSDOM}from"jsdom";async function webp2mp4(e){const t=new FormData,o="string"==typeof e&&/https?:\/\//.test(e),n=o?new Blob:new Blob([e]);t.append("new-image-url",o?n:""),t.append("new-image",o?"":n,"image.webp");const a=await fetch("https://s6.ezgif.com/webp-to-mp4",{method:"POST",body:t}),p=await a.text(),{document:m}=new JSDOM(p).window,w=new FormData,i={};for(const e of m.querySelectorAll("form input[name]"))i[e.name]=e.value,w.append(e.name,e.value);const r=await fetch("https://ezgif.com/webp-to-mp4/"+i.file,{method:"POST",body:w}),c=await r.text(),{document:d}=new JSDOM(c).window;return new URL(d.querySelector("div#output > p.outfile > video > source").src,r.url).toString()}async function webp2png(e){const t=new FormData,o="string"==typeof e&&/https?:\/\//.test(e),n=o?new Blob:new Blob([e]);t.append("new-image-url",o?n:""),t.append("new-image",o?"":n,"image.webp");const a=await fetch("https://s6.ezgif.com/webp-to-png",{method:"POST",body:t}),p=await a.text(),{document:m}=new JSDOM(p).window,w=new FormData,i={};for(const e of m.querySelectorAll("form input[name]"))i[e.name]=e.value,w.append(e.name,e.value);const r=await fetch("https://ezgif.com/webp-to-png/"+i.file,{method:"POST",body:w}),c=await r.text(),{document:d}=new JSDOM(c).window;return new URL(d.querySelector("div#output > p.outfile > img").src,r.url).toString()}export{webp2mp4,webp2png}; /* @NeKosmic */