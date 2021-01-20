import{a as e}from"./index.d913b92a.js";import{u as l}from"./useFullScreen.cf649bc4.js";import{_ as r}from"./index.9ef011db.js";import{d as t,r as o,i as s,o as n,j as i,w as c,k as a,n as u,m as d}from"./index.a1da5219.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var m=t({components:{CollapseContainer:e,PageWrapper:r},setup(){const e=o(null),{enterFullscreen:r,toggleFullscreen:t,isFullscreenRef:s,exitFullscreen:n}=l(),{toggleFullscreen:i}=l(e);return{enterFullscreen:r,toggleDom:i,toggleFullscreen:t,isFullscreenRef:s,exitFullscreen:n,domRef:e}}});const f=u(" Enter Window Full Screen "),p=u(" Toggle Window Full Screen "),g=u(" Exit Window Full Screen "),F=u(" Enter Dom Full Screen "),x={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},j=u(" Exit Dom Full Screen ");m.render=function(e,l,r,t,o,m){const C=s("a-button"),b=s("CollapseContainer"),k=s("PageWrapper");return n(),i(k,{title:"全屏示例"},{default:c((()=>[a(b,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:c((()=>[a(C,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:c((()=>[f])),_:1},8,["onClick"]),a(C,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:c((()=>[p])),_:1},8,["onClick"]),a(C,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:c((()=>[g])),_:1},8,["onClick"]),u(" Current State: "+d(e.isFullscreenRef),1)])),_:1}),a(b,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:c((()=>[a(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:c((()=>[F])),_:1},8,["onClick"])])),_:1}),a("div",x,[a(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"])],512)])),_:1})};export default m;