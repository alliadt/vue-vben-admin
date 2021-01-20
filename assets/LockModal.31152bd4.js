import{d as e,u as s,N as r,s as a,cp as i,g as o,i as t,o as d,j as n,w as l,k as m,m as c,n as p,y as f}from"./index.a1da5219.js";import{_ as u,a as j}from"./index.21ee0d6a.js";import{_ as x}from"./index.f935c75b.js";import{h as b}from"./header.3041aac3.js";import{u as g}from"./useForm.cb0543c4.js";import"./useTimeout.fc5397ab.js";import"./useAttrs.9c4a2f87.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";var h=e({name:"LockModal",components:{BasicModal:u,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:t}=r("header-lock-modal"),d=a((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=j(),[m,{validateFields:c,resetFields:p}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:t,getRealName:d,register:n,registerForm:m,handleLock:async function(){const e=(await c()).password;l(),i.commitLockInfoState({isLock:!0,pwd:e}),await p()},headerImg:b}}});h.render=function(e,s,r,a,i,o){const u=t("BasicForm"),j=t("a-button"),x=t("BasicModal");return d(),n(x,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:l((()=>[m("div",{class:`${e.prefixCls}__entry`},[m("div",{class:`${e.prefixCls}__header`},[m("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),m("p",{class:`${e.prefixCls}__header-name`},c(e.getRealName),3)],2),m(u,{onRegister:e.registerForm},null,8,["onRegister"]),m("div",{class:`${e.prefixCls}__footer`},[m(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:l((()=>[p(c(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;