(function(e){function t(t){for(var a,o,r=t[0],i=t[1],u=t[2],l=0,p=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e09":function(e,t,n){e.exports=n.p+"img/date_range_white_24dp.51009d71.svg"},"29a6":function(e,t,n){},"29dd":function(e,t,n){"use strict";n("ad3e")},"38dd":function(e,t,n){"use strict";n("29a6")},"49ba":function(e,t,n){e.exports=n.p+"img/account_circle_white_24dp.87f01332.svg"},"4c88":function(e,t,n){e.exports=n.p+"img/window_white_24dp.f1b6c520.svg"},"4f45":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,s,o){var r=Object(a["m"])("Footer"),i=Object(a["m"])("Header"),u=Object(a["m"])("Authentication"),d=Object(a["m"])("Registration"),l=Object(a["m"])("TestForm"),p=Object(a["m"])("Profile"),f=Object(a["m"])("Schedule"),h=Object(a["m"])("Recomendation");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(r,{onSwitchPage:o.switchPage},null,8,["onSwitchPage"]),Object(a["f"])(i),"Authentication"==s.page?(Object(a["h"])(),Object(a["c"])(u,{key:0,onSwitchPage:o.switchPage},null,8,["onSwitchPage"])):Object(a["d"])("",!0),"Registration"==s.page?(Object(a["h"])(),Object(a["c"])(d,{key:1,onSwitchPage:o.switchPage},null,8,["onSwitchPage"])):Object(a["d"])("",!0),"TestForm"==s.page?(Object(a["h"])(),Object(a["c"])(l,{key:2,onSwitchPage:o.switchPage},null,8,["onSwitchPage"])):Object(a["d"])("",!0),"Profile"==s.page?(Object(a["h"])(),Object(a["c"])(p,{key:3,onSwitchPage:o.switchPage},null,8,["onSwitchPage"])):Object(a["d"])("",!0),"Schedule"==s.page?(Object(a["h"])(),Object(a["c"])(f,{key:4,onSwitchPage:o.switchPage},null,8,["onSwitchPage"])):Object(a["d"])("",!0),"Recomendation"==s.page?(Object(a["h"])(),Object(a["c"])(h,{key:5})):Object(a["d"])("",!0)],64)}var s=n("fadc"),o=n.n(s),r=n("c5db"),i=n.n(r),u=Object(a["u"])("data-v-43eebb04");Object(a["j"])("data-v-43eebb04");var d={class:"containerFullHeight"},l={class:"authForms"},p={class:"manualAuth"},f={class:"pseudoInput"},h={class:"pseudoInput"},b=Object(a["f"])("input",{type:"checkbox",id:"passwordToggle",name:"passwordToggle",hidden:""},null,-1),m={for:"passwordToggle"},g=Object(a["f"])("p",{class:"forgotPassword"},[Object(a["f"])("a",null,"Забыли пароль?")],-1),O={class:"authButtons"},j=Object(a["f"])("p",null,"или",-1),v={class:"message"};Object(a["i"])();var w=u((function(e,t,n,c,s,r){return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])("div",d,[Object(a["f"])("div",l,[Object(a["f"])("div",p,[Object(a["f"])("form",{name:"form",id:"form",hidden:"",onSubmit:t[1]||(t[1]=Object(a["t"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},null,32),Object(a["f"])("div",f,[Object(a["s"])(Object(a["f"])("input",{form:"form",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.user.username=e}),type:"email",placeholder:"Номер телефона или адрес почты",id:"authLogin"},null,512),[[a["q"],s.user.username]])]),Object(a["f"])("div",h,[Object(a["s"])(Object(a["f"])("input",{form:"form",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.user.password=e}),type:s.pass,placeholder:"Пароль",id:"authPassword"},null,8,["type"]),[[a["o"],s.user.password]]),b,Object(a["f"])("label",m,["password"==s.pass?(Object(a["h"])(),Object(a["c"])("img",{key:0,onClick:t[4]||(t[4]=function(e){return s.pass="text"}),src:o.a,alt:"show password",id:"passwordToggleIcon"})):"text"==s.pass?(Object(a["h"])(),Object(a["c"])("img",{key:1,onClick:t[5]||(t[5]=function(e){return s.pass="password"}),src:i.a,alt:"show password",id:"passwordToggleIcon"})):Object(a["d"])("",!0)])]),g,Object(a["f"])("div",O,[Object(a["f"])("button",{form:"form",submit:"",class:"logInButton",onClick:t[6]||(t[6]=function(){return r.handleAuthorization&&r.handleAuthorization.apply(r,arguments)})},"Войти"),j,Object(a["f"])("button",{class:"createAccount",onClick:t[7]||(t[7]=function(){return r.handleRegistration&&r.handleRegistration.apply(r,arguments)})},"Создать аккаунт")])])])]),Object(a["f"])("div",v,Object(a["n"])(s.message),1)],64)})),y=n("1da1"),k=n("5530"),P=(n("96cf"),n("d3b7"),n("a1bc")),S=n.n(P),T=n("5502"),_={name:"Authentication",data:function(){return{user:{username:"",password:""},authorizationLoading:!1,pass:"password",message:""}},emits:["switchPage"],methods:Object(k["a"])(Object(k["a"])({},Object(T["c"])(["updateToken"])),{},{handleRegistration:function(){this.$emit("switchPage","Registration")},handleAuthorization:function(){this.fetchAuth()},fetchAuth:function(){var e=this;fetch("".concat(S.a.data,"auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.user.username,password:this.user.password})}).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:a=t.sent,a?(e.updateToken(a.token),e.$emit("switchPage","Schedule")):"error"==n.message&&(n.data.phone||n.data.email)&&e.message;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.log("Error: ",t),e.message="Сервер недоступен обратитесь к системному администратору"}))}})};n("c6d9");_.render=w,_.__scopeId="data-v-43eebb04";var R=_,x={class:"containerFullHeight"},A={class:"authForms"},F={class:"manualAuth"},I={class:"pseudoInput"},q={class:"pseudoInput"},C={class:"pseudoInput"},H={class:"pseudoInput"},M={class:"pseudoInput"},N=Object(a["f"])("input",{type:"checkbox",id:"passwordToggle",name:"passwordToggle",hidden:""},null,-1),U={for:"passwordToggle"},V={class:"authButtons"},E=Object(a["f"])("p",null,"или",-1),D={class:"message"};function $(e,t,n,c,s,r){return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])("form",{name:"form",id:"form",hidden:"",onSubmit:t[1]||(t[1]=Object(a["t"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},null,32),Object(a["f"])("div",x,[Object(a["f"])("div",A,[Object(a["f"])("div",F,[Object(a["f"])("div",I,[Object(a["s"])(Object(a["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.user.first_name=e}),placeholder:"Имя",type:"text"},null,512),[[a["q"],s.user.first_name]])]),Object(a["f"])("div",q,[Object(a["s"])(Object(a["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.user.last_name=e}),placeholder:"Фамилия",type:"text"},null,512),[[a["q"],s.user.last_name]])]),Object(a["f"])("div",C,[Object(a["s"])(Object(a["f"])("input",{form:"form",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.user.email=e}),placeholder:"E-mail",type:"email"},null,512),[[a["q"],s.user.email]])]),Object(a["f"])("div",H,[Object(a["s"])(Object(a["f"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.user.phone=e}),placeholder:"Телефон",type:"text"},null,512),[[a["q"],s.user.phone]])]),Object(a["f"])("div",M,[Object(a["s"])(Object(a["f"])("input",{form:"form",type:s.pass,"onUpdate:modelValue":t[6]||(t[6]=function(e){return s.user.password=e}),placeholder:"Пароль",id:"authPassword",required:""},null,8,["type"]),[[a["o"],s.user.password]]),N,Object(a["f"])("label",U,["password"==s.pass?(Object(a["h"])(),Object(a["c"])("img",{key:0,onClick:t[7]||(t[7]=function(e){return s.pass="text"}),src:o.a,alt:"show password",id:"passwordToggleIcon"})):"text"==s.pass?(Object(a["h"])(),Object(a["c"])("img",{key:1,onClick:t[8]||(t[8]=function(e){return s.pass="password"}),src:i.a,alt:"show password",id:"passwordToggleIcon"})):Object(a["d"])("",!0)])]),Object(a["f"])("div",V,[Object(a["f"])("button",{form:"form",submit:"",class:"logInButton",onClick:t[9]||(t[9]=function(){return r.handleRegistration&&r.handleRegistration.apply(r,arguments)})},"Создать аккаунт"),E,Object(a["f"])("button",{class:"createAccount",onClick:t[10]||(t[10]=function(){return r.handleAuthentication&&r.handleAuthentication.apply(r,arguments)})},"Уже есть аккаунт")])])])]),Object(a["f"])("div",D,Object(a["n"])(s.message),1)],64)}var B={name:"Registration",data:function(){return{user:{email:"",phone:"",password:"",first_name:"",last_name:""},message:"",pass:"password"}},emits:["switchPage"],methods:Object(k["a"])(Object(k["a"])({},Object(T["c"])(["updateToken"])),{},{handleAuthentication:function(){this.$emit("switchPage","Authentication")},handleRegistration:function(){var e=this;console.log(S.a),fetch("".concat(S.a.data,"register/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.user.email,password:this.user.password,first_name:this.user.first_name,last_name:this.user.last_name,phone:this.user.phone})}).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:a=t.sent,"success"==a.message?fetch("".concat(S.a.data,"auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.user.email,password:e.user.password})}).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:if(a=t.sent,!a){t.next=9;break}return t.next=6,e.updateToken(a.token);case 6:e.$emit("switchPage","TestForm"),t.next=10;break;case 9:"error"==n.message&&(n.data.phone||n.data.email)&&e.message;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.log("Error: ",t),e.message="Сервер недоступен обратитесь к системному администратору"})):"error"==n.message&&(n.data.phone||n.data.email)&&e.message;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.log("Error: ",t),e.message="Сервер недоступен обратитесь к системному администратору"}))}})};n("fd0a");B.render=$;var L=B,Q=Object(a["u"])("data-v-45f9b582");Object(a["j"])("data-v-45f9b582");var z=Object(a["f"])("svg",{id:"icon-iherblogo",viewBox:"0 0 47 16"},[Object(a["f"])("path",{id:"Path_22",d:"M1.5 7.514A1.438 1.438 0 0 0 3 6.038a1.438 1.438 0 0 0-1.5-1.477A1.438 1.438 0 0 0 0 6.037a1.438 1.438 0 0 0 1.5 1.477",class:"cls-3","data-name":"Path 22",transform:"translate(0 -3.971)"}),Object(a["f"])("path",{id:"Path_23",d:"M2.862 40.172c-1.07 0-1.295.581-1.295 1.068v8.377c0 .487.225 1.068 1.295 1.068s1.295-.581 1.295-1.068V41.24c0-.487-.225-1.068-1.295-1.068",class:"cls-3","data-name":"Path 23",transform:"translate(-1.364 -34.973)"}),Object(a["f"])("path",{id:"Path_24",d:"M49.968 4.562c-.874 0-1.317.359-1.317 1.068v5.085h-6.582V5.63c0-.487-.225-1.068-1.295-1.068-.874 0-1.317.359-1.317 1.068v12.985c0 .708.443 1.068 1.317 1.068 1.07 0 1.295-.581 1.295-1.068v-5.561h6.582v5.561c0 .708.443 1.068 1.317 1.068 1.07 0 1.295-.581 1.295-1.068V5.63c0-.487-.225-1.068-1.295-1.068",class:"cls-3","data-name":"Path 24",transform:"translate(-34.351 -3.972)"}),Object(a["f"])("path",{id:"Path_25",d:"M151.409 46.968a1.8 1.8 0 0 0-.875.327 3.717 3.717 0 0 1-1.872.467 2.4 2.4 0 0 1-2.6-2.246h5.163c.833 0 1.522-.125 1.522-1.658a4.334 4.334 0 0 0-4.5-4.564c-2.9 0-4.768 2.121-4.768 5.4 0 3.313 1.893 5.29 5.063 5.29a5.931 5.931 0 0 0 3.214-.828 1.257 1.257 0 0 0 .736-1.035 1.122 1.122 0 0 0-1.09-1.158m-3.2-5.583a1.964 1.964 0 0 1 2.019 2.2h-4.181c.219-1.44.967-2.2 2.168-2.2",class:"cls-3","data-name":"Path 25",transform:"translate(-124.917 -34.21)"}),Object(a["f"])("path",{id:"Path_26",d:"M232.937 39.822a3.088 3.088 0 0 0-2.792 1.628v-.512a.987.987 0 0 0-.245-.753 1.284 1.284 0 0 0-.959-.318c-.829 0-1.249.359-1.249 1.068v8.377c0 .487.224 1.068 1.295 1.068s1.294-.581 1.294-1.068V43.54a2.534 2.534 0 0 1 2.521-1.333c.886-.023 1.248-.372 1.248-1.2s-.333-1.181-1.113-1.181",class:"cls-3","data-name":"Path 26",transform:"translate(-198.226 -34.669)"}),Object(a["f"])("path",{id:"Path_27",d:"M289.785 5.153a3.943 3.943 0 0 0-2.315.636V1.068c0-.487-.225-1.068-1.295-1.068s-1.295.581-1.295 1.068v12.054A1.809 1.809 0 0 0 285.8 15a6.937 6.937 0 0 0 3.327.782 5.045 5.045 0 0 0 5.426-5.449c0-3.145-1.872-5.177-4.768-5.177m-.658 8.49a3.235 3.235 0 0 1-1.657-.446V7.866a2.725 2.725 0 0 1 1.747-.577c1.652 0 2.678 1.226 2.678 3.2s-1.035 3.155-2.769 3.155",class:"cls-3","data-name":"Path 27",transform:"translate(-248.014)"}),Object(a["f"])("path",{id:"Path_28",d:"M347.984 6.423l-.274-.409a.352.352 0 0 0 .237-.347c0-.24-.17-.384-.454-.384h-.414c-.062 0-.075.037-.075.069v1.1c0 .046.025.069.075.069h.16c.05 0 .075-.023.075-.069v-.4h.085l.275.419a.107.107 0 0 0 .095.05h.151a.074.074 0 0 0 .068-.029.067.067 0 0 0 0-.068m-.336-.755c0 .085-.048.121-.159.121h-.175v-.243h.172c.115 0 .162.035.162.121",class:"cls-3","data-name":"Path 28",transform:"translate(-302.097 -4.6)"}),Object(a["f"])("path",{id:"Path_29",d:"M342.437.67a1.215 1.215 0 1 0 1.215 1.215A1.216 1.216 0 0 0 342.437.67m0 2.2a.985.985 0 1 1 .985-.985.988.988 0 0 1-.985.985",class:"cls-3","data-name":"Path 29",transform:"translate(-297.064 -.583)"})],-1);Object(a["i"])();var J=Q((function(e,t,n,c,s,o){return Object(a["h"])(),Object(a["c"])("header",null,[z])})),W=n("1157"),G=n.n(W),K={name:"Header",mounted:function(){var e=G()("#navMenu");G()("#navButton").change((function(){e.slideToggle(500,(function(){G()(".navItem").fadeToggle()}))}))}};n("cc7f");K.render=J,K.__scopeId="data-v-45f9b582";var X=K,Y=(n("b0c0"),Object(a["u"])("data-v-7c1f4e00"));Object(a["j"])("data-v-7c1f4e00");var Z={class:"mainTestIner"},ee={class:"testQuesion"},te={class:"testAnsver"};Object(a["i"])();var ne=Y((function(e,t,n,c,s,o){return Object(a["h"])(),Object(a["c"])("div",Z,[Object(a["f"])("p",ee,Object(a["n"])(s.question.question),1),(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(o.answers,(function(e){return Object(a["h"])(),Object(a["c"])("div",{class:"testIner",key:e},[Object(a["s"])(Object(a["f"])("input",{required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.chosenAnswer=e}),value:e.name,name:"ansver",class:"testRadio",type:"radio"},null,8,["value"]),[[a["p"],s.chosenAnswer]]),Object(a["f"])("p",te,Object(a["n"])(e.name),1)])})),128)),Object(a["f"])("button",{class:"testButton",onClick:t[2]||(t[2]=function(){return o.fetchQuestion&&o.fetchQuestion.apply(o,arguments)})},"Далее")])})),ae=(n("159b"),n("99af"),{name:"TestForm",data:function(){return{chosenAnswer:"",question:{question:"Ваш пол?",answers:[{name:"Мужской"},{name:"Женский"}]},lastQuestion:!1}},computed:{answers:function(){return this.question.answers},questionID:function(){return 0}},emits:["switchPage"],methods:Object(k["a"])(Object(k["a"])({},Object(T["b"])(["getToken"])),{},{fetchQuestion:function(){var e,t,n,a=this;this.question.answers.forEach((function(t){t.name==a.chosenAnswer&&(e=t.id)})),this.question&&(n=this.question.id),t=0==n?"".concat(S.a.data,"get-question/"):"".concat(S.a.data,"get-question/?question_id=").concat(n,"&answer_id=").concat(e),fetch(t,{method:"GET",headers:{Authorization:"Token "+this.getToken()}}).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a.question=n,console.log(n),"success"==n.message&&a.$emit("switchPage","Recomendation");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("Error: ",e),a.message="Сервер недоступен"}))}}),created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(S.a.data,"get-question/"),{method:"GET",headers:{Authorization:"Token "+e.getToken()}}).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:a=t.sent,e.question=a,console.log(e.question),console.log(a),1==e.lastQuestion?e.$emit("switchPage","Recomendation"):1==a.isFinal&&(e.lastQuestion=!0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.log("Error: ",t),e.message="Сервер недоступен"}));case 2:case"end":return t.stop()}}),t)})))()}});n("c3ea");ae.render=ne,ae.__scopeId="data-v-7c1f4e00";var ce=ae,se=Object(a["f"])("button",null,"Изменить пароль",-1);function oe(e,t,n,c,s,o){return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])("p",null,Object(a["n"])(o.username()),1),Object(a["f"])("button",{click:o.handlePassTest},"Пройти тест",8,["click"]),se],64)}var re={name:"Profile",data:function(){return{}},emits:["switchPage"],computed:{username:function(){return this.getUsername}},methods:Object(k["a"])(Object(k["a"])({},Object(T["b"])(["getUsername"])),{},{handlePassTest:function(){this.$emit("switchPage","TestFrom")}})};re.render=oe;var ie=re,ue={key:0,class:"containerFloatHeight"},de={class:"dailyUsageInfo"},le={class:"dailyHeader mainHeader"},pe=Object(a["e"])('<div class="dailyHeader morningHeader"> Утром </div><div class="dailyList"><p>Solgar, Комплекс кверцетина с Ester-C Plus - <strong>перед</strong> едой</p><p>Now Foods - <strong>во время</strong> еды</p><p>Solgar - <strong>после</strong> еды</p></div><hr><div class="dailyHeader middayHeader"> Днём </div><div class="dailyList"><p>Solgar - <strong>перед</strong> едой</p><p>Now Foods, кверцетин с бромелаином - <strong>во время</strong> еды</p><p>Solgar - <strong>после</strong> еды</p></div><hr><div class="dailyHeader eveningHeader"> Вечером </div><div class="dailyList"><p>Solgar - <strong>перед</strong> едой</p><p>Now Foods - <strong>во время</strong> еды</p><p>Solgar - <strong>после</strong> еды</p></div>',8),fe={key:1,class:"containerFloatHeight"},he={class:"weekUsageInfo"},be={class:"weekDay"},me=Object(a["f"])("p",{class:"weekLastDay"}," Последний день курса! ",-1),ge=Object(a["f"])("hr",null,null,-1),Oe=Object(a["f"])("div",{class:"weekMeds"},[Object(a["f"])("p",{class:"weekMed"}," Solgar, Комплекс кверцетина с Ester-C Plus "),Object(a["f"])("p",{class:"weekMed"}," Now Foods, кверцетин с бромелаином ")],-1);function je(e,t,n,c,s,o){return"day"==s.scheduleFormat?(Object(a["h"])(),Object(a["c"])("div",ue,[Object(a["f"])("div",de,[Object(a["f"])("button",{onClick:t[1]||(t[1]=function(){return o.handleSwithToWeek&&o.handleSwithToWeek.apply(o,arguments)}),class:"closeDailyUsageInfo"}),Object(a["f"])("div",le,Object(a["n"])(s.day),1),pe])])):"week"==s.scheduleFormat?(Object(a["h"])(),Object(a["c"])("div",fe,[Object(a["f"])("div",he,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(this.dates,(function(e){return Object(a["h"])(),Object(a["c"])("button",{key:e,onClick:function(t){return o.handleSwithToDay(e)},class:"weekDayWrap"},[Object(a["f"])("p",be,Object(a["n"])(e),1),me,ge,Oe],8,["onClick"])})),128))])])):Object(a["d"])("",!0)}var ve={name:"Schedule",data:function(){return{day:"Сегодня",scheduleFormat:"day"}},emits:["switchPage"],computed:{dates:function(){var e=[],t=new Date;e.push("Сегодня"),e.push("Завтра");for(var n=t.getDay()+2,a=0;a<6;a++){switch(n){case 0:e.push("Воскресенье");break;case 1:e.push("Понедельник");break;case 2:e.push("Вторинк");break;case 3:e.push("Среда");break;case 4:e.push("Четверг");break;case 5:e.push("Пятница");break;case 6:e.push("Суббота");break;default:n-=8}n++}return e},medicaments:function(){return[{name:"kalifornia gold омега 3",time:"с утра после еды",dosa:"2 таблетки"}]}},methods:{handleSwithToDay:function(e){this.day=e,this.scheduleFormat="day"},handleSwithToWeek:function(){this.day="",this.scheduleFormat="week"}}};n("29dd");ve.render=je;var we=ve,ye=Object(a["u"])("data-v-e61e25c4");Object(a["j"])("data-v-e61e25c4");var ke=Object(a["e"])('<div class="containerFloatHeight" data-v-e61e25c4><div class="recomended" data-v-e61e25c4><div class="recomendedHeader" data-v-e61e25c4> Рекомендуем вам к приобретению следующие товары: </div><div class="prodCard" data-v-e61e25c4><div class="mainInfo" data-v-e61e25c4><hr data-v-e61e25c4><div class="shopDesc" data-v-e61e25c4><p class="prodMainName" data-v-e61e25c4>Protocol for Life Balance</p><p class="prodSecondaryName" data-v-e61e25c4>NAC N-ацетил-цистеин, 600 мг, 100 вегетарианских капсул</p><div class="prodPrice" data-v-e61e25c4><p class="prodFullPrice" data-v-e61e25c4>1,509.55</p><p class="prodPartPrice" data-v-e61e25c4>15.10/штука</p></div></div></div><div class="prodDesc" data-v-e61e25c4> Описание: <p data-v-e61e25c4>С селеном и молибденом</p><p data-v-e61e25c4>Поддерживает клеточное здоровье</p><p data-v-e61e25c4>Без ГМО</p><p data-v-e61e25c4>Пищевая добавка</p></div><div class="prodUseInstruction" data-v-e61e25c4> Принимать по 1 капсуле 2 раза в день или в соответствии с рекомендациям врача. </div></div><div class="prodCard" data-v-e61e25c4><div class="mainInfo" data-v-e61e25c4><hr data-v-e61e25c4><div class="shopDesc" data-v-e61e25c4><p class="prodMainName" data-v-e61e25c4>Now Foods</p><p class="prodSecondaryName" data-v-e61e25c4>кверцетин с бромелаином, 120 растительных капсул</p><div class="prodPrice" data-v-e61e25c4><p class="prodFullPrice" data-v-e61e25c4>1,353.84</p><p class="prodPartPrice" data-v-e61e25c4>11.28/штука</p></div></div></div><div class="prodDesc" data-v-e61e25c4> Описание: <p data-v-e61e25c4>Баланс иммунной системы</p><p data-v-e61e25c4>Способствует сезонному укреплению иммунитета</p><p data-v-e61e25c4>Пищевая добавка</p><p data-v-e61e25c4>Подходит для вегетарианцев и веганов</p><p data-v-e61e25c4>Кошерный продукт</p><p data-v-e61e25c4>Общее состояние здоровья</p><p data-v-e61e25c4>Семейное предприятие, основанное в 1968 году</p><p data-v-e61e25c4>Произведено на предприятии, имеющем регистрацию надлежащей производственной практики (GMP)</p></div><div class="prodUseInstruction" data-v-e61e25c4> Принимать по 2 капсулы 2–3 раза в день за 20 минут до еды. Людям с чувствительным пищеварением рекомендуется принимать капсулы во время еды. </div></div></div></div>',1);Object(a["i"])();var Pe=ye((function(e,t,n,c,s,o){return Object(a["h"])(),Object(a["c"])(a["a"],null,[ke,(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(o.products,(function(e){return Object(a["h"])(),Object(a["c"])("div",{class:"productFrame",key:e},[Object(a["f"])("img",{src:e.img},null,8,["src"]),Object(a["f"])("p",null,Object(a["n"])(e.name),1),Object(a["f"])("p",null,Object(a["n"])(e.desc),1),Object(a["f"])("p",null,Object(a["n"])(e.course),1)])})),128))],64)})),Se={name:"Recomendation",computed:{products:function(){var e=[{img:"../assets/1.png",name:"1",desc:"1",course:"1"},{img:"../assets/1.png",name:"2",desc:"2",course:"2"}];return e}}};n("b957");Se.render=Pe,Se.__scopeId="data-v-e61e25c4";var Te=Se,_e=n("0e09"),Re=n.n(_e),xe=n("4c88"),Ae=n.n(xe),Fe=n("49ba"),Ie=n.n(Fe),qe={key:0},Ce=Object(a["f"])("img",{src:Re.a,alt:""},null,-1),He=Object(a["f"])("div",{class:"separator"},null,-1),Me=Object(a["f"])("img",{src:Ae.a,alt:""},null,-1),Ne=Object(a["f"])("div",{class:"separator"},null,-1),Ue=Object(a["f"])("img",{src:Ie.a,alt:""},null,-1);function Ve(e,t,n,c,s,o){return o.autenticationUser?(Object(a["h"])(),Object(a["c"])("footer",qe,[Object(a["f"])("button",{class:{hover:o.isSchedule},onClick:t[1]||(t[1]=function(){return o.handleSchedule&&o.handleSchedule.apply(o,arguments)})},[Ce],2),He,Object(a["f"])("button",{class:{hover:o.isHandbook},onClick:t[2]||(t[2]=function(){return o.handleHandbook&&o.handleHandbook.apply(o,arguments)})},[Me],2),Ne,Object(a["f"])("button",{class:{hover:o.isProfile},onClick:t[3]||(t[3]=function(){return o.handleProfile&&o.handleProfile.apply(o,arguments)})},[Ue],2)])):Object(a["d"])("",!0)}var Ee={name:"Footer",props:["page"],emits:["switchPage"],computed:{autenticationUser:function(){return"Authentication"!=this.page&&"Registration"!=this.page},isSchedule:function(){return"Schedule"==this.page},isHandbook:function(){return"Handbook"==this.page},isProfile:function(){return"Profile"==this.page}},methods:{handleSchedule:function(){this.$emit("switchPage","Schedule")},handleHandbook:function(){this.$emit("switchPage","Handbook")},handleProfile:function(){this.$emit("switchPage","Profile")}}};n("f185");Ee.render=Ve;var De=Ee,$e={name:"App",components:{Authentication:R,Registration:L,Header:X,TestForm:ce,Profile:ie,Schedule:we,Recomendation:Te,Footer:De},data:function(){return{page:"Registration"}},methods:{switchPage:function(e){this.page=e}}};n("38dd");$e.render=c;var Be=$e,Le=n("9483");Object(Le["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Qe=Object(T["a"])({state:function(){return{username:"",token:""}},mutations:{updateToken:function(e,t){e.token=t}},actions:{},getters:{getUsername:function(e){return e.username},getToken:function(e){return e.token}}});Object(a["b"])(Be).use(Qe).mount("#app")},"5bf4":function(e,t,n){},a1bc:function(e,t,n){n("99af");var a={PROTOCOL:"http",HOST:"95.79.50.190",PORT:"8000",VERSION:"v1"},c="".concat(a.PROTOCOL,"://").concat(a.HOST,":").concat(a.PORT,"/api/").concat(a.VERSION,"/");t.data=c},a3c3:function(e,t,n){},ad3e:function(e,t,n){},b957:function(e,t,n){"use strict";n("a3c3")},c3ea:function(e,t,n){"use strict";n("dd71")},c5db:function(e,t,n){e.exports=n.p+"img/visibility_black_24dp.5787ef1e.svg"},c6d9:function(e,t,n){"use strict";n("c9cb")},c9cb:function(e,t,n){},cc7f:function(e,t,n){"use strict";n("4f45")},dd71:function(e,t,n){},e3a1:function(e,t,n){},f185:function(e,t,n){"use strict";n("e3a1")},fadc:function(e,t,n){e.exports=n.p+"img/visibility_off_black_24dp.7f0a7450.svg"},fd0a:function(e,t,n){"use strict";n("5bf4")}});
//# sourceMappingURL=app.846f876e.js.map