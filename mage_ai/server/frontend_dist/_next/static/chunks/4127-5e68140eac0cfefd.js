"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4127],{48591:function(n,e,t){var i=t(21831),o=t(75582),r=t(82684),l=t(37958);e.Z=function(n){var e=n.children,t=n.uuid,u=n.uuids,c=void 0===u?[]:u,a=(0,l.j)("apiReloads"),d=(0,o.Z)(a,1)[0],s=(0,i.Z)(c);t&&s.push(t);var f=s.map((function(n){return String(d[n])||"-"})).join("_");return r.cloneElement(e,{key:f})}},91207:function(n,e,t){t.d(e,{Z:function(){return N}});var i=t(82394),o=t(75582),r=t(17717),l=t(82684),u=t(37958),c=t(83455),a=t(35490),d=t(86422),s=t(60328),f=t(38626),v=t(93461),p=t(67971),h=t(28598),m=f.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),b=f.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),g=function(n){var e=n.children,t=n.divider,i=l.Children.toArray(e).length;return(0,h.jsx)(m,{children:(0,h.jsx)(p.Z,{children:l.Children.map(e,(function(n,e){return n&&(0,h.jsxs)(v.Z,{children:[e>=1&&t&&(0,h.jsx)(b,{}),l.cloneElement(n,{borderRadiusLeft:i>=2&&0===e,borderRadiusRight:i>=2&&e===i-1,halfPaddingLeft:i>=2&&0!==e,halfPaddingRight:i>=2&&e!==i-1,noBorder:i>=2&&e>0&&e<i-1,noBorderRight:i>=2&&e!==i-1})]},"button-group-child-".concat(e))}))})})},O=t(57722),y=t(73828),j=t(11135),x=t(98781),w=t(86673),C=t(82531),Z=t(16115),P=t(94353),S=t(60701),k=t(55512),D=t(24224),I=t(32821),M=t(90211),E=t(96510),_=t(51504),T=t(41150);function R(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?R(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var N=function(n){var e=n.active,t=n.addNewBlock,f=n.disableRefreshWarning,v=n.fetchPipeline,m=n.fetchVariables,b=n.filePath,R=n.hideHeaderButtons,N=n.onContentChange,H=n.openSidekickView,Y=n.pipeline,U=n.saveFile,F=n.selectedFilePath,L=n.sendTerminalMessage,W=n.setDisableShortcuts,B=n.setErrors,z=n.setFilesTouched,V=n.setSelectedBlock,X=(0,u.j)("apiReloads"),K=(0,o.Z)(X,2)[1],J=(0,l.useState)(null),G=J[0],q=J[1],Q=(0,l.useState)(!1),$=Q[0],nn=(Q[1],(0,l.useRef)(null)),en=(0,l.useMemo)((function(){return new a.Z}),[]),tn=(0,l.useMemo)((function(){return{api_key:P.l,token:en.decodedToken.token}}),[en]),on=C.ZP.statuses.list().data,rn=(0,l.useMemo)((function(){var n,e;return null===on||void 0===on||null===(n=on.statuses)||void 0===n||null===(e=n[0])||void 0===e?void 0:e.repo_path}),[on]),ln=C.ZP.file_contents.detail(b).data;(0,l.useEffect)((function(){null!==ln&&void 0!==ln&&ln.file_content&&q(ln.file_content)}),[ln]);var un=(0,l.useState)(null===G||void 0===G?void 0:G.content),cn=un[0],an=un[1],dn=(0,l.useCallback)((function(n){an(n),N&&(null===N||void 0===N||N(n))}),[N]),sn=(0,l.useState)(!1),fn=sn[0],vn=sn[1];(0,l.useEffect)((function(){e&&W&&(null===W||void 0===W||W(!0))}),[e,W]),(0,l.useEffect)((function(){var n;F&&(null===nn||void 0===nn||null===(n=nn.current)||void 0===n||n.scrollIntoView())}),[F]);var pn=(0,c.Db)(C.ZP.file_contents.useUpdate((null===G||void 0===G?void 0:G.path)&&encodeURIComponent(null===G||void 0===G?void 0:G.path)),{onSuccess:function(n){return(0,E.wD)(n,{callback:function(){K((function(n){return A(A({},n),{},(0,i.Z)({},"FileVersions/".concat(null===G||void 0===G?void 0:G.path),Number(new Date)))}))},onErrorCallback:function(n,e){return null===B||void 0===B?void 0:B({errors:e,response:n})}})}}),hn=(0,o.Z)(pn,1)[0],mn=(0,l.useCallback)((function(n,e){if(U)return U(n,e);hn({file_content:A(A({},e),{},{content:n})}).then((function(){decodeURIComponent(b).split(r.sep).pop()===y.dT.METADATA_YAML&&m&&(null===m||void 0===m||m())})),z((function(n){return A(A({},n),{},(0,i.Z)({},null===e||void 0===e?void 0:e.path,!1))})),vn(!1)}),[m,b,U,z,hn]),bn=(0,l.useMemo)((function(){return(0,k.lU)()}),[]),gn=(0,l.useMemo)((function(){var n,e,t,i;return null===(null===G||void 0===G||null===(n=G.path)||void 0===n?void 0:n.match(bn))?y.Lu.TXT:null===G||void 0===G||null===(e=G.path)||void 0===e||null===(t=e.match(bn))||void 0===t||null===(i=t[0])||void 0===i?void 0:i.split(".")[1]}),[bn,G]),On=(0,l.useMemo)((function(){if(null!==G&&void 0!==G&&G.path)return(0,h.jsx)(O.Z,{autoHeight:!0,language:y.nB[gn],onChange:function(n){dn(n),z((function(n){return A(A({},n),{},(0,i.Z)({},null===G||void 0===G?void 0:G.path,!0))})),vn(!0)},onSave:function(n){mn(n,G)},selected:!0,textareaFocused:!0,value:(0,M.Pb)(null===G||void 0===G?void 0:G.content)?JSON.stringify(JSON.parse(null===G||void 0===G?void 0:G.content),null,2):null===G||void 0===G?void 0:G.content,width:"100%"})}),[G,gn,mn,dn,z]),yn=null!==Y&&void 0!==Y&&Y.blocks?(0,D.sE)(null===Y||void 0===Y?void 0:Y.blocks,(function(n){var e=n.type;return d.tf.DATA_EXPORTER===e})):null,jn=(0,c.Db)(C.ZP.blocks.pipelines.useUpdate(null===Y||void 0===Y?void 0:Y.uuid,null===yn||void 0===yn?void 0:yn.uuid),{onSuccess:function(n){return(0,E.wD)(n,{callback:function(){null===v||void 0===v||v()}})}}),xn=(0,o.Z)(jn,1)[0],wn=t&&Y&&(gn===y.Lu.PY||gn===y.Lu.SQL||(gn===y.Lu.YAML||gn===y.Lu.R)&&(0,I.V3)(G,null===G||void 0===G?void 0:G.path))&&(0,k.ck)(G.path.split(r.sep))!==d.tf.SCRATCHPAD&&(0,I.lr)(G)&&(0,h.jsx)(s.Z,{onClick:function(){var n=(null===Y||void 0===Y?void 0:Y.type)===x.qL.INTEGRATION,e=(0,k.TU)(G,rn,Y);t(e,(function(e){n&&yn&&xn({block:A(A({},yn),{},{upstream_blocks:[e.uuid]})}),null===V||void 0===V||V(e)}))},primary:!0,children:"Add to current pipeline"}),Cn=L&&(0,h.jsx)(w.Z,{m:2,children:(0,h.jsx)(j.ZP,{disabled:!rn,inline:!0,loading:$,onClick:function(){null===H||void 0===H||H(S.cH.TERMINAL),null===L||void 0===L||L(JSON.stringify(A(A({},tn),{},{command:["stdin","pip install -r ".concat(rn,"/requirements.txt\r")]})))},title:rn?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Zn="FileEditor/".concat(null===G||void 0===G?void 0:G.path),Pn=(0,T.y)(),Sn=Pn.registerOnKeyDown,kn=Pn.unregisterOnKeyDown;return(0,l.useEffect)((function(){return function(){kn(Zn)}}),[kn,Zn]),Sn(Zn,(function(n,t){if(e&&!f)if((0,_.y)([Z.zX,Z.Um],t)||(0,_.y)([Z.PQ,Z.Um],t))n.preventDefault(),mn(cn,G);else if(fn&&(0,_.y)([Z.zX,Z.hS],t)){n.preventDefault();var i="".concat(G.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(i)&&location.reload()}}),[e,cn,f,G,mn,fn]),(0,h.jsxs)("div",{ref:nn,children:[!R&&(0,h.jsx)(w.Z,{p:2,children:(0,h.jsxs)(p.Z,{justifyContent:"space-between",children:[(0,h.jsxs)(g,{children:[wn,(0,h.jsx)(s.Z,{disabled:!cn,onClick:function(n){n.preventDefault(),mn(cn,G)},title:cn?null:"No changes have been made to this file.",children:"Save file content"})]}),H&&(0,h.jsx)(g,{children:(0,h.jsx)(s.Z,{compact:!0,onClick:function(){H(S.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),On,b===y.dT.REQS_TXT&&Cn]})}},23351:function(n,e,t){var i=t(82394),o=t(75582),r=t(17717),l=t(37958),u=t(82684),c=t(83455),a=t(60328),d=t(57722),s=t(73828),f=t(93461),v=t(67971),p=t(87372),h=t(86673),m=t(54283),b=t(87815),g=t(19711),O=t(82531),y=t(49125),j=t(55512),x=t(42305),w=t(90211),C=t(96510),Z=t(66653),P=t(24224),S=t(28598);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function D(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.onActionCallback,t=n.selectedBlock,k=n.selectedFilePath,I=n.setErrors,M=n.width,E=(0,l.j)("apiReloads"),_=(0,o.Z)(E,2)[1],T=O.ZP.file_versions.files.list(k&&encodeURIComponent(k)),R=T.data,A=T.mutate,N=(0,u.useMemo)((function(){return(null===R||void 0===R?void 0:R.file_versions)||[]}),[R]),H=(0,u.useState)(null),Y=H[0],U=H[1],F=(0,u.useMemo)((function(){return null===N||void 0===N?void 0:N[Y]}),[Y,N]),L=O.ZP.file_contents.detail(F?encodeURIComponent(F.path):null).data,W=(0,u.useMemo)((function(){return null===L||void 0===L?void 0:L.file_content}),[L]),B=(0,u.useMemo)((function(){return(0,j.lU)()}),[]),z=(0,u.useMemo)((function(){var n,e,t;return null===k||void 0===k||null===(n=k.match(B))||void 0===n||null===(e=n[0])||void 0===e||null===(t=e.split("."))||void 0===t?void 0:t[1]}),[k,B]),V=(0,c.Db)(O.ZP.file_contents.useUpdate(k&&encodeURIComponent(k)),{onSuccess:function(n){return(0,C.wD)(n,{callback:function(n){var t;k&&A();var o=null===n||void 0===n||null===(t=n.file_content)||void 0===t?void 0:t.path,l="FileEditor/".concat(o);if(o){var u=o.split(r.sep);if("pipelines"===u[0]){var c=u.slice(1,u.length-1).join(r.sep);l="PipelineDetail/".concat(c)}}_((function(n){return D(D({},n),{},(0,i.Z)({},l,Number(new Date)))})),U((function(n){return n+1})),null===e||void 0===e||e(n)},onErrorCallback:function(n,e){return I({errors:e,response:n})}})}}),X=(0,o.Z)(V,2),K=X[0],J=X[1].isLoading,G=(0,u.useMemo)((function(){var n=N.map((function(n){var e=n.name,t=n.path;return[(0,S.jsxs)(v.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,S.jsxs)(f.Z,{flex:1,children:[(0,S.jsx)(g.ZP,{default:!0,monospace:!0,children:(0,x.JX)(e,{withSeconds:!0})}),(0,S.jsx)(h.Z,{px:2*y.cd,children:(0,S.jsx)(g.ZP,{monospace:!0,children:e})})]}),F&&(null===F||void 0===F?void 0:F.path)===t&&(0,S.jsx)(a.Z,{compact:!0,loading:J,onClick:function(n){(0,Z.j)(n),K({file_content:{version:e}})},small:!0,children:"Replace with this version"})]},e)]}));if(F){var e=(0,S.jsx)(h.Z,{p:y.cd,children:(0,S.jsx)(m.Z,{},"spinner")});if(W&&(null===W||void 0===W?void 0:W.path)===(null===F||void 0===F?void 0:F.path)){var t=W.content,i=void 0===t?"":t;e=(0,S.jsx)(d.Z,{autoHeight:!0,language:s.nB[z],padding:!0,readOnly:!0,value:(0,w.Pb)(i)?JSON.stringify(JSON.parse(i),null,2):i,width:M})}n=(0,P.Hk)([e],Y+1,n)}return n}),[W,z,N,J,F,Y,K,M]);return(0,S.jsxs)("div",{style:{width:M},children:[(0,S.jsxs)(h.Z,{p:y.cd,children:[(0,S.jsx)(p.Z,{level:5,children:"File versions"}),(0,S.jsx)(g.ZP,{inline:!0,monospace:!0,children:k?decodeURIComponent(k):null===t||void 0===t?void 0:t.uuid})]}),(0,S.jsx)(b.Z,{buildRowProps:function(n){if(F&&Y+1===n)return{renderCell:function(n){return n},renderRow:function(n){return n}}},columnFlex:[1],columns:[{uuid:"Version"}],isSelectedRow:function(n){var e;return(null===(e=N[n])||void 0===e?void 0:e.name)===(null===F||void 0===F?void 0:F.name)},onClickRow:function(n){F?n===Y?U(null):n<Y?U(n):n>Y+1&&U(n-1):U(n)},rows:G})]})}},38488:function(n,e,t){t.d(e,{Z:function(){return Z}});var i=t(82394),o=t(26304),r=t(82684),l=t(38626),u=t(16634),c=t(67971),a=t(10919),d=t(86673),s=t(19711),f=t(46261),v=t(23831),p=t(10503),h=t(28347),m=t(49125),b=t(33766),g=t(66653),O=t(28598);var y=function(n){var e=n.filePath,t=n.filesTouched,i=void 0===t?{}:t,o=n.isLast,l=n.onClickTab,y=n.onClickTabClose,j=n.renderTabTitle,x=n.savePipelineContent,w=n.selected,C=n.themeContext,Z=(0,r.useState)(!1),P=Z[0],S=Z[1];return(0,O.jsx)(c.Z,{flexDirection:"column",fullHeight:!0,onClick:function(n){n.preventDefault(),w||(l?l(e):(null===x||void 0===x||x(),(0,b.u7)({file_path:encodeURIComponent(e)})))},onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:(0,O.jsx)(h.Gb,{last:o,selected:w,children:(0,O.jsxs)(c.Z,{alignItems:"center",fullHeight:!0,children:[(0,O.jsx)(f.Z,{appearAbove:!0,appearBefore:!0,label:e,size:null,widthFitContent:!0,children:(0,O.jsxs)(c.Z,{alignItems:"center",fullHeight:!0,children:[!i[e]&&(0,O.jsx)(p.iU,{muted:!w,size:1.5*m.iI}),i[e]&&(0,O.jsx)(f.Z,{label:"Unsaved changes",size:null,widthFitContent:!0,children:(0,O.jsx)("div",{style:{padding:1},children:(0,O.jsx)(u.Z,{borderColor:(C||v.Z).borders.danger,size:1.25*m.iI})})}),(0,O.jsx)(d.Z,{mr:1}),(0,O.jsx)(s.ZP,{muted:!w,children:j?j(e):e})]})}),(0,O.jsx)(d.Z,{mr:2}),(0,O.jsx)(f.Z,{label:"Close",size:null,widthFitContent:!0,children:(0,O.jsxs)(a.Z,{autoHeight:!0,block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(n){(0,g.j)(n),null===y||void 0===y||y(e)},preventDefault:!0,children:[(P||w)&&(0,O.jsx)(p.x8,{muted:!w,size:1.25*m.iI}),!P&&!w&&(0,O.jsx)("div",{style:{width:1.25*m.iI}})]})})]})})})},j=t(24224),x=["filePaths","isSelectedFilePath","onClickTabClose","selectedFilePath"];function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Z=function(n){var e=n.filePaths,t=n.isSelectedFilePath,i=n.onClickTabClose,u=n.selectedFilePath,a=(0,o.Z)(n,x),d=(0,r.useContext)(l.ThemeContext),s=(0,r.useMemo)((function(){return e.map((function(n){return decodeURIComponent(n)}))}),[e]),f=(0,r.useMemo)((function(){return null===s||void 0===s?void 0:s.length}),[s]);return(0,O.jsx)(c.Z,{alignItems:"center",justifyContent:"flex-start",children:null===s||void 0===s?void 0:s.map((function(n,e){var o=t?t(n,u):u===encodeURIComponent(n);return(0,r.createElement)(y,C(C({},a),{},{filePath:n,isLast:e===f-1,key:n,onClickTabClose:function(n){if(i)i(n);else{var e=(0,j.Od)(s,(function(e){return e===n})).map((function(n){return encodeURIComponent(n)}));(0,b.u7)({file_path:e[e.length-1]||null,"file_paths[]":e},{pushHistory:!0})}},selected:o,themeContext:d}))}))})}},28347:function(n,e,t){t.d(e,{Gb:function(){return f},fm:function(){return d},lO:function(){return a},rK:function(){return s},zn:function(){return c}});var i=t(38626),o=t(23831),r=t(82386),l=t(49125),u=t(37391),c=300,a=i.default.div.withConfig({displayName:"indexstyle__PipelineContainerStyle",componentId:"sc-1sv9513-0"})([".pipeline-detail-enter-active{opacity:1;transition:opacity ","ms linear;}.pipeline-detail-enter-done{opacity:0;transition:opacity ","ms linear;}"],c,c),d=i.default.div.withConfig({displayName:"indexstyle__OverlayStyle",componentId:"sc-1sv9513-1"})(["height:100vh;opacity:1;position:fixed;width:100vw;z-index:9999;",""],(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeArea,";\n  ")})),s=i.default.div.withConfig({displayName:"indexstyle__PipelineHeaderStyle",componentId:"sc-1sv9513-2"})(["height:","px;position:sticky;top:","px;width:100%;z-index:5;"," "," "," ",""],r.Wi,r.Wi,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||o.Z.borders).medium,";\n  ")}),(function(n){return n.relativePosition&&"\n    position: relative;\n  "}),(function(n){return n.secondary&&"\n    height: ".concat(37,"px;\n    top: ").concat(r.Wi,"px;\n    overflow-x: auto;\n    z-index: 3;\n  ")}),(0,u.y$)()),f=i.default.div.withConfig({displayName:"indexstyle__FileTabStyle",componentId:"sc-1sv9513-3"})(["border-right:1px solid transparent;height:100%;padding:","px ","px;"," "," ",""],l.iI,l.cd*l.iI,(function(n){return"\n    &:hover {\n      cursor: default;\n\n      p {\n        color: ".concat((n.theme.content||o.Z.content).active," !important;\n        cursor: default;\n      }\n    }\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||o.Z.interactive).hoverBackground,";\n  ")}),(function(n){return!n.selected&&!n.last&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).light," !important;\n  ")}))},37958:function(n,e,t){t.d(e,{j:function(){return i}});var i=(0,t(44152).r)({apiReloads:{}}).useGlobalState},42305:function(n,e,t){t.d(e,{A5:function(){return O},AY:function(){return y},BP:function(){return g},JX:function(){return b},OC:function(){return s},Pc:function(){return j},Ro:function(){return x},Tz:function(){return m},Y_:function(){return C},d$:function(){return h},jV:function(){return w},lJ:function(){return Z},n1:function(){return v},s8:function(){return a},vk:function(){return r},yD:function(){return d}});var i,o,r,l=t(82394),u=t(92083),c=t.n(u);!function(n){n.TODAY="today",n.WEEK="week",n.MONTH="month"}(r||(r={}));var a=(i={},(0,l.Z)(i,r.TODAY,"today"),(0,l.Z)(i,r.WEEK,"last 7 days"),(0,l.Z)(i,r.MONTH,"last 30 days"),i),d=(o={},(0,l.Z)(o,r.TODAY,0),(0,l.Z)(o,r.WEEK,6),(0,l.Z)(o,r.MONTH,29),o),s="YYYY-MM-DD HH:mm:ss",f="YYYY-MM-DD HH:mm",v="YYYY-MM-DD",p="MMMM D, YYYY";function h(n,e){var t=e.dayAgo,i=e.includeSeconds,o=e.utcFormat,r=c()(n),l=f;return o&&(r=r.utc()),t&&(r=r.subtract(1,"days")),i&&(l=s),r.format(l)}function m(n){var e=h((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==n&&void 0!==n&&n.dateObj?new Date(e):e}function b(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c().unix(n).format(null!==e&&void 0!==e&&e.withSeconds?s:f)}function g(n,e,t){return c()(n).utc().hours(+e).minutes(+t).format()}function O(n){return c()(n).unix()}function y(n,e,t,i){var o="".concat(n.toISOString().split("T")[0]," ").concat(e,":").concat(t);return i?"".concat(o,":").concat(i):o}function j(n){var e=c().unix(+n).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function x(n,e){var t=c().utc(),i=c().utc();null!==e&&void 0!==e&&e.localTime&&(t=c()().local(),i=c()().local());var o=(t=t.subtract(n,"days")).format(p),r=i.format(p);return null!==e&&void 0!==e&&e.endDateOnly?r:"".concat(o," - ").concat(r)}function w(n,e){var t=null!==e&&void 0!==e&&e.localTime?c()().local():c().utc();if(n===r.WEEK){var i=d[r.WEEK];t=t.subtract(i,"days")}else if(n===r.MONTH){var o=d[r.MONTH];t=t.subtract(o,"days")}return null!==e&&void 0!==e&&e.isoString?t.startOf("day").toISOString():t.startOf("day").format(s)}function C(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,e=new Date,t=[],i=0;i<n;i++)t.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return t}function Z(n){return n.padStart(2,"0")}},54405:function(n,e,t){var i;t.d(e,{V5:function(){return r}}),function(n){n.ANDROID="Android",n.CHROME_OS="ChromeOS",n.IOS="iOS",n.LINUX="Linux",n.MAC="macOS",n.WINDOWS="Windows"}(i||(i={}));var o=i;function r(){return function(){var n,e,t,i,r,l,u,c=o.MAC,a=null===(n=window)||void 0===n||null===(e=n.navigator)||void 0===e?void 0:e.userAgent,d=(null===(t=window)||void 0===t||null===(i=t.navigator)||void 0===i||null===(r=i.userAgentData)||void 0===r?void 0:r.platform)||(null===(l=window)||void 0===l||null===(u=l.navigator)||void 0===u?void 0:u.platform);return d?["macOS","Macintosh","MacIntel","MacPPC","Mac68K"].includes(d)?c=o.MAC:["Win32","Win64","Windows","WinCE"].includes(d)?c=o.WINDOWS:["iPhone","iPad","iPod"].includes(d)&&(c=o.IOS):a&&(a.includes("Macintosh")?c=o.MAC:a.includes("Windows")?c=o.WINDOWS:a.includes("Linux")&&a.includes("X11")?c=o.LINUX:/(iPhone|iPad)/.test(a)?c=o.IOS:a.includes("Android")&&a.includes("Mobi")?c=o.ANDROID:a.includes("CrOS")&&(c=o.CHROME_OS)),c}()===o.MAC}}}]);