import{d as e,bQ as t,g as a,cm as s,s as o,cn as n,br as r,bs as i,i as d,o as l,j as u,aJ as c,k as p,m,n as f}from"./index.a1da5219.js";import"./index.f4c035d6.js";import R from"./CurrentPermissionMode.a6bcfd68.js";import{_ as g}from"./index.9ef011db.js";import"./index.a45b2b74.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var S=e({components:{Alert:t,CurrentPermissionMode:R,PageWrapper:g},setup(){const{changeRole:e}=n();return{userStore:a,RoleEnum:s,isSuper:o((()=>a.getRoleListState.includes(s.SUPER))),isTest:o((()=>a.getRoleListState.includes(s.TEST))),changeRole:e}}});const b=c("data-v-9a73aaae");r("data-v-9a73aaae");const j=f(" 当前角色: "),x={class:"mt-4"},E=f(" 权限切换(请先切换权限模式为前端角色权限模式): ");i();const P=b(((e,t,a,s,o,n)=>{const r=d("CurrentPermissionMode"),i=d("Alert"),c=d("a-button"),R=d("a-button-group"),g=d("PageWrapper");return l(),u(g,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:b((()=>[p(r),p("p",null,[j,p("a",null,m(e.userStore.getRoleListState),1)]),p(i,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",x,[E,p(R,null,{default:b((()=>[p(c,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:b((()=>[f(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(c,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:b((()=>[f(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));S.render=P,S.__scopeId="data-v-9a73aaae";export default S;