(function(e){function t(t){for(var a,l,s=t[0],i=t[1],c=t[2],d=0,p=[];d<s.length;d++)l=s[d],r[l]&&p.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("59ca"),o=n.n(r),l=(n("66ce"),n("588e"),n("bb71"));n("da64");a["a"].use(l["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("v-container",[n("router-view")],1)],1)],1)},i=[],c={name:"App"},u=c,d=n("2877"),p=n("6544"),f=n.n(p),m=n("7496"),v=n("a523"),g=n("549c"),h=Object(d["a"])(u,s,i,!1,null,null,null);h.options.__file="App.vue";var b=h.exports;f()(h,{VApp:m["a"],VContainer:v["a"],VContent:g["a"]});n("7f7f"),n("96cf");var y=n("1da1"),_=n("be94"),M=(n("f751"),n("2f62"));a["a"].use(M["a"]);var w=new M["a"].Store({state:{models:{},nameNewModel:"",progressUpload:0,isUploading:!1,isUploadEnd:!1,nameDeletedModel:"",isDeleteState:!1},getters:{getModels:function(e){return e.models},getProgressUpload:function(e){return e.progressUpload},getUploading:function(e){return e.isUploading},getUploadEnd:function(e){return e.isUploadEnd},getNameNewModel:function(e){return e.nameNewModel},getNameDeletedModel:function(e){return e.nameDeletedModel},getDeleteState:function(e){return e.isDeleteState}},mutations:{fetchModels:function(e,t){e.models=Object.assign({},Object(_["a"])({},t))},uploadModel:function(e,t){a["a"].set(e.models,t.key,t)},deleteModel:function(e,t){a["a"].delete(e.models,t)},setProgressUpload:function(e,t){e.progressUpload=t},setUploading:function(e,t){e.isUploading=t},setUploadEnd:function(e,t){e.isUploadEnd=t},setNameNewModel:function(e,t){e.nameNewModel=t},setDeleteState:function(e,t){e.isDeleteState=t},setNameDeletedModel:function(e,t){e.nameDeletedModel=t}},actions:{fetchModels:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,o.a.database().ref("models").once("value");case 3:a=e.sent,n("fetchModels",a.val());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),uploadModel:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,l,s,i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,a("setUploadEnd",!1),a("setUploading",!0),r=n.name.slice(0,n.name.lastIndexOf(".usdz")),e.next=6,o.a.database().ref("models").push({name:r});case 6:l=e.sent,s=l.key,i=n.name.slice(n.name.lastIndexOf(".")),c=o.a.storage().ref("models/".concat(s).concat(i)).put(n),c.on("state_changed",function(e){a("setProgressUpload",Math.floor(e.bytesTransferred/e.totalBytes*100))},null,Object(y["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.snapshot.ref.getDownloadURL();case 2:return t=e.sent,n={name:r,key:s,url:t},e.next=6,o.a.database().ref("models").child(s).update({url:t,key:s});case 6:a("setUploadEnd",!0),a("setDeleteState",!1),a("setUploading",!1),a("setProgressUpload",0),a("uploadModel",n),a("setNameNewModel",r);case 12:case"end":return e.stop()}},e,this)})));case 11:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),deleteModel:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,a=t.commit,e.next=3,o.a.database().ref().child("models/".concat(n)).remove();case 3:return e.next=5,o.a.storage().ref().child("models/".concat(n,".usdz")).delete();case 5:a("deleteModel",n),a("setUploadEnd",!1),a("setDeleteState",!0);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}}),O=n("8c4f"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("upload-model",{staticClass:"mb-5"}),n("gallery")],1)},x=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"headline mb-2"},[e._v("\n\t\t\tUpload a 3D-model\n\t\t")]),e.uploading?e._e():n("v-btn",{attrs:{color:"info"},nativeOn:{click:function(t){return e.selectFile(t)}}},[e._v("\n\t\t\tUpload\n\t\t\t"),n("v-icon",{attrs:{right:"","aria-hidden":"true"}},[e._v("backup")])],1),n("input",{ref:"uploadInput",attrs:{id:"files",type:"file",name:"file",accept:".usdz*",multiple:!1},on:{change:function(t){e.detectFiles(t)}}}),e.uploading?n("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:e.progressUpload,color:"primary"}},[e._v(e._s(e.progressUpload)+" %")]):e._e(),n("v-alert",{staticClass:"alert",attrs:{value:e.uploadEnd,dismissible:"",type:"success",transition:"fade-transition"},on:{input:function(t){e.setUploadEnd(!1)}}},[e._v("\n\t\t\t"+e._s(this.fileName)+" was successfully uploaded!\n    ")])],1)},D=[],j=(n("ac6a"),n("5df3"),n("1c4c"),{computed:Object(_["a"])({},Object(M["c"])({progressUpload:"getProgressUpload",fileName:"getNameNewModel",uploading:"getUploading",uploadEnd:"getUploadEnd"})),methods:Object(_["a"])({},Object(M["d"])(["setUploadEnd"]),Object(M["b"])(["uploadModel"]),{selectFile:function(){this.$refs.uploadInput.click()},detectFiles:function(e){var t=this,n=e.target.files||e.dataTransfer.files;Array.from(Array(n.length).keys()).map(function(e){t.uploadModel(n[e])})}})}),S=j,E=(n("9720"),n("0798")),N=n("8336"),A=n("132d"),C=n("490a"),V=Object(d["a"])(S,k,D,!1,null,null,null);V.options.__file="UploadModel.vue";var R=V.exports;f()(V,{VAlert:E["a"],VBtn:N["a"],VIcon:A["a"],VProgressCircular:C["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"headline mb-2"},[e._v("\n    AR Gallery\n  ")]),n("v-layout",{attrs:{wrap:""}},e._l(e.models,function(t){return n("v-flex",{key:t.key,staticClass:"pa-2",attrs:{xs12:"",sm6:"",md3:""}},[n("v-card",[n("v-layout",{attrs:{"justify-space-between":"","align-center":""}},[n("a",{staticClass:"v-btn v-btn--flat v-btn--floating theme--light success--text",attrs:{href:t.url,fab:"",flat:"",rel:"ar"}},[n("img",{staticStyle:{display:"none"},attrs:{src:"",alt:""}}),n("v-icon",{attrs:{color:"success"}},[e._v("open_in_new")])],1),n("h4",{staticClass:"subheading"},[e._v(e._s(t.name))]),n("v-btn",{attrs:{fab:"",flat:"",color:"error"},on:{click:function(n){e.openDeleteModel(t.key)}}},[n("v-icon",[e._v("close")])],1)],1)],1)],1)})),n("v-alert",{staticClass:"alert",attrs:{value:e.isDeleteState,dismissible:"",type:"error",transition:"fade-transition"},on:{input:function(t){e.setDeleteState(!1)}}},[e._v("\n    "+e._s(this.nameModelDeleted)+" was successfully deleted!\n  ")]),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Are you sure to delete "+e._s(e.nameModelDeleted)+"?")]),n("v-card-actions",[n("v-btn",{attrs:{color:"success"},on:{click:function(t){e.deleteModel(e.deleteKey),e.closeDeleteModel()}}},[n("v-icon",[e._v("check")])],1),n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:function(t){e.closeDeleteModel()}}},[n("v-icon",[e._v("close")])],1)],1)],1)],1)],1)},I=[],$={data:function(){return{dialog:!1,deleteKey:""}},computed:Object(_["a"])({},Object(M["c"])({models:"getModels",nameModelDeleted:"getNameDeletedModel",isDeleteState:"getDeleteState"})),created:function(){this.fetchModels()},methods:Object(_["a"])({},Object(M["d"])(["setDeleteState","setNameDeletedModel"]),Object(M["b"])(["fetchModels","deleteModel"]),{openDeleteModel:function(e){this.dialog=!0,this.deleteKey=e,this.setDeleteState(!1),this.setNameDeletedModel(this.models[e].name)},closeDeleteModel:function(){this.dialog=!1}})},z=$,F=(n("7d8a"),n("b0af")),T=n("99d9"),B=n("12b2"),G=n("169a"),K=n("0e8f"),L=n("a722"),Z=n("9910"),J=Object(d["a"])(z,P,I,!1,null,null,null);J.options.__file="Gallery.vue";var Y=J.exports;f()(J,{VAlert:E["a"],VBtn:N["a"],VCard:F["a"],VCardActions:T["a"],VCardTitle:B["a"],VDialog:G["a"],VFlex:K["a"],VIcon:A["a"],VLayout:L["a"],VSpacer:Z["a"]});var q={name:"Home",components:{UploadModel:R,Gallery:Y}},H=q,X=Object(d["a"])(H,U,x,!1,null,null,null);X.options.__file="index.vue";var Q=X.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container"})},ee=[],te={name:"Model",data:function(){return{model:{url:null}}},mounted:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.query.code,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,o.a.database().ref("models/".concat(t)).once("value");case 5:if(n=e.sent,a=n.val().url,a){e.next=9;break}return e.abrupt("return");case 9:r=document.createElement("img"),r.style.display="none",r.setAttribute("src",""),r.setAttribute("alt",""),l=document.createElement("a"),l.setAttribute("href",a),l.setAttribute("rel","ar"),l.append(r),this.$refs.container.append(l),l.click();case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},ne=te,ae=(n("7086"),Object(d["a"])(ne,W,ee,!1,null,"3aa1cc1c",null));ae.options.__file="index.vue";var re=ae.exports;a["a"].use(O["a"]);var oe=new O["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/model",name:"model",component:re}],mode:"history"});a["a"].config.productionTip=!1;var le={apiKey:"AIzaSyCSZCGSYOF0rIdYvOhtfu28ZZ4kReReAXo",authDomain:"ar-promo-gnklv.firebaseapp.com",databaseURL:"https://ar-promo-gnklv.firebaseio.com",projectId:"ar-promo-gnklv",storageBucket:"ar-promo-gnklv.appspot.com",messagingSenderId:"863566271465"};o.a.initializeApp(le),new a["a"]({store:w,router:oe,render:function(e){return e(b)}}).$mount("#app")},7086:function(e,t,n){"use strict";var a=n("a152"),r=n.n(a);r.a},"7d8a":function(e,t,n){"use strict";var a=n("c5f4"),r=n.n(a);r.a},"7ebc":function(e,t,n){},9720:function(e,t,n){"use strict";var a=n("7ebc"),r=n.n(a);r.a},a152:function(e,t,n){},c5f4:function(e,t,n){}});
//# sourceMappingURL=app.22dc2d0a.js.map