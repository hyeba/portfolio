(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),o=a.n(l),i=(a(13),a(1)),r=a(2),s=a(4),m=a(3),u=a(5),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{id:"home"},c.a.createElement("nav",{id:"nav-wrap"},c.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),c.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),c.a.createElement("ul",{id:"nav",className:"nav"},c.a.createElement("li",{className:"current"},c.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),c.a.createElement("li",null,c.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),c.a.createElement("li",null,c.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),c.a.createElement("div",{className:"row banner"},c.a.createElement("div",{className:"banner-text"},c.a.createElement("h1",{className:"responsive-headline"},"\uac1c\ubc1c\uc790 ",e.name," Portfolio"),c.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"\uc790\uae30 \ubc1c\uc804\uc5d0 \ud798\uc744 \uc3df\ub294 ",e.role," ",e.name,"\uc785\ub2c8\ub2e4"),c.a.createElement("h3",null,e.roleDescription),c.a.createElement("h3",null,e.roleDescription2),c.a.createElement("hr",null),c.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("a",{href:e.url,target:"_blank"},c.a.createElement("i",{className:e.className})))})))),c.a.createElement("p",{className:"scrolldown"},c.a.createElement("a",{className:"smoothscroll",href:"#about"},c.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return c.a.createElement("section",{id:"about"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"three columns"},c.a.createElement("img",{className:"profile-pic",src:"images/profile.jpg",alt:""})),c.a.createElement("div",{className:"nine columns main-col"},c.a.createElement("h2",null,"About Me"),c.a.createElement("p",null,e.aboutme),c.a.createElement("p",{className:"about_descriptionText"},e.aboutDescription),c.a.createElement("p",{className:"about_descriptionText"},e.aboutDescription2),c.a.createElement("p",{className:"about_descriptionText"},e.aboutDescription3),c.a.createElement("div",{className:"about_descriptionLink"},c.a.createElement("div",null,c.a.createElement("p",{className:"about_descriptionText"},e.aboutDescription4)),c.a.createElement("div",{className:"about_npm",onClick:function(){window.open("https://www.npmjs.com/package/phonekeypad-js")}},"phonekeypad-js")),c.a.createElement("p",{className:"about_descriptionText"},e.aboutDescription5),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"columns contact-details"},c.a.createElement("h2",null,"Contact Details"),c.a.createElement("p",{className:"address"},c.a.createElement("span",null,e.name,c.a.createElement("br",null)),c.a.createElement("span",null,e.email,c.a.createElement("br",null)),c.a.createElement("span",null,e.phone,c.a.createElement("br",null)),c.a.createElement("span",null,e.website)))))))}}]),t}(n.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return c.a.createElement("section",{id:"resume"},c.a.createElement("div",{className:"row education"},c.a.createElement("div",{className:"three columns header-col"},c.a.createElement("h1",null,c.a.createElement("span",null,"Education"))),c.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return c.a.createElement("div",{className:"row item"},c.a.createElement("div",{className:"twelve columns"},c.a.createElement("h3",null,e.UniversityName),c.a.createElement("p",{className:"info"},e.specialization,c.a.createElement("span",null,"\u2022")," ",c.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),c.a.createElement("p",{className:"info"},e.Achievements)))}))),c.a.createElement("div",{className:"row work"},c.a.createElement("div",{className:"three columns header-col"},c.a.createElement("h1",null,c.a.createElement("span",null,"Work"))),c.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return c.a.createElement("div",{className:"row item"},c.a.createElement("div",{className:"twelve columns"},c.a.createElement("h3",null,e.CompanyName),c.a.createElement("p",{className:"info"},e.specialization,c.a.createElement("span",null,"\u2022")," ",c.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),c.a.createElement("p",{className:"info"},e.Achievements),c.a.createElement("p",{className:"info"},e.Achievements2),c.a.createElement("p",{className:"info"},e.Achievements3),c.a.createElement("p",{className:"info"},e.Achievements4),c.a.createElement("p",{className:"info"},e.Achievements5)))}))),c.a.createElement("div",{className:"row skill"},c.a.createElement("div",{className:"three columns header-col"},c.a.createElement("h1",null,c.a.createElement("span",null,"Skills"))),c.a.createElement("div",{className:"nine columns main-col"},c.a.createElement("div",{className:"bars"},c.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return c.a.createElement("li",null,c.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),c.a.createElement("em",null,e.skillname))}))))))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return c.a.createElement("section",{id:"portfolio"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"twelve columns collapsed"},c.a.createElement("h1",null,"Check Out Some of My Works"),c.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf portfolio-container"},e.portfolio&&e.portfolio.map(function(e){return c.a.createElement("div",{className:"portfolio-item"},c.a.createElement("a",{href:"javascript:void(0)"},c.a.createElement("div",{className:"portfolio-itemWrap item-wrap",onClick:function(){return window.open("".concat(e.url))}},c.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img portfolio-img"}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"portfolio-item-meta"},c.a.createElement("h5",null,e.name),c.a.createElement("p",null,e.description))))),c.a.createElement("div",{className:"portfolio_descriptionContainer"},c.a.createElement("h1",null,"Project: ",e.contentDescriotion),c.a.createElement("p",null,e.contentDescriotion2),c.a.createElement("p",null,e.contentDescriotion3),c.a.createElement("p",null,e.contentDescriotion4),c.a.createElement("p",null,e.contentDescriotion5),c.a.createElement("p",null,e.contentDescriotion6),c.a.createElement("p",null,e.contentDescriotion7)))})))))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return c.a.createElement("footer",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"twelve columns"},c.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return c.a.createElement("li",null,c.a.createElement("a",{href:e.url},c.a.createElement("i",{className:e.className})))}))),c.a.createElement("div",{id:"go-top"},c.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},c.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),v={imagebaseurl:"https://hyeba.github.io/portfolio",name:"\uc7a5\ud61c\uc9c4",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",roleDescription:"\uc0c8\ub85c\uc6b4 \uac83\uc744 \ubc30\uc6b0\uace0, \uc26c\uc9c0 \uc54a\uace0 \ubc1c\uc804\ud558\uae30 \uc704\ud574 \uac1c\ubc1c\uc790\uc758 \uafc8\uc744 \uac16\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4",roleDescription2:"\ub354 \ub9ce\uc740 \uac83\uc744 \ubc30\uc6b0\uace0 \uc801\uc6a9\ud558\uba70 \ucf54\ub529\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4",socialLinks:[{name:"github",url:"http://github.com/HYEJIN3",className:"fa fa-github"}],aboutme:"\ud504\ub860\ud2b8\uc5d4\ub4dc 2\ub144\ucc28 \uac1c\ubc1c\uc790 \uc7a5\ud61c\uc9c4\uc785\ub2c8\ub2e4",aboutDescription:"html, css, javascript, node.js, mysql, nginX\uc640 aws\ub97c \ub2e4\ub8e8\ub294 \ub370 \uc775\uc219\ud569\ub2c8\ub2e4",aboutDescription2:"\uae30\ubcf8\uc801\uc778 \ub9ac\ub205\uc2a4 \uba85\ub839\uc5b4\ub97c \uc798 \uc219\uc9c0\ud558\uace0 \uc788\uc73c\uba70 React, three.js, canvas\ub97c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4",aboutDescription3:"\uae30\ubcf8 \uc6f9 \uc81c\uc791\ubd80\ud130 \ubc30\ud3ec, \uad6c\uae00 \ud50c\ub808\uc774 \uc2a4\ud1a0\uc5b4, \uc571\uc2a4\ud1a0\uc5b4 \ucd9c\uc2dc\uae4c\uc9c0 \ub2e4\uc218\uc758 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4",aboutDescription4:"NPM \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc30\ud3ec \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4",aboutDescription5:"\uc8fc\uc694 \uc131\uacfc\ub294 \ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc571 \ub79c\ub529\ud398\uc774\uc9c0(\ub2e8\ub3c5 \uac1c\ubc1c), \ud68c\uc0ac \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0(\ub2e8\ub3c5 \uac1c\ubc1c), \ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc571, \ud68c\uc0ac \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c\uc785\ub2c8\ub2e4",email:"aslk3366zz@naver.com",phone:"010-6332-2458",website:"https://hyeba.github.io/portfolio",education:[{UniversityName:"\ud55c\uad6d\uc0b0\uc5c5\uae30\uc220\ub300\ud559\uad50",specialization:"\uae30\uacc4\uc124\uacc4\uacf5\ud559\uacfc",YearOfPassing:"2012.03 ~ 2020.02",Achievements:"4\ub144\uc81c \ud559\uc0ac"}],work:[{CompanyName:"(\uc8fc)\uc544\ud2f0\ud504\ub80c\uc988",specialization:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",MonthOfLeaving:"2021.08 ~ \ud604\uc7ac",Achievements:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc571 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",Achievements2:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \ub79c\ub529\ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",Achievements3:"\ud68c\uc0ac \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",Achievements4:"\ud68c\uc0ac \uc5b4\ub4dc\ubbfc \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",Achievements5:"\uc0ac\ub0b4 \ud14c\uc2a4\ud2b8 \uc11c\ubc84 \uad00\ub9ac\uc790"},{CompanyName:"(\uc8fc)\ub3d9\ud6c8\uc544\uc774\ud14d",specialization:"IT \ubcf4\uc548\uc194\ub8e8\uc158 \uc601\uc5c5",MonthOfLeaving:"2021.01 ~ 2021.06"},{CompanyName:"(\uc8fc)\ub3d9\uc591",specialization:"\uc0dd\uc0b0\uad00\ub9ac",MonthOfLeaving:"2020.09 ~ 2020.12"}],skills:[{skillname:"HTML"},{skillname:"CSS"},{skillname:"Javascript"},{skillname:"JQuery"},{skillname:"React"}],portfolio:[{name:"Guardee Blockchain Wallet",description:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc6f9/\uc571 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",imgurl:"images/portfolio/guardee-app.png",url:"https://guardee.io",contentDescriotion:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc6f9/\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c",contentDescriotion2:"\ud654\uba74 \ub808\uc774\uc544\uc6c3 \uae30\ud68d",contentDescriotion3:"UI \uac1c\ubc1c",contentDescriotion4:"\ucee4\uc2a4\ud140 \ud0a4\ud328\ub4dc, Notice \ubaa8\ub2ec, \uc560\ub2c8\uba54\uc774\uc158 \uac1c\ubc1c",contentDescriotion5:"UI \uc720\uc9c0\ubcf4\uc218 \ub2f4\ub2f9",contentDescriotion6:"\uae30\uc5ec\ub3c4: 50%",contentDescriotion7:"html, css, js, jquery, cordova"},{name:"Guardee Landing Page",description:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc571 \ub79c\ub529 \ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",imgurl:"images/portfolio/guardee-landing.png",url:"https://guardee.app",contentDescriotion:"\ube14\ub85d\uccb4\uc778 \uc9c0\uac11 \uc571 \ub79c\ub529\ud398\uc774\uc9c0 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c",contentDescriotion2:"\ud654\uba74 \ub808\uc774\uc544\uc6c3 \uae30\ud68d",contentDescriotion3:"UI \uac1c\ubc1c",contentDescriotion4:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub864 \uc774\ubca4\ud2b8 \uc801\uc6a9",contentDescriotion5:"\uc804\uccb4 \uc720\uc9c0\ubcf4\uc218 \ub2f4\ub2f9",contentDescriotion6:"\uae30\uc5ec\ub3c4: 100%",contentDescriotion7:"html, css, js, pageable"},{name:"Artifriends",description:"\ud68c\uc0ac \uc18c\uac1c \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",imgurl:"images/portfolio/artihome.png",url:"https://artifriends.com",contentDescriotion:"\ud68c\uc0ac \ud648\ud398\uc774\uc9c0 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubc0f \ubc31\uc5d4\ub4dc \uac1c\ubc1c",contentDescriotion2:"UI \uac1c\ubc1c",contentDescriotion3:"\uc560\ub2c8\uba54\uc774\uc158 \uc801\uc6a9\ud558\uc5ec \uc778\ud130\ub799\ud2f0\ube0c \ud6a8\uacfc \ucd94\uac00",contentDescriotion4:"DB / API \uac1c\ubc1c",contentDescriotion5:"\uc804\uccb4 \uc720\uc9c0\ubcf4\uc218 \ub2f4\ub2f9",contentDescriotion6:"\uae30\uc5ec\ub3c4: 30%",contentDescriotion7:"html, css, js, jquery"},{name:"Artifriends Admin homepage",description:"\ud68c\uc0ac \uc5b4\ub4dc\ubbfc \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",imgurl:"images/portfolio/artiadmin.png",url:"",contentDescriotion:"\ud68c\uc0ac \uc5b4\ub4dc\ubbfc \ud648\ud398\uc774\uc9c0 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubc0f \ubc31\uc5d4\ub4dc \uac1c\ubc1c",contentDescriotion2:"UI \uac1c\ubc1c",contentDescriotion3:"DB / API \uac1c\ubc1c",contentDescriotion4:"\uc804\uccb4 \uc720\uc9c0\ubcf4\uc218 \ub2f4\ub2f9",contentDescriotion5:"\uae30\uc5ec\ub3c4: 100%",contentDescriotion6:"html, css, js, node.js, mysql"},{name:"phonekeypad-js npm",description:"npm \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc30\ud3ec",imgurl:"images/portfolio/portfolio-npmimg.png",url:"https://www.npmjs.com/package/phonekeypad-js",contentDescriotion:"\ud0a4\ud328\ub4dc npm \ub77c\uc774\ube0c\ub7ec\ub9ac \uac1c\ubc1c \ubc0f \ubc30\ud3ec",contentDescriotion2:"\ucd5c\uc801\ud654 \uc9c4\ud589\uc911",contentDescriotion3:"\uae30\uc5ec\ub3c4: 100%",contentDescriotion4:"html, css, js"}]},N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,{resumeData:v}),c.a.createElement(E,{resumeData:v}),c.a.createElement(h,{resumeData:v}),c.a.createElement(d,{resumeData:v}),c.a.createElement(f,{resumeData:v}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.dcab50c9.chunk.js.map