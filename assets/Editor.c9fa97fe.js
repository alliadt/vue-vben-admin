import{_ as e}from"./index.f935c75b.js";import{a as i}from"./index.d913b92a.js";import{d as s,aZ as t,h as o,i as r,o as a,j as d,w as n,k as m}from"./index.a1da5219.js";import{M as p}from"./index.40f548d1.js";import{_ as l}from"./index.9ef011db.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./domUtils.941be389.js";import"./index.7eaf0b8a.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>t(p,{value:e[i],onChange:s=>{e[i]=s}})}];var u=s({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=o();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});u.render=function(e,i,s,t,o,p){const l=r("BasicForm"),c=r("CollapseContainer"),u=r("PageWrapper");return a(),d(u,{title:"MarkDown组件嵌入Form示例"},{default:n((()=>[m(c,{title:"MarkDown表单"},{default:n((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;