"use strict";(self.webpackChunksunsboyxu_docs=self.webpackChunksunsboyxu_docs||[]).push([[3267],{2170:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var d=e(3274),l=e(1377);const s={},r="MongoDB",t={id:"node/mongodb",title:"MongoDB",description:"\u5b98\u7f51",source:"@site/docs/node/mongodb.md",sourceDirName:"node",slug:"/node/mongodb",permalink:"/yogeexu-docs/node/mongodb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"koa",permalink:"/yogeexu-docs/node/koa"},next:{title:"nodejs",permalink:"/yogeexu-docs/node/nodejs"}},i={},c=[{value:"\u5728 /usr/local/mongodb/ \u4e0b\u5efa\u7acb\uff08\u5728\u522b\u7684\u76ee\u5f55\u4e0b\u5efa\u7acb\u4e5f\u53ef\u4ee5\uff09",id:"\u5728-usrlocalmongodb-\u4e0b\u5efa\u7acb\u5728\u522b\u7684\u76ee\u5f55\u4e0b\u5efa\u7acb\u4e5f\u53ef\u4ee5",level:2},{value:"\u6570\u636e\u5e93\u76ee\u5f55\uff08data/db\uff09\uff1a/usr/local/mongodb/data/db",id:"\u6570\u636e\u5e93\u76ee\u5f55datadbusrlocalmongodbdatadb",level:3},{value:"\u65e5\u5fd7\u76ee\u5f55(log/mongod.log): /usr/local/mongodb/log/mongod.log",id:"\u65e5\u5fd7\u76ee\u5f55logmongodlog-usrlocalmongodblogmongodlog",level:3},{value:"\u914d\u7f6e\u6587\u4ef6(ect/momgod.conf): /usr/local/mongodb/etc/mongod.conf",id:"\u914d\u7f6e\u6587\u4ef6ectmomgodconf-usrlocalmongodbetcmongodconf",level:3},{value:"\u547d\u4ee4\u5bfc\u5165\u6570\u636e",id:"\u547d\u4ee4\u5bfc\u5165\u6570\u636e",level:2},{value:"\u5bfc\u5165\u6210\u529f\u7684\u63d0\u793a",id:"\u5bfc\u5165\u6210\u529f\u7684\u63d0\u793a",level:2},{value:"\u589e",id:"\u589e",level:2},{value:"\u5220",id:"\u5220",level:2},{value:"\u6539",id:"\u6539",level:2},{value:"\u67e5",id:"\u67e5",level:2}];function a(n){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"https://www.mongodb.com",children:"\u5b98\u7f51"}),"\n",(0,d.jsx)(o.a,{href:"https://docs.mongodb.com/manual/mongo/",children:"mongodb \u6570\u636e\u5e93\u6587\u6863"})]}),"\n",(0,d.jsx)(o.h1,{id:"\u76f8\u5173\u6559\u7a0b",children:"\u76f8\u5173\u6559\u7a0b"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",children:"\u83dc\u9e1f\u6559\u7a0b-Mongodb"})}),"\n",(0,d.jsx)(o.h1,{id:"\u76f8\u5173\u4e0b\u8f7d",children:"\u76f8\u5173\u4e0b\u8f7d"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"https://www.mongodb.com/download-center/community",children:"\u5b89\u88c5\u5305\u4e0b\u8f7d - window/mac"}),"\n",(0,d.jsx)(o.a,{href:"https://www.mongodb.com/try/download/compass",children:"\u53ef\u89c6\u5316\u5de5\u5177Compass\u4e0b\u8f7d - window/mac"})]}),"\n",(0,d.jsx)(o.h1,{id:"window7\u4e0b\u5b89\u88c5\u7684",children:"window7\u4e0b\u5b89\u88c5\u7684"}),"\n",(0,d.jsx)(o.p,{children:'\u6211\u7684\u5b89\u88c5\u76ee\u5f55 F:\\install\\mongoDB\n1\u3001\u5c06 mongoDB \u5b89\u88c5\u5728F\u76d8\u4e0b install \u76ee\u5f55\n2\u3001\u5728\u5b89\u88c5\u7684 mongoDB\u76ee\u5f55\u4e0b\u624b\u52a8\u521b\u5efa\u5b58\u653e\u6570\u636e\u7684 data \u76ee\u5f55\n2-1\u3001\u5728\u5b89\u88c5\u7684 mongoDB -> bin \u5728\u6b64\u5904\u6253\u5f00\u547d\u4ee4\u7a97\u53e3\uff0c\u5e76\u6267\u884c\uff1a\nmongod -dbpath F:\\install\\mongoDB\\data\nmongodb \u9ed8\u8ba4\u7aef\u53e3\u4e3a\uff1a27017\n3\u3001\u5728\u5b89\u88c5\u7684 mongoDB\u76ee\u5f55 \u521b\u5efa mongo.conf(\u6216\u8005.config)\n// F:\\install\\mongoDB\\mongo.conf\n#\u6570\u636e\u5e93\u8def\u5f84\ndbpath = F:\\install\\mongoDB\\data\n#\u65e5\u5fd7\u8f93\u51fa\u6587\u4ef6\u8def\u5f84\nlogpath = F:\\install\\mongoDB\\mongodb.log\n#\u9519\u8bef\u65e5\u5fd7\u91c7\u7528\u8ffd\u52a0\u6a21\u5f0f\uff0c\u914d\u7f6e\u8fd9\u4e2a\u9009\u9879\u540emongodb\u7684\u65e5\u5fd7\u4f1a\u8ffd\u52a0\u5230\u73b0\u6709\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4ece\u65b0\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\nlogappend = true\n#\u542f\u7528\u65e5\u5fd7\u6587\u4ef6\uff0c\u9ed8\u8ba4\u542f\u7528\njournal = true\n#\u8fd9\u4e2a\u9009\u9879\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e00\u4e9b\u65e0\u7528\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u82e5\u9700\u8981\u8c03\u8bd5\u4f7f\u7528\u8bf7\u8bbe\u7f6e\u4e3afalse\nquiet = true\n#\u7aef\u53e3\u53f7 \u9ed8\u8ba4\u4e3a27017\nport = 27017\n4\u3001\u5c06 mongodb \u4f5c\u4e3a\u7cfb\u7edf\u670d\u52a1\u542f\u52a8\n\u5728\u5b89\u88c5\u7684 mongoDB -> bin \u5728\u6b64\u5904\u6253\u5f00\u547d\u4ee4\u7a97\u53e3\uff0c\u5e76\u6267\u884c\uff1a\nmongod --config F:\\install\\mongoDB\\mongo.conf --install -serviceName "MongoDB"\n\u547d\u4ee4\u884c\u7a97\u53e3\uff08cmd\uff09\u8f93\u5165services.msc\u547d\u4ee4\u2014\u2014\u67e5\u770b\u670d\u52a1\u53ef\u4ee5\u770b\u5230MongoDB\u670d\u52a1\uff0c\u70b9\u51fb\u53ef\u4ee5\u542f\u52a8\n\u540e\u9762\u53ef\u4ee5\u6267\u884c\uff1a\ncmd \u6253\u5f00\u547d\u4ee4\u7a97\u53e3\n\u542f\u52a8MongoDB\u670d\u52a1\uff1anet start MongoDB\n\u505c\u6b62MongoDB\u670d\u52a1\uff1anet stop  MongoDB\n\u6d4f\u89c8\u5668\uff1a127.0.0.1\uff1a27017'}),"\n",(0,d.jsx)(o.h1,{id:"window10-\u5b89\u88c5-mongodb",children:"window10 \u5b89\u88c5 MongoDB"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/weschen/p/8213746.html",children:"Windows 10 \u5b89\u88c5 Mongodb"}),"\n",(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/tonylaoshi/p/11052427.html",children:"Windows10\u5b89\u88c5MongoDB4.0\u8be6\u7ec6\u6d41\u7a0b\u53ca\u542f\u52a8\u914d\u7f6e"}),"\n",(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/whowhere/p/9637605.html",children:"Win10 \u5b89\u88c5\u914d\u7f6e MongoDB 4.0 \u8e29\u5751\u8bb0"}),"\n",(0,d.jsx)(o.a,{href:"https://blog.csdn.net/wywysun/article/details/99563341",children:"Win10 \u5b89\u88c5\u914d\u7f6e MongoDB 4.0 \u8e29\u5751\u8bb0"}),"\n",(0,d.jsx)(o.a,{href:"https://blog.csdn.net/qq_27378621/article/details/80933354"}),"\n",(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/jianglan/p/4430299.html"}),"\n",(0,d.jsx)(o.a,{href:"https://www.runoob.com/nodejs/nodejs-mongodb.html"}),"\n",(0,d.jsx)(o.a,{href:"http://mongodb.github.io/node-mongodb-native/3.2/tutorials/connect/"}),")"]}),"\n",(0,d.jsx)(o.h1,{id:"\u5b89\u88c5\u6b65\u9aa4",children:"\u5b89\u88c5\u6b65\u9aa4"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"1 \u70b9\u51fb .msi \u8fdb\u884c\u5b89\u88c5"}),"\n",(0,d.jsx)(o.li,{children:"2 \u9009\u62e9 custome \u8fdb\u884c\u5b89\u88c5"}),"\n",(0,d.jsx)(o.li,{children:"3 \u6211\u7684\u5b89\u88c5\u76ee\u5f55 Z:\\MongoDB"}),"\n",(0,d.jsxs)(o.li,{children:["4 Install MongoD as a Service \u9ed8\u8ba4\u5c31\u597d\nService Name: MongoDB\nData Directory: Z:\\MongoDB\\data",(0,d.jsx)(o.br,{}),"\n","Log Directory: Z:\\MongoDB\\log\\"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsxs)(o.ol,{start:"5",children:["\n",(0,d.jsx)(o.li,{children:"\u53d6\u6d88 \u221a Install MongoDB Compass (\u4e0d\u5b89\u88c5\uff0c\u4e0d\u7136\u4f1a\u56e0\u4e3a\u4e00\u76f4\u4e0b\u8f7d\u8fd9\u4e2a\u5de5\u5177\uff0c\u5bfc\u81f4\u5b89\u88c5\u5361\u4e3b)"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(o.li,{children:"6 mongo db compass \u662f\u4e2a\u56fe\u5f62\u5de5\u5177\uff0c\u53ef\u4ee5\u65b9\u4fbf\u76f4\u63a5\u7ba1\u7406 mongodb \u6570\u636e"}),"\n"]}),"\n",(0,d.jsx)(o.h1,{id:"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf",children:"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"}),"\n",(0,d.jsx)(o.p,{children:"path\u4e2d\u6dfb\u52a0\nZ:\\MongoDB\\bin"}),"\n",(0,d.jsx)(o.h1,{id:"\u542f\u52a8-mongodb-\u670d\u52a1",children:"\u542f\u52a8 MongoDB \u670d\u52a1"}),"\n",(0,d.jsx)(o.p,{children:"net start MongoDB(\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u67e5\u770b\u662f\u5426\u542f\u52a8)"}),"\n",(0,d.jsx)(o.h1,{id:"mongodb-\u5f00\u673a",children:"MongoDB \u5f00\u673a"}),"\n",(0,d.jsx)(o.p,{children:'mongod --dbpath "z:\\mongodb\\data\\db"'}),"\n",(0,d.jsx)(o.h1,{id:"mac-\u4e0b\u5b89\u88c5-mongodb",children:"Mac \u4e0b\u5b89\u88c5 mongodb"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/haonanZhang/p/8213947.html",children:"mac\u7cfb\u7edf\u4e0b\u5b89\u88c5\u3001\u542f\u52a8\u3001\u505c\u6b62mongodb"}),"\n",(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/mtxcat/p/14140757.html",children:"Mac \u4e0b\u5b89\u88c5\u914d\u7f6eMongoDB\u8bb2\u89e3"}),"\n",(0,d.jsx)(o.a,{href:"https://www.cnblogs.com/helios-fz/p/13685060.html",children:"MongoDB - Mac\u4e0a\u5b89\u88c5\u548c\u914d\u7f6eMongoDB"})]}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["\u4e0b\u8f7d\u5b89\u88c5\u5305\n",(0,d.jsx)(o.a,{href:"https://www.mongodb.com/try/download/community",children:"mongodb\u5b89\u88c5\u5305\u4e0b\u8f7d"})]}),"\n",(0,d.jsx)(o.li,{children:"\u89e3\u538b\u5b89\u88c5\u5305"}),"\n"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"\u547d\u4ee4\u6253\u5f00\u76ee\u5f55\uff1a open /usr/local"}),"\n",(0,d.jsx)(o.li,{children:"\u5c06 mongodb \u526a\u5207\u5230 /usr/local/mongodb"}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"3 \u914d\u7f6e\u73af\u5883\u53d8\u91cf\nexport PATH=/usr/local/mongodb/bin:$PATH"}),"\n",(0,d.jsx)(o.p,{children:"\u8bbe\u7f6e\u6570\u636e\u5e93\u76ee\u5f55 \u65e5\u5fd7\u76ee\u5f55 \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,d.jsx)(o.h2,{id:"\u5728-usrlocalmongodb-\u4e0b\u5efa\u7acb\u5728\u522b\u7684\u76ee\u5f55\u4e0b\u5efa\u7acb\u4e5f\u53ef\u4ee5",children:"\u5728 /usr/local/mongodb/ \u4e0b\u5efa\u7acb\uff08\u5728\u522b\u7684\u76ee\u5f55\u4e0b\u5efa\u7acb\u4e5f\u53ef\u4ee5\uff09"}),"\n",(0,d.jsx)(o.p,{children:"/usr/local/mongodb/ data\u76ee\u5f55\uff0cdata\u4e0b\u5efa\u7acb db \u76ee\u5f55\n/usr/local/mongodb/ log \u76ee\u5f55\uff0cmongod.log \u6587\u4ef6\n/usr/local/mongodb/ etc \u76ee\u5f55, mongod.conf \u6587\u4ef6"}),"\n",(0,d.jsx)(o.h3,{id:"\u6570\u636e\u5e93\u76ee\u5f55datadbusrlocalmongodbdatadb",children:"\u6570\u636e\u5e93\u76ee\u5f55\uff08data/db\uff09\uff1a/usr/local/mongodb/data/db"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"mongod --dbpath=/usr/local/mongodb/data/db"}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"\u65e5\u5fd7\u76ee\u5f55logmongodlog-usrlocalmongodblogmongodlog",children:"\u65e5\u5fd7\u76ee\u5f55(log/mongod.log): /usr/local/mongodb/log/mongod.log"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"mongod --logpath=/usr/local/mongodb/log/mongodb.log"}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"\u914d\u7f6e\u6587\u4ef6ectmomgodconf-usrlocalmongodbetcmongodconf",children:"\u914d\u7f6e\u6587\u4ef6(ect/momgod.conf): /usr/local/mongodb/etc/mongod.conf"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"mongod --config=/usr/local/mongodb/etc/mongod.conf"}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"// mongod.conf \u6587\u4ef6\u914d\u7f6e(#\u8868\u793a\u6ce8\u91ca)"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-css",children:"#mongodb \u914d\u7f6e\u6587\u4ef6\n#\u6570\u636e\u5e93\u8def\u5f84\ndbpath=/usr/local/mongodb/data/db\n#\u65e5\u5fd7\u8def\u5f84\nlogpath=/usr/local/mongodb/log/mongodb.log\n#\u9519\u8bef\u65e5\u5fd7\u91c7\u7528\u8ffd\u52a0\u6a21\u5f0f\uff0c\u914d\u7f6e\u8fd9\u4e2a\u9009\u9879\u540emongodb\u7684\u65e5\u5fd7\u4f1a\u8ffd\u52a0\u5230\u73b0\u6709\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4ece\u65b0\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\nlogappend=true\n#\u542f\u7528\u65e5\u5fd7\u6587\u4ef6\uff0c\u9ed8\u8ba4\u542f\u7528\njournal=true\n#\u8fd9\u4e2a\u9009\u9879\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e00\u4e9b\u65e0\u7528\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u82e5\u9700\u8981\u8c03\u8bd5\u4f7f\u7528\u8bf7\u8bbe\u7f6e\u4e3afalse\nquiet=false\n#\u662f\u5426\u540e\u53f0\u542f\u52a8\uff0c\u6709\u8fd9\u4e2a\u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u540e\u53f0\u8fd0\u884c\nfork=true\n#\u7aef\u53e3\u53f7 \u9ed8\u8ba4\u4e3a27017\nport=27017\n#\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\uff08\u9ed8\u8ba4\u4e0d\u9700\u8981\u6307\u5b9a\uff09\n#storageEngine=mmapv1\n#\u5f00\u542f\u7f51\u9875\u65e5\u5fd7\u76d1\u63a7\uff0c\u6709\u8fd9\u4e2a\u53c2\u6570\u5c31\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e0a\u752828017\u67e5\u770b\u76d1\u63a7\u754c\u9762\n#\u9ad8\u7248\u672c\u53ef\u80fd\u4e0d\u652f\u6301\n#httpinterface=true\n#rest=true\n"})}),"\n",(0,d.jsx)(o.h1,{id:"\u542f\u52a8-mongodb",children:"\u542f\u52a8 mongodb"}),"\n",(0,d.jsxs)(o.p,{children:["\u547d\u4ee4\u7a97\u53e3\u6253\u5f00 /usr/local/mongodb/bin\uff0c\u6267\u884c mongod --dbpath=/usr/local/mongodb/data/db\n\u914d\u7f6e \u5feb\u542f\u52a8\nvim ~/.base_profile\n\u952e\u76d8 e\nalias mongodserver='mongod --dbpath=/usr/local/mongodb/data/db'\n\u952e\u76d8 ESC\n\u8f93\u5165 ",":wq","!\nsource ~/.bash_profile\n\u91cd\u542f \u547d\u4ee4\u7a97\u53e3\nmongodserver"]}),"\n",(0,d.jsx)(o.h1,{id:"\u5173\u95ed-mongo",children:"\u5173\u95ed mongo"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"db.shutdownServer()"}),"\n"]}),"\n",(0,d.jsx)(o.h1,{id:"\u8fde\u63a5-mongodb-\u8fde\u63a5\u6570\u636e\u5e93",children:"\u8fde\u63a5 MongoDB \u8fde\u63a5\u6570\u636e\u5e93"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/"})}),"\n",(0,d.jsx)(o.h1,{id:"mongo-\u4e0b\u7684\u64cd\u4f5c",children:"mongo \u4e0b\u7684\u64cd\u4f5c"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"show dbs // \u67e5\u770b\u6570\u636e\u5e93"}),"\n",(0,d.jsx)(o.li,{children:"use xxx(\u6570\u636e\u5e93\u540d\u79f0) // \u4f7f\u7528\u6570\u636e\u5e93\uff0c\u6ca1\u6709\u4f1a\u521b\u5efa"}),"\n",(0,d.jsx)(o.li,{children:"db // \u67e5\u770b\u5f53\u524d\u6240\u5728\u6570\u636e\u5e93"}),"\n",(0,d.jsx)(o.li,{children:"show collections // \u67e5\u770b\u96c6\u5408"}),"\n",(0,d.jsx)(o.li,{children:"db.user.find() // \u67e5\u770b\u6570\u636e"}),"\n",(0,d.jsx)(o.li,{children:"db.xx // \u4f1a\u81ea\u52a8\u521b\u5efa\u8be5\u96c6\u5408"}),"\n"]}),"\n",(0,d.jsx)(o.h1,{id:"\u5c06json\u6587\u4ef6\u6570\u636e\u5bfc\u5165\u6570\u636e\u5e93\u4e2d",children:"\u5c06.json\u6587\u4ef6\u6570\u636e\u5bfc\u5165\u6570\u636e\u5e93\u4e2d"}),"\n",(0,d.jsx)(o.p,{children:"json\u6587\u4ef6\u5730\u5740 C:\\Users\\zhaoshunyu\\Desktop\\data\\data1.json\n.json \u6587\u4ef6\u6570\u636e\u683c\u5f0f"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-json",children:'{"title":"\u6807\u98981","content":"hello world!","createTime":"2019-11-28"}\n{"title":"\u6807\u98982","content":"welcome!","createTime":"2019-11-28"}\n{"title":"\u6807\u98983","content":"nice to meet you","createTime":"2019-11-28"}\n'})}),"\n",(0,d.jsx)(o.h2,{id:"\u547d\u4ee4\u5bfc\u5165\u6570\u636e",children:"\u547d\u4ee4\u5bfc\u5165\u6570\u636e"}),"\n",(0,d.jsx)(o.p,{children:"mongoimport --db test --collection user --drop --file C:\\Users\\zhaoshunyu\\Desktop\\data\\data1.json\n--db \u6307\u660e\u6570\u636e\u5e93\n--collection \u6307\u660e\u96c6\u5408\n--drop \u6e05\u7a7a\u6570\u636e\n--file \u6570\u636e\u4f4d\u7f6e"}),"\n",(0,d.jsx)(o.h2,{id:"\u5bfc\u5165\u6210\u529f\u7684\u63d0\u793a",children:"\u5bfc\u5165\u6210\u529f\u7684\u63d0\u793a"}),"\n",(0,d.jsx)(o.p,{children:"connected to:mongodb://localhost/\ndropping: test.user\n3 document(s) imported successfully. 0 document(s) failed to import"}),"\n",(0,d.jsx)(o.h1,{id:"mongodb-\u6570\u636e\u5e93\u64cd\u4f5c",children:"MongoDB \u6570\u636e\u5e93\u64cd\u4f5c"}),"\n",(0,d.jsx)(o.h2,{id:"\u589e",children:"\u589e"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:'db.user.insert({"username":"sunsboy","age":29,"sex":"man"})\n'})}),"\n",(0,d.jsx)(o.h2,{id:"\u5220",children:"\u5220"}),"\n",(0,d.jsx)(o.h2,{id:"\u6539",children:"\u6539"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-js",children:'db.user.update({"name":"sunsboy1",{$set:{"age":29}}}); // \u4fee\u6539 name=sunsboy1 \u8fd9\u6761\u6570\u636e\u7684 age \u4e3a 29\ndb.user.update({},{$set:{"age":666}},{multi:true}); // \u4fee\u6539 \u6240\u6709\u6570\u636e \u7684 age \u4e3a 666\n'})}),"\n",(0,d.jsx)(o.h2,{id:"\u67e5",children:"\u67e5"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-js",children:'db.user.find() // \u67e5\u8be2\u6240\u6709\u6570\u636e\ndb.user.find({name: "sunsboy"}); // \u67e5\u627e\u5e26\u6761\u4ef6\uff08\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u627e\u4e0d\u5230\u5339\u914d\u6570\u636e\u662f\u6ca1\u6709\u53cd\u5e94\u7684\uff09\ndb.user.find({"userinfo.sex":"\u7537"}); // \u67e5\u627e \u5bf9\u8c61\u4e0b\u7684\u67d0\u4e2a key \u7684\u6570\u636e\ndb.user.find({name: "sunsboy","title":"\u6709\u6ca1\u6709\u90a3\u4e48\u4e00\u9996\u6b4c"}); // \u67e5\u8be2\u6570\u636e\u5e26\u591a\u4e2a\u6761\u4ef6\ndb.userfind({$or: [{"name":"sunsboy"},{"name":"sunsboy2"}]}); //{$or}:[...] \u6216\u8005\u6761\u4ef6\u67e5\u8be2\ndb.user.find({$and:[{"age":{$gt:123}},{"age":{$lt:789}}]}); // \u67e5\u8be2\u6570\u636e {$and:[...]} and \u6761\u4ef6\ndb.user.find({"age":{$gt:123}}); // \u67e5\u627e age \u5927\u4e8e {$gt:123}  123 \u7684\u6570\u636e\ndb.user.find({"age":{$lt:456}}); // \u67e5\u8be2 age \u5c0f\u4e8e {$lt:456} 456 \u7684\u6570\u636e\ndb.user.find().sort({"age": 1}); // \u6392\u5e8f\ndb.user.find().sort({"name": -1}); // \u6392\u5e8f\ndb.user.find().sort({"name": -1,"age": 1}); // \u6392\u5e8f\n'})}),"\n",(0,d.jsx)(o.h1,{id:"mongodb-\u5b9e\u6218",children:"Mongodb \u5b9e\u6218"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/"}),"\n",(0,d.jsx)(o.a,{href:"https://blog.csdn.net/qq_41969358/article/details/87866971",children:"mongodb\u5b9e\u6218\u5206\u4eab"})]})]})}function g(n={}){const{wrapper:o}={...(0,l.R)(),...n.components};return o?(0,d.jsx)(o,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},1377:(n,o,e)=>{e.d(o,{R:()=>r,x:()=>t});var d=e(9474);const l={},s=d.createContext(l);function r(n){const o=d.useContext(s);return d.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function t(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),d.createElement(s.Provider,{value:o},n.children)}}}]);