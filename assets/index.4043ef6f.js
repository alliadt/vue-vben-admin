import{d as e,bz as i,i as t,o as s,j as a,aJ as r,k as o}from"./index.a1da5219.js";import"./index.a45b2b74.js";import{D as d}from"./index.ed7adbc7.js";import{_ as n}from"./index.00fa045a.js";import{_ as m}from"./index.9ef011db.js";import{refundSchema as c,refundData as p,personSchema as u,personData as j,refundTableData as l,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.a419e505.js";import{u as g}from"./useTable.ad41099a.js";import"./index.c741f5a3.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";import"./index.8ddc459b.js";var h=e({components:{Description:d,BasicTable:n,PageWrapper:m,[i.name]:i},setup(){const[e]=g({title:"退货商品",dataSource:l,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:c,refundData:p,personSchema:u,personData:j}}});const S=r("data-v-ada482fc"),T=S(((e,i,r,d,n,m)=>{const c=t("Description"),p=t("a-divider"),u=t("BasicTable"),j=t("PageWrapper");return s(),a(j,{title:"基础详情页",contentBackground:""},{default:S((()=>[o(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(p),o(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(p),o(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(p),o(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;