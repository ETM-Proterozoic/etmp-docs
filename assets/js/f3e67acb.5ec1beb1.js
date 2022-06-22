"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[4429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||r;return n?s.createElement(d,a(a({ref:t},u),{},{components:n})):s.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(7462),o=(n(7294),n(3905));const r={id:"consensus-mechanism",title:"Consensus Mechanism",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},a=void 0,i={unversionedId:"basics/consensus-mechanism",id:"basics/consensus-mechanism",title:"Consensus Mechanism",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/basics/basics-consensus-mechanism.md",sourceDirName:"basics",slug:"/basics/consensus-mechanism",permalink:"/docs/basics/consensus-mechanism",draft:!1,editUrl:"/docs/basics/basics-consensus-mechanism.md",tags:[],version:"current",frontMatter:{id:"consensus-mechanism",title:"Consensus Mechanism",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"introduction",previous:{title:"Types of Blockchain",permalink:"/docs/basics/blockchain-types"},next:{title:"Ethereum",permalink:"/docs/basics/ethereum"}},c={},l=[{value:"Types of Consensus Mechanism",id:"types-of-consensus-mechanism",level:2},{value:"<strong>\ud83d\udcdcResources</strong>",id:"resources",level:3}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Consensus mechanism is a fault-tolerant mechanism that is used in computer and blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed processes or multi-agent systems, such as with cryptocurrencies."),(0,o.kt)("h2",{id:"types-of-consensus-mechanism"},"Types of Consensus Mechanism"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PoW: Proof of Work ",(0,o.kt)("br",null),"\nProof of work describes a system that requires a not-insignificant but feasible amount of effort in order to deter dos(denial-of-service) attacks and other malicious attacks. It requires to solve a computational challenging puzzle in order to create new blocks in Blockchain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PoS: Proof of Stake ",(0,o.kt)("br",null),"\nProof-of-Stake mechanism achieve consensus by requiring users to stake an amount of their tokens so as to have a chance of being selected to validate blocks of transactions, and get rewarded for doing so. Priority is given to miners who have purchased the most stake in the blockchain system."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DPoS: Delegated Proof of Stake ",(0,o.kt)("br",null),"\nThis form of consensus mirrors the election of members in governing bodies. Witnesses, those who validate transactions, are elected.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PoSpace: Proof of Space ",(0,o.kt)("br",null),"\nThis kind of consensus mechanism is useful in decentralized file storage applications like storj.io, filecoin, where nodes prove they have legitimate capacity in their hardware. Sometimes also referred as PoStorage or PoCapacity.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PoET: Proof of Elapsed Time ",(0,o.kt)("br",null),"\nA better alternative to PoW, consuming lesser computational resources. Each participating node needs to wait for a random amount of time and very first node to wake up from sleep gets a chance to create new block, which is then propagated through network. Requires Trusted Execution Environments ( TEE ) like Intel SGX, which are isolated part of memory, can only be accessed using certain set of instructions."))),(0,o.kt)("h3",{id:"resources"},(0,o.kt)("strong",{parentName:"h3"},"\ud83d\udcdcResources")),(0,o.kt)("p",null,"\ud83d\udcc4 ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419"},"Byzantine Fault Tolerance")," ",(0,o.kt)("br",null),"\n\ud83d\udcc4 ",(0,o.kt)("a",{parentName:"p",href:"https://www.codementor.io/blog/consensus-algorithms-5lr8exfi0s#types-of-consensus-algorithms"},"Type of Consensus Mechanisms")," ",(0,o.kt)("br",null),"\n\ud83d\udcc4 ",(0,o.kt)("a",{parentName:"p",href:"https://blog.wavesplatform.com/review-of-blockchain-consensus-mechanisms-f575afae38f2"},"Review of Blockchain Consensus Mechanisms")," ",(0,o.kt)("br",null),"\n\ud83c\udfa7 ",(0,o.kt)("a",{parentName:"p",href:"https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/"},"Overview and History of Consensus System Development")," ",(0,o.kt)("br",null),"\n\ud83d\udcd7 ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/s/story/lets-take-a-crack-at-understanding-distributed-consensus-dad23d0dc95"},"Understanding Distributed Consensus")," ",(0,o.kt)("br",null),"\n\ud83d\udcda ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault#Byzantine_Generals'_Problem"},"Byzantine Generals Problem")))}m.isMDXComponent=!0}}]);