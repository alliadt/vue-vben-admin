import{d as e,b2 as t,i as o,o as a,j as i,w as s,k as n}from"./index.a1da5219.js";import{e as r}from"./index.d913b92a.js";import d from"./TargetContent.37871edc.js";import{_ as m}from"./index.9ef011db.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.58c2242a.js";import"./index.a0e9bc88.js";import"./index.38c8e961.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var p=e({components:{LazyContainer:r,PageWrapper:m,TargetContent:d,Skeleton:t}});const j={class:"lazy-base-demo-wrap"},l=n("h1",null,"向下滚动",-1),c={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,m,p){const f=o("TargetContent"),b=o("Skeleton"),x=o("LazyContainer"),u=o("PageWrapper");return a(),i(u,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:s((()=>[n("div",j,[l,n("div",c,[n(x,null,{skeleton:s((()=>[n(b,{rows:10})])),default:s((()=>[n(f)])),_:1})])])])),_:1})};export default p;