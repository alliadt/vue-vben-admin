import{d as a,Y as e,s as r,f as s,i as t,o as n,j as o,w as p,n as i,m as d,k as m}from"./index.a1da5219.js";import{_ as u}from"./index.9ef011db.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var l=a({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:a}=e();return{params:r((()=>s(a).params))}}});const c=m("br",null,null,-1),f=i(" Keep Alive "),j=m("input",null,null,-1);l.render=function(a,e,r,s,m,u){const l=t("PageWrapper");return n(),o(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:p((()=>[i(" Current Param : "+d(a.params)+" ",1),c,f,j])),_:1})};export default l;