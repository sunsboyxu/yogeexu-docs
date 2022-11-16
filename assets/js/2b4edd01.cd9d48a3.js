"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[8708],{3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>u});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var h=n.createContext({}),p=function(e){var t=n.useContext(h),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},i=function(e){var t=p(e.components);return n.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,h=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(l),u=r,d=c["".concat(h,".").concat(u)]||c[u]||m[u]||a;return l?n.createElement(d,o(o({ref:t},i),{},{components:l})):n.createElement(d,o({ref:t},i))}));function u(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=c;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},4509:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=l(7462),r=(l(7294),l(3905));const a={},o="macOS terminal",s={unversionedId:"macos/Terminal",id:"macos/Terminal",title:"macOS terminal",description:"macOS \u7cfb\u7edf\u4e0b\uff0c\u7ec8\u7aef\u7684\u4f7f\u7528\u548c\u7f8e\u5316\u7b49\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528 iterm2 + oh-my-posh",source:"@site/docs/macos/Terminal.md",sourceDirName:"macos",slug:"/macos/Terminal",permalink:"/yogeexu-docs/macos/Terminal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Mac doc",permalink:"/yogeexu-docs/macos/Macuse"},next:{title:"windows \u7cfb\u7edf",permalink:"/yogeexu-docs/windows/"}},h={},p=[{value:"zsh",id:"zsh",level:2},{value:"iterm2",id:"iterm2",level:2},{value:"item2 \u76f8\u5173",id:"item2-\u76f8\u5173",level:3},{value:"oh-my-posh",id:"oh-my-posh",level:2},{value:"\u901a\u8fc7 homebrew \u6765\u5b89\u88c5 oh-my-posh",id:"\u901a\u8fc7-homebrew-\u6765\u5b89\u88c5-oh-my-posh",level:3},{value:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e\uff0c\u4ee5\u53ca\u521d\u59cb\u5316 oh-my-posh \u4e3b\u9898",id:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u4ee5\u53ca\u521d\u59cb\u5316-oh-my-posh-\u4e3b\u9898",level:3},{value:"\u624b\u52a8 Nerd \u5b57\u4f53\u4e0b\u8f7d \u548c \u5b89\u88c5",id:"\u624b\u52a8-nerd-\u5b57\u4f53\u4e0b\u8f7d-\u548c-\u5b89\u88c5",level:3},{value:"\u901a\u8fc7 homebrew \u5b89\u88c5 Nerd \u5b57\u4f53",id:"\u901a\u8fc7-homebrew-\u5b89\u88c5-nerd-\u5b57\u4f53",level:3},{value:"oh-my-zsh",id:"oh-my-zsh",level:2},{value:"\u5378\u8f7d oh-my-zsh",id:"\u5378\u8f7d-oh-my-zsh",level:3},{value:"Powershell",id:"powershell",level:2},{value:"\u5378\u8f7d Powershell",id:"\u5378\u8f7d-powershell",level:2},{value:"PowerShell \u4e2d\u7528\u4e8e\u5b58\u50a8\u72b6\u6001\u4fe1\u606f\u7684\u81ea\u52a8\u53d8\u91cf",id:"powershell-\u4e2d\u7528\u4e8e\u5b58\u50a8\u72b6\u6001\u4fe1\u606f\u7684\u81ea\u52a8\u53d8\u91cf",level:2},{value:"\u5e38\u7528\u8def\u5f84\u8bf4\u660e",id:"\u5e38\u7528\u8def\u5f84\u8bf4\u660e",level:2}],i={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos-terminal"},"macOS terminal"),(0,r.kt)("p",null,"macOS \u7cfb\u7edf\u4e0b\uff0c\u7ec8\u7aef\u7684\u4f7f\u7528\u548c\u7f8e\u5316\u7b49\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528 iterm2 + oh-my-posh"),(0,r.kt)("p",null,"\u67e5\u770b\u67d0\u4e2a\u5e94\u7528\u7684\u5b89\u88c5\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b node \u7684\u5b89\u88c5\u76ee\u5f55\nwhich node\n# /usr/local/bin/node\n")),(0,r.kt)("h2",{id:"zsh"},"zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zsh --version\n# zsh 5.8.1 (x86_64-apple-darwin21.0)\n")),(0,r.kt)("h2",{id:"iterm2"},"iterm2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2\u5b98\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iterm2.com/downloads.html"},"iTerm2\u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_41037571/article/details/121184107"},"iTerm2\u4f7f\u7528\u6307\u5357")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_42292229/article/details/118675128"},"iTerm2\u914d\u7f6e\u548c\u7f8e\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/thinkdiff/article/details/25075047"},"iterm2\u7528\u6cd5\u4e0e\u6280\u5de7"))),(0,r.kt)("p",null,"\u89e3\u538b\u4e0b\u8f7d\u7684 iterm2 \u538b\u7f29\u5305 -> \u5c06 iTerm.app \u62d6\u5230 \u5e94\u7528\u7a0b\u5e8f \u4e2d\u5373\u53ef"),(0,r.kt)("h3",{id:"item2-\u76f8\u5173"},"item2 \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_31293841/article/details/113023261"},"iterm2\u4e0b\u8f7d\u592a\u6162_\u89e3\u51b3zsh\u542f\u52a8\u901f\u5ea6\u6162\u7684\u4f18\u5316\u65b9\u6cd5"))),(0,r.kt)("h2",{id:"oh-my-posh"},"oh-my-posh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyposh.dev/"},"oh-my-posh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sspai.com/post/69911"},"oh-my-posh \u5168\u5e73\u53f0\u7ec8\u7aef\u63d0\u793a\u7b26\u4e2a\u6027\u5316\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wxhboy.cn/2022/04/16/%E4%BD%BF%E7%94%A8ohmyposh%E7%BE%8E%E5%8C%96%E7%BB%88%E7%AB%AF/"},"\u4f7f\u7528 oh-my-posh \u7f8e\u5316\u7ec8\u7aef"))),(0,r.kt)("h3",{id:"\u901a\u8fc7-homebrew-\u6765\u5b89\u88c5-oh-my-posh"},"\u901a\u8fc7 homebrew \u6765\u5b89\u88c5 oh-my-posh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5148\u67e5\u770b\u4e0b oh-my-posh\nbrew search oh-my-posh\n\n# \u901a\u8fc7 homebrew \u5b89\u88c5 oh-my-posh\nbrew tap JanDeDobbeleer/oh-my-posh && brew install oh-my-posh\n")),(0,r.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u4ee5\u53ca\u521d\u59cb\u5316-oh-my-posh-\u4e3b\u9898"},"\u73af\u5883\u53d8\u91cf\u914d\u7f6e\uff0c\u4ee5\u53ca\u521d\u59cb\u5316 oh-my-posh \u4e3b\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyposh.dev/docs/installation/customize"},"\u81ea\u5b9a\u4e49 oh-my-posh \u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyposh.dev/docs/themes"},"oh-my-posh \u4e3b\u9898"))),(0,r.kt)("p",null,"\u4fee\u6539 \uff5e/.zshrc \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# oh-my-posh \u4e3b\u9898\u914d\u7f6e\n\n# \u4f7f\u7528\u9ed8\u8ba4\u7684\u4e3b\u9898\u914d\u7f6e\n# eval "$(oh-my-posh init zsh)"\n\n# \u4f7f\u7528\u81ea\u5b9a\u4e49\u4e3b\u9898\u914d\u7f6e\neval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json)"\n')),(0,r.kt)("p",null,"\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u6dfb\u52a0\u5b8c\u540e\uff0c\u91cd\u8f7d zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\nexec zsh\n")),(0,r.kt)("h3",{id:"\u624b\u52a8-nerd-\u5b57\u4f53\u4e0b\u8f7d-\u548c-\u5b89\u88c5"},"\u624b\u52a8 Nerd \u5b57\u4f53\u4e0b\u8f7d \u548c \u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyposh.dev/docs/installation/fonts"},"OhMyPosh Fonts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/"},"Nerd Fonts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts Downloads"))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts Downloads")," \u4e2d\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u5b57\u4f53\u4e0b\u8f7d\uff0c\u89e3\u538b\u540e\uff0c\n\u79fb\u52a8\u5230 /Users/\u7528\u6237\u540d/Library/Fonts\uff08\u7528\u6237\u76ee\u5f55/\u8d44\u6e90\u5e93/Fonts\uff09 \u76ee\u5f55\u4e0b"),(0,r.kt)("p",null,"\u76ee\u5f55\u8bf4\u660e\uff1a\u8d44\u6e90\u5e93\uff08Library\uff09\u662f\u4e2a\u9690\u85cf\u76ee\u5f55\uff0cshift + command + . \u53ef\u5feb\u901f\u663e\u793a \u9690\u85cf\u7684\u76ee\u5f55\u548c\u6587\u4ef6"),(0,r.kt)("p",null,"\u6216\u8005 \u5728 mac \u7535\u8111\u4e0a\uff0c\u5168\u5c40\u641c\u7d22(\u5feb\u6377\u952e command + \u7a7a\u683c)\uff1a\u8f93\u5165 \u5b57\u4f53\uff0c\u70b9\u51fb \u5b57\u4f53\u518c.app"),(0,r.kt)("h3",{id:"\u901a\u8fc7-homebrew-\u5b89\u88c5-nerd-\u5b57\u4f53"},"\u901a\u8fc7 homebrew \u5b89\u88c5 Nerd \u5b57\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// \u5b89\u88c5\u547d\u4ee4\nbrew tap homebrew/cask-fonts && brew install --cask font-\u5b57\u4f53\u540d\u79f0-nerd-font\n")),(0,r.kt)("p",null,"\u4ee5\u5b89\u88c5 Mononoki Nerd Font \u4e3a\u4f8b\uff0c\u5b57\u4f53\u5305\u7684\u683c\u5f0f\u4e3a\uff1afont-\u5b57\u4f53\u540d-nerd-font"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5148\u641c\u7d22\u4e0b\u8be5\u5b57\u4f53\nbrew search font-mononoki-nerd-font\n\nbrew tap homebrew/cask-fonts\n\n# homebrew \u5b89\u88c5 Mononoki Nerd Font\nbrew install --cask font-mononoki-nerd-font\n")),(0,r.kt)("h2",{id:"oh-my-zsh"},"oh-my-zsh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyz.sh/"},"ohmyz\u5b98\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes"},"oh-my-zsh\u4e3b\u9898\u5730\u5740")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ohmyzsh/ohmyzsh#basic-installation"},"oh-my-zsh\u4e3b\u9898\u5b89\u88c5\u547d\u4ee4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jiangzhuolin.com/5697.html"},"MacOS \u4e0a oh-my-zsh \u5b89\u88c5\u4e0e\u5378\u8f7d"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'// \u5b89\u88c5\u4e0d\u6210\u529f\uff0c\u53ef\u4ee5\u591a\u8bd5\u51e0\u6b21\nsh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n\n// \u5b89\u88c5\u6210\u529f\u4f1a\u4fee\u6539\uff0c.zshrc \u7684\u914d\u7f6e\n')),(0,r.kt)("h3",{id:"\u5378\u8f7d-oh-my-zsh"},"\u5378\u8f7d oh-my-zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uninstall_oh-my-zsh\n# \u8f93\u5165 y \u5373\u53ef\n")),(0,r.kt)("h2",{id:"powershell"},"Powershell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2"},"macOS \u4e0a\u5b89\u88c5 PowerShell"))),(0,r.kt)("p",null,"1 \u5b89\u88c5 homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Homebrew \u662f macOS \u7684\u9996\u9009\u5305\u7ba1\u7406\u5668\uff0c\u901a\u8fc7 Homebrew \u5728 macOS 10.13 \u6216\u66f4\u9ad8\u7248\u672c\u4e0a\u5b89\u88c5\u6700\u65b0\u7684 PowerShell \u7a33\u5b9a\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install --cask powershell\n")),(0,r.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh\n")),(0,r.kt)("p",null,"PowerShell \u65b0\u7248\u672c\u53d1\u5e03\u540e\uff0c\u66f4\u65b0 Homebrew \u516c\u5f0f\u5e76\u5347\u7ea7 PowerShell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade powershell --cask\n")),(0,r.kt)("h2",{id:"\u5378\u8f7d-powershell"},"\u5378\u8f7d Powershell"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528 Homebrew \u5b89\u88c5 Powershel \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5378\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall --cask powershell\n")),(0,r.kt)("p",null,"\u5982\u679c\u901a\u8fc7\u76f4\u63a5\u4e0b\u8f7d\u5b89\u88c5 powershell \u5219\u5fc5\u987b\u624b\u52a8\u5220\u9664 powershell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /usr/local/bin/pwsh /usr/local/microsoft/powershell\n")),(0,r.kt)("h2",{id:"powershell-\u4e2d\u7528\u4e8e\u5b58\u50a8\u72b6\u6001\u4fe1\u606f\u7684\u81ea\u52a8\u53d8\u91cf"},"PowerShell \u4e2d\u7528\u4e8e\u5b58\u50a8\u72b6\u6001\u4fe1\u606f\u7684\u81ea\u52a8\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"pwsh\n// PowerShell 7.2.6\n\n$PSVersionTable\n// \u5305\u542b\u53ef\u7528\u4e8e\u663e\u793a\u76f8\u5173 PowerShell \u7248\u672c\u4fe1\u606f\u7684\u54c8\u5e0c\u8868\n// PSVersion                      7.2.6\n// PSEdition                      Core\n// GitCommitId                    7.2.6\n// OS                             Darwin 21.6.0 Darwin Kernel Version 21.6.0: Wed Aug 10 14:25:27 PDT 2022; root:xnu-8020\u2026\n// Platform                       Unix\n// PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0\u2026}\n// PSRemotingProtocolVersion      2.3\n// SerializationVersion           1.1.0.1\n// WSManStackVersion              3.0\n\n$PSHOME\n// /usr/local/microsoft/powershell/7\n")),(0,r.kt)("h2",{id:"\u5e38\u7528\u8def\u5f84\u8bf4\u660e"},"\u5e38\u7528\u8def\u5f84\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$PSHOME \u662f /usr/local/microsoft/powershell/7.2.6/"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u662f\u4ece ~/.config/powershell/profile.ps1 \u4e2d\u8bfb\u53d6\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u662f\u4ece $PSHOME/profile.ps1 \u4e2d\u8bfb\u53d6\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u6a21\u5757\u662f\u4ece ~/.local/share/powershell/Modules \u4e2d\u8bfb\u53d6\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6a21\u5757\u662f\u4ece /usr/local/share/powershell/Modules \u4e2d\u8bfb\u53d6\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6a21\u5757\u662f\u4ece $PSHOME/Modules \u4e2d\u8bfb\u53d6\u7684"),(0,r.kt)("li",{parentName:"ul"},"PSReadline \u5386\u53f2\u8bb0\u5f55\u5c06\u8bb0\u5f55\u5230 ~/.local/share/powershell/PSReadLine/ConsoleHost_history.txt \u4e2d")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u91c7\u7528 PowerShell \u7684\u6bcf\u4e2a\u4e3b\u673a\u914d\u7f6e\u3002 \u56e0\u6b64\u4e3b\u673a\u7279\u5b9a\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e\u76f8\u540c\u4f4d\u7f6e\u7684 Microsoft.PowerShell_profile.ps1"))}m.isMDXComponent=!0}}]);