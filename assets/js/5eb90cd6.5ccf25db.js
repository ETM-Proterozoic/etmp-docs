"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),m=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:d,groupId:k,className:f}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[T,E]=(0,o.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:M}=(0,m.o5)();if(null!=k){const e=g[k];null!=e&&e!==T&&h.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==T&&(M(t),E(a),null!=k&&w(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:P,onClick:P},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},4641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4996),l=n(5488),i=n(5162);const s={id:"config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},m=void 0,u={unversionedId:"develop/metamask/config-etmp-on-metamask",id:"develop/metamask/config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/develop/metamask/config-ETM3-on-metamask.md",sourceDirName:"develop/metamask",slug:"/develop/metamask/config-etmp-on-metamask",permalink:"/docs/develop/metamask/config-etmp-on-metamask",draft:!1,editUrl:"/docs/develop/metamask/config-ETM3-on-metamask.md",tags:[],version:"current",frontMatter:{id:"config-etmp-on-metamask",title:"Add ETM/P Network",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"development",previous:{title:"Hello Metamask",permalink:"/docs/develop/metamask/hello"},next:{title:"Create & Import Accounts",permalink:"/docs/develop/metamask/multiple-accounts"}},c={},p=[{value:"Using-ETMPscan",id:"using-etmpscan",level:3},{value:"Add the ETM/P network manually",id:"add-the-etmp-network-manually",level:3}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to view the flow of funds in your accounts, on the Polygon Network, you will need to configure ETM/P ",(0,o.kt)("inlineCode",{parentName:"p"},"{testnet, mainnet}")," URL on Metamask."),(0,o.kt)("p",null,"There are two ways to do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/develop/metamask/config-etmp-on-metamask.md#Using-ETMPscan"},"Using ETMPscan")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/develop/metamask/config-etmp-on-metamask.md#add-the-etmp-network-manually"},"Add the ETM/P network manually"))),(0,o.kt)("h3",{id:"using-etmpscan"},"Using-ETMPscan"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please make sure you have already installed ",(0,o.kt)("ins",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"Metamask"))),"!")),(0,o.kt)(l.Z,{defaultValue:"mainnet",values:[{label:"ETM/P-Mainnet",value:"mainnet"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,o.kt)("p",null,"Please follow the steps to add ETM/P\u2019s Mainnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://etm.network/"},"etm.network"))),(0,o.kt)("img",{src:(0,r.Z)("img/metamask/mainnet-button.png")}),(0,o.kt)("p",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,o.kt)("inlineCode",{parentName:"li"},"Add ETM/P Network"))),(0,o.kt)("img",{src:(0,r.Z)("img/metamask/mainnet-addnetwork.png")}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once you click the button you will see a Metamask Notification, now click on ",(0,o.kt)("strong",{parentName:"li"},"Approve"),".\nYou will be directly switched to ETM/P\u2019s Mainnet now in the network dropdown list. You can now close the dialog.")))),(0,o.kt)("p",null,"If you are facing any issue, ",(0,o.kt)("strong",{parentName:"p"},"Add the Network Manually(steps given below)")),(0,o.kt)("h3",{id:"add-the-etmp-network-manually"},"Add the ETM/P network manually"),(0,o.kt)(l.Z,{defaultValue:"mainnet",values:[{label:"ETM/P-Mainnet",value:"mainnet"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},"To add ETM/P\u2019s Mainnet, click on the Network selection dropdown and then click on Custom RPC.",(0,o.kt)("img",{src:(0,r.Z)("img/metamask/select-network.png")}),(0,o.kt)("p",null,"It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"ETM/P Mainnet")," in the Network Name field, URL ",(0,o.kt)("inlineCode",{parentName:"p"},"https://polygon-rpc.com/")," in the New RPC URL field, ",(0,o.kt)("inlineCode",{parentName:"p"},"137")," in Chain ID field, ",(0,o.kt)("inlineCode",{parentName:"p"},"MATIC")," in Currency Symbol field and ",(0,o.kt)("inlineCode",{parentName:"p"},"https://polygonscan.com/")," in Block Explorer URL field."),(0,o.kt)("img",{src:(0,r.Z)("img/metamask/metamask-settings-mainnet.png")}),(0,o.kt)("p",null,"Once you\u2019ve added the information click on Save. You will be directly switched to ETM/P\u2019s Mainnet now in the network dropdown list. You can now close the dialog."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You have successfully added ETM/P Network to your Metamask!")))}k.isMDXComponent=!0}}]);