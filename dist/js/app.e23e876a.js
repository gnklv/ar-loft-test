(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)i=c[d],n[i]&&m.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4798:function(e,t,a){"use strict";var r=a("5714"),n=a.n(r);n.a},"561f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("v-tabs",{attrs:{"show-arrows":"","slider-color":"grey"}},[e._l(e.categoriesValues,function(t){return a("v-tab",{key:"tab-"+t.key,attrs:{href:"#tab-"+t.key}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),e._l(e.categoriesValues,function(t){return a("v-tab-item",{key:"tab-item-"+t.key,attrs:{value:"tab-"+t.key}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.filteredModels(t.key),function(t){return a("v-flex",{key:t.key,attrs:{xs12:"",sm6:"",md3:""}},[a("a",{staticClass:"card pa-2",attrs:{rel:"ar",href:t.usdz.url}},[a("img",{staticStyle:{display:"none"},attrs:{src:"",alt:""}}),a("v-card",{attrs:{flat:""}},[a("div",{staticClass:"card__preview",style:{backgroundImage:"url("+(t.preview?t.preview.url:"")+")"}},[t.preview?e._e():a("div",{staticClass:"card__preview-stub"},[a("svg",{staticStyle:{fill:"#e5e5e5"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 500 500"}},[a("path",{attrs:{d:"M215.433 300.489v-2.563c0-5.45-3.017-8.118-8.558-8.118l-4.506.005c-5.557 0-8.573 2.663-8.573 8.113v8.02h34.66l-.005-5.449-13.018-.008zm-4.953.007h-11.732v-2.577c0-1.731.788-2.669 3.269-2.669h5.201c2.469 0 3.263.938 3.263 2.669v2.577zM214.344 279.726c-.005-2.469 1.195-3.566 4.408-3.566h5.442c2.816 0 3.376-.198 4.257-.493v-5.542c-1.288.552-2.525.595-4.205.605l-5.338-.011c-3.621.011-6.245.891-7.385 3.616-1.135-2.421-3.468-3.567-7.025-3.567h-2.732c-5.337 0-7.969 2.424-7.969 8.063v8.229l34.655-.011.005-5.444h-14.112v-1.879zm-4.948 1.878l-10.648.004v-2.618c0-1.926 1.089-2.774 3.565-2.768h3.414c2.779 0 3.669 1.232 3.675 3.251l-.006 2.131zM220.133 251.092h-18.011c-5.55 0-8.714 2.924-8.714 8.263-.009 5.354 3.164 8.276 8.714 8.276h18.011c5.555 0 8.721-2.923 8.715-8.276 0-5.339-3.16-8.263-8.715-8.263zm.352 11.089h-18.712c-2.484 0-3.413-1.089-3.422-2.826.009-1.718.938-2.821 3.414-2.817l18.72-.004c2.468.004 3.412 1.104 3.412 2.83 0 1.728-.934 2.817-3.412 2.817zM220.133 232.196c-9.891 0-11.235 10.654-18.368 10.654-2.476-.01-3.414-.998-3.414-2.725.009-1.738.949-2.726 3.414-2.726h1.437v-5.15h-1.08c-5.55 0-8.723 2.715-8.723 8.021.009 5.305 3.173 8.02 8.723 8.02 9.889 0 11.23-10.643 18.363-10.643 2.478 0 3.36 1.084 3.364 2.821-.004 1.728-.896 2.826-3.364 2.826h-2.484v5.141h2.135c5.542 0 8.712-2.768 8.718-8.111 0-5.36-3.166-8.128-8.721-8.128zM193.796 213.867v16.828l4.952-.01v-5.681h29.703l.005-5.45h-29.708v-5.697zM202.122 211.945h18.011c5.555 0 8.715-2.914 8.715-8.262 0-5.343-3.16-8.257-8.715-8.257l-18.016-.01c-5.545.01-8.718 2.934-8.709 8.267 0 5.348 3.164 8.262 8.714 8.262zm-.357-11.079h18.725c2.464 0 3.408 1.095 3.413 2.817-.005 1.729-.949 2.821-3.417 2.832h-18.712c-2.484 0-3.413-1.103-3.422-2.832-.001-1.732.948-2.817 3.413-2.817zM253.626 225.116h-8.96v-29.69l-5.45-.01v34.65h14.42zM263.815 230.865c5.333 0 8.266-3.161 8.266-8.718l-.008-18.014c.008-5.547-2.925-8.708-8.269-8.717-5.341 0-8.263 3.17-8.263 8.717v18.02c.001 5.542 2.917 8.712 8.274 8.712zm-.01-30.489c1.732 0 2.828.94 2.828 3.403v18.726c0 2.464-1.096 3.408-2.828 3.408-1.729 0-2.822-.944-2.811-3.412l-.012-18.722c0-2.463 1.086-3.411 2.823-3.403zM281.003 215.764h7.033l.009-4.951h-7.042v-10.437h8.962v-4.96l-14.395.01-.007 34.64h5.44zM296.689 230.066h5.446l-.011-29.2h5.693v-5.44l-16.82-.01-.005 5.45 5.697.005zM239.216 237.347l.009 68.599h68.592l.008-68.599h-68.609zm30.897 34.206l-25.931 25.931-.008-51.87 25.939 25.939zm-22.241-29.251h51.494l-25.749 25.747-25.745-25.747zm25.746 32.756l25.931 25.931h-51.864l25.933-25.931zm3.504-3.504l25.745-25.744-.006 51.484-25.739-25.74z"}})])])]),a("v-layout",{attrs:{"justify-center":"","pa-2":""}},[a("h3",{staticClass:"subheading"},[e._v(e._s(t.name))])])],1)],1)])}),1)],1)})],2)],1)},i=[],c=(a("456d"),a("5df3"),a("96cf"),a("3b8d")),s=(a("ac6a"),a("8615"),a("cebc")),l=a("2f62"),u={data:function(){return{asyncDataStatus_ready:!1}},methods:{asyncDataStatus_fetched:function(){this.asyncDataStatus_ready=!0,this.$emit("ready")}}},d={name:"PageHome",mixins:[u],computed:Object(s["a"])({},Object(l["c"])({categories:function(e){return e.categories},models:function(e){return e.models}}),{categoriesValues:function(){return Object.values(this.categories)}}),created:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchAllCategories();case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(e){return!!e.models&&a.fetchModels({ids:Object.keys(e.models)})}));case 5:this.asyncDataStatus_fetched();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(s["a"])({},Object(l["b"])("categories",["fetchAllCategories"]),Object(l["b"])("models",["fetchModels"]),{filteredModels:function(e){return Object.values(this.models).filter(function(t){return t.categoryId===e})}})},m=d,p=(a("b32b"),a("2877")),f=a("6544"),h=a.n(f),v=a("b0af"),g=a("0e8f"),b=a("a722"),y=a("71a3"),w=a("c671"),x=a("fe57"),k=Object(p["a"])(m,o,i,!1,null,"722cb216",null),_=k.exports;h()(k,{VCard:v["a"],VFlex:g["a"],VLayout:b["a"],VTab:y["a"],VTabItem:w["a"],VTabs:x["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"container"},[a("SvgLoader")],1)},j=[],I=a("59ca"),C=a.n(I),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"svg-loader",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500"}},[a("path",{attrs:{d:"M215.433 300.489v-2.563c0-5.45-3.017-8.118-8.558-8.118l-4.506.005c-5.557 0-8.573 2.663-8.573 8.113v8.02h34.66l-.005-5.449-13.018-.008zm-4.953.007h-11.732v-2.577c0-1.731.788-2.669 3.269-2.669h5.201c2.469 0 3.263.938 3.263 2.669v2.577zM214.344 279.726c-.005-2.469 1.195-3.566 4.408-3.566h5.442c2.816 0 3.376-.198 4.257-.493v-5.542c-1.288.552-2.525.595-4.205.605l-5.338-.011c-3.621.011-6.245.891-7.385 3.616-1.135-2.421-3.468-3.567-7.025-3.567h-2.732c-5.337 0-7.969 2.424-7.969 8.063v8.229l34.655-.011.005-5.444h-14.112v-1.879zm-4.948 1.878l-10.648.004v-2.618c0-1.926 1.089-2.774 3.565-2.768h3.414c2.779 0 3.669 1.232 3.675 3.251l-.006 2.131zM220.133 251.092h-18.011c-5.55 0-8.714 2.924-8.714 8.263-.009 5.354 3.164 8.276 8.714 8.276h18.011c5.555 0 8.721-2.923 8.715-8.276 0-5.339-3.16-8.263-8.715-8.263zm.352 11.089h-18.712c-2.484 0-3.413-1.089-3.422-2.826.009-1.718.938-2.821 3.414-2.817l18.72-.004c2.468.004 3.412 1.104 3.412 2.83 0 1.728-.934 2.817-3.412 2.817zM220.133 232.196c-9.891 0-11.235 10.654-18.368 10.654-2.476-.01-3.414-.998-3.414-2.725.009-1.738.949-2.726 3.414-2.726h1.437v-5.15h-1.08c-5.55 0-8.723 2.715-8.723 8.021.009 5.305 3.173 8.02 8.723 8.02 9.889 0 11.23-10.643 18.363-10.643 2.478 0 3.36 1.084 3.364 2.821-.004 1.728-.896 2.826-3.364 2.826h-2.484v5.141h2.135c5.542 0 8.712-2.768 8.718-8.111 0-5.36-3.166-8.128-8.721-8.128zM193.796 213.867v16.828l4.952-.01v-5.681h29.703l.005-5.45h-29.708v-5.697zM202.122 211.945h18.011c5.555 0 8.715-2.914 8.715-8.262 0-5.343-3.16-8.257-8.715-8.257l-18.016-.01c-5.545.01-8.718 2.934-8.709 8.267 0 5.348 3.164 8.262 8.714 8.262zm-.357-11.079h18.725c2.464 0 3.408 1.095 3.413 2.817-.005 1.729-.949 2.821-3.417 2.832h-18.712c-2.484 0-3.413-1.103-3.422-2.832-.001-1.732.948-2.817 3.413-2.817zM253.626 225.116h-8.96v-29.69l-5.45-.01v34.65h14.42zM263.815 230.865c5.333 0 8.266-3.161 8.266-8.718l-.008-18.014c.008-5.547-2.925-8.708-8.269-8.717-5.341 0-8.263 3.17-8.263 8.717v18.02c.001 5.542 2.917 8.712 8.274 8.712zm-.01-30.489c1.732 0 2.828.94 2.828 3.403v18.726c0 2.464-1.096 3.408-2.828 3.408-1.729 0-2.822-.944-2.811-3.412l-.012-18.722c0-2.463 1.086-3.411 2.823-3.403zM281.003 215.764h7.033l.009-4.951h-7.042v-10.437h8.962v-4.96l-14.395.01-.007 34.64h5.44zM296.689 230.066h5.446l-.011-29.2h5.693v-5.44l-16.82-.01-.005 5.45 5.697.005zM239.216 237.347l.009 68.599h68.592l.008-68.599h-68.609zm30.897 34.206l-25.931 25.931-.008-51.87 25.939 25.939zm-22.241-29.251h51.494l-25.749 25.747-25.745-25.747zm25.746 32.756l25.931 25.931h-51.864l25.933-25.931zm3.504-3.504l25.745-25.744-.006 51.484-25.739-25.74z"}})])},V=[],M={name:"SvgLoader"},R=M,P=(a("5e02"),Object(p["a"])(R,z,V,!1,null,null,null)),S=P.exports,$={name:"PageModel",components:{SvgLoader:S},data:function(){return{model:{url:null}}},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.query.code,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,C.a.database().ref("models/".concat(t)).once("value");case 5:if(a=e.sent,r=a.val().usdz.url,n=this.$refs.container,r){e.next=10;break}return e.abrupt("return");case 10:o=document.createElement("img"),o.style.display="none",o.setAttribute("src",""),o.setAttribute("alt",""),i=document.createElement("a"),i.setAttribute("href",r),i.setAttribute("rel","ar"),i.append(o),n.append(i),i.click();case 20:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},F=$,T=Object(p["a"])(F,O,j,!1,null,null,null),E=T.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("CategoriesList",{attrs:{categories:e.categoriesValues}})],1)},A=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",[a("v-expansion-panel",{staticClass:"mb-4",attrs:{expand:""}},e._l(e.categories,function(t){return a("CategoryListItem",{key:t.key,attrs:{category:t},on:{update:e.updateCategoriesItem,delete:e.confirmCategoryDelete}})}),1),a("v-layout",{staticClass:"px-4",attrs:{row:"","align-center":"","justify-end":""}},[a("v-tooltip",{attrs:{top:""}},[a("template",{slot:"activator"},[a("v-btn",{staticClass:"ma-0",attrs:{color:"green",fab:"",dark:"",small:""},on:{click:e.createCategoriesItem}},[a("v-icon",[e._v("add")])],1)],1),a("span",[e._v("Добавить категорию")])],2)],1),a("v-bottom-sheet",{attrs:{inset:"",persistent:""},model:{value:e.editing,callback:function(t){e.editing=t},expression:"editing"}},[e.editing?a("CategoryEditor",{attrs:{category:e.category},on:{cancel:function(t){e.editing=!1},save:function(t){e.editing=!1}}}):e._e()],1),a("v-dialog",{attrs:{value:e.confirm,width:"300"}},[e.confirm?a("CategoryDelete",{attrs:{category:e.category},on:{confirm:function(t){e.confirm=!1},cancel:function(t){e.confirm=!1}}}):e._e()],1)],1)},N=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel-content",[a("template",{slot:"header"},[a("v-layout",{attrs:{row:"","align-center":""}},[a("v-icon",{staticClass:"mr-2"},[e._v("folder")]),a("h2",{staticClass:"title font-weight-regular ellipsis"},[e._v(e._s(e.category.name))]),a("v-spacer"),a("v-btn",{staticClass:"ma-0",attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.$emit("update",e.category)}}},[a("v-icon",[e._v("edit")])],1),e.deletable?a("v-btn",{staticClass:"ma-0",attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.$emit("delete",e.category)}}},[a("v-icon",{attrs:{color:"red"}},[e._v("delete")])],1):e._e()],1)],1),a("template",{slot:"actions"},[a("v-btn",{staticClass:"ma-0",attrs:{icon:""}},[a("v-icon",[e._v("arrow_drop_down")])],1)],1),a("ModelsList",{attrs:{"category-id":e.category.key}})],2)},U=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",[e._l(e.filteredModels,function(t,r){return a("ModelListItem",{key:t.key,attrs:{"is-odd":!(r%2),model:t},on:{update:e.updateModelsItem,delete:e.confirmModelDelete}})}),a("v-layout",{staticClass:"pl-5 pr-4 py-2",attrs:{row:"","align-center":"","justify-end":""}},[a("v-tooltip",{attrs:{top:""}},[a("template",{slot:"activator"},[a("v-btn",{staticClass:"ma-0",attrs:{icon:""},on:{click:e.createModelsItem}},[a("v-icon",{attrs:{color:"green"}},[e._v("add")])],1)],1),a("span",[e._v("Добавить модель")])],2)],1),a("v-bottom-sheet",{attrs:{inset:"",persistent:""},model:{value:e.editing,callback:function(t){e.editing=t},expression:"editing"}},[e.editing?a("ModelEditor",{attrs:{model:e.model,"category-id":e.categoryId},on:{cancel:function(t){e.editing=!1},save:function(t){e.editing=!1}}}):e._e()],1),a("v-dialog",{attrs:{value:e.confirm,width:"300"}},[e.confirm?a("ModelDelete",{attrs:{model:e.model},on:{confirm:function(t){e.confirm=!1},cancel:function(t){e.confirm=!1}}}):e._e()],1)],2)},Z=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"pl-5 pr-4 py-2",class:{"grey lighten-5":e.isOdd},attrs:{row:"","align-center":""}},[a("v-avatar",{staticClass:"mr-2",attrs:{size:"36"}},[e.model.preview?a("img",{attrs:{src:e.model.preview.url,alt:e.model.name}}):a("v-icon",[e._v("photo")])],1),a("h3",{staticClass:"subheading ellipsis"},[e._v(e._s(e.model.name))]),a("v-spacer"),a("v-btn",{staticClass:"ma-0",attrs:{icon:""},on:{click:function(t){return e.$emit("update",e.model)}}},[a("v-icon",[e._v("edit")])],1),a("v-btn",{staticClass:"ma-0",attrs:{icon:""},on:{click:function(t){return e.$emit("delete",e.model)}}},[a("v-icon",{attrs:{color:"red"}},[e._v("delete")])],1)],1)},Y=[],G={name:"ModelListItem",props:{model:{type:Object,required:!0},isOdd:{type:Boolean,default:!1}}},H=G,K=a("8212"),X=a("8336"),Q=a("132d"),W=a("9910"),ee=Object(p["a"])(H,J,Y,!1,null,null,null),te=ee.exports;h()(ee,{VAvatar:K["a"],VBtn:X["a"],VIcon:Q["a"],VLayout:b["a"],VSpacer:W["a"]});var ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"green"}},[a("v-toolbar-title",[e._v("\n      "+e._s(e.isUpdated?"Редактировать модель "+e.model.name:"Добавить модель")+"\n    ")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:"",disabled:e.loading},on:{click:e.cancel}},[a("v-icon",[e._v("close")])],1)],1),a("v-flex",{attrs:{xs12:"","pa-3":""}},[a("v-text-field",{attrs:{label:"Название модели"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-select",{attrs:{items:e.categoriesValues,"item-value":"key","item-text":"name",label:"Выберите категорию"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),a("Uploader",{attrs:{label:"Выберите модель",accept:".usdz"},on:{file:e.usdzChosen},model:{value:e.usdzName,callback:function(t){e.usdzName=t},expression:"usdzName"}}),a("Uploader",{attrs:{label:"Выберите изображение",accept:"image/*"},on:{file:e.previewChosen},model:{value:e.previewName,callback:function(t){e.previewName=t},expression:"previewName"}}),a("v-btn",{staticClass:"ma-0 mt-4",attrs:{color:"primary",loading:e.loading,disabled:e.loading||!e.valid},on:{click:e.save}},[e._v("\n      Сохранить\n    ")])],1)],1)},re=[],ne=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",[a("v-text-field",{ref:"fileTextField",attrs:{"prepend-icon":"attach_file","single-line":"",readonly:"",label:e.label,required:e.required,disabled:e.disabled},nativeOn:{click:function(t){return e.onFocus(t)}},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),a("input",{ref:"fileInput",attrs:{type:"file",accept:e.accept,multiple:!1,disabled:e.disabled},on:{change:e.onFileChange}})],1)}),oe=[],ie=(a("28a5"),a("75fc")),ce={name:"Uploader",props:{value:{type:String,default:""},accept:{type:String,default:"*"},label:{type:String,default:"Please choose..."},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{filename:this.value}},methods:{onFocus:function(){this.disabled||this.$refs.fileInput.click()},onFileChange:function(e){var t=e.target.files||e.dataTransfer.files,a=t[0];t?t.length>0?this.filename=Object(ie["a"])(t).map(function(e){return e.name}).join(", "):this.filename=null:this.filename=e.target.value.split("\\").pop(),this.$emit("input",this.filename),this.$emit("file",a)}}},se=ce,le=(a("4798"),a("2677")),ue=Object(p["a"])(se,ne,oe,!1,null,"58ef6153",null),de=ue.exports;h()(ue,{VFlex:g["a"],VTextField:le["a"]});var me={name:"ModelEditor",components:{Uploader:de},props:{categoryId:{type:String,required:!0},model:{type:Object,default:null}},data:function(){return{loading:!1,name:this.model?this.model.name:"",category:this.categoryId,usdzName:this.model&&this.model.usdz?this.model.usdz.filename:"",usdz:null,previewName:this.model&&this.model.preview?this.model.preview.filename:"",preview:null}},computed:Object(s["a"])({},Object(l["c"])({categories:function(e){return e.categories}}),{categoriesValues:function(){return Object.values(this.categories)},isUpdated:function(){return!!this.model},valid:function(){return this.name&&this.usdzName},checkUsdzName:function(){return this.model.usdz?this.model.usdz.filename:""},checkPreviewName:function(){return this.model.preview?this.model.preview.filename:""}}),methods:Object(s["a"])({},Object(l["b"])("models",["createModel","updateModel"]),{cancel:function(){this.$emit("cancel")},save:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.persist();case 3:t=e.sent,this.$emit("save",t),this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e={name:this.name,categoryId:this.categoryId,usdzFile:this.usdz,previewFile:this.preview};return this.createModel(e)},update:function(){var e={id:this.model.key,name:this.name===this.model.name?"":this.name,categoryId:this.category===this.model.categoryId?"":this.category,usdzFile:this.usdzName===this.checkUsdzName?null:this.usdz,previewFile:this.previewName===this.checkPreviewName?null:this.preview};return this.updateModel(e)},persist:function(){return this.isUpdated?this.update():this.create()},usdzChosen:function(e){this.usdz=e},previewChosen:function(e){this.preview=e}})},pe=me,fe=a("b56d"),he=a("71d9"),ve=a("2a7f"),ge=Object(p["a"])(pe,ae,re,!1,null,null,null),be=ge.exports;h()(ge,{VBtn:X["a"],VCard:v["a"],VFlex:g["a"],VIcon:Q["a"],VSelect:fe["a"],VSpacer:W["a"],VTextField:le["a"],VToolbar:he["a"],VToolbarTitle:ve["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"red"}},[a("v-toolbar-title",[e._v(" Удалить модель "+e._s(e.model.name)+"? ")])],1),a("v-card-actions",[a("v-btn",{attrs:{icon:"",loading:e.loading,disabled:e.loading},on:{click:e.confirm}},[a("v-icon",[e._v("done")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:"",disabled:e.loading},on:{click:e.cancel}},[a("v-icon",[e._v("close")])],1)],1)],1)},we=[],xe={name:"ModelDelete",props:{model:{type:Object,required:!0}},data:function(){return{loading:!1}},methods:Object(s["a"])({},Object(l["b"])("models",["deleteModel"]),{confirm:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t={id:this.model.key,categoryId:this.model.categoryId,preview:this.model.preview,usdz:this.model.usdz},e.next=4,this.deleteModel(t);case 4:this.$emit("confirm"),this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$emit("cancel")}})},ke=xe,_e=a("99d9"),Oe=Object(p["a"])(ke,ye,we,!1,null,null,null),je=Oe.exports;h()(Oe,{VBtn:X["a"],VCard:v["a"],VCardActions:_e["a"],VIcon:Q["a"],VSpacer:W["a"],VToolbar:he["a"],VToolbarTitle:ve["a"]});var Ie={name:"ModelsList",components:{ModelListItem:te,ModelEditor:be,ModelDelete:je},data:function(){return{editing:!1,model:null,confirm:!1}},props:{categoryId:{type:String,required:!0}},computed:Object(s["a"])({},Object(l["c"])({models:function(e){return e.models}}),{filteredModels:function(){var e=this;return Object.values(this.models).filter(function(t){return t.categoryId===e.categoryId})}}),methods:{createModelsItem:function(){this.model=null,this.editing=!0},updateModelsItem:function(e){this.model=e,this.editing=!0},confirmModelDelete:function(e){this.model=e,this.confirm=!0}}},Ce=Ie,ze=a("288c"),Ve=a("169a"),Me=a("3a2f"),Re=Object(p["a"])(Ce,q,Z,!1,null,null,null),Pe=Re.exports;h()(Re,{VBottomSheet:ze["a"],VBtn:X["a"],VDialog:Ve["a"],VFlex:g["a"],VIcon:Q["a"],VLayout:b["a"],VTooltip:Me["a"]});var Se={name:"CategoryListItem",components:{ModelsList:Pe},props:{category:{type:Object,required:!0}},computed:{deletable:function(){return!this.category.models}}},$e=Se,Fe=a("49e2"),Te=Object(p["a"])($e,B,U,!1,null,null,null),Ee=Te.exports;h()(Te,{VBtn:X["a"],VExpansionPanelContent:Fe["a"],VIcon:Q["a"],VLayout:b["a"],VSpacer:W["a"]});var Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"green"}},[a("v-toolbar-title",[e._v("\n      "+e._s(e.isUpdate?"Редактировать категорию "+e.category.name:"Добавить категорию")+"\n    ")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:"",disabled:e.loading},on:{click:e.cancel}},[a("v-icon",[e._v("close")])],1)],1),a("v-flex",{attrs:{xs12:"","pa-3":""}},[a("v-text-field",{staticClass:"mb-2",attrs:{label:"Название категории"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-btn",{staticClass:"ma-0",attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:e.save}},[e._v("\n      Сохранить\n    ")])],1)],1)},Ae=[],De={name:"CategoryEditor",props:{category:{type:Object,required:!1}},data:function(){return{loading:!1,name:this.category?this.category.name:""}},computed:{isUpdate:function(){return!!this.category}},methods:Object(s["a"])({},Object(l["b"])("categories",["createCategory","updateCategory"]),{cancel:function(){this.$emit("cancel")},save:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.persist();case 3:t=e.sent,this.$emit("save",t),this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e={name:this.name};return this.createCategory(e)},update:function(){var e={id:this.category.key,name:this.name};return this.updateCategory(e)},persist:function(){return this.isUpdate?this.update():this.create()}})},Ne=De,Be=Object(p["a"])(Ne,Le,Ae,!1,null,null,null),Ue=Be.exports;h()(Be,{VBtn:X["a"],VCard:v["a"],VFlex:g["a"],VIcon:Q["a"],VSpacer:W["a"],VTextField:le["a"],VToolbar:he["a"],VToolbarTitle:ve["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"red"}},[a("v-toolbar-title",[e._v("\n      Удалить категорию "+e._s(e.category.name)+"?\n    ")])],1),a("v-card-actions",[a("v-btn",{attrs:{icon:"",loading:e.loading,disabled:e.loading},on:{click:e.confirm}},[a("v-icon",[e._v("done")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:"",disabled:e.loading},on:{click:e.cancel}},[a("v-icon",[e._v("close")])],1)],1)],1)},Ze=[],Je={name:"CategoryDelete",props:{category:{type:Object,required:!0}},data:function(){return{loading:!1}},methods:Object(s["a"])({},Object(l["b"])("categories",["deleteCategory"]),{confirm:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t=this.category.key,a={id:t},e.next=5,this.deleteCategory(a);case 5:this.$emit("confirm"),this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$emit("cancel")}})},Ye=Je,Ge=Object(p["a"])(Ye,qe,Ze,!1,null,null,null),He=Ge.exports;h()(Ge,{VBtn:X["a"],VCard:v["a"],VCardActions:_e["a"],VIcon:Q["a"],VSpacer:W["a"],VToolbar:he["a"],VToolbarTitle:ve["a"]});var Ke={name:"CategoriesList",components:{CategoryListItem:Ee,CategoryEditor:Ue,CategoryDelete:He},props:{categories:{type:Array,required:!0}},data:function(){return{editing:!1,category:null,confirm:!1}},methods:{createCategoriesItem:function(){this.category=null,this.editing=!0},updateCategoriesItem:function(e){this.category=e,this.editing=!0},confirmCategoryDelete:function(e){this.category=e,this.confirm=!0}}},Xe=Ke,Qe=a("cd55"),We=Object(p["a"])(Xe,D,N,!1,null,null,null),et=We.exports;h()(We,{VBottomSheet:ze["a"],VBtn:X["a"],VDialog:Ve["a"],VExpansionPanel:Qe["a"],VFlex:g["a"],VIcon:Q["a"],VLayout:b["a"],VTooltip:Me["a"]});var tt={name:"PageAdmin",components:{CategoriesList:et},mixins:[u],computed:Object(s["a"])({},Object(l["c"])({categories:function(e){return e.categories}}),{categoriesValues:function(){return Object.values(this.categories)}}),created:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchAllCategories();case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(e){return!!e.models&&a.fetchModels({ids:Object.keys(e.models)})}));case 5:this.asyncDataStatus_fetched();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(s["a"])({},Object(l["b"])("categories",["fetchAllCategories"]),Object(l["b"])("models",["fetchModels"]))},at=tt,rt=Object(p["a"])(at,L,A,!1,null,null,null),nt=rt.exports;h()(rt,{VLayout:b["a"]}),r["a"].use(n["a"]);var ot=new n["a"]({mode:"history",routes:[{path:"/",name:"home",component:_},{path:"/model",name:"model",component:E},{path:"/admin",name:"admin",component:nt}]}),it={},ct={setItem:function(e,t){var a=t.item,n=t.id,o=t.resource;a["key"]=n,r["a"].set(e[o],n,a)},deleteItem:function(e,t){var a=t.id,n=t.resource;r["a"].delete(e[n],a)}},st=function(e){return e.slice(2+(e.lastIndexOf(".")-1>>>0))},lt={fetchItem:function(e,t){var a=e.state,r=e.commit,n=t.id,o=t.resource;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var i,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=C.a.database().ref(),c=i.child("".concat(o,"/").concat(n)),e.next=4,c.once("value");case 4:s=e.sent,r("setItem",{resource:o,id:n,item:s.val()}),t(a[o][n]);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},fetchItems:function(e,t){var a=e.dispatch,r=t.ids,n=t.resource;return r=Array.isArray(r)?r:Object.keys(r),Promise.all(r.map(function(e){a("fetchItem",{id:e,resource:n})}))},deleteItem:function(e,t){var a=e.commit,r=t.id,n=t.resource;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=C.a.database().ref(),i=o.child("".concat(n,"/").concat(r)),e.next=4,i.remove();case 4:a("deleteItem",{id:r,resource:n}),t();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},uploadFile:function(e,t){var a=t.file,r=t.id,n=t.resource;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var o,i,c,s,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=C.a.storage().ref(),i=st(a.name),c=o.child("".concat(n,"/").concat(r,".").concat(i)),e.next=5,c.put(a);case 5:return s=e.sent,e.next=8,s.ref.getDownloadURL();case 8:l=e.sent,t({url:l,filename:"".concat(r,".").concat(i)});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},deleteFile:function(e,t){var a=t.resource,r=t.filename;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=C.a.storage().ref(),o=n.child("".concat(a,"/").concat(r)),e.next=4,o.delete();case 4:t();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},ut={namespaced:!0,state:{},actions:{fetchModel:function(e,t){var a=e.dispatch,r=t.id;return a("fetchItem",{resource:"models",id:r},{root:!0})},fetchModels:function(e,t){var a=e.dispatch,r=t.ids;return a("fetchItems",{resource:"models",ids:r},{root:!0})},createModel:function(e,t){var a=e.dispatch,r=e.commit,n=t.name,o=t.categoryId,i=t.usdzFile,s=t.previewFile;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var c,l,u,d,m,p,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=C.a.database().ref(),l=c.child("models"),u=l.push().key,e.next=5,a("uploadFile",{file:i,id:u,resource:"models"},{root:!0});case 5:return d=e.sent,e.next=8,a("uploadFile",{file:s,id:u,resource:"previews"},{root:!0});case 8:return m=e.sent,p={name:n,categoryId:o,usdz:d,preview:m},f={},f["models/".concat(u)]=p,f["categories/".concat(o,"/models/").concat(u)]=u,e.next=15,c.update(f);case 15:r("setItem",{resource:"models",id:u,item:p},{root:!0}),r("categories/appendModelToCategory",{parentId:o,childId:u},{root:!0}),t(p);case 18:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},updateModel:function(e,t){var a=e.state,r=e.commit,n=e.dispatch,o=t.id,i=t.name,l=t.categoryId,u=t.usdzFile,d=t.previewFile;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var c,m,p,f,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(c=C.a.database().ref(),m=a[o],!u){e.next=8;break}return e.next=5,n("uploadFile",{file:u,id:o,resource:"models"},{root:!0});case 5:p=e.sent,e.next=9;break;case 8:p=m.usdz;case 9:if(!d){e.next=15;break}return e.next=12,n("uploadFile",{file:d,id:o,resource:"previews"},{root:!0});case 12:f=e.sent,e.next=16;break;case 15:f=m.preview;case 16:if(h={},!l){e.next=21;break}return e.next=20,c.child("categories/".concat(m.categoryId,"/models/").concat(o)).remove();case 20:h["categories/".concat(l,"/models/").concat(o)]=o;case 21:return h["models/".concat(o)]={name:i||m.name,usdz:p,preview:f,categoryId:l||m.categoryId},e.next=24,c.update(h);case 24:l&&(r("categories/deleteModelFromCategory",{parentId:m.categoryId,childId:o},{root:!0}),r("categories/appendModelToCategory",{parentId:l,childId:o},{root:!0})),r("setItem",{resource:"models",id:o,item:Object(s["a"])({},m,{name:i||m.name,usdz:p,preview:f,categoryId:l||m.categoryId})},{root:!0}),t(a[o]);case 27:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},deleteModel:function(e,t){var a=e.commit,r=e.dispatch,n=t.id,o=t.categoryId,i=t.usdz,s=t.preview;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=C.a.database().ref(),e.next=3,c.child("models/".concat(n)).remove();case 3:return e.next=5,c.child("categories/".concat(o,"/models/").concat(n)).remove();case 5:return e.next=7,r("deleteFile",{resource:"models",filename:i.filename},{root:!0});case 7:return e.next=9,r("deleteFile",{resource:"previews",filename:s.filename},{root:!0});case 9:a("deleteItem",{resource:"models",id:n},{root:!0}),a("categories/deleteModelFromCategory",{parentId:o,childId:n},{root:!0}),t();case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}},dt=function(e){var t=e.child;return function(e,a){var n=a.childId,o=a.parentId,i=e[o];i[t]||r["a"].set(i,t,{}),r["a"].set(i[t],n,n)}},mt=function(e){var t=e.child;return function(e,a){var n=a.childId,o=a.parentId,i=e[o];r["a"].delete(i[t],n),0===Object.keys(i[t]).length&&r["a"].delete(i,t)}},pt={namespaced:!0,state:{},getters:{},mutations:{appendModelToCategory:dt({child:"models"}),deleteModelFromCategory:mt({child:"models"})},actions:{fetchCategory:function(e,t){var a=e.dispatch,r=t.id;return a("fetchItem",{resource:"categories",id:r},{root:!0})},fetchAllCategories:function(e){var t=e.state,a=e.commit;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(r){var n,o,i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=C.a.database().ref(),o=n.child("categories"),e.next=4,o.once("value");case 4:i=e.sent,c=i.val(),Object.keys(c).forEach(function(e){var t=c[e];a("setItem",{resource:"categories",id:e,item:t},{root:!0})}),r(Object.values(t));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},createCategory:function(e,t){var a=e.state,r=e.commit,n=t.name;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var o,i,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=C.a.database().ref(),i=o.child("categories"),c=i.push().key,s={},s["categories/".concat(c)]={name:n},e.next=7,o.update(s);case 7:r("setItem",{resource:"categories",id:c,item:{name:n}},{root:!0}),t(a[c]);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},updateCategory:function(e,t){var a=e.state,r=e.commit,n=t.id,o=t.name;return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var i,c,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=C.a.database().ref(),c=a[n],l={},l["categories/".concat(n)]={name:o},e.next=6,i.update(l);case 6:r("setItem",{resource:"categories",id:n,item:Object(s["a"])({},c,{name:o})},{root:!0}),t(a[n]);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},deleteCategory:function(e,t){var a=e.dispatch,r=t.id;return a("deleteItem",{resource:"categories",id:r},{root:!0})}}};r["a"].use(l["a"]);var ft=new l["a"].Store({state:{},getters:it,mutations:ct,actions:lt,modules:{models:ut,categories:pt}}),ht=(a("66ce"),a("588e"),{apiKey:"AIzaSyCSZCGSYOF0rIdYvOhtfu28ZZ4kReReAXo",authDomain:"ar-promo-gnklv.firebaseapp.com",databaseURL:"https://ar-promo-gnklv.firebaseio.com",projectId:"ar-promo-gnklv",storageBucket:"ar-promo-gnklv.appspot.com",messagingSenderId:"863566271465"});C.a.initializeApp(ht);var vt=a("bb71");a("da64");r["a"].use(vt["a"],{iconfont:"md"});var gt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("v-container",[a("SvgLoader",{directives:[{name:"show",rawName:"v-show",value:!e.showPage,expression:"!showPage"}]}),a("router-view",{directives:[{name:"show",rawName:"v-show",value:e.showPage,expression:"showPage"}],key:e.$route.path,on:{ready:e.pageReady}})],1)],1)],1)},bt=[],yt={name:"App",components:{SvgLoader:S},data:function(){return{showPage:!1}},created:function(){var e=this;this.$router.beforeEach(function(t,a,r){e.showPage=!1,r()})},methods:{pageReady:function(){this.showPage=!0}}},wt=yt,xt=a("7496"),kt=a("a5238"),_t=a("549c"),Ot=Object(p["a"])(wt,gt,bt,!1,null,null,null),jt=Ot.exports;h()(Ot,{VApp:xt["a"],VContainer:kt["a"],VContent:_t["a"]}),r["a"].config.productionTip=!1,new r["a"]({store:ft,router:ot,render:function(e){return e(jt)}}).$mount("#app")},5714:function(e,t,a){},"5e02":function(e,t,a){"use strict";var r=a("5ecc"),n=a.n(r);n.a},"5ecc":function(e,t,a){},b32b:function(e,t,a){"use strict";var r=a("561f"),n=a.n(r);n.a}});