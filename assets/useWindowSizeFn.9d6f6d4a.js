import{aH as e,b8 as n,b9 as t}from"./index.a1da5219.js";function i(i,s=150,r){let a=()=>{i()};const[o,d]=e(a,s,r);a=o;const m=()=>{r&&r.immediate&&a(),window.addEventListener("resize",a)},w=()=>{window.removeEventListener("resize",a),d()};return n((()=>{m()})),t((()=>{w()})),[m,w]}export{i as u};