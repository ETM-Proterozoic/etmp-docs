(self.webpackChunketmp=self.webpackChunketmp||[]).push([[3548],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7462),o=n(7294),a=n(6010),l=n(5999),c=n(6668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:p}}=(0,c.L)();return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",p?i:s),id:n}),u.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},u,{id:void 0}))}},3548:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ce});var r=n(7294),o=n(3905),a=n(7462),l=n(5742);var c=n(2389),s=n(6010),i=n(2949),u=n(6668);function p(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(7594),d=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:r}=y[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=o[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(y),t)}}(r,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=d+",":u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=s[p[t]].start+"-"+(d-1)+","),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{null!=m[e]||(m[e]=[]),m[e].push(t)}))})),{lineClassNames:m,code:n}}var v=n(5281);const k="codeBlockContainer_Ckt0";function E(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(p());return r.createElement(t,(0,a.Z)({},n,{style:o,className:(0,s.Z)(n.className,k,v.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return r.createElement(E,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:N.codeBlockLines},t))}const C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var j={Prism:n(7410).Z,theme:C};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var T=/\r\n|\r|\n/,Z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},L=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=O({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=O({},n,{backgroundColor:null}),o};function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const P=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),w(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=O({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?O({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),w(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),w(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=O({},x(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?O({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),w(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],s=[c];l>-1;){for(;(a=r[l]++)<o[l];){var i=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(T),d=m.length;c.push({types:u,content:m[0]});for(var f=1;f<d;f++)Z(c),s.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return Z(c),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),_="codeLine_lJS_",I="codeLineNumber_Tfdd",A="codeLineContent_feaV";function D(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,s.Z)(n,o&&_)}),u=t.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))));return r.createElement("span",i,o?r.createElement(r.Fragment,null,r.createElement("span",{className:I}),r.createElement("span",{className:A},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var V=n(5999);const z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),l=(0,r.useRef)(void 0),c=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),l&&(a.removeAllRanges(),a.addRange(l)),o&&o.focus()}(t),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,z.copyButton,o&&z.copyButtonCopied),onClick:c},r.createElement("span",{className:z.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:z.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:z.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const W="wordWrapButtonIcon_Bwma",H="wordWrapButtonEnabled_EoeP";function R(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&H),"aria-label":a,title:a},r.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function F(e){var t;let{children:n,className:o="",metastring:l,title:c,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:d,magicComments:g}}=(0,u.L)(),y=null!=(t=null!=m?m:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(o))?t:d,h=p(),v=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(f))?void 0:n.groups.title)?t:""}(l)||c,{lineClassNames:B,code:C}=b(n,{metastring:l,language:y,magicComments:g}),w=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(l);return r.createElement(E,{as:"div",className:(0,s.Z)(o,y&&!o.includes("language-"+y)&&"language-"+y)},k&&r.createElement("div",{className:N.codeBlockTitle},k),r.createElement("div",{className:N.codeBlockContent},r.createElement(P,(0,a.Z)({},j,{theme:h,code:C,language:null!=y?y:"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(D,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:B[t],showLineNumbers:w})))))})),r.createElement("div",{className:N.buttonGroup},(v.isEnabled||v.isCodeScrollable)&&r.createElement(R,{className:N.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),r.createElement(M,{className:N.codeButton,code:C}))))}function q(e){let{children:t,...n}=e;const o=(0,c.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?F:B;return r.createElement(s,(0,a.Z)({key:String(o)},n),l)}var $=n(9960);var G=n(6043);const Y="details_lb9f",U="isBrowser_bmU9",J="collapsibleContent_i85q";function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function X(e,t){return!!e&&(e===t||X(e.parentElement,t))}function Q(e){let{summary:t,children:n,...o}=e;const l=(0,c.Z)(),i=(0,r.useRef)(null),{collapsed:u,setCollapsed:p}=(0,G.u)({initialState:!o.open}),[m,d]=(0,r.useState)(o.open);return r.createElement("details",(0,a.Z)({},o,{ref:i,open:m,"data-collapsed":u,className:(0,s.Z)(Y,l&&U,o.className),onMouseDown:e=>{K(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;K(t)&&X(t,i.current)&&(e.preventDefault(),u?(p(!1),d(!0)):p(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(G.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),d(!e)}},r.createElement("div",{className:J},n)))}const ee="details_b_Ee";function te(e){let{...t}=e;return r.createElement(Q,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",ee,t.className)}))}var ne=n(2503);function re(e){return r.createElement(ne.Z,e)}const oe="containsTaskList_mC6p";const ae="img_ev3q";const le={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)))?r.createElement("code",e):r.createElement(q,e)},a:function(e){return r.createElement($.Z,e)},pre:function(e){var t;return r.createElement(q,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(te,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&oe))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,ae))}));var t},h1:e=>r.createElement(re,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(re,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(re,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(re,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(re,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(re,(0,a.Z)({as:"h6"},e))};function ce(e){let{children:t}=e;return r.createElement(o.Zo,{components:le},t)}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);