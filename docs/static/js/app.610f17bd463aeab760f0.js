webpackJsonp([1,0],[function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=a(67),i=n(s),o=a(66),r=n(o),c=a(40),d=n(c),l=a(46),u=n(l),f=a(49),v=n(f),m=a(50),p=n(m),_=a(52),h=n(_),b=a(45),C=n(b),g=a(43),w=n(g),x=a(42),y=n(x),F=a(47),R=n(F),$=a(41),j=n($),E=a(44),I=n(E),k=a(51),M=n(k),S=a(48),O=n(S);i.default.use(r.default);var P=new r.default({linkActiveClass:"active",routes:[{name:"home",path:"/",component:u.default},{name:"reveal",path:"/reveal",component:v.default},{name:"slider",path:"/slider",component:p.default},{name:"tooltip",path:"/tooltip",component:h.default},{name:"dropdown-menu",path:"/dropdown-menu",component:C.default},{name:"drilldown-menu",path:"/drilldown-menu",component:w.default},{name:"accordion-menu",path:"/accordion-menu",component:y.default},{name:"magellan",path:"/magellan",component:R.default},{name:"accordion",path:"/accordion",component:j.default},{name:"dropdown",path:"/dropdown",component:I.default},{name:"tabs",path:"/tabs",component:M.default},{name:"orbit",path:"/orbit",component:O.default}]});new i.default({router:P,el:"#app",template:"<App/>",components:{App:d.default}})},function(t,e,a){"use strict";a(33),a(34),a(32),t.exports={mounted:function(){$(this.$el).foundation()},unmounted:function(){$(this.$el).foundation.destroy()}}},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){this.offCanvas=new Foundation.OffCanvas($("#offCanvas"))}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"accordion",data:function(){return{msg:"Accordion"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"accordion-menu",data:function(){return{msg:"Accordion Menu"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"drilldown-menu",data:function(){return{msg:"Drilldown Menu"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"dropdown",data:function(){return{msg:"Dropdown"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"dropdown-menu",data:function(){return{msg:"Dropdown Menu"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Vue.js 2 + Foundation 6"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"magellan",data:function(){return{msg:"Magellan"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"orbit",data:function(){return{msg:"Orbit"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"reveal",data:function(){return{msg:"Reveal"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"slider",data:function(){return{msg:"Slider",dataValue:50,dataEnd:200}},mounted:function(){var t=this;$(this.$el).on("moved.zf.slider",function(){t.dataValue=$(".slider-input").val()})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"tabs",data:function(){return{msg:"Tabs"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(1)],name:"tooltip",data:function(){return{msg:"Tooltip"}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,a){t.exports=a.p+"static/img/01.f066f8c.jpg"},function(t,e,a){t.exports=a.p+"static/img/02.6c06d9e.jpg"},function(t,e,a){t.exports=a.p+"static/img/03.54aa350.jpg"},function(t,e,a){t.exports=a.p+"static/img/04.7bf203e.jpg"},function(t,e,a){t.exports=a.p+"static/img/vue-yeti.076c405.jpg"},function(t,e,a){var n,s;a(26),n=a(3);var i=a(63);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,a){var n,s;a(16),n=a(4);var i=a(53);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-0225e31f",t.exports=n},function(t,e,a){var n,s;a(21),n=a(5);var i=a(58);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-239c0cc4",t.exports=n},function(t,e,a){var n,s;a(19),n=a(6);var i=a(56);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-15dc46d3",t.exports=n},function(t,e,a){var n,s;a(28),n=a(7);var i=a(65);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-cfd659ec",t.exports=n},function(t,e,a){var n,s;a(18),n=a(8);var i=a(55);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-1200fc09",t.exports=n},function(t,e,a){var n,s;a(23),n=a(9);var i=a(60);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-66a90558",t.exports=n},function(t,e,a){var n,s;a(24),n=a(10);var i=a(61);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-73b38e18",t.exports=n},function(t,e,a){var n,s;a(25),n=a(11);var i=a(62);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-78a2c4a1",t.exports=n},function(t,e,a){var n,s;a(20),n=a(12);var i=a(57);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-1df3fd06",t.exports=n},function(t,e,a){var n,s;a(27),n=a(13);var i=a(64);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-a82237cc",t.exports=n},function(t,e,a){var n,s;a(22),n=a(14);var i=a(59);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4e9fdc77",t.exports=n},function(t,e,a){var n,s;a(17),n=a(15);var i=a(54);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-09f5dc1a",t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"accordion",attrs:{"data-accordion":""}},[a("li",{staticClass:"accordion-item is-active",attrs:{"data-accordion-item":""}},[a("a",{staticClass:"accordion-title",attrs:{href:"#"}},[t._v("Accordion 1")]),t._v(" "),a("div",{staticClass:"accordion-content",attrs:{"data-tab-content":""}},[t._v("\n          If you init Foundation in the component, this will work fine.\n        ")])]),t._v(" "),a("li",{staticClass:"accordion-item",attrs:{"data-accordion-item":""}},[a("a",{staticClass:"accordion-title",attrs:{href:"#"}},[t._v("Accordion 2")]),t._v(" "),a("div",{staticClass:"accordion-content",attrs:{"data-tab-content":""}},[t._v("\n          I need to be clicked, in order to show up.\n        ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    The "),a("span",{staticClass:"has-tip",attrs:{"data-tooltip":"","aria-haspopup":"true","data-disable-hover":"false",tabindex:"1",title:"Fancy word for a beetle."}},[t._v("scarabaeus")]),t._v(" hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.\n    ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"dropdown menu",attrs:{"data-dropdown-menu":""}},[a("li",[a("a",[t._v("Item 1")]),t._v(" "),a("ul",{staticClass:"menu"},[a("li",[a("a",[t._v("Item 1A")])])])]),t._v(" "),a("li",[a("a",[t._v("Item 2")])]),t._v(" "),a("li",[a("a",[t._v("Item 3")])]),t._v(" "),a("li",[a("a",[t._v("Item 4")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"vertical menu",attrs:{"data-drilldown":""}},[a("li",[a("a",[t._v("Item 1")]),t._v(" "),a("ul",{staticClass:"vertical menu"},[a("li",[a("a",[t._v("Item 1A")])])])]),t._v(" "),a("li",[a("a",[t._v("Item 2")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reveal",attrs:{id:"exampleModal1","data-reveal":""}},[a("h1",[t._v("Awesome. I Have It.")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("Your couch. It is mine.")]),t._v(" "),a("p",[t._v("I'm a cool paragraph that lives inside of an even cooler modal. Wins!")]),t._v(" "),a("button",{staticClass:"close-button",attrs:{"data-close":"","aria-label":"Close modal",type:"button"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{"data-open":"exampleModal1"}},[t._v("Click me for a modal")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"vertical menu",attrs:{"data-accordion-menu":""}},[a("li",[a("a",[t._v("Item 1")]),t._v(" "),a("ul",{staticClass:"menu vertical nested"},[a("li",[a("a",[t._v("Item 1A")])]),t._v(" "),a("li",[a("a",[t._v("Item 1B")])])])]),t._v(" "),a("li",[a("a",[t._v("Item 2")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"tabs",attrs:{"data-tabs":"",id:"deeplinked-tabs"}},[a("li",{staticClass:"tabs-title is-active"},[a("a",{attrs:{href:"#panel1d","aria-selected":"true"}},[t._v("Tab 1")])]),t._v(" "),a("li",{staticClass:"tabs-title"},[a("a",{attrs:{href:"#panel2d"}},[t._v("Tab 2")])]),t._v(" "),a("li",{staticClass:"tabs-title"},[a("a",{attrs:{href:"#panel3d"}},[t._v("Tab 3")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-content",attrs:{"data-tabs-content":"deeplinked-tabs"}},[a("div",{staticClass:"tabs-panel is-active",attrs:{id:"panel1d"}},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])]),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"panel2d"}},[a("p",[t._v("Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.")])]),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"panel3d"}},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row align-middle"},[t._m(0),t._v(" "),a("div",{staticClass:"small-12 medium-5 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v("This is a demo integration of Foundation for Sites 6.3 in a VueJS 2.1 single-page application.")]),t._v(" "),a("a",{staticClass:"button secondary call-button",attrs:{"data-toggle":"offCanvas"}},[t._v("Components")]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-10 medium-5 small-offset-1 columns image"},[n("img",{attrs:{src:a(39)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button secondary hollow call-button",attrs:{href:"https://github.com/hal0gen/vue-foundation"}},[a("i",{staticClass:"icon-github-circled"}),t._v("Source")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"horizontal menu",attrs:{"data-magellan":""}},[a("li",[a("a",{attrs:{href:"#first"}},[t._v("First")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#second"}},[t._v("Second")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#third"}},[t._v("Third")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sections"},[a("section",{attrs:{id:"first","data-magellan-target":"first"}},[a("span",[t._v("First Section")])]),t._v(" "),a("section",{attrs:{id:"second","data-magellan-target":"second"}},[a("span",[t._v("Second Section")])]),t._v(" "),a("section",{attrs:{id:"third","data-magellan-target":"third"}},[a("span",[t._v("Third Section")])])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orbit",attrs:{role:"region","aria-label":"Favorite Space Pictures","data-orbit":""}},[n("ul",{staticClass:"orbit-container"},[n("button",{staticClass:"orbit-previous"},[n("span",{staticClass:"show-for-sr"},[t._v("Previous Slide")]),t._v("◀︎")]),t._v(" "),n("button",{staticClass:"orbit-next"},[n("span",{staticClass:"show-for-sr"},[t._v("Next Slide")]),t._v("▶︎")]),t._v(" "),n("li",{staticClass:"is-active orbit-slide"},[n("img",{staticClass:"orbit-image",attrs:{src:a(35),alt:"Space"}}),t._v(" "),n("figcaption",{staticClass:"orbit-caption"},[t._v("Space, the final frontier.")])]),t._v(" "),n("li",{staticClass:"orbit-slide"},[n("img",{staticClass:"orbit-image",attrs:{src:a(36),alt:"Space"}}),t._v(" "),n("figcaption",{staticClass:"orbit-caption"},[t._v("Lets Rocket!")])]),t._v(" "),n("li",{staticClass:"orbit-slide"},[n("img",{staticClass:"orbit-image",attrs:{src:a(37),alt:"Space"}}),t._v(" "),n("figcaption",{staticClass:"orbit-caption"},[t._v("Encapsulating")])]),t._v(" "),n("li",{staticClass:"orbit-slide"},[n("img",{staticClass:"orbit-image",attrs:{src:a(38),alt:"Space"}}),t._v(" "),n("figcaption",{staticClass:"orbit-caption"},[t._v("Outta This World")])])]),t._v(" "),n("nav",{staticClass:"orbit-bullets"},[n("button",{staticClass:"is-active",attrs:{"data-slide":"0"}},[n("span",{staticClass:"show-for-sr"},[t._v("First slide details.")]),n("span",{staticClass:"show-for-sr"},[t._v("Current Slide")])]),t._v(" "),n("button",{attrs:{"data-slide":"1"}},[n("span",{staticClass:"show-for-sr"},[t._v("Second slide details.")])]),t._v(" "),n("button",{attrs:{"data-slide":"2"}},[n("span",{staticClass:"show-for-sr"},[t._v("Third slide details.")])]),t._v(" "),n("button",{attrs:{"data-slide":"3"}},[n("span",{staticClass:"show-for-sr"},[t._v("Fourth slide details.")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"off-canvas position-right",attrs:{id:"offCanvas","data-off-canvas":""}},[a("ul",{staticClass:"sidebar-menu",attrs:{"data-close":"offCanvas"}},[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/reveal",exact:""}},[t._v("Reveal")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/slider",exact:""}},[t._v("Slider")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/tooltip",exact:""}},[t._v("Tooltip")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/dropdown-menu",exact:""}},[t._v("Dropdown Menu")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/drilldown-menu",exact:""}},[t._v("Drilldown Menu")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/accordion-menu",exact:""}},[t._v("Accordion Menu")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/magellan",exact:""}},[t._v("Magellan")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/accordion",exact:""}},[t._v("Accordion")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/dropdown",exact:""}},[t._v("Dropdown")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/tabs",exact:""}},[t._v("Tabs")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/orbit",exact:""}},[t._v("Orbit")])],1)])]),t._v(" "),a("div",{staticClass:"off-canvas-content",attrs:{"data-off-canvas-content":""}},[a("div",{staticClass:"top-bar"},[a("ul",{staticClass:"menu expanded"},[a("li",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[t._v("Vue-Foundation")])],1),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("router-view")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"button small menu-button",attrs:{"data-toggle":"offCanvas"}},[t._v("Menu")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("div",{staticClass:"slider",attrs:{"data-slider":"","data-initial-start":this.dataValue,"data-end":this.dataEnd}},[a("span",{staticClass:"slider-handle",attrs:{"data-slider-handle":"",role:"slider",tabindex:"1"}}),t._v(" "),a("span",{staticClass:"slider-fill",attrs:{"data-slider-fill":""}}),t._v(" "),a("input",{staticClass:"slider-input",attrs:{type:"hidden"}})]),t._v(" "),a("p",[t._v("Value: "+t._s(t.dataValue))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button","data-toggle":"example-dropdown"}},[t._v("Toggle Dropdown")]),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button","data-toggle":"example-dropdown-1"}},[t._v("Hoverable Dropdown")]),t._v(" "),a("div",{staticClass:"dropdown-pane",attrs:{id:"example-dropdown-1","data-dropdown":"","data-hover":"true","data-hover-pane":"true"}},[t._v("\n      v-foundation directive doesn't work here\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-pane",attrs:{id:"example-dropdown","data-dropdown":"","data-auto-focus":"true"}},[t._v("\n      Example form in a dropdown.\n      "),a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"medium-6 columns"},[a("label",[t._v("Name\n              "),a("input",{attrs:{type:"text",placeholder:"Kirk, James T."}})])]),t._v(" "),a("div",{staticClass:"medium-6 columns"},[a("label",[t._v("Rank\n              "),a("input",{attrs:{type:"text",placeholder:"Captain"}})])])])])])}]}}]);
//# sourceMappingURL=app.610f17bd463aeab760f0.js.map