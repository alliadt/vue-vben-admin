import{_ as i,a as e}from"./index.259530a3.js";import{_ as s}from"./index.f935c75b.js";import{d as t,i as o,o as r,j as d,w as n,k as a,y as m}from"./index.a1da5219.js";import{u as p}from"./useForm.cb0543c4.js";import"./index.6f7c662f.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./useAttrs.9c4a2f87.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=t({components:{BasicDrawer:i,BasicForm:s},setup(){const[i,{setFieldsValue:s}]=p({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=e((i=>{s({field2:i.data,field1:i.info})}));return{register:t,schemas:c,registerForm:i}}});f.render=function(i,e,s,t,p,c){const f=o("BasicForm"),l=o("BasicDrawer");return r(),d(l,m(i.$attrs,{onRegister:i.register,title:"Drawer Title",width:"50%"}),{default:n((()=>[a("div",null,[a(f,{onRegister:i.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default f;