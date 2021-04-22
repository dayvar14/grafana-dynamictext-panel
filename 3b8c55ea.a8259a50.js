(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{80:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return g})),n.d(a,"metadata",(function(){return v})),n.d(a,"toc",(function(){return O})),n.d(a,"default",(function(){return h}));var t=n(3),l=n(7),i=n(0),r=n.n(i),s=n(87),o=n(90),c=n(82),u=n(72),b=n.n(u),p=37,m=39;var d=function(e){var a=e.lazy,n=e.block,t=e.defaultValue,l=e.values,s=e.groupId,u=e.className,d=Object(o.a)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,v=Object(i.useState)(t),O=v[0],j=v[1],h=i.Children.toArray(e.children);if(null!=s){var y=f[s];null!=y&&y!==O&&l.some((function(e){return e.value===y}))&&j(y)}var x=function(e){j(e),null!=s&&g(s,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},u)},l.map((function(e){var a=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case m:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return x(a)},onClick:function(){x(a)}},n)}))),a?Object(i.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return Object(i.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))};var f=function(e){var a=e.children,n=e.hidden,t=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:t},a)},g={id:"installation",title:"Installation"},v={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You can install the plugin using grafana-cli, or by downloading the plugin manually.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/grafana-dynamictext-panel/installation",editUrl:"https://github.com/marcusolsson/grafana-dynamictext-panel/edit/main/website/docs/installation.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/grafana-dynamictext-panel/"},next:{title:"Options",permalink:"/grafana-dynamictext-panel/options"}},O=[{value:"Install using grafana-cli",id:"install-using-grafana-cli",children:[]},{value:"Install manually",id:"install-manually",children:[]}],j={toc:O};function h(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},j,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can install the plugin using ",Object(s.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/cli/"},"grafana-cli"),", or by downloading the plugin manually."),Object(s.b)("h2",{id:"install-using-grafana-cli"},"Install using grafana-cli"),Object(s.b)("p",null,"To install the latest version of the plugin, run the following command on the Grafana server:"),Object(s.b)(d,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(f,{value:"linux",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"grafana-cli plugins install marcusolsson-dynamictext-panel\n"))),Object(s.b)(f,{value:"macos",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"grafana-cli plugins install marcusolsson-dynamictext-panel\n"))),Object(s.b)(f,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"grafana-cli.exe plugins install marcusolsson-dynamictext-panel\n")))),Object(s.b)("h2",{id:"install-manually"},"Install manually"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Go to ",Object(s.b)("a",{parentName:"p",href:"https://github.com/marcusolsson/grafana-dynamictext-panel/releases"},"Releases")," on the GitHub project page")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Find the release you want to install")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Download the release by clicking the release asset called ",Object(s.b)("inlineCode",{parentName:"p"},"marcusolsson-dynamictext-panel-<version>.zip"),". You may need to uncollapse the ",Object(s.b)("strong",{parentName:"p"},"Assets")," section to see it.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Unarchive the plugin into the Grafana plugins directory"),Object(s.b)(d,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(f,{value:"linux",mdxType:"TabItem"},Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"unzip marcusolsson-dynamictext-panel-<version>.zip\nmv marcusolsson-dynamictext-panel /var/lib/grafana/plugins\n"))),Object(s.b)(f,{value:"macos",mdxType:"TabItem"},Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"unzip marcusolsson-dynamictext-panel-<version>.zip\nmv marcusolsson-dynamictext-panel /usr/local/var/lib/grafana/plugins\n"))),Object(s.b)(f,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"Expand-Archive -Path marcusolsson-dynamictext-panel-<version>.zip -DestinationPath C:\\grafana\\data\\plugins\n"))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Restart the Grafana server to load the plugin"))))}h.isMDXComponent=!0}}]);