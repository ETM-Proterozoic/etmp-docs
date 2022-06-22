"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),l=n(6010),r=n(2389),i=n(7392),s=n(7094),m=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n;const{lazy:r,block:p,defaultValue:d,values:k,groupId:v,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,E]=(0,o.useState)(b),M=[],{blockElementScrollPositionUntilNextRender:P}=(0,m.o5)();if(null!=v){const e=w[v];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==T&&(P(t),E(a),null!=v&&N(v,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=M.indexOf(e.currentTarget)+1;n=null!=(a=M[t])?a:M[0];break}case"ArrowLeft":{var o;const t=M.indexOf(e.currentTarget)-1;n=null!=(o=M[t])?o:M[M.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>M.push(e),onKeyDown:C,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},4641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),l=n(4996),r=n(5488),i=n(5162);const s={id:"config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},m=void 0,c={unversionedId:"develop/metamask/config-etmp-on-metamask",id:"develop/metamask/config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/develop/metamask/config-ETM3-on-metamask.md",sourceDirName:"develop/metamask",slug:"/develop/metamask/config-etmp-on-metamask",permalink:"/docs/develop/metamask/config-etmp-on-metamask",draft:!1,editUrl:"/docs/develop/metamask/config-ETM3-on-metamask.md",tags:[],version:"current",frontMatter:{id:"config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"development",previous:{title:"Hello Metamask",permalink:"/docs/develop/metamask/hello"},next:{title:"Create & Import Accounts",permalink:"/docs/develop/metamask/multiple-accounts"}},u={},p=[{value:"Using-ETMPscan",id:"using-etmpscan",level:3},{value:"Add the ETM/P network manually",id:"add-the-etmp-network-manually",level:3}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to view the flow of funds in your accounts, on the Polygon Network, you will need to configure ETM/P ",(0,o.kt)("inlineCode",{parentName:"p"},"{testnet, mainnet}")," URL on Metamask."),(0,o.kt)("p",null,"There are two ways to do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/develop/metamask/config-etmp-on-metamask.md#Using-ETMPscan"},"Using ETMPscan")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/develop/metamask/config-etmp-on-metamask.md#add-the-etmp-network-manually"},"Add the ETM/P network manually"))),(0,o.kt)("h3",{id:"using-etmpscan"},"Using-ETMPscan"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please make sure you have already installed ",(0,o.kt)("ins",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"Metamask"))),"!"))),(0,o.kt)(r.Z,{defaultValue:"mainnet",values:[{label:"ETM/P-Mainnet",value:"mainnet"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,o.kt)("p",null,"Please follow the steps to add ETM/P\u2019s Mainnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://etm.network/"},"etm.network"))),(0,o.kt)("img",{src:(0,l.Z)("img/metamask/mainnet-button.png")}),(0,o.kt)("p",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,o.kt)("inlineCode",{parentName:"li"},"Add ETM/P Network"))),(0,o.kt)("img",{src:(0,l.Z)("img/metamask/mainnet-addnetwork.png")}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once you click the button you will see a Metamask Notification, now click on ",(0,o.kt)("strong",{parentName:"li"},"Approve"),".\nYou will be directly switched to ETM/P\u2019s Mainnet now in the network dropdown list. You can now close the dialog.")))),(0,o.kt)("p",null,"If you are facing any issue, ",(0,o.kt)("strong",{parentName:"p"},"Add the Network Manually(steps given below)")),(0,o.kt)("h3",{id:"add-the-etmp-network-manually"},"Add the ETM/P network manually"),(0,o.kt)(r.Z,{defaultValue:"mainnet",values:[{label:"ETM/P-Mainnet",value:"mainnet"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},"To add ETM/P\u2019s Mainnet, click on the Network selection dropdown and then click on Custom RPC.",(0,o.kt)("img",{src:(0,l.Z)("img/metamask/select-network.png")}),(0,o.kt)("p",null,"It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"ETM/P Mainnet")," in the Network Name field, URL ",(0,o.kt)("inlineCode",{parentName:"p"},"https://polygon-rpc.com/")," in the New RPC URL field, ",(0,o.kt)("inlineCode",{parentName:"p"},"137")," in Chain ID field, ",(0,o.kt)("inlineCode",{parentName:"p"},"MATIC")," in Currency Symbol field and ",(0,o.kt)("inlineCode",{parentName:"p"},"https://polygonscan.com/")," in Block Explorer URL field."),(0,o.kt)("img",{src:(0,l.Z)("img/metamask/metamask-settings-mainnet.png")}),(0,o.kt)("p",null,"Once you\u2019ve added the information click on Save. You will be directly switched to ETM/P\u2019s Mainnet now in the network dropdown list. You can now close the dialog."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You have successfully added ETM/P Network to your Metamask!")))}k.isMDXComponent=!0}}]);