(this.webpackJsonpreactTutorial=this.webpackJsonpreactTutorial||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(4),r=(c(12),c(6)),i=c(1),a=c(3),j=c.n(a),l=c(5);function o(e){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(j.a.mark((function e(t){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(t,"/images/random/12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s.message);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){return Object(s.jsx)("header",{className:"hero is-dark is-bold",children:Object(s.jsx)("div",{className:"hero-body",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"title",children:"Cute Dog Images"})})})})},b=function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("figure",{className:"image",children:Object(s.jsx)("img",{src:e.src,alt:"cute dog"})})})})},h=function(e){return null==e.urls?Object(s.jsx)(f,{}):Object(s.jsx)("div",{className:"columns is-vcentered is-multiline",children:e.urls.map((function(e){return Object(s.jsx)("div",{className:"column is-3",children:Object(s.jsx)(b,{src:e})},e)}))})},m=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){o("shiba").then((function(e){n(e)}))}),[]),Object(s.jsxs)("main",{children:[Object(s.jsx)("section",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(x,{onFormSubmit:function(e){o(e).then((function(e){n(e)}))}})})}),Object(s.jsx)("section",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(h,{urls:c})})})]})},x=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault();var c=t.target.elements.breed;e.onFormSubmit(c.value)},children:Object(s.jsxs)("div",{className:"field has-addons",children:[Object(s.jsx)("div",{className:"control is-expanded",children:Object(s.jsx)("div",{className:"select is-fullwidth",children:Object(s.jsxs)("select",{name:"breed",defaultValue:"shiba",children:[Object(s.jsx)("option",{value:"shiba",children:"Shiba"}),Object(s.jsx)("option",{value:"akita",children:"Akita"})]})})}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("button",{type:"submit",className:"button is-dark",children:"Reload"})})]})})})},O=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("div",{className:"content has-text-centered",children:[Object(s.jsx)("p",{children:"Dog images are retrieved from Dog API"}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:"https://dog.ceo/dog-api/about",children:"Donate to Dog API"})})]})})},f=function(){return Object(s.jsx)("p",{children:"Loading..."})},v=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(m,{}),Object(s.jsx)(O,{})]})};Object(n.render)(Object(s.jsx)(v,{}),document.querySelector("#content"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e83a403.chunk.js.map