import{_ as e}from"./index.00fa045a.js";import"./index.f6731d38.js";import{c as i,d as t,j as s}from"./data.e844138d.js";import{_ as o}from"./index.9ef011db.js";import{d,i as a,o as r,j as n,w as m,k as p,n as c}from"./index.a1da5219.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var j=d({components:{BasicTable:e,PageWrapper:o},setup:()=>({defaultHeader:function(){s({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){s({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:t})});const f=c("导出：默认头部"),u=c("导出：自定义头部");j.render=function(e,i,t,s,o,d){const c=a("a-button"),j=a("BasicTable"),l=a("PageWrapper");return r(),n(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[p(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[p(c,{onClick:e.defaultHeader},{default:m((()=>[f])),_:1},8,["onClick"]),p(c,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;