"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[7612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"truffle",title:"Using Truffle",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},l=void 0,i={unversionedId:"develop/deploying/truffle",id:"develop/deploying/truffle",title:"Using Truffle",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/develop/deploying/truffle.md",sourceDirName:"develop/deploying",slug:"/develop/deploying/truffle",permalink:"/docs/develop/deploying/truffle",draft:!1,editUrl:"/docs/develop/deploying/truffle.md",tags:[],version:"current",frontMatter:{id:"truffle",title:"Using Truffle",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"development",previous:{title:"Using Remix",permalink:"/docs/develop/deploying/remix"},next:{title:"Using Hardhat",permalink:"/docs/develop/deploying/hardhat"}},s={},p=[{value:"<strong>Setting up the development environment</strong>",id:"setting-up-the-development-environment",level:2},{value:"<strong>truffle-config</strong>",id:"truffle-config",level:2},{value:"<strong>Deploying on ETM/P Network</strong>",id:"deploying-on-etmp-network",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-the-development-environment"},(0,o.kt)("strong",{parentName:"h2"},"Setting up the development environment")),(0,o.kt)("p",null,"There are a few technical requirements before we start. Please install the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v8+ LTS and npm"),"\xa0(comes with Node)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,o.kt)("p",null,"Once we have those installed, we only need one command to install Truffle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,o.kt)("p",null,"To verify that Truffle is installed properly, type\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"truffle version")),"\xa0on a terminal. If you see an error, make sure that your npm modules are added to your path."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're new to Truffle then please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/quickstart"},"Getting Started")," by truffle, To setup the truffle environment. ")),(0,o.kt)("h2",{id:"truffle-config"},(0,o.kt)("strong",{parentName:"h2"},"truffle-config")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to truffle-config.js"),(0,o.kt)("li",{parentName:"ul"},"Update the truffle-config with etmp-network-crendentials.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\nconst fs = require(\'fs\');\nconst mnemonic = fs.readFileSync(".secret").toString().trim();\n\nmodule.exports = {\n  networks: {\n    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard Ethereum port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n    etmp: {\n      provider: () => new HDWalletProvider(mnemonic, `https://rpc.pioneer.etm.network`),\n      network_id: 49,\n      confirmations: 2,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    // timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Notice, it requires mnemonic to be passed in for maticProvider, this is the seed phrase for the account you'd like to deploy from. Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words. "),(0,o.kt)("h2",{id:"deploying-on-etmp-network"},(0,o.kt)("strong",{parentName:"h2"},"Deploying on ETM/P Network")),(0,o.kt)("p",null,"Add ETM/P to your wallet using Metamask"),(0,o.kt)("p",null,"Run this command in root of the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$ truffle migrate --network etmp\n")),(0,o.kt)("p",null,"Contract will be deployed on ETM/P's Testnet, it look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"2_deploy_contracts.js\n=====================\n\n   Replacing 'MyContract'\n   ------------------\n   > transaction hash:    0x1c94d095a2f629521344885910e6a01076188fa815a310765679b05abc09a250\n   > Blocks: 5            Seconds: 5\n   > contract address:    0xbFa33D565Fcb81a9CE8e7a35B61b12B04220A8EB\n   > block number:        2371252\n   > block timestamp:     1578238698\n   > account:             0x9fB29AAc15b9A4B7F17c3385939b007540f4d791\n   > balance:             79.409358061899298312\n   > gas used:            1896986\n   > gas price:           0 gwei\n   > value sent:          0 ETH\n   > total cost:          0 ETH\n\n   Pausing for 2 confirmations...\n   ------------------------------\n   > confirmation number: 5 (block: 2371262)\ninitialised!\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:                   0 ETH\n\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0 ETH\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!"),"\xa0You have successfully deployed HelloWorld Smart Contract. Now you can interact with the Smart Contract."),(0,o.kt)("p",null,"You can check the deployment status here: ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.etmscan.network"},"https://testnet.etmscan.network")))}u.isMDXComponent=!0}}]);