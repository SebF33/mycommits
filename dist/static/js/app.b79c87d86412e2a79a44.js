webpackJsonp([1],{"/ynP":function(t,e){},"9M+g":function(t,e){},I10N:function(t,e,r){t.exports=r.p+"static/img/inspectocat.0f6b0e0.png"},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a=r("Tqaz"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"/mycommits",draggable:"false",ondragstart:"return false"}},[e("img",{attrs:{src:r("I10N"),alt:"logo"}})])}]};var o=r("VU/8")({name:"App"},s,!1,function(t){r("qa0C")},null,null).exports,c=(r("qb6w"),r("9M+g"),r("/ocq")),i=r("fZjL"),u=r.n(i),l=r("Xxa5"),m=r.n(l),p=r("exGp"),f=r.n(p),d={name:"Commits",props:{selectedRepo:String},methods:{formatCommitDate:function(t){return t.replace(/T/g," à ").replace(/Z/g," ")},truncate:function(t){var e=t.indexOf("\n");return e>0?t.slice(0,e):t},console:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return console.log(t),t})},setup:function(t){var e=this,r=["master","main","gh-pages"],a=Object(n.ref)(null),s=Object(n.ref)(3),o=Object(n.ref)(r[0]),c=Object(n.ref)(t.selectedRepo),i=Object(n.ref)(!1);return Object(n.watch)(function(){return t.selectedRepo},function(t){c.value=t}),Object(n.watchEffect)(f()(m.a.mark(function t(){var r,n,u;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.github.com/repos/SebF33/"+c.value+"/commits?per_page="+s.value+"&sha="+o.value,t.next=4,fetch(r);case 4:return n=t.sent,t.next=7,n.json();case 7:"Not Found"===(u=t.sent).message?(i.value=!1,a.value="Pas de commit dans cette branche."):(i.value=!0,a.value=u),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a.value="Erreur lors de la requête API : "+t.t0.message;case 14:case"end":return t.stop()}},t,e,[[0,11]])}))),{branches:r,commits:a,counter:s,currentBranch:o,decrementCounter:function(){1!==s.value&&s.value--},hasCommit:i,incrementCounter:function(){s.value<1||s.value++}}}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"buttons font-weight-bold mt-2"},[r("span",[t._v("-/+ de commits : ")]),t._v(" "),r("b-button",{staticClass:"btn btn-primary",on:{click:t.decrementCounter}},[t._v("-")]),t._v(" "),r("span",{staticClass:"counter"},[t._v(" "+t._s(t.counter)+" ")]),t._v(" "),r("b-button",{staticClass:"btn btn-primary",on:{click:t.incrementCounter}},[t._v("+")])],1),t._v(" "),r("h2",[t._v("Mes derniers commits sur "),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.selectedRepo))]),t._v(" :")]),t._v(" "),t._l(t.branches,function(e){return r("li",{key:e,staticClass:"branch-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentBranch,expression:"currentBranch"}],attrs:{type:"radio",id:e,name:"branch"},domProps:{value:e,checked:t._q(t.currentBranch,e)},on:{change:function(r){t.currentBranch=e}}}),t._v(" "),r("label",{attrs:{for:e}},[t._v(t._s(e))])])}),t._v(" "),r("h3",[t._v("Branche : "+t._s(t.currentBranch))]),t._v(" "),t.hasCommit?r("ul",t._l(t.commits,function(e){var n=e.html_url,a=e.sha,s=e.author,o=e.commit;return r("li",[r("a",{staticClass:"commit",attrs:{href:n,target:"_blank"}},[t._v("\n        "+t._s(a.slice(0,10))+"\n      ")]),t._v("\n      - "),r("span",{staticClass:"message"},[t._v(t._s(t.truncate(o.message)))]),t._v(" "),r("br"),t._v("\n      par\n      "),r("span",{staticClass:"author font-weight-bold"},[r("a",{attrs:{href:s.html_url,target:"_blank"}},[t._v("\n          "+t._s(o.author.name)+"\n        ")])]),t._v("\n      le "),r("span",{staticClass:"date font-weight-bold"},[t._v(t._s(t.formatCommitDate(o.author.date)))])])}),0):r("p",{staticClass:"font-italic"},[t._v(t._s(t.commits))])],2)},staticRenderFns:[]};var h={components:{Commits:r("VU/8")(d,v,!1,function(t){r("dC6R")},null,null).exports},props:{columns:Array,counter:Number,data:Array,filterKey:String},data:function(){return{selectedRepo:"magicardt",sortKey:"",sortOrders:this.columns.reduce(function(t,e){return t[e]=1,t},{})}},computed:{filteredData:function(){var t=this.data,e=this.filterKey&&this.filterKey.toLowerCase();e&&(t=t.filter(function(t){return u()(t).some(function(r){return String(t[r]).toLowerCase().indexOf(e)>-1})}));var r=this.sortKey;if(r){var n=this.sortOrders[r];t=t.slice().sort(function(t,e){return((t=t[r])===(e=e[r])?0:t>e?1:-1)*n})}return t}},methods:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},console:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return console.log(t),t}),handleItemClick:function(t){this.selectedRepo=t},sortBy:function(t){this.sortKey=t,this.sortOrders[t]*=-1}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-auto"},[t.filteredData.length?r("table",{staticClass:"mx-auto mt-4"},[r("thead",[r("tr",t._l(t.columns,function(e){return r("th",{class:{active:t.sortKey==e},on:{click:function(r){return t.sortBy(e)}}},[t._v("\n          "+t._s(t.capitalize(e))+"\n          "),r("span",{staticClass:"arrow",class:t.sortOrders[e]>0?"asc":"dsc"})])}),0)]),t._v(" "),r("tbody",{staticClass:"font-weight-bold"},t._l(t.filteredData,function(e){return r("tr",{on:{click:function(r){return t.handleItemClick(e.repo)}}},t._l(t.columns,function(n){return r("td",{staticStyle:{cursor:"pointer"}},[t._v("\n          "+t._s(e[n])+"\n        ")])}),0)}),0)]):r("p",[t._v("Pas de résultats trouvés.")]),t._v(" "),r("Commits",{attrs:{selectedRepo:t.selectedRepo}})],1)},staticRenderFns:[]};var g={name:"Home",components:{Table:r("VU/8")(h,_,!1,function(t){r("/ynP")},null,null).exports},data:function(){return{title:"MyCommits"}},setup:function(){return{gridColumns:["repo","stack"],gridData:[{repo:"magicardt",stack:"Vue.js"},{repo:"sebflix",stack:"PHP"},{repo:"shareus",stack:"Slim"},{repo:"thaimes",stack:"Symfony"},{repo:"urarts",stack:"Fresh"}],searchQuery:Object(n.ref)("")}}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"input-group flex-nowrap m-auto"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filtrer par nom de projet...","aria-label":"Projet","aria-describedby":"addon-wrapping"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),t._v(" "),r("Table",{attrs:{columns:t.gridColumns,data:t.gridData,filterKey:t.searchQuery}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"addon-wrapping"}},[this._v("@")])])}]};var C=r("VU/8")(g,b,!1,function(t){r("ZwP8")},"data-v-da139c20",null).exports;n.default.use(c.a);var y=new c.a({routes:[{path:"/",name:"Home",component:C}]});n.default.config.productionTip=!1,n.default.use(a.a),new n.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},ZwP8:function(t,e){},dC6R:function(t,e){},qa0C:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b79c87d86412e2a79a44.js.map